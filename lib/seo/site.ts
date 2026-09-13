/**
 * Single source of truth for site-wide identity used by metadata and JSON-LD.
 *
 * The origin is read from `NEXT_PUBLIC_SITE_URL` (same var `lib/cms/urls.ts`
 * uses) so canonical / OG / JSON-LD URLs stay consistent everywhere.
 */

/**
 * The actual brand/entity — use for schema.org `name`, legal-ish references
 * (privacy/terms), authorship, and anywhere the page is identifying WHO is
 * speaking. Never append the keyword here (see SITE_TITLE for that).
 */
export const SITE_NAME = "دار الألوان";
/** Primary SEO/commercial keyword. Kept distinct from SITE_NAME on purpose —
 * schema.org's `alternateName` is where this belongs on Organization/JSON-LD,
 * not stuffed into `name`. Freely used in page titles/copy as a keyword. */
export const SITE_KEYWORD = "صباغ الكويت";
/** Combined brand+keyword display string for human-facing surfaces (page
 * <title>, OpenGraph siteName, WebSite.name) — never for schema `name`. */
export const SITE_TITLE = `${SITE_NAME} | ${SITE_KEYWORD}`;
export const SITE_TAGLINE = "صباغ شاطر ورخيص في جميع مناطق الكويت";

/** E.164 without the leading + for tel: links, and a display form. */
export const PHONE_E164 = "+96590998489";
export const PHONE_DISPLAY = "90998489";
export const WHATSAPP_URL = "https://wa.me/96590998489";

/**
 * Verified business social profiles (mirrors components/layouts/Footer.tsx).
 * Facebook/LinkedIn/YouTube/X were removed 2026-09-13: they pointed at the
 * developer's personal accounts, not the business's. Add real business
 * accounts here (and in Footer.tsx) once they exist.
 */
export const SOCIAL_PROFILES: string[] = [
  "https://www.instagram.com/sabaghelkuwait",
];

/** Absolute site origin, no trailing slash. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://sabaghelkuwait.com";
  return raw.replace(/\/+$/, "");
}

export const SITE_URL = getSiteUrl();

/** Join the site origin with an absolute path (`/foo`), normalising slashes. */
export function absUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = "/" + String(path).replace(/^\/+/, "");
  return clean === "/" ? SITE_URL : `${SITE_URL}${clean.replace(/\/+$/, "")}`;
}

/**
 * Canonical URL for a route. Pass the clean path (`/services/kuwait-paints`);
 * an already-absolute URL is returned untouched (lets CMS-provided canonicals
 * pass straight through).
 */
export function canonical(path = "/"): string {
  return absUrl(path);
}
