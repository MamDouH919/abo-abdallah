import nextDynamic from 'next/dynamic';
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/new-sections/Hero";
import AboutSection from "@/components/new-sections/AboutSection";

export const dynamic = 'force-static';

const RegionsSection = nextDynamic(() => import("@/components/sections/RegionsSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const Services = nextDynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const AboutPainterKuwait = nextDynamic(() => import("@/components/new-sections/About2Section"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const ServicesSection = nextDynamic(() => import("@/components/new-sections/ServicesSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل الخدمات..." />,
});
const WhyChooseUs = nextDynamic(() => import("@/components/new-sections/WhyChooseUs"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const App = nextDynamic(() => import("@/components/sections/Gallary"), {
  loading: () => <div style={{ minHeight: '500px' }} aria-label="تحميل المعرض..." />,
});
const Testimonial = nextDynamic(() => import("@/components/sections/Testimonial"), {
  loading: () => <div style={{ minHeight: '500px' }} aria-label="تحميل الآراء..." />,
});
const FAQs = nextDynamic(() => import("@/components/new-sections/Faqs"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل الأسئلة..." />,
});
const Links = nextDynamic(() => import('@/components/Links'), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل الروابط..." />,
});
const Articles = nextDynamic(() => import("@/components/new-sections/Articles"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل المقالات..." />,
});
const PainterKuwaitSEOContent = nextDynamic(() => import("@/components/new-sections/DD"), {
  loading: () => <div style={{ minHeight: '800px' }} aria-label="تحميل المحتوى..." />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Links />
      <AboutPainterKuwait />
      <ServicesSection />
      <WhyChooseUs />
      <App />
      <Testimonial />
      <FAQs />
      <Articles />
      <RegionsSection />
      <Services />
      <PainterKuwaitSEOContent />
    </>
  );
}
