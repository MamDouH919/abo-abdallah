import { Box, Stack } from '@mui/material'
import { Metadata } from 'next'
import { redirect } from 'next/navigation';
import services from "@/data/services.json"
import Information from '@/components/sections/Information';
import ServicesPage from '@/other-pages/Services';
import PainterKuwaitSEOContent from '@/components/new-sections/DD';

export function generateStaticParams() {
    return services.map((item) => ({
        id: item.slug_en.replace("/", ""),
    }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    const link = services.find((item) => item.slug_en.replace("/", "") === id);
    if (!link) redirect('/');

    const title = link.title;
    const description = link.description || "صباغ الكويت يقدم أفضل خدمات الدهانات والأصباغ للمنازل والشقق بألوان عصرية وجودة عالية. احصل على معلم صباغ محترف في الكويت بأسعار تنافسية 90998489.";
    const keywords = link.keywords || ["صباغ الكويت", "دهانات الكويت", "اصباغ الكويت", "منازل الكويت"];
    const canonicalUrl = `https://sabaghelkuwait.com/services${link.slug_en}`;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            images: [
                {
                    url: `https://sabaghelkuwait.com${link.image}` || "/logo.webp",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },
    };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const link = services.find((item) => item.slug_en.replace("/", "") === id);
    if (!link) redirect('/');

    const service = link.slug_ar.replace("/", "").replaceAll("-", " ");

    return (
        <>
            <Box width={"100vw"}>
                <ServicesPage service={service} />
                <Stack my={5} spacing={3} width={"100%"} mx="auto" alignItems={"center"}>
                    <Information />
                    <PainterKuwaitSEOContent />
                </Stack>
            </Box>
        </>
    );
};

export default Page;
