/**
 * Copy for /regions/sabaagh-hawalli. Single source for the visible page AND its
 * JSON-LD (FAQ, LocalBusiness) — keep them in sync by only editing here.
 *
 * Owns the local keyword "صباغ حولي". The homepage owns "صباغ الكويت" and
 * /services/kuwait-paints owns "صباغة ودهانات الكويت", so this page stays on
 * what is specific to Hawally (building types, streets, request patterns) and
 * links out to those pages for the Kuwait-wide service detail.
 *
 * Every service statement restates something the site already says elsewhere
 * (data/services-content.ts, app/services/kuwait-paints/content.ts). Local
 * context comes from the hand-written Hawally entry in data/regions-content.ts.
 * No prices, durations, guarantee terms, ratings or superlatives: those vary
 * per job and are confirmed after the visit.
 */

export const PAGE_SLUG = "hawally-painter";
export const PAGE_PATH = `/regions/${PAGE_SLUG}`;
export const AREA = "حولي";
export const PAGE_LABEL = "صباغ حولي";

export const META_TITLE = "صباغ حولي | دار الألوان لخدمات الصباغة والدهانات";
export const META_DESCRIPTION =
  "دار الألوان تقدم خدمات الصباغة والدهانات في حولي للشقق والعمارات والمنازل والمحلات: دهانات داخلية وخارجية، تجهيز الجدران ومعالجة التشققات، ومعاينة وعرض سعر قبل التنفيذ.";

/** Short business summary — LocalBusiness `description`. */
export const LD_DESCRIPTION =
  "خدمات الصباغة والدهانات في حولي: صباغة الشقق والعمارات والمنازل، الدهانات الداخلية والخارجية، دهان المحلات والمكاتب، وتجهيز الجدران قبل الدهان.";

export interface ServiceBlock {
  title: string;
  body: string;
  links: { href: string; text: string }[];
}

export const SERVICES: ServiceBlock[] = [
  {
    title: "صباغة الشقق في حولي",
    body:
      "أغلب طلبات حولي تأتي من شقق العمارات، سواء شقة يسكنها أصحابها أو شقة تُجهَّز لمستأجر جديد. ننفذ دهان الغرف والصالة والمطبخ والحمامات والأسقف بدهان يتحمّل الاستخدام والتنظيف المتكرر، مع خيار الخدمة شاملة المواد أو العمالة فقط.",
    links: [{ href: "/services/apartment-painter-kuwait", text: "صباغة الشقق" }],
  },
  {
    title: "صباغة المنازل في حولي",
    body:
      "للبيوت والأدوار في حولي ننفذ دهان المنزل من الداخل بالكامل أو لغرف محددة، مع تغطية الأثاث والأرضيات قبل البدء وتنظيف المكان عند التسليم.",
    links: [{ href: "/services/home-painter-kuwait", text: "صباغة المنازل" }],
  },
  {
    title: "الدهانات الداخلية في حولي",
    body:
      "دهانات مطفية ونصف لامعة للغرف والصالات، ودهانات مقاومة للرطوبة للمطابخ والحمامات. قبل الدهان نجهز السطح بالكشط والمعجون والصنفرة ونعالج التشققات وآثار الرطوبة، لأن جودة التجهيز هي ما يحدد شكل التشطيب النهائي.",
    links: [{ href: "/services/paint-kuwait", text: "أنواع الدهانات المستخدمة" }],
  },
  {
    title: "الدهانات الخارجية في حولي",
    body:
      "دهان الواجهات والأسوار بدهانات خارجية مناسبة لحرارة الكويت والغبار، بعد تنظيف السطح ومعالجة التشققات.",
    links: [],
  },
  {
    title: "دهان المحلات والمكاتب في حولي",
    body:
      "للمحلات والمكاتب على الشوارع التجارية في حولي يمكن تنسيق موعد التنفيذ مسبقاً بما يناسب ساعات عمل المكان وحركة الزبائن.",
    links: [],
  },
  {
    title: "الدهانات الديكورية وورق الجدران",
    body:
      "جدران مميزة بدهانات ديكورية للمجالس والصالات، وتركيب ورق الجدران بعد تسوية الجدار وتأسيسه، مع عرض عينات قبل التنفيذ.",
    links: [
      { href: "/services/decor-painter-kuwait", text: "الدهانات الديكورية" },
      { href: "/services/wallpaper-installation-kuwait", text: "تركيب ورق الجدران" },
    ],
  },
];

/** What is specific about painting jobs in Hawally — the page's local core. */
export const LOCAL_POINTS: { title: string; body: string }[] = [
  {
    title: "شقق العمارات الاستثمارية",
    body:
      "حولي منطقة يغلب عليها طابع العمارات الاستثمارية والشقق المؤجرة، لذلك يتكرر فيها طلب دهان الشقة بين مستأجر وآخر. الشقة هنا تتعرض لاستخدام كثيف، فالأهم أن يكون الدهان الداخلي قابلاً للتنظيف ويتحمّل الاحتكاك، وأن يُنفَّذ العمل بترتيب واضح حتى تعود الشقة جاهزة في أقرب وقت.",
  },
  {
    title: "أكثر من شقة في نفس العمارة",
    body:
      "إذا كنت تملك أو تدير عدة شقق في عمارة واحدة بحولي، يمكن ترتيب جدول تنفيذ متتابع للشقق بدلاً من طلب كل شقة على حدة، فيسهل ذلك تنسيق الدخول للعمارة ومتابعة العمل.",
  },
  {
    title: "المحلات على الشوارع التجارية",
    body:
      "شارع تونس وشارع بيروت ومحيط ميدان حولي من أكثر المناطق التجارية حركة، والمحل فيها لا يحتمل التوقف طويلاً. لذلك نتفق مع صاحب المحل على موعد التنفيذ مسبقاً بما يقلل تعطيل العمل.",
  },
  {
    title: "المباني القديمة",
    body:
      "في المباني الأقدم، كما في أجزاء من النقرة ومحيطها، تظهر التشققات وتقشر الدهان وآثار الرطوبة أكثر. معالجة هذه العيوب قبل الدهان خطوة أساسية، وإلا عاد التشقق للظهور بعد فترة قصيرة من الدهان الجديد.",
  },
];

