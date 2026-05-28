import type { Metadata } from "next"
import Link from "next/link"
import blogPosts from "@/data/blog"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid2 from "@mui/material/Grid2"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Chip from "@mui/material/Chip"
import Navbar from "@/components/layouts/Navbar"

const siteUrl = "https://sabaghelkuwait.com"

export const metadata: Metadata = {
    title: "مدونة صباغ الكويت – مقالات ونصائح في الصباغة والدهانات",
    description:
        "مقالات متخصصة عن صباغ الكويت: أسعار الصباغة، أفضل الدهانات، صباغ رخيص، صباغ هندي، معلم صباغ، وخدمات الصباغة في جميع مناطق الكويت.",
    keywords: [
        "صباغ الكويت",
        "مدونة صباغة الكويت",
        "أسعار صباغة الكويت",
        "دهانات الكويت",
        "صباغ رخيص الكويت",
        "صباغ هندي الكويت",
        "معلم صباغ الكويت",
        "صباغ شاطر ورخيص",
        "اصباغ الكويت",
        "افضل صباغ الكويت",
    ],
    alternates: { canonical: `${siteUrl}/blogs` },
    openGraph: {
        type: "website",
        locale: "ar_KW",
        url: `${siteUrl}/blogs`,
        title: "مدونة صباغ الكويت – مقالات ونصائح في الصباغة والدهانات",
        description:
            "مقالات متخصصة عن صباغ الكويت: أسعار الصباغة، أفضل الدهانات، وخدمات الصباغة في جميع مناطق الكويت",
        siteName: "صباغ الكويت",
        images: [{ url: `${siteUrl}/logo.webp`, width: 1200, height: 630, alt: "صباغ الكويت" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "مدونة صباغ الكويت",
        description: "مقالات متخصصة في الصباغة والدهانات في الكويت",
        images: [`${siteUrl}/logo.webp`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    other: { "geo.region": "KW", "geo.placename": "Kuwait" },
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("ar-KW", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}

export default function BlogsPage() {
    const posts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    const blogListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "مقالات صباغ الكويت",
        description: "مقالات متخصصة عن الصباغة والدهانات في الكويت",
        url: `${siteUrl}/blogs`,
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${siteUrl}/blogs/${post.slug}`,
            name: post.title,
        })),
    }

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "مدونة صباغ الكويت", item: `${siteUrl}/blogs` },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <Navbar />
            {/* Hero */}
            <Box
                component="header"
                sx={{
                    background: "linear-gradient(135deg, #1565c0 0%, #1976d2 60%, #42a5f5 100%)",
                    color: "white",
                    py: 16,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        fontWeight={800}
                        sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2, lineHeight: 1.3 }}
                    >
                        مدونة صباغ الكويت
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            opacity: 0.92,
                            fontWeight: 400,
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            maxWidth: 600,
                            mx: "auto",
                        }}
                    >
                        دليلك الشامل لأسعار الصباغة، أفضل الدهانات، ونصائح اختيار الصباغ المناسب في جميع مناطق الكويت
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                {/* Articles grid */}
                <Box component="main">
                    <Grid2 container spacing={3}>
                        {posts.map((post) => (
                            <Grid2 key={post.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                                >
                                    <Card
                                        component="article"
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            transition: "transform 0.2s, box-shadow 0.2s",
                                            "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                                                <Chip label="صباغة" color="primary" size="small" />
                                                <Typography variant="caption" color="text.secondary">
                                                    {post.readTime} دقائق قراءة
                                                </Typography>
                                            </Box>
                                            <Typography
                                                component="h2"
                                                fontWeight={700}
                                                lineHeight={1.5}
                                                mb={1.5}
                                                sx={{
                                                    fontSize: "1rem",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {post.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                lineHeight={1.8}
                                                sx={{
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    mb: 2,
                                                }}
                                            >
                                                {post.description}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                color="text.disabled"
                                                component="time"
                                                dateTime={post.date}
                                            >
                                                {formatDate(post.date)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid2>
                        ))}
                    </Grid2>
                </Box>

                {/* SEO text section */}
                <Box
                    component="section"
                    sx={{ bgcolor: "action.hover", borderRadius: 3, p: { xs: 3, md: 6 }, mt: 8 }}
                >
                    <Typography component="h2" fontWeight={700} mb={2.5} sx={{ fontSize: "1.375rem" }}>
                        كل ما تحتاجه عن صباغ الكويت في مكان واحد
                    </Typography>
                    <Typography variant="body1" color="text.secondary" lineHeight={1.95} mb={2}>
                        مدونة صباغ الكويت هي مرجعك الأول لكل ما يتعلق بالصباغة والدهانات في الكويت. نغطي كل المناطق من الجهراء
                        شمالاً إلى الأحمدي جنوباً، مروراً بحولي والفروانية والسالمية ومبارك الكبير. سواء كنت تبحث عن{" "}
                        <strong>صباغ رخيص في الكويت</strong>، أو <strong>معلم صباغ محترف للفلل الفاخرة</strong>، أو{" "}
                        <strong>صباغ هندي بسعر مناسب</strong>، أو <strong>صباغ شاطر ورخيص</strong>، ستجد هنا الدليل الشامل الذي
                        يساعدك على اتخاذ القرار الصحيح.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" lineHeight={1.95}>
                        نشرح <strong>أسعار الصباغة في الكويت 2025</strong>، وأنواع{" "}
                        <strong>اصباغ الكويت</strong> المناسبة للمناخ الكويتي القاسي من حرارة وغبار وملوحة، وكيف تختار{" "}
                        <strong>أفضل صباغ الكويت</strong> لكل نوع مشروع. كل مقالاتنا مبنية على معرفة عميقة بسوق الصباغة الكويتي
                        وتحديات العمل في هذا المناخ الاستثنائي.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}
