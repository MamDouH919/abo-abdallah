"use client";
import { styled } from "@mui/material/styles";
import { Typography, Button, Container, Box, Paper, AppBar } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: "sticky",
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.paper,
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
}));

export const HeaderContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
}));

export const TitleBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
}));

export const AccentButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export const HeroSection = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: theme.spacing(10, 2),
    background: `linear-gradient(to bottom, ${theme.palette.action.hover}, ${theme.palette.background.default})`,
    textAlign: "center",
}));

export const ButtonsWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
    },
}));

export const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    backgroundColor: theme.palette.background.default,
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.action.hover,
    border: `1px solid ${theme.palette.divider}`,
}));

export const AccentTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
}));

export const Card = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    transition: "box-shadow 0.3s ease",
    textAlign: "center",
    "&:hover": {
        boxShadow: theme.shadows[4],
    },
}));

export const PaperStyle = styled(Paper)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 2,
    bgcolor: "background.default",
    "& svg": { color: theme.palette.primary.main },
}))

export const BoxStyle = styled(Box)(({ theme }) => ({
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
}));