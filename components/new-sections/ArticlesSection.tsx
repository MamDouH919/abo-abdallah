/**
 * Homepage "Latest Articles" — real, dynamic articles from the CMS. Renders
 * nothing when the CMS has none (or isn't configured). Never shows fabricated
 * articles or dates.
 */

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ArticleCard from "@/components/articles/ArticleCard";
import { getLatestArticles } from "@/lib/cms/articles";
import { ARTICLES_BASE_PATH } from "@/lib/cms/urls";

export default async function ArticlesSection() {
  const cmsArticles = await getLatestArticles(4);

  if (cmsArticles.length === 0) return null;

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
