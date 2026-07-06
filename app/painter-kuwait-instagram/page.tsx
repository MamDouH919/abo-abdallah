import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";

const siteUrl = "https://sabaghelkuwait.com";
const pageUrl = `${siteUrl}/painter-kuwait-instagram`;

// ─── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "صباغ الكويت انستقرام | صباغ شاطر ورخيص انستقرام – 90998489",
  description:
    "صباغ الكويت انستقرام – أفضل صباغ هندي وباكستاني رخيص انستقرام لصباغة المنازل والغرف وتركيب ورق الجدران والجبس بورد في جميع مناطق الكويت. معاينة مجانية وضمان الجودة. اتصل الآن 90998489.",
  keywords: [
    "صباغ انستقرام",
    "صباغ الكويت انستقرام",
    "صباغ رخيص انستقرام",
    "رقم صباغ انستقرام",
    "اصباغ انستقرام",
    "صباغين انستقرام",
    "صباغ هندي انستقرام",
    "صباغ باكستاني انستقرام",
    "صباغ منازل انستقرام",
    "صباغ غرف انستقرام",
    "تركيب ورق جدران انستقرام",
    "جبس بورد انستقرام",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: pageUrl,
    siteName: "صباغ الكويت",
    title: "صباغ الكويت انستقرام | صباغ شاطر ورخيص انستقرام – 90998489",
    description:
      "صباغ الكويت انستقرام – صباغ هندي وباكستاني رخيص، صباغة منازل وغرف، تركيب ورق جدران وجبس بورد في جميع مناطق الكويت. معاينة مجانية. اتصل 90998489.",
    images: [
      {
        url: `${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp`,
        width: 1200,
        height: 630,
        alt: "صباغ الكويت انستقرام – صباغ شاطر ورخيص",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت انستقرام | صباغ شاطر ورخيص",
    description: "أفضل صباغ انستقرام في الكويت – احترافية وجودة وأسعار مناسبة. اتصل 90998489.",
    images: [`${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "صباغ الكويت انستقرام",
  alternateName: ["صباغ انستقرام", "صباغ رخيص انستقرام", "اصباغ انستقرام", "صباغين انستقرام"],
  description:
    "صباغ الكويت انستقرام – خدمات صباغة واحترافية للمنازل والغرف والشقق والفلل مع تركيب ورق الجدران والجبس بورد في جميع مناطق الكويت بأسعار تنافسية.",
  url: siteUrl,
  telephone: "+96590998489",
  priceRange: "$$",
  image: `${siteUrl}/logo.webp`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KW",
    addressLocality: "الكويت",
  },
  areaServed: {
    "@type": "Country",
    name: "Kuwait",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: [siteUrl],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "صباغ الكويت انستقرام", item: pageUrl },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "من هو أفضل صباغ انستقرام في الكويت؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "أفضل صباغ انستقرام هو من يجمع بين الخبرة الطويلة والأسعار المناسبة والمواد الأصلية. يُعدّ فريق صباغ الكويت انستقرام (90998489) من أبرز الخيارات لتوفيره صباغ هندي وباكستاني شاطر مع معاينة مجانية وضمان على العمل.",
      },
    },
    {
      "@type": "Question",
      name: "ما رقم صباغ انستقرام الكويت؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "رقم صباغ انستقرام الكويت هو 90998489 – متاح للاتصال والواتساب من السبت إلى الخميس من 8 صباحاً حتى 10 مساءً لطلب معاينة مجانية.",
      },
    },
    {
      "@type": "Question",
      name: "هل يوجد صباغ هندي رخيص انستقرام؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نوفر أمهر صباغ هندي وباكستاني رخيص انستقرام لصباغة المنازل والغرف والشقق بجودة عالية وأسعار تنافسية. اتصل على 90998489 للحصول على عرض سعر تفصيلي.",
      },
    },
    {
      "@type": "Question",
      name: "هل تتوفر خدمة تركيب ورق الجدران والجبس بورد انستقرام؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نوفر تركيب ورق الجدران بأنواعه (ثلاثي الأبعاد، معدني، فينيل) وتركيب أسقف الجبس بورد بأيدي فنيين متخصصين مع عزل حراري عالي وتصاميم إنارة مخفية.",
      },
    },
    {
      "@type": "Question",
      name: "ما المناطق التي تغطيها خدمة صباغ انستقرام؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نغطي جميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي، الجابرية، بيان، سلوى، خيطان، صباح السالم، الفحيحيل، الرميثية، جابر الأحمد، الشويخ، مبارك الكبير وسائر الأحياء.",
      },
    },
    {
      "@type": "Question",
      name: "هل تقدمون معاينة مجانية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نقدم معاينة مجانية بالكامل بدون أي التزام من جانبك. يزور فريق صباغ انستقرام العقار ويقدم عرض سعر تفصيلياً خلال 24 ساعة.",
      },
    },
  ],
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "صباغ الكويت انستقرام – دليلك الشامل لخدمات الصباغة عبر انستقرام",
  description:
    "دليل شامل لخدمات صباغ انستقرام: صباغ هندي وباكستاني، صباغة المنازل والغرف والبيوت، تركيب ورق الجدران والأرضيات والجبس بورد، وأبرز المناطق المخدومة.",
  author: { "@type": "Organization", name: "صباغ الكويت انستقرام", url: siteUrl },
  publisher: {
    "@type": "Organization",
    name: "صباغ الكويت",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` },
  },
  datePublished: "2026-01-01",
  dateModified: "2026-07-06",
  url: pageUrl,
  inLanguage: "ar",
  image: `${siteUrl}/logo.webp`,
};

// ─── Data ────────────────────────────────────────────────────────────────────
const services = [
  { href: "/services/kuwait-paints", label: "اصباغ انستقرام", icon: "🎨" },
  { href: "/services/cheap-painter-kuwait", label: "صباغ رخيص انستقرام", icon: "💰" },
  { href: "/services/skilled-painter-kuwait", label: "صباغ شاطر انستقرام", icon: "⭐" },
  { href: "/services/painting-master-kuwait", label: "معلم صباغ انستقرام", icon: "👨‍🎨" },
  { href: "/services/apartment-painter-kuwait", label: "صباغ شقق انستقرام", icon: "🏢" },
  { href: "/services/home-painter-kuwait", label: "صباغ منازل انستقرام", icon: "🏠" },
  { href: "/services/decor-painter-kuwait", label: "جبس بورد انستقرام", icon: "✨" },
  { href: "/services/wallpaper-installation-kuwait", label: "تركيب ورق جدران", icon: "🖼" },
];

const regions = [
  { href: "/regions/sabaagh-alsaalimia", label: "صباغ السالمية" },
  { href: "/regions/sabaagh-hawalli", label: "صباغ حولي" },
  { href: "/regions/sabaagh-alfarwaniyah", label: "صباغ الفروانية" },
  { href: "/regions/sabaagh-aljahraa", label: "صباغ الجهراء" },
  { href: "/regions/sabaagh-al-ahmadi", label: "صباغ الأحمدي" },
  { href: "/regions/sabaagh-aljabriya", label: "صباغ الجابرية" },
  { href: "/regions/sabaagh-bayan", label: "صباغ بيان" },
  { href: "/regions/sabaagh-salwa", label: "صباغ سلوى" },
  { href: "/regions/sabaagh-khaitan", label: "صباغ خيطان" },
  { href: "/regions/sabaagh-mubarak-al-kabeer", label: "صباغ مبارك الكبير" },
  { href: "/regions/sabaagh-sabah-alsaalim", label: "صباغ صباح السالم" },
  { href: "/regions/sabaagh-alfhahil", label: "صباغ الفحيحيل" },
  { href: "/regions/sabaagh-alrumaithiya", label: "صباغ الرميثية" },
  { href: "/regions/sabaagh-jaber-alahmad", label: "صباغ جابر الأحمد" },
  { href: "/regions/sabaagh-alshuwaykh", label: "صباغ الشويخ" },
];

const galleryImages = [
  { src: "/gallery/صباغ-الكويت.webp", alt: "صباغ الكويت انستقرام – أعمال احترافية" },
  { src: "/gallery/اصباغ-الكويت.webp", alt: "اصباغ انستقرام – دهانات فاخرة" },
  { src: "/gallery/صباغ-هندي.webp", alt: "صباغ هندي انستقرام" },
  { src: "/gallery/صباغ-شاطر.webp", alt: "صباغ شاطر انستقرام" },
  { src: "/gallery/صباغ-ممتاز.webp", alt: "صباغ ممتاز انستقرام" },
  { src: "/gallery/صباغ-رخيص.webp", alt: "صباغ رخيص انستقرام – أسعار مناسبة" },
];

const whyUs = [
  { icon: "🏆", title: "خبرة +10 سنوات", body: "نفّذنا آلاف المشاريع في جميع مناطق الكويت بمستوى احترافي ثابت." },
  { icon: "🎯", title: "معاينة مجانية", body: "نزور موقعك مجاناً ونقدم عرض سعر تفصيلي بدون أي التزام من جانبك." },
  { icon: "👳", title: "صباغ هندي وباكستاني", body: "طاقم من أمهر الصباغين الهنود والباكستانيين بخبرة طويلة في الدهانات." },
  { icon: "🛡", title: "ضمان على العمل", body: "نضمن جودة العمل، وأي خلل نُصلحه مجاناً بدون نقاش خلال فترة الضمان." },
  { icon: "⏰", title: "التزام بالمواعيد", body: "فريقنا يصل في الوقت المحدد ويُسلّم المشروع في الموعد المتفق عليه." },
  { icon: "🧹", title: "نظافة تامة", body: "نُغطي أثاثك ونُنظّف موقع العمل بالكامل عند الانتهاء." },
];

const faqs = [
  {
    q: "من هو أفضل صباغ انستقرام في الكويت؟",
    a: "أفضل صباغ انستقرام هو من يجمع بين الخبرة الطويلة والأسعار المناسبة والمواد الأصلية. فريقنا يوفر صباغ هندي وباكستاني شاطر مع معاينة مجانية وضمان على العمل. اتصل الآن على 90998489.",
  },
  {
    q: "ما رقم صباغ انستقرام الكويت؟",
    a: "رقم صباغ انستقرام الكويت هو 90998489 – متاح للاتصال والواتساب من السبت إلى الخميس، من 8 صباحاً حتى 10 مساءً لطلب معاينة مجانية.",
  },
  {
    q: "هل يوجد صباغ هندي رخيص انستقرام؟",
    a: "نعم، نوفر أمهر صباغ هندي وباكستاني رخيص انستقرام لصباغة المنازل والغرف والشقق بجودة عالية وأسعار تنافسية. اتصل على 90998489 للحصول على عرض سعر تفصيلي.",
  },
  {
    q: "هل تتوفر خدمة تركيب ورق الجدران والجبس بورد؟",
    a: "نعم، نوفر تركيب ورق الجدران بأنواعه (ثلاثي الأبعاد، معدني، فينيل) وتركيب أسقف الجبس بورد بأيدي فنيين متخصصين مع عزل حراري عالي وتصاميم إنارة مخفية.",
  },
  {
    q: "ما المناطق التي تغطيها خدمتكم؟",
    a: "نغطي جميع مناطق الكويت: السالمية، حولي، الفروانية، الجهراء، الأحمدي، الجابرية، بيان، سلوى، خيطان، صباح السالم، الفحيحيل، الرميثية، جابر الأحمد، الشويخ، مبارك الكبير وجميع الأحياء.",
  },
  {
    q: "هل تقدمون معاينة مجانية؟",
    a: "نعم، المعاينة مجانية بالكامل بدون أي التزام. يزور فريق صباغ انستقرام العقار ويقدم عرض سعر تفصيلياً خلال 24 ساعة.",
  },
];

// ─── Style helpers ────────────────────────────────────────────────────────────
const il: CSSProperties = {
  color: "#1565c0",
  fontWeight: 600,
  textDecoration: "none",
  borderBottom: "1px solid #90caf9",
};

const chip: CSSProperties = {
  display: "inline-block",
  padding: "7px 16px",
  borderRadius: 20,
  border: "1.5px solid #c7d9f8",
  color: "#012e8d",
  fontWeight: 600,
  fontSize: "0.875rem",
  textDecoration: "none",
  background: "#fff",
};

// Instagram-flavored gradient for hero / CTA sections
const igGradient =
  "linear-gradient(135deg, #405DE6 0%, #833AB4 35%, #C13584 60%, #E1306C 80%, #F77737 100%)";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PainterKuwaitInstagramPage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <Navbar />

      {/* ── Hero ── */}
      <header
        style={{
          background: igGradient,
          color: "#fff",
          paddingTop: "clamp(80px, 14vw, 140px)",
          paddingBottom: "clamp(48px, 8vw, 96px)",
          textAlign: "center",
          direction: "rtl",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          {/* Breadcrumb */}
          <nav aria-label="مسار التنقل" style={{ marginBottom: 20, fontSize: "0.85rem", opacity: 0.9 }}>
            <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>الرئيسية</Link>
            <span style={{ margin: "0 8px", opacity: 0.6 }}>›</span>
            <span>صباغ الكويت انستقرام</span>
          </nav>

          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              fontWeight: 900,
              margin: "0 0 20px",
              lineHeight: 1.25,
            }}
          >
            صباغ الكويت انستقرام
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              opacity: 0.97,
              maxWidth: 640,
              margin: "0 auto 32px",
              lineHeight: 1.8,
            }}
          >
            صباغ شاطر ورخيص انستقرام – صباغ هندي وباكستاني لصباغة المنازل والغرف، تركيب ورق الجدران
            والجبس بورد في جميع مناطق الكويت. معاينة مجانية وضمان على العمل.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="tel:+96590998489"
              style={{
                background: "#fff",
                color: "#C13584",
                padding: "12px 28px",
                borderRadius: 8,
                fontWeight: 800,
                fontSize: "1.05rem",
                textDecoration: "none",
              }}
            >
              📞 اتصل: 90998489
            </Link>
            <a
              href="https://wa.me/96590998489"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 8,
                fontWeight: 800,
                fontSize: "1.05rem",
                textDecoration: "none",
              }}
            >
              💬 واتساب مباشر
            </a>
          </div>
        </div>
      </header>

      <main style={{ direction: "rtl" }}>

        {/* ── Hero Image ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 32px rgba(193,53,132,.18)" }}>
            <Image
              src="/gallery/صباغ-الكويت.webp"
              alt="صباغ الكويت انستقرام – أعمال صباغة احترافية للمنازل والشقق"
              width={960}
              height={480}
              priority
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* ── Intro ── */}
        <section
          aria-label="من نحن – صباغ الكويت انستقرام"
          style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}
        >
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 16 }}>
            من نحن – أفضل صباغ انستقرام في الكويت
          </h2>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "1.05rem", marginBottom: 16 }}>
            <strong>صباغ الكويت انستقرام</strong> هو فريق متخصص في{" "}
            <Link href="/services/kuwait-paints" style={il}>خدمات الصباغة والدهانات</Link>
            {" "}بخبرة تمتد أكثر من <strong>10 سنوات</strong> في السوق الكويتي. نُنفّذ عمليات الدهان
            والتشطيبات النهائية داخل المنزل أو أي منشأة أخرى بأعلى معايير الجودة، ونحرص دائماً أن نكون
            عند حسن ظنكم عبر مساعدتك في اختيار أجمل شكل ممكن لمنزلك من بين مجموعة من التصاميم المميزة.
          </p>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "1.05rem", marginBottom: 16 }}>
            نتميز بالمصداقية والاحترافية العالية، ونستخدم <strong>دهانات أصلية معتمدة</strong> من أفضل
            الماركات كجوتن (Jotun) والجزيرة وناشيونال، ونُقدّم لكل عميل{" "}
            <strong>معاينة مجانية وعرض سعر تفصيلي</strong> بدون أي التزام.{" "}
            <Link href="/asaar-sabagh-kuwait" style={il}>تعرّف على أسعارنا التفصيلية</Link>.
          </p>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "1.05rem" }}>
            سواء كنت تبحث عن{" "}
            <Link href="/services/cheap-painter-kuwait" style={il}>صباغ رخيص انستقرام</Link>
            {" "}لمشروع بميزانية محدودة، أو{" "}
            <Link href="/services/skilled-painter-kuwait" style={il}>صباغ شاطر انستقرام</Link>
            {" "}لفيلا فاخرة، فريقنا جاهز لخدمتك في أي منطقة من مناطق الكويت. اتصل الآن على{" "}
            <Link href="tel:+96590998489" style={il}>90998489</Link>.
          </p>
        </section>

        {/* ── Services ── */}
        <section
          aria-label="خدمات صباغ انستقرام"
          style={{ background: "#f4f7fe", padding: "56px 20px" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
              خدمات صباغ انستقرام
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
              نقدم مجموعة متكاملة من خدمات الصباغة والدهانات لجميع أنواع العقارات
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 10,
                    background: "#fff",
                    borderRadius: 12,
                    padding: "24px 16px",
                    textDecoration: "none",
                    border: "1.5px solid #e3eaf5",
                    boxShadow: "0 2px 8px rgba(1,46,141,.07)",
                    transition: "box-shadow .2s",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{s.icon}</span>
                  <span style={{ color: "#012e8d", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.5 }}>
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Us ── */}
        <section
          aria-label="لماذا تختار صباغ انستقرام"
          style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}
        >
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
            لماذا تختارنا؟
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
            نحن لسنا مجرد صباغين – نحن شركاء في جعل منزلك يبدو أجمل
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {whyUs.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: "24px 20px",
                  border: "1.5px solid #e3eaf5",
                  boxShadow: "0 2px 8px rgba(1,46,141,.06)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "0 0 8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#666", lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery ── */}
        <section
          aria-label="معرض أعمال صباغ انستقرام"
          style={{ background: "#f4f7fe", padding: "56px 20px" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
              معرض أعمالنا
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
              نماذج من أعمالنا الحقيقية في مختلف مناطق الكويت
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(1,46,141,.12)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(1,46,141,.6) 0%, transparent 55%)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "12px 14px",
                    }}
                  >
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.85rem" }}>{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link
                href="/#our-work-gallery"
                style={{
                  display: "inline-block",
                  background: "#012e8d",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                عرض جميع الأعمال ←
              </Link>
            </div>
          </div>
        </section>

        {/* ── Detailed content ── */}
        <section
          aria-label="تفاصيل خدمات صباغ انستقرام"
          style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}
        >
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 20 }}>
            صباغ هندي وباكستاني انستقرام
          </h2>

          <p style={{ lineHeight: 2, color: "#444", marginBottom: 20 }}>
            هل تبحث عن أفضل <strong>صباغ هندي انستقرام</strong>؟ نوفر لك أمهر عمالة هندية وباكستانية في
            مجال الدهانات والأصباغ بالكويت. طاقم كامل من أشطر الصباغين المدربين وأصحاب الخبرة الطويلة في
            تنفيذ أعمال الدهان الداخلية والخارجية. نلتزم بجودة المواد المستخدمة والوقت المستغرق في العمل،
            وننصحك دائماً بأنواع الدهانات الأفضل والأنسب لمنزلك أو محلك.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 32,
            }}
          >
            <div style={{ borderRight: "4px solid #C13584", padding: "16px 20px", background: "#fdf2f8", borderRadius: "0 8px 8px 0" }}>
              <h3 style={{ color: "#012e8d", fontWeight: 700, marginBottom: 8 }}>صباغ منازل وغرف انستقرام</h3>
              <p style={{ color: "#555", lineHeight: 1.9, margin: 0, fontSize: "0.95rem" }}>
                نصبغ غرفة واحدة أو المنزل كله – غرف نوم، غرف أطفال بألوان مشرقة، صالونات وغرف ضيوف أنيقة.
                يمكنك طلب رسومات معينة على الجدران أو نجوم مضيئة في السقف حسب رغبتك.
              </p>
            </div>
            <div style={{ borderRight: "4px solid #C13584", padding: "16px 20px", background: "#fdf2f8", borderRadius: "0 8px 8px 0" }}>
              <h3 style={{ color: "#012e8d", fontWeight: 700, marginBottom: 8 }}>تركيب ورق جدران انستقرام</h3>
              <p style={{ color: "#555", lineHeight: 1.9, margin: 0, fontSize: "0.95rem" }}>
                أجود أنواع الخامات بأشكال متنوعة:{" "}
                <Link href="/services/wallpaper-installation-kuwait" style={il}>ورق جدران ثلاثي الأبعاد</Link>
                {" "}ومعدني والفينيل، لا يتغير لونه ولا يتسخ بسهولة، مع مساعدتك في اختيار التصميم المناسب للمكان.
              </p>
            </div>
            <div style={{ borderRight: "4px solid #C13584", padding: "16px 20px", background: "#fdf2f8", borderRadius: "0 8px 8px 0" }}>
              <h3 style={{ color: "#012e8d", fontWeight: 700, marginBottom: 8 }}>جبس بورد وأرضيات انستقرام</h3>
              <p style={{ color: "#555", lineHeight: 1.9, margin: 0, fontSize: "0.95rem" }}>
                تركيب أسقف جبس بورد بعزل حراري عالي وإنارة مخفية، وتركيب أرضيات باركيه وفينيل، بأيدي
                فنيين هنود وباكستانيين متخصصين مع سرعة في التنفيذ وجودة عالية.
              </p>
            </div>
          </div>

          <Image
            src="/gallery/خدمات-الصباغة.webp"
            alt="خدمات صباغ انستقرام – صباغة وورق جدران وجبس بورد"
            width={920}
            height={400}
            style={{ width: "100%", height: "auto", borderRadius: 12, objectFit: "cover", boxShadow: "0 4px 20px rgba(0,0,0,.1)", marginBottom: 32 }}
            loading="lazy"
          />

          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "#012e8d", marginBottom: 16 }}>
            صباغ شاطر ورخيص انستقرام في جميع مناطق الكويت
          </h2>
          <p style={{ lineHeight: 2, color: "#444", marginBottom: 16 }}>
            نحن نؤمن بأن <strong>الجودة الاحترافية لا تستلزم دفع مبالغ طائلة</strong>. لذا نُقدّم خدمة{" "}
            <Link href="/services/cheap-painter-kuwait" style={il}>صباغ رخيص انستقرام</Link>
            {" "}تُرضي طموحاتك الجمالية وتناسب ميزانيتك في آنٍ واحد. تشكيلة واسعة من الألوان والأنواع:
            صباغ زيتي، صباغ ناشف، صباغ لامع، صباغ مطفي – يمكنك اختيار درجة اللون التي تحب أو دمج مجموعة
            من الألوان معاً. كل عرض سعر نُقدّمه يكون شاملاً وواضحاً لا مفاجآت فيه.
          </p>
          <p style={{ lineHeight: 2, color: "#444", marginBottom: 0 }}>
            للاطلاع على أسعار تفصيلية، زر صفحة{" "}
            <Link href="/asaar-sabagh-kuwait" style={il}>أسعار الصباغة في الكويت 2026</Link>
            {" "}حيث نوفر جدول أسعار شاملاً لجميع أنواع المشاريع.
          </p>
        </section>

        {/* ── Mid CTA ── */}
        <section
          aria-label="تواصل مع صباغ انستقرام"
          style={{ background: igGradient, padding: "48px 20px", textAlign: "center", direction: "rtl" }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", marginBottom: 12 }}>
              احصل على معاينة مجانية الآن
            </h2>
            <p style={{ color: "#fff", opacity: 0.95, lineHeight: 1.8, marginBottom: 28 }}>
              نخدم السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع مناطق الكويت. تواصل معنا لتحصل على عرض سعر تفصيلي مجاناً.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="tel:+96590998489"
                style={{ background: "#fff", color: "#C13584", padding: "12px 28px", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none" }}
              >
                📞 اتصل: 90998489
              </Link>
              <a
                href="https://wa.me/96590998489"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none" }}
              >
                💬 واتساب مباشر
              </a>
            </div>
          </div>
        </section>

        {/* ── Regions ── */}
        <section
          aria-label="مناطق خدمة صباغ انستقرام"
          style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}
        >
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8 }}>
            صباغ انستقرام يخدم جميع المناطق
          </h2>
          <p style={{ color: "#666", marginBottom: 28, lineHeight: 1.8 }}>
            فريقنا يصل إليك في أي منطقة من الكويت خلال وقت قصير. اختر منطقتك للمزيد من التفاصيل:
          </p>
          <nav aria-label="مناطق خدمة صباغ انستقرام" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {regions.map((r) => (
              <Link key={r.href} href={r.href} style={chip}>
                {r.label}
              </Link>
            ))}
          </nav>
        </section>

        {/* ── FAQ ── */}
        <section
          id="faq"
          aria-label="الأسئلة الشائعة – صباغ انستقرام"
          style={{ background: "#f4f7fe", padding: "56px 20px" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
              الأسئلة الشائعة حول صباغ انستقرام
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
              إجابات لأكثر الأسئلة شيوعاً حول خدمات صباغ انستقرام في الكويت
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "20px 24px",
                    border: "1.5px solid #e3eaf5",
                    boxShadow: "0 2px 8px rgba(1,46,141,.06)",
                  }}
                >
                  <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "0 0 10px" }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: "#555", lineHeight: 1.9, margin: 0, fontSize: "0.95rem" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related links ── */}
        <section
          aria-label="روابط ذات صلة"
          style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}
        >
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#012e8d", marginBottom: 20 }}>
            صفحات ذات صلة
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { href: "/sabagh-elkuwait", label: "صباغ الكويت" },
              { href: "/asaar-sabagh-kuwait", label: "أسعار الصباغة 2026" },
              { href: "/services", label: "جميع الخدمات" },
              { href: "/regions", label: "جميع المناطق" },
              { href: "/blogs", label: "مدونة الصباغة" },
              { href: "/services/cheap-painter-kuwait", label: "صباغ رخيص انستقرام" },
              { href: "/services/painting-master-kuwait", label: "معلم صباغ انستقرام" },
              { href: "/services/apartment-painter-kuwait", label: "صباغ شقق انستقرام" },
              { href: "/services/home-painter-kuwait", label: "صباغ منازل انستقرام" },
              { href: "/services/wallpaper-installation-kuwait", label: "تركيب ورق جدران" },
              { href: "/services/decor-painter-kuwait", label: "جبس بورد انستقرام" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={chip}>
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section
          aria-label="احجز صباغ انستقرام الآن"
          style={{ background: igGradient, padding: "64px 20px", textAlign: "center", direction: "rtl" }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", marginBottom: 16, lineHeight: 1.3 }}>
              اتصل الآن واحصل على<br />معاينة مجانية
            </h2>
            <p style={{ color: "#fff", opacity: 0.95, lineHeight: 1.9, marginBottom: 32, fontSize: "1.05rem" }}>
              صباغ هندي وباكستاني شاطر ورخيص انستقرام – دهانات أصلية – ورق جدران وجبس بورد – نخدم جميع مناطق الكويت
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="tel:+96590998489"
                style={{ background: "#fff", color: "#C13584", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: "1.1rem", textDecoration: "none" }}
              >
                📞 90998489
              </Link>
              <a
                href="https://wa.me/96590998489"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#25D366", color: "#fff", padding: "14px 32px", borderRadius: 10, fontWeight: 800, fontSize: "1.1rem", textDecoration: "none" }}
              >
                💬 واتساب
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
