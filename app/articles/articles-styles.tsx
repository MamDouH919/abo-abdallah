"use client";

// Styled components for app/articles/page.tsx, split into their own client
// module. `styled()` is a client-only API — calling it directly inside
// page.tsx (an async Server Component with no "use client") breaks the
// production build ("Attempted to call the default export of styled.js from
// the server"). Same pattern as lib/styles.ts: build the styled components in
// a client file, render them as plain JSX from the server page.

import type { ElementType } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const HeaderBox = styled(Box)<{ component?: ElementType }>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 60%, ${theme.palette.primary.light} 100%)`,
  color: theme.palette.primary.contrastText,
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(20),
  textAlign: "center",
}));

export const HeaderTitle = styled(Typography)<{ component?: ElementType }>(({ theme }) => ({
  fontWeight: 800,
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
  lineHeight: 1.3,
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));

export const HeaderDescription = styled(Typography)<{ component?: ElementType }>(({ theme }) => ({
  opacity: 0.92,
  fontSize: "1rem",
  maxWidth: 600,
  marginInline: "auto",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
}));

export const ContentContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const CategoryFilterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
  flexWrap: "wrap",
}));

export const CategoryFilterTitle = styled(Typography)<{ component?: ElementType }>({
  fontSize: "1.1rem",
  fontWeight: 700,
});

export const EmptyStateBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

export const EmptyStateTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  color: theme.palette.text.secondary,
}));

export const PaginationNav = styled(Box)<{ component?: ElementType }>(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(6),
}));
