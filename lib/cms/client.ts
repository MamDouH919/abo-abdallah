/**
 * Low-level CMS HTTP client.
 *
 * All CMS access goes through `cmsFetch`. It is server-only: the CMS base URL
 * and site slug are read from non-public env vars so nothing leaks to the
 * browser. Keeping every request in one place means a future auth header or a
 * webhook-driven `revalidateTag('cms')` only has to change here.
 *
 * This module is imported only from Server Components / route handlers, so the
 * private env vars never reach the client bundle.
 */

const DEFAULT_REVALIDATE = 3600; // 1 hour

export const CMS_TAG = "cms";
export const CMS_ARTICLES_TAG = "cms-articles";

export class CmsError extends Error {
  readonly status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "CmsError";
    this.status = status;
  }
}

/** Thrown when the CMS answers 404 — callers map this to `notFound()`. */
export class CmsNotFoundError extends CmsError {
  constructor(message = "CMS resource not found") {
    super(message, 404);
    this.name = "CmsNotFoundError";
  }
}

function getBaseUrl(): string {
  const raw = process.env.CMS_API_URL?.trim();
  if (!raw) {
    throw new CmsError(
      "CMS_API_URL is not set. Add it to .env (see .env.example).",
      500,
    );
  }
  return raw.replace(/\/+$/, "");
}

export function getSiteSlug(): string {
  const slug = process.env.CMS_SITE_SLUG?.trim();
  if (!slug) {
    throw new CmsError(
      "CMS_SITE_SLUG is not set. Add it to .env (see .env.example).",
      500,
    );
  }
  return slug;
}

interface CmsFetchOptions {
  /** query string params; `undefined` / `null` values are dropped */
  query?: Record<string, string | number | boolean | undefined | null>;
  /** ISR revalidation window in seconds; defaults to 1 hour */
  revalidate?: number | false;
  /** extra cache tags for on-demand revalidation */
  tags?: string[];
  signal?: AbortSignal;
}

/**
 * Fetch JSON from the CMS public API.
 *
 * `path` is relative to the API root and must NOT include the site slug —
 * callers pass e.g. `articles` or `articles/my-slug` and the site segment
 * is injected here.
 */
export async function cmsFetch<T>(
  path: string,
  options: CmsFetchOptions = {},
): Promise<T> {
  const { query, revalidate = DEFAULT_REVALIDATE, tags = [], signal } = options;

  const base = getBaseUrl();
  const siteSlug = getSiteSlug();
  const cleanPath = path.replace(/^\/+/, "");

  const url = new URL(
    `${base}/api/public/sites/${encodeURIComponent(siteSlug)}/${cleanPath}`,
  );

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined || value === null || value === "") continue;
      url.searchParams.set(key, String(value));
    }
  }

  let res: Response;
  try {
    res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal,
      next: {
        revalidate: revalidate === false ? undefined : revalidate,
        tags: [CMS_TAG, CMS_ARTICLES_TAG, ...tags],
      },
    });
  } catch (err) {
    throw new CmsError(
      `CMS request failed: ${err instanceof Error ? err.message : String(err)}`,
      503,
    );
  }

  if (res.status === 404) {
    throw new CmsNotFoundError();
  }

  if (!res.ok) {
    throw new CmsError(
      `CMS responded with ${res.status} ${res.statusText} for ${cleanPath}`,
      res.status,
    );
  }

  try {
    return (await res.json()) as T;
  } catch {
    throw new CmsError("CMS returned a malformed JSON response", 502);
  }
}
