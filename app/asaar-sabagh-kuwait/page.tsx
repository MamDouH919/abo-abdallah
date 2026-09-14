import type { Metadata } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ListAltIcon from "@mui/icons-material/ListAlt"
import Navbar from "@/components/layouts/Navbar"
import Image from "next/image"
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_URL, hreflangAlternates } from "@/lib/seo/site"
import {
  InlineLink,
  HeaderLink,
  HeroHeader,
  HeroTitle,
  HeroSubtitle,
  MainContainer,
  SectionHeading,
  SubHeading,
  ContentImageWrap,
  HeroImageWrap,
  TocNav,
  TocHeading,
  TocList,
  TocEntryLink,
  FactorCard,
  GridTable,
  HeadCell,
  CompareHeadCell,
  StripedRow,
  NowrapCell,
  PriceCell,
  BrandCell,
  QualityCell,
  RegionCard,
  RegionHeader,
  RegionBody,
  RegionList,
  StepList,
  TipList,
  LinksStripBox,
  LinksStripHeading,
  PillLink,
  CtaWrapper,
  CtaTitle,
  CtaSubtitle,
  CtaActions,
  CallButton,
  WhatsappButton,
} from "./Styled"

const siteUrl = "https://sabaghelkuwait.com"
const pageUrl = `${siteUrl}/asaar-sabagh-kuwait`

