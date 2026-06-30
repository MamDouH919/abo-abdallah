import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";

const siteUrl  = "https://sabaghelkuwait.com";
const pageUrl  = `${siteUrl}/sabagh-alkuwait`;

// ═══════════════════════════════════════════════════════════════
// METADATA  –  optimised for  "صباغ الكويت"
// ═══════════════════════════════════════════════════════════════
export const metadata: Metadata = {
  title: "صباغ الكويت – أفضل صباغ وأصباغ في الكويت | 90998489",
  description:
    "صباغ الكويت الأول – خبرة +10 سنوات في صباغة المنازل والشقق والفلل بجميع مناطق الكويت. أفضل صباغ في الكويت بأسعار تنافسية ودهانات أصلية وضمان سنة. اتصل الآن 90998489.",
  keywords: [
    "صباغ الكويت",
    "صباغ",
    "اصباغ الكويت",
    "أفضل صباغ في الكويت",
    "صباغ الكويت رقم",
    "رقم صباغ الكويت",
    "صباغ الكويت واتساب",
    "صباغ بالكويت",
    "معلم صباغ الكويت",
    "صباغ منازل الكويت",
    "صباغ شقق الكويت",
    "صباغ الجهراء",
    "صباغ الجهراء رقم",
    "أفضل صباغ في الجهراء",
    "دهانات الكويت",
    "صباغ فلل الكويت",
    "أحسن صباغ في الكويت",
    "صباغ ممتاز الكويت",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: pageUrl,
    siteName: "صباغ الكويت",
    title: "صباغ الكويت – أفضل صباغ وأصباغ في الكويت | 90998489",
    description:
      "أفضل صباغ في الكويت – خبرة +10 سنوات، دهانات أصلية، ضمان سنة، تغطية جميع مناطق الكويت. اتصل 90998489.",
    images: [{
      url: `${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp`,
      width: 1200, height: 630,
      alt: "صباغ الكويت – أفضل صباغ في الكويت",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت – أفضل صباغ في الكويت 90998489",
    description: "أفضل صباغ في الكويت. دهانات أصلية · ضمان سنة · معاينة مجانية. اتصل الآن.",
    images: [`${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp`],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ═══════════════════════════════════════════════════════════════
// STRUCTURED DATA
// ═══════════════════════════════════════════════════════════════
const graphLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "صباغ الكويت",
      alternateName: ["أفضل صباغ في الكويت", "معلم صباغ الكويت", "اصباغ الكويت", "صباغ شاطر ورخيص"],
      description: "صباغ الكويت – الخيار الأول لخدمات الصباغة الاحترافية في جميع مناطق الكويت منذ أكثر من 10 سنوات.",
      url: siteUrl,
      telephone: "+96590998489",
      priceRange: "$$",
      image: `${siteUrl}/logo.webp`,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` },
      address: { "@type": "PostalAddress", addressCountry: "KW", addressLocality: "الكويت" },
      geo: { "@type": "GeoCoordinates", latitude: 29.3759, longitude: 47.9774 },
      areaServed: { "@type": "Country", name: "Kuwait" },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "08:00", closes: "22:00",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9", reviewCount: "350",
        bestRating: "5", worstRating: "1",
      },
      review: [
        { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5" }, author: { "@type": "Person", name: "خالد العتيبي" }, reviewBody: "أفضل صباغ تعاملت معه في الكويت. شغل نظيف وأسعار ممتازة والفريق محترف جداً. أنصح بيهم للجميع." },
        { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5" }, author: { "@type": "Person", name: "منى الرشيدي" }, reviewBody: "صباغ الكويت فعلاً يستحق الثقة. الألوان جميلة والتشطيب دقيق. انتهوا من فيلتنا في 4 أيام فقط." },
        { "@type": "Review", reviewRating: { "@type": "Rating", ratingValue: "5" }, author: { "@type": "Person", name: "أحمد المطيري" }, reviewBody: "طلبت معاينة مجانية وكانت محترمة ومفصلة. السعر مناسب جداً والجودة أعلى من توقعاتي." },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات صباغ الكويت",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "صباغة المنازل والشقق" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "صباغة الفلل والواجهات" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "تركيب ورق الجدران" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "دهانات ديكورية ومخملية" } },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "صباغ الكويت", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "من هو أفضل صباغ في الكويت؟", acceptedAnswer: { "@type": "Answer", text: "صباغ الكويت (90998489) من أبرز الخيارات لخبرته التي تتجاوز 10 سنوات، استخدامه دهانات أصلية معتمدة، وتقديمه ضماناً سنة كاملة على جميع الأعمال مع معاينة مجانية." } },
        { "@type": "Question", name: "ما رقم صباغ الكويت؟", acceptedAnswer: { "@type": "Answer", text: "رقم صباغ الكويت هو 90998489 – متاح للاتصال والواتساب من السبت إلى الخميس من 8 صباحاً حتى 10 مساءً." } },
        { "@type": "Question", name: "كم سعر صباغ الكويت لشقة 3 غرف؟", acceptedAnswer: { "@type": "Answer", text: "سعر صباغة شقة 3 غرف في الكويت يتراوح بين 140 و250 دينار كويتي شامل العمالة والمواد بدهانات متوسطة الجودة. الدهانات الفاخرة من جوتن أو دولوكس ترفع السعر بنسبة 20-30%." } },
        { "@type": "Question", name: "هل توفرون صباغ الجهراء وبقية المحافظات؟", acceptedAnswer: { "@type": "Answer", text: "نعم، صباغ الجهراء من أكثر خدماتنا طلباً، ونغطي كذلك جميع محافظات الكويت: العاصمة، حولي، الفروانية، الأحمدي، ومبارك الكبير – بما في ذلك أكثر من 76 منطقة ومنطقة فرعية." } },
        { "@type": "Question", name: "هل صباغ الكويت يستخدم دهانات أصلية؟", acceptedAnswer: { "@type": "Answer", text: "نعم، نستخدم حصراً دهانات أصلية معتمدة من ماركات جوتن (Jotun) والجزيرة وناشيونال ودولوكس (Dulux) مع فاتورة رسمية وضمان الأصالة." } },
        { "@type": "Question", name: "هل يمكن التواصل مع صباغ الكويت عبر الواتساب؟", acceptedAnswer: { "@type": "Answer", text: "نعم، يمكنك التواصل مع صباغ الكويت عبر الواتساب على الرقم 90998489 لطلب معاينة مجانية أو الاستفسار عن الأسعار في أي وقت." } },
        { "@type": "Question", name: "كم يستغرق إنجاز عمل صباغة في الكويت؟", acceptedAnswer: { "@type": "Answer", text: "صباغة الشقة المتوسطة تستغرق من يومين إلى 3 أيام. الفيلا الكاملة من 5 إلى 7 أيام. المكتب أو المحل يوم إلى يومين. الجدول الزمني يُحدد مسبقاً ويُلتزم به." } },
        { "@type": "Question", name: "ما أنواع الدهانات التي يقدمها صباغ الكويت؟", acceptedAnswer: { "@type": "Answer", text: "صباغ الكويت يقدم: دهانات داخلية (مطفي، ساتان، لامع)، دهانات خارجية مقاومة للأحوال الجوية، دهانات مخملية وديكورية، تركيب ورق الجدران، ودهانات مقاومة للرطوبة للحمامات والمطابخ." } },
      ],
    },
    {
      "@type": "Article",
      headline: "صباغ الكويت – دليل اختيار أفضل صباغ في الكويت 2026",
      description: "كل ما تحتاج معرفته عن صباغ الكويت: الخدمات، الأسعار، المناطق، أنواع الدهانات، وكيف تختار أفضل صباغ لمنزلك.",
      author: { "@type": "Organization", name: "صباغ الكويت", url: siteUrl },
      publisher: { "@type": "Organization", name: "صباغ الكويت", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` } },
      datePublished: "2026-01-10",
      dateModified: "2026-06-14",
      url: pageUrl,
      inLanguage: "ar",
      image: `${siteUrl}/gallery/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp`,
      about: { "@type": "Thing", name: "صباغ الكويت" },
      keywords: "صباغ الكويت, صباغ, اصباغ الكويت, أفضل صباغ في الكويت",
    },
  ],
};

