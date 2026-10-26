#!/usr/bin/env node
/**
 * SEO verification for sabaghelkuwait.com.
 *
 *   node scripts/seo-verify.mjs [--base URL] [--csv file.csv ...] [--out report.json]
 *
 * --base  Origin to test (default http://localhost:3000). Production URLs in
 *         the sitemap / canonicals are mapped onto it, so the same script
 *         checks a local `next start` or the live site.
 * --csv   Search Console export(s) (Pages → "Not found (404)" / "Page with
 *         redirect"). Any column holding a sabaghelkuwait.com URL is used.
 *
 * Checks:
 *   1. Every legacy URL (data/redirects.json sources + the required mapping
 *      below + CSV rows): status, final URL, hop count. Expected: a single
 *      301/308 to a 200 page (or 200 directly if the URL is itself live).
 *   2. Every sitemap URL: 200 with no redirect, self-referencing canonical,
 *      exactly one <h1>, <html lang="ar" dir="rtl">, title/description lengths,
 *      body word count.
 *   3. Duplicate <title> / meta description across sitemap pages.
 *   4. Internal links (and og:image files) on sitemap pages that redirect or
 *      don't return 200.
 *   5. Unknown URLs return a real 404.
 * Exits 1 when any hard check fails.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PROD = "https://sabaghelkuwait.com";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const BASE = opt("--base", "http://localhost:3000").replace(/\/+$/, "");
const OUT = opt("--out", null);
const CSVS = args.flatMap((a, i) => (args[i - 1] === "--csv" ? [a] : []));

/** Old URL → expected final path, from the brief. Checked on top of redirects.json. */
const REQUIRED = {
  "/sabaagh-hawalli": "/regions/hawally-painter",
  "/regions/sabaagh-hawalli": "/regions/hawally-painter",
  "/sabaagh-alrawdah": "/regions/sabaagh-alrawdah",
  "/sabaagh-alshamiya": "/regions/sabaagh-alshamiya",
  "/sabaagh-alqrean": "/regions/sabaagh-alqurain",
  "/sabaagh-elzahr": "/regions/sabaagh-alzahraa",
  "/sabaagh-alzahraa": "/regions/sabaagh-alzahraa",
  "/sabaagh-alsulaybikhat": "/regions/sabaagh-alsulaybikhat",
  "/sabaagh-alshuhadaa": "/regions/sabaagh-alshuhadaa",
  "/sabaagh-alwafra": "/regions/sabaagh-alwafra",
  "/sabaagh-alaardiya": "/regions/sabaagh-alaardiya",
  "/sabaagh-alqadesiya": "/regions/sabaagh-alqadesiya",
  "/sabaagh-alshaab": "/regions/sabaagh-alshaab",
  "/sabaagh-alfirdous": "/regions/sabaagh-alfirdous",
  "/sabaagh-alfardous": "/regions/sabaagh-alfirdous",
  "/sabaagh-alfardus": "/regions/sabaagh-alfirdous",
  "/sabaagh-sabah-alahmad": "/regions/sabaagh-sabah-alahmad",
  "/sabaagh-sabah-al-ahmad": "/regions/sabaagh-sabah-alahmad",
  "/sabaagh-bayan": "/regions/sabaagh-bayan",
  "/sabaagh-alsalmiya": "/regions/sabaagh-alsaalimia",
  "/sabaagh-aljahraa": "/regions/sabaagh-aljahraa",
  "/services/painter": "/services/home-painter-kuwait",
  "/sabagh-alkuwait": "/",
  "/sabaagh": "/",
  "/aspagh": "/services/kuwait-paints",
  "/aisbgh-alkuayt": "/services/kuwait-paints",
  "/blogs": "/articles",
  "/blogs/sabagh-hendy": "/articles/sabagh-hendy",
  // generic fallbacks
  "/sabaagh-some-unknown-area": "/regions",
  "/regions/sabaagh-some-unknown-area": "/regions",
};

const MUST_404 = ["/this-page-does-not-exist", "/regions/not-a-region", "/services/not-a-service", "/articles/not-an-article"];

/* ------------------------------------------------------------------ */

const toLocal = (u) => {
  const s = String(u).trim();
  if (s.startsWith(PROD)) return BASE + s.slice(PROD.length);
  if (s.startsWith("https://www.sabaghelkuwait.com")) return BASE + s.slice("https://www.sabaghelkuwait.com".length);
  if (s.startsWith("/")) return BASE + s;
  return s;
};
const pathOf = (u) => {
  try {
    const x = new URL(u, BASE);
    return decodeURI(x.pathname).replace(/(.)\/+$/, "$1") + x.search;
  } catch {
    return u;
  }
};

async function fetchManual(url) {
  const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "seo-verify/1.0 (Googlebot-compatible check)" } });
  return res;
}

