"use client";
import { styled, alpha } from "@mui/material/styles";
import { Box, Paper, Typography, Chip } from "@mui/material";
import Link from "next/link";

export const PriceBannerWrapper = styled(Box)(({ theme }) => ({
    maxWidth: 900,
    margin: `${theme.spacing(4)} auto`,
    padding: theme.spacing(0, 2),
}));

export const PriceBannerLink = styled(Link)({
    display: "block",
    textDecoration: "none",
});

export const PriceBannerCard = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    padding: theme.spacing(2.5, 3.5),
    borderRadius: theme.shape.borderRadius * 2,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 60%, ${theme.palette.primary.light} 100%)`,
    boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.35)}`,
    transition: "box-shadow 0.25s ease, transform 0.25s ease",
    "&:hover": {
        boxShadow: `0 6px 26px ${alpha(theme.palette.primary.main, 0.45)}`,
        transform: "translateY(-2px)",
    },
}));

export const PriceBannerEyebrow = styled(Chip)(({ theme }) => ({
    height: 24,
    fontWeight: 700,
    fontSize: "0.75rem",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.light,
    marginBottom: theme.spacing(0.75),
    "& .MuiChip-icon": {
        color: theme.palette.primary.dark,
    },
}));

export const PriceBannerTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: "1.1rem",
    lineHeight: 1.4,
}));

export const PriceBannerSubtitle = styled(Typography)(({ theme }) => ({
    color: alpha(theme.palette.primary.contrastText, 0.75),
}));

export const PriceBannerCta = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    flexShrink: 0,
    whiteSpace: "nowrap",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 2.25),
    borderRadius: theme.shape.borderRadius,
}));
