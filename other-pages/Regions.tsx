"use client";
import {
    Typography, Button, Container, Box, Grid2 as Grid,
    Paper, Stack, Accordion, AccordionSummary, AccordionDetails, Chip,
} from "@mui/material";
import { CheckCircle2, Droplet, Home, MapPin, MessageCircle, Palette, Phone } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import {
    AccentButton, BoxStyle, ButtonsWrapper, Card, HeaderContainer, HeroSection,
    PaperStyle, Section, StyledAppBar, TitleBox,
} from "./Styled";
import Portfolio from "@/components/sections/Portfolio";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ArticleCard from "@/components/articles/ArticleCard";
import portfolio from "@/data/portfolio.json";
import { buildRegionFaqs, buildRegionPriceList, type RegionContent } from "@/data/regions-content";
import type { ArticleListItem } from "@/lib/cms/types";
import Navbar from "@/components/layouts/Navbar";

export interface NearbyRegion {
    slug: string;
    area: string;
}

interface RegionsProps {
    slug: string;
    content: RegionContent;
    nearbyRegions: NearbyRegion[];
    relatedArticles: ArticleListItem[];
}

/**
 * These three scaffold sections render on all ~18 live region pages. Their
 * text used to be 100% identical (only the {area} in each section's <h2>
 * differed), which is most of why an SEO audit measured heavy overlap across
 * the pages despite each having a unique hand-written intro. Parameterising
 * them by area/propertyMix — real per-area data that already existed in
 * regions-content.ts but wasn't surfaced anywhere — makes the body text
 * actually differ page to page instead of just the headings.
 */
function buildFeatures(area: string, propertyMix?: string) {
    return [
        { icon: CheckCircle2, title: "خبرة طويلة", desc: `أكثر من 10 سنوات خبرة في دهان المنازل والشقق والفلل في ${area} وجميع مناطق الكويت` },
        { icon: Palette, title: "ألوان متنوعة", desc: propertyMix ? `تشكيلة ضخمة من أفضل الشركات العالمية تناسب ${propertyMix} المنتشرة في ${area}` : `تشكيلة ضخمة من أفضل الشركات العالمية تناسب مبانى ${area}` },
        { icon: Home, title: "نظافة مضمونة", desc: `لا نترك أي فوضى خلفنا بعد الانتهاء من العمل في ${area}` },
    ];
}

const paints = [
    { title: "دهانات بلاستيكية", desc: "مناسبة للجدران الداخلية وسهلة التنظيف" },
    { title: "دهانات زيتية", desc: "تعطي لمعة قوية ومقاومة للرطوبة" },
    { title: "دهانات ديكورية", desc: "مثل المخملية أو المعدنية الحديثة" },
    { title: "دهانات مقاومة", desc: "للرطوبة والعفن في المطابخ والحمامات" },
    { title: "دهانات خارجية", desc: "مقاومة لأشعة الشمس والظروف الجوية" },
    { title: "ورق جدران", desc: "بأنواعه وأشكاله المختلفة والعصرية" },
];

function buildSteps(area: string, propertyMix?: string) {
    return [
        { num: 1, title: "زيارة الموقع وتقييم الحالة", desc: propertyMix ? `معاينة ${propertyMix} في ${area} لمعرفة احتياجاتك` : `معاينة الجدران والأسقف في ${area} لمعرفة احتياجاتك` },
        { num: 2, title: "تقديم عرض السعر المناسب", desc: "عرض مفصل يشمل المواد والعمل" },
        { num: 3, title: "التحضير والتنظيف", desc: "تغطية الأرضيات والأثاث لحمايتها" },
        { num: 4, title: "الدهان والتنفيذ", desc: "تطبيق الطبقات بالتسلسل الصحيح" },
        { num: 5, title: "المراجعة والتسليم", desc: `فحص العمل في ${area} والتأكد من رضاك التام` },
    ];
}

