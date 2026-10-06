/**
 * Copy for /services/apartment-painter-kuwait. Single source for the visible
 * page AND its JSON-LD (FAQ, Service) — keep them in sync by only editing here.
 *
 * Owns "صباغ شقق الكويت". The homepage owns "صباغ الكويت",
 * /services/kuwait-paints owns "صباغة ودهانات الكويت" and
 * /regions/hawally-painter owns "صباغ حولي" — this page stays on what is
 * specific to apartments and links out to those pages instead of repeating them.
 *
 * Every service statement restates something the site already says elsewhere
 * (app/services/kuwait-paints/content.ts, app/regions/hawally-painter/content.ts,
 * data/services-content.ts). The earlier copy for this slug promised durations
 * ("شقة غرفتين في يوم واحد"), starting prices, "سعر جملة", a free visit and a
 * guarantee — none of that is verified, so none of it is repeated here.
 */

export const PAGE_SLUG = "apartment-painter-kuwait";
export const PAGE_PATH = `/services/${PAGE_SLUG}`;
export const PAGE_LABEL = "صباغ شقق الكويت";

export const META_TITLE = "صباغ شقق الكويت | دار الألوان";
export const META_DESCRIPTION =
  "دار الألوان لصباغة ودهانات الشقق في الكويت: دهان الغرف والصالات والمطابخ والحمامات، تجهيز الجدران ومعالجة التشققات قبل الدهان، للشقق السكنية والشقق المجهزة للتأجير.";

/** Real work photo used for Open Graph (a bedroom; not claimed to be an apartment). */
export const OG_IMAGE = encodeURI("/gallery/صباغ-حولي.webp");

export interface ServiceBlock {
  title: string;
  body: string;
  links: { href: string; text: string }[];
}

/** H3s under "خدمات صباغة الشقق في الكويت" — only work the site already lists. */
export const SERVICES: ServiceBlock[] = [
  {
    title: "دهانات الشقق الداخلية",
    body:
      "دهان الشقة من الداخل بالكامل أو لغرف محددة فقط، بدهانات مطفية ونصف لامعة تُطبَّق بعدد طبقات كافٍ على سطح مجهز جيداً، مع خيار الخدمة شاملة المواد أو العمالة فقط إذا كانت الدهانات متوفرة لديك.",
    links: [{ href: "/services/paint-kuwait", text: "أنواع الدهانات المستخدمة" }],
  },
  {
    title: "تجهيز الأسطح قبل الدهان",
    body:
      "قبل الدهان نجهز الجدار بالكشط والمعجون والصنفرة، ونعالج التشققات وتقشر الدهان القديم وآثار الرطوبة. هذه الخطوة هي ما يحدد شكل التشطيب، فالدهان الجديد فوق جدار غير معالج يعيد إظهار العيوب بعد فترة.",
    links: [],
  },
  {
    title: "دهانات الغرف والصالات",
    body:
      "غرف النوم والصالة والممرات هي أكثر ما يُطلب في الشقة. تختار اللون ودرجة اللمعان لكل غرفة، ويمكن تنفيذ جدار مميز بدهان ديكوري في الصالة أو خلف التلفزيون.",
    links: [{ href: "/services/decor-painter-kuwait", text: "الدهانات الديكورية" }],
  },
  {
    title: "دهانات المطابخ والحمامات",
    body:
      "المطبخ والحمام يتعرضان للبخار والرطوبة أكثر من باقي الشقة، لذلك نستخدم فيهما دهانات مقاومة للرطوبة بعد معالجة أي آثار رطوبة أو عفن على الجدار.",
    links: [],
  },
  {
    title: "الأسقف والأبواب واللمسات النهائية",
    body:
      "دهان الأسقف، وتجديد دهان الأبواب الخشبية بعد الصنفرة والتأسيس، ثم تنظيف الحواف والمراجعة النهائية قبل تسليم الشقة.",
    links: [{ href: "/services/wood-door-paint", text: "دهان الأبواب الخشبية" }],
  },
];

/** H3s under "ما يختلف في صباغة الشقق" — the apartment-specific core of the page. */
export const APARTMENT_POINTS: { title: string; body: string }[] = [
  {
    title: "صباغة شقة مسكونة",
    body:
      "يمكن تنفيذ العمل غرفة بغرفة وأنت ساكن في الشقة، مع تغطية الأثاث والأرضيات قبل البدء وتنظيف كل غرفة قبل الانتقال إلى التالية.",
  },
  {
    title: "تجهيز شقة للتأجير",
    body:
      "الشقة بين مستأجر وآخر تحتاج دهاناً يتحمّل الاستخدام والتنظيف المتكرر، ومعالجة آثار الاستخدام السابق من خدوش وثقوب وتشققات قبل الدهان، حتى تُسلَّم نظيفة وجاهزة.",
  },
  {
    title: "أكثر من شقة في نفس العمارة",
    body:
      "لملاك العمارات ومكاتب العقار، يمكن ترتيب تنفيذ متتابع لعدة شقق في نفس العمارة بدلاً من طلب كل شقة على حدة.",
  },
  {
    title: "اختيار الدهان ودرجة اللمعان",
    body:
      "الدهان المطفي يخفي عيوب الجدار ويناسب غرف النوم والصالات، والنصف لامع أسهل في التنظيف ويناسب الممرات وغرف الأطفال، والمقاوم للرطوبة للمطبخ والحمام. نوضح لك المناسب لكل سطح في المعاينة.",
  },
];

