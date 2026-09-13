"use client";
import {
    Typography, Button, Container, Box, Grid2 as Grid, Paper, Stack,
    Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import { CheckCircle2, Droplet, MapPin, MessageCircle, Phone } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import {
    AccentButton, BoxStyle, ButtonsWrapper, HeaderContainer, HeroSection,
    PaperStyle, Section, StyledAppBar, TitleBox,
} from "./Styled";
import Portfolio from "@/components/sections/Portfolio";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArticleCard from "@/components/articles/ArticleCard";
import port from "@/data/port.json";
import type { ServiceContent } from "@/data/services-content";
import type { ArticleListItem } from "@/lib/cms/types";
import { getRegions, getServices } from "@/lib/seo/links";

interface ServicesProps {
    slug: string;
    /** full service title from data/services.json (the page <h1>). */
    title: string;
    content: ServiceContent;
    relatedArticles: ArticleListItem[];
}

export default function ServicesPage({ title, content, relatedArticles }: ServicesProps) {
    const relatedLocations = getRegions(content.relatedLocations);
    const relatedServices = getServices(content.relatedServices);

    return (
        <>
            <StyledAppBar>
                <HeaderContainer maxWidth="lg">
                    <TitleBox>
                        <div style={{ position: "relative", width: "100px", height: "60px" }}>
                            <Link href="/" title="صباغ الكويت">
                                <Image src="/logo.webp" alt="صباغ الكويت" fill sizes="200px" style={{ objectFit: "contain" }} />
                            </Link>
                        </div>
                        <Typography fontWeight="bold" color="primary" fontSize={20}>
                            {content.label}
                        </Typography>
                    </TitleBox>
                    <Link href={"tel:+96590998489"} title="اتصل الآن">
                        <AccentButton variant="contained">احجز الآن</AccentButton>
                    </Link>
                </HeaderContainer>
            </StyledAppBar>

            {/* ═══ HERO ═══ */}
            <HeroSection>
                <Container maxWidth="md">
                    <Box sx={{ pt: 2, pb: 1 }}>
                        <Breadcrumbs
                            items={[
                                { name: "الرئيسية", href: "/" },
                                { name: "الخدمات", href: "/services" },
                                { name: content.label },
                            ]}
                        />
                    </Box>
                    <Typography component="h1" variant="h1" fontWeight="bold" gutterBottom fontSize={{ xs: 28, md: 36 }}>
                        {title}
                    </Typography>
                    <Typography component="p" fontSize={{ xs: 16, md: 20 }} color="text.secondary" paragraph>
                        خدمة احترافية في جميع مناطق الكويت — دهانات أصلية، معاينة مجانية، وضمان على العمل.
                    </Typography>
                    <ButtonsWrapper>
                        <Link href={"tel:+96590998489"} title="اتصل الآن">
                            <AccentButton size="large" variant="contained">
                                <Phone size={20} /> اتصل الآن: 90998489
                            </AccentButton>
                        </Link>
                        <Link href={"https://wa.me/96590998489"} target="_blank" rel="noopener noreferrer" title="واتساب">
                            <Button size="large" variant="outlined">
                                <MessageCircle size={20} /> واتساب
                            </Button>
                        </Link>
                    </ButtonsWrapper>
                </Container>
            </HeroSection>

            {/* ═══ INTRO ═══ */}
            <Section>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" mb={3} fontSize={{ xs: 22, md: 28 }}>
                        عن خدمة {content.label}
                    </Typography>
                    {content.intro.map((p, i) => (
                        <Typography
                            key={i}
                            component="p"
                            color="text.secondary"
                            paragraph
                            sx={{ lineHeight: 1.95 }}
                            dangerouslySetInnerHTML={{ __html: p }}
                        />
                    ))}
                </Container>
            </Section>

            <Portfolio portfolio={port} />

            {/* ═══ BENEFITS ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" mb={4} fontSize={{ xs: 22, md: 28 }}>
                        مميزات {content.label}
                    </Typography>
                    <List>
                        {content.benefits.map((b, i) => (
                            <ListItem key={i} disableGutters alignItems="flex-start">
                                <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle2 /></ListItemIcon>
                                <ListItemText primaryTypographyProps={{ color: "text.secondary" }} primary={b} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Section>

            {/* ═══ PROCESS ═══ */}
            <Section>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                        كيف ننفّذ الخدمة
                    </Typography>
                    <Stack spacing={4}>
                        {content.process.map((step, i) => (
                            <Stack key={i} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle>{i + 1}</BoxStyle>
                                <Paper elevation={0} sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 2 }}>
                                    <Typography color="text.secondary">{step}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ DETAILS ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" mb={3} fontSize={{ xs: 22, md: 28 }}>
                        تفاصيل مهمة عن {content.label}
                    </Typography>
                    <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.95 }}>
                        {content.details}
                    </Typography>
                </Container>
            </Section>

            {/* ═══ RELATED LOCATIONS ═══ */}
            {relatedLocations.length > 0 ? (
                <Section>
                    <Container maxWidth="lg">
                        <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={{ xs: 22, md: 28 }}>
                            نقدم {content.label} في هذه المناطق
                        </Typography>
                        <Grid container spacing={2}>
                            {relatedLocations.map((r) => (
                                <Grid key={r.slug} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Link href={`/regions/${r.slug}`} title={`صباغ ${r.label}`} style={{ textDecoration: "none" }}>
                                        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 2, border: "1px solid", borderColor: "divider", textAlign: "center", transition: "all 0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "action.hover" } }}>
                                            <MapPin size={20} color="#012e8d" />
                                            <Typography fontWeight="medium" fontSize={14} mt={1} color="text.primary">{r.label}</Typography>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Section>
            ) : null}

            {/* ═══ RELATED SERVICES ═══ */}
            {relatedServices.length > 0 ? (
                <Section sx={{ bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={{ xs: 22, md: 28 }}>
                            خدمات ذات صلة
                        </Typography>
                        <Grid container spacing={3}>
                            {relatedServices.map((s) => (
                                <Grid key={s.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                                    <Link href={`/services/${s.slug}`} title={s.label} style={{ textDecoration: "none" }}>
                                        <PaperStyle elevation={1}>
                                            <Droplet size={22} />
                                            <Typography fontWeight="medium" color="text.primary">{s.label}</Typography>
                                        </PaperStyle>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Section>
            ) : null}

            {/* ═══ RELATED ARTICLES ═══ */}
            {relatedArticles.length > 0 ? (
                <Section>
                    <Container maxWidth="lg">
                        <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={{ xs: 22, md: 28 }}>
                            مقالات عن {content.label}
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
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                        الأسئلة الشائعة — {content.label}
                    </Typography>
                    {content.faq.map((faq, i) => (
                        <Accordion key={i} sx={{ mb: 2, borderRadius: 2, bgcolor: "background.default" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: "bold", "& .MuiAccordionSummary-content": { justifyContent: "space-between" } }}>
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
            <Box sx={{ bgcolor: "primary.main", color: "white", py: 8, textAlign: "center" }}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" fontSize={{ xs: 22, md: 28 }} mb={2} color="white">
                        احجز {content.label} الآن
                    </Typography>
                    <Typography fontSize={18} mb={4} sx={{ opacity: 0.9 }} color="white">
                        معاينة مجانية وعرض سعر تفصيلي بدون التزام
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                        <Link href="tel:+96590998489" title="اتصل بصباغ الكويت">
                            <Button size="large" variant="contained" sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.100" } }}>
                                <Phone size={20} /> اتصل الآن: 90998489
                            </Button>
                        </Link>
                        <Link href="https://wa.me/96590998489" target="_blank" rel="noopener noreferrer" title="واتساب">
                            <Button size="large" variant="outlined" sx={{ borderColor: "white", color: "white" }}>
                                <MessageCircle size={20} /> واتساب
                            </Button>
                        </Link>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
