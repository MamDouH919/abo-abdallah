
import { Box, Stack } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

import services from "@/data/services.json"
import Information from '@/components/sections/Information';
import { redirect } from 'next/navigation';
import ServicesPage from '@/other-pages/Services';
import PainterKuwaitSEOContent from '@/components/new-sections/DD';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    const oo = decodeURIComponent(id);

    const link = services.find((item) => {
        return item.slug_ar.replace("/", "") === oo
    });

    if (!link)
        redirect('/');

    const title = link?.title || oo
    const description = link?.description || "صباغ الكويت يقدم أفضل خدمات الدهانات والأصباغ للمنازل والشقق بألوان عصرية وجودة عالية. احصل على معلم صباغ محترف في الكويت بأسعار تنافسية 90998489." + oo;
    const keywords = link?.keywords || ["صباغ الكويت", "دهانات الكويت", "اصباغ الكويت", "منازل الكويت"];

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: link?.slug_ar ? "https://sabaghelkuwait.com" + link?.slug_ar + "/الخدمات" : "",
        },
        openGraph: {
            title,
            description,
            url: link?.slug_ar ? "https://sabaghelkuwait.com" + link?.slug_ar + "/الخدمات" : "",
            images: [
                {
                    url: "https://sabaghelkuwait.com" + link?.image || "/logo.webp",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        }
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const oo = decodeURIComponent(id);
    const link = services.find((item) => {
        return item.slug_ar.replace("/", "") === oo
    });

    const service = link?.slug_ar.replace("/", "").replaceAll("-", " ") || "صباغ الكويت";


    return (
        <>
            <Box width={"100vw"}>
                <ServicesPage service={service} />
                <Stack my={5} spacing={3} width={"100%"} mx="auto" alignItems={"center"}>
                    <Information />
                    <PainterKuwaitSEOContent />
                </Stack>
            </Box>
            {/* <Container maxWidth="lg">
                <Stack my={5} spacing={3} alignItems={"center"}>
                    <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                    <PhoneStyle />
                    <ImageStyle src={link?.image || "/logo.png"} alt={link?.title || "صباغ الكويت"} />
                    {linksData[link?.slug_en.replace("/", "") || "kuwait-paints"]}
                    <Information />
                </Stack>
            </Container> */}
        </>
    )
}

export default Page
