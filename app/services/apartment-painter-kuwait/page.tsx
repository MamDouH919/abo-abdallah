import type { Metadata } from "next";
import Box from "@mui/material/Box";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import JsonLd from "@/components/articles/JsonLd";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, faqPageLd, serviceLd } from "@/lib/seo/jsonld";
import { canonical } from "@/lib/seo/site";
import { getRegions } from "@/lib/seo/links";
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
} from "../[id]/Styled";
import ApartmentView from "./ApartmentView";
import {
  AREA_SLUGS,
  FAQS,
  META_DESCRIPTION,
  META_TITLE,
  OG_IMAGE,
  PAGE_LABEL,
  PAGE_PATH,
  PAGE_SLUG,
} from "./content";

// Dedicated static route: it takes precedence over /services/[id]. Unlike
// kuwait-paints, the slug STAYS in data/services.json (sitemap, footer, /services
// hub and related-service links depend on it); app/services/[id]/page.tsx skips
// it via DEDICATED_ROUTES instead.

export const metadata: Metadata = {
  ...buildMetadata({ title: META_TITLE, description: META_DESCRIPTION, path: PAGE_PATH, image: OG_IMAGE }),
  // Brand is already in the title — skip the layout's "%s | دار الألوان" template.
  title: { absolute: META_TITLE },
};

/** CMS articles flagged for this service or about apartment painting. */
async function relatedArticles(): Promise<ArticleListItem[]> {
  try {
    const { articles } = await getArticles({ limit: 24 });
    return articles
      .filter((a) => {
        const anyA = a as ArticleListItem & { targetService?: { slug?: string } };
        return anyA.targetService?.slug === PAGE_SLUG || a.title.includes("شقق") || a.title.includes("شقة");
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

export default async function Page() {
  const url = canonical(PAGE_PATH);
  const articles = await relatedArticles();
  // Only slug + label reach the client — the regions' own <title> strings
  // ("... | أفضل معلم صباغ ...") would otherwise be serialized into this page.
  const areas = getRegions(AREA_SLUGS).map(({ slug, label }) => ({ slug, label, title: label }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      serviceLd({
        name: PAGE_LABEL,
        description: META_DESCRIPTION,
        url: PAGE_PATH,
        image: OG_IMAGE,
        serviceType: "صباغة ودهان الشقق",
      }),
      breadcrumbLd([
        { name: "الرئيسية", url: "/" },
        { name: "الخدمات", url: "/services" },
        { name: PAGE_LABEL, url },
      ]),
      faqPageLd(FAQS),
    ],
  };

  const priceBanner = (
    <PriceBannerWrapper>
      <PriceBannerLink href="/asaar-sabagh-kuwait">
        <PriceBannerCard elevation={0}>
          <Box>
            <PriceBannerEyebrow
              icon={<DescriptionRoundedIcon fontSize="small" aria-hidden="true" />}
              label="دليل الأسعار 2026"
              size="small"
            />
            <PriceBannerTitle as="p" variant="h3">
              تكلفة صباغة الشقة في الكويت
            </PriceBannerTitle>
            <PriceBannerSubtitle variant="body2">
              العوامل التي تحدد التكلفة · مقارنة الدهانات · أسعار حسب المنطقة
            </PriceBannerSubtitle>
          </Box>
          <PriceBannerCta>
            دليل الأسعار
            <ArrowBackRoundedIcon fontSize="small" aria-hidden="true" />
          </PriceBannerCta>
        </PriceBannerCard>
      </PriceBannerLink>
    </PriceBannerWrapper>
  );

  return (
    <>
      <JsonLd data={graph} />
      <Box width="100%">
        <ApartmentView areas={areas} relatedArticles={articles} priceBanner={priceBanner} />
      </Box>
    </>
  );
}