/** Follow redirects by hand; returns { chain: [{url,status}], final }. */
async function trace(url, max = 10) {
  const chain = [];
  let current = url;
  for (let i = 0; i <= max; i++) {
    const res = await fetchManual(current);
    chain.push({ url: current, status: res.status });
    const loc = res.headers.get("location");
    if (res.status >= 300 && res.status < 400 && loc) {
      current = toLocal(new URL(loc, current).href);
      continue;
    }
    const body = res.status === 200 ? await res.text() : "";
    return { chain, final: { url: current, status: res.status, body } };
  }
  return { chain, final: { url: current, status: 0, body: "" }, loop: true };
}

async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const k = i++;
        out[k] = await fn(items[k], k);
      }
    }),
  );
  return out;
}

/* ------------------------------------------------------------------ */
/* HTML helpers                                                       */
/* ------------------------------------------------------------------ */

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"));
  return m ? decode(m[1]) : null;
};
const findTag = (html, re) => (html.match(re) || [])[0] || "";

function inspect(html) {
  const head = html.split(/<\/head>/i)[0];
  const title = decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "").trim();
  const desc = attr(findTag(head, /<meta[^>]+name=["']description["'][^>]*>/i), "content") || "";
  const canonical = attr(findTag(head, /<link[^>]+rel=["']canonical["'][^>]*>/i), "href") || "";
  const htmlTag = findTag(html, /<html[^>]*>/i);
  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  const robots = attr(findTag(head, /<meta[^>]+name=["']robots["'][^>]*>/i), "content") || "";
  const ogImage = attr(findTag(head, /<meta[^>]+property=["']og:image["'][^>]*>/i), "content") || "";
  const body = html
    .replace(/<head[\s\S]*?<\/head>/i, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<(header|nav|footer)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const words = decode(body).split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  const links = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"'#]+)[^"']*["']/gi)].map((m) => decode(m[1]));
  return {
    title,
    desc,
    canonical,
    lang: attr(htmlTag, "lang"),
    dir: attr(htmlTag, "dir"),
    h1s,
    robots,
    words,
    links: ogImage ? [...links, ogImage] : links,
  };
}

/* ------------------------------------------------------------------ */
/* Inputs                                                             */
/* ------------------------------------------------------------------ */

function legacyUrls() {
  const reds = JSON.parse(readFileSync(join(ROOT, "data/redirects.json"), "utf8"));
  const map = new Map();
  for (const r of reds) map.set(r.source, r.destination);
  for (const [k, v] of Object.entries(REQUIRED)) map.set(k, v);
  return map;
}

function csvUrls(file) {
  const text = readFileSync(file, "utf8");
  const out = new Set();
  for (const m of text.matchAll(/https?:\/\/(?:www\.)?sabaghelkuwait\.com[^\s,"']*/g)) {
    out.add(pathOf(m[0]));
  }
  return [...out];
}

/* ------------------------------------------------------------------ */

const report = { base: BASE, legacy: [], sitemap: [], duplicates: {}, badLinks: [], notFound: [] };
let failures = 0;
const fail = (msg) => {
  failures++;
  console.log("  ✗ " + msg);
};

async function checkLegacy() {
  const map = legacyUrls();
  for (const file of CSVS) for (const p of csvUrls(file)) if (!map.has(p)) map.set(p, null);
  const entries = [...map.entries()].filter(([src]) => !src.startsWith("/Images/") && !src.startsWith("/gallery/"));
  console.log(`\n━━ 1. Legacy URLs (${entries.length}) ━━`);
  console.log("status  hops  old URL  →  final URL");
  const rows = await pool(entries, 8, async ([src, expected]) => {
    const t = await trace(toLocal(src));
    const first = t.chain[0].status;
    const hops = t.chain.length - 1;
    const finalPath = pathOf(t.final.url);
    let ok;
    if (hops === 0) ok = t.final.status === 200 && expected === null; // live URL from the CSV
    else ok = hops === 1 && (first === 301 || first === 308) && t.final.status === 200 && (!expected || finalPath === expected);
    return { src, expected, first, hops, finalPath, finalStatus: t.final.status, ok };
  });
  for (const r of rows) {
    const line = `${String(r.first).padEnd(6)}  ${String(r.hops).padEnd(4)}  ${r.src}  →  ${r.finalPath} [${r.finalStatus}]`;
    console.log((r.ok ? "  ✓ " : "  ✗ ") + line + (r.ok || !r.expected ? "" : `   (expected ${r.expected})`));
    if (!r.ok) failures++;
  }
  report.legacy = rows;
  const bad = rows.filter((r) => !r.ok).length;
  console.log(`→ ${rows.length - bad}/${rows.length} OK`);
}

async function checkSitemap() {
  const xml = await (await fetch(BASE + "/sitemap.xml")).text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  console.log(`\n━━ 2. Sitemap URLs (${locs.length}) ━━`);
  const pages = await pool(locs, 6, async (loc) => {
    const res = await fetchManual(toLocal(loc));
    const html = res.status === 200 ? await res.text() : "";
    return { loc, status: res.status, ...(html ? inspect(html) : {}) };
  });
  for (const p of pages) {
    const issues = [];
    if (p.status !== 200) issues.push(`status ${p.status}`);
    else {
      const norm = (u) => decodeURI(String(u)).replace(/\/+$/, "");
      if (norm(p.canonical) !== norm(p.loc)) issues.push(`canonical=${p.canonical || "(none)"}`);
      if (p.h1s !== 1) issues.push(`${p.h1s} <h1>`);
      if (p.lang !== "ar" || p.dir !== "rtl") issues.push(`html lang=${p.lang} dir=${p.dir}`);
      if (/noindex/i.test(p.robots)) issues.push("noindex in sitemap");
      if (!p.title) issues.push("no <title>");
      if (!p.desc) issues.push("no description");
    }
    const warn = [];
    if (p.title && p.title.length > 60) warn.push(`title ${p.title.length}ch`);
    if (p.desc && p.desc.length > 155) warn.push(`desc ${p.desc.length}ch`);
    const tag = issues.length ? "  ✗ " : "  ✓ ";
    console.log(`${tag}${pathOf(p.loc).padEnd(42)} h1=${p.h1s ?? "-"} words=${String(p.words ?? "-").padEnd(5)} ${issues.join("; ")}${warn.length ? "  ⚠ " + warn.join(", ") : ""}`);
    if (issues.length) failures++;
  }
  report.sitemap = pages.map(({ links, ...rest }) => rest);
  return pages;
}

function checkDuplicates(pages) {
  console.log(`\n━━ 3. Duplicate titles / descriptions ━━`);
  for (const field of ["title", "desc"]) {
    const by = new Map();
    for (const p of pages) if (p[field]) by.set(p[field], [...(by.get(p[field]) || []), pathOf(p.loc)]);
    const dups = [...by.entries()].filter(([, v]) => v.length > 1);
    report.duplicates[field] = dups;
    if (!dups.length) console.log(`  ✓ no duplicate ${field === "desc" ? "descriptions" : "titles"}`);
    for (const [val, urls] of dups) fail(`duplicate ${field}: "${val}" on ${urls.join(", ")}`);
  }
}

async function checkInternalLinks(pages) {
  const sources = new Map();
  for (const p of pages) {
    for (const href of p.links || []) {
      if (/^(tel:|mailto:|https?:\/\/(?!(www\.)?sabaghelkuwait\.com))/i.test(href)) continue;
      if (/^https?:\/\/(localhost|127\.)/.test(href) && !href.startsWith(BASE)) continue;
      const path = pathOf(href.startsWith("http") ? href.replace(/^https?:\/\/(www\.)?sabaghelkuwait\.com/, "") || "/" : href);
      if (!path.startsWith("/") || path.startsWith("/_next/")) continue;
      sources.set(path, [...(sources.get(path) || []), pathOf(p.loc)]);
    }
  }
  const targets = [...sources.keys()];
  console.log(`\n━━ 4. Internal links (${targets.length} unique targets) ━━`);
  const res = await pool(targets, 8, async (path) => {
    const r = await fetchManual(BASE + encodeURI(path));
    return { path, status: r.status, location: r.headers.get("location") };
  });
  const bad = res.filter((r) => r.status !== 200);
  for (const b of bad) {
    const from = [...new Set(sources.get(b.path))];
    fail(`${b.path} → ${b.status}${b.location ? " " + pathOf(b.location) : ""}  (linked from ${from.slice(0, 4).join(", ")}${from.length > 4 ? ` +${from.length - 4}` : ""})`);
  }
  if (!bad.length) console.log("  ✓ every internal link returns 200 directly");
  report.badLinks = bad.map((b) => ({ ...b, from: [...new Set(sources.get(b.path))] }));
}

async function checkNotFound() {
  console.log(`\n━━ 5. Unknown URLs must 404 ━━`);
  for (const p of MUST_404) {
    const r = await fetchManual(BASE + p);
    report.notFound.push({ path: p, status: r.status });
    if (r.status === 404) console.log(`  ✓ ${p} → 404`);
    else fail(`${p} → ${r.status} (expected 404)`);
  }
}

await checkLegacy();
const pages = await checkSitemap();
checkDuplicates(pages);
await checkInternalLinks(pages);
await checkNotFound();

if (OUT) writeFileSync(OUT, JSON.stringify(report, null, 2));
console.log(`\n${failures ? `✗ ${failures} problem(s)` : "✓ all checks passed"}`);
if (!CSVS.length) console.log("ℹ No Search Console CSV given — pass --csv <export.csv> to include those URLs.");
process.exit(failures ? 1 : 0);
