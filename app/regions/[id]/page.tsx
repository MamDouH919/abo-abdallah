import { Box, Stack } from '@mui/material'
import { Metadata } from 'next'
import React from 'react'

import regions from "@/data/regions.json"
import Information from '@/components/sections/Information';
import { redirect } from 'next/navigation';
import PainterService from '@/other-pages/Regions';
import PainterKuwaitSEOContent from '@/components/new-sections/DD';

const imagesUrls = [
    "/regions/aisbgh_alkuayt.webp",
    "/regions/faniy_sabagh.jpg",
    "/regions/muealim-sabagh.jpg",
    "/regions/sabaagh_alsaalimia.jpg",
    "/regions/sabaagh_hawli.webp",
    "/regions/sabaagh_jabir_alahamad.jpg",
    "/regions/sabaagh_khaytan.jpg",
    "/regions/sabaagh_mumtaz_bi_alkuayt.jpg",
    "/regions/sabaagh_rakhisat_bi_alkuayt.jpg",
    "/regions/sabaagh_sabah_alsaalim.webp",
    "/regions/sabaagh_shatir_bi_alkuayt.webp",
    "/regions/sabaagh-alkuayt.web"
]

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    const oo = decodeURIComponent(id);

    const link = regions.find((item) => {
        return item.slug.ar.replace("/", "") === oo
    });

    if (!link)
        redirect('/');

    const title = link?.title || oo
    const randomImage =
        imagesUrls[link?.imageIndex || 0];

    const description = link?.description || "صباغ الكويت يقدم خدمات دهان واصباغ عالية الجودة بأسعار تنافسية.";
    const keywords = link?.keywords || ["صباغ الكويت", "دهانات الكويت", "اصباغ الكويت", "منازل الكويت"];

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: link?.slug.ar ? "https://sabaghinkuwait.com" + link?.slug.ar + "/المناطق" : "",
        },
        openGraph: {
            title,
            description: description,
            url: link?.slug.ar ? "https://sabaghinkuwait.com" + link?.slug.ar + "/المناطق" : "",
            images: [
                {
                    url: "https://sabaghinkuwait.com" + randomImage,
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
    const link = regions.find((item) => {
        return item.slug.ar.replace("/", "") === oo
    });

    const region = link?.slug.ar.replace("/", "").replaceAll("-", " ").replace("صباغ", "") || "حولي";
    return (
        <Box width={"100vw"}>
            <PainterService region={region} />
            <Stack my={5} spacing={3} width={"100%"} mx="auto" alignItems={"center"}>
                <Information />
                <PainterKuwaitSEOContent />
            </Stack>
        </Box>
    )
}

export default Page