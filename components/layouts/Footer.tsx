"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Container, Grid2 as Grid, Stack, Typography } from '@mui/material';
import { FaRegCopyright } from 'react-icons/fa';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import SocialMediaLinks from '../Social';
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_URL, SOCIAL_PROFILES, SITE_NAME, SITE_TITLE } from '@/lib/seo/site';

const PREFIX = "Footer";
const classes = {
    text: `${PREFIX}-text`,
    heading: `${PREFIX}-heading`,
};

const Root = styled("footer")(({ theme }) => ({
    background: theme.palette.primary.main,
    padding: theme.spacing(6, 3, 3),
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        opacity: 0.85,
        fontSize: 14,
    },
    [`& .${classes.heading}`]: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        fontWeight: 700,
        fontSize: 16,
        marginBottom: theme.spacing(1.5),
    },
    "& a": {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        opacity: 0.85,
        textDecoration: "none",
        fontSize: 14,
        "&:hover": { opacity: 1, textDecoration: "underline" },
    },
}));

// Real, existing routes only — no invented pages.
const serviceLinks = [
    { href: "/services/kuwait-paints", label: "صباغ الكويت" },
    { href: "/services/apartment-painter-kuwait", label: "صباغ شقق" },
    { href: "/services/home-painter-kuwait", label: "صباغ منازل" },
    { href: "/services/decor-painter-kuwait", label: "صباغ ديكورات" },
    { href: "/services", label: "جميع الخدمات ←" },
];

const areaLinks = [
    { href: "/regions/sabaagh-alsaalimia", label: "صباغ السالمية" },
    { href: "/regions/sabaagh-hawalli", label: "صباغ حولي" },
    { href: "/regions/sabaagh-alfarwaniyah", label: "صباغ الفروانية" },
    { href: "/regions/sabaagh-aljahraa", label: "صباغ الجهراء" },
    { href: "/regions", label: "جميع المناطق ←" },
];

const aboutLinks = [
    { href: "/about", label: "من نحن" },
    { href: "/asaar-sabagh-kuwait", label: "أسعار الصباغة" },
    { href: "/blogs", label: "المدونة" },
    { href: "/articles", label: "المقالات" },
    { href: "/privacy-policy", label: "سياسة الخصوصية" },
    { href: "/terms-conditions", label: "الشروط والأحكام" },
];

const socialLinks = SOCIAL_PROFILES.map((link) => ({
    code: (link.includes("instagram") ? "INSTAGRAM" : "WEBSITE") as "INSTAGRAM" | "WEBSITE",
    link,
}));

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Root>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography className={classes.heading} component="p">{SITE_TITLE}</Typography>
                        <Typography className={classes.text}>
                            خدمات الصباغة والدهانات للمنازل والشقق والفلل في جميع مناطق الكويت.
                        </Typography>
                        <Stack direction="row" spacing={1.5} mt={2} flexWrap="wrap">
                            <SocialMediaLinks links={socialLinks} />
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 6, md: 3 }}>
                        <Typography className={classes.heading} component="h2">الخدمات</Typography>
                        <Stack spacing={1} component="nav" aria-label="روابط الخدمات">
                            {serviceLinks.map((l) => (
                                <Link key={l.href} href={l.href} title={l.label}>{l.label}</Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 6, md: 3 }}>
                        <Typography className={classes.heading} component="h2">مناطق الخدمة</Typography>
                        <Stack spacing={1} component="nav" aria-label="روابط المناطق">
                            {areaLinks.map((l) => (
                                <Link key={l.href} href={l.href} title={l.label}>{l.label}</Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography className={classes.heading} component="h2">تواصل معنا</Typography>
                        <Stack spacing={1}>
                            <Link href={`tel:${PHONE_E164}`} title="اتصل الآن" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <PhoneIcon fontSize="small" /> {PHONE_DISPLAY}
                            </Link>
                            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" title="واتساب" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                <WhatsAppIcon fontSize="small" /> واتساب
                            </Link>
                            {aboutLinks.map((l) => (
                                <Link key={l.href} href={l.href} title={l.label}>{l.label}</Link>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    mt={5}
                    pt={3}
                    sx={{ borderTop: "1px solid rgba(255,255,255,.15)" }}
                >
                    <FaRegCopyright className={classes.text} />
                    <Typography className={classes.text}>{year} {SITE_NAME}</Typography>
                </Stack>
            </Container>
        </Root>
    )
}

export default Footer
