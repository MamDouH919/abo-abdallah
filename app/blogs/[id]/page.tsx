import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';
import {
    Container,
    Typography,
    Box,
    Chip,
    Paper,
    Divider,
    Button,
    Breadcrumbs,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Blog {
    id: string;
    keyword: string;
    title: string;
    description: string;
    content: string;
    image: string;
    date: string;
}

// ✅ Generate static paths (replacement for getStaticPaths)
export async function generateStaticParams() {
    return blogsData.blogs.map((blog: Blog) => ({
        id: blog.id,
    }));
}

// ✅ Generate metadata dynamically for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const blog = blogsData.blogs.find((b: Blog) => b.id === params.id);
    const siteUrl = 'https://sabaghinkuwait.com';
    const blogUrl = `${siteUrl}/${params.id}/المقالات`;

    if (!blog) {
        return {
            title: 'لم يتم العثور على المقال',
            description: 'المقال المطلوب غير موجود',
        };
    }

    return {
        title: `${blog.title} | مدونة صباغ الكويت`,
        description: blog.description,
        keywords: `${blog.keyword}, صباغ, الكويت, دهانات, ديكور`,
        alternates: { canonical: blogUrl },
        openGraph: {
            type: 'article',
            url: blogUrl,
            title: blog.title,
            description: blog.description,
            images: [{ url: blog.image }],
            siteName: 'مدونة صباغ الكويت',
            locale: 'ar_KW',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.description,
            images: [blog.image],
        },
    };
}

