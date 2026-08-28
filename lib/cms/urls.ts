/**
 * Canonical URL helpers for the article section.
 * Route base is `/articles` (see `app/articles`).
 */

export const ARTICLES_BASE_PATH = "/articles";

/** Absolute site origin, no trailing slash. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://sabaghelkuwait.com";
  return raw.replace(/\/+$/, "");
}

export function articlesIndexUrl(): string {
  return `${getSiteUrl()}${ARTICLES_BASE_PATH}`;
}

export function articlePath(slug: string): string {
  return `${ARTICLES_BASE_PATH}/${slug}`;
}

export function articleUrl(slug: string): string {
  return `${getSiteUrl()}${articlePath(slug)}`;
}

/**
 * Canonical URL for an article: CMS-provided value wins, otherwise derived
 * from the site origin. Result is normalized (no trailing slash).
 */
export function resolveCanonical(slug: string, seoCanonical?: string): string {
  const candidate = seoCanonical?.trim();
  if (candidate) {
    try {
      return new URL(candidate).toString().replace(/\/+$/, "");
    } catch {
      /* fall through to generated */
    }
  }
  return articleUrl(slug);
}
