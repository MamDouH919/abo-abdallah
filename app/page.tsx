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

const linkStyle = { color: '#012e8d', fontWeight: 600, textDecoration: 'none' } as const;
const tagStyle = {
  display: 'inline-block', padding: '6px 14px', borderRadius: 8,
  border: '1px solid #c7d9f8', color: '#012e8d', fontWeight: 600,
  fontSize: '0.9rem', textDecoration: 'none', lineHeight: 1.6,
} as const;

function SeoTextSection() {
  return (
    <section
      aria-label="معلومات عن صباغ الكويت"
      style={{ padding: '48px 24px', maxWidth: 960, margin: '0 auto', direction: 'rtl' }}
    >
      {/* ── Services description ── */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#012e8d', marginBottom: 12 }}>
        خدمات صباغ الكويت
      </h2>
      <p style={{ lineHeight: 1.9, color: '#555', marginBottom: 24 }}>
        يقدم <strong>صباغ الكويت</strong> — <strong>صباغ شاطر ورخيص</strong> — مجموعة متكاملة من خدمات الصباغة
        والدهانات تشمل دهان المنازل والشقق والفلل، تركيب ورق الجدران، الدهانات الزخرفية والمخملية، ودهان الواجهات
        الخارجية. نستخدم دهانات أصلية من أفضل الماركات العالمية كجوتن وناشنال وسكيب لضمان جودة تدوم لسنوات. تواصل
        معنا على{' '}
        <a href="tel:+96590998489" style={linkStyle}>90998489</a> للحصول على معاينة مجانية.
      </p>

      {/* ── Popular services links ── */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#333', marginBottom: 12 }}>
        أبرز خدماتنا
      </h3>
      <nav aria-label="روابط الخدمات" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
        <a href="/services/kuwait-paints"   style={tagStyle}>صباغ الكويت</a>
        <a href="/services/painter"         style={tagStyle}>صباغ محترف</a>
        <a href="/services/cheap-painter-kuwait"    style={tagStyle}>صباغ رخيص</a>
        <a href="/services/skilled-painter-kuwait"  style={tagStyle}>صباغ شاطر</a>
        <a href="/services/painting-master-kuwait"  style={tagStyle}>معلم صباغ</a>
        <a href="/services/decor-painter-kuwait"    style={tagStyle}>صباغ ديكورات</a>
        <a href="/services" style={tagStyle}>جميع الخدمات ←</a>
      </nav>

      {/* ── Regions description ── */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#012e8d', marginBottom: 12 }}>
        مناطق خدمة صباغ الكويت
      </h2>
      <p style={{ lineHeight: 1.9, color: '#555', marginBottom: 16 }}>
        نغطي جميع مناطق الكويت بما فيها السالمية، حولي، الفروانية، الجهراء، الأحمدي، خيطان، صباح السالم، وجميع
        المناطق الأخرى. فريقنا يصل إليك في أي منطقة خلال وقت قصير.
      </p>

      {/* ── Popular regions links ── */}
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#333', marginBottom: 12 }}>
        أبرز المناطق
      </h3>
      <nav aria-label="روابط المناطق" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 32 }}>
        <a href="/regions/sabaagh-alsaalimia"    style={tagStyle}>صباغ السالمية</a>
        <a href="/regions/sabaagh-hawalli"       style={tagStyle}>صباغ حولي</a>
        <a href="/regions/sabaagh-alfarwaniyah"  style={tagStyle}>صباغ الفروانية</a>
        <a href="/regions/sabaagh-khaitan"       style={tagStyle}>صباغ خيطان</a>
        <a href="/regions/sabaagh-jaber-alahmad" style={tagStyle}>صباغ جابر الأحمد</a>
        <a href="/regions/sabaagh-sabah-alsaalim" style={tagStyle}>صباغ صباح السالم</a>
        <a href="/regions" style={tagStyle}>جميع المناطق ←</a>
      </nav>

      {/* ── Why us + blogs link ── */}
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#012e8d', marginBottom: 12 }}>
        لماذا تختار صباغ الكويت؟
      </h2>
      <ul style={{ lineHeight: 2, color: '#555', paddingRight: 20, marginBottom: 16 }}>
        <li>خبرة أكثر من <strong>10 سنوات</strong> في مجال الصباغة والدهانات بالكويت</li>
        <li>معاينة مجانية وعرض سعر تفصيلي بدون أي التزام</li>
        <li>دهانات أصلية معتمدة مع فاتورة رسمية</li>
        <li>ضمان على العمل والمواد مع إصلاح مجاني لأي خلل</li>
        <li>فريق محترف يلتزم بالمواعيد ويحافظ على نظافة المكان</li>
        <li>أسعار <strong>رخيصة</strong> وتنافسية تناسب جميع الميزانيات</li>
      </ul>
      <p style={{ color: '#555', lineHeight: 1.9, marginBottom: 0 }}>
        اقرأ المزيد في{' '}
        <a href="/blogs" style={linkStyle}>مدونة صباغ الكويت</a>
        {' '}للاطلاع على أحدث نصائح الدهانات والديكور.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SeoTextSection />
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
