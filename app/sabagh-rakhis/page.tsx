import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";

const siteUrl = "https://sabaghelkuwait.com";
const pageUrl = `${siteUrl}/sabagh-rakhis`;

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "صباغ رخيص بالكويت | صباغ شاطر وجودة عالية – 90998489",
  description:
    "صباغ رخيص بالكويت مع جودة احترافية لا تنازل عنها. صباغ شاطر ورخيص يخدم جميع مناطق الكويت بأسعار تبدأ من 80 دينار. دهانات أصلية وضمان سنة. اتصل الآن 90998489.",
  keywords: [
    "صباغ رخيص",
    "صباغ رخيص بالكويت",
    "صباغ شاطر ورخيص",
    "صباغ الكويت",
    "صباغ",
    "صباغ شاطر",
    "دهان رخيص الكويت",
    "صباغ منازل رخيص",
    "صباغ شقق رخيص الكويت",
    "أرخص صباغ في الكويت",
    "اصباغ رخيصة الكويت",
    "صباغ بسعر مناسب الكويت",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: pageUrl,
    siteName: "صباغ الكويت",
    title: "صباغ رخيص بالكويت | صباغ شاطر وجودة عالية – 90998489",
    description:
      "صباغ رخيص بالكويت مع جودة احترافية. صباغ شاطر ورخيص يخدم جميع مناطق الكويت بأسعار مناسبة ودهانات أصلية وضمان سنة.",
    images: [
      {
        url: `${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%B1%D8%AE%D9%8A%D8%B5.webp`,
        width: 1200,
        height: 630,
        alt: "صباغ رخيص بالكويت – جودة عالية بأسعار مناسبة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ رخيص بالكويت | صباغ شاطر ورخيص",
    description: "صباغ رخيص بالكويت مع ضمان الجودة. اتصل 90998489 للحصول على معاينة مجانية.",
    images: [`${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%B1%D8%AE%D9%8A%D8%B5.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────
const graphLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "صباغ رخيص بالكويت",
      alternateName: ["صباغ شاطر ورخيص", "صباغ الكويت", "اصباغ الكويت"],
      description:
        "صباغ رخيص بالكويت – خدمات صباغة احترافية بأسعار تنافسية لجميع مناطق الكويت. دهانات أصلية وضمان سنة كاملة.",
      url: siteUrl,
      telephone: "+96590998489",
      priceRange: "$",
      image: `${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%B1%D8%AE%D9%8A%D8%B5.webp`,
      address: { "@type": "PostalAddress", addressCountry: "KW", addressLocality: "الكويت" },
      areaServed: { "@type": "Country", name: "Kuwait" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
        opens: "08:00",
        closes: "22:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "صباغ رخيص بالكويت", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "هل يمكن الحصول على صباغ رخيص بالكويت بجودة جيدة؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، الجودة والسعر المناسب ليسا متناقضين. المفتاح هو اختيار صباغ خبير يعرف كيف يوفر في التكلفة دون التضحية بالجودة؛ عبر استخدام الكميات الصحيحة من الدهان وإتقان التطبيق منذ البداية بدون هدر." },
        },
        {
          "@type": "Question",
          name: "ما أقل سعر لصباغة شقة في الكويت؟",
          acceptedAnswer: { "@type": "Answer", text: "أقل سعر لصباغة شقة صغيرة (غرفة وصالة) في الكويت يبدأ من 80 دينار كويتي بدهانات متوسطة الجودة. شقة 3 غرف تبدأ من 150 دينار. السعر يشمل العمالة والمواد الأساسية." },
        },
        {
          "@type": "Question",
          name: "ما الفرق بين الصباغ الرخيص والصباغ الشاطر؟",
          acceptedAnswer: { "@type": "Answer", text: "الصباغ الشاطر الرخيص هو من يجمع بين السعر المناسب والمهارة العالية. الرخيص فقط قد يوفر في المواد أو التطبيق وينتج عمل رديء. نحن نقدم الاثنين معاً: سعر مناسب + جودة لا نتنازل عنها." },
        },
        {
          "@type": "Question",
          name: "هل الصباغ الرخيص يستخدم دهانات أصلية؟",
          acceptedAnswer: { "@type": "Answer", text: "عندنا نعم. نستخدم دهانات أصلية معتمدة من جوتن وناشيونال والجزيرة مع فاتورة رسمية. الوفر يأتي من خبرتنا في التنفيذ وليس من التوفير في جودة المواد." },
        },
        {
          "@type": "Question",
          name: "كيف أعرف أن الصباغ سعره مناسب فعلاً وليس غشاً؟",
          acceptedAnswer: { "@type": "Answer", text: "اطلب عرض سعر مفصّل يوضح: نوع الدهان، عدد الطبقات، هل يشمل البريمر والفيلر، وهل يوجد ضمان. نحن نقدم عرض سعر مجاني شفاف بدون خداع." },
        },
        {
          "@type": "Question",
          name: "هل تقدمون ضماناً حتى مع السعر الرخيص؟",
          acceptedAnswer: { "@type": "Answer", text: "نعم، ضمان سنة كاملة على العمل والمواد بغض النظر عن السعر. هذا ما يميزنا – جودة احترافية بسعر يناسب جميع الميزانيات." },
        },
      ],
    },
    {
      "@type": "Article",
      headline: "صباغ رخيص بالكويت – دليل الحصول على أفضل سعر مع أعلى جودة",
      description: "كيف تحصل على صباغ رخيص في الكويت دون التضحية بالجودة؟ أسعار، نصائح، ومقارنات.",
      author: { "@type": "Organization", name: "صباغ الكويت", url: siteUrl },
      publisher: { "@type": "Organization", name: "صباغ الكويت", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` } },
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      url: pageUrl,
      inLanguage: "ar",
      image: `${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%B1%D8%AE%D9%8A%D8%B5.webp`,
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const priceRows = [
  { type: "صباغة غرفة واحدة", size: "20 – 30 م²", price: "25 – 45 دينار" },
  { type: "صباغة شقة صغيرة (1-2 غرفة)", size: "حتى 100 م²", price: "80 – 140 دينار" },
  { type: "صباغة شقة متوسطة (3 غرف)", size: "100 – 150 م²", price: "140 – 230 دينار" },
  { type: "صباغة شقة كبيرة (4+ غرف)", size: "150 – 200 م²", price: "230 – 380 دينار" },
  { type: "صباغة فيلا صغيرة (داخلي)", size: "200 – 300 م²", price: "280 – 520 دينار" },
  { type: "صباغة واجهة خارجية", size: "حسب المساحة", price: "180 – 550 دينار" },
  { type: "صباغة مكتب أو محل", size: "حتى 100 م²", price: "90 – 190 دينار" },
  { type: "تركيب ورق جدران", size: "لكل م²", price: "3 – 7 دينار/م²" },
];

const savingTips = [
  {
    icon: "📅",
    title: "اختر التوقيت الصحيح",
    body: "الصباغة في فصل الشتاء (أكتوبر – مارس) أرخص بنسبة 10-15% لأن الطلب أقل مقارنة بالصيف.",
  },
  {
    icon: "📦",
    title: "اجمع أكثر من خدمة",
    body: "صباغة الداخل والخارج معاً في صفقة واحدة توفر عليك 15-20% مقارنة بعملهما منفصلين.",
  },
  {
    icon: "🎨",
    title: "اختر الدهان المناسب وليس الأغلى",
    body: "دهان متوسط الجودة من ناشيونال كافٍ للغرف العادية. الدهانات الفاخرة للحمامات والواجهات فقط.",
  },
  {
    icon: "📝",
    title: "اطلب عروض سعر متعددة",
    body: "قارن 3 عروض على الأقل. العرض الأرخص ليس دائماً الأفضل – قارن ما يتضمنه كل عرض تحديداً.",
  },
  {
    icon: "🛡",
    title: "لا توفر في البريمر والفيلر",
    body: "التوفير في طبقة الأساس يعني إعادة الصباغة بعد سنة. هذا يكلفك ضعف المبلغ على المدى البعيد.",
  },
  {
    icon: "✅",
    title: "اشترط الضمان كتابةً",
    body: "الصباغ الواثق من عمله يقبل الضمان. من يرفض الضمان – تجنبه حتى لو كان الأرخص.",
  },
];

const whyUs = [
  { icon: "💰", title: "أسعار تنافسية حقيقية", body: "لا مبالغة ولا خداع. سعرنا شامل وواضح من البداية مع عرض مجاني قبل أي التزام." },
  { icon: "⭐", title: "جودة لا نتنازل عنها", body: "الرخيص عندنا يعني سعر مناسب مع نفس معايير الاحترافية التي نطبقها في المشاريع الكبرى." },
  { icon: "🎨", title: "دهانات أصلية فقط", body: "نستخدم جوتن وناشيونال والجزيرة الأصلية. لا دهانات مقلدة أو رخيصة تضر بجدرانك." },
  { icon: "🛡", title: "ضمان سنة كاملة", body: "أي تقشر أو خلل نُصلحه مجاناً خلال السنة الأولى بدون نقاش." },
  { icon: "🔍", title: "معاينة مجانية", body: "نزورك ونفحص الجدران ونقدم عرض سعر تفصيلي مجاناً بدون أي التزام من جانبك." },
  { icon: "⏱", title: "تسليم في الموعد", body: "نلتزم بالجداول الزمنية المتفق عليها. لا تأخير ولا مفاجآت." },
];

const regions = [
  { href: "/regions/sabaagh-alsaalimia", label: "السالمية" },
  { href: "/regions/sabaagh-hawalli", label: "حولي" },
  { href: "/regions/sabaagh-alfarwaniyah", label: "الفروانية" },
  { href: "/regions/sabaagh-aljahraa", label: "الجهراء" },
  { href: "/regions/sabaagh-al-ahmadi", label: "الأحمدي" },
  { href: "/regions/sabaagh-aljabriya", label: "الجابرية" },
  { href: "/regions/sabaagh-bayan", label: "بيان" },
  { href: "/regions/sabaagh-salwa", label: "سلوى" },
  { href: "/regions/sabaagh-khaitan", label: "خيطان" },
  { href: "/regions/sabaagh-mubarak-al-kabeer", label: "مبارك الكبير" },
  { href: "/regions/sabaagh-sabah-alsaalim", label: "صباح السالم" },
  { href: "/regions/sabaagh-alfhahil", label: "الفحيحيل" },
  { href: "/regions/sabaagh-alrumaithiya", label: "الرميثية" },
  { href: "/regions/sabaagh-jaber-alahmad", label: "جابر الأحمد" },
];

const faqs = [
  {
    q: "هل يمكن الحصول على صباغ رخيص بالكويت بجودة جيدة؟",
    a: "نعم، الجودة والسعر المناسب ليسا متناقضين. المفتاح هو اختيار صباغ خبير يعرف كيف يوفر في التكلفة دون التضحية بالجودة؛ عبر استخدام الكميات الصحيحة وإتقان التطبيق من البداية بدون هدر. فريقنا يجمع الاثنين منذ أكثر من 10 سنوات.",
  },
  {
    q: "ما أقل سعر لصباغة شقة في الكويت؟",
    a: "أقل سعر لصباغة شقة صغيرة (غرفة وصالة) يبدأ من 80 دينار كويتي بدهانات متوسطة الجودة. شقة 3 غرف تبدأ من 140 دينار. السعر يشمل العمالة والمواد الأساسية. للاطلاع على جدول أسعار مفصّل زر صفحة أسعار صباغ الكويت.",
  },
  {
    q: "ما الفرق بين الصباغ الرخيص والصباغ الشاطر؟",
    a: "الصباغ الشاطر الرخيص هو من يجمع السعر المناسب مع المهارة العالية. الرخيص فقط قد يوفر في المواد أو التطبيق وينتج عملاً رديئاً يتقشر بعد أشهر. نحن نقدم الاثنين: سعر يناسب ميزانيتك مع جودة لا نتنازل عنها.",
  },
  {
    q: "هل الصباغ الرخيص يستخدم دهانات أصلية؟",
    a: "عندنا نعم. نستخدم حصراً دهانات أصلية معتمدة من جوتن وناشيونال والجزيرة مع فاتورة رسمية. الوفر في السعر يأتي من خبرتنا في التنفيذ وليس من التوفير في جودة المواد.",
  },
  {
    q: "كيف أعرف أن الصباغ سعره مناسب فعلاً وليس غشاً؟",
    a: "اطلب عرض سعر مفصّل يوضح: نوع الدهان واسم الماركة، عدد الطبقات، هل يشمل البريمر والفيلر، وهل يوجد ضمان مكتوب. نقدم عرض سعر مجاني شفاف 100% بدون أي خداع.",
  },
  {
    q: "هل تقدمون ضماناً حتى مع السعر الرخيص؟",
    a: "نعم، ضمان سنة كاملة على العمل والمواد بغض النظر عن حجم المشروع أو سعره. هذا ما يميزنا – جودة احترافية بسعر يناسب جميع الميزانيات.",
  },
];

// ─── Styles ───────────────────────────────────────────────────────────────────
const il: CSSProperties = { color: "#1565c0", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #90caf9" };
const chip: CSSProperties = { display: "inline-block", padding: "7px 16px", borderRadius: 20, border: "1.5px solid #c7d9f8", color: "#012e8d", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", background: "#fff" };
const ctaWhite: CSSProperties = { background: "#fff", color: "#1565c0", padding: "12px 28px", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none" };
const ctaGreen: CSSProperties = { background: "#25D366", color: "#fff", padding: "12px 28px", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none" };

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SabaghRakhisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphLd) }} />
      <Navbar />

      {/* ── Hero ── */}
      <header
        style={{
          background: "linear-gradient(135deg, #0d3b8e 0%, #1565c0 60%, #1e88e5 100%)",
          color: "#fff",
          paddingTop: "clamp(80px, 14vw, 140px)",
          paddingBottom: "clamp(48px, 8vw, 96px)",
          textAlign: "center",
          direction: "rtl",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px" }}>
          <nav aria-label="مسار التنقل" style={{ marginBottom: 20, fontSize: "0.85rem", opacity: 0.85 }}>
            <Link href="/" style={{ color: "#90caf9", textDecoration: "none" }}>الرئيسية</Link>
            <span style={{ margin: "0 8px", opacity: 0.6 }}>›</span>
            <Link href="/sabagh-elkuwait" style={{ color: "#90caf9", textDecoration: "none" }}>صباغ الكويت</Link>
            <span style={{ margin: "0 8px", opacity: 0.6 }}>›</span>
            <span>صباغ رخيص</span>
          </nav>

          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.2rem)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.25 }}>
            صباغ رخيص بالكويت
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", opacity: 0.95, maxWidth: 600, margin: "0 auto 12px", lineHeight: 1.8 }}>
            صباغ شاطر ورخيص – جودة احترافية لا تنازل عنها بأسعار تناسب جميع الميزانيات
          </p>
          <p style={{ fontSize: "0.95rem", color: "#90caf9", margin: "0 auto 32px" }}>
            أسعار تبدأ من <strong style={{ color: "#fff" }}>80 دينار</strong> · دهانات أصلية · ضمان سنة · معاينة مجانية
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="tel:+96590998489" style={ctaWhite}>📞 اتصل: 90998489</Link>
            <a href="https://wa.me/96590998489" target="_blank" rel="noopener noreferrer" style={ctaGreen}>💬 واتساب مباشر</a>
          </div>
        </div>
      </header>

      <main style={{ direction: "rtl" }}>

        {/* ── Hero Image ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 6px 32px rgba(1,46,141,.15)" }}>
            <Image
              src="/gallery/صباغ-رخيص.webp"
              alt="صباغ رخيص بالكويت – أعمال احترافية بأسعار مناسبة"
              width={960}
              height={480}
              priority
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* ── Intro ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 16 }}>
            صباغ رخيص بالكويت – الجودة والسعر معاً
          </h2>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "1.05rem", marginBottom: 16 }}>
            يبحث كثير من سكان الكويت عن <strong>صباغ رخيص بالكويت</strong> يجمع بين السعر المناسب والجودة
            الاحترافية. ونحن في <Link href="/sabagh-elkuwait" style={il}>صباغ الكويت</Link> نُثبت يومياً أن
            هذا ممكن — بسعر يبدأ من <strong>80 دينار فقط</strong> للشقة الصغيرة مع دهانات أصلية وضمان
            سنة كاملة.
          </p>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "1.05rem", marginBottom: 16 }}>
            سر <strong>الصباغ الشاطر الرخيص</strong> ليس التوفير في المواد — بل الخبرة التي تمنع الهدر وتضمن
            النتيجة من أول طلقة. فريقنا يعمل منذ <strong>أكثر من 10 سنوات</strong> ويخدم{" "}
            <Link href="/services/cheap-painter-kuwait" style={il}>جميع مناطق الكويت</Link>{" "}
            بكفاءة تحمي وقتك وميزانيتك في آنٍ واحد.
          </p>
          <p style={{ lineHeight: 2, color: "#444", fontSize: "1.05rem" }}>
            قبل أن تقرر، اطلع على{" "}
            <Link href="/asaar-sabagh-kuwait" style={il}>جدول أسعار صباغ الكويت 2026</Link>{" "}
            حتى تعرف ما الذي تتوقعه وتقارن العروض بشكل صحيح.
          </p>
        </section>

        {/* ── Price Table ── */}
        <section style={{ background: "#f4f7fe", padding: "56px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
              أسعار الصباغ الرخيص في الكويت 2026
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 32, lineHeight: 1.8 }}>
              أسعار تقريبية تشمل العمالة والمواد بدهانات متوسطة الجودة
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem", background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px rgba(1,46,141,.08)" }}>
                <thead>
                  <tr style={{ background: "#1565c0", color: "#fff" }}>
                    {["نوع الخدمة", "المساحة", "السعر التقريبي (د.ك)"].map((h) => (
                      <th key={h} style={{ padding: "14px 18px", textAlign: "right", fontWeight: 700, border: "none" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row, i) => (
                    <tr key={row.type} style={{ background: i % 2 === 0 ? "#f5f8ff" : "#fff" }}>
                      <td style={{ padding: "12px 18px", borderBottom: "1px solid #e3eaf5" }}>{row.type}</td>
                      <td style={{ padding: "12px 18px", borderBottom: "1px solid #e3eaf5", color: "#555", whiteSpace: "nowrap" }}>{row.size}</td>
                      <td style={{ padding: "12px 18px", borderBottom: "1px solid #e3eaf5", fontWeight: 700, color: "#1565c0", whiteSpace: "nowrap" }}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: "center", color: "#888", fontSize: "0.85rem", marginTop: 12 }}>
              * الأسعار تقريبية. السعر الدقيق يُحدد بعد المعاينة المجانية.
            </p>
          </div>
        </section>

        {/* ── Saving Tips ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8 }}>
            6 طرق توفّر بها في الصباغة بجودة حقيقية
          </h2>
          <p style={{ color: "#666", marginBottom: 32, lineHeight: 1.8 }}>
            نصائح عملية من خبرة أكثر من 10 سنوات في سوق الصباغة الكويتي
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 20 }}>
            {savingTips.map((tip) => (
              <div key={tip.title} style={{ background: "#fff", borderRadius: 12, padding: "24px 20px", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{tip.icon}</div>
                <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "0 0 8px" }}>{tip.title}</h3>
                <p style={{ color: "#666", lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}>{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery Image ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 56px" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(1,46,141,.12)" }}>
            <Image
              src="/gallery/صباغ-شاطر-ورخيص.webp"
              alt="صباغ شاطر ورخيص بالكويت – نتائج احترافية"
              width={960}
              height={420}
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* ── Why Us ── */}
        <section style={{ background: "#f4f7fe", padding: "56px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
              لماذا نحن أفضل صباغ رخيص في الكويت؟
            </h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
              رخيص لا يعني رديء – هذا وعدنا منذ اليوم الأول
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
              {whyUs.map((item) => (
                <div key={item.title} style={{ background: "#fff", borderRadius: 12, padding: "24px 20px", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)" }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{item.icon}</div>
                  <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ color: "#666", lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid CTA ── */}
        <section style={{ background: "linear-gradient(135deg, #0d3b8e, #1e88e5)", padding: "48px 20px", textAlign: "center", direction: "rtl" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", marginBottom: 12 }}>
              احصل على عرض سعر مجاني الآن
            </h2>
            <p style={{ color: "#bbdefb", lineHeight: 1.8, marginBottom: 28, fontSize: "1rem" }}>
              صباغ شاطر ورخيص – نخدم جميع مناطق الكويت. معاينة مجانية وعرض سعر تفصيلي خلال 24 ساعة.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="tel:+96590998489" style={ctaWhite}>📞 اتصل: 90998489</Link>
              <a href="https://wa.me/96590998489" target="_blank" rel="noopener noreferrer" style={ctaGreen}>💬 واتساب مباشر</a>
            </div>
          </div>
        </section>

        {/* ── Detailed SEO Content ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 16 }}>
            صباغ شاطر ورخيص – الفرق بين الرخيص الحقيقي والرخيص الوهمي
          </h2>
          <p style={{ lineHeight: 2, color: "#444", marginBottom: 16 }}>
            في سوق <strong>الصباغة الكويتي</strong>، ينتشر مفهوم خاطئ مفاده أن السعر المنخفض يعني تدني الجودة
            حتماً. الحقيقة أن <strong>الصباغ الشاطر</strong> هو من يحسن إدارة المواد ويتقن التطبيق فيوفر في
            الوقت والهدر — وهذا الوفر يعود عليك أنت بسعر أقل.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
            <div style={{ background: "#fff3f3", border: "1.5px solid #ffcdd2", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ color: "#c62828", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>❌ الصباغ الرخيص الوهمي</h3>
              <ul style={{ color: "#555", lineHeight: 1.9, paddingRight: 20, margin: 0, fontSize: "0.9rem" }}>
                <li>يستخدم دهانات مقلدة أو منتهية الصلاحية</li>
                <li>يطبق طبقة واحدة فقط بدل طبقتين</li>
                <li>يتجاهل معالجة التشققات والرطوبة</li>
                <li>لا يقدم ضماناً أو فاتورة رسمية</li>
                <li>النتيجة تتقشر بعد 3-6 أشهر</li>
              </ul>
            </div>
            <div style={{ background: "#f1f8e9", border: "1.5px solid #c5e1a5", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ color: "#2e7d32", fontWeight: 700, fontSize: "1rem", margin: "0 0 12px" }}>✅ الصباغ الرخيص الحقيقي</h3>
              <ul style={{ color: "#555", lineHeight: 1.9, paddingRight: 20, margin: 0, fontSize: "0.9rem" }}>
                <li>دهانات أصلية معتمدة مع فاتورة رسمية</li>
                <li>طبقتين على الأقل بعد البريمر والفيلر</li>
                <li>معالجة كاملة للتشققات والرطوبة أولاً</li>
                <li>ضمان سنة مكتوب على العمل والمواد</li>
                <li>النتيجة تدوم 5-8 سنوات كاملة</li>
              </ul>
            </div>
          </div>

          <h2 style={{ fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 800, color: "#012e8d", margin: "40px 0 16px" }}>
            صباغ رخيص في جميع مناطق الكويت
          </h2>
          <p style={{ lineHeight: 2, color: "#444", marginBottom: 24 }}>
            نقدم خدمة <strong>الصباغ الرخيص</strong> في جميع محافظات الكويت بنفس المعايير ونفس الجودة.
            سواء كنت في <Link href="/regions/sabaagh-alsaalimia" style={il}>السالمية</Link>،{" "}
            <Link href="/regions/sabaagh-hawalli" style={il}>حولي</Link>،{" "}
            <Link href="/regions/sabaagh-alfarwaniyah" style={il}>الفروانية</Link>، أو{" "}
            <Link href="/regions/sabaagh-aljahraa" style={il}>الجهراء</Link> — فريقنا يصل إليك خلال وقت قصير
            ويقدم نفس السعر المناسب في كل مكان.
          </p>
        </section>

        {/* ── Regions ── */}
        <section style={{ background: "#f4f7fe", padding: "48px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#012e8d", marginBottom: 20 }}>
              صباغ رخيص في منطقتك
            </h2>
            <nav aria-label="صباغ رخيص في مناطق الكويت" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {regions.map((r) => (
                <Link key={r.href} href={r.href} style={chip}>{r.label}</Link>
              ))}
            </nav>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
            أسئلة شائعة عن الصباغ الرخيص في الكويت
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>
            إجابات واضحة لأكثر الأسئلة شيوعاً
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 12, padding: "20px 24px", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)" }}>
                <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "0 0 10px" }}>{faq.q}</h3>
                <p style={{ color: "#555", lineHeight: 1.9, margin: 0, fontSize: "0.95rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related links ── */}
        <section style={{ background: "#f4f7fe", padding: "48px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#012e8d", marginBottom: 20 }}>صفحات ذات صلة</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { href: "/sabagh-elkuwait", label: "صباغ الكويت" },
                { href: "/asaar-sabagh-kuwait", label: "أسعار صباغ الكويت 2026" },
                { href: "/services/cheap-painter-kuwait", label: "أرخص صباغ بالكويت" },
                { href: "/services/skilled-painter-kuwait", label: "صباغ شاطر بالكويت" },
                { href: "/services/painting-master-kuwait", label: "معلم صباغ بالكويت" },
                { href: "/services/apartment-painter-kuwait", label: "صباغ شقق بالكويت" },
                { href: "/services/home-painter-kuwait", label: "صباغ منازل بالكويت" },
                { href: "/services/wallpaper-installation-kuwait", label: "تركيب ورق جدران" },
                { href: "/services/decor-painter-kuwait", label: "صباغ ديكورات" },
                { href: "/services", label: "جميع الخدمات" },
                { href: "/regions", label: "جميع المناطق" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={chip}>{l.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section style={{ background: "linear-gradient(135deg, #0d3b8e, #1e88e5)", padding: "64px 20px", textAlign: "center", direction: "rtl" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", marginBottom: 16, lineHeight: 1.3 }}>
              صباغ شاطر ورخيص –<br />اتصل الآن للمعاينة المجانية
            </h2>
            <p style={{ color: "#bbdefb", lineHeight: 1.9, marginBottom: 32, fontSize: "1.05rem" }}>
              أسعار تبدأ من 80 دينار · دهانات أصلية · ضمان سنة · جميع مناطق الكويت
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="tel:+96590998489" style={{ ...ctaWhite, padding: "14px 32px", borderRadius: 10, fontSize: "1.1rem" }}>
                📞 90998489
              </Link>
              <a href="https://wa.me/96590998489" target="_blank" rel="noopener noreferrer"
                style={{ ...ctaGreen, padding: "14px 32px", borderRadius: 10, fontSize: "1.1rem" }}>
                💬 واتساب
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