/** H2 "طريقة تنفيذ صباغة الشقة" — same process the site states on its other pages. */
export const PROCESS: { title: string; body: string }[] = [
  { title: "التواصل وتحديد الخدمة", body: "اتصل بنا أو راسلنا عبر واتساب، وأخبرنا بموقع الشقة وعدد الغرف والأعمال المطلوبة." },
  { title: "معاينة الشقة", body: "نحدد حالة الجدران وما تحتاجه من معالجة وعدد طبقات الدهان." },
  { title: "عرض السعر", body: "عرض سعر يوضح تكلفة المواد والعمالة، والاتفاق على موعد التنفيذ قبل بدء العمل." },
  { title: "الحماية وتجهيز الأسطح", body: "تغطية الأثاث والأرضيات، ثم الكشط والمعجون والصنفرة ومعالجة التشققات." },
  { title: "تنفيذ الدهان", body: "التأسيس ثم طبقات الدهان بالتسلسل الصحيح لكل غرفة." },
  { title: "المراجعة والتسليم", body: "تنظيف الحواف والمكان والمراجعة النهائية قبل تسليم الشقة." },
];

export const WHY_US: string[] = [
  "تجهيز الجدران ومعالجة التشققات والرطوبة قبل الدهان، لا الاكتفاء بطبقة جديدة",
  "نوع الدهان حسب استخدام كل غرفة: مطفي، نصف لامع، أو مقاوم للرطوبة",
  "تغطية الأثاث والأرضيات وتسليم الشقة نظيفة",
  "الخدمة شاملة المواد، أو العمالة فقط إذا كانت الدهانات متوفرة لديك",
  "عرض سعر واضح بعد المعاينة وقبل بدء العمل",
];

/** Live /regions/{slug} routes (verified against data/regions.json). */
export const AREA_SLUGS: string[] = [
  "hawally-painter",
  "sabaagh-alsaalimia",
  "sabaagh-khaitan",
  "sabaagh-alfarwaniyah",
  "sabaagh-almahboula",
  "sabaagh-almanqaf",
  "sabaagh-aljahraa",
];

/**
 * Real photos from the site's gallery (public/gallery). Alt text describes the
 * photo only — none is verified as an apartment job, so none claims to be.
 * The previous carousel (data/port.json) was stock imagery titled with
 * unrelated keywords ("فني سيراميك الكويت", "صباغ رخيص في الكويت", ...).
 */
export const WORK_PHOTOS: { image: string; title: string; alt: string }[] = [
  { image: "gallery/صباغ-حولي.webp", title: "غرفة نوم بجدران بيضاء", alt: "غرفة نوم بجدران بيضاء وأرضية خشبية" },
  { image: "gallery/صباغ-سلوى.webp", title: "غرفة فارغة بجدران بيضاء", alt: "غرفة فارغة بجدران بيضاء وسقف جبس وأرضية خشبية" },
  { image: "gallery/صباغ-جابر-الاحمد.webp", title: "غرفة بسقف جبس وإضاءة مخفية", alt: "غرفة بجدران بيضاء وسقف جبس بإضاءة زرقاء مخفية" },
  { image: "gallery/اصباغ-الكويت.webp", title: "ممر بجدران رمادية فاتحة", alt: "ممر داخلي بجدران رمادية فاتحة وتجاليد بروفايل بيضاء" },
  { image: "gallery/صباغ-شاطر.webp", title: "ممر بجدران بيج", alt: "ممر داخلي بجدران بيج ولوحات معلقة وإضاءة سقف خطية" },
  { image: "gallery/صباغ-رخيص.webp", title: "صالة بجدران بيضاء", alt: "صالة واسعة بجدران بيضاء وأرضية رخام" },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "هل تقدم دار الألوان خدمة صباغة الشقق في الكويت؟",
    a: "نعم، ننفذ صباغة ودهانات الشقق السكنية والشقق المجهزة للتأجير في مختلف مناطق الكويت، للشقة كاملة أو لغرف محددة.",
  },
  {
    q: "ما أنواع الدهانات المناسبة للشقق؟",
    a: "الدهان المطفي لغرف النوم والصالات، والنصف لامع للممرات والأماكن التي تحتاج تنظيفاً متكرراً، والدهانات المقاومة للرطوبة للمطابخ والحمامات. نحدد المناسب لكل سطح بعد المعاينة.",
  },
  {
    q: "هل تشمل الخدمة تجهيز الجدران قبل الدهان؟",
    a: "نعم، نجهز الجدران بالكشط والمعجون والصنفرة، ونعالج التشققات وآثار الرطوبة قبل الدهان.",
  },
  {
    q: "هل تقدمون صباغة جميع غرف الشقة؟",
    a: "نعم، ننفذ دهان غرف النوم والصالة والممرات والمطبخ والحمامات والأسقف، ويمكن أيضاً دهان غرف محددة فقط.",
  },
  {
    q: "هل يمكن صباغة الشقة وأنا ساكن فيها؟",
    a: "نعم، يمكن تنفيذ العمل غرفة بغرفة مع تغطية الأثاث والأرضيات قبل البدء.",
  },
  {
    q: "هل الخدمة شاملة مواد الدهان؟",
    a: "يمكنك اختيار الخدمة شاملة الدهانات، أو خدمة العمالة فقط إذا كانت المواد متوفرة لديك.",
  },
  {
    q: "كيف يمكن طلب خدمة صباغة شقة؟",
    a: "اتصل بنا على 90998489 أو راسلنا عبر واتساب، وأخبرنا بموقع الشقة وعدد الغرف والأعمال المطلوبة لتحديد موعد المعاينة، ثم نقدم لك عرض السعر قبل بدء العمل.",
  },
];