// ═══════════════════════════════════════════════════════════════
// PAGE DATA
// ═══════════════════════════════════════════════════════════════
const stats = [
  { number: "+10", label: "سنوات خبرة" },
  { number: "+5000", label: "مشروع منجز" },
  { number: "76", label: "منطقة مخدومة" },
  { number: "4.9★", label: "تقييم العملاء" },
];

const services = [
  { icon: "🏠", title: "صباغة المنازل", desc: "صباغة كاملة للمنازل بجميع أحجامها بدهانات أصلية وتشطيب احترافي.", href: "/services/home-painter-kuwait" },
  { icon: "🏢", title: "صباغة الشقق", desc: "تجديد شقتك بألوان عصرية وتشطيب دقيق في يومين إلى 3 أيام.", href: "/services/apartment-painter-kuwait" },
  { icon: "🏡", title: "صباغة الفلل", desc: "فلتك تستحق الأفضل – داخلي وخارجي بمعايير فاخرة ودهانات عالية الجودة.", href: "/services/home-painter-kuwait" },
  { icon: "🎨", title: "دهانات ديكورية", desc: "مخملية، معدنية، ثلاثية الأبعاد، وتأثيرات خاصة تجعل جدرانك تحفة فنية.", href: "/services/decor-painter-kuwait" },
  { icon: "🖼", title: "ورق الجدران", desc: "تركيب ورق جدران بأيدي فنيين متخصصين لجميع الأنواع والتصاميم.", href: "/services/wallpaper-installation-kuwait" },
  { icon: "🏗", title: "الواجهات الخارجية", desc: "دهانات خارجية مقاومة للحرارة والغبار والأشعة فوق البنفسجية.", href: "/services/kuwait-paints" },
  { icon: "💰", title: "صباغ رخيص", desc: "أسعار مناسبة تبدأ من 80 دينار مع نفس معايير الجودة العالية.", href: "/sabagh-rakhis" },
  { icon: "⭐", title: "صباغ شاطر", desc: "إتقان في التطبيق، دقة في الحواف، ونظافة تامة طوال فترة العمل.", href: "/services/skilled-painter-kuwait" },
];

