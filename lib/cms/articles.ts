/**
 * Article data layer.
 *
 * Public API for the rest of the website:
 *   getArticles({ page, limit, category })  -> paginated list
 *   getLatestArticles(limit)                -> newest N (homepage / related)
 *   getArticleBySlug(slug)                  -> one full article or null
 *
 * Every function talks to the CMS through `cmsFetch`, tolerates loose payload
 * shapes, normalizes them into the strict types in `./types`, and never throws
 * for "expected" failures (network / 5xx / empty) — list helpers return empty
 * results and `getArticleBySlug` returns `null` so pages can render a clean
 * empty state or call `notFound()`. A genuine 404 from the CMS surfaces as
 * `CmsNotFoundError` for the detail route to catch.
 */

import { cmsFetch, CmsError, CmsNotFoundError } from "./client";
import type {
  Article,
  ArticleListItem,
  ArticleListResult,
  ArticleSEO,
  Author,
  AuthorAvatar,
  AuthorCredential,
  AuthorSocialLink,
  AuthorSummary,
  Category,
  ContentBlock,
  ContentRef,
  FaqEntry,
  FeaturedImage,
  GetArticlesParams,
  HeadingLevel,
} from "./types";

/* ------------------------------------------------------------------ */
/* Primitive guards / coercion                                         */
/* ------------------------------------------------------------------ */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function optStr(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

function optDate(value: unknown): string | null {
  if (typeof value !== "string" || value.trim() === "") return null;
  const t = Date.parse(value);
  return Number.isNaN(t) ? null : value;
}

function num(value: unknown, fallback: number): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return fallback;
}

/* ------------------------------------------------------------------ */
/* Field normalizers                                                   */
/* ------------------------------------------------------------------ */

function normalizeFeaturedImage(raw: unknown): FeaturedImage | null {
  if (!isRecord(raw)) return null;
  const url = str(raw.url ?? raw.src);
  if (!url) return null;
  return { url, alt: str(raw.alt ?? raw.title) };
}

function normalizeCategory(raw: unknown): Category | null {
  if (!isRecord(raw)) return null;
  const name = str(raw.name ?? raw.title);
  const slug = str(raw.slug);
  if (!name && !slug) return null;
  return { name: name || slug, slug: slug || name };
}

function normalizeAuthorSummary(raw: unknown): AuthorSummary | null {
  if (!isRecord(raw)) return null;
  const name = str(raw.name);
  if (!name) return null;
  return { name, slug: str(raw.slug), jobTitle: optStr(raw.jobTitle) };
}

function normalizeAuthorAvatar(raw: unknown): AuthorAvatar | null {
  if (!isRecord(raw)) return null;
  const url = str(raw.url ?? raw.src);
  if (!url) return null;
  return { url, alt: str(raw.alt ?? raw.title) };
}

function normalizeCredentials(raw: unknown): AuthorCredential[] {
  if (!Array.isArray(raw)) return [];
  const out: AuthorCredential[] = [];
  for (const item of raw) {
    if (!isRecord(item)) continue;
    const title = str(item.title ?? item.name);
    if (!title) continue;
    out.push({ title, issuer: optStr(item.issuer), year: optStr(item.year) });
  }
  return out;
}

function normalizeSocialLinks(raw: unknown): AuthorSocialLink[] {
  if (!Array.isArray(raw)) return [];
  const out: AuthorSocialLink[] = [];
  for (const item of raw) {
    if (!isRecord(item)) continue;
    const url = str(item.url ?? item.href);
    if (!url) continue;
    out.push({ label: str(item.label ?? item.name ?? item.platform) || url, url });
  }
  return out;
}

function normalizeAuthor(raw: unknown): Author | null {
  const summary = normalizeAuthorSummary(raw);
  if (!summary || !isRecord(raw)) return null;
  return {
    ...summary,
    bio: optStr(raw.bio),
    avatar: normalizeAuthorAvatar(raw.avatar),
    yearsOfExperience:
      typeof raw.yearsOfExperience === "number" && Number.isFinite(raw.yearsOfExperience)
        ? raw.yearsOfExperience
        : undefined,
    expertise: toStringArray(raw.expertise),
    credentials: normalizeCredentials(raw.credentials),
    socialLinks: normalizeSocialLinks(raw.socialLinks),
    jsonLd: isRecord(raw.jsonLd) ? (raw.jsonLd as Record<string, unknown>) : null,
  };
}

