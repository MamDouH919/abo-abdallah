import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Box } from "@mui/material";
import regions from "@/data/regions.json";
import PainterService, { type NearbyRegion } from "@/other-pages/Regions";
import JsonLd from "@/components/articles/JsonLd";
import { getRegionContent, buildRegionFaqs } from "@/data/regions-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, faqPageLd, localBusinessLd } from "@/lib/seo/jsonld";
import { canonical } from "@/lib/seo/site";
import { getArticles } from "@/lib/cms/articles";
import type { ArticleListItem } from "@/lib/cms/types";

export const dynamicParams = false;

// One real area photo per governorate cluster (files in /public/regions).
const AREA_IMAGE = "/regions/sabaagh-alkuayt.webp";

function bareSlug(s: string): string {
  return s.replace(/^\/+/, "");
}

export async function generateStaticParams() {
  return regions.map((region) => ({ id: bareSlug(region.slug.en) }));
}

function findRegion(id: string) {
  return regions.find((r) => bareSlug(r.slug.en) === id);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const link = findRegion(id);
  const content = getRegionContent(id);
  if (!link || !content) notFound();

  const path = `/regions/${id}`;
  const title = content.metaTitle || link.title;
  const description =
    content.metaDescription ||
    link.description ||
    `صباغ ${content.area} — خدمات دهان الشقق والمنازل والفلل في ${content.area} بأسعار تنافسية ودهانات أصلية. معاينة مجانية على 90998489.`;

  return buildMetadata({
    title,
    description,
    path,
    image: AREA_IMAGE,
    keywords: link.keywords,
  });
}

/**
 * Articles the CMS flags for this area (targetLocation) or that mention it in
 * the title. No fallback to "latest" — an unrelated article list on 80 area
 * pages is a weak signal, so the section simply hides when there is no match.
 */
async function relatedArticlesFor(id: string, area: string): Promise<ArticleListItem[]> {
  try {
    const { articles } = await getArticles({ limit: 24 });
    return articles
      .filter((a) => {
        const anyA = a as ArticleListItem & { targetLocation?: { slug?: string } };
        return anyA.targetLocation?.slug === id || a.title.includes(area);
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const link = findRegion(id);
  const content = getRegionContent(id);
  if (!link || !content) notFound();

  const path = `/regions/${id}`;
  const url = canonical(path);

  const nearbyRegions: NearbyRegion[] = content.nearby
    .map((nSlug) => {
      const c = getRegionContent(nSlug);
      return c ? { slug: bareSlug(nSlug), area: c.area } : null;
    })
    .filter((r): r is NearbyRegion => Boolean(r))
    .slice(0, 8);

  const relatedArticles = await relatedArticlesFor(id, content.area);
  const faqs = buildRegionFaqs(content);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessLd({
        name: `صباغ ${content.area}`,
        description:
          link.description ||
          `خدمات الصباغة والدهانات في ${content.area} — دهان شقق ومنازل وفلل، دهانات داخلية وخارجية، ورق جدران.`,
        url: path,
        image: AREA_IMAGE,
        areaName: content.area,
      }),
      breadcrumbLd([
        { name: "الرئيسية", url: "/" },
        { name: "المناطق", url: "/regions" },
        { name: `صباغ ${content.area}`, url },
      ]),
      faqPageLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <Box width="100%">
        <PainterService
          slug={id}
          content={content}
          nearbyRegions={nearbyRegions}
          relatedArticles={relatedArticles}
        />

        <Box sx={{ maxWidth: 900, mx: "auto", px: 2, my: 4 }}>
          <Link
            href="/asaar-sabagh-kuwait"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(135deg, #0d3b8e 0%, #1565c0 60%, #1e88e5 100%)",
              borderRadius: 12,
              padding: "20px 28px",
              textDecoration: "none",
              gap: 16,
              flexWrap: "wrap",
              boxShadow: "0 4px 16px rgba(21,101,192,.2)",
            }}
          >
            <div>
              <p style={{ color: "#90caf9", fontWeight: 600, fontSize: "0.8rem", margin: "0 0 4px" }}>
                📋 دليل الأسعار الشامل 2026
              </p>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 4px", lineHeight: 1.4 }}>
                أسعار صباغ الكويت 2026 – جدول كامل
              </p>
              <p style={{ color: "#bbdefb", margin: 0, fontSize: "0.85rem" }}>
                أسعار {content.area} · مقارنة الدهانات · 20 سؤالاً شائعاً
              </p>
            </div>
            <span
              style={{
                background: "#fff",
                color: "#1565c0",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "8px 18px",
                borderRadius: 8,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              اعرف الأسعار ←
            </span>
          </Link>
        </Box>
      </Box>
    </>
  );
}
