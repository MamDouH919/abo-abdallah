import PainterKuwaitSEOContent from '@/components/new-sections/DD';
import Navbar from '@/components/layouts/Navbar';
import BannerOne from '@/components/sections/Banner-one';
import RegionsSection from '@/components/sections/RegionsSection';
import { Metadata } from 'next';

export const dynamic = 'force-static';

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
    canonical: "https://sabaghelkuwait.com/regions",
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
    alternateLocale: "ar",
  },
};

const Page = () => {
  return (
    <>
      <Navbar />
      <BannerOne />
      <PainterKuwaitSEOContent />
      <RegionsSection pagination={false} />
    </>
  );
};

export default Page;