function normalizeSeo(raw: unknown): ArticleSEO {
  if (!isRecord(raw)) return {};
  return {
    metaTitle: optStr(raw.metaTitle),
    metaDescription: optStr(raw.metaDescription),
    canonicalUrl: optStr(raw.canonicalUrl),
    robots: optStr(raw.robots),
    ogTitle: optStr(raw.ogTitle),
    ogDescription: optStr(raw.ogDescription),
    ogImage: optStr(raw.ogImage ?? raw.ogImageUrl),
  };
}

function normalizeHeadingLevel(raw: unknown): HeadingLevel {
  const n = num(raw, 2);
  return n === 4 ? 4 : n === 3 ? 3 : 2;
}

/** `{ name, slug }` reference — accepts an object or a bare string. */
function normalizeContentRef(raw: unknown): ContentRef | null {
  if (typeof raw === "string") {
    const s = raw.trim();
    return s ? { name: s, slug: s } : null;
  }
  if (!isRecord(raw)) return null;
  const name = str(raw.name ?? raw.title ?? raw.label);
  const slug = str(raw.slug ?? raw.id);
  if (!name && !slug) return null;
  return { name: name || slug, slug: slug || name };
}

function normalizeFaqEntries(raw: unknown): FaqEntry[] {
  if (!Array.isArray(raw)) return [];
  const out: FaqEntry[] = [];
  for (const item of raw) {
    if (!isRecord(item)) continue;
    const question = str(item.question ?? item.q ?? item.title);
    const answer = str(item.answer ?? item.a ?? item.content ?? item.text);
    if (!question.trim() || !answer.trim()) continue;
    out.push({ question, answer });
  }
  return out;
}

function toStringArray(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (typeof item === "string") return item;
      if (isRecord(item)) return str(item.content ?? item.text ?? item.value);
      return "";
    })
    .filter((s): s is string => s.length > 0);
}

let blockAutoId = 0;

function normalizeBlock(raw: unknown): ContentBlock | null {
  if (!isRecord(raw)) return null;
  const type = str(raw.type).toLowerCase();
  const id = str(raw.id) || `block-${++blockAutoId}`;

  switch (type) {
    case "paragraph":
    case "text": {
      const content = str(raw.content ?? raw.text);
      if (!content.trim()) return null;
      return { id, type: "paragraph", content };
    }
    case "heading":
    case "header": {
      const content = str(raw.content ?? raw.text);
      if (!content.trim()) return null;
      return { id, type: "heading", level: normalizeHeadingLevel(raw.level), content };
    }
    case "image": {
      const url = str(raw.url ?? raw.src);
      if (!url) return null;
      return {
        id,
        type: "image",
        imageId: optStr(raw.imageId),
        url,
        alt: str(raw.alt ?? raw.caption),
        caption: optStr(raw.caption),
      };
    }
    case "list": {
      const items = toStringArray(raw.items ?? raw.content);
      if (items.length === 0) return null;
      const ordered =
        raw.ordered === true ||
        raw.style === "ordered" ||
        raw.listType === "ordered" ||
        raw.variant === "ordered";
      return { id, type: "list", ordered, items };
    }
    case "quote":
    case "blockquote": {
      const content = str(raw.content ?? raw.text);
      if (!content.trim()) return null;
      return { id, type: "quote", content, cite: optStr(raw.cite ?? raw.source ?? raw.attribution) };
    }
    case "divider":
    case "hr":
    case "separator":
      return { id, type: "divider" };
    case "faq":
    case "faqs":
    case "faq-list": {
      const items = normalizeFaqEntries(raw.items ?? raw.questions ?? raw.faqs);
      if (items.length === 0) return null;
      return { id, type: "faq", items };
    }
    default:
      return null;
  }
}

function normalizeContentBlocks(raw: unknown): ContentBlock[] {
  if (!Array.isArray(raw)) return [];
  const blocks: ContentBlock[] = [];
  for (const item of raw) {
    const block = normalizeBlock(item);
    if (block) blocks.push(block);
  }
  return blocks;
}

/* ------------------------------------------------------------------ */
/* Article normalizers                                                 */
/* ------------------------------------------------------------------ */

/** Unwrap `{ data: ... }` / `{ article: ... }` style envelopes. */
function unwrap(raw: unknown): unknown {
  if (isRecord(raw)) {
    if ("data" in raw && raw.data !== undefined) return raw.data;
    if ("article" in raw && raw.article !== undefined) return raw.article;
  }
  return raw;
}

