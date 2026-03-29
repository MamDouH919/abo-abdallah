
import { Container, Stack } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'
import allLinks from '@/data/all.json'
import { CustomLink } from '@/components/layouts/CustomLink'
import PhoneStyle from '@/components/layouts/PhoneStyle'
import LinksContent from '@/components/sections/LinksContent'
import PainterKuwaitSEOContent from '@/components/new-sections/DD'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    const link = allLinks.find((item) => item.href === id)

    const title = link?.title || 'صباغ الكويت'
    const description = `خدمة ${title} في الكويت مع صباغ شاطر ورخيص بجودة عالية وأسعار تنافسية. تركيب ورق جدران، دهانات داخلية وخارجية، ديكورات حديثة، إصلاح تشققات الجدران، وخدمة سريعة في جميع مناطق الكويت. اتصل بنا الآن: 90998489`;

    return {
        title: `${title} - صباغ شاطر ورخيص - صباغ الكويت - 90998489`,
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
            title: `${title} - صباغ شاطر ورخيص - صباغ الكويت - 90998489`,
            description,
            type: 'article',
            url: "https://sabaghelkuwait.com" + "/" + id,
            images: [
                {
                    url: "https://sabaghelkuwait.com" + link?.image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        alternates: {
            canonical: "https://sabaghelkuwait.com" + "/" + id,
        },
    }
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <>
            <Container maxWidth="lg">
                <Stack my={5} spacing={3} alignItems={"center"}>
                    <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
                    <PhoneStyle />
                    <LinksContent id={id} />
                    <PainterKuwaitSEOContent />
                </Stack>
            </Container>
        </>
    )
}

export default Page
