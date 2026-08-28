/**
 * "Related articles" grid shown at the foot of every article.
 * Data is resolved by the page via `getRelatedArticles` (same category first,
 * then latest, current article excluded).
 */

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ArticleCard from "./ArticleCard";
import type { ArticleListItem } from "@/lib/cms/types";

interface Props {
  articles: ArticleListItem[];
}

export default function RelatedArticles({ articles }: Props) {
  if (!articles || articles.length === 0) return null;

  return (
    <Box component="section" sx={{ bgcolor: "action.hover", py: { xs: 6, md: 8 }, mt: 8 }}>
      <Container maxWidth="lg">
        <Typography component="h2" fontWeight={700} sx={{ fontSize: "1.5rem", mb: 3 }}>
          مقالات ذات صلة
        </Typography>
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 3 }}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
