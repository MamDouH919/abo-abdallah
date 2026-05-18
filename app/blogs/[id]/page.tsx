import { Metadata } from 'next';
import blogsData from '@/data/blogs.json';;
import BlogPage from '@/components/BlogPostPage';

export interface Blog {
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
    const { id } = await params;

    const blog = blogsData.blogs.find((b: Blog) => b.id === id);
    const siteUrl = 'https://sabaghelkuwait.com';
    const blogUrl = `${siteUrl}/${id}/المقالات`;

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
export default async function BlogPostPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const blog = blogsData.blogs.find((b: Blog) => b.id === id);
    
    return (
        <BlogPage blog={blog as Blog} />
    );
}
