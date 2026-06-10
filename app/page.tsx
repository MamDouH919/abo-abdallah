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
const Gallery = nextDynamic(() => import("@/components/sections/Gallery"), {
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

function QuickLinksSection() {
  const regions = [
    { href: '/regions/sabaagh-alsaalimia',    label: 'صباغ السالمية' },
    { href: '/regions/sabaagh-hawalli',        label: 'صباغ حولي' },
    { href: '/regions/sabaagh-alfarwaniyah',   label: 'صباغ الفروانية' },
    { href: '/regions/sabaagh-aljahraa',       label: 'صباغ الجهراء' },
    { href: '/regions/sabaagh-al-ahmadi',      label: 'صباغ الأحمدي' },
    { href: '/regions/sabaagh-aljabriya',      label: 'صباغ الجابرية' },
    { href: '/regions/sabaagh-bayan',          label: 'صباغ بيان' },
    { href: '/regions/sabaagh-salwa',          label: 'صباغ سلوى' },
    { href: '/regions/sabaagh-khaitan',        label: 'صباغ خيطان' },
    { href: '/regions/sabaagh-mubarak-al-kabeer', label: 'صباغ مبارك الكبير' },
    { href: '/regions/sabaagh-sabah-alsaalim', label: 'صباغ صباح السالم' },
    { href: '/regions/sabaagh-alfhahil',       label: 'صباغ الفحيحيل' },
    { href: '/regions/sabaagh-alrumaithiya',   label: 'صباغ الرميثية' },
    { href: '/regions/sabaagh-jaber-alahmad',  label: 'صباغ جابر الأحمد' },
    { href: '/regions/sabaagh-alshuwaykh',     label: 'صباغ الشويخ' },
  ]

  const services = [
    { href: '/services/kuwait-paints',               label: 'صباغ الكويت' },
    { href: '/services/cheap-painter-kuwait',         label: 'صباغ رخيص بالكويت' },
    { href: '/services/painting-master-kuwait',       label: 'معلم صباغ بالكويت' },
    { href: '/services/apartment-painter-kuwait',     label: 'صباغ شقق بالكويت' },
    { href: '/services/home-painter-kuwait',          label: 'صباغ منازل بالكويت' },
    { href: '/services/decor-painter-kuwait',         label: 'صباغ ديكورات بالكويت' },
    { href: '/services/wallpaper-installation-kuwait',label: 'تركيب ورق جدران بالكويت' },
    { href: '/services/skilled-painter-kuwait',       label: 'صباغ شاطر بالكويت' },
    { href: '/services/paint-kuwait',                 label: 'دهانات الكويت' },
    { href: '/services/kids-room-painter',            label: 'صباغ غرف أطفال' },
  ]

  const chip: React.CSSProperties = {
    display: 'inline-block', padding: '7px 16px', borderRadius: 20,
    border: '1.5px solid #c7d9f8', color: '#012e8d', fontWeight: 600,
    fontSize: '0.875rem', textDecoration: 'none', lineHeight: 1.6,
    background: '#fff', transition: 'all .18s',
  }

  return (
    <section
      aria-label="روابط سريعة – الأسعار والمناطق والخدمات"
      style={{ padding: '60px 20px', background: '#f4f7fe', direction: 'rtl' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        {/* ── Featured: prices page ── */}
        <a
          href="/asaar-sabagh-kuwait"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #0d3b8e 0%, #1565c0 60%, #1e88e5 100%)',
            borderRadius: 16, padding: '28px 32px', marginBottom: 48,
            textDecoration: 'none', gap: 16, flexWrap: 'wrap',
            boxShadow: '0 6px 24px rgba(21,101,192,.25)',
          }}
        >
          <div>
            <p style={{ color: '#90caf9', fontWeight: 600, fontSize: '0.85rem', margin: '0 0 6px' }}>
              📋 دليل شامل محدّث 2026
            </p>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 8px', lineHeight: 1.3 }}>
              أسعار صباغ الكويت 2026
            </h2>
            <p style={{ color: '#bbdefb', margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
              جدول أسعار كامل · مقارنة الدهانات · أسعار حسب المنطقة · 20 سؤالاً شائعاً
            </p>
          </div>
          <span style={{
            background: '#fff', color: '#1565c0', fontWeight: 700, fontSize: '0.95rem',
            padding: '10px 22px', borderRadius: 8, whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            اعرف الأسعار ←
          </span>
        </a>

        {/* ── Featured: sabagh-elkuwait page ── */}
        <a
          href="/sabagh-elkuwait"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #3949ab 100%)',
            borderRadius: 16, padding: '28px 32px', marginBottom: 48,
            textDecoration: 'none', gap: 16, flexWrap: 'wrap',
            boxShadow: '0 6px 24px rgba(26,35,126,.25)',
          }}
        >
          <div>
            <p style={{ color: '#9fa8da', fontWeight: 600, fontSize: '0.85rem', margin: '0 0 6px' }}>
              🎨 صباغ شاطر ورخيص – جميع مناطق الكويت
            </p>
            <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 8px', lineHeight: 1.3 }}>
              صباغ الكويت
            </h2>
            <p style={{ color: '#c5cae9', margin: 0, fontSize: '0.95rem', lineHeight: 1.7 }}>
              معاينة مجانية · ضمان سنة · دهانات أصلية · أسعار تنافسية
            </p>
          </div>
          <span style={{
            background: '#fff', color: '#283593', fontWeight: 700, fontSize: '0.95rem',
            padding: '10px 22px', borderRadius: 8, whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            اعرف أكثر ←
          </span>
        </a>

        {/* ── Regions ── */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#012e8d', margin: 0 }}>
              صباغ في منطقتك
            </h2>
            <a href="/regions" style={{ ...linkStyle, fontSize: '0.9rem' }}>عرض جميع المناطق ←</a>
          </div>
          <nav aria-label="روابط المناطق" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {regions.map((r) => (
              <a key={r.href} href={r.href} style={chip}>{r.label}</a>
            ))}
          </nav>
        </div>

        {/* ── Services ── */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#012e8d', margin: 0 }}>
              خدماتنا
            </h2>
            <a href="/services" style={{ ...linkStyle, fontSize: '0.9rem' }}>عرض جميع الخدمات ←</a>
          </div>
          <nav aria-label="روابط الخدمات" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {services.map((s) => (
              <a key={s.href} href={s.href} style={chip}>{s.label}</a>
            ))}
          </nav>
        </div>

      </div>
    </section>
  )
}
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
      <Gallery />
      <SeoTextSection />
      <QuickLinksSection />
      <AboutPainterKuwait />
      <ServicesSection />
      <WhyChooseUs />
      <Links />
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