// ✅ Page Component (Server Component)
export default function BlogPostPage({ params }: { params: { id: string } }) {
    const blog = blogsData.blogs.find((b: Blog) => b.id === params.id);

    if (!blog) {
        return (
            <Container sx={{ py: 8 }}>
                <Typography variant="h4">لم يتم العثور على المقال</Typography>
            </Container>
        );
    }

    const siteUrl = 'https://sabaghinkuwait.com/';
    const blogUrl = `${siteUrl}/${blog.id}/المقالات`;

    const relatedBlogs = blogsData.blogs
        .filter((b: Blog) => b.id !== blog.id)
        .slice(0, 3);

    // Structured Data (Schema.org)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.description,
        image: blog.image,
        datePublished: blog.date,
        dateModified: blog.date,
        author: {
            '@type': 'Organization',
            name: 'صباغ الكويت',
        },
        publisher: {
            '@type': 'Organization',
            name: 'صباغ الكويت',
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': blogUrl,
        },
        keywords: blog.keyword,
        articleBody: blog.content,
    };

    const breadcrumbStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: siteUrl },
            { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${siteUrl}/المقالات` },
            { '@type': 'ListItem', position: 3, name: blog.title, item: blogUrl },
        ],
    };

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
            />

            {/* Breadcrumbs */}
            <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
                    الرئيسية
                </Link>
                <Typography color="text.primary">{blog.keyword}</Typography>
            </Breadcrumbs>

            <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ mb: 4 }}>
                العودة للرئيسية
            </Button>

            <Paper elevation={0} sx={{ p: { xs: 2, md: 4 } }}>
                {/* Blog Header */}
                <Box component="article" sx={{ mb: 4 }}>
                    <Chip label={blog.keyword} color="primary" sx={{ mb: 2 }} />
                    <Typography
                        variant="h1"
                        component="h1"
                        gutterBottom
                        sx={{ fontWeight: 'bold', lineHeight: 1.3, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
                    >
                        {blog.title}
                    </Typography>
                    <Typography
                        variant="h2"
                        color="text.secondary"
                        sx={{ mb: 3, fontSize: { xs: '1.1rem', md: '1.25rem' }, fontWeight: 400 }}
                    >
                        {blog.description}
                    </Typography>

                    {/* Meta Info */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarTodayIcon fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary" component="time" dateTime={blog.date}>
                                {new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ mb: 4 }} />
                </Box>

                {/* Blog Image */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 250, md: 400 },
                        mb: 4,
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={blog.image}
                        alt={`${blog.title} - ${blog.keyword}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="(max-width: 768px) 100vw, 768px"
                    />
                </Box>

                {/* Blog Content */}
                <Box sx={{ mb: 4 }}>
                    {blog.content.split('\n\n').map((paragraph, index) => {
                        if (paragraph.includes('•')) {
                            const items = paragraph.split('•').filter((i) => i.trim());
                            return (
                                <Box key={index} component="section" sx={{ mb: 3 }}>
                                    <ul style={{ paddingRight: '20px' }}>
                                        {items.map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '8px' }}>
                                                <Typography
                                                    variant="body1"
                                                    component="span"
                                                    sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}
                                                >
                                                    {item.trim()}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            );
                        }

                        return (
                            <Typography
                                key={index}
                                variant="body1"
                                component="p"
                                paragraph
                                sx={{ fontSize: '1.125rem', lineHeight: 1.8, textAlign: 'justify', mb: 3 }}
                            >
                                {paragraph}
                            </Typography>
                        );
                    })}
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Keyword Info */}
                <Box component="aside" sx={{ mb: 4 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        معلومات الكلمة المفتاحية
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                        <Typography>الكلمة المفتاحية: {blog.keyword}</Typography>
                    </Box>
                </Box>

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                    <>
                        <Divider sx={{ my: 4 }} />
                        <Box component="section">
                            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.5rem', mb: 3 }}>
                                مقالات ذات صلة
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {relatedBlogs.map((relatedBlog: Blog) => (
                                    <Link key={relatedBlog.id} href={`/${relatedBlog.id}/المقالات`}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: 'flex',
                                                gap: 2,
                                                transition: 'all 0.2s',
                                                '&:hover': { boxShadow: 3, transform: 'translateX(-4px)' },
                                            }}
                                        >
                                            <Box sx={{ position: 'relative', width: 100, height: 100, flexShrink: 0 }}>
                                                <Image
                                                    src={relatedBlog.image}
                                                    alt={relatedBlog.title}
                                                    fill
                                                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                                                />
                                            </Box>
                                            <Box>
                                                <Chip label={relatedBlog.keyword} size="small" sx={{ mb: 1 }} />
                                                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', mb: 0.5 }}>
                                                    {relatedBlog.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                    }}
                                                >
                                                    {relatedBlog.description}
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </>
                )}
            </Paper>

            {/* FAQ Section */}
            <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.5rem', mb: 3 }}>
                    الأسئلة الشائعة
                </Typography>
                <Box component="section" itemScope itemType="https://schema.org/FAQPage">
                    <Box itemScope itemProp="mainEntity" itemType="https://schema.org/Question" sx={{ mb: 3 }}>
                        <Typography variant="h4" itemProp="name" sx={{ fontSize: '1.125rem', fontWeight: 'bold', mb: 1 }}>
                            كيف أختار {blog.keyword}؟
                        </Typography>
                        <Box itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <Typography variant="body1" itemProp="text" color="text.secondary">
                                عند اختيار {blog.keyword}، تأكد من التحقق من الخبرة، معاينة الأعمال السابقة، وقراءة التقييمات.
                            </Typography>
                        </Box>
                    </Box>

                    <Box itemScope itemProp="mainEntity" itemType="https://schema.org/Question" sx={{ mb: 3 }}>
                        <Typography variant="h4" itemProp="name" sx={{ fontSize: '1.125rem', fontWeight: 'bold', mb: 1 }}>
                            ما هي تكلفة خدمات {blog.keyword}؟
                        </Typography>
                        <Box itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <Typography variant="body1" itemProp="text" color="text.secondary">
                                تختلف التكلفة حسب حجم المشروع ونوع الدهانات. يُفضل طلب عرض سعر تفصيلي قبل البدء.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
