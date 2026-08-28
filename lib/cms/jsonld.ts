/**
 * Structured-data builders for the article section.
 * Company / publisher info is the real data already used in app/layout.tsx.
 */

import type { Article } from "./types";
import { getSiteUrl, resolveCanonical, articlesIndexUrl } from "./urls";

const ORG_NAME = "صباغ الكويت";
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