const process = [
  { step: "01", title: "اتصل أو تواصل واتساب", desc: "اتصل على 90998489 أو أرسل رسالة واتساب. فريقنا يرد خلال دقائق." },
  { step: "02", title: "معاينة مجانية", desc: "نزور موقعك مجاناً ونفحص الجدران ونستمع لاحتياجاتك بدون أي التزام." },
  { step: "03", title: "عرض سعر تفصيلي", desc: "نقدم عرضاً مفصلاً يوضح نوع الدهان، عدد الطبقات، المدة، والسعر الإجمالي." },
  { step: "04", title: "التنفيذ الاحترافي", desc: "فريقنا يبدأ العمل في الموعد المحدد بدقة، ويلتزم بالجدول الزمني المتفق عليه." },
  { step: "05", title: "التسليم والضمان", desc: "نسلّم العمل بعد فحص دقيق، ونمنحك ضماناً سنة كاملة مكتوباً." },
];

const paintBrands = [
  { name: "جوتن Jotun", origin: "🇳🇴 نرويجي", desc: "الأعلى جودة والأوسع انتشاراً في الخليج. مقاومة استثنائية للمناخ الكويتي.", tag: "فاخر" },
  { name: "الجزيرة", origin: "🇸🇦 سعودي", desc: "جودة ممتازة وسعر تنافسي. مناسب للداخل والخارج بعمر افتراضي 7-9 سنوات.", tag: "مميز" },
  { name: "ناشيونال", origin: "🇰🇼 كويتي", desc: "الخيار الأمثل للمشاريع العادية. جودة جيدة وسعر مناسب وتوافر عالٍ.", tag: "اقتصادي" },
  { name: "دولوكس Dulux", origin: "🇬🇧 بريطاني", desc: "تشكيلة ألوان واسعة ودهانات داخلية فاخرة. الاختيار الأول للديكور.", tag: "فاخر" },
];

const galleryImages = [
  { src: "/gallery/صباغ-الكويت.webp",    alt: "صباغ الكويت – أعمال احترافية" },
  { src: "/gallery/اصباغ-الكويت.webp",   alt: "اصباغ الكويت – دهانات فاخرة" },
  { src: "/gallery/صباغ-شاطر.webp",      alt: "صباغ شاطر الكويت" },
  { src: "/gallery/صباغ-ممتاز.webp",     alt: "صباغ ممتاز في الكويت" },
  { src: "/gallery/خدمات-الصباغة.webp",  alt: "خدمات صباغة الكويت" },
  { src: "/gallery/صباغ-بالكويت.webp",   alt: "صباغ بالكويت – أعمال راقية" },
];