function normalizeListItem(raw: unknown): ArticleListItem | null {
  if (!isRecord(raw)) return null;
  const slug = str(raw.slug);
  const title = str(raw.title);
  if (!slug || !title) return null;
  return {
    title,
    slug,
    excerpt: str(raw.excerpt ?? raw.description ?? raw.summary),
    featuredImage: normalizeFeaturedImage(raw.featuredImage ?? raw.image),
    category: normalizeCategory(raw.category),
    author: normalizeAuthorSummary(raw.author),
    publishedAt: optDate(raw.publishedAt ?? raw.date),
    updatedAt: optDate(raw.updatedAt ?? raw.modifiedAt),
  };
}

function normalizeArticle(raw: unknown): Article | null {
  const data = unwrap(raw);
  if (!isRecord(data)) return null;
  const slug = str(data.slug);
  const title = str(data.title);
  if (!slug || !title) return null;

  return {
    title,
    slug,
    excerpt: str(data.excerpt ?? data.description ?? data.summary),
    featuredImage: normalizeFeaturedImage(data.featuredImage ?? data.image),
    contentBlocks: normalizeContentBlocks(data.contentBlocks ?? data.content ?? data.blocks),
    category: normalizeCategory(data.category),
    author: normalizeAuthor(data.author),
    seo: normalizeSeo(data.seo),
    publishedAt: optDate(data.publishedAt ?? data.date),
    updatedAt: optDate(data.updatedAt ?? data.modifiedAt),

    // Optional targeting fields — undefined until the CMS starts sending them.
    targetLocation: normalizeContentRef(data.targetLocation ?? data.location) ?? undefined,
    targetService: normalizeContentRef(data.targetService ?? data.service) ?? undefined,
    primaryKeyword: optStr(data.primaryKeyword),
    secondaryKeywords: toStringArray(data.secondaryKeywords),
    searchIntent: optStr(data.searchIntent),
    articleType: optStr(data.articleType),
    tags: toStringArray(data.tags),
    relatedArticleIds: toStringArray(data.relatedArticleIds ?? data.relatedArticles),
  };
}

/* ------------------------------------------------------------------ */
/* List payload shapes                                                 */
/* ------------------------------------------------------------------ */

function extractListArray(payload: unknown): unknown[] {
  if (Array.isArray(payload)) return payload;
  if (isRecord(payload)) {
    for (const key of ["data", "articles", "items", "results"] as const) {
      if (Array.isArray(payload[key])) return payload[key] as unknown[];
    }
  }
  return [];
}

