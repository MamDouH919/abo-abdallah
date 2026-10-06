import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box } from "@mui/material";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import services from "@/data/services.json";
import ServicesPage from "@/other-pages/Services";
import JsonLd from "@/components/articles/JsonLd";
import { getServiceContent } from "@/data/services-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, faqPageLd, serviceLd } from "@/lib/seo/jsonld";
import { canonical } from "@/lib/seo/site";
import { getArticles } from "@/lib/cms/articles";
import type { ArticleListItem } from "@/lib/cms/types";
import {
  PriceBannerCard,
  PriceBannerCta,
  PriceBannerEyebrow,
  PriceBannerLink,
  PriceBannerSubtitle,
  PriceBannerTitle,
  PriceBannerWrapper,
} from "./Styled";

export const dynamicParams = false;

function bareSlug(s: string): string {
  return s.replace(/^\/+/, "");
}

// Slugs that stay in data/services.json (sitemap, footer, hub and related-service
// links rely on them) but render from their own static route under app/services/.
const DEDICATED_ROUTES = new Set(["apartment-painter-kuwait", "home-painter-kuwait"]);

export function generateStaticParams() {
  return services
    .map((item) => ({ id: bareSlug(item.slug_en) }))
    .filter(({ id }) => !DEDICATED_ROUTES.has(id));
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

        <PriceBannerWrapper>
          <PriceBannerLink href="/asaar-sabagh-kuwait">
            <PriceBannerCard elevation={0}>
              <Box>
                <PriceBannerEyebrow
                  icon={<DescriptionRoundedIcon fontSize="small" aria-hidden="true" />}
                  label="دليل الأسعار الشامل 2026"
                  size="small"
                />
                <PriceBannerTitle variant="h3">
                  أسعار صباغ الكويت 2026 – جدول كامل
                </PriceBannerTitle>
                <PriceBannerSubtitle variant="body2">
                  {content.label} · مقارنة الدهانات · أسعار حسب المنطقة
                </PriceBannerSubtitle>
              </Box>
              <PriceBannerCta>
                اعرف الأسعار
                <ArrowBackRoundedIcon fontSize="small" aria-hidden="true" />
              </PriceBannerCta>
            </PriceBannerCard>
          </PriceBannerLink>
        </PriceBannerWrapper>
      </Box>
    </>
  );
};

export default Page;
