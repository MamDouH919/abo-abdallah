"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Button, Divider, MenuItem, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/seo/site";

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

// ✅ Lightweight primary navigation — the full area/service architecture stays
// reachable via /regions and /services rather than being listed here.
const NavLinks = [
    { label: "الصفحة الرئيسية", href: "/" },
    { label: "خدمات الصباغة", href: "/services" },
    { label: "مناطق الخدمة", href: "/regions" },
    { label: "المقالات", href: "/articles" },
    { label: "الأسعار", href: "/asaar-sabagh-kuwait" },
    { label: "من نحن", href: "/about" },
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
                        <Box component="div" sx={{ position: "relative", width: 100, height: 60 }}>
                            <Link href="/" title="دار الألوان | صباغ الكويت" aria-label="العودة إلى الصفحة الرئيسية">
                                <Image
                                    src="/logo.webp"
                                    alt="شعار دار الألوان - صباغ الكويت"
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

                        {/* ✅ Desktop CTAs */}
                        <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
                            <Button
                                variant="outlined"
                                color="success"
                                size="small"
                                startIcon={<WhatsAppIcon />}
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="تواصل عبر واتساب"
                            >
                                واتساب
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<PhoneIcon />}
                                href={`tel:${PHONE_E164}`}
                                aria-label="اتصل الآن"
                            >
                                اتصل الآن
                            </Button>
                        </Stack>

                        {/* ✅ Mobile CTAs + Menu */}
                        <Stack direction="row" spacing={0.5} sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
                            <IconButton
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="تواصل عبر واتساب"
                                sx={{ color: "success.main" }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                            <IconButton
                                href={`tel:${PHONE_E164}`}
                                aria-label={`اتصل الآن - ${PHONE_DISPLAY}`}
                                sx={{ color: "primary.main" }}
                            >
                                <PhoneIcon />
                            </IconButton>
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
                        </Stack>
                    </Toolbar>
                </Container>
            </Root>
        </header>
    );
}

export default Navbar;