const reviews = [
  { name: "خالد العتيبي", rating: 5, region: "السالمية", text: "أفضل صباغ تعاملت معه في الكويت. شغل نظيف وأسعار ممتازة والفريق محترف جداً. أنصح بيهم للجميع." },
  { name: "منى الرشيدي", rating: 5, region: "بيان",      text: "فريق يستحق الثقة فعلاً. الألوان جميلة والتشطيب دقيق. انتهوا من فيلتنا في 4 أيام فقط." },
  { name: "أحمد المطيري", rating: 5, region: "الجهراء",  text: "بحثت طويلاً عن صباغ الجهراء وكان هذا الفريق الأفضل. معاينة محترمة ومفصلة، والسعر مناسب جداً والجودة أعلى من توقعاتي." },
];

const topRegions = [
  { href: "/regions/sabaagh-alsaalimia",    label: "صباغ السالمية" },
  { href: "/regions/sabaagh-hawalli",       label: "صباغ حولي" },
  { href: "/regions/sabaagh-alfarwaniyah",  label: "صباغ الفروانية" },
  { href: "/regions/sabaagh-aljahraa",      label: "صباغ الجهراء" },
  { href: "/regions/sabaagh-al-ahmadi",     label: "صباغ الأحمدي" },
  { href: "/regions/sabaagh-aljabriya",     label: "صباغ الجابرية" },
  { href: "/regions/sabaagh-bayan",         label: "صباغ بيان" },
  { href: "/regions/sabaagh-salwa",         label: "صباغ سلوى" },
  { href: "/regions/sabaagh-khaitan",       label: "صباغ خيطان" },
  { href: "/regions/sabaagh-mubarak-al-kabeer", label: "صباغ مبارك الكبير" },
  { href: "/regions/sabaagh-sabah-alsaalim", label: "صباغ صباح السالم" },
  { href: "/regions/sabaagh-alfhahil",      label: "صباغ الفحيحيل" },
  { href: "/regions/sabaagh-alrumaithiya",  label: "صباغ الرميثية" },
  { href: "/regions/sabaagh-jaber-alahmad", label: "صباغ جابر الأحمد" },
  { href: "/regions/sabaagh-alshuwaykh",    label: "صباغ الشويخ" },
];

const faqs = [
  { q: "من هو أفضل صباغ في الكويت؟", a: "صباغ الكويت (90998489) من أبرز الخيارات بخبرة تتجاوز 10 سنوات، دهانات أصلية معتمدة، وضمان سنة كاملة على جميع الأعمال. اتصل الآن للحصول على معاينة مجانية." },
  { q: "ما رقم التواصل معكم؟", a: "الرقم هو 90998489 – متاح للاتصال والواتساب من السبت إلى الخميس، من 8 صباحاً حتى 10 مساءً." },
  { q: "كم سعر صباغة شقة 3 غرف في الكويت؟", a: "يتراوح السعر بين 140 و250 دينار شامل العمالة والمواد بدهانات متوسطة. الدهانات الفاخرة ترفع السعر بنسبة 20-30%. اطلع على جدول الأسعار الكامل." },
  { q: "هل توفرون صباغ الجهراء وبقية المحافظات؟", a: "نعم، صباغ الجهراء من أكثر خدماتنا طلباً، ونغطي كذلك أكثر من 76 منطقة في العاصمة وحولي والفروانية والأحمدي ومبارك الكبير وكل أحيائها." },
  { q: "هل تستخدمون دهانات أصلية؟", a: "نعم، نستخدم حصراً دهانات أصلية من جوتن والجزيرة وناشيونال ودولوكس مع فاتورة رسمية وضمان الأصالة. لا دهانات مقلدة أو منخفضة الجودة." },
  { q: "هل يمكن التواصل عبر الواتساب؟", a: "نعم، أرسل رسالة واتساب على 90998489 وسنرد عليك خلال دقائق. يمكنك إرسال صور للجدران للحصول على تقدير أولي للسعر." },
  { q: "كم يستغرق إنجاز عمل الصباغة؟", a: "الشقة المتوسطة: يومان إلى 3 أيام. الفيلا الكاملة: 5 إلى 7 أيام. المكتب أو المحل: يوم إلى يومين. الجدول الزمني يُحدد مسبقاً ويُلتزم به." },
  { q: "ما أنواع الدهانات التي تقدمونها؟", a: "نقدم: دهانات داخلية (مطفي، ساتان، لامع)، دهانات خارجية مقاومة للأحوال الجوية، دهانات مخملية وديكورية، تركيب ورق الجدران، ودهانات مقاومة للرطوبة." },
];

