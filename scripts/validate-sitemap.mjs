#!/usr/bin/env node
/**
 * Sitemap validator for sabaghelkuwait.com
 * ----------------------------------------
 * Static checks (always run, no network):
 *   1. XML parses and uses the sitemaps.org 0.9 namespace
 *   2. every <url> has exactly one non-empty <loc>
 *   3. no duplicate <loc> values
 *   4. every <loc> is an absolute https:// URL on sabaghelkuwait.com
 *   5. no query strings, fragments, or unencoded/illegal characters in <loc>
 *   6. <lastmod>, when present, is a valid W3C datetime and not in the future
 *   7. no <priority> / <changefreq> (we don't use them)
 *
 * Live checks (opt-in with --check-live, needs network):
 *   8. every URL returns HTTP 200 (no redirects)
 *   9. no page is noindex (meta robots or X-Robots-Tag)
 *  10. each page's <link rel="canonical"> points to itself (the sitemap URL)
 *
 * Usage:
 *   node scripts/validate-sitemap.mjs                     # validate ./.next build output, else live URL
 *   node scripts/validate-sitemap.mjs path/to/sitemap.xml
 *   node scripts/validate-sitemap.mjs https://sabaghelkuwait.com/sitemap.xml
 *   node scripts/validate-sitemap.mjs --check-live        # also hit every URL
 *
 * Exit code 0 = clean, 1 = one or more hard failures.
 */

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const HOST = "sabaghelkuwait.com";
const SITE_ORIGIN = `https://${HOST}`;

const args = process.argv.slice(2);
const checkLive = args.includes("--check-live");
const source = args.find((a) => !a.startsWith("--"));

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

/* ------------------------------------------------------------------ */
/* Load the sitemap XML                                                */
/* ------------------------------------------------------------------ */

async function loadXml() {
  const candidates = source
    ? [source]
    : [".next/server/app/sitemap.xml.body", ".next/server/app/sitemap.xml", `${SITE_ORIGIN}/sitemap.xml`];

  for (const c of candidates) {
    if (/^https?:\/\//.test(c)) {
      try {
        const res = await fetch(c, { headers: { "user-agent": "sitemap-validator" } });
        if (!res.ok) {
          fail(`Could not fetch ${c} — HTTP ${res.status}`);
          return null;
        }
        console.log(`· source: ${c}`);
        return await res.text();
      } catch (err) {
        fail(`Could not fetch ${c} — ${err.message}`);
        return null;
      }
    }
    if (existsSync(c)) {
      console.log(`· source: ${c}`);
      return readFile(c, "utf8");
    }
  }
  fail(`No sitemap source found. Tried: ${candidates.join(", ")}`);
  return null;
}

/* ------------------------------------------------------------------ */
/* Static validation                                                   */
/* ------------------------------------------------------------------ */

