// ============================================
// 1. HOME PAGE - Fixed Order & SEO
// ============================================
import dynamic from 'next/dynamic';
import Navbar from "@/components/layouts/Navbar";
import HeroSection from "@/components/new-sections/Hero";
// Dynamic imports for below-the-fold content
const RegionsSection = dynamic(() => import("@/components/sections/RegionsSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const Services = dynamic(() => import("@/components/sections/ServicesSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});

const AboutSection = dynamic(() => import("@/components/new-sections/AboutSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});
const AboutPainterKuwait = dynamic(() => import("@/components/new-sections/About2Section"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});

const ServicesSection = dynamic(() => import("@/components/new-sections/ServicesSection"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل الخدمات..." />,
});

const WhyChooseUs = dynamic(() => import("@/components/new-sections/WhyChooseUs"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل..." />,
});

const App = dynamic(() => import("@/components/sections/Gallary"), {
  loading: () => <div style={{ minHeight: '500px' }} aria-label="تحميل المعرض..." />,
});

const Testimonial = dynamic(() => import("@/components/sections/Testimonial"), {
  loading: () => <div style={{ minHeight: '500px' }} aria-label="تحميل الآراء..." />,
});

const FAQs = dynamic(() => import("@/components/new-sections/Faqs"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل الأسئلة..." />,
});

const Articles = dynamic(() => import("@/components/new-sections/Articles"), {
  loading: () => <div style={{ minHeight: '400px' }} aria-label="تحميل المقالات..." />,
});

const PainterKuwaitSEOContent = dynamic(() => import("@/components/new-sections/DD"), {
  loading: () => <div style={{ minHeight: '800px' }} aria-label="تحميل المحتوى..." />,
});

export default function Home() {
  return (
    <>
      {/* Critical above-the-fold content */}
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* Below-the-fold content - lazy loaded */}
      <AboutPainterKuwait />
      <ServicesSection />
      <WhyChooseUs />
      <App />
      <Testimonial />
      <FAQs />
      <Articles />

      <RegionsSection />
      {/* <Links /> */}
      <Services />

      {/* SEO Content at bottom for better UX */}
      <PainterKuwaitSEOContent />
    </>
  );
}