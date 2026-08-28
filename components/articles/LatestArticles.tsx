/**
 * Homepage "Latest Articles" section. Server component: fetches the newest
 * articles from the CMS at request/revalidate time so the markup is in the
 * initial HTML. Renders nothing when the CMS has no articles yet, so it is
 * safe to drop into the existing homepage unconditionally.
 */

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ArticleCard from "./ArticleCard";
import { getArticles, getLatestArticles } from "@/lib/cms/articles";
import { ARTICLES_BASE_PATH } from "@/lib/cms/urls";

interface Props {
  limit?: number;
}

export default async function LatestArticles({ limit = 12 }: Props) {
  // const articles = await getLatestArticles(limit);
  const { articles, pagination } = await getArticles({ page: 1, limit: 12, category: undefined });

  if (articles.length === 0) return null;

  return (
    <Box component="section" aria-labelledby="latest-articles-heading" sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={1}
          mb={{ xs: 3, md: 5 }}
        >
          <Typography
            id="latest-articles-heading"
            component="h2"
            fontWeight={800}
            color="primary.main"
            sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}
          >
            أحدث المقالات
          </Typography>
          <Link href={ARTICLES_BASE_PATH} style={{ textDecoration: "none" }}>
            <Typography component="span" color="primary" fontWeight={600} sx={{ fontSize: "0.95rem" }}>
              عرض كل المقالات ←
            </Typography>
          </Link>
        </Box>

        <Grid container spacing={3}>
          {articles.map((article, i) => (
            <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <ArticleCard article={article} priority={i === 0} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
