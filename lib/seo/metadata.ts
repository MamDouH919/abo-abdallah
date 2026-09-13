/**
 * `buildMetadata` — one funnel every indexable page routes through so that:
 *   - the canonical is always set and always absolute (derived from `path`
 *     unless an explicit `canonicalUrl` is given),
 *   - Open Graph + Twitter are filled from the same title/description/image,
 *   - no two pages can silently share the homepage's title/description.
 *
 * It returns a plain Next `Metadata` object; pages may spread extra fields on
 * top (e.g. `keywords`, `other`).
 */

import type { Metadata } from "next";
import { SITE_TITLE, absUrl, canonical } from "./site";

export interface BuildMetadataInput {
  /** <title> for this page (the layout template appends " | دار الألوان"). */
  title: string;
  description: string;
  /** Clean route path, e.g. "/regions/sabaagh-hawalli". Used for canonical + OG url. */
  path: string;
  /** Absolute or site-relative image; defaults to the logo. */
  image?: string;
  /** OG type — "website" (default) or "article". */
  type?: "website" | "article";
  /** Override the auto-derived canonical (e.g. a CMS-provided canonicalUrl). */
  canonicalUrl?: string;
  robots?: Metadata["robots"];
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  /** OG article section (category name). */
  section?: string;
}

const DEFAULT_IMAGE = "/logo.webp";

export function buildMetadata(input: BuildMetadataInput): Metadata {
  const {
    title,
    description,
    path,
    image = DEFAULT_IMAGE,
    type = "website",
    canonicalUrl,
    robots,
    keywords,
    publishedTime,
    modifiedTime,
    section,
  } = input;

  const url = canonicalUrl?.trim() ? canonicalUrl.trim() : canonical(path);
  const imageUrl = absUrl(image);

  return {
    title,
    description,
    ...(keywords && keywords.length ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: "ar_KW",
      url,
      siteName: SITE_TITLE,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(type === "article"
        ? {
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
            ...(section ? { section } : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
