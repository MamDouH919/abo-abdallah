#!/usr/bin/env node
/**
 * IndexNow submitter for sabaghelkuwait.com
 * ------------------------------------------
 * The key file (public/<key>.txt) has been hosted since before this script
 * existed, but nothing ever called the IndexNow API — Bing/Yandex/etc. only
 * ever discovered changes on their own crawl schedule. This reads the live
 * sitemap and submits every URL in one batch call.
 *
 * Run manually after a deploy that changes URLs (new/removed/redirected
 * pages), or wire it into CI as a post-deploy step:
 *   npm run indexnow
 *
 * Not run automatically on every `next build` — it makes a real outbound
 * call to a third party and should only fire for an actual production
 * deploy, not a local build.
 */

const HOST = "sabaghelkuwait.com";
const SITE_ORIGIN = `https://${HOST}`;
const KEY = "jh8jus6kc71rrh84ztd12e33b7yveuyp";
const KEY_LOCATION = `${SITE_ORIGIN}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

async function loadSitemapUrls() {
  const res = await fetch(`${SITE_ORIGIN}/sitemap.xml`, {
    headers: { "user-agent": "indexnow-ping" },
  });
  if (!res.ok) throw new Error(`Could not fetch sitemap.xml — HTTP ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map((m) =>
    m[1]
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .trim()
  );
  if (locs.length === 0) throw new Error("Sitemap has zero <loc> entries — refusing to submit nothing.");
  return locs;
}

async function submit(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  // IndexNow returns 200/202 on success, 400/403/422/429 on various failures.
  console.log(`IndexNow responded ${res.status} ${res.statusText}`);
  if (![200, 202].includes(res.status)) {
    const text = await res.text().catch(() => "");
    throw new Error(`IndexNow submission failed: ${res.status} ${text}`);
  }
}

const urls = await loadSitemapUrls();
console.log(`Submitting ${urls.length} URLs to IndexNow for ${HOST} …`);
await submit(urls);
console.log("Done.");
