import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Navbar from "@/components/layouts/Navbar";
import Breadcrumbs from "@/components/articles/Breadcrumbs";
import JsonLd from "@/components/articles/JsonLd";
import AuthorByline from "@/components/articles/AuthorByline";
import AuthorBio from "@/components/articles/AuthorBio";
import ArticleContentRenderer from "@/components/articles/ArticleContentRenderer";
import TableOfContents from "@/components/articles/TableOfContents";
import RelatedArticles from "@/components/articles/RelatedArticles";
import { getArticleBySlug, getRelatedArticles, getAllArticleSlugs } from "@/lib/cms/articles";
import { resolveCanonical, articlePath, ARTICLES_BASE_PATH } from "@/lib/cms/urls";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, articlesListCrumbs } from "@/lib/cms/jsonld";
import type { Article } from "@/lib/cms/types";

export const revalidate = 3600;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs();
    return slugs.map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "مقال غير موجود", robots: { index: false, follow: false } };

  const title = article.seo.metaTitle || article.title;
  const description = article.seo.metaDescription || article.excerpt || undefined;
  const canonical = resolveCanonical(article.slug, article.seo.canonicalUrl);
  const ogImage = article.seo.ogImage || article.featuredImage?.url || "/logo.webp";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "ar_KW",
      url: canonical,
      title: article.seo.ogTitle || title,
      description: article.seo.ogDescription || description,
      siteName: "صباغ الكويت",
      publishedTime: article.publishedAt || undefined,
      modifiedTime: article.updatedAt || article.publishedAt || undefined,
      section: article.category?.name || undefined,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.featuredImage?.alt || title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.ogTitle || title,
      description: article.seo.ogDescription || description,
      images: [ogImage],
    },
  };
}

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const t = Date.parse(value);
  if (Number.isNaN(t)) return null;
  return new Date(t).toLocaleDateString("ar-KW", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article: Article | null = await getArticleBySlug(slug);
  console.log(article);
  
  if (!article) notFound();

  const related = await getRelatedArticles(article, 4);

  const canonical = resolveCanonical(article.slug, article.seo.canonicalUrl);
  const published = formatDate(article.publishedAt);
  const updated = formatDate(article.updatedAt);
  const showUpdated = updated && updated !== published;

  const crumbs = [
    ...articlesListCrumbs(),
    { name: article.title, url: canonical },
  ];

  return (
    <>
      <JsonLd data={buildArticleJsonLd(article)} />
      <JsonLd data={buildBreadcrumbJsonLd(crumbs)} />
      {article.author?.jsonLd ? <JsonLd data={article.author.jsonLd} /> : null}

      <Navbar />

      <Box component="article" sx={{ pt: { xs: 20, md: 20 }, pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Box sx={{ maxWidth: 760, mx: "auto" }}>
            <Breadcrumbs
              items={[
                { name: "الرئيسية", href: "/" },
                { name: "المقالات", href: ARTICLES_BASE_PATH },
                { name: article.title },
              ]}
            />

            {article.category ? (
              <Box sx={{ mb: 2 }}>
                <Link
                  href={`${ARTICLES_BASE_PATH}?category=${encodeURIComponent(article.category.slug)}`}
                  style={{ textDecoration: "none" }}
                >
                  <Chip label={article.category.name} color="primary" size="small" clickable />
                </Link>
              </Box>
            ) : null}

            <Typography component="h1" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "2.6rem" }, lineHeight: 1.3, mb: 2 }}>
              {article.title}
            </Typography>

            <AuthorByline author={article.author} />

            {(published || showUpdated) && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, color: "text.secondary", mb: 3 }}>
                {published ? (
                  <Typography variant="body2" component="span">
                    نُشر في{" "}
                    <Typography component="time" variant="body2" dateTime={article.publishedAt ?? undefined}>
                      {published}
                    </Typography>
                  </Typography>
                ) : null}
                {showUpdated ? (
                  <Typography variant="body2" component="span">
                    آخر تحديث{" "}
                    <Typography component="time" variant="body2" dateTime={article.updatedAt ?? undefined}>
                      {updated}
                    </Typography>
                  </Typography>
                ) : null}
              </Box>
            )}

            {article.excerpt ? (
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.9, mb: 4 }}>
                {article.excerpt}
              </Typography>
            ) : null}
          </Box>

          {article.featuredImage ? (
            <Box sx={{ maxWidth: 900, mx: "auto", mb: 5 }}>
              <Image
                src={article.featuredImage.url}
                alt={article.featuredImage.alt || article.title}
                width={1280}
                height={720}
                priority
                sizes="(max-width: 900px) 100vw, 900px"
                style={{ width: "100%", height: "auto", borderRadius: 16 }}
              />
            </Box>
          ) : null}

          <Box sx={{ maxWidth: 760, mx: "auto" }}>
            <TableOfContents blocks={article.contentBlocks} />
            <ArticleContentRenderer blocks={article.contentBlocks} />

            <AuthorBio author={article.author} />

            <Box mt={6}>
              <Link href={ARTICLES_BASE_PATH} style={{ textDecoration: "none" }}>
                <Typography component="span" color="primary" fontWeight={600}>
                  → العودة إلى جميع المقالات
                </Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      <RelatedArticles articles={related} />
    </>
  );
}
