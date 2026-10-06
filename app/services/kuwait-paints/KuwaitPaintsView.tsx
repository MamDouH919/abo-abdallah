"use client";
/**
 * /services/kuwait-paints — "صباغة ودهانات الكويت".
 *
 * Built from the same blocks as the generic service template
 * (other-pages/Services.tsx) so it looks identical, but with its own content
 * structure: this is the hub that explains the painting services one by one
 * and links out to each dedicated service page. The homepage owns the
 * "صباغ الكويت" keyword; this page targets "صباغة ودهانات الكويت".
 */
import {
    Typography, Button, Container, Box, Grid2 as Grid, Paper, Stack,
    Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { AccentButton, BoxStyle, ButtonsWrapper, HeroSection, Section } from "@/other-pages/Styled";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArticleCard from "@/components/articles/ArticleCard";
import Navbar from "@/components/layouts/Navbar";
import type { ArticleListItem } from "@/lib/cms/types";
import type { RegionRef } from "@/lib/seo/links";
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/seo/site";
import { PAGE_LABEL, SERVICES, PROCESS, WHY_US, FAQS } from "./content";

const h2Sx = { fontSize: { xs: 22, md: 28 } };

interface Props {
    areas: RegionRef[];
    relatedArticles: ArticleListItem[];
    /** Price-guide banner, rendered server-side by the route. */
    priceBanner: React.ReactNode;
}

export default function KuwaitPaintsView({ areas, relatedArticles, priceBanner }: Props) {
    return (
        <>
            <Navbar />

            {/* ═══ HERO ═══ */}
            <HeroSection as="section" aria-labelledby="page-title">
                <Container maxWidth="md">
                    <Box sx={{ pt: 2, pb: 1 }}>
                        <Breadcrumbs
                            items={[
                                { name: "الرئيسية", href: "/" },
                                { name: "الخدمات", href: "/services" },
                                { name: PAGE_LABEL },
                            ]}
                        />
                    </Box>
                    <Typography id="page-title" component="h1" variant="h1" fontWeight="bold" gutterBottom fontSize={{ xs: 28, md: 36 }}>
                        {PAGE_LABEL}
                    </Typography>
                    <Typography component="p" fontSize={{ xs: 16, md: 20 }} color="text.secondary" paragraph>
                        تقدم <strong>دار الألوان</strong> خدمات الصباغة والدهانات في الكويت للمنازل والشقق والفلل
                        والمكاتب: دهانات داخلية وخارجية، دهانات ديكورية، ورق جدران وجبس بورد، مع تجهيز
                        الجدران ومعالجتها قبل الدهان.
                    </Typography>
                    <ButtonsWrapper>
                        <AccentButton href={`tel:${PHONE_E164}`} size="large" variant="contained">
                            <Phone size={20} aria-hidden="true" /> اتصل الآن: {PHONE_DISPLAY}
                        </AccentButton>
                        <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="large" variant="outlined">
                            <MessageCircle size={20} aria-hidden="true" /> اطلب الخدمة عبر واتساب
                        </Button>
                    </ButtonsWrapper>
                </Container>
            </HeroSection>

            {/* ═══ SERVICES ═══ */}
            <Section as="section" aria-labelledby="services-title">
                <Container maxWidth="lg">
                    <Typography id="services-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Sx.fontSize}>
                        خدمات الصباغة والدهانات في الكويت
                    </Typography>
                    <Typography component="p" color="text.secondary" textAlign="center" maxWidth={720} mx="auto" mb={6} sx={{ lineHeight: 1.9 }}>
                        نغطي أعمال الدهان من تجهيز السطح حتى التشطيب النهائي. هذه الخدمات التي ننفذها،
                        ولكل خدمة رئيسية صفحة بتفاصيلها.
                    </Typography>
                    <Grid container spacing={3}>
                        {SERVICES.map((s) => (
                            <Grid key={s.title} size={{ xs: 12, md: 6 }} display="flex">
                                <Paper
                                    component="article"
                                    elevation={0}
                                    sx={{ p: 3, width: "100%", borderRadius: 2, border: "1px solid", borderColor: "divider", bgcolor: "background.paper" }}
                                >
                                    <Typography component="h3" fontSize={19} fontWeight={700} color="primary.main" mb={1.5}>
                                        {s.title}
                                    </Typography>
                                    <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.9 }} mb={s.links.length ? 2 : 0}>
                                        {s.body}
                                    </Typography>
                                    {s.links.length > 0 && (
                                        <Stack direction="row" flexWrap="wrap" gap={2}>
                                            {s.links.map((l) => (
                                                <Link key={l.href} href={l.href} style={{ fontWeight: 700 }}>
                                                    {l.text} ←
                                                </Link>
                                            ))}
                                        </Stack>
                                    )}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ PROCESS ═══ */}
            <Section as="section" aria-labelledby="process-title" sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography id="process-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={h2Sx.fontSize}>
                        كيف ننفذ أعمال الصباغة والدهانات
                    </Typography>
                    <Stack component="ol" spacing={4} sx={{ listStyle: "none", p: 0, m: 0 }}>
                        {PROCESS.map((step, i) => (
                            <Stack component="li" key={i} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle aria-hidden="true">{i + 1}</BoxStyle>
                                <Paper elevation={0} sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 2 }}>
                                    <Typography color="text.secondary">{step}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ WHY US ═══ */}
            <Section as="section" aria-labelledby="why-title">
                <Container maxWidth="md">
                    <Typography id="why-title" component="h2" variant="h2" fontWeight="bold" mb={4} fontSize={h2Sx.fontSize}>
                        لماذا تختار دار الألوان؟
                    </Typography>
                    <List>
                        {WHY_US.map((b) => (
                            <ListItem key={b} disableGutters alignItems="flex-start">
                                <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle2 aria-hidden="true" /></ListItemIcon>
                                <ListItemText primaryTypographyProps={{ color: "text.secondary" }} primary={b} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Section>

            {/* ═══ AREAS ═══ */}
            {areas.length > 0 ? (
                <Section as="section" aria-labelledby="areas-title" sx={{ bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Typography id="areas-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Sx.fontSize}>
                            مناطق خدمة دار الألوان في الكويت
                        </Typography>
                        <Typography component="p" color="text.secondary" textAlign="center" maxWidth={680} mx="auto" mb={5}>
                            ننفذ أعمال الصباغة والدهانات في مختلف محافظات الكويت. هذه أبرز المناطق، ويمكنك
                            الاطلاع على <Link href="/regions">جميع مناطق الخدمة</Link>.
                        </Typography>
                        <Grid container spacing={2}>
                            {areas.map((r) => (
                                <Grid key={r.slug} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Link href={`/regions/${r.slug}`} style={{ textDecoration: "none" }}>
                                        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 2, border: "1px solid", borderColor: "divider", textAlign: "center", transition: "all 0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "action.hover" } }}>
                                            <MapPin size={20} aria-hidden="true" />
                                            <Typography fontWeight="medium" fontSize={14} mt={1} color="text.primary">{r.label}</Typography>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Section>
            ) : null}

            {priceBanner}

            {/* ═══ RELATED ARTICLES ═══ */}
            {relatedArticles.length > 0 ? (
                <Section as="section" aria-labelledby="articles-title">
                    <Container maxWidth="lg">
                        <Typography id="articles-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={h2Sx.fontSize}>
                            مقالات عن الصباغة والدهانات
                        </Typography>
                        <Grid container spacing={3}>
                            {relatedArticles.slice(0, 3).map((a) => (
                                <Grid key={a.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <ArticleCard article={a} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Section>
            ) : null}

            {/* ═══ FAQs ═══ */}
            <Section as="section" aria-labelledby="faq-title" sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography id="faq-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={h2Sx.fontSize}>
                        الأسئلة الشائعة عن الصباغة والدهانات في الكويت
                    </Typography>
                    {FAQS.map((faq) => (
                        <Accordion key={faq.q} sx={{ mb: 2, borderRadius: 2, bgcolor: "background.default" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold" }}>
                                <Typography component="h3" fontSize={16} fontWeight={700}>{faq.q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.8 }}>
                                {faq.a}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Section>

            {/* ═══ CTA ═══ */}
            <Box component="section" aria-labelledby="cta-title" sx={{ bgcolor: "primary.main", color: "white", py: 8, textAlign: "center" }}>
                <Container maxWidth="md">
                    <Typography id="cta-title" component="h2" variant="h2" fontWeight="bold" fontSize={h2Sx.fontSize} mb={2} color="white">
                        اطلب خدمة الصباغة والدهانات
                    </Typography>
                    <Typography fontSize={18} mb={4} sx={{ opacity: 0.9 }} color="white">
                        تواصل معنا لتحديد موعد المعاينة والحصول على عرض سعر قبل بدء العمل.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                        <Button href={`tel:${PHONE_E164}`} size="large" variant="contained" sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.100" } }}>
                            <Phone size={20} aria-hidden="true" /> اتصل الآن: {PHONE_DISPLAY}
                        </Button>
                        <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="large" variant="outlined" sx={{ borderColor: "white", color: "white" }}>
                            <MessageCircle size={20} aria-hidden="true" /> تواصل عبر واتساب
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
