import PainterKuwaitSEOContent from '@/components/new-sections/DD';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("@/components/layouts/Navbar"));
const BannerOne = dynamic(() => import("@/components/sections/Banner-one"));
const RegionsSection = dynamic(() => import("@/components/sections/RegionsSection"));

export const metadata: Metadata = {
  title: "مناطق صباغ الكويت | معلم صباغ لجميع مناطق الكويت",
  description:
    "تعرف على خدمات صباغ الكويت في جميع مناطق الكويت مثل السالمية، حولي، الجهراء، والفروانية. معلم صباغ محترف يقدم دهانات عالية الجودة وألوان عصرية بأسعار مناسبة 90998489.",
  keywords: [
    "مناطق صباغ الكويت",
    "صباغ الكويت",
    "صباغ السالمية",
    "صباغ حولي",
    "صباغ الجهراء",
    "صباغ الفروانية",
    "دهانات الكويت",
    "أصباغ الكويت",
    "معلم صباغ الكويت",
  ],
  alternates: {
    canonical: "https://sabaghelkuwait.com/المناطق",
  },
  openGraph: {
    title: "مناطق صباغ الكويت | معلم صباغ لجميع مناطق الكويت",
    description: "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة وسرعة في جميع مناطق الكويت 90998489.",
    type: "website",
    images: [
      {
        url: "https://sabaghelkuwait.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "مناطق صباغ الكويت | معلم صباغ لجميع مناطق الكويت",
      },
      {
        url: "https://sabaghelkuwait.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "مناطق صباغ الكويت | معلم صباغ لجميع مناطق الكويت",
      },
    ],
    siteName: "مناطق صباغ الكويت | معلم صباغ لجميع مناطق الكويت",
    alternateLocale: "ar"
  },
};



const page = () => {
  return (
    <>
      <Navbar />
      <BannerOne />
      <PainterKuwaitSEOContent />
      <RegionsSection pagination={false} />
    </>
  )
}

export default page