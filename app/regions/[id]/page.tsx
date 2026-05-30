import { Metadata } from 'next'
import { redirect } from 'next/navigation';
import regions from "@/data/regions.json";
import PainterService from '@/other-pages/Regions';
import Information from '@/components/sections/Information';
import { Box, Stack } from '@mui/material'

// Pre-render every region slug at build time.
// Any [id] not in this list returns 404 (dynamicParams = false).
export async function generateStaticParams() {
    return regions.map((region) => ({
        id: region.slug.en.replace("/", ""),
    }));
}

export const dynamicParams = false;

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
    "/regions/sabaagh-alkuayt.webp",
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;

    const link = regions.find((item) => item.slug.en.replace("/", "") === id);
    if (!link) redirect('/');

    const title = link.title;
    const description = link.description || "صباغ الكويت يقدم خدمات دهان واصباغ عالية الجودة بأسعار تنافسية.";
    const keywords = link.keywords || ["صباغ الكويت", "دهانات الكويت"];
    const canonicalUrl = `https://sabaghelkuwait.com/regions${link.slug.ar}`;
    const imageUrl = `https://sabaghelkuwait.com${imagesUrls[link.imageIndex || 0]}`;

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
            type: "website",
            images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const link = regions.find((item) => item.slug.en.replace("/", "") === id);
    if (!link) redirect('/');

    const region = link.slug.ar.replace("/", "").replaceAll("-", " ").replace("صباغ", "").trim() || "الكويت";
    const canonicalUrl = `https://sabaghelkuwait.com/regions${link.slug.en}`;

    const nearbyRegions = regions
        .filter((r) => r.slug.en !== link.slug.en)
        .slice(0, 8);

    const faqs = [
        {
            q: `كم سعر الصباغ في ${region}؟`,
            a: `تبدأ أسعار الصباغ في ${region} من 1.5 دينار كويتي للمتر المربع. دهان الغرفة الكاملة يبدأ من 25 دينار شامل المواد. نقدم معاينة مجانية وعرض سعر تفصيلي.`,
        },
        { q: "هل تقدمون الخدمة مع المواد؟", a: "نعم، نوفر دهانات أصلية من جوتن وناشنال وسكيب، أو خدمة العمالة فقط." },
        { q: "هل تستخدمون دهانات أصلية ومعتمدة؟", a: "نعم، نستخدم حصراً دهانات أصلية معتمدة مع فاتورة رسمية." },
        { q: "هل يمكن تنفيذ تصميمات ديكورية خاصة؟", a: "نعم، نقدم دهانات مخملية ومعدنية وثلاثية الأبعاد وورق جدران." },
        { q: `كم يستغرق دهان شقة كاملة في ${region}؟`, a: "يوم إلى يومين للشقة، ومن 3 إلى 5 أيام للفيلا الكاملة." },
        { q: "هل تضمنون جودة العمل؟", a: "نعم، نقدم ضماناً على العمل والمواد ونعود لأي إصلاح مجاناً." },
        { q: "هل تعملون في الإجازات؟", a: "نعم، نعمل طوال أيام الأسبوع بما فيها الجمعة والسبت والأعياد." },
        { q: "ما الدهانات المناسبة للمطبخ والحمام؟", a: "ننصح بالدهانات المقاومة للرطوبة كالإيبوكسي أو البلاستيكية المقاومة للماء." },
        { q: "كيف أحجز معاينة مجانية؟", a: "اتصل على 90998489 أو أرسل رسالة واتساب وسنتواصل معك خلال ساعات." },
    ];

    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": canonicalUrl,
            name: `صباغ ${region}`,
            url: canonicalUrl,
            telephone: "+965-90998489",
            priceRange: "$$",
            image: `https://sabaghelkuwait.com${imagesUrls[link.imageIndex || 0]}`,
            description: link.description,
            address: {
                "@type": "PostalAddress",
                addressCountry: "KW",
                addressLocality: region,
            },
            areaServed: {
                "@type": "City",
                name: region,
                containedInPlace: { "@type": "Country", name: "الكويت" },
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
            },
            review: [
                { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5" }, author: { "@type": "Person", name: "أحمد الكويتي" }, reviewBody: "خدمة ممتازة جداً، الفريق محترف ونظيف والأسعار معقولة." },
                { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5" }, author: { "@type": "Person", name: "فاطمة العنزي" }, reviewBody: "أنصح بهم بشدة، الألوان جميلة والتشطيب راقي." },
                { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5" }, author: { "@type": "Person", name: "محمد الراشد" }, reviewBody: "عملوا معي فيلا كاملة وكانت النتيجة مذهلة." },
            ],
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "22:00",
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://sabaghelkuwait.com" },
                { "@type": "ListItem", position: 2, name: "المناطق", item: "https://sabaghelkuwait.com/regions" },
                { "@type": "ListItem", position: 3, name: link.title, item: canonicalUrl },
            ],
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Box width="100%">
                <PainterService region={region} nearbyRegions={nearbyRegions} />
                <Stack my={5} spacing={3} width="100%" mx="auto" alignItems="center">
                    <Information />
                </Stack>
            </Box>
        </>
    );
}