function staticChecks(xml) {
  if (!xml.includes("http://www.sitemaps.org/schemas/sitemap/0.9")) {
    fail("Missing sitemaps.org 0.9 namespace on <urlset>.");
  }
  if (!/<urlset[\s>]/.test(xml) || !xml.includes("</urlset>")) {
    fail("No well-formed <urlset>…</urlset> wrapper.");
  }

  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  if (urlBlocks.length === 0) {
    fail("Sitemap contains zero <url> entries.");
    return [];
  }

  const openUrl = (xml.match(/<url>/g) || []).length;
  const closeUrl = (xml.match(/<\/url>/g) || []).length;
  if (openUrl !== closeUrl) fail(`Unbalanced <url> tags: ${openUrl} open vs ${closeUrl} close.`);

  if (/<priority>/.test(xml)) warn("<priority> present — not used for ranking, remove it.");
  if (/<changefreq>/.test(xml)) warn("<changefreq> present — ignored by Google, remove it.");

  const seen = new Map();
  const locs = [];
  const now = Date.now();

  urlBlocks.forEach((block, i) => {
    const locMatches = block.match(/<loc>([\s\S]*?)<\/loc>/g) || [];
    if (locMatches.length !== 1) {
      fail(`<url> #${i + 1} has ${locMatches.length} <loc> elements (expected 1).`);
      return;
    }
    const raw = locMatches[0].replace(/<\/?loc>/g, "").trim();
    if (!raw) {
      fail(`<url> #${i + 1} has an empty <loc>.`);
      return;
    }

    // XML-decode the five predefined entities before URL parsing.
    const loc = raw
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");

    if (/[<>"\s]/.test(loc)) fail(`Illegal/unencoded character in <loc>: ${raw}`);

    let parsed;
    try {
      parsed = new URL(loc);
    } catch {
      fail(`<loc> is not an absolute URL: ${raw}`);
      return;
    }
    if (parsed.protocol !== "https:") fail(`<loc> is not https: ${loc}`);
    if (parsed.host !== HOST) fail(`<loc> host is not ${HOST}: ${loc}`);
    if (parsed.search) fail(`<loc> contains a query string: ${loc}`);
    if (parsed.hash) fail(`<loc> contains a fragment: ${loc}`);

    if (seen.has(parsed.href)) {
      fail(`Duplicate <loc>: ${parsed.href} (also at #${seen.get(parsed.href) + 1})`);
    } else {
      seen.set(parsed.href, i);
      locs.push(parsed.href);
    }

    const lastmod = (block.match(/<lastmod>([\s\S]*?)<\/lastmod>/) || [])[1];
    if (lastmod !== undefined) {
      const t = Date.parse(lastmod.trim());
      if (Number.isNaN(t)) fail(`Invalid <lastmod> "${lastmod}" for ${loc}`);
      else if (t > now + 86_400_000) fail(`<lastmod> is in the future ("${lastmod}") for ${loc}`);
    }
  });

  console.log(`· ${urlBlocks.length} <url> entries, ${locs.length} unique <loc>`);
  return locs;
}

/* ------------------------------------------------------------------ */
/* Live validation                                                     */
/* ------------------------------------------------------------------ */

async function liveChecks(locs) {
  const CONCURRENCY = 8;
  let idx = 0;

  async function worker() {
    while (idx < locs.length) {
      const url = locs[idx++];
      try {
        const res = await fetch(url, {
          redirect: "manual",
          headers: { "user-agent": "sitemap-validator" },
        });

        if (res.status !== 200) {
          fail(`${url} → HTTP ${res.status}${res.headers.get("location") ? ` → ${res.headers.get("location")}` : ""}`);
          continue;
        }

        const xRobots = (res.headers.get("x-robots-tag") || "").toLowerCase();
        if (xRobots.includes("noindex")) fail(`${url} → X-Robots-Tag: noindex`);

        const html = await res.text();

        const metaRobots = (html.match(/<meta[^>]+name=["']robots["'][^>]*>/i) || [])[0] || "";
        if (/noindex/i.test(metaRobots)) fail(`${url} → <meta robots> noindex`);

        const canonical = (html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i) || [])[0] || "";
        const href = (canonical.match(/href=["']([^"']+)["']/i) || [])[1];
        if (!href) {
          warn(`${url} → no <link rel="canonical">`);
        } else {
          let normalized;
          try {
            normalized = new URL(href, url).href.replace(/\/$/, "");
          } catch {
            fail(`${url} → unparseable canonical href "${href}"`);
            continue;
          }
          if (normalized !== url.replace(/\/$/, "")) {
            fail(`${url} → canonical points elsewhere: ${href}`);
          }
        }
      } catch (err) {
        fail(`${url} → request failed: ${err.message}`);
      }
    }
  }

  console.log(`· checking ${locs.length} URLs live (concurrency ${CONCURRENCY})…`);
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
}

/* ------------------------------------------------------------------ */
/* Run                                                                 */
/* ------------------------------------------------------------------ */

const xml = await loadXml();
if (xml) {
  const locs = staticChecks(xml);
  if (checkLive && locs.length && errors.length === 0) {
    await liveChecks(locs);
  } else if (checkLive && errors.length) {
    console.log("· skipping live checks — static checks already failed");
  }
}

console.log("");
if (warnings.length) {
  console.log(`⚠  ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`   - ${w}`));
}
if (errors.length) {
  console.log(`✖  ${errors.length} error(s):`);
  errors.forEach((e) => console.log(`   - ${e}`));
  console.log("\nSITEMAP INVALID");
  process.exit(1);
}
console.log("✓  sitemap OK");
