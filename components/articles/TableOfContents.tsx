/**
 * "On this page" list, built from the article's H2/H3 blocks. Anchor links
 * point at the deterministic ids stamped by ArticleContentRenderer (both call
 * `buildHeadingIndex` on the same blocks). Only rendered when there are enough
 * H2 sections to be useful (see `shouldShowToc`).
 */

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { buildHeadingIndex, shouldShowToc } from "@/lib/cms/toc";
import type { ContentBlock } from "@/lib/cms/types";

interface Props {
  blocks: ContentBlock[];
}

export default function TableOfContents({ blocks }: Props) {
  const headings = buildHeadingIndex(blocks);
  if (!shouldShowToc(headings)) return null;

  return (
    <Box
      component="nav"
      aria-label="محتويات المقال"
      sx={{
        bgcolor: "action.hover",
        borderRadius: 2,
        p: { xs: 2.5, md: 3 },
        mb: 4,
      }}
    >
      <Typography component="h2" fontWeight={700} sx={{ fontSize: "1.05rem", mb: 1.5 }}>
        محتويات المقال
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          p: 0,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
        }}
      >
        {headings.map((h) => (
          <Box
            component="li"
            key={h.id}
            sx={{ pl: h.level === 3 ? 2 : 0 }}
          >
            <Typography
              component="a"
              href={`#${h.id}`}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontSize: h.level === 3 ? "0.9rem" : "0.95rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {h.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
