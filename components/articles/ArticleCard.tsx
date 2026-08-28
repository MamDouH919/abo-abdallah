/**
 * Article preview card — shared by the /articles index, the homepage
 * "Latest Articles" section and the Related Articles block. Visual style
 * mirrors the existing static /blogs cards so it belongs to the site.
 */

import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { articlePath } from "@/lib/cms/urls";
import type { ArticleListItem } from "@/lib/cms/types";

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const t = Date.parse(value);
  if (Number.isNaN(t)) return null;
  return new Date(t).toLocaleDateString("ar-KW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  article: ArticleListItem;
  /** the featured image of the first card above the fold can opt out of lazy loading */
  priority?: boolean;
  /** heading level for the card title (default h3) */
  titleComponent?: "h2" | "h3";
}

export default function ArticleCard({
  article,
  priority = false,
  titleComponent = "h3",
}: Props) {
  const href = articlePath(article.slug);
  const date = formatDate(article.publishedAt);

  return (
    <Card
      component="article"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
      }}
    >
      <Link
        href={href}
        style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
      >
        {article.featuredImage ? (
          <Box sx={{ position: "relative", width: "100%", aspectRatio: "16 / 9", bgcolor: "action.hover" }}>
            <Image
              src={article.featuredImage.url}
              alt={article.featuredImage.alt || article.title}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority={priority}
              loading={priority ? undefined : "lazy"}
            />
          </Box>
        ) : null}

        <CardContent sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column", gap: 1.25 }}>
          <Box display="flex" alignItems="center" justifyContent="space-between" gap={1} flexWrap="wrap">
            {article.category ? (
              <Chip label={article.category.name} color="primary" size="small" />
            ) : (
              <span />
            )}
            {date ? (
              <Typography variant="caption" color="text.secondary" component="time" dateTime={article.publishedAt ?? undefined}>
                {date}
              </Typography>
            ) : null}
          </Box>

          <Typography
            component={titleComponent}
            fontWeight={700}
            lineHeight={1.5}
            sx={{
              fontSize: "1.05rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {article.title}
          </Typography>

          {article.excerpt ? (
            <Typography
              variant="body2"
              color="text.secondary"
              lineHeight={1.8}
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {article.excerpt}
            </Typography>
          ) : null}

          <Typography variant="button" color="primary" sx={{ mt: "auto", pt: 1 }}>
            اقرأ المقال ←
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
