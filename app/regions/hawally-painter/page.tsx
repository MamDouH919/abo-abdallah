import type { Metadata } from "next";
import { Box } from "@mui/material";
import {
  PriceBannerWrapper,
  PriceBannerLink,
  PriceBannerEyebrow,
  PriceBannerTitle,
  PriceBannerSubtitle,
  PriceBannerCta,
} from "@/other-pages/Styled";
import JsonLd from "@/components/articles/JsonLd";
import { getRegionContent } from "@/data/regions-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, faqPageLd, localBusinessLd } from "@/lib/seo/jsonld";
import { canonical } from "@/lib/seo/site";
import { getRegions } from "@/lib/seo/links";
import { getArticles } from "@/lib/cms/articles";
import type { ArticleListItem } from "@/lib/cms/types";
import HawalliView from "./HawalliView";
import {
  AREA,
  FAQS,
  LD_DESCRIPTION,
  META_DESCRIPTION,
  META_TITLE,
  NEARBY_AREA_SLUGS,
  PAGE_LABEL,
  PAGE_PATH,
  PAGE_SLUG,
} from "./content";

// Dedicated static route: it takes precedence over /regions/[id], whose
// generateStaticParams skips this slug. The slug stays in data/regions.json so
// the sitemap, /regions hub and other pages' area links keep resolving to it.

const AREA_IMAGE = "/regions/sabaagh-alkuayt.webp";

export const metadata: Metadata = {
  ...buildMetadata({ title: META_TITLE, description: META_DESCRIPTION, path: PAGE_PATH, image: AREA_IMAGE }),
  // Brand is already in the title — skip the layout's "%s | دار الألوان" template.
  title: { absolute: META_TITLE },
};

/** CMS articles flagged for Hawally or mentioning it in the title. No "latest" fallback. */
async function relatedArticles(): Promise<ArticleListItem[]> {
  try {
    const { articles } = await getArticles({ limit: 24 });
    return articles
      .filter((a) => {
        const anyA = a as ArticleListItem & { targetLocation?: { slug?: string } };
        return anyA.targetLocation?.slug === PAGE_SLUG || a.title.includes(AREA);
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
      localBusinessLd({
        name: PAGE_LABEL,
        description: LD_DESCRIPTION,
        url: PAGE_PATH,
        image: AREA_IMAGE,
        areaName: AREA,
        areaGeo: getRegionContent(PAGE_SLUG)?.geo,
      }),
      breadcrumbLd([
        { name: "الرئيسية", url: "/" },
        { name: "مناطق الخدمة", url: "/regions" },
        { name: PAGE_LABEL, url },
      ]),
      faqPageLd(FAQS),
    ],
  };

  const priceBanner = (
    <PriceBannerWrapper>
      <PriceBannerLink href="/asaar-sabagh-kuwait">
        <Box>
          <PriceBannerEyebrow>دليل الأسعار 2026</PriceBannerEyebrow>
          <PriceBannerTitle>أسعار الصباغة والدهانات في الكويت</PriceBannerTitle>
          <PriceBannerSubtitle>العوامل التي تحدد التكلفة · مقارنة الدهانات</PriceBannerSubtitle>
        </Box>
        <PriceBannerCta>دليل الأسعار ←</PriceBannerCta>
      </PriceBannerLink>
    </PriceBannerWrapper>
  );

  return (
    <>
      <JsonLd data={graph} />
      <Box width="100%">
        <HawalliView
          // Only slug + label are rendered; don't ship the legacy regions.json titles ("أفضل معلم صباغ…").
          nearbyAreas={getRegions(NEARBY_AREA_SLUGS).map(({ slug, label }) => ({ slug, label, title: label }))}
          relatedArticles={articles}
          priceBanner={priceBanner}
        />
      </Box>
    </>
  );
}
