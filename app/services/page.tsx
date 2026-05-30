import PainterKuwaitSEOContent from '@/components/new-sections/DD';
import Navbar from '@/components/layouts/Navbar';
import BannerOne from '@/components/sections/Banner-one';
import ServicesSection from '@/components/sections/ServicesSection';
import { Metadata } from 'next';

// This is a static route (/services) with no dynamic segments.
// generateStaticParams and dynamicParams only apply to routes with [param] segments.
// force-static makes the SSG intent explicit and causes a build error if a dynamic
// API (cookies, headers, searchParams) is accidentally introduced.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
  description:
    "صباغ الكويت يقدم أفضل خدمات الدهانات والأصباغ للمنازل والشقق بألوان عصرية وجودة عالية. احصل على معلم صباغ محترف في الكويت بأسعار تنافسية 90998489.",
  keywords: [
    "صباغ الكويت",
    "أصباغ الكويت",
    "دهانات الكويت",
    "معلم صباغ",
    "صباغ منازل الكويت",
    "دهان شقق الكويت",
  ],
  alternates: {
    canonical: "https://sabaghelkuwait.com/services",
  },
  openGraph: {
    title: "صباغ الكويت - 90998489 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة وسرعة في جميع مناطق الكويت.",
    type: "website",
    images: [
      {
        url: "https://sabaghelkuwait.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
      },
      {
        url: "https://sabaghelkuwait.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
      },
    ],
    siteName: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
    alternateLocale: "ar",
  },
};

const Page = () => {
  return (
    <>
      <Navbar />
      <BannerOne />
      <PainterKuwaitSEOContent />
      <ServicesSection pagination={false} />
    </>
  );
};

export default Page;