export const metadata: Metadata = {
  title: "أسعار صباغ الكويت 2026 | تكلفة صباغة الشقق والفلل تبدأ من 80 د.ك",
  description:
    "تعرف على أسعار صباغ الكويت 2026 بالتفصيل: تكلفة صباغة شقة أو فيلا أو مكتب. جدول أسعار واضح، مناطق الخدمة من السالمية إلى الأحمدي، وأشهر 20 سؤالاً شائعاً. اتصل الآن 90998489",
  keywords: [
    "اسعار صباغ الكويت",
    "صباغ الكويت",
    "تكلفة صباغة شقة بالكويت",
    "معلم صباغ بالكويت",
    "صباغ رخيص بالكويت",
    "أسعار دهانات الكويت 2026",
    "صباغة منازل الكويت",
    "سعر متر الصباغة الكويت",
  ],
  alternates: { canonical: pageUrl, languages: hreflangAlternates(pageUrl) },
  openGraph: {
    type: "article",
    locale: "ar_KW",
    url: pageUrl,
    siteName: "دار الألوان | صباغ الكويت",
    title: "أسعار صباغ الكويت 2026 | تكلفة صباغة الشقق والفلل تبدأ من 80 د.ك",
    description:
      "تعرف على أسعار صباغ الكويت 2026: تكلفة صباغة شقة أو فيلا، جدول أسعار واضح، مقارنة أنواع الدهانات، وأشهر 20 سؤالاً شائعاً.",
    images: [{ url: `${siteUrl}/Images/صباغ-الكويت.webp`, width: 1200, height: 630, alt: "أسعار صباغ الكويت 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "أسعار صباغ الكويت 2026",
    description: "دليل شامل لأسعار الصباغة في الكويت 2026 مع جدول أسعار تفصيلي وأسئلة شائعة.",
    images: [`${siteUrl}/Images/صباغ-الكويت.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "كم تكلفة صباغة شقة مكونة من 3 غرف في الكويت؟", acceptedAnswer: { "@type": "Answer", text: "تتراوح تكلفة صباغة شقة متوسطة من ثلاث غرف في الكويت بين 150 و250 دينار كويتي بدهانات متوسطة الجودة. الدهانات الفاخرة قد ترفع التكلفة بنسبة تصل إلى 30%." } },
    { "@type": "Question", name: "هل يختلف سعر صباغ الكويت بين المناطق؟", acceptedAnswer: { "@type": "Answer", text: "نعم، قد يكون هناك فارق بسيط بين المناطق بسبب بُعد المسافة، لكن الفارق لا يتجاوز 10-15% عموماً. المؤثر الأكبر هو حجم المشروع ونوع الدهانات." } },
    { "@type": "Question", name: "هل يشمل السعر المواد أم العمالة فقط؟", acceptedAnswer: { "@type": "Answer", text: "هذا يختلف من صباغ لآخر. بعضهم يقدم سعراً شاملاً للمواد والعمالة، وبعضهم يفصل السعرين. يجب توضيح ذلك قبل الاتفاق." } },
    { "@type": "Question", name: "كم تستغرق صباغة شقة كاملة؟", acceptedAnswer: { "@type": "Answer", text: "شقة متوسطة الحجم من 3 غرف تستغرق من يومين إلى ثلاثة أيام، تشمل التحضير والطلاء بطبقتين وفترة الجفاف بين الطبقات." } },
    { "@type": "Question", name: "هل يمكن صباغة المنزل دون إخلائه من الأثاث؟", acceptedAnswer: { "@type": "Answer", text: "يمكن ذلك جزئياً بتغطية الأثاث بأغطية واقية، لكن يُفضَّل إخلاء الغرف لضمان أفضل نتيجة وتجنب أي أضرار." } },
    { "@type": "Question", name: "ما الفرق بين سعر صباغة الداخل والخارج؟", acceptedAnswer: { "@type": "Answer", text: "صباغة الواجهات الخارجية أعلى سعراً بنسبة 20-30% لنفس المساحة، لأنها تتطلب دهانات خارجية متخصصة وقد تحتاج سقالات." } },
    { "@type": "Question", name: "هل يوجد صباغ رخيص بالكويت يقدم جودة مقبولة؟", acceptedAnswer: { "@type": "Answer", text: "نعم، يمكن إيجاد معلم صباغ بسعر مناسب بمقارنة العروض والتحقق من أعماله السابقة وأنواع الدهانات المستخدمة." } },
    { "@type": "Question", name: "كم تكلفة تركيب ورق الجدران في الكويت 2026؟", acceptedAnswer: { "@type": "Answer", text: "يتراوح سعر تركيب ورق الجدران بين 3 و8 دنانير للمتر المربع عمالةً، بغض النظر عن سعر لفائف ورق الجدران." } },
    { "@type": "Question", name: "هل يجب دفع مبلغ مقدم للصباغ؟", acceptedAnswer: { "@type": "Answer", text: "يُقبل دفع 20-30% عربوناً عند الاتفاق لشراء المواد. تجنب دفع كامل المبلغ مقدماً وادفع الباقي بعد انتهاء العمل." } },
    { "@type": "Question", name: "هل يقدم صباغ الكويت ضماناً على العمل؟", acceptedAnswer: { "@type": "Answer", text: "الصباغ المحترف يقدم ضماناً يتراوح بين 6 أشهر وسنة على عمله، يغطي أي تقشر أو تشقق ناتج عن رداءة التطبيق." } },
    { "@type": "Question", name: "كم سعر متر الصباغة في الكويت؟", acceptedAnswer: { "@type": "Answer", text: "يتراوح سعر متر الصباغة في الكويت بين 1.5 و3.5 دينار للمتر المربع للصباغة العادية. الدهانات الفاخرة أو التأثيرات الديكورية قد تصل إلى 8-15 دينار للمتر." } },
    { "@type": "Question", name: "ما أفضل دهان ضد الرطوبة في الكويت؟", acceptedAnswer: { "@type": "Answer", text: "أفضل الدهانات المقاومة للرطوبة في الكويت هي Jotun Jotashield وDulux Weathershield. تُستخدم للواجهات الخارجية والحمامات والمطابخ." } },
    { "@type": "Question", name: "هل دهانات Jotun أفضل من دهانات الجزيرة؟", acceptedAnswer: { "@type": "Answer", text: "كلاهما ممتاز. Jotun منتج نرويجي بتاريخ طويل في السوق الخليجي، والجزيرة سعودي بجودة عالية وسعر تنافسي. الاختيار يعتمد على الميزانية والتطبيق المطلوب." } },
    { "@type": "Question", name: "كم يعيش الدهان قبل إعادة الصباغة؟", acceptedAnswer: { "@type": "Answer", text: "الدهانات الخارجية الجيدة تدوم من 5 إلى 8 سنوات في المناخ الكويتي. الداخلية تدوم من 7 إلى 10 سنوات إذا استُخدمت مواد عالية الجودة ونُفِّذت بشكل احترافي." } },
    { "@type": "Question", name: "هل السعر يشمل المعجون والبريمر؟", acceptedAnswer: { "@type": "Answer", text: "في الغالب لا. كثير من الصباغين يحسبون المعجون (الفيلر) والبريمر بشكل منفصل. احرص على السؤال صراحةً عند طلب عرض السعر." } },
    { "@type": "Question", name: "ما الفرق بين الدهان المطفي والساتان؟", acceptedAnswer: { "@type": "Answer", text: "الدهان المطفي (Matt) لا يعكس الضوء وهو مناسب للغرف والصالات. الساتان (Satin) نصف لامع ومقاوم للتنظيف وأكثر عملية في المطابخ والممرات وغرف الأطفال." } },
    { "@type": "Question", name: "هل يمكن تغيير لون الجدران دون إزالة الدهان القديم؟", acceptedAnswer: { "@type": "Answer", text: "نعم، إذا كان الدهان القديم في حالة جيدة. يقوم الصباغ بتنظيف السطح وتطبيق طبقة أساس ثم الدهان الجديد. إذا كان التغيير من غامق لفاتح، ستحتاج طبقتين أو أكثر." } },
    { "@type": "Question", name: "كم تكلفة صباغة سقف المنزل؟", acceptedAnswer: { "@type": "Answer", text: "تكلفة صباغة السقف تتراوح بين 1.5 و2.5 دينار للمتر المربع للسقف العادي. الأسقف المرتفعة أو ذات الجبس الزخرفي قد تكلف أكثر." } },
    { "@type": "Question", name: "هل يمكن صباغة الحمام والمطبخ؟", acceptedAnswer: { "@type": "Answer", text: "نعم، لكن يجب استخدام دهانات مقاومة للرطوبة والبخار مثل دهانات الإيبوكسي أو الاكريليك المضادة للفطريات. معلم الصباغ الجيد سيقترح عليك النوع المناسب." } },
    { "@type": "Question", name: "ما أفضل وقت للصباغة في الكويت؟", acceptedAnswer: { "@type": "Answer", text: "أفضل وقت للصباغة الخارجية في الكويت هو الفترة من أكتوبر حتى مارس، حيث تنخفض درجات الحرارة وتتحسن ظروف الجفاف. الصباغة الداخلية يمكن تنفيذها طوال العام مع تشغيل التكييف." } },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "أسعار صباغ الكويت 2026",
  description: "تعرف على أسعار صباغ الكويت 2026 بالتفصيل: تكلفة صباغة شقة أو فيلا أو مكتب. جدول أسعار واضح، مناطق الخدمة من السالمية إلى الأحمدي، وأشهر 20 أسئلة شائعة.",
  author: { "@type": "Organization", name: "دار الألوان", url: siteUrl },
  publisher: { "@type": "Organization", name: "دار الألوان", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/logo.webp` } },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  url: pageUrl,
  inLanguage: "ar",
  image: `${siteUrl}/Images/صباغ-الكويت.webp`,
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "أسعار صباغ الكويت 2026", item: pageUrl },
  ],
}

const priceRows = [
  { service: "صباغة شقة صغيرة (1-2 غرفة)", area: "حتى 100 م²", price: "80 – 150 دينار" },
  { service: "صباغة شقة متوسطة (3 غرف)", area: "100 – 150 م²", price: "150 – 250 دينار" },
  { service: "صباغة شقة كبيرة (4+ غرف)", area: "150 – 200 م²", price: "250 – 400 دينار" },
  { service: "صباغة فيلا صغيرة (داخلي فقط)", area: "200 – 300 م²", price: "300 – 550 دينار" },
  { service: "صباغة فيلا متوسطة (داخلي + خارجي)", area: "300 – 500 م²", price: "600 – 1200 دينار" },
  { service: "صباغة فيلا كبيرة أو قصر", area: "أكثر من 500 م²", price: "1200 دينار فما فوق" },
  { service: "صباغة واجهة خارجية فقط", area: "حسب المساحة", price: "200 – 600 دينار" },
  { service: "صباغة مكتب أو محل تجاري", area: "حتى 100 م²", price: "100 – 200 دينار" },
  { service: "تركيب ورق جدران", area: "لكل متر مربع", price: "3 – 8 دينار/م²" },
  { service: "دهانات ديكورية / تأثيرات خاصة", area: "لكل متر مربع", price: "5 – 15 دينار/م²" },
]

