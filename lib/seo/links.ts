/**
 * Canonical internal-link helpers.
 *
 * The site has three URL layers for local/service intents; `/regions/{slug}`
 * and `/services/{slug}` are the canonical ones. Everything that builds an
 * internal link should go through these helpers so no component re-introduces
 * a link to the deprecated flat `/{slug}` doorway layer.
 */

import regions from "@/data/regions.json";
import services from "@/data/services.json";
import legacyRedirects from "@/data/redirects.json";

/** Strip a leading slash from the slug fragments stored in the data files. */
function bare(slug: string): string {
  return String(slug).replace(/^\/+/, "");
}

export function regionPath(slug: string): string {
  return `/regions/${bare(slug)}`;
}

export function servicePath(slug: string): string {
  return `/services/${bare(slug)}`;
}

export function articlePath(slug: string): string {
  return `/articles/${bare(slug)}`;
}

/* ------------------------------------------------------------------ */
/* Lookups used by templates to resolve related content              */
/* ------------------------------------------------------------------ */

export interface RegionRef {
  slug: string;
  title: string;
  /** Short label — "صباغ حولي" — the title before " | ". */
  label: string;
}

export interface ServiceRef {
  slug: string;
  title: string;
  label: string;
}

const REGION_INDEX: Map<string, RegionRef> = new Map(
  regions.map((r) => {
    const slug = bare(r.slug.en);
    return [
      slug,
      { slug, title: r.title, label: r.title.split(" | ")[0].trim() },
    ] as const;
  }),
);

const SERVICE_INDEX: Map<string, ServiceRef> = new Map([
  ...services.map((s) => {
    const slug = bare(s.slug_en);
    return [
      slug,
      { slug, title: s.title, label: s.title.split(" | ")[0].trim() },
    ] as const;
  }),
  // Dedicated static route (app/services/kuwait-paints), not in services.json.
  [
    "kuwait-paints",
    { slug: "kuwait-paints", title: "صباغة ودهانات الكويت | دار الألوان", label: "صباغة ودهانات الكويت" },
  ] as const,
]);

export function getRegion(slug: string): RegionRef | undefined {
  return REGION_INDEX.get(bare(slug));
}

export function getService(slug: string): ServiceRef | undefined {
  return SERVICE_INDEX.get(bare(slug));
}

export function getRegions(slugs: string[]): RegionRef[] {
  return slugs.map((s) => getRegion(s)).filter((r): r is RegionRef => Boolean(r));
}

export function getServices(slugs: string[]): ServiceRef[] {
  return slugs.map((s) => getService(s)).filter((s): s is ServiceRef => Boolean(s));
}

/**
 * The core commercial services every location page should cross-link to
 * (brief §11 / §28). Order = display order.
 */
export const CORE_SERVICE_SLUGS: string[] = [
  "kuwait-paints",
  "home-painter-kuwait",
  "apartment-painter-kuwait",
  "painting-master-kuwait",
  "decor-painter-kuwait",
  "wallpaper-installation-kuwait",
  "paint-kuwait",
  "cheap-painter-kuwait",
];

/** Filtered to services that actually exist in data/services.json. */
export function coreServices(): ServiceRef[] {
  return getServices(CORE_SERVICE_SLUGS);
}

/* ------------------------------------------------------------------ */
/* Legacy flat-slug → canonical path resolution                       */
/* ------------------------------------------------------------------ */

// Same map that drives the 301s in next.config.mjs. Any component that still
// holds a hard-coded flat `/{slug}` link runs it through here so the anchor
// points at the live canonical page instead of a redirect hop.
const LEGACY_MAP: Map<string, string> = new Map(
  (legacyRedirects as { source: string; destination: string }[]).map((r) => [
    r.source.replace(/^\/+/, ""),
    r.destination,
  ]),
);

/**
 * Resolve a bare legacy slug (`"sabaagh-hawalli"`, `"dihanat-alkuayt"`) or a
 * flat path (`"/sabaagh-hawalli"`) to its canonical route. Unknown input is
 * returned as an absolute `/slug` unchanged (caller decides what to do).
 */
export function resolveCanonicalPath(input: string): string {
  const slug = String(input).replace(/^\/+/, "").replace(/\/+$/, "");
  if (!slug) return "/";
  return LEGACY_MAP.get(slug) ?? `/${slug}`;
}