/** Services every area page cross-links to (canonical /services/{slug}). */
const AREA_SERVICES: { slug: string; label: (area: string) => string }[] = [
    { slug: "home-painter-kuwait", label: (a) => `صباغ منازل ${a}` },
    { slug: "apartment-painter-kuwait", label: (a) => `صباغ شقق ${a}` },
    { slug: "kuwait-paints", label: () => `صباغ فلل وقصور` },
    { slug: "decor-painter-kuwait", label: () => `دهانات ديكورية وجدران مميزة` },
    { slug: "wallpaper-installation-kuwait", label: () => `تركيب ورق جدران` },
    { slug: "paint-kuwait", label: () => `دهانات داخلية وخارجية` },
];

/** Deterministic small hash so each slug always picks the same intro variant. */
function seed(slug: string): number {
    let h = 0;
    for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
    return h;
}

/**
 * Content for areas without hand-written copy: assembled from the area name and
 * its real adjacent areas, with the sentence order rotated by slug so no two
 * pages are identical.
 */
function generatedIntro(area: string, nearbyNames: string[], slug: string): string[] {
    const near = nearbyNames.slice(0, 3).join(" و");
    const variants: string[][] = [
        [
            `نقدم خدمات <strong>صباغ ${area}</strong> لدهان الشقق والمنازل والفلل في جميع أنحاء ${area}${near ? ` والمناطق المجاورة لها مثل ${near}` : ""}. فريقنا من الصباغين المحترفين ينفّذ الدهانات الداخلية والخارجية، ومعالجة التشققات والرطوبة، وتركيب ورق الجدران، باستخدام دهانات أصلية من جوتن وناشيونال وسكيب مع فاتورة رسمية.`,
            `سواء كنت تريد تجديد لون غرفة واحدة أو دهان بيت كامل في ${area}، نقدم معاينة مجانية وعرض سعر تفصيلي بدون التزام، ونلتزم بالمواعيد وبنظافة المكان. نساعدك أيضاً في اختيار الألوان والتشطيبات المناسبة لأثاثك. اتصل على 90998489.`,
        ],
        [
            `<strong>صباغ ${area}</strong> — نخدم سكان ${area}${near ? ` والأحياء القريبة منها مثل ${near}` : ""} في كل ما يخص الدهانات: دهان داخلي بتشطيب ناعم، دهان واجهات خارجية يتحمّل حرارة الكويت والغبار، معالجة الرطوبة والعفن في الحمامات والمطابخ، وتنفيذ ديكورات الجبس وورق الجدران.`,
            `نتعامل في ${area} مع الشقق المؤجرة والفلل العائلية والمحلات التجارية، ونقدّم خيار الخدمة شاملة المواد الأصلية أو العمالة فقط. الشقة تُنجز عادة في يوم إلى يومين والفيلا في 3 إلى 5 أيام. للمعاينة المجانية في ${area} تواصل معنا على 90998489.`,
        ],
        [
            `إذا كنت تبحث عن <strong>صباغ في ${area}</strong> يجمع بين الجودة والسعر المناسب، فنحن نغطي ${area}${near ? ` وما حولها من مناطق مثل ${near}` : ""} بخدمات دهان المنازل والشقق والفلل، والدهانات الحديثة والمخملية، وإصلاح تشققات الجدران والأسقف قبل الطلاء.`,
            `نبدأ دائماً بمعاينة مجانية في ${area} لتحديد حالة الجدران وعدد الطبقات المطلوبة، ثم نعطيك عرض سعر واضحاً يفصل المواد عن العمل. جميع أعمالنا مضمونة ونعود لأي إصلاح خلال فترة الضمان. اتصل الآن على 90998489.`,
        ],
    ];
    return variants[seed(slug) % variants.length];
}

