import { Container, Stack } from '@mui/material'
import { Metadata } from 'next'
import allLinks from '@/data/all.json'
import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import LinksContent from '@/components/sections/LinksContent'
import PainterKuwaitSEOContent from '@/components/new-sections/DD'

export function generateStaticParams() {
    return allLinks.map((item) => ({ id: item.href }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const link = allLinks.find((item) => item.href === id);

    const title = link?.title || 'صباغ الكويت';
    const seoTitle = `${title} في الكويت 2025 | أفضل صباغ شاطر ورخيص - 90998489`;
    const description = `${title} في الكويت مع أفضل صباغ شاطر ورخيص بجودة عالية وأسعار تنافسية لعام 2025. تركيب ورق جدران، دهانات داخلية وخارجية، ديكورات حديثة، إصلاح تشققات الجدران، وخدمة سريعة في جميع مناطق الكويت. اتصل بنا الآن: 90998489`;

    return {
        title: seoTitle,
        keywords: [
            `صباغ الكويت`,
            `صباغ شاطر`,
            `صباغ رخيص`,
            `اصباغ داخلية وخارجية`,
            `صباغ في الكويت`,
            `اصباغ حديثة`,
            `صباغ الكويت بأفضل الأسعار`,
            `${title}`,
        ],
        description,
        openGraph: {
            title: seoTitle,
            description,
            type: 'article',
            url: `https://sabaghelkuwait.com/${id}`,
            images: [
                {
                    url: `https://sabaghelkuwait.com${link?.image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        alternates: {
            canonical: `https://sabaghelkuwait.com/${id}`,
        },
    };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const link = allLinks.find((item) => item.href === id);
    const title = link?.title || 'صباغ الكويت';

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://sabaghelkuwait.com" },
            { "@type": "ListItem", position: 2, name: title, item: `https://sabaghelkuwait.com/${id}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <Container maxWidth="lg">
                <Stack my={5} spacing={3} alignItems={"center"}>
                    <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                    <PhoneStyle />
                    <LinksContent id={id} />
                    <PainterKuwaitSEOContent />
                </Stack>
            </Container>
        </>
    );
};

export default Page;
