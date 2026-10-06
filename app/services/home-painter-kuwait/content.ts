/**
 * Copy for /services/home-painter-kuwait. Single source for the visible page
 * AND its JSON-LD (FAQ, Service) — keep them in sync by only editing here.
 *
 * Owns "صباغ منازل الكويت" (houses and villas). The homepage owns "صباغ الكويت",
 * /services/kuwait-paints owns "صباغة ودهانات الكويت",
 * /services/apartment-painter-kuwait owns "صباغ شقق الكويت" and the region
 * pages own "صباغ {area}" — this page stays on what is specific to houses and
 * villas and links out to those pages instead of repeating them.
 *
 * Every service statement restates something the site already says elsewhere
 * (the previous copy for this slug in data/services-content.ts,
 * app/services/kuwait-paints/content.ts). The previous copy also promised
 * "الفيلا الكاملة في 3 إلى 5 أيام", "يبدأ من 200 دينار", a free visit and a
 * guarantee — none of that is verified, so none of it is repeated here.
 */

export const PAGE_SLUG = "home-painter-kuwait";
export const PAGE_PATH = `/services/${PAGE_SLUG}`;
export const PAGE_LABEL = "صباغ منازل الكويت";

export const META_TITLE = "صباغ منازل الكويت | دار الألوان";
export const META_DESCRIPTION =
  "دار الألوان لخدمات صباغة ودهانات المنازل والفلل في الكويت: تجهيز الجدران ومعالجة التشققات، دهان الغرف والصالات والمجالس والأسقف، ودهان الواجهات.";

/** Real gallery photo used for Open Graph (a villa entrance and majlis). The
 *  previous OG image (links-images/home-painter-kuwait.jpg) is a stock photo
 *  carrying another company's watermark. */
export const OG_IMAGE = encodeURI("/gallery/صباغ.webp");

export interface ServiceBlock {
  title: string;
  body: string;
  links: { href: string; text: string }[];
}

/** H3s under "خدمات صباغة ودهانات المنازل في الكويت" — only work the site already lists. */
export const SERVICES: ServiceBlock[] = [
  {
    title: "دهانات الجدران الداخلية",
    body:
      "دهان البيت من الداخل بالكامل أو لأدوار وغرف محددة، بدهانات مطفية ونصف لامعة تُطبَّق بعدد طبقات كافٍ على سطح مجهز جيداً، مع خيار الخدمة شاملة المواد أو العمالة فقط إذا كانت الدهانات متوفرة لديك.",
    links: [{ href: "/services/paint-kuwait", text: "أنواع الدهانات المستخدمة" }],
  },
  {
    title: "دهانات الغرف والصالات والمجالس",
    body:
      "غرف النوم والصالات والمجالس والممرات والدرج هي أكثر ما يُطلب في البيت. تختار اللون ودرجة اللمعان لكل مساحة، ويمكن تنفيذ جدار مميز بدهان ديكوري في المجلس أو الصالة.",
    links: [{ href: "/services/decor-painter-kuwait", text: "الدهانات الديكورية" }],
  },
  {
    title: "دهانات الأسقف",
    body:
      "دهان أسقف الغرف والصالات وبيت الدرج، بعد معالجة التشققات الشعرية التي تظهر غالباً في الأسقف والزوايا في البيوت القائمة.",
    links: [],
  },
  {
    title: "دهان الأبواب الخشبية",
    body: "تجديد دهان الأبواب والأسطح الخشبية بعد الصنفرة والتأسيس، بتشطيب مطفي أو لامع حسب الطلب.",
    links: [{ href: "/services/wood-door-paint", text: "دهان الأبواب الخشبية" }],
  },
  {
    title: "دهانات الواجهات والأسوار",
    body:
      "دهانات أكريليك لواجهات البيت والأسوار مناسبة لحرارة الكويت والغبار، بعد تنظيف السطح ومعالجة التشققات.",
    links: [],
  },
  {
    title: "تجهيز ومعالجة الجدران",
    body:
      "قبل الدهان نجهز الجدار بالكشط والمعجون والصنفرة، ونعالج التشققات وتقشر الدهان القديم وآثار الرطوبة، خاصة في الحمامات. جودة هذه الخطوة هي ما يحدد شكل التشطيب النهائي.",
    links: [],
  },
];

