import type { Metadata } from "next";
import nextDynamic from 'next/dynamic';
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/new-sections/Hero";
import TrustBar from "@/components/new-sections/TrustBar";
import AboutSection from "@/components/new-sections/AboutSection";
import ServicesTeaser from "@/components/new-sections/ServicesTeaser";
import HowItWorks from "@/components/new-sections/HowItWorks";
import AreasTeaser from "@/components/new-sections/AreasTeaser";
import PricingTeaser from "@/components/new-sections/PricingTeaser";
import ArticlesSection from "@/components/new-sections/ArticlesSection";
import FinalCTA from "@/components/new-sections/FinalCTA";
import JsonLd from "@/components/articles/JsonLd";
import { faqPageLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/seo/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { HOME_FAQS } from "@/data/home-faqs";

export const dynamic = 'force-static';

const HOME_TITLE = "صباغ الكويت | دار الألوان - صباغة ودهانات";
const HOME_DESCRIPTION =
  "دار الألوان لخدمات الصباغة والدهانات في الكويت للمنازل والشقق والفلل، مع تنفيذ أعمال الدهانات والتشطيبات بجودة واهتمام بالتفاصيل.";

// Homepage owns its metadata explicitly rather than relying on the layout
// defaults. `absolute` skips the layout's "%s | دار الألوان" template, since
// the brand is already in the title.
const base = buildMetadata({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" });
export const metadata: Metadata = { ...base, title: { absolute: HOME_TITLE } };

// Per-page structured data. Site-wide WebSite + Organization live in the root
// layout; the FAQPage below is built from the SAME list the visible <FAQs>
// accordion renders (data/home-faqs.ts).
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ar",
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
    },
    faqPageLd(HOME_FAQS.map((f) => ({ q: f.question, a: f.answer }))),
  ],
};

// Kept as dynamic imports for their existing bundle-splitting benefit.
const Gallery = nextDynamic(() => import("@/components/sections/Gallery"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const WhyChooseUs = nextDynamic(() => import("@/components/new-sections/WhyChooseUs"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const FAQs = nextDynamic(() => import("@/components/new-sections/Faqs"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل الأسئلة..." />,
});

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesTeaser />
      <WhyChooseUs />
      <AreasTeaser />
      <Gallery />
      <HowItWorks />
      <PricingTeaser />
      <ArticlesSection />
      <FAQs />
      <FinalCTA />
    </>
  );
}
