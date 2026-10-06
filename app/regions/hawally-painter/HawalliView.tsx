"use client";
/**
 * /regions/sabaagh-hawalli — "صباغ حولي".
 *
 * Built from the same blocks as the generic area template
 * (other-pages/Regions.tsx) so it looks identical, but with its own content
 * structure focused on what is specific to Hawally. Kuwait-wide service detail
 * lives on /services/kuwait-paints and the per-service pages, linked from here.
 */
import {
    Typography, Button, Container, Box, Grid2 as Grid, Paper, Stack, Chip,
    Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import { CheckCircle2, MapPin, MessageCircle, Phone } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import { AccentButton, BoxStyle, ButtonsWrapper, HeroSection, Section } from "@/other-pages/Styled";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArticleCard from "@/components/articles/ArticleCard";
import Navbar from "@/components/layouts/Navbar";
import type { ArticleListItem } from "@/lib/cms/types";
import type { RegionRef } from "@/lib/seo/links";
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_URL } from "@/lib/seo/site";
import {
    AREA, PAGE_LABEL, SERVICES, LOCAL_POINTS, NEIGHBOURHOODS, WHY_US, PROCESS, WORK_PHOTOS, FAQS,
} from "./content";

const h2Size = { xs: 22, md: 28 };

interface Props {
    nearbyAreas: RegionRef[];
    relatedArticles: ArticleListItem[];
    /** Price-guide banner, rendered server-side by the route. */
    priceBanner: React.ReactNode;
}