function extractPagination(
  payload: unknown,
  fallbackCount: number,
  requestedPage: number,
  requestedLimit: number | undefined,
): ArticleListResult["pagination"] {
  const meta =
    isRecord(payload) && isRecord(payload.meta)
      ? payload.meta
      : isRecord(payload) && isRecord(payload.pagination)
        ? payload.pagination
        : null;

  if (!meta) {
    if (requestedLimit === undefined) return null;
    return {
      page: requestedPage,
      pageSize: requestedLimit,
      total: fallbackCount,
      totalPages: fallbackCount < requestedLimit ? requestedPage : requestedPage + 1,
    };
  }

  const page = num(meta.page ?? meta.currentPage, requestedPage);
  const pageSize = num(meta.pageSize ?? meta.limit ?? meta.perPage, requestedLimit ?? fallbackCount);
  const total = num(meta.total ?? meta.totalItems ?? meta.count, fallbackCount);
  const totalPages = num(
    meta.totalPages ?? meta.pageCount,
    pageSize > 0 ? Math.max(1, Math.ceil(total / pageSize)) : 1,
  );
  return { page, pageSize, total, totalPages };
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

const EMPTY_LIST: ArticleListResult = { articles: [], pagination: null };

/**
 * Published articles for the current site, newest first (as ordered by the CMS).
 * Returns an empty result on any CMS failure so pages stay up.
 */
export async function getArticles(
  params: GetArticlesParams = {},
): Promise<ArticleListResult> {
  const { page = 1, category } = params;
  // The CMS public API rejects `limit` above 50 with a 400. Clamp defensively
  // so no caller can break the list endpoint.
  const limit = params.limit === undefined ? undefined : Math.min(Math.max(params.limit, 1), 50);
  try {
    const payload = await cmsFetch<unknown>("articles", {
      query: {
        page: page > 1 ? page : undefined,
        limit,
        pageSize: limit,
        category,
      },
    });

    const articles = extractListArray(payload)
      .map(normalizeListItem)
      .filter((a): a is ArticleListItem => a !== null);
    
    return {
      articles,
      pagination: extractPagination(payload, articles.length, page, limit),
    };
  } catch (err) {
    if (err instanceof CmsError) {
      console.error(`[cms] getArticles failed: ${err.message}`);
      return EMPTY_LIST;
    }
    throw err;
  }
}

/**
 * Newest `limit` published articles — used by the homepage section and as the
 * fallback source for related articles.
 */
export async function getLatestArticles(limit = 6): Promise<ArticleListItem[]> {
  const { articles } = await getArticles({ limit });
  return articles.slice(0, limit);
}

/**
 * One published article by slug.
 * - Returns `null` when the CMS reports the article does not exist (404).
 * - Returns `null` on transient CMS errors too; the detail route decides how
 *   to present that (it calls `notFound()`).
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const clean = slug.trim();
  if (!clean) return null;

  try {
    const payload = await cmsFetch<unknown>(`articles/${encodeURIComponent(clean)}`);
    return normalizeArticle(payload);
  } catch (err) {
    if (err instanceof CmsNotFoundError) return null;
    if (err instanceof CmsError) {
      console.error(`[cms] getArticleBySlug("${clean}") failed: ${err.message}`);
      return null;
    }
    throw err;
  }
}

/**
 * Related articles for a given article. Priority:
 *   1. hand-picked `relatedArticleIds` (slug or id match)
 *   2. same `targetLocation` / `targetService`
 *   3. same category
 *   4. latest
 * Current slug is always excluded. Never throws.
 */
export async function getRelatedArticles(
  article: Pick<
    Article,
    "slug" | "category" | "relatedArticleIds" | "targetLocation" | "targetService"
  >,
  limit = 4,
): Promise<ArticleListItem[]> {
  const exclude = (list: ArticleListItem[]) =>
    list.filter((a) => a.slug !== article.slug);

  const pool: ArticleListItem[] = [];
  const seen = new Set<string>();
  const take = (list: ArticleListItem[]) => {
    for (const a of exclude(list)) {
      if (seen.has(a.slug)) continue;
      pool.push(a);
      seen.add(a.slug);
      if (pool.length >= limit) return;
    }
  };

  // A single wide fetch we can filter locally for (1) and (2), since the CMS
  // list endpoint does not support these filters yet.
  const wide = article.relatedArticleIds?.length || article.targetLocation || article.targetService
    ? (await getArticles({ limit: 50 })).articles
    : [];

  // 1. explicit picks, in the given order
  if (article.relatedArticleIds?.length) {
    const wanted = new Set(article.relatedArticleIds.map((s) => s.trim()));
    for (const id of article.relatedArticleIds) {
      const hit = wide.find((a) => a.slug === id.trim());
      if (hit) take([hit]);
    }
    // also allow slug set membership for any not matched positionally
    take(wide.filter((a) => wanted.has(a.slug)));
  }

  // 2. same target location / service (needs the field on the list payload)
  if (pool.length < limit && (article.targetLocation || article.targetService)) {
    take(
      wide.filter((a) => {
        const anyA = a as ArticleListItem & {
          targetLocation?: { slug?: string };
          targetService?: { slug?: string };
        };
        return (
          (article.targetLocation?.slug &&
            anyA.targetLocation?.slug === article.targetLocation.slug) ||
          (article.targetService?.slug &&
            anyA.targetService?.slug === article.targetService.slug)
        );
      }),
    );
  }

  // 3. same category
  if (pool.length < limit && article.category?.slug) {
    const { articles } = await getArticles({
      category: article.category.slug,
      limit: limit + pool.length + 1,
    });
    take(articles);
  }

  // 4. latest
  if (pool.length < limit) {
    const { articles } = await getArticles({ limit: limit + pool.length + 1 });
    take(articles);
  }

  return pool.slice(0, limit);
}

/**
 * All published article slugs — for `generateStaticParams` and the sitemap.
 * Walks pagination when the CMS exposes it; caps the walk defensively.
 */
export async function getAllArticleSlugs(): Promise<
  { slug: string; updatedAt: string | null }[]
> {
  const out: { slug: string; updatedAt: string | null }[] = [];
  const seen = new Set<string>();
  let page = 1;
  const MAX_PAGES = 50;

  while (page <= MAX_PAGES) {
    const { articles, pagination } = await getArticles({ page, limit: 50 });
    if (articles.length === 0) break;

    for (const a of articles) {
      if (seen.has(a.slug)) continue;
      seen.add(a.slug);
      out.push({ slug: a.slug, updatedAt: a.updatedAt ?? a.publishedAt });
    }

    if (!pagination || page >= pagination.totalPages) break;
    page += 1;
  }

  return out;
}