const paintComparison = [
  { brand: "جوتن (Jotun)", origin: "نرويجي", price: "مرتفع", quality: "ممتاز ★★★★★", durability: "8-10 سنوات", best: "واجهات خارجية وفلل فاخرة" },
  { brand: "الجزيرة", origin: "سعودي", price: "متوسط-مرتفع", quality: "ممتاز ★★★★★", durability: "7-9 سنوات", best: "الاستخدام العام داخلي وخارجي" },
  { brand: "ناشونال (National)", origin: "كويتي", price: "متوسط", quality: "جيد جداً ★★★★", durability: "5-7 سنوات", best: "الشقق والمكاتب" },
  { brand: "سايبس (SIPES)", origin: "كويتي", price: "اقتصادي", quality: "جيد ★★★", durability: "3-5 سنوات", best: "المشاريع الاقتصادية" },
  { brand: "دولوكس (Dulux)", origin: "بريطاني", price: "مرتفع", quality: "ممتاز ★★★★★", durability: "8-10 سنوات", best: "الدهانات الداخلية الفاخرة" },
]

const faqs = [
  { q: "١. كم تكلفة صباغة شقة مكونة من 3 غرف في الكويت؟", a: "تتراوح تكلفة صباغة شقة متوسطة من ثلاث غرف في الكويت عادةً بين 150 و250 دينار كويتي بدهانات متوسطة الجودة. إذا اخترت دهانات فاخرة من ماركات مثل Jotun أو Dulux، قد ترتفع التكلفة بنسبة تصل إلى 30%." },
  { q: "٢. هل يختلف سعر صباغ الكويت بين المناطق؟", a: "نعم، قد يكون هناك فارق بسيط بين المناطق بسبب بُعد المسافة أو تكلفة التنقل، لكن الفارق عموماً لا يتجاوز 10-15%. المؤثر الأكبر هو حجم المشروع ونوع الدهانات، وليس المنطقة الجغرافية." },
  { q: "٣. هل يشمل السعر المواد أم العمالة فقط؟", a: "هذا يختلف من صباغ لآخر. بعض الصباغين يقدمون سعراً شاملاً للمواد والعمالة، وبعضهم يفصل السعرين. احرص دائماً على توضيح ذلك قبل الاتفاق لتجنب أي التباس في الفاتورة النهائية." },
  { q: "٤. كم تستغرق صباغة شقة كاملة؟", a: "شقة متوسطة الحجم من 3 غرف تستغرق صباغتها الاحترافية من يومين إلى ثلاثة أيام، تشمل التحضير والطلاء بطبقتين وفترة الجفاف بين الطبقات. الفلل الكبيرة قد تحتاج أسبوعاً أو أكثر." },
  { q: "٥. هل يمكن صباغة المنزل دون إخلائه من الأثاث؟", a: "يمكن ذلك جزئياً حيث يغطي الصباغ الأثاث بأغطية واقية. لكن لضمان أفضل نتيجة وتجنب أي أضرار، يُفضَّل إخلاء الغرف المراد صباغتها أو تجميع الأثاث في مكان واحد." },
  { q: "٦. ما الفرق بين سعر صباغة الداخل والخارج؟", a: "صباغة الواجهات الخارجية عادةً أعلى سعراً بنسبة 20-30% مقارنةً بالداخل لنفس المساحة، لأنها تتطلب دهانات خارجية متخصصة مقاومة للعوامل الجوية، إضافةً إلى تكلفة السقالات إن لزمت." },
  { q: "٧. هل يوجد صباغ رخيص بالكويت يقدم جودة مقبولة؟", a: "نعم، يمكن إيجاد معلم صباغ بالكويت بسعر مناسب دون التضحية بالجودة. المفتاح هو مقارنة عدة عروض، والتحقق من أعمال الصباغ السابقة، والتأكد من نوع الدهانات المستخدمة." },
  { q: "٨. كم تكلفة تركيب ورق الجدران في الكويت 2026؟", a: "يتراوح سعر تركيب ورق الجدران بين 3 و8 دنانير للمتر المربع عمالةً فقط. لفائف ورق الجدران ذاتها تبدأ من 8 دنانير للفافة وقد تصل إلى 30 ديناراً وأكثر للماركات الفاخرة." },
  { q: "٩. هل يجب دفع مبلغ مقدم للصباغ؟", a: "من المقبول دفع 20-30% من المبلغ الإجمالي كعربون عند الاتفاق لشراء المواد اللازمة. تجنب دفع كامل المبلغ مقدماً، وادفع الباقي بعد انتهاء العمل ورضاك التام عن النتيجة." },
  { q: "١٠. هل يقدم صباغ الكويت ضماناً على العمل؟", a: "الصباغ المحترف يقدم ضماناً يتراوح بين 6 أشهر وسنة على عمله. الضمان يغطي أي تقشر أو تشقق يظهر في الطلاء بسبب رداءة التطبيق. احرص على أخذ هذا الضمان كتابةً مع رقم التواصل." },
  { q: "١١. كم سعر متر الصباغة في الكويت؟", a: "يتراوح سعر متر الصباغة في الكويت بين 1.5 و3.5 دينار للمتر المربع للصباغة العادية شاملة العمالة والمواد. الدهانات الفاخرة أو التأثيرات الديكورية قد تصل إلى 8-15 دينار للمتر." },
  { q: "١٢. ما أفضل دهان ضد الرطوبة في الكويت؟", a: "أفضل الدهانات المقاومة للرطوبة في الكويت هي Jotun Jotashield وDulux Weathershield للخارج، وJotun Majestic وDulux Vinyl Soft Sheen للداخل. تُستخدم كذلك للحمامات والمطابخ." },
  { q: "١٣. هل دهانات Jotun أفضل من دهانات الجزيرة؟", a: "كلاهما ممتاز ومناسب للمناخ الكويتي. Jotun منتج نرويجي بتاريخ طويل في السوق الخليجي وأسعاره أعلى قليلاً. دهانات الجزيرة سعودية الصنع بجودة عالية وسعر تنافسي. الاختيار يعتمد على الميزانية والتطبيق المطلوب." },
  { q: "١٤. كم يعيش الدهان قبل إعادة الصباغة؟", a: "الدهانات الخارجية الجيدة تدوم من 5 إلى 8 سنوات في المناخ الكويتي القاسي. الدهانات الداخلية تدوم من 7 إلى 10 سنوات إذا استُخدمت مواد عالية الجودة ونُفِّذت بشكل احترافي مع تهوية جيدة." },
  { q: "١٥. هل السعر يشمل المعجون والبريمر؟", a: "في الغالب لا. كثير من الصباغين يحسبون المعجون (الفيلر) والبريمر بشكل منفصل عن سعر الصباغة. احرص دائماً على السؤال صراحةً عند طلب عرض السعر لتجنب المفاجآت في الفاتورة النهائية." },
  { q: "١٦. ما الفرق بين الدهان المطفي والساتان؟", a: "الدهان المطفي (Matt) لا يعكس الضوء وهو مناسب للغرف والصالات ويخفي عيوب الجدران. الساتان (Satin) نصف لامع ومقاوم للتنظيف وأكثر عملية في المطابخ والممرات وغرف الأطفال." },
  { q: "١٧. هل يمكن تغيير لون الجدران دون إزالة الدهان القديم؟", a: "نعم، إذا كان الدهان القديم في حالة جيدة بدون تقشر أو تشققات. يقوم الصباغ بتنظيف السطح وتطبيق طبقة أساس ثم الدهان الجديد. التغيير من لون غامق إلى فاتح يستلزم طبقتين أو أكثر." },
  { q: "١٨. كم تكلفة صباغة سقف المنزل؟", a: "تكلفة صباغة السقف تتراوح بين 1.5 و2.5 دينار للمتر المربع للسقف العادي شاملة العمالة والمواد. الأسقف المرتفعة التي تحتاج سقالات، أو ذات الجبس الزخرفي، قد تكلف أكثر بنسبة 30-50%." },
  { q: "١٩. هل يمكن صباغة الحمام والمطبخ؟", a: "نعم، لكن يجب استخدام دهانات مقاومة للرطوبة والبخار مثل دهانات الإيبوكسي أو الاكريليك المضادة للفطريات. الصباغ الجيد سيقترح عليك النوع المناسب ويُطبّق طبقة عزل قبل الدهان." },
  { q: "٢٠. ما أفضل وقت للصباغة في الكويت؟", a: "أفضل وقت للصباغة الخارجية في الكويت هو الفترة من أكتوبر حتى مارس، حيث تنخفض درجات الحرارة إلى مستويات معقولة وتتحسن ظروف الجفاف. الصباغة الداخلية يمكن تنفيذها طوال العام مع تشغيل التكييف." },
]

