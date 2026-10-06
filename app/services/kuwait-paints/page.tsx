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
import KuwaitPaintsView from "./KuwaitPaintsView";
import { AREA_SLUGS, FAQS, META_DESCRIPTION, META_TITLE, PAGE_LABEL, PAGE_PATH } from "./content";

// Dedicated static route: it takes precedence over /services/[id], and the
// slug is intentionally NOT in data/services.json (re-adding it there would
// make the generic template compete for the same path).

export const metadata: Metadata = {
  ...buildMetadata({ title: META_TITLE, description: META_DESCRIPTION, path: PAGE_PATH }),
  // Brand is already in the title — skip the layout's "%s | دار الألوان" template.
  title: { absolute: META_TITLE },
};

/** CMS articles flagged for this service or about painting services in general. */
async function relatedArticles(): Promise<ArticleListItem[]> {
  try {
    const { articles } = await getArticles({ limit: 24 });
    return articles
      .filter((a) => {
        const anyA = a as ArticleListItem & { targetService?: { slug?: string } };
        return anyA.targetService?.slug === "kuwait-paints" || a.title.includes("الدهانات");
      })
      .slice(0, 3);
  } catch {
    return [];
  }
}

export default async function Page() {
  const url = canonical(PAGE_PATH);
  const articles = await relatedArticles();

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      serviceLd({
        name: PAGE_LABEL,
        description: META_DESCRIPTION,
        url: PAGE_PATH,
        serviceType: "خدمات صباغة ودهانات",
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
              أسعار الصباغة والدهانات في الكويت
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
        <KuwaitPaintsView areas={getRegions(AREA_SLUGS)} relatedArticles={articles} priceBanner={priceBanner} />
      </Box>
    </>
  );
}
