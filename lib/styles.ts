"use client"
import { styled } from "@mui/material/styles"

import NextLink from "next/link"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"


export const HeroSection = styled("section")(({ theme }) => ({
    background: `linear-gradient(to bottom right, ${theme.palette.primary.main}1A, ${theme.palette.background.default}, ${theme.palette.secondary.main}1A)`,
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(6),
}))

export const ArticleSection = styled("article")(({ theme }) => ({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}))

export const RelatedSection = styled("section")(({ theme }) => ({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.action.hover,
    [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
}))

export const MaxWidthBox = styled(Box)({
    maxWidth: 896,
    marginLeft: "auto",
    marginRight: "auto",
})

export const MetaItem = styled("span")({
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
})

export const ProseContent = styled("div")(({ theme }) => ({
    lineHeight: 1.8,
    "& h2": {
        fontSize: "1.5rem",
        fontWeight: 700,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
    },
    "& h3": {
        fontSize: "1.25rem",
        fontWeight: 700,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1.5),
        color: theme.palette.text.primary,
    },
    "& p": {
        color: theme.palette.text.secondary,
        lineHeight: 1.8,
        marginBottom: theme.spacing(2),
    },
    "& ul, & ol": {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    "& li": {
        color: theme.palette.text.secondary,
        lineHeight: 1.8,
    },
    "& strong": {
        color: theme.palette.text.primary,
        fontWeight: 600,
    },
}))

export const PaddedCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        padding: theme.spacing(5),
    },
}))

export const HoverCard = styled(Card)(({ theme }) => ({
    transition: "box-shadow 0.2s ease",
    "&:hover": {
        boxShadow: theme.shadows[4],
    },
}))

export const BackLink = styled(NextLink)(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.palette.primary.main,
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
    },
}))

export const PostLink = styled(NextLink)(({ theme }) => ({
    color: "inherit",
    textDecoration: "none",
    transition: "color 0.2s ease",
    "&:hover": {
        color: theme.palette.primary.main,
    },
}))

export const ClampedText = styled(Typography)({
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
})