/** H3s under "ما يختلف في صباغة المنازل والفلل" — the house-specific core of the page. */
export const HOME_POINTS: { title: string; body: string }[] = [
  {
    title: "مساحات أكبر وأكثر من دور",
    body:
      "البيت أو الفيلا يضم عادة أدواراً ودرجاً ومجالس وممرات أكثر من الشقة، لذلك ننفذ العمل على مراحل منظمة حتى تبقى باقي أجزاء البيت قابلة للاستخدام.",
  },
  {
    title: "الداخل والخارج في مشروع واحد",
    body:
      "دهان البيت يشمل غالباً الواجهات والأسوار إلى جانب الدهان الداخلي، ويمكن تنفيذهما ضمن نفس المشروع بدلاً من طلب كل جزء على حدة.",
  },
  {
    title: "بيت قائم أم بيت جديد",
    body:
      "البيوت القائمة تحتاج غالباً معالجة تشققات شعرية في الأسقف والزوايا ورطوبة في الحمامات قبل الدهان، والبيوت المستلمة حديثاً تحتاج معجوناً كاملاً وتأسيساً على الجص الجديد. نحدد ذلك في المعاينة.",
  },
  {
    title: "الدهان والعائلة ساكنة في البيت",
    body:
      "نغطي الأثاث والأرضيات قبل البدء في كل مساحة، ونرتب مراحل العمل بحيث يستمر استخدام البيت، ثم ننظف المكان قبل التسليم.",
  },
];

/** H2 "طريقة تنفيذ صباغة المنزل" — same process the site states on its other pages. */
export const PROCESS: { title: string; body: string }[] = [
  { title: "التواصل وتحديد الخدمة", body: "اتصل بنا أو راسلنا عبر واتساب، وأخبرنا بموقع البيت وعدد الأدوار والأعمال المطلوبة." },
  { title: "معاينة المنزل", body: "نحدد حالة الجدران والأسقف والواجهات، وما تحتاجه من معالجة وعدد طبقات الدهان." },
  { title: "عرض السعر", body: "عرض سعر يوضح تكلفة المواد والعمالة، والاتفاق على موعد التنفيذ قبل بدء العمل." },
  { title: "الحماية وتجهيز الأسطح", body: "تغطية الأثاث والأرضيات، ثم الكشط والمعجون والصنفرة ومعالجة التشققات." },
  { title: "تنفيذ الدهان", body: "التأسيس ثم طبقات الدهان بالتسلسل الصحيح، مساحة بعد مساحة." },
  { title: "المراجعة والتسليم", body: "تنظيف الحواف والمكان والمراجعة النهائية قبل تسليم البيت." },
];

export const WHY_US: string[] = [
  "دهان داخلي وخارجي للبيت ضمن نفس المشروع",
  "معالجة تشققات الجدران والأسقف والدرج قبل الطلاء، لا الاكتفاء بطبقة جديدة",
  "تغطية الأثاث والأرضيات وتسليم البيت نظيفاً",
  "الخدمة شاملة المواد، أو العمالة فقط إذا كانت الدهانات متوفرة لديك",
  "عرض سعر واضح بعد المعاينة وقبل بدء العمل",
];

/** Live /regions/{slug} routes (verified against data/regions.json) — the same
 *  areas this page linked to before. */
export const AREA_SLUGS: string[] = [
  "sabaagh-alsaalimia",
  "hawally-painter",
  "sabaagh-alfarwaniyah",
  "sabaagh-aljahraa",
  "sabaagh-al-ahmadi",
  "sabaagh-khaitan",
  "sabaagh-sabah-alsaalim",
  "sabaagh-alfhahil",
];

