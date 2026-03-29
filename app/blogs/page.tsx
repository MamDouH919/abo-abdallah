// app/page.tsx - SEO Optimized Blog Listing Page
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';
import Link from 'next/link';
import { Metadata } from 'next';
import blogsData from '@/data/blogs.json';
// import SearchBox from '@/components/SearchBox';

interface Blog {
    id: string;
    keyword: string;
    title: string;
    description: string;
    image: string;
    date: string;
}

const siteUrl = 'https://sabaghelkuwait.com/';

export const metadata: Metadata = {
    title: 'صباغ الكويت - دليلك الشامل لأفضل خدمات الصباغة والدهانات في الكويت',
    description: 'اكتشف أفضل صباغ في الكويت، أسعار رخيصة، معلمين محترفين، خدمات صباغة في جميع المناطق. دليل شامل لخدمات الصباغة والدهانات الحديثة.',
    keywords: ['صباغ الكويت', 'صباغ رخيص', 'رقم صباغ', 'صباغ الجهراء', 'معلم صباغ', 'افضل صباغ الكويت', 'صباغ هندي'],
    authors: [{ name: 'صباغ الكويت' }],
    creator: 'صباغ الكويت',
    publisher: 'صباغ الكويت',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: 'website',
        locale: 'ar_KW',
        url: siteUrl,
        title: 'صباغ الكويت - دليلك الشامل لأفضل خدمات الصباغة',
        description: 'اكتشف أفضل صباغ في الكويت، أسعار رخيصة، معلمين محترفين، خدمات صباغة في جميع المناطق',
        siteName: 'مدونة صباغ الكويت',
        images: [{
            url: `${siteUrl}/logo.webp`,
            width: 1200,
            height: 630,
            alt: 'صباغ الكويت',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'صباغ الكويت - دليلك الشامل لأفضل خدمات الصباغة',
        description: 'اكتشف أفضل صباغ في الكويت، أسعار رخيصة، معلمين محترفين',
        images: [`${siteUrl}/logo.webp`],
    },
    other: {
        'geo.region': 'KW',
        'geo.placename': 'Kuwait',
    },
};

export default function Home() {
    const blogs: Blog[] = blogsData.blogs;

    // Structured data
    const websiteStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'مدونة صباغ الكويت',
        url: siteUrl,
        description: 'دليلك الشامل لخدمات الصباغة في الكويت - أفضل الصباغين وأحدث تقنيات الدهانات',
        potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    };

    const organizationStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'صباغ الكويت',
        url: siteUrl,
        logo: `${siteUrl}/logo.webp`,
        sameAs: [
            'https://www.instagram.com/yourprofile',
            'https://www.facebook.com/yourprofile'
        ]
    };

    const blogListStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: blogs.map((blog, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteUrl}/${blog.id}/المقالات`,
            name: blog.title
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListStructuredData) }}
            />

            <Box component="header" sx={{ bgcolor: 'primary.main', color: 'white', py: 4, mb: 6 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                            textAlign: 'center'
                        }}
                    >
                        مدونة صباغ الكويت
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            fontWeight: 400,
                            opacity: 0.9
                        }}
                    >
                        دليلك الشامل لخدمات الصباغة في الكويت
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ pb: 8 }}>
                {/* Search Box - Client Component */}
                {/* <SearchBox /> */}

                {/* Keywords Overview */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 3 }}>
                        المواضيع الرئيسية
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {Array.from(new Set(blogs.map(b => b.keyword))).map((keyword) => (
                            <Chip
                                key={keyword}
                                label={keyword}
                                color="primary"
                                variant="outlined"
                                sx={{ fontSize: '0.875rem' }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Blog Grid */}
                <Box component="main">
                    <Grid container spacing={4}>
                        {blogs.map((blog) => (
                            <Grid item xs={12} sm={6} md={4} key={blog.id}>
                                <Link href={`/${blog.id}/المقالات`} style={{ textDecoration: 'none' }}>
                                    <Card
                                        component="article"
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: 6
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={blog.image}
                                            alt={`${blog.title} - ${blog.keyword}`}
                                            loading="lazy"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box sx={{ mb: 2 }}>
                                                <Chip
                                                    label={blog.keyword}
                                                    size="small"
                                                    color="primary"
                                                    sx={{ mb: 1 }}
                                                />
                                                <Typography
                                                    variant="caption"
                                                    display="block"
                                                    color="text.secondary"
                                                    component="time"
                                                    dateTime={blog.date}
                                                >
                                                    {new Date(blog.date).toLocaleDateString('ar-EG', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                gutterBottom
                                                variant="h3"
                                                component="h2"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: '1.125rem',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    mb: 1.5
                                                }}
                                            >
                                                {blog.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    mb: 2
                                                }}
                                            >
                                                {blog.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* About Section for SEO */}
                <Box component="section" sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ fontSize: '1.5rem', fontWeight: 'bold', mb: 2 }}>
                        عن مدونة صباغ الكويت
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
                        نقدم لكم دليلاً شاملاً لأفضل خدمات الصباغة في الكويت. سواء كنت تبحث عن صباغ رخيص، معلم صباغ محترف، أو خدمات صباغة في منطقة معينة مثل الجهراء، ستجد هنا كل ما تحتاجه. نغطي جميع جوانب الصباغة من اختيار الألوان، أنواع الدهانات، التقنيات الحديثة، وأفضل الممارسات في المجال.
                    </Typography>
                </Box>
            </Container>
        </>
    );
}