const tocItems = [
  { id: "factors", label: "العوامل المؤثرة في الأسعار" },
  { id: "price-table", label: "جدول أسعار صباغ الكويت 2026" },
  { id: "by-type", label: "أسعار حسب نوع العقار" },
  { id: "extra-services", label: "الخدمات الإضافية وأسعارها" },
  { id: "paint-comparison", label: "مقارنة أنواع الدهانات" },
  { id: "regional-prices", label: "أسعار صباغ حسب المنطقة" },
  { id: "how-to-calculate", label: "كيف تحسب التكلفة بنفسك؟" },
  { id: "tips", label: "نصائح لتوفير المال" },
  { id: "faq", label: "الأسئلة الشائعة (20 سؤال)" },
]

const pricingFactors = [
  { title: "١. مساحة العقار", body: "كلما زادت المساحة الإجمالية للجدران والأسقف، زادت التكلفة. عادةً ما يحسب صباغ الكويت الأسعار إما بالمتر المربع أو بشكل إجمالي للوحدة السكنية." },
  { title: "٢. نوع الدهان المستخدم", body: "تتفاوت أسعار الدهانات تفاوتاً كبيراً في السوق الكويتي. الدهانات الفاخرة من ماركات Jotun والجزيرة وDulux أعلى سعراً لكنها تدوم أطول وتتحمل المناخ الكويتي القاسي." },
  { title: "٣. حالة الجدران وما تتطلبه من تحضير", body: "إذا كانت الجدران تعاني من تشققات أو تقشر أو بقع رطوبة، فإن إصلاحها يضيف تكلفة إضافية. المعلم الجيد لن يتجاوز هذه الخطوة لأنها أساس جودة العمل النهائي." },
  { title: "٤. عدد الطبقات المطلوبة", body: "الصباغة الاحترافية تتطلب طبقة أساس (بريمر) وطبقتين على الأقل من الدهان. التغيير من لون غامق إلى فاتح قد يستلزم طبقة إضافية، وهذا يرفع التكلفة." },
  { title: "٥. موقع العقار ونوعه", body: "العقارات في الطوابق العليا أو ذات الأسقف المرتفعة تتطلب سقالات وتكلفة إضافية. بعض المناطق البعيدة قد تؤثر طفيفاً في السعر." },
]

const internalLinks = [
  { href: "/regions/sabaagh-alsaalimia", label: "صباغ السالمية" },
  { href: "/regions/sabaagh-hawalli", label: "صباغ حولي" },
  { href: "/regions/sabaagh-aljahraa", label: "صباغ الجهراء" },
  { href: "/regions/sabaagh-alfarwaniyah", label: "صباغ الفروانية" },
  { href: "/regions/sabaagh-al-ahmadi", label: "صباغ الأحمدي" },
  { href: "/regions/sabaagh-aljabriya", label: "صباغ الجابرية" },
  { href: "/regions/sabaagh-bayan", label: "صباغ بيان" },
  { href: "/regions/sabaagh-salwa", label: "صباغ سلوى" },
  { href: "/regions/sabaagh-alrumaithiya", label: "صباغ الرميثية" },
  { href: "/regions/sabaagh-mubarak-al-kabeer", label: "صباغ مبارك الكبير" },
  { href: "/regions/sabaagh-sabah-alsaalim", label: "صباغ صباح السالم" },
  { href: "/regions/sabaagh-alfhahil", label: "صباغ الفحيحيل" },
  { href: "/regions/sabaagh-khaitan", label: "صباغ خيطان" },
  { href: "/regions/sabaagh-alshuwaykh", label: "صباغ الشويخ" },
  { href: "/regions/sabaagh-jaber-alahmad", label: "صباغ جابر الأحمد" },
  { href: "/services/cheap-painter-kuwait", label: "صباغ رخيص بالكويت" },
  { href: "/services/painting-master-kuwait", label: "معلم صباغ بالكويت" },
  { href: "/services/wallpaper-installation-kuwait", label: "تركيب ورق جدران" },
  { href: "/services/apartment-painter-kuwait", label: "صباغ شقق" },
  { href: "/services/decor-painter-kuwait", label: "صباغ ديكورات" },
]

