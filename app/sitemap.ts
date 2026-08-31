import type { MetadataRoute } from "next";
import services from "@/data/services.json";
import regions from "@/data/regions.json";
import allLinks from "@/data/all.json";
import blogPosts from "@/data/blog";
import { getAllArticleSlugs } from "@/lib/cms/articles";
import { ARTICLES_BASE_PATH } from "@/lib/cms/urls";

const BASE_URL = "https://sabaghelkuwait.com";

// Real "meaningful last modification" dates for each content group. Bump the
// relevant constant only when that content actually changes — never to "today"
// just to trigger a recrawl.
const HOME_LAST_UPDATED = new Date("2026-08-29");
const SERVICES_LAST_UPDATED = new Date("2026-03-29");
const REGIONS_LAST_UPDATED = new Date("2026-03-29");
const KEYWORDS_LAST_UPDATED = new Date("2026-05-20");
const BLOG_INDEX_LAST_UPDATED = new Date("2026-05-28");
const LEGAL_LAST_UPDATED = new Date("2026-06-30");

// Re-generate the sitemap at most once per day in ISR environments.
// On a static export this has no effect.
export const revalidate = 86400;

// Hard ceiling on how long the CMS lookup may delay sitemap generation. A slow
// or unreachable CMS must never make /sitemap.xml hang — Google reports that as
// a "temporary processing error". The rest of the sitemap is fully static.
const CMS_SITEMAP_TIMEOUT_MS = 3000;

function u(path: string): string {
  return BASE_URL + encodeURI(path);
}

// Published CMS articles for the /articles section. Isolated + time-boxed so a
// CMS outage or slowdown never breaks or stalls the rest of the sitemap.
async function getArticleSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const load = (async (): Promise<MetadataRoute.Sitemap> => {
    const slugs = await getAllArticleSlugs();
    return slugs.map(({ slug, updatedAt }) => ({
      url: BASE_URL + ARTICLES_BASE_PATH + "/" + slug,
      lastModified: updatedAt ? new Date(updatedAt) : undefined,
    }));
  })();

  const timeout = new Promise<MetadataRoute.Sitemap>((resolve) => {
    setTimeout(() => resolve([]), CMS_SITEMAP_TIMEOUT_MS);
  });

  try {
    return await Promise.race([load, timeout]);
  } catch {
    return [];
  }
}

// Keep only well-formed, on-host, https URLs and drop any duplicate <loc>.
// A malformed or duplicated entry can invalidate the whole sitemap for Google.
function cleanSitemap(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  const out: MetadataRoute.Sitemap = [];

  for (const entry of entries) {
    let parsed: URL;
    try {
      parsed = new URL(entry.url);
    } catch {
      continue;
    }
    if (parsed.protocol !== "https:") continue;
    if (parsed.host !== "sabaghelkuwait.com") continue;
    if (parsed.search || parsed.hash) continue;
    if (seen.has(parsed.href)) continue;
    seen.add(parsed.href);
    out.push({ ...entry, url: parsed.href });
  }

  return out;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articlePages = await getArticleSitemapEntries();

  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL + "/", lastModified: HOME_LAST_UPDATED },
    {
      url: BASE_URL + ARTICLES_BASE_PATH,
      lastModified: articlePages[0]?.lastModified ?? BLOG_INDEX_LAST_UPDATED,
    },
    { url: BASE_URL + "/services", lastModified: SERVICES_LAST_UPDATED },
    { url: BASE_URL + "/regions", lastModified: REGIONS_LAST_UPDATED },
    { url: BASE_URL + "/blogs", lastModified: BLOG_INDEX_LAST_UPDATED },
    { url: BASE_URL + "/asaar-sabagh-kuwait", lastModified: new Date("2026-06-11") },
    { url: BASE_URL + "/sabagh-elkuwait", lastModified: new Date("2026-06-11") },
    { url: BASE_URL + "/sabagh-alkuwait", lastModified: new Date("2026-06-14") },
    { url: BASE_URL + "/sabagh-rakhis", lastModified: new Date("2026-06-14") },
    { url: BASE_URL + "/painter-kuwait-instagram", lastModified: new Date("2026-07-06") },
    { url: BASE_URL + "/about", lastModified: LEGAL_LAST_UPDATED },
    { url: BASE_URL + "/privacy-policy", lastModified: LEGAL_LAST_UPDATED },
    { url: BASE_URL + "/terms-conditions", lastModified: LEGAL_LAST_UPDATED },
  ];

  // ── Service pages  /services/<slug> ────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: u("/services" + s.slug_en),
    lastModified: SERVICES_LAST_UPDATED,
  }));

  // ── Region pages  /regions/<slug> ─────────────────────────────────────────
  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: u("/regions" + r.slug.en),
    lastModified: REGIONS_LAST_UPDATED,
  }));

  // ── Keyword landing pages served by app/[id]/page.tsx ─────────────────────
  // NOTE: pending the canonical-consolidation pass, these still resolve 200 and
  // are self-canonical, so they remain in the sitemap for now.
  const keywordPages: MetadataRoute.Sitemap = allLinks.map((l) => ({
    url: BASE_URL + "/" + l.href,
    lastModified: KEYWORDS_LAST_UPDATED,
  }));

  // ── Blog posts  /blogs/<slug> ────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: BASE_URL + "/blogs/" + b.slug,
    lastModified: new Date(b.date),
  }));

  return cleanSitemap([
    ...staticPages,
    ...servicePages,
    ...regionPages,
    ...keywordPages,
    ...blogPages,
    ...articlePages,
  ]);
}
