"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Divider, MenuItem, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const PREFIX = "Navbar";
const classes = {
    stickyHeader: `${PREFIX}-stickyHeader`,
    animationFade: `${PREFIX}-animationFade`,
    activeLink: `${PREFIX}-activeLink`,
    StyledHeaderLink: `${PREFIX}-StyledHeaderLink`,
};

const animationFade = keyframes`
  0% {
    top: -50px;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    top: 0;
    transform: none;
  }
`;

const Root = styled(AppBar)(({ theme }) => ({
    top: 0,
    backgroundColor: theme.palette.background.default,
    [`&.${classes.animationFade}`]: {
        display: "flex !important",
        animation: `${animationFade} 1s both`,
    },
    [`&.${classes.stickyHeader}`]: {
        top: "-50px",
        display: "none",
        background: theme.palette.background.default,
        boxShadow: theme.shadows[5],
    },
    [`& .${classes.StyledHeaderLink}`]: {
        textDecoration: "none",
        textTransform: "uppercase",
        fontFamily: theme.typography.fontFamily,
        fontSize: 15,
        fontWeight: 500,
        color: theme.palette.text.secondary,
        transition: "color 0.3s ease",
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
    [`& .${classes.activeLink}`]: {
        color: theme.palette.primary.main,
    },
}));

const MenuItemRoot = styled(MenuItem)(({ theme }) => ({
    [`& .${classes.StyledHeaderLink}`]: {
        fontSize: 18,
        fontWeight: 500,
        color: theme.palette.text.secondary,
        "&:hover": {
            color: theme.palette.primary.main,
        },
    },
}));

// ✅ Define SEO-friendly Arabic routes
const NavLinks = [
    { label: "الصفحة الرئيسية", href: "/" },
    { label: "المناطق", href: "/المناطق" },
    { label: "الخدمات", href: "/الخدمات" },
    { label: "المقالات", href: "/المقالات" },
];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [shouldShowHeader, setShouldShowHeader] = useState<boolean>(false);
    const [animationClass, setAnimationClass] = useState<string>("");

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const listenToScroll = () => {
        setShouldShowHeader(window.pageYOffset > 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    useEffect(() => {
        if (shouldShowHeader) setAnimationClass(classes.animationFade);
        else setAnimationClass("");
    }, [shouldShowHeader]);

    return (
        <header>
            <Root
                position={shouldShowHeader ? "fixed" : "absolute"}
                className={clsx({
                    [classes.stickyHeader]: shouldShowHeader,
                    [animationClass]: shouldShowHeader,
                })}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{ justifyContent: "space-between", py: 2 }}
                        component="nav"
                        aria-label="التنقل الرئيسي"
                    >
                        {/* ✅ Logo section */}
                        <Box component="div" sx={{ position: "relative", width: 200, height: 60 }}>
                            <Link href="/" title="صباغ الكويت" aria-label="العودة إلى الصفحة الرئيسية">
                                <Image
                                    src="/logo.webp"
                                    alt="شعار صباغ الكويت - أفضل خدمات الصباغة والدهانات"
                                    fill
                                    sizes="200px"
                                    style={{ objectFit: "contain" }}
                                />
                            </Link>
                        </Box>

                        {/* ✅ Desktop Navigation */}
                        <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: { xs: "none", md: "flex" } }}>
                            {NavLinks.map((link) => (
                                <li key={link.href} style={{ marginInline: "12px" }}>
                                    <Link
                                        href={link.href}
                                        className={classes.StyledHeaderLink}
                                        title={link.label}
                                        aria-label={link.label}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </Box>

                        {/* ✅ Mobile Menu */}
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                aria-label="فتح القائمة"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="default"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                <Stack p={2} spacing={1} component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
                                    {NavLinks.map((link, index) => (
                                        <Fragment key={index}>
                                            <MenuItemRoot onClick={handleCloseNavMenu}>
                                                <Link
                                                    href={link.href}
                                                    onClick={handleCloseNavMenu}
                                                    className={classes.StyledHeaderLink}
                                                    title={link.label}
                                                    aria-label={link.label}

                                                >
                                                    {link.label}
                                                </Link>
                                            </MenuItemRoot>
                                            {index !== NavLinks.length - 1 && <Divider flexItem />}
                                        </Fragment>
                                    ))}
                                </Stack>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </Root>
        </header>
    );
}

export default Navbar;
