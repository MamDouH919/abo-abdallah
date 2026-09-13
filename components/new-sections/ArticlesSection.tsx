/**
 * Homepage "Latest Articles" — tries the CMS first (real, dynamic articles),
 * and falls back to a small curated list of real, existing posts from
 * data/blog.ts when the CMS has none yet (CMS_API_URL not configured). Never
 * shows fabricated articles or dates.
 */

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArticleCard from "@/components/articles/ArticleCard";
import { getLatestArticles } from "@/lib/cms/articles";
import { ARTICLES_BASE_PATH } from "@/lib/cms/urls";
import blogPosts from "@/data/blog";

// Commercially relevant, general-audience posts (not area-specific) — picked
// from the real, existing /blogs catalogue.
const FALLBACK_SLUGS = [
  "asaar-alsibagha-alkuwait-2025",
  "ikhtiyar-afdal-sabbagh-fi-alkuwait",
  "anwaa-aldahhanat-lilmanazil-alkuwait",
  "mualim-sabbagh-alkuwait",
];

export default async function ArticlesSection() {
  const cmsArticles = await getLatestArticles(4);

  if (cmsArticles.length > 0) {
    return (
      <Box component="section" aria-labelledby="latest-articles-heading" sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Header />
          <Grid container spacing={3}>
            {cmsArticles.map((article, i) => (
              <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 3 }}>
                <ArticleCard article={article} priority={i === 0} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }

  const fallback = FALLBACK_SLUGS
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  if (fallback.length === 0) return null;

  return (
    <Box component="section" aria-labelledby="latest-articles-heading" sx={{ py: { xs: 6, md: 8 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Header />
        <Grid container spacing={3}>
          {fallback.map((post) => (
            <Grid key={post.slug} size={{ xs: 12, sm: 6, md: 3 }}>
              <Link href={`/blogs/${post.slug}`} style={{ textDecoration: "none" }}>
                <Card variant="outlined" sx={{ height: "100%", borderRadius: 3, transition: "box-shadow .2s", "&:hover": { boxShadow: 4 } }}>
                  <CardContent>
                    <Typography component="h3" variant="subtitle1" fontWeight={700} color="text.primary" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function Header() {
  return (
    <Box display="flex" alignItems="baseline" justifyContent="space-between" flexWrap="wrap" gap={1} mb={{ xs: 3, md: 5 }}>
      <Typography id="latest-articles-heading" component="h2" fontWeight={800} color="primary.main" sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}>
        أحدث المقالات
      </Typography>
      <Link href={ARTICLES_BASE_PATH} style={{ textDecoration: "none" }}>
        <Typography component="span" color="primary" fontWeight={600} sx={{ fontSize: "0.95rem" }}>
          عرض كل المقالات ←
        </Typography>
      </Link>
    </Box>
  );
}
