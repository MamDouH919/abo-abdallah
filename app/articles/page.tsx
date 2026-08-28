import type { Metadata } from "next";
import Link from "next/link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Navbar from "@/components/layouts/Navbar";
import ArticleCard from "@/components/articles/ArticleCard";
import Breadcrumbs from "@/components/articles/Breadcrumbs";
import JsonLd from "@/components/articles/JsonLd";
import { getArticles } from "@/lib/cms/articles";
import { articlesIndexUrl, ARTICLES_BASE_PATH, getSiteUrl } from "@/lib/cms/urls";
import { buildBreadcrumbJsonLd, articlesListCrumbs } from "@/lib/cms/jsonld";

export const revalidate = 3600;

const TITLE = "المقالات – صباغ الكويت";
const DESCRIPTION =
  "أحدث المقالات والنصائح من صباغ الكويت حول الدهانات والديكور واختيار الصباغ المناسب في جميع مناطق الكويت.";

interface PageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { page: pageParam, category } = await searchParams;
  const isFiltered = Boolean(category) || parsePage(pageParam) > 1;

  return {
    title: TITLE,
    description: DESCRIPTION,
    // Filtered / paginated views point their canonical at the clean index.
    alternates: { canonical: articlesIndexUrl() },
    openGraph: {
      type: "website",
      locale: "ar_KW",
      url: articlesIndexUrl(),
      title: TITLE,
      description: DESCRIPTION,
      siteName: "صباغ الكويت",
      images: [{ url: "/logo.webp", width: 1200, height: 630, alt: "صباغ الكويت" }],
    },
    twitter: {
      card: "summary_large_image",
      title: TITLE,
      description: DESCRIPTION,
      images: ["/logo.webp"],
    },
    robots: { index: !isFiltered, follow: true },
  };
}

function parsePage(raw: string | undefined): number {
  const n = Number(raw);
  return Number.isInteger(n) && n > 1 ? n : 1;
}

/** Preserve the active category filter across pagination links. */
function pageHref(target: number, category?: string): string {
  const params = new URLSearchParams();
  if (target > 1) params.set("page", String(target));
  if (category) params.set("category", category);
  const qs = params.toString();
  return qs ? `${ARTICLES_BASE_PATH}?${qs}` : ARTICLES_BASE_PATH;
}

export default async function ArticlesIndexPage({ searchParams }: PageProps) {
  const { page: pageParam, category: categoryParam } = await searchParams;
  const page = parsePage(pageParam);
  const category = categoryParam?.trim() || undefined;

  const { articles, pagination } = await getArticles({ page, limit: 12, category });
  const totalPages = pagination?.totalPages ?? 1;
  const activeCategoryName = category
    ? articles.find((a) => a.category?.slug === category)?.category?.name ?? category
    : undefined;

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "مقالات صباغ الكويت",
    url: articlesIndexUrl(),
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: (page - 1) * 12 + i + 1,
      url: `${getSiteUrl()}${ARTICLES_BASE_PATH}/${a.slug}`,
      name: a.title,
    })),
  };

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(articlesListCrumbs())} />
      {articles.length > 0 ? <JsonLd data={listJsonLd} /> : null}

      <Navbar />

      <Box
        component="header"
        sx={{
          background: "linear-gradient(135deg, #012e8d 0%, #1565c0 60%, #42a5f5 100%)",
          color: "white",
          py: { xs: 20, md: 20 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography component="h1" fontWeight={800} sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2, lineHeight: 1.3 }}>
            مقالات صباغ الكويت
          </Typography>
          <Typography
            component="p"
            sx={{ opacity: 0.92, fontSize: { xs: "1rem", md: "1.25rem" }, maxWidth: 600, mx: "auto" }}
          >
            {DESCRIPTION}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Breadcrumbs items={[{ name: "الرئيسية", href: "/" }, { name: "المقالات" }]} />

        {activeCategoryName ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3, flexWrap: "wrap" }}>
            <Typography component="h2" sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
              التصنيف: {activeCategoryName}
            </Typography>
            <Link href={ARTICLES_BASE_PATH} style={{ textDecoration: "none" }}>
              <Typography component="span" variant="body2" color="primary" fontWeight={600}>
                إزالة الفلتر ✕
              </Typography>
            </Link>
          </Box>
        ) : null}

        {articles.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography variant="h2" sx={{ fontSize: "1.25rem", color: "text.secondary" }}>
              {activeCategoryName
                ? "لا توجد مقالات في هذا التصنيف حالياً."
                : "لا توجد مقالات منشورة حالياً. تابعنا قريباً."}
            </Typography>
          </Box>
        ) : (
          <>
            <Box component="main">
              <Grid container spacing={3}>
                {articles.map((article, i) => (
                  <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                    <ArticleCard article={article} titleComponent="h2" priority={i < 3 && page === 1} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            {totalPages > 1 ? (
              <Box
                component="nav"
                aria-label="ترقيم الصفحات"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mt: 6 }}
              >
                {page > 1 ? (
                  <Link href={pageHref(page - 1, category)} style={{ textDecoration: "none" }}>
                    <Typography component="span" color="primary" fontWeight={600}>
                      → الصفحة السابقة
                    </Typography>
                  </Link>
                ) : (
                  <span />
                )}
                <Typography variant="body2" color="text.secondary">
                  صفحة {page} من {totalPages}
                </Typography>
                {page < totalPages ? (
                  <Link href={pageHref(page + 1, category)} style={{ textDecoration: "none" }}>
                    <Typography component="span" color="primary" fontWeight={600}>
                      الصفحة التالية ←
                    </Typography>
                  </Link>
                ) : (
                  <span />
                )}
              </Box>
            ) : null}
          </>
        )}
      </Container>
    </>
  );
}
