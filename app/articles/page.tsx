import type { Metadata } from "next";
import { ArticlesIndex, articlesIndexMetadata } from "./ArticlesIndex";

// Static + ISR: no searchParams here, so /articles is prerendered and served
// from cache. Paginated / filtered views are rewritten to ./browse in
// next.config.mjs.
export const revalidate = 3600;

export const metadata: Metadata = articlesIndexMetadata(false);

export default function ArticlesIndexPage() {
  return <ArticlesIndex page={1} />;
}
