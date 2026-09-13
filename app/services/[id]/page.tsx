import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Box } from "@mui/material";
import services from "@/data/services.json";
import ServicesPage from "@/other-pages/Services";
import JsonLd from "@/components/articles/JsonLd";
import { getServiceContent } from "@/data/services-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, faqPageLd, serviceLd } from "@/lib/seo/jsonld";
import { canonical } from "@/lib/seo/site";
import { getArticles } from "@/lib/cms/articles";
import type { ArticleListItem } from "@/lib/cms/types";

export const dynamicParams = false;

function bareSlug(s: string): string {
  return s.replace(/^\/+/, "");
}

export function generateStaticParams() {
  return services.map((item) => ({ id: bareSlug(item.slug_en) }));
}

function findService(id: string) {
  return services.find((s) => bareSlug(s.slug_en) === id);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const link = findService(id);
  const content = getServiceContent(id);
  if (!link || !content) notFound();

  return buildMetadata({
    title: content.metaTitle || link.title,
    description:
      content.metaDescription ||
      link.description ||
      `${content.label} — خدمة احترافية في جميع مناطق الكويت بدهانات أصلية وأسعار تنافسية. معاينة مجانية على 90998489.`,
    path: `/services/${id}`,
    image: link.image || "/logo.webp",
    keywords: link.keywords,
  });
}

/** Articles the CMS flags for this service (targetService) or that name it in
 *  the title. No "latest" fallback — the section hides when nothing matches. */
async function relatedArticlesFor(id: string, label: string): Promise<ArticleListItem[]> {
  try {
    const { articles } = await getArticles({ limit: 24 });
    return articles
      .filter((a) => {
        const anyA = a as ArticleListItem & { targetService?: { slug?: string } };
        return anyA.targetService?.slug === id || a.title.includes(label);
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const link = findService(id);
  const content = getServiceContent(id);
  if (!link || !content) notFound();

  const path = `/services/${id}`;
  const url = canonical(path);
  const relatedArticles = await relatedArticlesFor(id, content.label);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      serviceLd({
        name: link.title,
        description:
          link.description ||
          `${content.label} في الكويت — ${content.serviceType} بدهانات أصلية وضمان على العمل.`,
        url: path,
        image: link.image,
        serviceType: content.serviceType,
      }),
      breadcrumbLd([
        { name: "الرئيسية", url: "/" },
        { name: "الخدمات", url: "/services" },
        { name: content.label, url },
      ]),
      faqPageLd(content.faq.map((f) => ({ q: f.q, a: f.a }))),
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <Box width="100%">
        <ServicesPage slug={id} title={link.title} content={content} relatedArticles={relatedArticles} />

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
                {content.label} · مقارنة الدهانات · أسعار حسب المنطقة
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
};

export default Page;
