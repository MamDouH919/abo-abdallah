import type { MetadataRoute } from "next";
import services from "@/data/services.json";
import regions from "@/data/regions.json";
import allLinks from "@/data/all.json";
import blogPosts from "@/data/blog";

const BASE_URL = "https://sabaghelkuwait.com";

// Update these dates whenever the corresponding data files change.
// They are used as lastmod for all pages derived from that data.
const SERVICES_LAST_UPDATED = new Date("2026-03-29");
const REGIONS_LAST_UPDATED = new Date("2026-03-29");
const KEYWORDS_LAST_UPDATED = new Date("2026-05-20");
const BLOG_INDEX_LAST_UPDATED = new Date("2026-05-28");

// Re-generate the sitemap at most once per day in ISR environments.
// On a static export this has no effect.
export const revalidate = 86400;

function u(path: string): string {
  return BASE_URL + encodeURI(path);
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL + "/",
      lastModified: BLOG_INDEX_LAST_UPDATED,
    },
    {
      url: BASE_URL + "/services",
      lastModified: SERVICES_LAST_UPDATED,
    },
    {
      url: BASE_URL + "/regions",
      lastModified: REGIONS_LAST_UPDATED,
    },
    {
      url: BASE_URL + "/blogs",
      lastModified: BLOG_INDEX_LAST_UPDATED,
    },
  ];

  // ── Service pages ───────────────────────────────────────────────────────
  // slug_ar is "/صباغ-الكويت" (includes leading slash), so concatenating with
  // "/services" gives the correct canonical URL.
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: u("/services" + s.slug_en),
    lastModified: SERVICES_LAST_UPDATED,
  }));

  // ── Region pages  /regions/صباغ-السالمية ────────────────────────────────
  const regionPages: MetadataRoute.Sitemap = regions.map((r) => ({
    url: u("/regions" + r.slug.en),
    lastModified: REGIONS_LAST_UPDATED,
  }));

  // ── Keyword landing pages  /sabaagh  /aspagh  etc. ──────────────────────
  // These are English slugs served by app/[id]/page.tsx — no encoding needed.
  const keywordPages: MetadataRoute.Sitemap = allLinks.map((l) => ({
    url: BASE_URL + "/" + l.href,
    lastModified: KEYWORDS_LAST_UPDATED,
  }));

  // ── Blog posts  /blogs/slug ──────────────────────────────────────────────
  // Each post carries a real publication date — use it as lastmod.
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: BASE_URL + "/blogs/" + b.slug,
    lastModified: new Date(b.date),
  }));

  // ── Merge & deduplicate ──────────────────────────────────────────────────
  // allLinks has one duplicate href; dedup prevents invalid sitemaps.
  const all = [
    ...staticPages,
    ...servicePages,
    ...regionPages,
    ...keywordPages,
    ...blogPages,
  ];

  const seen = new Set<string>();
  return all.filter(({ url }) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}
