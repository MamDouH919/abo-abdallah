import PainterKuwaitSEOContent from '@/components/new-sections/DD';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("@/components/layouts/Navbar"));
const BannerOne = dynamic(() => import("@/components/sections/Banner-one"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));

export const metadata: Metadata = {
  title: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
  description:
    "صباغ الكويت يقدم أفضل خدمات الدهانات والأصباغ للمنازل والشقق بألوان عصرية وجودة عالية. احصل على معلم صباغ محترف في الكويت بأسعار تنافسية 50303335.",
  keywords: [
    "صباغ الكويت",
    "أصباغ الكويت",
    "دهانات الكويت",
    "معلم صباغ",
    "صباغ منازل الكويت",
    "دهان شقق الكويت",
  ],
  alternates: {
    canonical: "https://sabaghinkuwait.com" + "/الخدمات",
  },
  openGraph: {
    title: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة وسرعة في جميع مناطق الكويت.",
    type: "website",
    images: [
      {
        url: "https://sabaghinkuwait.com/logo.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
      },
      {
        url: "https://sabaghinkuwait.com/logo.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
      },
    ],
    siteName: "صباغ الكويت | أفضل خدمات أصباغ ودهانات في الكويت",
    alternateLocale: "ar"
  },
};


const page = () => {
  return (
    <>
      <Navbar />
      <BannerOne />
      <PainterKuwaitSEOContent />
      <ServicesSection pagination={false} />
    </>
  )
}

export default page