export default function Regions({ slug, content, nearbyRegions, relatedArticles }: RegionsProps) {
    const area = content.area;
    const intro = content.intro?.length
        ? content.intro
        : generatedIntro(area, nearbyRegions.map((r) => r.area), slug);
    const faqs = buildRegionFaqs(content);
    const priceList = buildRegionPriceList(content);
    const features = buildFeatures(area, content.propertyMix);
    const steps = buildSteps(area, content.propertyMix);

    return (
        <>
            {/* ═══ NAVBAR ═══ */}
            <Navbar />

            {/* ═══ HERO ═══ */}
            <HeroSection>
                <Container maxWidth="md">
                    <Box sx={{ pt: 2, pb: 1 }}>
                        <Breadcrumbs
                            items={[
                                { name: "الرئيسية", href: "/" },
                                { name: "المناطق", href: "/regions" },
                                { name: `صباغ ${area}` },
                            ]}
                        />
                    </Box>
                    <Typography component="h1" variant="h1" fontWeight="bold" gutterBottom fontSize={{ xs: 28, md: 36 }}>
                        صباغ {area} – خبرة وجودة بأيدي أفضل الصباغين
                    </Typography>
                    <Typography component="p" fontSize={{ xs: 16, md: 20 }} color="text.secondary" paragraph>
                        خدمات الصباغة والدهانات للشقق والمنازل والفلل في {area}
                        {nearbyRegions.length ? ` والمناطق المجاورة` : ""} بأعلى جودة وسعر مناسب.
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

            {/* ═══ INTRO — unique per area ═══ */}
            <Section>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" mb={3} fontSize={{ xs: 22, md: 28 }}>
                        خدمات صباغ {area}
                    </Typography>
                    {intro.map((p, i) => (
                        <Typography
                            key={i}
                            component="p"
                            color="text.secondary"
                            paragraph
                            sx={{ lineHeight: 1.95 }}
                            dangerouslySetInnerHTML={{ __html: p }}
                        />
                    ))}
                    {content.propertyMix ? (
                        <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.95 }}>
                            غالبية العقارات في {area} هي {content.propertyMix}، وهذا ما يحدد نوع التحضير والدهان الأنسب لكل طلب.
                        </Typography>
                    ) : null}
                    {content.landmarks?.length ? (
                        <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.95 }}>
                            نصل إليك في {area} بالقرب من {content.landmarks.join("، ")} وجميع الأحياء الأخرى.
                        </Typography>
                    ) : null}
                </Container>
            </Section>

            {/* ═══ NEIGHBOURHOODS ═══ */}
            {content.neighbourhoods?.length ? (
                <Section sx={{ bgcolor: "background.paper" }}>
                    <Container maxWidth="md">
                        <Typography component="h2" variant="h2" fontWeight="bold" mb={3} fontSize={{ xs: 22, md: 28 }}>
                            الأحياء التي نخدمها في {area}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1.5}>
                            {content.neighbourhoods.map((n) => (
                                <Chip key={n} label={n} variant="outlined" color="primary" />
                            ))}
                        </Stack>
                    </Container>
                </Section>
            ) : null}

            {/* ═══ PORTFOLIO ═══ */}
            <Portfolio portfolio={portfolio} />

            {/* ═══ SERVICES IN AREA — cross-link to /services ═══ */}
            <Section>
                <Container maxWidth="lg">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={{ xs: 22, md: 28 }}>
                        خدمات الصباغة في {area}
                    </Typography>
                    <Grid container spacing={3}>
                        {AREA_SERVICES.map((s) => (
                            <Grid key={s.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Link href={`/services/${s.slug}`} title={s.label(area)} style={{ textDecoration: "none" }}>
                                    <PaperStyle elevation={1}>
                                        <Droplet size={22} />
                                        <Typography fontWeight="medium" color="text.primary">{s.label(area)}</Typography>
                                    </PaperStyle>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ WHY CHOOSE US ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                        لماذا تختار صباغ {area}؟
                    </Typography>
                    <Grid container spacing={2}>
                        {features.map((item, i) => (
                            <Grid key={i} size={{ xs: 12, md: 4 }}>
                                <Card>
                                    <item.icon size={40} />
                                    <Typography component="h3" fontSize={20} fontWeight="bold" gutterBottom>{item.title}</Typography>
                                    <Typography color="text.secondary">{item.desc}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ PRICING ═══ */}
            <Section>
                <Container maxWidth="lg">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={{ xs: 22, md: 28 }}>
                        أسعار الصباغ في {area}
                    </Typography>
                    <Typography color="text.secondary" textAlign="center" mb={6}>
                        أسعار تقريبية — نقدم معاينة مجانية وعرض سعر تفصيلي
                    </Typography>
                    <Grid container spacing={3}>
                        {priceList.map((item, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "2px solid", borderColor: "primary.main", height: "100%", display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography component="h3" variant="h6" fontWeight="bold">{item.service}</Typography>
                                    <Typography variant="h5" fontWeight="bold" color="primary.main">{item.price}</Typography>
                                    <Chip label={item.note} size="small" variant="outlined" sx={{ alignSelf: "flex-start" }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Box textAlign="center" mt={5}>
                        <Link href={"tel:+96590998489"} title="احصل على عرض سعر مجاني">
                            <AccentButton size="large" variant="contained">
                                <Phone size={18} /> احصل على عرض سعر مجاني
                            </AccentButton>
                        </Link>
                    </Box>
                </Container>
            </Section>

            {/* ═══ WORK STEPS ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                        خطوات عملنا في {area}
                    </Typography>
                    <Stack spacing={4}>
                        {steps.map((step) => (
                            <Stack key={step.num} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle>{step.num}</BoxStyle>
                                <Paper elevation={0} sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 2 }}>
                                    <Typography component="h3" fontSize={18} fontWeight="bold" mb={0.5}>{step.title}</Typography>
                                    <Typography color="text.secondary">{step.desc}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ PAINT TYPES ═══ */}
            <Section>
                <Container maxWidth="lg">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                        أنواع الدهانات المتوفرة
                    </Typography>
                    <Grid container spacing={3}>
                        {paints.map((paint, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                <Paper elevation={0} sx={{ p: 3, borderRadius: 2, border: "1px solid", borderColor: "divider", bgcolor: "background.paper", height: "100%" }}>
                                    <Typography component="h3" fontSize={18} fontWeight="bold" mb={1}>{paint.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{paint.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ RELATED ARTICLES ═══ */}
            {relatedArticles.length > 0 ? (
                <Section sx={{ bgcolor: "background.paper" }}>
                    <Container maxWidth="lg">
                        <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={5} fontSize={{ xs: 22, md: 28 }}>
                            مقالات عن الصباغة في {area}
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
            <Section>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                        الأسئلة الشائعة — صباغ {area}
                    </Typography>
                    {faqs.map((faq, i) => (
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

            {/* ═══ CTA BANNER ═══ */}
            <Box sx={{ bgcolor: "primary.main", color: "white", py: 8, textAlign: "center" }}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h2" fontWeight="bold" fontSize={{ xs: 22, md: 28 }} mb={2} color="white">
                        جاهز لتحويل منزلك في {area}؟
                    </Typography>
                    <Typography fontSize={18} mb={4} sx={{ opacity: 0.9 }} color="white">
                        تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر بدون التزام
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

            {/* ═══ NEARBY REGIONS ═══ */}
            {nearbyRegions.length > 0 && (
                <Section>
                    <Container maxWidth="lg">
                        <Typography component="h2" variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={{ xs: 22, md: 28 }}>
                            مناطق مجاورة نخدمها أيضاً
                        </Typography>
                        <Grid container spacing={2}>
                            {nearbyRegions.map((r) => (
                                <Grid key={r.slug} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Link href={`/regions/${r.slug}`} title={`صباغ ${r.area}`} style={{ textDecoration: "none" }}>
                                        <Paper elevation={0} sx={{ p: 2.5, borderRadius: 2, border: "1px solid", borderColor: "divider", textAlign: "center", transition: "all 0.2s", "&:hover": { borderColor: "primary.main", bgcolor: "action.hover" } }}>
                                            <MapPin size={20}  />
                                            <Typography fontWeight="medium" fontSize={14} mt={1} color="text.primary">
                                                صباغ {r.area}
                                            </Typography>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Section>
            )}
        </>
    );
}