function CtaBanner({ compact = false }: { compact?: boolean }) {
  return (
    <CtaWrapper component="section" compact={compact}>
      <CtaTitle compact={compact}>احصل على عرض سعر مجاني الآن</CtaTitle>
      {!compact && (
        <CtaSubtitle>
          معاينة مجانية وعرض سعر بدون التزام. نخدم السالمية، حولي، الفروانية، الجهراء، الأحمدي وجميع مناطق الكويت.
        </CtaSubtitle>
      )}
      <CtaActions direction="row" spacing={2} justifyContent="center" compact={compact}>
        <CallButton
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<PhoneIcon />}
          href={`tel:${PHONE_E164}`}
          aria-label="اتصل بصباغ الكويت الآن"
        >
          اتصل الآن - {PHONE_DISPLAY}
        </CallButton>
        <WhatsappButton
          variant="outlined"
          size="large"
          startIcon={<WhatsAppIcon />}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا عبر واتساب"
        >
          واتساب مباشر
        </WhatsappButton>
      </CtaActions>
    </CtaWrapper>
  )
}

export default function PricesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navbar />

      {/* ───── Hero ───── */}
      <HeroHeader component="header">
        <Container maxWidth="md">
          <HeroTitle component="h1">أسعار صباغ الكويت 2026</HeroTitle>
          <HeroSubtitle>
            دليلك الشامل لتكاليف الصباغة والدهانات في جميع مناطق الكويت — جدول أسعار واضح، مقارنة الدهانات، أسعار حسب المنطقة، ونصائح عملية
          </HeroSubtitle>
        </Container>
      </HeroHeader>

      <MainContainer maxWidth="md" component="main">

        {/* ───── Hero Image ───── */}
        <HeroImageWrap mb={5}>
          <Image
            src="/Images/صباغ-الكويت.webp"
            alt="اسعار صباغ الكويت 2026 – دليل شامل للتكاليف"
            width={896}
            height={504}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </HeroImageWrap>

        {/* ───── Intro ───── */}
        <Box component="section" mb={5}>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
            إذا كنت تفكر في إعادة طلاء منزلك أو تجديد شقتك خلال عام 2026، فإن أول سؤال يتبادر إلى ذهنك هو:{" "}
            <strong>كم تكلفة الصباغة في الكويت؟</strong> في هذا الدليل الشامل نقدم لك كل ما تحتاجه من معلومات حول{" "}
            <strong>أسعار صباغ الكويت</strong>، بدءاً من{" "}
            <InlineLink href="/services/apartment-painter-kuwait">صباغة الشقق</InlineLink>
            {" "}الصغيرة وحتى الفلل الكبيرة، مع جدول أسعار واضح وشرح لجميع العوامل المؤثرة في التكلفة النهائية.
          </Typography>
          <Typography variant="body1" lineHeight={2} color="text.secondary">
            سواء كنت تبحث عن{" "}
            <InlineLink href="/services/cheap-painter-kuwait">صباغ رخيص بالكويت</InlineLink>
            {" "}لمشروع بسيط، أو عن{" "}
            <InlineLink href="/services/painting-master-kuwait">معلم صباغ بالكويت</InlineLink>
            {" "}محترف لفيلا فاخرة، هذا الدليل سيساعدك على اتخاذ القرار الصحيح دون إهدار ميزانيتك.
          </Typography>
        </Box>

        {/* ───── TOC ───── */}
        <TocNav component="nav" aria-label="جدول المحتويات" mb={6}>
          <TocHeading>
            <ListAltIcon fontSize="small" />
            جدول المحتويات
          </TocHeading>
          <TocList>
            {tocItems.map((item) => (
              <li key={item.id}>
                <TocEntryLink href={`#${item.id}`}>{item.label}</TocEntryLink>
              </li>
            ))}
          </TocList>
        </TocNav>

        {/* ───── Factors ───── */}
        <Box id="factors" component="section" mb={6}>
          <SectionHeading component="h2">العوامل المؤثرة في أسعار الصباغة بالكويت</SectionHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
            قبل الحديث عن الأرقام، من الضروري أن تفهم ما الذي يحدد <strong>تكلفة صباغة شقة بالكويت</strong>. التسعير يعتمد على عدة عوامل رئيسية:
          </Typography>
          {pricingFactors.map((item) => (
            <FactorCard key={item.title}>
              <Typography fontWeight={700} mb={0.5}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.9}>{item.body}</Typography>
            </FactorCard>
          ))}
        </Box>

        {/* ───── Price Table ───── */}
        <Box id="price-table" component="section" mb={5}>
          <SectionHeading component="h2">جدول أسعار صباغ الكويت 2026</SectionHeading>
          <Typography variant="body2" color="text.secondary" mb={2.5} lineHeight={1.9}>
            فيما يلي جدول تقريبي يعكس <strong>اسعار صباغ الكويت</strong> السائدة في عام 2026. الأسعار استرشادية والسعر الدقيق يتحدد بعد معاينة العقار.
          </Typography>
          <TableContainer>
            <GridTable>
              <TableHead>
                <TableRow>
                  <HeadCell>نوع الخدمة</HeadCell>
                  <HeadCell>المساحة / الوحدة</HeadCell>
                  <HeadCell>السعر التقريبي (د.ك)</HeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {priceRows.map((row) => (
                  <StripedRow key={row.service}>
                    <TableCell>{row.service}</TableCell>
                    <NowrapCell>{row.area}</NowrapCell>
                    <PriceCell>{row.price}</PriceCell>
                  </StripedRow>
                ))}
              </TableBody>
            </GridTable>
          </TableContainer>
          <Typography variant="caption" color="text.disabled" display="block" mt={1.5} lineHeight={1.8}>
            * الأسعار تشمل العمالة والمواد الأساسية بدهانات متوسطة الجودة. الدهانات الفاخرة قد ترفع التكلفة بنسبة 20-40%.
          </Typography>
        </Box>

        {/* ───── Mid CTA ───── */}
        <Box mb={6}>
          <CtaBanner compact />
        </Box>

        {/* ───── By property type ───── */}
        <Box id="by-type" component="section" mb={6}>
          <SectionHeading component="h2">تفصيل أسعار الصباغة حسب نوع العقار</SectionHeading>

          <ContentImageWrap mb={4}>
            <Image src="/Images/img3.webp" alt="تكلفة صباغة شقة بالكويت – صباغة احترافية داخلية" width={896} height={420} style={{ width: "100%", height: "auto", display: "block" }} />
          </ContentImageWrap>

          <SubHeading component="h3">تكلفة صباغة الشقق السكنية</SubHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={3}>
            تُعدّ{" "}
            <InlineLink href="/services/apartment-painter-kuwait">صباغة الشقق بالكويت</InlineLink>
            {" "}الأكثر شيوعاً لطلبات الصباغة. <strong>تكلفة صباغة شقة بالكويت</strong> تتراوح عادةً بين 80 و400 دينار حسب المساحة ونوع الدهان. شقة غرفتين تبدأ من 80 ديناراً، بينما شقة 3 غرف تتراوح بين 150 و250 ديناراً. الشقق التي تحتاج إلى إصلاح تشققات أو معالجة رطوبة ستكون تكلفتها أعلى بنسبة 15-25%. ننصح دائماً بطلب معاينة مجانية قبل تحديد الميزانية.
          </Typography>

          <SubHeading component="h3">أسعار صباغة الفلل</SubHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={3}>
            الفلل تتطلب ميزانية أكبر نظراً لمساحاتها الواسعة وتنوع مناطق الطلاء، من الغرف والمجالس حتى الواجهات الخارجية والأسوار. فيلا صغيرة داخلياً تبدأ أسعارها من 300 دينار، بينما تصل فيلا متوسطة بداخلي وخارجي إلى 600-1200 دينار. المعلم الخبير يفصّل عرض السعر بشكل واضح ويحدد تكلفة الداخل منفصلةً عن الخارج.
          </Typography>

          <SubHeading component="h3">صباغة المكاتب والمحلات التجارية</SubHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary">
            يُفضَّل جدولة{" "}
            <InlineLink href="/services/decor-painter-kuwait">صباغة الديكورات التجارية</InlineLink>
            {" "}خارج ساعات الدوام لتجنب تعطل العمل. كثير من الصباغين المحترفين في الكويت يقدمون خدمة الصباغة الليلية بسعر رمزي إضافي لا يتجاوز 20-30% من السعر الأصلي.
          </Typography>
        </Box>

        {/* ───── Extra services ───── */}
        <Box id="extra-services" component="section" mb={6}>
          <SectionHeading component="h2">الخدمات الإضافية وأسعارها التقريبية</SectionHeading>

          <SubHeading component="h3">تركيب ورق الجدران</SubHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={3}>
            خدمة{" "}
            <InlineLink href="/services/wallpaper-installation-kuwait">تركيب ورق الجدران بالكويت</InlineLink>
            {" "}يتراوح سعرها بين 3 و8 دنانير للمتر المربع شاملاً العمالة، بغض النظر عن سعر لفائف ورق الجدران ذاتها التي تبدأ من 8 دنانير وقد تصل إلى 30 ديناراً وأكثر للماركات الفاخرة.
          </Typography>

          <SubHeading component="h3">الدهانات الديكورية والتأثيرات الخاصة</SubHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary">
            التأثيرات الديكورية كالدهان المخملي والدهان ثلاثي الأبعاد والدهانات الفنية تحتاج مهارة خاصة وتكلف بين 5 و15 ديناراً للمتر المربع حسب تعقيد التصميم.
          </Typography>
        </Box>

        {/* ───── Paint Comparison ───── */}
        <Box id="paint-comparison" component="section" mb={6}>
          <SectionHeading component="h2" mb={2}>مقارنة بين أشهر أنواع الدهانات في الكويت</SectionHeading>
          <Typography variant="body2" color="text.secondary" mb={2.5} lineHeight={1.9}>
            اختيار نوع الدهان يؤثر مباشرة في تكلفة المشروع وجودته وعمره الافتراضي. إليك مقارنة شاملة بين أبرز الماركات المتوفرة في السوق الكويتي:
          </Typography>
          <TableContainer>
            <GridTable>
              <TableHead>
                <TableRow>
                  {["الماركة", "المنشأ", "السعر", "الجودة", "العمر الافتراضي", "الأنسب لـ"].map((h) => (
                    <CompareHeadCell key={h}>{h}</CompareHeadCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paintComparison.map((row) => (
                  <StripedRow key={row.brand}>
                    <BrandCell>{row.brand}</BrandCell>
                    <TableCell>{row.origin}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <QualityCell>{row.quality}</QualityCell>
                    <NowrapCell>{row.durability}</NowrapCell>
                    <TableCell>{row.best}</TableCell>
                  </StripedRow>
                ))}
              </TableBody>
            </GridTable>
          </TableContainer>
          <Typography variant="caption" color="text.disabled" display="block" mt={1.5} lineHeight={1.8}>
            * الأسعار تقريبية وتختلف حسب حجم الكمية والموزع. استشر معلم الصباغ لاختيار المنتج الأنسب لمشروعك.
          </Typography>
        </Box>

        {/* ───── Regional Prices ───── */}
        <Box id="regional-prices" component="section" mb={6}>
          <SectionHeading component="h2">أسعار صباغ الكويت حسب المنطقة</SectionHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={4}>
            على الرغم من أن الأسعار متقاربة في جميع مناطق الكويت، إلا أن لكل منطقة طبيعتها العمرانية ومتطلباتها الخاصة التي قد تؤثر في التكلفة الإجمالية. إليك تفصيلاً لأبرز المناطق:
          </Typography>

          {/* Salmiya */}
          <RegionCard mb={5}>
            <RegionHeader>
              <Typography component="h3" fontWeight={700} fontSize="1.15rem">
                أسعار{" "}
                <HeaderLink href="/regions/sabaagh-alsaalimia">صباغ السالمية</HeaderLink>
              </Typography>
            </RegionHeader>
            <RegionBody>
              <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
                تُعدّ السالمية من أكثر المناطق طلباً لخدمات الصباغة في الكويت نظراً لكثافتها السكانية وتنوع عقاراتها بين الشقق والعمارات والمحلات التجارية. قرب المنطقة من الخليج يعني حاجة الواجهات الخارجية إلى دهانات مقاومة للملوحة والرطوبة.
              </Typography>
              <RegionList>
                <li>صباغة شقة 3 غرف: <strong>150 – 260 دينار</strong></li>
                <li>صباغة عمارة (طابق كامل): <strong>350 – 700 دينار</strong></li>
                <li>صباغة محل تجاري: <strong>100 – 220 دينار</strong></li>
              </RegionList>
              <Typography variant="body2" color="text.secondary" lineHeight={1.9} mt={1}>
                للمزيد عن الخدمات في المنطقة، زر صفحة{" "}
                <InlineLink href="/regions/sabaagh-alsaalimia">صباغ السالمية</InlineLink>
                {" "}أو{" "}
                <InlineLink href="/regions/sabaagh-hawalli">صباغ حولي</InlineLink>
                {" "}المجاورة لها.
              </Typography>
            </RegionBody>
          </RegionCard>

          {/* Farwaniya */}
          <RegionCard mb={5}>
            <RegionHeader>
              <Typography component="h3" fontWeight={700} fontSize="1.15rem">
                أسعار{" "}
                <HeaderLink href="/regions/sabaagh-alfarwaniyah">صباغ الفروانية</HeaderLink>
              </Typography>
            </RegionHeader>
            <RegionBody>
              <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
                الفروانية منطقة متنوعة تضم أحياء سكنية وتجارية وصناعية، وهو ما يجعل الطلب على خدمات الصباغة فيها مرتفعاً طوال العام. الشقق والفلل هي الأكثر تنفيذاً، وتتميز المنطقة بوجود صباغين ذوي خبرة واسعة في مختلف أنواع الدهانات.
              </Typography>
              <RegionList>
                <li>صباغة شقة 3 غرف: <strong>140 – 240 دينار</strong></li>
                <li>صباغة فيلا صغيرة: <strong>280 – 500 دينار</strong></li>
                <li>صباغة مستودع أو ورشة: <strong>150 – 400 دينار</strong></li>
              </RegionList>
              <Typography variant="body2" color="text.secondary" lineHeight={1.9} mt={1}>
                تشمل المناطق التابعة للفروانية:{" "}
                <InlineLink href="/regions/sabaagh-khaitan">صباغ خيطان</InlineLink>
                {" "}و{" "}
                <InlineLink href="/regions/sabaagh-alsiddiq">صباغ الصديق</InlineLink>.
              </Typography>
            </RegionBody>
          </RegionCard>

          {/* Jahra */}
          <RegionCard mb={5}>
            <RegionHeader>
              <Typography component="h3" fontWeight={700} fontSize="1.15rem">
                أسعار{" "}
                <HeaderLink href="/regions/sabaagh-aljahraa">صباغ الجهراء</HeaderLink>
              </Typography>
            </RegionHeader>
            <RegionBody>
              <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
                الجهراء منطقة فلل وبيوت تقليدية بامتياز، حيث تسود الفلل الكبيرة والقصور. المناخ في الجهراء أشد حرارةً وغبراً مقارنة بالمناطق الساحلية، مما يعني حاجة الدهانات الخارجية إلى مواد مقاومة للأشعة فوق البنفسجية وصامدة أمام العواصف الرملية. تضم الجهراء أيضاً مناطق{" "}
                <InlineLink href="/regions/sabaagh-saad-alabdullah">سعد العبدالله</InlineLink>
                {" "}و{" "}
                <InlineLink href="/regions/sabaagh-subah-alanasir">صباح الناصر</InlineLink>.
              </Typography>
              <RegionList>
                <li>صباغة فيلا متوسطة داخلي فقط: <strong>300 – 550 دينار</strong></li>
                <li>صباغة فيلا متوسطة داخلي + خارجي: <strong>600 – 1100 دينار</strong></li>
                <li>صباغة واجهة خارجية فقط: <strong>200 – 500 دينار</strong></li>
              </RegionList>
            </RegionBody>
          </RegionCard>

          {/* Ahmadi */}
          <RegionCard mb={5}>
            <RegionHeader>
              <Typography component="h3" fontWeight={700} fontSize="1.15rem">
                أسعار{" "}
                <HeaderLink href="/regions/sabaagh-al-ahmadi">صباغ الأحمدي</HeaderLink>
              </Typography>
            </RegionHeader>
            <RegionBody>
              <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
                محافظة الأحمدي من أكبر محافظات الكويت مساحةً وتضم مدناً متعددة مثل الأحمدي والفحيحيل وصباح الأحمد وجابر العلي. وجود المصافي والمنشآت النفطية في المنطقة يجعل الهواء أكثر تلوثاً في بعض الأحيان، مما يستوجب استخدام دهانات ذات قدرة عالية على تحمل الملوثات. تشمل المنطقة أيضاً{" "}
                <InlineLink href="/regions/sabaagh-alfhahil">صباغ الفحيحيل</InlineLink>
                {" "}و{" "}
                <InlineLink href="/regions/sabaagh-jaber-alahmad">صباغ جابر الأحمد</InlineLink>.
              </Typography>
              <RegionList>
                <li>صباغة شقة في الفحيحيل: <strong>140 – 260 دينار</strong></li>
                <li>صباغة فيلا في صباح الأحمد: <strong>500 – 1200 دينار</strong></li>
                <li>صباغة بيت في الأحمدي القديمة: <strong>250 – 600 دينار</strong></li>
              </RegionList>
            </RegionBody>
          </RegionCard>

          {/* Hawally / Central */}
          <RegionCard mb={3}>
            <RegionHeader>
              <Typography component="h3" fontWeight={700} fontSize="1.15rem">
                أسعار{" "}
                <HeaderLink href="/regions/sabaagh-hawalli">صباغ حولي</HeaderLink>
                {" "}والمناطق الوسطى
              </Typography>
            </RegionHeader>
            <RegionBody>
              <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
                محافظة حولي تضم أعلى كثافة سكانية في الكويت، وتشمل مناطق راقية كالسالمية والجابرية وبيان وسلوى والرميثية. في هذه الأحياء الراقية يكون الطلب على{" "}
                <InlineLink href="/services/home-painter-kuwait">صباغة المنازل</InlineLink>
                {" "}بجودة عالية مرتفعاً دائماً، وكثيراً ما يُفضَّل استخدام دهانات فاخرة. تشمل المنطقة{" "}
                <InlineLink href="/regions/sabaagh-aljabriya">صباغ الجابرية</InlineLink>
                {" "}و{" "}
                <InlineLink href="/regions/sabaagh-bayan">صباغ بيان</InlineLink>
                {" "}و{" "}
                <InlineLink href="/regions/sabaagh-alrumaithiya">صباغ الرميثية</InlineLink>
                {" "}و{" "}
                <InlineLink href="/regions/sabaagh-salwa">صباغ سلوى</InlineLink>.
              </Typography>
              <RegionList>
                <li>صباغة شقة 3 غرف (بيان / سلوى): <strong>170 – 280 دينار</strong></li>
                <li>صباغة فيلا (الجابرية / الرميثية): <strong>500 – 1000 دينار</strong></li>
                <li>صباغة مبارك الكبير والأحياء المجاورة:{" "}
                  <InlineLink href="/regions/sabaagh-mubarak-al-kabeer">صباغ مبارك الكبير</InlineLink>
                </li>
              </RegionList>
            </RegionBody>
          </RegionCard>
        </Box>

        {/* ───── Gallery image ───── */}
        <ContentImageWrap mb={6}>
          <Image src="/Images/img5.webp" alt="صباغ الكويت قبل وبعد – نتائج احترافية بأسعار مناسبة" width={896} height={420} style={{ width: "100%", height: "auto", display: "block" }} />
        </ContentImageWrap>

        {/* ───── How to calculate ───── */}
        <Box id="how-to-calculate" component="section" mb={6}>
          <SectionHeading component="h2" mb={2.5}>كيف تحسب تكلفة صباغة منزلك بنفسك؟</SectionHeading>
          <Typography variant="body1" lineHeight={2} color="text.secondary" mb={2}>
            يمكنك الحصول على تقدير تقريبي قبل الاتصال بأي{" "}
            <InlineLink href="/services/painting-master-kuwait">معلم صباغ بالكويت</InlineLink>
            {" "}من خلال هذه الخطوات:
          </Typography>
          <StepList>
            <li>احسب مساحة الجدران: (محيط الغرفة × ارتفاع السقف) ناقص مساحة الأبواب والنوافذ.</li>
            <li>اضرب المساحة الإجمالية في متوسط سعر المتر المربع (1.5 – 3 دنانير للصباغة العادية).</li>
            <li>أضف نسبة 15-20% للمواد الإضافية (بريمر، فيلر، معالجة التشققات).</li>
            <li>إذا احتجت{" "}
              <InlineLink href="/services/wallpaper-master">تركيب ورق جدران</InlineLink>
              {" "}أحسبه منفصلاً (3-8 دينار/م²).</li>
            <li>هذا الرقم سيكون مرجعاً جيداً لمقارنة العروض التي ستتلقاها.</li>
          </StepList>
        </Box>

        {/* ───── Tips ───── */}
        <Box id="tips" component="section" mb={6}>
          <SectionHeading component="h2" mb={2.5}>نصائح لتوفير المال عند اختيار صباغ</SectionHeading>
          <TipList>
            <li><strong>احصل على ثلاثة عروض على الأقل</strong> قبل اتخاذ القرار، ولا تختر الأرخص تلقائياً.</li>
            <li><strong>اختر الوقت المناسب:</strong> فصل الشتاء (أكتوبر – مارس) عادةً أقل ازدحاماً وقد تجد أسعاراً أفضل.</li>
            <li><strong>اجمع أكثر من خدمة:</strong> التفاوض على باقة داخلي + خارجي معاً يوفر عليك 10-20%.</li>
            <li><strong>لا توفر في المواد:</strong> الدهان الرخيص جداً يعني إعادة الطلاء بعد سنة أو سنتين وهذا يكلفك أكثر على المدى البعيد.</li>
            <li><strong>تحقق من الضمان:</strong> المعلم الواثق من عمله يقدم ضماناً لمدة سنة على الأقل مكتوباً.</li>
            <li><strong>اقرأ مقالاتنا:</strong> في{" "}
              <InlineLink href="/blogs">مدونة صباغ الكويت</InlineLink>
              {" "}نصائح مجانية للاختيار الأمثل.
            </li>
          </TipList>
        </Box>

        {/* ───── FAQ ───── */}
        <Box id="faq" component="section" mb={6}>
          <SectionHeading component="h2">الأسئلة الشائعة حول أسعار صباغ الكويت 2026</SectionHeading>
          <Box>
            {faqs.map((faq) => (
              <Accordion key={faq.q}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography component="h3" fontWeight={700} color="primary.main" fontSize="0.97rem">
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.95}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* ───── Internal links strip ───── */}
        <LinksStripBox component="section" mb={6}>
          <LinksStripHeading>خدماتنا في جميع مناطق الكويت</LinksStripHeading>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {internalLinks.map((link) => (
              <PillLink key={link.href} href={link.href}>{link.label}</PillLink>
            ))}
          </Stack>
        </LinksStripBox>

        {/* ───── Final CTA ───── */}
        <CtaBanner />
      </MainContainer>
    </>
  )
}
