// app/sitemap.xml/route.ts
import services from "@/data/services.json";
import regions from "@/data/regions.json";
import allLinks from "@/data/all.json";
import blog from "@/data/blogs.json";

export async function GET() {
  const baseUrl = "https://sabaghinkuwait.com";
  const encodeURL = (url: string) => encodeURI(url);

  const urls = [
    ...["", "الخدمات", "المناطق"].map((slug) => ({
      loc: `${baseUrl}/${slug}`,
      changefreq: "monthly",
      priority: 1.0,
    })),

    ...services.map((s) => ({
      loc: `${baseUrl}${s.slug_ar}/الخدمات`,
      changefreq: "weekly",
      priority: 0.8,
    })),
    ...regions.map((r) => ({
      loc: `${baseUrl}${r.slug.ar}/المناطق`,
      changefreq: "weekly",
      priority: 0.7,
    })),
    ...allLinks.map((l) => ({
      loc: `${baseUrl}/${l.href}`,
      changefreq: "monthly",
      priority: 0.6,
    })),
    ...blog.blogs.map((b) => ({
      loc: `${baseUrl}/${b.id}/المقالات`,
      changefreq: "daily",
      priority: 0.9,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, changefreq, priority }) => `
      <url>
        <loc>${encodeURL(loc)}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
