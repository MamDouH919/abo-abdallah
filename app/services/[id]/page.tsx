import { Box, Stack } from '@mui/material'
import { Metadata } from 'next'
import { redirect } from 'next/navigation';
import services from "@/data/services.json"
import Information from '@/components/sections/Information';
import ServicesPage from '@/other-pages/Services';
import PainterKuwaitSEOContent from '@/components/new-sections/DD';
import Link from 'next/link';

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

                {/* ── Prices page link ── */}
                <Box sx={{ maxWidth: 900, mx: "auto", px: 2, my: 4 }}>
                    <Link
                        href="/asaar-sabagh-kuwait"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "linear-gradient(135deg, #0d3b8e 0%, #1565c0 60%, #1e88e5 100%)",
                            borderRadius: 12,
                            padding: "20px 28px",
                            textDecoration: "none",
                            gap: 16,
                            flexWrap: "wrap",
                            boxShadow: "0 4px 16px rgba(21,101,192,.2)",
                        }}
                    >
                        <div>
                            <p style={{ color: "#90caf9", fontWeight: 600, fontSize: "0.8rem", margin: "0 0 4px" }}>
                                📋 دليل الأسعار الشامل 2026
                            </p>
                            <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 4px", lineHeight: 1.4 }}>
                                اسعار صباغ الكويت 2026 – جدول كامل
                            </p>
                            <p style={{ color: "#bbdefb", margin: 0, fontSize: "0.85rem" }}>
                                {service} · مقارنة الدهانات · أسعار حسب المنطقة
                            </p>
                        </div>
                        <span style={{ background: "#fff", color: "#1565c0", fontWeight: 700, fontSize: "0.9rem", padding: "8px 18px", borderRadius: 8, whiteSpace: "nowrap", flexShrink: 0 }}>
                            اعرف الأسعار ←
                        </span>
                    </Link>
                </Box>

                <Stack my={5} spacing={3} width={"100%"} mx="auto" alignItems={"center"}>
                    <Information />
                    <PainterKuwaitSEOContent />
                </Stack>
            </Box>
        </>
    );
};

export default Page;