/**
 * Residential photos from the site's gallery (public/gallery). Alt text
 * describes the photo only — none is verified as a specific job of ours.
 * The previous carousel (data/port.json) was stock imagery titled with
 * unrelated keywords ("فني سيراميك الكويت", "صباغ رخيص في الكويت", ...).
 */
export const WORK_PHOTOS: { image: string; title: string; alt: string }[] = [
  { image: "gallery/صباغ.webp", title: "مدخل فيلا ومجلس", alt: "مدخل فيلا بدرج دائري ومجلس بجدران بلون كريمي وأرضية رخام" },
  { image: "gallery/صباغ-ممتاز.webp", title: "صالة معيشة مفتوحة", alt: "صالة معيشة مفتوحة بجدران فاتحة ودرج دائري وقوس يطل على المطبخ" },
  { image: "gallery/صباغ-بالكويت.webp", title: "مدخل منزل", alt: "مدخل منزل بجدران بيضاء وباب خشبي ودرج بدرابزين حديدي" },
  { image: "gallery/صباغ-هندي.webp", title: "مدخل منزل وغرفة طعام", alt: "مدخل منزل بجدران بيج يؤدي إلى غرفة طعام ودرج" },
  { image: "gallery/صباغ-القرين.webp", title: "صالة بتجاليد بروفايل", alt: "صالة بجدران بيضاء وتجاليد بروفايل وإضاءة سقف خطية" },
  { image: "gallery/صباغ-حولي.webp", title: "غرفة نوم بجدران بيضاء", alt: "غرفة نوم بجدران بيضاء وأرضية خشبية" },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "هل تقدمون خدمة دهان الفلل؟",
    a: "نعم، ننفذ صباغة ودهانات الفلل والبيوت في الكويت من الداخل والخارج: الغرف والصالات والمجالس والممرات والدرج والأسقف والواجهات والأسوار.",
  },
  {
    q: "كم يستغرق دهان المنزل؟",
    a: "تختلف المدة حسب مساحة البيت وعدد الأدوار وحالة الجدران وما تحتاجه من معالجة قبل الدهان، لذلك نوضحها لك بعد المعاينة وقبل بدء العمل.",
  },
  {
    q: "كم تكلفة دهان منزل كامل في الكويت؟",
    a: "تعتمد التكلفة على مساحة البيت وعدد الأدوار وحالة الجدران ونوع الدهان، وهل يشمل العمل الواجهات الخارجية. نقدم عرض سعر يوضح تكلفة المواد والعمالة بعد المعاينة.",
  },
  {
    q: "ما الذي يشمله تجهيز الجدران؟",
    a: "الكشط وإزالة الدهان المتقشر، المعجون والصنفرة، ومعالجة التشققات وآثار الرطوبة، ثم التأسيس قبل طبقات الدهان. البيوت الجديدة تحتاج عادة معجوناً كاملاً وتأسيساً على الجص الجديد.",
  },
  {
    q: "هل يتم تغطية الأثاث قبل الدهان؟",
    a: "نعم، نغطي الأثاث والأرضيات قبل البدء، ونسلّم البيت نظيفاً بعد الانتهاء.",
  },
  {
    q: "هل يمكن اختيار أكثر من لون؟",
    a: "نعم، يمكنك اختيار لون ودرجة لمعان مختلفة لكل غرفة أو مساحة، وتنفيذ جدار مميز بدهان ديكوري في المجلس أو الصالة.",
  },
  {
    q: "كيف يمكن طلب خدمة صباغة المنزل؟",
    a: "اتصل بنا على 90998489 أو راسلنا عبر واتساب، وأخبرنا بموقع البيت وعدد الأدوار والأعمال المطلوبة لتحديد موعد المعاينة، ثم نقدم لك عرض السعر قبل بدء العمل.",
  },
];