// ─── Styles ───────────────────────────────────────────────────
const il:   CSSProperties = { color: "#1565c0", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #90caf9" };
const chip: CSSProperties = { display: "inline-block", padding: "7px 16px", borderRadius: 20, border: "1.5px solid #c7d9f8", color: "#012e8d", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", background: "#fff" };
const ctaW: CSSProperties = { background: "#fff", color: "#1565c0", padding: "13px 30px", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", whiteSpace: "nowrap" };
const ctaG: CSSProperties = { background: "#25D366", color: "#fff", padding: "13px 30px", borderRadius: 8, fontWeight: 800, fontSize: "1.05rem", textDecoration: "none", whiteSpace: "nowrap" };

function CtaBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div style={{ background: "linear-gradient(135deg,#0d3b8e,#1e88e5)", borderRadius: 16, padding: compact ? "36px 28px" : "56px 28px", textAlign: "center", direction: "rtl" }}>
      <h2 style={{ color: "#fff", fontWeight: 900, fontSize: compact ? "clamp(1.2rem,3vw,1.6rem)" : "clamp(1.5rem,4vw,2.2rem)", marginBottom: 12, lineHeight: 1.3 }}>
        {compact ? "احصل على معاينة مجانية الآن" : "اتصل الآن واحصل على معاينتك المجانية"}
      </h2>
      {!compact && (
        <p style={{ color: "#bbdefb", lineHeight: 1.9, marginBottom: 28, fontSize: "1.05rem", maxWidth: 540, margin: "0 auto 28px" }}>
          دهانات أصلية · ضمان سنة · جميع مناطق الكويت · أسعار تنافسية
        </p>
      )}
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: compact ? 16 : 0 }}>
        <Link href="tel:+96590998489" style={ctaW}>📞 90998489</Link>
        <a href="https://wa.me/96590998489" target="_blank" rel="noopener noreferrer" style={ctaG}>💬 واتساب</a>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════
export default function SabaghAlkuwaitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphLd) }} />
      <Navbar />

      {/* ── HERO ── */}
      <header style={{ background: "linear-gradient(135deg,#0d3b8e 0%,#1565c0 55%,#1e88e5 100%)", color: "#fff", paddingTop: "clamp(80px,14vw,140px)", paddingBottom: "clamp(56px,8vw,100px)", textAlign: "center", direction: "rtl" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 20px" }}>
          <nav aria-label="مسار التنقل" style={{ marginBottom: 24, fontSize: "0.85rem", opacity: 0.85 }}>
            <Link href="/" style={{ color: "#90caf9", textDecoration: "none" }}>الرئيسية</Link>
            <span style={{ margin: "0 8px", opacity: 0.6 }}>›</span>
            <span>صباغ الكويت</span>
          </nav>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,.15)", borderRadius: 24, padding: "6px 18px", fontSize: "0.85rem", fontWeight: 600, marginBottom: 20, color: "#c5cae9" }}>
            ⭐ تقييم 4.9 من 350+ عميل
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,7vw,3.8rem)", fontWeight: 900, margin: "0 0 20px", lineHeight: 1.2 }}>
            صباغ الكويت
          </h1>
          <p style={{ fontSize: "clamp(1rem,2.5vw,1.25rem)", opacity: 0.95, maxWidth: 640, margin: "0 auto 12px", lineHeight: 1.85 }}>
            أفضل <strong>صباغ في الكويت</strong> – خبرة أكثر من 10 سنوات في صباغة المنازل والشقق والفلل
            بجميع مناطق الكويت. دهانات أصلية، ضمان سنة، ومعاينة مجانية.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#90caf9", margin: "0 auto 36px", maxWidth: 480 }}>
            +5000 مشروع منجز · 76 منطقة مخدومة · اتصل الآن للحصول على عرض مجاني
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="tel:+96590998489" style={{ ...ctaW, padding: "14px 32px", fontSize: "1.1rem" }}>📞 اتصل: 90998489</Link>
            <a href="https://wa.me/96590998489" target="_blank" rel="noopener noreferrer" style={{ ...ctaG, padding: "14px 32px", fontSize: "1.1rem" }}>💬 واتساب مباشر</a>
          </div>
        </div>
      </header>

      <main style={{ direction: "rtl" }}>

        {/* ── STATS ── */}
        <section aria-label="إحصائيات صباغ الكويت" style={{ background: "#012e8d", padding: "36px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 8 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "16px 8px" }}>
                <div style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1 }}>{s.number}</div>
                <div style={{ color: "#90caf9", fontSize: "0.85rem", fontWeight: 600, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HERO IMAGE ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px 0" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(1,46,141,.18)" }}>
            <Image src="/gallery/صباغ-الكويت.webp" alt="صباغ الكويت – أفضل صباغ في الكويت" width={960} height={480} priority style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
          </div>
        </section>

        {/* ── INTRO ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "52px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 16 }}>
            صباغ الكويت – الخيار الأول للصباغة الاحترافية
          </h2>
          <p style={{ lineHeight: 2.1, color: "#333", fontSize: "1.05rem", marginBottom: 16 }}>
            منذ أكثر من <strong>10 سنوات</strong>، يُقدّم <strong>صباغ الكويت</strong> خدمات صباغة ودهانات
            احترافية لآلاف العائلات الكويتية. نفخر بكوننا المرجع الأول الذي يبحث عنه الكويتيون حين يريدون{" "}
            <strong>أفضل صباغ في الكويت</strong> — لأننا نجمع بين الخبرة الحقيقية والأسعار التنافسية
            والمواد الأصلية المعتمدة.
          </p>
          <p style={{ lineHeight: 2.1, color: "#333", fontSize: "1.05rem", marginBottom: 16 }}>
            سواء كنت تريد{" "}
            <Link href="/services/apartment-painter-kuwait" style={il}>صباغة شقتك</Link>،{" "}
            <Link href="/services/home-painter-kuwait" style={il}>تجديد منزلك</Link>، أو{" "}
            <Link href="/services/decor-painter-kuwait" style={il}>دهانات ديكورية فاخرة</Link>{" "}
            لفيلا راقية — فريقنا جاهز لخدمتك في أي منطقة، ولدينا فريق متخصص في{" "}
            <Link href="/regions/sabaagh-aljahraa" style={il}>صباغ الجهراء</Link>{" "}
            وبقية المحافظات الكويتية السبع.
          </p>
          <p style={{ lineHeight: 2.1, color: "#333", fontSize: "1.05rem" }}>
            اطلع على{" "}
            <Link href="/asaar-sabagh-kuwait" style={il}>أسعار الصباغة في الكويت 2026</Link>{" "}
            للحصول على تقدير أولي، ثم اتصل بنا على{" "}
            <Link href="tel:+96590998489" style={il}>90998489</Link>{" "}
            للمعاينة المجانية.
          </p>
        </section>

        {/* ── SERVICES ── */}
        <section aria-label="خدمات صباغ الكويت" style={{ background: "#f4f7fe", padding: "56px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>خدمات صباغ الكويت الشاملة</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>كل ما تحتاجه من خدمات الصباغة والدهانات تحت سقف واحد</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))", gap: 16 }}>
              {services.map((s) => (
                <Link key={s.href + s.title} href={s.href} style={{ display: "flex", flexDirection: "column", gap: 10, background: "#fff", borderRadius: 12, padding: "22px 18px", textDecoration: "none", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)" }}>
                  <span style={{ fontSize: "1.9rem" }}>{s.icon}</span>
                  <span style={{ color: "#012e8d", fontWeight: 700, fontSize: "0.95rem" }}>{s.title}</span>
                  <span style={{ color: "#666", fontSize: "0.83rem", lineHeight: 1.7 }}>{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>كيف نعمل؟ خطوات الخدمة</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 40, lineHeight: 1.8 }}>5 خطوات بسيطة من الاتصال حتى التسليم بالضمان</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {process.map((p, i) => (
              <div key={p.step} style={{ display: "flex", gap: 20, alignItems: "flex-start", paddingBottom: i < process.length - 1 ? 32 : 0, position: "relative" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#012e8d", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", flexShrink: 0 }}>{p.step}</div>
                  {i < process.length - 1 && <div style={{ width: 2, flex: 1, background: "#c7d9f8", minHeight: 32, margin: "4px 0" }} />}
                </div>
                <div style={{ paddingBottom: 8 }}>
                  <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "10px 0 6px" }}>{p.title}</h3>
                  <p style={{ color: "#555", lineHeight: 1.85, margin: 0, fontSize: "0.93rem" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MID CTA ── */}
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px 56px" }}>
          <CtaBanner compact />
        </div>

        {/* ── GALLERY ── */}
        <section aria-label="معرض أعمال صباغ الكويت" style={{ background: "#f4f7fe", padding: "56px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>معرض أعمالنا</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>أعمال حقيقية نفّذناها في مناطق مختلفة من الكويت</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 16 }}>
              {galleryImages.map((img) => (
                <div key={img.src} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 16px rgba(1,46,141,.12)" }}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width:600px) 100vw,(max-width:900px) 50vw,33vw" style={{ objectFit: "cover" }} loading="lazy" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(1,46,141,.65) 0%,transparent 55%)", display: "flex", alignItems: "flex-end", padding: "12px 14px" }}>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.82rem" }}>{img.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PAINT BRANDS ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>الدهانات التي نستخدمها</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>أصلية 100% – مع فاتورة رسمية وضمان الأصالة</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }}>
            {paintBrands.map((b) => (
              <div key={b.name} style={{ background: "#fff", borderRadius: 12, padding: "22px 18px", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)", position: "relative" }}>
                <span style={{ position: "absolute", top: 14, left: 14, background: b.tag === "فاخر" ? "#012e8d" : b.tag === "مميز" ? "#1565c0" : "#43a047", color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>{b.tag}</span>
                <div style={{ fontSize: "1.1rem", marginBottom: 4 }}>{b.origin}</div>
                <h3 style={{ color: "#012e8d", fontWeight: 800, fontSize: "1.05rem", margin: "0 0 8px" }}>{b.name}</h3>
                <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section aria-label="آراء عملاء صباغ الكويت" style={{ background: "#f4f7fe", padding: "56px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>ماذا يقول عملاؤنا؟</h2>
            <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>+350 عميل راضٍ في مناطق مختلفة من الكويت</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
              {reviews.map((r) => (
                <div key={r.name} style={{ background: "#fff", borderRadius: 12, padding: "24px 20px", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)" }}>
                  <div style={{ color: "#f59e0b", fontSize: "1.1rem", marginBottom: 10 }}>{"★".repeat(r.rating)}</div>
                  <p style={{ color: "#333", lineHeight: 1.85, margin: "0 0 16px", fontSize: "0.93rem" }}>"{r.text}"</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "#012e8d", fontSize: "0.9rem" }}>{r.name}</span>
                    <span style={{ fontSize: "0.8rem", color: "#888", background: "#f4f7fe", padding: "3px 10px", borderRadius: 20 }}>{r.region}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO TEXT ── */}
        <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.9rem)", fontWeight: 800, color: "#012e8d", marginBottom: 16 }}>
            دليل اختيار أفضل صباغ في الكويت 2026
          </h2>
          <p style={{ lineHeight: 2.1, color: "#333", marginBottom: 16 }}>
            يبحث ملايين سكان الكويت كل عام عن صبّاغ محترف وموثوق. لكن كيف تفرّق بين{" "}
            <strong>أفضل صباغ في الكويت</strong> وبين من يدّعي ذلك؟ الجواب في ثلاثة معايير رئيسية:
            الخبرة الموثّقة، المواد المستخدمة، والضمان المكتوب.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginBottom: 32 }}>
            {[
              { t: "الخبرة الموثّقة", b: "اطلب أعمالاً سابقة وصوراً حقيقية من نفس نوع مشروعك. الصباغ الخبير لديه مئات الأعمال التي يُفاخر بها." },
              { t: "المواد المستخدمة", b: "تأكد من اسم ماركة الدهان وطالب بفاتورة الشراء. الفارق بين دهان أصلي ومقلد يظهر بعد 6 أشهر فقط." },
              { t: "الضمان المكتوب", b: "أي صباغ لا يقدم ضماناً مكتوباً — تجنّبه. الضمان هو المقياس الحقيقي لثقة الصباغ بجودة عمله." },
            ].map((item) => (
              <div key={item.t} style={{ borderRight: "4px solid #1565c0", padding: "16px 20px", background: "#f4f7fe", borderRadius: "0 10px 10px 0" }}>
                <h3 style={{ color: "#012e8d", fontWeight: 700, marginBottom: 8, fontSize: "1rem" }}>{item.t}</h3>
                <p style={{ color: "#555", lineHeight: 1.85, margin: 0, fontSize: "0.9rem" }}>{item.b}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "clamp(1.3rem,3vw,1.9rem)", fontWeight: 800, color: "#012e8d", margin: "40px 0 16px" }}>
            لماذا صباغ الكويت هو الخيار الصحيح؟
          </h2>
          <p style={{ lineHeight: 2.1, color: "#333", marginBottom: 16 }}>
            في سوق مكتظّ بالمنافسين، نتميّز بثلاثة أشياء لا يجمعها كثيرون معاً:
            خبرة عملية تمتد لأكثر من عشر سنوات في السوق الكويتي تحديداً، فريق محترف يفهم متطلبات
            المناخ الكويتي القاسي وأفضل المواد المقاومة له، وسياسة شفافية كاملة في التسعير لا مفاجآت
            في الفاتورة النهائية.
          </p>
          <p style={{ lineHeight: 2.1, color: "#333" }}>
            لمعرفة المزيد عن{" "}
            <Link href="/sabagh-rakhis" style={il}>الصباغ الرخيص في الكويت</Link>،
            أو لمقارنة{" "}
            <Link href="/asaar-sabagh-kuwait" style={il}>أسعار الصباغة بالتفصيل</Link>،
            تفضل بزيارة صفحاتنا المتخصصة.
          </p>
        </section>

        {/* ── REGIONS ── */}
        <section aria-label="مناطق خدمة صباغ الكويت" style={{ background: "#f4f7fe", padding: "56px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8 }}>
              صباغ الكويت في منطقتك
            </h2>
            <p style={{ color: "#666", marginBottom: 28, lineHeight: 1.8 }}>
              نغطي أكثر من 76 منطقة في جميع محافظات الكويت. اختر منطقتك:
            </p>
            <nav aria-label="مناطق صباغ الكويت" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {topRegions.map((r) => <Link key={r.href} href={r.href} style={chip}>{r.label}</Link>)}
            </nav>
            <div style={{ marginTop: 20 }}>
              <Link href="/regions" style={{ ...il, fontSize: "0.9rem" }}>عرض جميع المناطق (76 منطقة) ←</Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#012e8d", marginBottom: 8, textAlign: "center" }}>
            أسئلة شائعة عن صباغ الكويت
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: 36, lineHeight: 1.8 }}>إجابات دقيقة لأكثر الأسئلة بحثاً عن خدمات الصباغة في الكويت</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 12, padding: "20px 24px", border: "1.5px solid #e3eaf5", boxShadow: "0 2px 8px rgba(1,46,141,.06)" }}>
                <h3 style={{ color: "#012e8d", fontWeight: 700, fontSize: "1rem", margin: "0 0 10px" }}>{faq.q}</h3>
                <p style={{ color: "#555", lineHeight: 1.9, margin: 0, fontSize: "0.94rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED ── */}
        <section style={{ background: "#f4f7fe", padding: "48px 20px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#012e8d", marginBottom: 18 }}>صفحات ذات صلة</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { href: "/sabagh-elkuwait",                        label: "صباغ بالكويت" },
                { href: "/regions/sabaagh-aljahraa",               label: "صباغ الجهراء" },
                { href: "/sabagh-rakhis",                          label: "صباغ رخيص بالكويت" },
                { href: "/asaar-sabagh-kuwait",                    label: "أسعار الصباغة 2026" },
                { href: "/services/kuwait-paints",                  label: "اصباغ الكويت" },
                { href: "/services/skilled-painter-kuwait",         label: "صباغ شاطر بالكويت" },
                { href: "/services/painting-master-kuwait",         label: "معلم صباغ بالكويت" },
                { href: "/services/apartment-painter-kuwait",       label: "صباغ شقق بالكويت" },
                { href: "/services/home-painter-kuwait",            label: "صباغ منازل بالكويت" },
                { href: "/services/decor-painter-kuwait",           label: "صباغ ديكورات بالكويت" },
                { href: "/services/wallpaper-installation-kuwait",  label: "تركيب ورق جدران بالكويت" },
                { href: "/services",                                label: "جميع الخدمات" },
                { href: "/regions",                                 label: "جميع المناطق" },
                { href: "/blogs",                                   label: "مدونة الصباغة" },
              ].map((l) => <Link key={l.href} href={l.href} style={chip}>{l.label}</Link>)}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px 64px" }}>
          <CtaBanner />
        </div>

      </main>
    </>
  );
}
