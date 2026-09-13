
// ============================================
// 2. HERO SECTION - Fixed SEO & Accessibility
// ============================================
"use client"

import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { WHATSAPP_URL } from "@/lib/seo/site";

const TRUST_POINTS = [
    "خدمة جميع مناطق الكويت",
    "معاينة وتقدير التكلفة",
    "دهانات وتشطيبات متنوعة",
    "تنفيذ للمنازل والشقق والفلل",
];

const HeroWrapper = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(20, 0),
    textAlign: "center",

    [theme.breakpoints.up("md")]: {
        textAlign: "start",
    },
}));

const HeroHeader = styled("header")({
    marginBottom: "1rem",
});

const HeroTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.75rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
    lineHeight: 1.4,

    [theme.breakpoints.up("sm")]: {
        fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
    },
}));

const HeroText = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: theme.palette.text.secondary,
    maxWidth: "700px",
    margin: "0 auto",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
        margin: 0,
        marginTop: theme.spacing(2),
    },
}));

const HeroButtonWrapper = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(4),
}));

export default function HeroSection() {
    return (
        <HeroWrapper itemScope itemType="https://schema.org/Organization">
            <Container maxWidth="lg">
                <HeroHeader>
                    <HeroTitle variant="h1" itemProp="name">
                        صباغ الكويت — أفضل خدمات الصباغة والدهانات في الكويت
                    </HeroTitle>
                </HeroHeader>

                <HeroText itemProp="description">
                    نقدم خدمات <strong>الدهانات والصباغة</strong> في جميع مناطق الكويت. فريقنا من{" "}
                    <strong>الصباغين المحترفين</strong> يوفر دهانات داخلية وخارجية، تشطيب وترميم، باستخدام
                    أحدث المواد والألوان لضمان جودة تدوم طويلاً.
                </HeroText>

                <HeroButtonWrapper>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent={{ xs: "center", md: "flex-start" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            href="tel:+96590998489"
                            aria-label="اتصل بصباغ الكويت الآن"
                        >
                            اتصل الآن - 90998489
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            startIcon={<WhatsAppIcon />}
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="تواصل عبر واتساب مع صباغ الكويت"
                        >
                            تواصل عبر واتساب
                        </Button>
                    </Stack>
                </HeroButtonWrapper>

                <Stack
                    component="ul"
                    direction="row"
                    flexWrap="wrap"
                    gap={2}
                    justifyContent={{ xs: "center", md: "flex-start" }}
                    sx={{ listStyle: "none", p: 0, mt: 3 }}
                >
                    {TRUST_POINTS.map((point) => (
                        <Stack key={point} component="li" direction="row" alignItems="center" gap={0.75}>
                            <CheckCircleIcon color="primary" fontSize="small" aria-hidden="true" />
                            <Typography variant="body2" color="text.secondary" fontWeight={600}>
                                {point}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>

                {/* Hidden Schema Data */}
                <div style={{ display: 'none' }}>
                    <meta itemProp="telephone" content="+965-90998489" />
                    <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <meta itemProp="addressCountry" content="KW" />
                        <meta itemProp="addressLocality" content="الكويت" />
                    </span>
                </div>
            </Container>
        </HeroWrapper>
    );
}