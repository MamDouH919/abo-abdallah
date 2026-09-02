/**
 * Compact author byline shown directly under the article title: avatar, name
 * and job title. The name is plain text — there are no author pages. Renders
 * nothing when the article has no author.
 */

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Author } from "@/lib/cms/types";

interface Props {
  author: Author | null;
}

export default function AuthorByline({ author }: Props) {
  if (!author) return null;

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
      <Avatar
        src={author.avatar?.url || undefined}
        alt={author.avatar?.alt || author.name}
        sx={{ width: 48, height: 48 }}
      >
        {author.name.charAt(0)}
      </Avatar>
      <Box>
        <Typography component="span" fontWeight={700} sx={{ display: "block", lineHeight: 1.4 }}>
          {author.name}
        </Typography>
        {author.jobTitle ? (
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
            {author.jobTitle}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}