/** Named parts of Hawally the existing site already lists as served. */
export const NEIGHBOURHOODS: string[] = ["ميدان حولي", "شارع تونس", "شارع بيروت", "النقرة"];

export const WHY_US: string[] = [
  "نخدم مختلف أحياء حولي: الشقق والعمارات والمنازل والمحلات والمكاتب",
  "إمكانية ترتيب تنفيذ متتابع لأكثر من شقة في نفس العمارة",
  "الخدمة شاملة المواد، أو العمالة فقط إذا كانت الدهانات متوفرة لديك",
  "عرض سعر واضح بعد المعاينة وقبل بدء العمل",
  "تجهيز الجدران ومعالجة التشققات والرطوبة قبل الدهان، لا الاكتفاء بطبقة جديدة",
  "تغطية الأثاث والأرضيات وتسليم المكان نظيفاً",
];

export const PROCESS: { title: string; body: string }[] = [
  { title: "تواصل مع دار الألوان", body: "اتصل بنا أو راسلنا عبر واتساب." },
  {
    title: "حدد العقار والخدمة",
    body: "أخبرنا بنوع العقار (شقة، منزل، محل أو مكتب) وموقعه في حولي والأعمال المطلوبة.",
  },
  { title: "المعاينة", body: "نحدد حالة الجدران وما تحتاجه من معالجة وعدد طبقات الدهان." },
  { title: "عرض السعر", body: "عرض سعر يوضح تكلفة المواد والعمالة، والاتفاق على موعد التنفيذ قبل بدء العمل." },
  { title: "التنفيذ والتسليم", body: "التجهيز ثم الدهان بالتسلسل الصحيح، والتنظيف والمراجعة النهائية." },
];

/** Live /regions/{slug} routes near Hawally (verified against data/regions.json). */
export const NEARBY_AREA_SLUGS: string[] = [
  "sabaagh-alsaalimia",
  "sabaagh-aljabriya",
  "sabaagh-alrumaithiya",
  "sabaagh-salwa",
  "sabaagh-bayan",
];

/**
 * Real photos from the site's gallery (public/gallery). Alt text describes the
 * photo only — none is verified as a Hawally job, so none claims to be.
 * Gallery photos that look like stock imagery are deliberately left out.
 */
export const WORK_PHOTOS: { src: string; alt: string }[] = [
  { src: "/gallery/اصباغ-الكويت.webp", alt: "ممر داخلي بجدران رمادية فاتحة وتجاليد بروفايل بيضاء" },
  { src: "/gallery/صباغ-حولي.webp", alt: "غرفة نوم بجدران بيضاء وأرضية خشبية" },
  { src: "/gallery/صباغ-جابر-الاحمد.webp", alt: "غرفة بجدران بيضاء وسقف جبس بإضاءة زرقاء مخفية" },
  { src: "/gallery/صباغ-الكويت.webp", alt: "باب خشبي داكن لمدخل منزل مع جدران خارجية بيضاء" },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "هل تقدم دار الألوان خدمات الصباغة في حولي؟",
    a: "نعم، ننفذ أعمال الصباغة والدهانات في حولي، ومنها المناطق المحيطة بميدان حولي وشارع تونس وشارع بيروت والنقرة، كما نخدم المناطق القريبة مثل السالمية والجابرية والرميثية وسلوى وبيان.",
  },
  {
    q: "ما أنواع العقارات التي يمكن صباغتها في حولي؟",
    a: "الشقق السكنية والشقق المجهزة للتأجير، والعمارات، والمنازل، إضافة إلى المحلات التجارية والمكاتب.",
  },
  {
    q: "هل تقدمون صباغة الشقق والمنازل في حولي؟",
    a: "نعم، ننفذ دهان الشقق والمنازل من الداخل بالكامل أو لغرف محددة، ويمكن ترتيب تنفيذ متتابع لأكثر من شقة في نفس العمارة.",
  },
  {
    q: "ما خدمات الدهانات التي تقدمونها في حولي؟",
    a: "الدهانات الداخلية والخارجية، والدهانات المقاومة للرطوبة للمطابخ والحمامات، والدهانات الديكورية، وتركيب ورق الجدران، مع تجهيز الجدران ومعالجة التشققات قبل الدهان.",
  },
  {
    q: "هل الخدمة في حولي شاملة مواد الدهان؟",
    a: "يمكنك اختيار الخدمة شاملة الدهانات، أو خدمة العمالة فقط إذا كانت المواد متوفرة لديك.",
  },
  {
    q: "كيف يمكن طلب خدمة صباغ في حولي؟",
    a: "اتصل بنا على 90998489 أو راسلنا عبر واتساب، وأخبرنا بنوع العقار وموقعه في حولي والأعمال المطلوبة لتحديد موعد المعاينة، ثم نقدم لك عرض السعر قبل بدء العمل.",
  },
];
