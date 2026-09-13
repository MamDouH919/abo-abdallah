/**
 * Structured-data builders. Every function returns a plain object that a page
 * renders through `components/articles/JsonLd.tsx`. Nothing here fabricates
 * ratings, reviews, prices, addresses or hours — only data the business has
 * actually provided.
 */

import {
  SITE_NAME,
  SITE_KEYWORD,
  SITE_TITLE,
  SITE_TAGLINE,
  SITE_URL,
  PHONE_E164,
  SOCIAL_PROFILES,
  absUrl,
} from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO = absUrl("/logo.webp");

export interface Crumb {
  name: string;
  /** Absolute or site-relative URL. Omit on the current (last) crumb. */
  url?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/* ------------------------------------------------------------------ */
/* Site-wide entities (emitted once, from app/layout.tsx)             */
/* ------------------------------------------------------------------ */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    // The brand's actual name is "دار الألوان" (Dar Al Alwan); "صباغ الكويت"
    // is the commercial keyword/trade term it's known by — schema.org's
    // alternateName is the correct field for that, not a second name jammed
    // into `name`.
    alternateName: SITE_KEYWORD,
    url: SITE_URL,
    description: SITE_TAGLINE,
    image: LOGO,
    logo: { "@type": "ImageObject", url: LOGO, width: 600, height: 450 },
    telephone: PHONE_E164,
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "الكويت" },
    address: { "@type": "PostalAddress", addressCountry: "KW", addressLocality: "الكويت" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "customer service",
      areaServed: "KW",
      availableLanguage: ["ar"],
    },
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    // The website's own title (brand + keyword) — distinct from the
    // Organization's actual name above.
    name: SITE_TITLE,
    inLanguage: "ar",
    publisher: { "@id": ORG_ID },
  };
}

/* ------------------------------------------------------------------ */
/* Per-page entities                                                  */
/* ------------------------------------------------------------------ */

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: absUrl(c.url) } : {}),
    })),
  };
}

export function faqPageLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export interface ServiceLdInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  /** e.g. "خدمات صباغة ودهانات". */
  serviceType?: string;
  areaServed?: string;
}

export function serviceLd(input: ServiceLdInput) {
  const { name, description, url, image, serviceType, areaServed = "الكويت" } = input;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absUrl(url),
    ...(image ? { image: absUrl(image) } : {}),
    ...(serviceType ? { serviceType } : {}),
    serviceArea: { "@type": "AdministrativeArea", name: areaServed },
    areaServed: { "@type": "AdministrativeArea", name: areaServed },
    provider: { "@id": ORG_ID, "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
  };
}

export interface LocalBusinessLdInput {
  /** e.g. "صباغ حولي". */
  name: string;
  description: string;
  url: string;
  image?: string;
  /** The Kuwait area/city this page targets. */
  areaName: string;
}

// This business serves every area from one location with no public-facing
// storefront in each — a Service Area Business. Google's guidance for SABs is
// explicit: never assert a postal address you don't have a real, visitable
// premises at. So this deliberately has NO `address` field (that would assert
// a fake branch in every one of the ~18 region pages that use it) — only
// `areaServed`, which is what actually describes an SAB truthfully.
export function localBusinessLd(input: LocalBusinessLdInput) {
  const { name, description, url, image, areaName } = input;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": absUrl(url),
    // Brand-prefixed so all ~18 region listings resolve to the one real
    // entity instead of reading as 18 identically-named, undisambiguated
    // businesses; `alternateName` carries the bare keyword phrase the caller
    // passed in (e.g. "صباغ حولي").
    name: `${SITE_NAME} | ${name}`,
    alternateName: name,
    description,
    url: absUrl(url),
    image: image ? absUrl(image) : LOGO,
    telephone: PHONE_E164,
    priceRange: "$$",
    parentOrganization: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: areaName,
      containedInPlace: { "@type": "Country", name: "الكويت" },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "22:00",
    },
    ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

export interface ItemListLdInput {
  name: string;
  url?: string;
  items: { name: string; url: string }[];
}

export function itemListLd({ name, url, items }: ItemListLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    ...(url ? { url: absUrl(url) } : {}),
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absUrl(it.url),
    })),
  };
}