export default function HawalliView({ nearbyAreas, relatedArticles, priceBanner }: Props) {
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
                                { name: "مناطق الخدمة", href: "/regions" },
                                { name: PAGE_LABEL },
                            ]}
                        />
                    </Box>
                    <Typography id="page-title" component="h1" variant="h1" fontWeight="bold" gutterBottom fontSize={{ xs: 28, md: 36 }}>
                        {PAGE_LABEL}
                    </Typography>
                    <Typography component="p" fontSize={{ xs: 16, md: 20 }} color="text.secondary" paragraph>
                        تقدم <Link href="/">دار الألوان</Link> خدمات الصباغة والدهانات في {AREA} لشقق العمارات
                        والمنازل والمحلات والمكاتب: دهانات داخلية وخارجية، دهانات ديكورية وورق جدران، مع تجهيز
                        الجدران ومعالجة التشققات والرطوبة قبل الدهان.
                    </Typography>
                    <Typography component="p" color="text.secondary" paragraph sx={{ lineHeight: 1.9 }}>
                        لطلب الخدمة في {AREA} تواصل معنا هاتفياً أو عبر واتساب، وأخبرنا بنوع العقار والأعمال
                        المطلوبة لتحديد موعد المعاينة وتقديم عرض السعر قبل بدء العمل.
                    </Typography>
                    <ButtonsWrapper>
                        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                            <AccentButton size="large" variant="contained" tabIndex={-1}>
                                <MessageCircle size={20} aria-hidden="true" /> اطلب خدمة صباغة في {AREA}
                            </AccentButton>
                        </Link>
                        <Button href={`tel:${PHONE_E164}`} size="large" variant="outlined">
                            <Phone size={20} aria-hidden="true" /> اتصل الآن: {PHONE_DISPLAY}
                        </Button>
                    </ButtonsWrapper>
                </Container>
            </HeroSection>

            {/* ═══ SERVICES IN HAWALLY ═══ */}
            <Section as="section" aria-labelledby="services-title">
                <Container maxWidth="lg">
                    <Typography id="services-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Size}>
                        خدمات الصباغة والدهانات في {AREA}
                    </Typography>
                    <Typography component="p" color="text.secondary" textAlign="center" maxWidth={720} mx="auto" mb={6} sx={{ lineHeight: 1.9 }}>
                        هذه الخدمات التي ننفذها في {AREA}، ولتفاصيل كل خدمة على مستوى الكويت راجع صفحة{" "}
                        <Link href="/services/kuwait-paints">خدمات الصباغة والدهانات</Link>.
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

            {/* ═══ LOCAL CONTEXT — what is specific to Hawally ═══ */}
            <Section as="section" aria-labelledby="local-title" sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography id="local-title" component="h2" variant="h2" fontWeight="bold" mb={3} fontSize={h2Size}>
                        ما يميز أعمال الصباغة في {AREA}
                    </Typography>
                    {LOCAL_POINTS.map((p) => (
                        <Box key={p.title} mb={3}>
                            <Typography component="h3" fontSize={19} fontWeight={700} mb={1}>
                                {p.title}
                            </Typography>
                            <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.95 }}>
                                {p.body}
                            </Typography>
                        </Box>
                    ))}
                    <Typography component="p" color="text.secondary" mb={1.5}>
                        من الأماكن التي نصل إليها في {AREA}:
                    </Typography>
                    <Stack component="ul" direction="row" flexWrap="wrap" gap={1.5} sx={{ listStyle: "none", p: 0, m: 0 }}>
                        {NEIGHBOURHOODS.map((n) => (
                            <li key={n}>
                                <Chip label={n} variant="outlined" color="primary" />
                            </li>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ WHY US ═══ */}
            <Section as="section" aria-labelledby="why-title">
                <Container maxWidth="md">
                    <Typography id="why-title" component="h2" variant="h2" fontWeight="bold" mb={4} fontSize={h2Size}>
                        لماذا تختار دار الألوان لخدمات الصباغة في {AREA}؟
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

            {/* ═══ PROCESS ═══ */}
            <Section as="section" aria-labelledby="process-title" sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography id="process-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={h2Size}>
                        كيفية طلب خدمة الصباغة في {AREA}
                    </Typography>
                    <Stack component="ol" spacing={4} sx={{ listStyle: "none", p: 0, m: 0 }}>
                        {PROCESS.map((step, i) => (
                            <Stack component="li" key={step.title} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle aria-hidden="true">{i + 1}</BoxStyle>
                                <Paper elevation={0} sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 2 }}>
                                    <Typography component="h3" fontSize={18} fontWeight="bold" mb={0.5}>{step.title}</Typography>
                                    <Typography color="text.secondary">{step.body}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ WORK SAMPLES — not labelled as Hawally jobs (unverified) ═══ */}
            <Section as="section" aria-labelledby="work-title">
                <Container maxWidth="lg">
                    <Typography id="work-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Size}>
                        نماذج من أعمال دار الألوان
                    </Typography>
                    <Typography component="p" color="text.secondary" textAlign="center" mb={5}>
                        صور من أعمال الصباغة والدهانات التي نفذناها في الكويت.
                    </Typography>
                    <Grid container spacing={2}>
                        {WORK_PHOTOS.map((p) => (
                            <Grid key={p.src} size={{ xs: 12, sm: 6, md: 3 }}>
                                <Box component="figure" sx={{ m: 0, position: "relative", aspectRatio: "1 / 1", borderRadius: 2, overflow: "hidden" }}>
                                    <Image
                                        src={p.src}
                                        alt={p.alt}
                                        fill
                                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                                        style={{ objectFit: "cover" }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ SERVICE AREAS ═══ */}
            {nearbyAreas.length > 0 ? (
                <Section as="section" aria-labelledby="areas-title" sx={{ bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Typography id="areas-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={h2Size}>
                            مناطق خدمة دار الألوان
                        </Typography>
                        <Typography component="p" color="text.secondary" textAlign="center" maxWidth={680} mx="auto" mb={5}>
                            إلى جانب {AREA} نخدم المناطق القريبة منها، ويمكنك الاطلاع على{" "}
                            <Link href="/regions">جميع مناطق الخدمة</Link>.
                        </Typography>
                        <Grid container spacing={2} justifyContent="center">
                            {nearbyAreas.map((r) => (
                                <Grid key={r.slug} size={{ xs: 6, sm: 4, md: 2 }}>
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
                        <Typography id="articles-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={h2Size}>
                            مقالات عن الصباغة في {AREA}
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
                    <Typography id="faq-title" component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={h2Size}>
                        الأسئلة الشائعة عن الصباغة في {AREA}
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
                    <Typography id="cta-title" component="h2" variant="h2" fontWeight="bold" fontSize={h2Size} mb={2} color="white">
                        تواصل مع دار الألوان
                    </Typography>
                    <Typography fontSize={18} mb={4} sx={{ opacity: 0.9 }} color="white">
                        أخبرنا بنوع العقار في {AREA} والأعمال المطلوبة، لتحديد موعد المعاينة والحصول على عرض سعر قبل بدء العمل.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                        <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="large" variant="contained" sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.100" } }}>
                            <MessageCircle size={20} aria-hidden="true" /> احصل على عرض سعر
                        </Button>
                        <Button href={`tel:${PHONE_E164}`} size="large" variant="outlined" sx={{ borderColor: "white", color: "white" }}>
                            <Phone size={20} aria-hidden="true" /> اتصل الآن: {PHONE_DISPLAY}
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
