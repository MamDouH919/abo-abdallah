import type { Metadata } from "next";
import { ArticlesIndex, articlesIndexMetadata, parsePage } from "../ArticlesIndex";

// Internal target of the /articles?page=… / ?category=… rewrite in
// next.config.mjs. Never linked directly; a direct hit on /articles/browse is
// redirected back to /articles there. Canonical points at /articles.
interface PageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { page, category } = await searchParams;
  return articlesIndexMetadata(Boolean(category) || parsePage(page) > 1);
}

export default async function ArticlesBrowsePage({ searchParams }: PageProps) {
  const { page, category } = await searchParams;
  return <ArticlesIndex page={parsePage(page)} category={category?.trim() || undefined} />;
}
