/**
 * Structured-data builders for the article section.
 * Company / publisher info is the real data already used in app/layout.tsx.
 */

import type { Article } from "./types";
import { getSiteUrl, resolveCanonical, articlesIndexUrl } from "./urls";
import { SITE_NAME } from "../seo/site";

// Was a locally hardcoded "صباغ الكويت" — the exact kind of drift that left
// article bylines naming a third, different entity than the schema/footer.
// Import the single source of truth instead of redeclaring it here.
const ORG_NAME = SITE_NAME;
const ORG_LOGO = "/logo.webp";

export interface Crumb {
  name: string;
  url: string;
}

export function buildBreadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function buildArticleJsonLd(article: Article) {
  const site = getSiteUrl();
  const canonical = resolveCanonical(article.slug, article.seo.canonicalUrl);

  const images: string[] = [];
  if (article.seo.ogImage) images.push(article.seo.ogImage);
  if (article.featuredImage?.url) images.push(article.featuredImage.url);
  for (const block of article.contentBlocks) {
    if (block.type === "image" && block.url) images.push(block.url);
  }

  const keywords = Array.from(
    new Set(
      [
        article.primaryKeyword,
        ...(article.secondaryKeywords ?? []),
        ...(article.tags ?? []),
      ].filter((k): k is string => Boolean(k && k.trim())),
    ),
  );

  // `about` / `mentions` point at the location / service the article targets,
  // when the CMS provides them.
  const about: Record<string, unknown>[] = [];
  if (article.targetLocation?.slug) {
    about.push({
      "@type": "Place",
      name: article.targetLocation.name,
      url: `${site}/regions/${article.targetLocation.slug}`,
    });
  }
  if (article.targetService?.slug) {
    about.push({
      "@type": "Service",
      name: article.targetService.name,
      url: `${site}/services/${article.targetService.slug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.seo.metaTitle || article.title,
    description: article.seo.metaDescription || article.excerpt || undefined,
    image: images.length > 0 ? Array.from(new Set(images)) : undefined,
    datePublished: article.publishedAt || undefined,
    dateModified: article.updatedAt || article.publishedAt || undefined,
    inLanguage: "ar",
    articleSection: article.category?.name || undefined,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,
    about: about.length > 0 ? about : undefined,
    author: {
      "@type": "Organization",
      name: ORG_NAME,
      url: site,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${site}${ORG_LOGO}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    url: canonical,
  };
}

export function articlesListCrumbs(): Crumb[] {
  return [
    { name: "الرئيسية", url: getSiteUrl() },
    { name: "المقالات", url: articlesIndexUrl() },
  ];
}
