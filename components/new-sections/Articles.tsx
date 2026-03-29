"use client";

import { styled } from "@mui/material/styles";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
} from "@mui/material";
import Image from "next/image";

const ArticlesSection = styled("section")(() => ({
    backgroundColor: "#f8f9fa",
    padding: "80px 20px",
}));

const Title = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
    marginBottom: "50px",
    color: theme.palette.primary.main,
}));

const ArticleCard = styled(Card)(({ theme }) => ({
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: theme.shadows[2],
    transition: "transform 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:hover": { transform: "translateY(-5px)" },
}));

const ImageWrapper = styled(Box)(() => ({
    position: "relative",
    width: "100%",
    height: 240,
    overflow: "hidden",
}));

const ArticleContent = styled(CardContent)(() => ({
    flexGrow: 1,
    "& h3": { fontSize: "1.2rem", fontWeight: 600, color: "#333" },
    "& p": { fontSize: "1rem", color: "#555", marginTop: "5px" },
}));

export default function Articles() {
    // Articles - Expanded to 12 articles
    const articles = [
        {
            title: "أحدث صيحات ألوان الدهانات في الكويت 2025",
            desc: "تعرف على ألوان الدهانات العصرية التي تضيف لمسة فاخرة لمنزلك هذا العام.",
            image: "/Images/صباغ-الكويت.webp",
            alt: "أحدث ألوان الدهانات في الكويت 2025",
            datePublished: "2025-01-15",
            dateModified: "2025-01-15",
            author: "صباغ الكويت",
            category: "ألوان وديكور",
        },
        {
            title: "كيفية اختيار الصباغ المناسب لمنزلك",
            desc: "دليل شامل لاختيار أفضل صباغ لضمان جودة عالية وتشطيب مثالي.",
            image: "/Images/img2.webp",
            alt: "اختيار الصباغ المناسب في الكويت",
            datePublished: "2025-01-10",
            dateModified: "2025-01-10",
            author: "صباغ الكويت",
            category: "نصائح",
        },
        {
            title: "دهانات صديقة للبيئة للأطفال",
            desc: "أفضل الدهانات الآمنة للأطفال والمتوفرة في الكويت لضمان بيئة صحية.",
            image: "/Images/img3.webp",
            alt: "دهانات صديقة للبيئة للأطفال في الكويت",
            datePublished: "2025-01-05",
            dateModified: "2025-01-05",
            author: "صباغ الكويت",
            category: "صحة وسلامة",
        },
        {
            title: "الفرق بين دهانات جوتن ودهانات ناشونال",
            desc: "مقارنة شاملة بين أشهر ماركات الدهانات في الكويت لمساعدتك في الاختيار الأمثل.",
            image: "/Images/img4.webp",
            alt: "مقارنة بين ماركات الدهانات في الكويت",
            datePublished: "2024-12-28",
            dateModified: "2024-12-28",
            author: "صباغ الكويت",
            category: "مقارنات",
        },
        {
            title: "أفضل أنواع ورق الجدران للمنازل العصرية",
            desc: "دليلك الكامل لاختيار ورق الجدران المناسب لكل غرفة في منزلك.",
            image: "/Images/img5.webp",
            alt: "أنواع ورق الجدران في الكويت",
            datePublished: "2024-12-20",
            dateModified: "2024-12-20",
            author: "صباغ الكويت",
            category: "ورق جدران",
        },
        {
            title: "كيفية العناية بالدهانات لإطالة عمرها",
            desc: "نصائح عملية للحفاظ على دهانات منزلك نظيفة وجميلة لسنوات طويلة.",
            image: "/Images/img6.webp",
            alt: "العناية بالدهانات في الكويت",
            datePublished: "2024-12-15",
            dateModified: "2024-12-15",
            author: "صباغ الكويت",
            category: "صيانة",
        },
        {
            title: "أخطاء شائعة عند دهان المنزل وكيفية تجنبها",
            desc: "تعرف على أكثر الأخطاء شيوعاً في أعمال الدهان وكيف تتجنبها.",
            image: "/Images/img7.webp",
            alt: "أخطاء الدهان الشائعة في الكويت",
            datePublished: "2024-12-10",
            dateModified: "2024-12-10",
            author: "صباغ الكويت",
            category: "نصائح",
        },
        {
            title: "دليل ألوان غرف النوم للحصول على نوم هادئ",
            desc: "اختر الألوان المثالية لغرفة نومك لتحصل على راحة وهدوء تام.",
            image: "/Images/img8.webp",
            alt: "ألوان غرف النوم في الكويت",
            datePublished: "2024-12-05",
            dateModified: "2024-12-05",
            author: "صباغ الكويت",
            category: "ألوان وديكور",
        },
        {
            title: "تقنيات الدهان الحديثة: من التقليدي إلى ثلاثي الأبعاد",
            desc: "استكشف أحدث تقنيات الدهان المتوفرة في الكويت للحصول على تأثيرات مذهلة.",
            image: "/Images/img9.webp",
            alt: "تقنيات الدهان الحديثة في الكويت",
            datePublished: "2024-11-28",
            dateModified: "2024-11-28",
            author: "صباغ الكويت",
            category: "تقنيات",
        },
        {
            title: "كيف تختار اللون المناسب لكل غرفة في منزلك",
            desc: "دليل شامل لاختيار الألوان المثالية حسب وظيفة كل غرفة.",
            image: "/Images/img10.webp",
            alt: "اختيار ألوان الغرف في الكويت",
            datePublished: "2024-11-20",
            dateModified: "2024-11-20",
            author: "صباغ الكويت",
            category: "ألوان وديكور",
        },
        {
            title: "الدهانات المقاومة للرطوبة: الحل الأمثل للحمامات والمطابخ",
            desc: "تعرف على أفضل أنواع الدهانات المقاومة للرطوبة والعفن في الكويت.",
            image: "/Images/img11.webp",
            alt: "دهانات مقاومة للرطوبة في الكويت",
            datePublished: "2024-11-15",
            dateModified: "2024-11-15",
            author: "صباغ الكويت",
            category: "صحة وسلامة",
        },
        {
            title: "تكلفة دهان المنزل في الكويت: دليل الأسعار 2025",
            desc: "كل ما تحتاج معرفته عن أسعار الدهانات وتكاليف العمالة في الكويت.",
            image: "/Images/img12.webp",
            alt: "تكلفة الدهانات في الكويت 2025",
            datePublished: "2024-11-10",
            dateModified: "2024-11-10",
            author: "صباغ الكويت",
            category: "أسعار",
        },
    ];

    return (
        <ArticlesSection
            id="articles"
            aria-labelledby="articles-heading"
            itemScope
            itemType="https://schema.org/Blog"
        >
            <Container>
                <Title variant="h2" id="articles-heading" itemProp="name">
                    مقالات ونصائح – صباغ الكويت
                </Title>

                {/* Hidden structured data for blog */}
                <meta
                    itemProp="description"
                    content="مقالات ونصائح حول الدهانات والصباغة في الكويت"
                />

                <Grid container spacing={4}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <article>
                                <ArticleCard
                                    itemScope
                                    itemType="https://schema.org/BlogPosting"
                                >
                                    {/* Image with schema markup and Next.js Image */}
                                    <Box
                                        itemProp="image"
                                        itemScope
                                        itemType="https://schema.org/ImageObject"
                                    >
                                        <ImageWrapper>
                                            <Image
                                                src={article.image}
                                                alt={article.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{ objectFit: "cover" }}
                                                loading="lazy"
                                                quality={85}
                                            />
                                        </ImageWrapper>
                                        <meta itemProp="contentUrl" content={article.image} />
                                        <meta itemProp="url" content={article.image} />
                                        <meta itemProp="caption" content={article.alt} />
                                        <meta itemProp="width" content="400" />
                                        <meta itemProp="height" content="180" />
                                    </Box>

                                    <ArticleContent>
                                        {/* Article title */}
                                        <Typography component="h3" itemProp="headline">
                                            {article.title}
                                        </Typography>

                                        {/* Article description */}
                                        <Typography component="p" itemProp="description">
                                            {article.desc}
                                        </Typography>

                                        {/* Hidden schema data */}
                                        <meta
                                            itemProp="datePublished"
                                            content={article.datePublished}
                                        />
                                        <meta itemProp="dateModified" content={article.dateModified} />

                                        {/* Author info */}
                                        <span
                                            itemProp="author"
                                            itemScope
                                            itemType="https://schema.org/Person"
                                            style={{ display: "none" }}
                                        >
                                            <meta itemProp="name" content={article.author} />
                                        </span>

                                        {/* Publisher info */}
                                        <span
                                            itemProp="publisher"
                                            itemScope
                                            itemType="https://schema.org/Organization"
                                            style={{ display: "none" }}
                                        >
                                            <meta itemProp="name" content="صباغ الكويت" />
                                            <span
                                                itemProp="logo"
                                                itemScope
                                                itemType="https://schema.org/ImageObject"
                                            >
                                                <meta itemProp="url" content="/logo.webp" />
                                            </span>
                                        </span>

                                        {/* Article body preview */}
                                        <meta itemProp="articleBody" content={article.desc} />

                                        {/* Main entity of page */}
                                        <meta
                                            itemProp="mainEntityOfPage"
                                            content={`#article-${index}`}
                                        />

                                        {/* Category */}
                                        <meta itemProp="articleSection" content={article.category} />
                                        <meta itemProp="keywords" content={`${article.category}, صباغ الكويت, دهانات`} />
                                    </ArticleContent>
                                </ArticleCard>
                            </article>
                        </Grid>
                    ))}
                </Grid>

                {/* Structured data for ItemList */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            itemListElement: articles.map((article, index) => ({
                                "@type": "ListItem",
                                position: index + 1,
                                item: {
                                    "@type": "BlogPosting",
                                    headline: article.title,
                                    description: article.desc,
                                    image: {
                                        "@type": "ImageObject",
                                        url: `https://sabaghelkuwait.com${article.image}`,
                                        width: 400,
                                        height: 180,
                                    },
                                    datePublished: article.datePublished,
                                    dateModified: article.dateModified,
                                    author: {
                                        "@type": "Person",
                                        name: article.author,
                                    },
                                    publisher: {
                                        "@type": "Organization",
                                        name: "صباغ الكويت",
                                        logo: {
                                            "@type": "ImageObject",
                                            url: "https://sabaghelkuwait.com/logo.webp",
                                        },
                                    },
                                    articleSection: article.category,
                                    keywords: `${article.category}, صباغ الكويت, دهانات`,
                                    mainEntityOfPage: {
                                        "@type": "WebPage",
                                        "@id": `https://sabaghelkuwait.com#article-${index}`,
                                    },
                                },
                            })),
                        }),
                    }}
                />
            </Container>
        </ArticlesSection>
    );
}