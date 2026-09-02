/**
 * Strongly-typed contract for the centralized CMS public API.
 *
 * Endpoints consumed by this website (see `lib/cms/client.ts`):
 *   GET /api/public/sites/:siteSlug/articles
 *   GET /api/public/sites/:siteSlug/articles/:articleSlug
 *
 * These types describe the *normalized* shape used across the website.
 * Raw API payloads are validated / coerced into these types inside
 * `lib/cms/articles.ts` so the rest of the app never touches `unknown`.
 */

export interface FeaturedImage {
  url: string;
  alt: string;
}

export interface Category {
  name: string;
  slug: string;
}

/* ------------------------------------------------------------------ */
/* Author                                                             */
/* ------------------------------------------------------------------ */

export interface AuthorAvatar {
  url: string;
  alt: string;
}

export interface AuthorCredential {
  title: string;
  issuer?: string;
  year?: string;
}

export interface AuthorSocialLink {
  label: string;
  url: string;
}

/**
 * Lighter author shape returned by the article *list* endpoint — just enough
 * to name the author on a card.
 */
export interface AuthorSummary {
  name: string;
  slug: string;
  jobTitle?: string;
}

/**
 * Full author profile embedded in the article *detail* response. There are no
 * author pages, so `slug` is kept only for keys / structured data.
 */
export interface Author extends AuthorSummary {
  bio?: string;
  avatar: AuthorAvatar | null;
  yearsOfExperience?: number;
  expertise: string[];
  credentials: AuthorCredential[];
  socialLinks: AuthorSocialLink[];
  /** Ready-made schema.org Person object — injected verbatim as JSON-LD. */
  jsonLd: Record<string, unknown> | null;
}

export interface ArticleSEO {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

/* ------------------------------------------------------------------ */
/* Content blocks — discriminated union on `type`                      */
/* ------------------------------------------------------------------ */

export interface ParagraphBlock {
  id: string;
  type: "paragraph";
  content: string;
}

export type HeadingLevel = 2 | 3;

export interface HeadingBlock {
  id: string;
  type: "heading";
  level: HeadingLevel;
  content: string;
}

export interface ImageBlock {
  id: string;
  type: "image";
  imageId?: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface ListBlock {
  id: string;
  type: "list";
  /** `true` -> <ol>, `false`/absent -> <ul> */
  ordered: boolean;
  items: string[];
}

export interface QuoteBlock {
  id: string;
  type: "quote";
  content: string;
  /** optional attribution / source */
  cite?: string;
}

export interface DividerBlock {
  id: string;
  type: "divider";
}

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | ListBlock
  | QuoteBlock
  | DividerBlock;

export type ContentBlockType = ContentBlock["type"];

/* ------------------------------------------------------------------ */
/* Article                                                            */
/* ------------------------------------------------------------------ */

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage | null;
  contentBlocks: ContentBlock[];
  category: Category | null;
  author: Author | null;
  seo: ArticleSEO;
  publishedAt: string | null;
  updatedAt: string | null;
}

/**
 * List item — the list endpoint may return a lighter payload than the
 * detail endpoint. Everything the cards need is guaranteed; content
 * blocks are optional here.
 */
export interface ArticleListItem {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage | null;
  category: Category | null;
  author: AuthorSummary | null;
  publishedAt: string | null;
  updatedAt: string | null;
}

export interface ArticleListResult {
  articles: ArticleListItem[];
  /** Present when the CMS reports pagination metadata. */
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  } | null;
}

export interface GetArticlesParams {
  page?: number;
  limit?: number;
  /** filter by category slug when the CMS supports it */
  category?: string;
}
