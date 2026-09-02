/**
 * "About the author" card rendered below the article body. Shows the author's
 * bio, expertise tags, credentials and external social links. Every field is
 * optional — a section is skipped when empty, and the whole card is skipped
 * when there is no author or nothing beyond the name to show.
 */

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Author } from "@/lib/cms/types";

interface Props {
  author: Author | null;
}

export default function AuthorBio({ author }: Props) {
  if (!author) return null;

  const hasExpertise = author.expertise.length > 0;
  const hasCredentials = author.credentials.length > 0;
  const hasSocial = author.socialLinks.length > 0;
  const hasExperience = typeof author.yearsOfExperience === "number";

  if (!author.bio && !hasExpertise && !hasCredentials && !hasSocial && !hasExperience) {
    return null;
  }

  return (
    <Box
      component="section"
      sx={{ mt: 6, p: { xs: 3, md: 4 }, borderRadius: 4, bgcolor: "action.hover" }}
    >
      <Typography component="h2" fontWeight={700} sx={{ fontSize: "1.25rem", mb: 3 }}>
        عن الكاتب
      </Typography>

      <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", flexWrap: "wrap" }}>
        <Avatar
          src={author.avatar?.url || undefined}
          alt={author.avatar?.alt || author.name}
          sx={{ width: 72, height: 72 }}
        >
          {author.name.charAt(0)}
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 240 }}>
          <Typography fontWeight={700} sx={{ fontSize: "1.05rem" }}>
            {author.name}
          </Typography>
          {author.jobTitle ? (
            <Typography variant="body2" color="text.secondary">
              {author.jobTitle}
            </Typography>
          ) : null}
          {hasExperience ? (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              خبرة {author.yearsOfExperience} سنة
            </Typography>
          ) : null}

          {author.bio ? (
            <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.9 }}>
              {author.bio}
            </Typography>
          ) : null}

          {hasExpertise ? (
            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
              {author.expertise.map((item) => (
                <Chip key={item} label={item} size="small" variant="outlined" />
              ))}
            </Stack>
          ) : null}

          {hasCredentials ? (
            <Box
              component="ul"
              sx={{ mt: 2, mb: 0, paddingInlineStart: "1.25rem", color: "text.secondary" }}
            >
              {author.credentials.map((credential, i) => (
                <Typography key={i} component="li" variant="body2" sx={{ lineHeight: 1.8 }}>
                  {[credential.title, credential.issuer, credential.year]
                    .filter(Boolean)
                    .join(" — ")}
                </Typography>
              ))}
            </Box>
          ) : null}

          {hasSocial ? (
            <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 2 }}>
              {author.socialLinks.map((link) => (
                <Typography
                  key={link.url}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: 600, textDecoration: "none" }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
