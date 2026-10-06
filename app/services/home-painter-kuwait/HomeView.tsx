"use client";
/**
 * /services/home-painter-kuwait — "صباغ منازل الكويت".
 *
 * Built from the same blocks as the generic service template
 * (other-pages/Services.tsx) so it looks identical, but with house/villa-specific
 * content: what gets painted in a house, interior + exterior in one project,
 * existing vs. newly built houses, and painting while the family lives there.
 * Apartments live on /services/apartment-painter-kuwait and Kuwait-wide service
 * detail on /services/kuwait-paints — both are linked, not repeated.
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
import Portfolio from "@/components/sections/Portfolio";
import Navbar from "@/components/layouts/Navbar";
import type { ArticleListItem } from "@/lib/cms/types";
import type { RegionRef } from "@/lib/seo/links";
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/seo/site";
import { PAGE_LABEL, SERVICES, HOME_POINTS, PROCESS, WHY_US, WORK_PHOTOS, FAQS } from "./content";

const h2Sx = { fontSize: { xs: 22, md: 28 } };

interface Props {
    areas: RegionRef[];
    relatedArticles: ArticleListItem[];
    /** Price-guide banner, rendered server-side by the route. */
    priceBanner: React.ReactNode;
}

export default function HomeView({ areas, relatedArticles, priceBanner }: Props) {
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
                    <Typography component="p" fontSize={{ xs: 18, md: 22 }} fontWeight={600} color="primary.main" mb={2}>
                        ألوان وتشطيبات راقية لبيتك
                    </Typography>
                    <Typography component="p" fontSize={{ xs: 16, md: 20 }} color="text.secondary" paragraph>
                        تقدم دار الألوان خدمات صباغة ودهانات المنازل والفلل في الكويت: دهان الغرف والصالات والمجالس
                        والممرات والدرج والأسقف، ودهان الواجهات والأسوار، مع تجهيز الجدران ومعالجة التشققات قبل الدهان.
                        نعمل في البيوت القائمة التي تحتاج تجديداً بعد سنوات، وفي البيوت المستلمة حديثاً قبل السكن.
                    </Typography>
                    <Typography component="p" color="text.secondary" paragraph>
                        اتصل بنا أو راسلنا عبر واتساب لتحديد موعد معاينة المنزل، ثم نقدم لك عرض السعر قبل بدء العمل.
                    </Typography>
                    <ButtonsWrapper>
                        <AccentButton href={`tel:${PHONE_E164}`} size="large" variant="contained">
                            <Phone size={20} aria-hidden="true" /> اتصل الآن: {PHONE_DISPLAY}
                        </AccentButton>
                        <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="large" variant="outlined">
                            <MessageCircle size={20} aria-hidden="true" /> اطلب صباغة منزلك عبر واتساب
                        </Button>
                    </ButtonsWrapper>
                </Container>
            </HeroSection>

            {/* ═══ SERVICES ═══ */}
            <Section as="section" aria-labelledby="services-title">
                <Container maxWidth="lg">
                    <Typography id="services-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Sx.fontSize}>
                        خدمات صباغة ودهانات المنازل في الكويت
                    </Typography>
                    <Typography component="p" color="text.secondary" textAlign="center" maxWidth={720} mx="auto" mb={6} sx={{ lineHeight: 1.9 }}>
                        هذه أعمال الدهان التي ننفذها في البيوت والفلل، من تجهيز الجدار حتى التسليم. تجد باقي خدماتنا في
                        صفحة <Link href="/services/kuwait-paints">صباغة ودهانات الكويت</Link>، وللتعرف على دار الألوان
                        ومناطق خدمتنا زر صفحة <Link href="/">صباغ الكويت</Link> الرئيسية.
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

            {/* ═══ WORK SAMPLES — not labelled as specific jobs (unverified) ═══ */}
            <Portfolio portfolio={WORK_PHOTOS} name="نماذج من أعمال دار الألوان" />

            {/* ═══ HOUSE-SPECIFIC (vs. apartments) ═══ */}
            <Section as="section" aria-labelledby="home-title" sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography id="home-title" component="h2" variant="h2" fontWeight="bold" mb={4} fontSize={h2Sx.fontSize}>
                        ما يختلف في صباغة المنازل والفلل
                    </Typography>
                    <Stack spacing={3}>
                        {HOME_POINTS.map((p) => (
                            <Box key={p.title}>
                                <Typography component="h3" fontSize={18} fontWeight={700} color="primary.main" mb={1}>
                                    {p.title}
                                </Typography>
                                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.95 }}>
                                    {p.body}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                    <Typography component="p" color="text.secondary" mt={4} sx={{ lineHeight: 1.95 }}>
                        أما إذا كان عقارك شقة سكنية أو شقة تُجهَّز لمستأجر جديد، فالتفاصيل الخاصة بها في صفحة{" "}
                        <Link href="/services/apartment-painter-kuwait">صباغ شقق الكويت</Link>.
                    </Typography>
                </Container>
            </Section>

            {/* ═══ PROCESS ═══ */}
            <Section as="section" aria-labelledby="process-title">
                <Container maxWidth="md">
                    <Typography id="process-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={h2Sx.fontSize}>
                        طريقة تنفيذ صباغة المنزل
                    </Typography>
                    <Stack component="ol" spacing={4} sx={{ listStyle: "none", p: 0, m: 0 }}>
                        {PROCESS.map((step, i) => (
                            <Stack component="li" key={step.title} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle aria-hidden="true">{i + 1}</BoxStyle>
                                <Paper elevation={0} sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 2 }}>
                                    <Typography color="text.primary" fontWeight={700} mb={0.5}>{step.title}</Typography>
                                    <Typography color="text.secondary">{step.body}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ WHY US ═══ */}
            <Section as="section" aria-labelledby="why-title" sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography id="why-title" component="h2" variant="h2" fontWeight="bold" mb={4} fontSize={h2Sx.fontSize}>
                        لماذا تختار دار الألوان لصباغة منزلك؟
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

            {/* ═══ AREAS — kept short on purpose: this is a service page, not a location page ═══ */}
            {areas.length > 0 ? (
                <Section as="section" aria-labelledby="areas-title">
                    <Container maxWidth="lg">
                        <Typography id="areas-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Sx.fontSize}>
                            مناطق خدمة صباغ المنازل في الكويت
                        </Typography>
                        <Typography component="p" color="text.secondary" textAlign="center" maxWidth={680} mx="auto" mb={5}>
                            ننفذ صباغة المنازل والفلل في مختلف مناطق الكويت، ومنها المناطق التالية. يمكنك الاطلاع على{" "}
                            <Link href="/regions">جميع مناطق الخدمة</Link>، وإذا لم تجد منطقتك <Link href="#contact">تواصل معنا</Link>.
                        </Typography>
                        <Grid container spacing={2} justifyContent="center">
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
                            مقالات عن صباغة المنازل
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
                        الأسئلة الشائعة عن صباغة المنازل في الكويت
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
            <Box id="contact" component="section" aria-labelledby="cta-title" sx={{ bgcolor: "primary.main", color: "white", py: 8, textAlign: "center", scrollMarginTop: 80 }}>
                <Container maxWidth="md">
                    <Typography id="cta-title" component="h2" variant="h2" fontWeight="bold" fontSize={h2Sx.fontSize} mb={2} color="white">
                        اطلب خدمة صباغة منزلك
                    </Typography>
                    <Typography fontSize={18} mb={4} sx={{ opacity: 0.9 }} color="white">
                        أخبرنا بموقع البيت وعدد الأدوار والأعمال المطلوبة لتحديد موعد المعاينة والحصول على عرض سعر قبل بدء العمل.
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
