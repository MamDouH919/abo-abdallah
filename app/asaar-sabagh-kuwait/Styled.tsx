"use client"

import { styled, alpha } from "@mui/material/styles"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Table from "@mui/material/Table"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import Link from "next/link"
import type { ElementType, AnchorHTMLAttributes } from "react"

// @types/react is pinned to v18 while the project runs React 19, which breaks
// MUI's OverridableComponent inference for `component`/anchor props on styled()
// wrappers. These generics restore that typing until the types package is upgraded.
type WithComponentProp = { component?: ElementType }
type WithAnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">

export const InlineLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  textDecoration: "none",
  borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
}))

export const HeaderLink = styled(Link)(({ theme }) => ({
  color: theme.palette.secondary.light,
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
}))

export const HeroHeader = styled(Box)<WithComponentProp>(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 60%, ${theme.palette.primary.light} 100%)`,
  color: theme.palette.primary.contrastText,
  textAlign: "center",
  paddingTop: theme.spacing(14),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(12),
  },
}))

export const HeroTitle = styled(Typography)<WithComponentProp>(({ theme }) => ({
  fontWeight: 800,
  fontSize: "1.9rem",
  marginBottom: theme.spacing(2),
  lineHeight: 1.35,
  [theme.breakpoints.up("md")]: { fontSize: "2.9rem" },
}))

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  opacity: 0.93,
  fontSize: "1rem",
  maxWidth: 640,
  margin: "0 auto",
  lineHeight: 1.8,
  [theme.breakpoints.up("md")]: { fontSize: "1.2rem" },
}))

export const MainContainer = styled(Container)<WithComponentProp>(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}))

export const SectionHeading = styled(Typography)<WithComponentProp>(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  fontSize: "1.4rem",
  [theme.breakpoints.up("md")]: { fontSize: "1.75rem" },
}))

export const SubHeading = styled(Typography)<WithComponentProp>({
  fontWeight: 700,
  marginBottom: 8,
  fontSize: "1.1rem",
})

export const ContentImageWrap = styled(Box)({
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
})

export const HeroImageWrap = styled(ContentImageWrap)({
  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
})

export const TocNav = styled(Box)<WithComponentProp>(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.06),
  border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(4) },
}))

export const TocHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "1.1rem",
  color: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}))

export const TocList = styled("ol")({
  margin: 0,
  paddingInlineStart: 20,
  "& li": { marginBottom: 8 },
})

export const TocEntryLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
  "&:hover": { textDecoration: "underline" },
}))

export const FactorCard = styled(Box)(({ theme }) => ({
  borderRight: `4px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(2.5),
  backgroundColor: theme.palette.action.hover,
  borderRadius: "0 8px 8px 0",
  padding: theme.spacing(2),
}))

export const GridTable = styled(Table)(({ theme }) => ({
  "& .MuiTableCell-root": {
    border: `1px solid ${theme.palette.divider}`,
  },
}))

export const HeadCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
}))

export const CompareHeadCell = styled(HeadCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  whiteSpace: "nowrap",
}))

export const StripedRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
  },
}))

export const NowrapCell = styled(TableCell)({ whiteSpace: "nowrap" })

export const PriceCell = styled(NowrapCell)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}))

export const BrandCell = styled(TableCell)({ fontWeight: 700 })

export const QualityCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export const RegionCard = styled(Box)(({ theme }) => ({
  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: "hidden",
}))

export const RegionHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 3),
}))

export const RegionBody = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(3) },
}))

export const RegionList = styled("ul")(({ theme }) => ({
  paddingInlineStart: theme.spacing(3),
  margin: 0,
  "& li": {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary,
    lineHeight: 1.9,
  },
}))

export const StepList = styled("ol")(({ theme }) => ({
  paddingInlineStart: theme.spacing(3),
  margin: 0,
  "& li": { marginBottom: theme.spacing(1.5), lineHeight: 2, color: theme.palette.text.secondary },
}))

export const TipList = styled("ul")(({ theme }) => ({
  paddingInlineStart: theme.spacing(3),
  margin: 0,
  "& li": { marginBottom: theme.spacing(1.5), lineHeight: 2, color: theme.palette.text.secondary },
}))

export const LinksStripBox = styled(Box)<WithComponentProp>(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.06),
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: { padding: theme.spacing(4) },
}))

export const LinksStripHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: "1.1rem",
  color: theme.palette.primary.dark,
}))

export const PillLink = styled(Link)(({ theme }) => ({
  display: "inline-block",
  padding: "6px 16px",
  backgroundColor: theme.palette.background.paper,
  borderRadius: 20,
  border: `1.5px solid ${alpha(theme.palette.primary.main, 0.3)}`,
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: theme.transitions.create(["background-color", "color"]),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

export const CtaWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "compact",
})<WithComponentProp & { compact?: boolean }>(({ theme, compact }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
  borderRadius: theme.shape.borderRadius * 3,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(compact ? 3 : 4),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(compact ? 4 : 6),
  },
}))

export const CtaTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact?: boolean }>(({ theme, compact }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  fontSize: compact ? "1.2rem" : "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: compact ? "1.5rem" : "2rem",
  },
}))

export const CtaSubtitle = styled(Typography)(({ theme }) => ({
  opacity: 0.93,
  fontSize: "1.05rem",
  lineHeight: 1.8,
  maxWidth: 520,
  margin: "0 auto",
  marginBottom: theme.spacing(2.5),
}))

export const CtaActions = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "compact",
})<{ compact?: boolean }>(({ theme, compact }) => ({
  flexWrap: "wrap",
  marginTop: compact ? theme.spacing(1.5) : 0,
}))

export const CallButton = styled(Button)(({ theme }) => ({
  fontWeight: 700,
  paddingInline: theme.spacing(4),
}))

export const WhatsappButton = styled(Button)<WithAnchorProps>(({ theme }) => ({
  fontWeight: 700,
  paddingInline: theme.spacing(4),
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  "&:hover": {
    borderColor: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.white, 0.12),
  },
}))
