/**
 * Per-area content for /regions/{slug}. Only the ~18 PRIORITY_CONTENT slugs
 * (one hub per governorate, plus the highest-demand areas) are live pages —
 * see data/regions.json and data/redirects.json. The other ~60 BASE-only
 * entries used to render as thin, templated duplicate pages (72-96% text
 * overlap between them); they're kept here only as geo/`nearby` reference
 * data so their /regions/{slug} URLs still 301 to the right governorate hub
 * instead of 404ing. Do not add a live route for a BASE-only slug without
 * also writing real PRIORITY_CONTENT for it.
 *
 * `getRegionContent(slug)` merges BASE + PRIORITY_CONTENT. `other-pages/Regions.tsx`
 * builds the page from the result.
 */

export interface RegionFaq {
  q: string;
  a: string;
}

export interface RegionPriceItem {
  service: string;
  price: string;
  note?: string;
}

export interface RegionContent {
  /** Arabic area name, e.g. "حولي". */
  area: string;
  /** Kept for internal grouping only — never asserted verbatim on the page. */
  governorate: string;
  /** Adjacent area slugs (bare), nearest first. */
  nearby: string[];
  /** Hand-written unique intro paragraphs (priority areas only). */
  intro?: string[];
  /** Named neighbourhoods / blocks within the area (priority areas). */
  neighbourhoods?: string[];
  /** Recognisable local landmarks (priority areas). */
  landmarks?: string[];
  /** One line on the dominant building type in the area. */
  propertyMix?: string;
  /**
   * Approximate public centroid of the area itself (open geographic sources),
   * used only in `areaServed.geo` — never as the business's own address. See
   * the comment on `localBusinessLd` in lib/seo/jsonld.ts.
   */
  geo?: { latitude: number; longitude: number };
  /** Why this specific area needs professional painting — area-grounded reasoning, not generic filler (priority areas). */
  whyUs?: string[];
  /** Practical, area-specific painting advice (climate, property type, timing) (priority areas). */
  localTips?: string[];
  /** The specific jobs most requested in this area, ranked by real demand pattern (priority areas). */
  commonJobs?: string[];
  /** How coverage/reach works inside the area's own blocks plus live neighbouring areas (priority areas). */
  coverage?: string[];
  /** Area-specific FAQ appended to the generic set (priority areas). */
  faq?: RegionFaq[];
  /** Area-specific price list reflecting the dominant property type there (priority areas). */
  priceList?: RegionPriceItem[];
  /** SEO title / description overrides. */
  metaTitle?: string;
  metaDescription?: string;
}

const BASE: Record<string, Pick<RegionContent, "area" | "governorate" | "nearby">> = {
  "sabaagh-asharq": { area: "الشرق", governorate: "العاصمة", nearby: ["sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-alshamiya": { area: "الشامية", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-alqadesiya": { area: "القادسية", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-aldaiya": { area: "الدعية", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-aldasma": { area: "الدسمة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-almansouriya": { area: "المنصورية", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-alnuzha", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-alnuzha": { area: "النزهة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-kaifan", "sabaagh-alfaihaa"] },
  "sabaagh-kaifan": { area: "كيفان", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-alfaihaa"] },
  "sabaagh-alfaihaa": { area: "الفيحاء", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alkhaldiya": { area: "الخالدية", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alrawdah": { area: "الروضة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-aladiliya": { area: "العديلية", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alsurra": { area: "السرة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-qurtoba": { area: "قرطبة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alyarmouk": { area: "اليرموك", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-ghranata": { area: "غرناطة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alandalus": { area: "الأندلس", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-abdullah-al-salim": { area: "ضاحية عبدالله السالم", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-dasman": { area: "دسمان", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-bneid-alqar": { area: "بنيد القار", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alshaab": { area: "الشعب", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alnahda": { area: "النهضة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-aldohah": { area: "الدوحة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alsulaybikhat": { area: "الصليبخات", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-jaber-alahmad": { area: "جابر الأحمد", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alshuwaykh": { area: "الشويخ", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alrai": { area: "الري", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-hawalli": { area: "حولي", governorate: "حولي", nearby: ["sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-alsaalimia": { area: "السالمية", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-alrumaithiya": { area: "الرميثية", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-salwa": { area: "سلوى", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-bayan": { area: "بيان", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-mishref": { area: "مشرف", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-aljabriya": { area: "الجابرية", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-hateen": { area: "حطين", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-alzahraa"] },
  "sabaagh-alzahraa": { area: "الزهراء", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-al-salam": { area: "السلام", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-alsiddiq": { area: "الصديق", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-alshuhadaa": { area: "الشهداء", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-janoub-alsura": { area: "جنوب السرة", governorate: "حولي", nearby: ["sabaagh-hawalli", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-alfarwaniyah": { area: "الفروانية", governorate: "الفروانية", nearby: ["sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfardus", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-khaitan": { area: "خيطان", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfardus", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-alaardiya": { area: "العارضية", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfardus", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-ishbiliya": { area: "إشبيلية", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-alfardus", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-alfardus": { area: "الفردوس", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-subah-alanasir": { area: "صباح الناصر", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfardus", "sabaagh-abdullah-mubarak"] },
  "sabaagh-abdullah-mubarak": { area: "عبدالله المبارك", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfardus", "sabaagh-subah-alanasir"] },
  "sabaagh-alqrean": { area: "القرين", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfardus", "sabaagh-subah-alanasir"] },
  "sabaagh-al-ahmadi": { area: "الأحمدي", governorate: "الأحمدي", nearby: ["sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-alfhahil": { area: "الفحيحيل", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-almanqaf": { area: "المنقف", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-almahboula": { area: "المهبولة", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-abu-halifa": { area: "أبو حليفة", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-alsabahiya": { area: "الصباحية", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alraqa", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-alraqa": { area: "الرقة", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alaqeela", "sabaagh-alfntas"] },
  "sabaagh-alaqeela": { area: "العقيلة", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alfntas"] },
  "sabaagh-alfntas": { area: "الفنطاس", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-almasayel": { area: "المسايل", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-jaber-alali": { area: "جابر العلي", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-fahad-alahmad": { area: "فهد الأحمد", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-al-khiran": { area: "الخيران", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-alwafra": { area: "الوفرة", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-aldhaher": { area: "الظهر", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-al-masila": { area: "المسيلة", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-abu-alhasania": { area: "أبو الحصانية", governorate: "الأحمدي", nearby: ["sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-abu-halifa", "sabaagh-alsabahiya", "sabaagh-alraqa", "sabaagh-alaqeela"] },
  "sabaagh-aljahraa": { area: "الجهراء", governorate: "الجهراء", nearby: ["sabaagh-alsulaibiya", "sabaagh-saad-alabdullah", "sabaagh-alkswor", "sabaagh-alnahda", "sabaagh-gharb-abdullah", "sabaagh-janoub-abdullah", "sabaagh-mantiqa-al-ashira"] },
  "sabaagh-alsulaibiya": { area: "الصليبية", governorate: "الجهراء", nearby: ["sabaagh-aljahraa", "sabaagh-saad-alabdullah", "sabaagh-alkswor", "sabaagh-alnahda", "sabaagh-gharb-abdullah", "sabaagh-janoub-abdullah", "sabaagh-mantiqa-al-ashira"] },
  "sabaagh-saad-alabdullah": { area: "سعد العبدالله", governorate: "الجهراء", nearby: ["sabaagh-aljahraa", "sabaagh-alsulaibiya", "sabaagh-alkswor", "sabaagh-alnahda", "sabaagh-gharb-abdullah", "sabaagh-janoub-abdullah", "sabaagh-mantiqa-al-ashira"] },
  "sabaagh-alkswor": { area: "القصور", governorate: "الجهراء", nearby: ["sabaagh-aljahraa", "sabaagh-alsulaibiya", "sabaagh-saad-alabdullah", "sabaagh-alnahda", "sabaagh-gharb-abdullah", "sabaagh-janoub-abdullah", "sabaagh-mantiqa-al-ashira"] },
  "sabaagh-gharb-abdullah": { area: "غرب عبدالله المبارك", governorate: "الجهراء", nearby: ["sabaagh-aljahraa", "sabaagh-alsulaibiya", "sabaagh-saad-alabdullah", "sabaagh-alkswor", "sabaagh-alnahda", "sabaagh-janoub-abdullah", "sabaagh-mantiqa-al-ashira"] },
  "sabaagh-janoub-abdullah": { area: "جنوب عبدالله المبارك", governorate: "الجهراء", nearby: ["sabaagh-aljahraa", "sabaagh-alsulaibiya", "sabaagh-saad-alabdullah", "sabaagh-alkswor", "sabaagh-alnahda", "sabaagh-gharb-abdullah", "sabaagh-mantiqa-al-ashira"] },
  "sabaagh-mantiqa-al-ashira": { area: "المنطقة العاشرة", governorate: "الجهراء", nearby: ["sabaagh-aljahraa", "sabaagh-alsulaibiya", "sabaagh-saad-alabdullah", "sabaagh-alkswor", "sabaagh-alnahda", "sabaagh-gharb-abdullah", "sabaagh-janoub-abdullah"] },
  "sabaagh-mubarak-al-kabeer": { area: "مبارك الكبير", governorate: "مبارك الكبير", nearby: ["sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-sabah-alsaalim": { area: "صباح السالم", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-aladaan": { area: "العدان", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-alqurawan": { area: "القرين الجنوبي", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-abu-ftaira": { area: "أبو فطيرة", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-subhan": { area: "صبحان", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-mubarak"] },
  "sabaagh-mubarak": { area: "مبارك", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan"] },
  "sabaagh-al-fintas": { area: "الفينطيس", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqrean", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan"] },
};

type PriorityOverride = Partial<Omit<RegionContent, 'area' | 'governorate' | 'nearby'>>;

const PRIORITY_CONTENT: Record<string, PriorityOverride> = {
  "sabaagh-alsaalimia": {
    neighbourhoods: ["شارع سالم المبارك","شارع حمد المبارك","بلوك 10","بلوك 12","منطقة البدع المجاورة"],
    landmarks: ["مجمع سيتي سنتر","مجمع الفنار","شارع الخليج العربي","ساحة السالمية"],
    propertyMix: "شقق سكنية وأبراج ومحلات تجارية بكثافة عالية إلى جانب فلل قديمة في البلوكات الداخلية",
    geo: { latitude: 29.3333, longitude: 48.0833 },
    intro: ["تُعد السالمية من أكثر مناطق محافظة حولي كثافة سكانية وحركة تجارية، وهذا يعني طلباً مستمراً على خدمات \u003cstrong>صباغ السالمية\u003c/strong> لدهان الشقق المؤجَّرة والأبراج والمحلات التجارية على شارعي سالم المبارك وحمد المبارك، وهذا يجعل الطلبات هنا متنوعة بين دهان شقة قبل تسليمها لمستأجر جديد وتجديد واجهة محل أو مكتب. طبيعة المباني تفرض تعاملاً مختلفاً: شقق تُعاد صباغتها بشكل متكرر وتحتاج دهاناً داخلياً نظيفاً سريع الجفاف، وفلل قديمة في البلوكات الداخلية تحتاج معالجة رطوبة وتشققات وإعادة تأسيس قبل الطلاء.","نقدم في السالمية دهان الشقق كاملة خلال يوم إلى يومين مع إمكانية العمل مساءً حتى لا تتعطل حركة المحل أو المكتب، ونهتم بتجهيز الجدران قبل التنفيذ عبر كشط الطبقات الضعيفة والمعجون والتأسيس، ثم دهانات أصلية بفواتير رسمية مع عزل الحمامات والمطابخ ضد الرطوبة القادمة من قرب البحر. اتصل على 90998489 لمعاينة مجانية في السالمية وعرض سعر تفصيلي بدون التزام."],
    whyUs: ["السالمية من أقرب مناطق الكويت للبحر وأكثرها كثافة سكانية وتجارية، وهذا يجعل حاجة سكان السالمية لصباغ يفهم طبيعة المنطقة أكبر من أي مكان آخر: الرطوبة القادمة من الخليج تهاجم واجهات الأبراج والحمامات بسرعة، وارتفاع معدل دوران الإيجار في شقق السالمية يعني أن كل شقة تحتاج دهاناً جديداً كل فترة قصيرة نسبياً. لهذا السبب لا يكفي أي صباغ عادي في السالمية؛ المطلوب فريق معتاد على العمل بسرعة بين مستأجر وآخر ويعرف كيف يعالج الرطوبة قبل أن تتحول إلى فطريات على الجدران."],
    localTips: ["قبل أن تختار دهان شقتك أو محلك في السالمية، احرص على أن يستخدم الصباغ طبقة عازلة للرطوبة في الحمامات والمطابخ خصوصاً في الأبراج القريبة من شارع الخليج العربي، ولا تكتفِ بطبقة دهان واحدة إذا كان الجدار القديم متأثراً بالملوحة. الوقت الأفضل لدهان المحلات التجارية في السالمية هو المساء بعد إغلاق المحل أو في يوم الإجازة الأسبوعية حتى لا تتعطل حركة الزبائن، وإذا كنت تملك أكثر من شقة في نفس العمارة اطلب سعر جملة يوفر عليك ويسرّع التسليم."],
    commonJobs: ["أكثر ما نُنفّذه في السالمية هو دهان الشقق قبل تسليمها لمستأجر جديد، إلى جانب تجديد واجهات المحلات في مجمع سيتي سنتر ومجمع الفنار ومحيط ساحة السالمية. يليها في الطلب معالجة رطوبة الحمامات والمطابخ في الأبراج القريبة من شارع الخليج العربي، ثم دهان المكاتب الصغيرة على شارعي سالم المبارك وحمد المبارك خارج أوقات الدوام."],
    coverage: ["نغطي جميع بلوكات السالمية من بلوك 10 وبلوك 12 إلى منطقة البدع المجاورة، ونصل أيضاً إلى حولي والرميثية وسلوى وبيان والجابرية عند الحاجة لخدمة أكثر من موقع في نفس اليوم. سرعة الوصول داخل السالمية نفسها من أهم ما يميز خدمتنا نظراً لصغر مساحتها وكثافة الطلب فيها."],
    faq: [{"q":"كم سعر دهان شقة في السالمية؟","a":"يبدأ دهان شقة غرفتين في السالمية من 70 ديناراً ودهان شقة ثلاث غرف من 90 ديناراً شامل المواد، ويختلف السعر حسب حالة الجدران وعدد الطبقات المطلوبة. نقدم معاينة وعرض سعر مجاني."},{"q":"هل تعملون في محلات السالمية التجارية مساءً؟","a":"نعم، ننفذ دهان المحلات والمكاتب في السالمية خارج ساعات الدوام أو ليلاً لتقليل تعطّل العمل، ونسلّم المكان نظيفاً وجاهزاً في الصباح."},{"q":"شقتي في برج بالسالمية قريب من البحر وبها رطوبة، ما الحل؟","a":"نعالج الرطوبة أولاً بكشف مصدرها ثم معجون وعزل مقاوم للماء ودهان مضاد للفطريات، وهذا شائع في أبراج السالمية القريبة من شارع الخليج."}],
    priceList: [
      { service: "دهان شقة غرفتين", price: "من 70 د.ك", note: "شامل المواد" },
      { service: "دهان شقة 3 غرف", price: "من 90 د.ك", note: "شامل المواد" },
      { service: "دهان محل تجاري", price: "من 60 د.ك", note: "حسب المساحة" },
      { service: "دهان مكتب إداري", price: "من 50 د.ك", note: "تنفيذ مسائي متاح" },
      { service: "معالجة رطوبة حمام/مطبخ", price: "من 20 د.ك", note: "دهان مضاد للفطريات" },
      { service: "دهان واجهة برج", price: "1.5 – 3 د.ك / م²", note: "حسب الارتفاع والدهان" },
    ],
  },
  "sabaagh-hawalli": {
    neighbourhoods: ["ميدان حولي","شارع تونس","شارع بيروت","النقرة","منطقة السلام المجاورة"],
    landmarks: ["مجمع سيتي مول","شارع تونس التجاري","ميدان حولي"],
    propertyMix: "عمارات استثمارية وشقق مؤجرة كثيفة مع محلات على الشوارع التجارية",
    geo: { latitude: 29.3306, longitude: 48.0308 },
    intro: ["حولي منطقة استثمارية بامتياز، ومعظم العمل الذي يطلبه سكانها من \u003cstrong>صباغ حولي\u003c/strong> هو دهان شقق العمارات قبل التأجير وتجديد المحلات على شارع تونس وشارع بيروت وميدان حولي. هذه المباني كثيرة الاستخدام وتحتاج صباغاً منظماً ينهي الشقة في يوم واحد بدهان داخلي يتحمّل كثرة التنقل والتنظيف المتكرر.","نتعامل في حولي مع ملاك العمارات ومكاتب العقار مباشرة، ونوفّر جدول تنفيذ لعدة شقق في نفس العمارة مع تجهيز الجدران بمعجون وتأسيس قبل طبقة التشطيب النهائية. ننفّذ أيضاً معالجة التشققات والرطوبة في العمارات القديمة قرب النقرة، مع دهانات أصلية وضمان على العمل. للحجز والمعاينة المجانية في حولي اتصل على 90998489."],
    whyUs: ["حولي منطقة استثمارية مكتظة بالعمارات والمحلات التجارية على شارعي تونس وبيروت، وملاك العقار فيها يحتاجون صباغاً يتحرك بسرعة بين شقة وأخرى دون التأثير على دخل الإيجار. كثافة الاستخدام في عمارات حولي تعني أن الدهان الداخلي يتعرض لاحتكاك وتنظيف متكرر أكثر من أي منطقة سكنية هادئة، لذلك يبحث أصحاب العمارات في حولي تحديداً عن صباغ يقدم جودة تدوم رغم الاستخدام الكثيف، وليس فقط سعراً منخفضاً."],
    localTips: ["إذا كنت تملك عدة شقق في نفس العمارة بحولي، رتّب مع الصباغ جدول تنفيذ متتابع بدلاً من تنفيذها منفصلة، فهذا يقلل التكلفة ويسرّع جاهزية الشقق للتأجير. للمحلات على شارع تونس وشارع بيروت في حولي، اطلب التنفيذ مساءً أو في يوم الإجازة لتفادي تعطيل الزبائن، وتأكد من معالجة أي تشقق في جدران العمارات القديمة قرب النقرة قبل الدهان حتى لا يظهر التشقق من جديد بعد فترة قصيرة."],
    commonJobs: ["أكثر طلبات حولي هي دهان شقق العمارات الاستثمارية على شارع تونس وشارع بيروت وميدان حولي قبل التأجير مباشرة، تليها عمليات دهان جماعي لعدة شقق في نفس العمارة، ثم دهان المحلات التجارية على الشوارع الرئيسية مساءً. معالجة تشققات العمارات القديمة قرب النقرة من الطلبات المتكررة أيضاً."],
    coverage: ["نصل إلى كل أحياء حولي من ميدان حولي والنقرة إلى منطقة السلام المجاورة، ونخدم أيضاً السالمية والرميثية وسلوى وبيان والجابرية القريبة بنفس فريق العمل عند الحاجة لتنسيق أكثر من موقع."],
    faq: [{"q":"أملك عمارة في حولي وأريد دهان عدة شقق، هل يوجد سعر جملة؟","a":"نعم، نقدم سعراً خاصاً لدهان أكثر من شقة في نفس العمارة بحولي مع جدول تنفيذ متتابع حتى لا تتوقف عملية التأجير."},{"q":"كم يستغرق دهان شقة للتأجير في حولي؟","a":"شقة غرفتين في حولي تُدهن خلال يوم واحد، وشقة ثلاث غرف خلال يوم إلى يومين، وتكون جاهزة للتأجير مباشرة."}],
    priceList: [
      { service: "دهان شقة استثمارية غرفتين", price: "من 65 د.ك", note: "شامل المواد" },
      { service: "دهان شقة 3 غرف", price: "من 85 د.ك", note: "شامل المواد" },
      { service: "خصم دهان عمارة كاملة", price: "سعر جملة", note: "حسب عدد الشقق" },
      { service: "دهان محل شارع تونس/بيروت", price: "من 55 د.ك", note: "حسب المساحة" },
      { service: "معالجة تشققات عمارة قديمة", price: "من 15 د.ك", note: "حسب الحجم" },
    ],
  },
  "sabaagh-alfarwaniyah": {
    neighbourhoods: ["شارع حبيب مناور","قطعة 1","قطعة 4","منطقة الشارع الرئيسي","جليب الشيوخ المجاورة"],
    landmarks: ["سوق الفروانية","شارع حبيب مناور","مستشفى الفروانية"],
    propertyMix: "عمارات شعبية وشقق مؤجرة ومحلات تجارية على الشوارع الرئيسية",
    geo: { latitude: 29.2769, longitude: 47.9589 },
    intro: ["الفروانية من أكثر مناطق الكويت طلباً على \u003cstrong>صباغ الفروانية\u003c/strong> بحكم كثافة العمارات الشعبية والشقق المؤجرة حول سوق الفروانية وشارع حبيب مناور وفي محيطها. غالبية الطلبات هنا دهان شقق داخلية بسعر اقتصادي وسرعة في التنفيذ، مع تجهيز الجدران ومعالجة تقشير الدهان القديم والرطوبة في العمارات ذات العمر الطويل.","نقدم في الفروانية دهاناً نظيفاً بأسعار تناسب العمائر الاستثمارية، مع خيار العمالة فقط أو الخدمة شاملة المواد ومعجون وتأسيس كامل قبل التشطيب. نعمل طوال أيام الأسبوع وننهي الشقة في يوم، ونعطي فاتورة وضماناً على العمل. اتصل على 90998489 لمعاينة مجانية في الفروانية."],
    whyUs: ["الفروانية منطقة شعبية مكتظة بالعمائر الاستثمارية القديمة حول سوق الفروانية وشارع حبيب مناور، وأغلب من يبحث عن صباغ في الفروانية يريد حلاً اقتصادياً وسريعاً أكثر من تشطيب فاخر، لأن طبيعة العقارات هنا استثمارية بالدرجة الأولى. هذا يخلق طلباً مختلفاً عن مناطق الفلل الراقية: الأولوية في الفروانية للسعر المناسب والتنفيذ السريع مع جودة تكفي لتدوم حتى دورة التأجير التالية."],
    localTips: ["إذا كانت ميزانيتك محدودة في الفروانية، اسأل الصباغ عن خيار العمالة فقط مقابل توفيرك أنت للدهان، فهذا يخفّض التكلفة بشكل ملحوظ دون التأثير على جودة التنفيذ. لعمارات الفروانية القديمة التي عليها طبقات دهان متعددة ومتقشرة، لا بد من كشط شامل ومعالجة الرطوبة قبل أي طلاء جديد، وإلا سيتكرر التقشير بعد فترة قصيرة مهما كانت جودة الدهان المستخدم."],
    commonJobs: ["أكثر ما نستقبله من طلبات في الفروانية هو دهان اقتصادي لشقق عمائر الاستثمار حول سوق الفروانية وشارع حبيب مناور، إلى جانب خيار العمالة فقط لمن يوفر الدهان بنفسه، ثم معالجة تقشير الدهان القديم والرطوبة في العمارات ذات العمر الطويل."],
    coverage: ["نغطي كامل مناطق الفروانية من شارع حبيب مناور وقطعة 1 وقطعة 4 إلى جليب الشيوخ المجاورة، ونصل أيضاً إلى خيطان وصباح الناصر عند الطلب."],
    faq: [{"q":"أبغى صباغ رخيص وشاطر في الفروانية، تنفعوني؟","a":"نعم، نقدم في الفروانية دهاناً اقتصادياً بجودة جيدة يبدأ من 60 ديناراً للشقة الصغيرة، مع إمكانية توفيرك للمواد وتنفيذنا للعمالة فقط."},{"q":"الدهان يتقشّر في شقتي بالفروانية، وش السبب؟","a":"غالباً بسبب رطوبة أو دهان قديم على طبقة غير مؤسَّسة. نكشط الطبقة الضعيفة، نعالج الرطوبة، نؤسس من جديد ثم ندهن، ونضمن عدم التقشير."}],
    priceList: [
      { service: "دهان شقة غرفة وصالة", price: "من 55 د.ك", note: "اقتصادي شامل المواد" },
      { service: "دهان شقة غرفتين", price: "من 60 د.ك", note: "شامل المواد" },
      { service: "دهان شقة 3 غرف", price: "من 80 د.ك", note: "شامل المواد" },
      { service: "عمالة فقط (بدون مواد)", price: "من 35 د.ك", note: "إذا وفّرت الدهان بنفسك" },
      { service: "معالجة تقشير ورطوبة", price: "من 15 د.ك", note: "حسب الحجم" },
    ],
  },
  "sabaagh-aljahraa": {
    neighbourhoods: ["القصر","النعيم","العيون","الواحة","تيماء","سعد العبدالله المجاورة"],
    landmarks: ["القصر الأحمر","سوق الجهراء","طريق الجهراء السريع"],
    propertyMix: "بيوت حكومية وفلل عائلية كبيرة مع بعض العمارات في المناطق الجديدة",
    geo: { latitude: 29.3372, longitude: 47.6581 },
    intro: ["الجهراء منطقة سكنية عائلية تغلب عليها البيوت الحكومية والفلل الكبيرة في القصر والنعيم والعيون وسعد العبدالله، وطلبات \u003cstrong>صباغ الجهراء\u003c/strong> عادة دهان فيلا كاملة أو تجديد بيت العائلة من الداخل والخارج. الواجهات هنا تتعرض للغبار والحرارة الشديدة، لذلك ننصح دائماً بدهان خارجي مقاوم للأشعة والأتربة، مع دهان داخلي مريح للمجالس وغرف المعيشة الواسعة.","ننفّذ في الجهراء دهان الفلل الكاملة خلال 3 إلى 5 أيام حسب المساحة، مع تجهيز الجدران بالصنفرة والمعجون والتأسيس قبل الدهانات الخارجية عالية التحمل، ومعالجة تشققات الأسطح والجدران. نصل إليك في جميع مناطق الجهراء ونقدم معاينة وعرض سعر مجاني على 90998489."],
    whyUs: ["الجهراء منطقة سكنية عائلية واسعة تغلب عليها البيوت الحكومية والفلل الكبيرة في أحياء مثل القصر والنعيم والعيون، وطقسها المعروف بالغبار والحرارة الشديدة صيفاً يجعل واجهات البيوت هناك تتعرض لتلف أسرع من مناطق العاصمة. هذا هو السبب الرئيسي وراء بحث سكان الجهراء عن صباغ يستخدم دهانات خارجية مقاومة للأشعة والأتربة تحديداً، وليس أي دهان خارجي عادي قد لا يصمد أمام مناخ المنطقة."],
    localTips: ["لأي واجهة في الجهراء، اختر دهاناً أكريليكاً مقاوماً للأشعة فوق البنفسجية وسهل الغسل من الأتربة المتراكمة، مع طبقة أساس عازلة تحت الطلاء النهائي لإطالة عمر الواجهة. للفلل الكبيرة في الجهراء التي تحتاج دهاناً داخلياً وخارجياً معاً، احسب حساب مدة تنفيذ أطول تصل إلى 4 أو 5 أيام حسب عدد الأدوار والمساحة."],
    commonJobs: ["أغلب طلبات الجهراء دهان فيلا أو بيت حكومي كامل من الداخل والخارج في أحياء القصر والنعيم والعيون، مع تركيز خاص على دهان خارجي مقاوم للأشعة والأتربة بسبب مناخ المنطقة الحار والمغبر."],
    coverage: ["نغطي القصر والنعيم والعيون والواحة وتيماء وسعد العبدالله المجاورة، ونصل إلى جميع أنحاء محافظة الجهراء بفريق واحد."],
    faq: [{"q":"كم سعر دهان فيلا كاملة في الجهراء؟","a":"يبدأ دهان فيلا كاملة داخلي في الجهراء من 200 دينار ويزيد حسب المساحة وعدد الأدوار، والدهان الخارجي يُحسب بالمتر حسب ارتفاع الواجهة."},{"q":"واجهة بيتي في الجهراء متأثرة بالغبار والشمس، أي دهان تنصحون به؟","a":"ننصح بدهان خارجي أكريليك مقاوم للأشعة فوق البنفسجية وسهل الغسل، مع طبقة أساس عازلة، وهو الأنسب لمناخ الجهراء."}],
    priceList: [
      { service: "دهان فيلا كاملة داخلي", price: "من 200 د.ك", note: "حسب المساحة والأدوار" },
      { service: "دهان واجهة خارجية", price: "1.5 – 2.5 د.ك / م²", note: "أكريليك مقاوم للأشعة" },
      { service: "دهان دور واحد", price: "من 120 د.ك", note: "شامل المواد" },
      { service: "معالجة تشققات وترميم جدران", price: "من 20 د.ك", note: "حسب الحجم" },
    ],
  },
  "sabaagh-al-ahmadi": {
    neighbourhoods: ["الأحمدي القديمة","ضاحية فهد الأحمد المجاورة","حي الشرق","حي الوسط"],
    landmarks: ["حدائق الأحمدي","مستشفى الأحمدي","مبنى شركة نفط الكويت"],
    propertyMix: "بيوت شركة النفط ذات الطراز القديم وفلل عائلية وحدائق واسعة",
    geo: { latitude: 29.0769, longitude: 48.0837 },
    intro: ["مدينة الأحمدي معروفة ببيوتها ذات الطراز القديم المملوكة لشركة نفط الكويت ومساحاتها الخضراء، وطلبات \u003cstrong>صباغ الأحمدي\u003c/strong> غالباً تجديد بيوت قديمة قرب حدائق الأحمدي تحتاج معالجة رطوبة وتشققات وإعادة دهان داخلي وخارجي محافظ على الطابع العام للحي.","الجدران السميكة القديمة في الأحمدي تحتاج معجوناً ومواد تأسيس خاصة قبل أي طبقة تشطيب، وننفّذ الدهان الخارجي بألوان هادئة تناسب طابع المدينة مع دهانات داخلية تراعي طبيعة الغرف الواسعة في هذه البيوت. نقدم معاينة مجانية في الأحمدي والفحيحيل والمناطق المجاورة على 90998489."],
    whyUs: ["مدينة الأحمدي محافظة على طابعها القديم ببيوتها المملوكة تاريخياً لشركة نفط الكويت ومساحاتها الخضراء الواسعة، وهذا يعني أن أغلب من يبحث عن صباغ في الأحمدي يتعامل مع جدران سميكة قديمة تحتاج معالجة مختلفة تماماً عن جدران العمارات الحديثة. الرطوبة والتشققات في بيوت الأحمدي القديمة ليست عيباً عابراً بل نتيجة طبيعية لعمر المبنى، ولذلك يحتاج صباغ الأحمدي خبرة خاصة في معالجة هذا النوع من الجدران قبل أي دهان نهائي."],
    localTips: ["إذا كان بيتك في الأحمدي من الطراز القديم، لا تتوقع أن يكفي دهان طبقة واحدة فوق الجدار مباشرة؛ الجدران السميكة هنا تحتاج معجوناً ومواد تأسيس خاصة أولاً، خصوصاً في الأماكن التي تظهر بها رطوبة بالقرب من الأرضية. للحفاظ على الطابع العام لمدينة الأحمدي، يفضّل كثير من السكان الالتزام بألوان خارجية هادئة تتناسق مع بيوت الحي المجاورة بدل الألوان الصارخة."],
    commonJobs: ["الطلب الأساسي في الأحمدي تجديد بيوت قديمة قرب حدائق الأحمدي تحتاج معالجة رطوبة وتشققات وإعادة دهان داخلي وخارجي، إلى جانب طلبات دهان بألوان هادئة تحافظ على الطابع العام لأحياء مثل حي الشرق وحي الوسط."],
    coverage: ["نصل إلى الأحمدي القديمة وضاحية فهد الأحمد وحي الشرق وحي الوسط بالكامل، ونخدم أيضاً الفحيحيل والمنقف والمهبولة المجاورة."],
    faq: [{"q":"بيتي في الأحمدي قديم وجدرانه سميكة وبها رطوبة، تقدرون تعالجونها؟","a":"نعم، بيوت الأحمدي القديمة نتعامل معها كثيراً؛ نكشف مصدر الرطوبة، نجفف ونعالج بمواد عازلة ثم معجون ودهان مضاد للفطريات."},{"q":"هل تلتزمون بألوان هادئة تناسب طابع مدينة الأحمدي؟","a":"نعم، نساعدك في اختيار ألوان خارجية متناسقة مع طابع الحي، وننفّذ الداخلي بأي درجات تختارها."}],
    priceList: [
      { service: "دهان بيت قديم كامل (داخلي)", price: "من 180 د.ك", note: "شامل معجون ومعالجة رطوبة" },
      { service: "دهان خارجي بألوان هادئة", price: "1.5 – 2.5 د.ك / م²", note: "يحافظ على طابع الحي" },
      { service: "معالجة رطوبة جدران سميكة", price: "من 25 د.ك", note: "حسب الحجم" },
      { service: "دهان حديقة/سور المنزل", price: "من 40 د.ك", note: "حسب المساحة" },
    ],
  },
  "sabaagh-khaitan": {
    neighbourhoods: ["خيطان القديمة","خيطان الجديدة","ابرق خيطان","شارع المطاعم"],
    landmarks: ["جمعية خيطان","شارع المطار","سوق خيطان"],
    propertyMix: "عمارات استثمارية وشقق مؤجرة كثيفة وبعض البيوت القديمة",
    geo: { latitude: 29.2925, longitude: 47.9689 },
    intro: ["خيطان من أكثر مناطق محافظة الفروانية طلباً على دهان الشقق الاستثمارية، وأغلب ما يطلبه سكانها من \u003cstrong>صباغ خيطان\u003c/strong> هو تجهيز شقة للتأجير بسرعة وسعر مناسب، أو تجديد شقة العائلة في عمارة قديمة قرب سوق خيطان.","نعمل في خيطان القديمة والجديدة وابرق خيطان، وننهي الشقة في يوم واحد بدهان داخلي نظيف يتحمّل الاستخدام، مع تجهيز الجدران ومعالجة تقشير الدهان القديم قبل التأسيس والتشطيب. خدمة العمالة فقط متاحة إذا كنت تملك المواد. للمعاينة المجانية في خيطان اتصل على 90998489."],
    whyUs: ["خيطان من أكثر مناطق محافظة الفروانية طلباً على دهان الشقق الاستثمارية بحكم كثافة العمارات القديمة والجديدة فيها معاً، من خيطان القديمة وابرق خيطان إلى خيطان الجديدة قرب سوق خيطان. الطلب المتكرر في خيطان غالباً مرتبط بدورة تأجير سريعة، فكل شقة تُخلى تحتاج دهاناً جديداً خلال أيام قليلة قبل دخول مستأجر آخر، وهذا يفرض على الصباغ في خيطان أن يكون سريعاً ومنظماً أكثر من مناطق البيوت العائلية الهادئة."],
    localTips: ["لأصحاب عمارات خيطان الذين يديرون أكثر من شقة للإيجار، الأفضل الاتفاق على سعر جملة وجدول تنفيذ يشمل عدة وحدات دفعة واحدة بدل التعامل مع كل شقة بشكل منفصل. إذا كانت الشقة في خيطان القديمة وتظهر عليها آثار دهان قديم متقشر، لا تدهن فوقه مباشرة؛ اطلب كشط الطبقة الضعيفة أولاً ثم التأسيس، فهذا يمنع تكرار مشكلة التقشير بعد أشهر قليلة."],
    commonJobs: ["الطلب الأكبر في خيطان هو دهان شقق التأجير في خيطان القديمة والجديدة وابرق خيطان بأسرع وقت ممكن بين مستأجر وآخر، ويليه دهان جماعي لعدة شقق في نفس العمارة بسعر جملة، بالإضافة إلى معالجة تقشير الدهان القديم في العمارات القديمة قرب سوق خيطان."],
    coverage: ["نصل إلى خيطان القديمة والجديدة وابرق خيطان وشارع المطاعم بالكامل، ونخدم أيضاً الفروانية وصباح الناصر المجاورتين ضمن نفس جدول التنفيذ عند الحاجة."],
    faq: [{"q":"كم سعر دهان شقة للتأجير في خيطان؟","a":"يبدأ من 60 إلى 90 ديناراً حسب عدد الغرف وحالة الجدران، شامل المواد، مع إمكانية خصم عند دهان أكثر من شقة."},{"q":"عندي أكثر من شقة للتأجير في خيطان القديمة، تسوّون سعر خاص؟","a":"نعم، ندهن أكثر من شقة في نفس العمارة بخيطان بسعر مخفّض وجدول تنفيذ متتابع حتى تجهز جميعها للتأجير بسرعة."}],
    priceList: [
      { service: "دهان شقة غرفتين للتأجير", price: "من 60 د.ك", note: "شامل المواد" },
      { service: "دهان شقة 3 غرف", price: "من 90 د.ك", note: "شامل المواد" },
      { service: "عمالة فقط (بدون مواد)", price: "من 35 د.ك", note: "إذا وفّرت الدهان بنفسك" },
      { service: "خصم دهان عدة شقق", price: "سعر جملة", note: "لنفس العمارة" },
    ],
  },
  "sabaagh-sabah-alsaalim": {
    neighbourhoods: ["قطعة 1","قطعة 5","قطعة 8","منطقة الجمعية"],
    landmarks: ["جمعية صباح السالم","حديقة صباح السالم","جامعة الكويت - الشدادية القريبة"],
    propertyMix: "بيوت حكومية وفلل عائلية كبيرة نظام دورين وسرداب",
    geo: { latitude: 29.2544, longitude: 48.0675 },
    intro: ["صباح السالم منطقة عائلية هادئة في محافظة مبارك الكبير تغلب عليها البيوت الحكومية والفلل الكبيرة، وطلبات \u003cstrong>صباغ صباح السالم\u003c/strong> عادة دهان فيلا كاملة أو دور كامل بعد استلامه أو قبل الزواج، قريباً من جمعية صباح السالم وحديقتها، مع تنفيذ ديكورات جبس وجدران مميزة في المجالس.","ننفّذ في صباح السالم دهان الفلل بمراحل منظمة: صنفرة، معجون، تأسيس، وطبقتي تشطيب داخلي وخارجي، مع دهانات ديكورية وجدران بروفايل في المجالس وغرف الجلوس. الدور الكامل يُنجز في 3 إلى 4 أيام. معاينة مجانية على 90998489."],
    whyUs: ["صباح السالم منطقة سكنية عائلية بامتياز في محافظة مبارك الكبير، وأغلب بيوتها بيوت حكومية وفلل من دورين وسرداب مبنية منذ فترة، وهذا يعني أن سكان صباح السالم يحتاجون صباغاً يتعامل مع مساحات واسعة ومجالس كبيرة تحتاج تشطيباً مميزاً قبل مناسبة أو زواج، وليس مجرد دهان شقة صغيرة. كثرة الفلل من هذا الطراز في صباح السالم تجعل التسعير والتنفيذ يختلفان عن مناطق الشقق المكتظة، فالعمل هنا يمتد لأيام ويشمل الداخل والخارج معاً."],
    localTips: ["إذا كنت تخطط لدهان فيلا كاملة في صباح السالم، اطلب معاينة ميدانية قبل تحديد السعر لأن مساحة الدورين والسرداب تختلف من بيت لآخر، وحدد مسبقاً إن كنت تريد إضافة ديكورات جبس أو جدران بروفايل في المجلس لأن هذا يُحسب بشكل منفصل عن الدهان العادي. للواجهات الخارجية في صباح السالم يفضَّل دهان يتحمل حرارة الصيف وأشعة الشمس المباشرة طوال اليوم، مع طبقة أساس جيدة تمنع تشقق الطلاء بعد موسم أو موسمين."],
    commonJobs: ["الطلب الأكبر في صباح السالم يتركز على دهان الفلل والأدوار الكاملة بعد الاستلام أو قبل مناسبة عائلية، وغالباً يترافق مع طلب ديكورات جبس وجدران مميزة للمجلس. نُنفّذ أيضاً دهان الأسوار والواجهات الخارجية في قطعة 1 وقطعة 5 وقطعة 8 بالقرب من جمعية صباح السالم."],
    coverage: ["خدمتنا في صباح السالم تغطي جميع القطع بما فيها منطقة الجمعية والمناطق المحيطة بحديقة صباح السالم، وننسّق الزيارة مسبقاً في حال احتجت تنفيذاً في نفس اليوم مع محافظة مبارك الكبير المجاورة."],
    faq: [{"q":"استلمت دور في صباح السالم وأبغى أدهنه كامل مع ديكور مجلس، تنفعوني؟","a":"نعم، ننفذ الدور كاملاً مع ديكور جبس وجدران مميزة في المجلس والصالة، ونعطيك عرض سعر يفصّل الدهان عن أعمال الديكور."},{"q":"كم يستغرق دهان دور كامل في صباح السالم؟","a":"الدور الواحد يُنجز عادة خلال 3 إلى 4 أيام حسب المساحة وعدد الغرف، ومع أعمال الديكور قد يمتد يوماً إضافياً."}],
    priceList: [
      { service: "دهان دور كامل", price: "من 150 د.ك", note: "شامل المواد" },
      { service: "دهان فيلا دورين وسرداب", price: "من 280 د.ك", note: "حسب المساحة" },
      { service: "ديكور جبس وجدران مجلس", price: "من 60 د.ك", note: "حسب التصميم" },
      { service: "دهان خارجي للواجهة", price: "1.5 – 2.5 د.ك / م²", note: "حسب نوع الدهان" },
    ],
  },
  "sabaagh-alfhahil": {
    neighbourhoods: ["الفحيحيل القديمة","ساحل الفحيحيل","بلوك 7","بلوك 11"],
    landmarks: ["مجمع الكوت","ساحل الفحيحيل","سوق الفحيحيل القديم"],
    propertyMix: "شقق مؤجرة وعمارات ومحلات تجارية مع بيوت قديمة قرب الساحل",
    geo: { latitude: 29.0833, longitude: 48.1267 },
    intro: ["الفحيحيل مركز تجاري وسكني مهم في محافظة الأحمدي، وطلبات \u003cstrong>صباغ الفحيحيل\u003c/strong> تتنوع بين دهان الشقق المؤجرة والمحلات في مجمع الكوت ومحيطه، وتجديد البيوت القديمة القريبة من الساحل والتي تتأثر رطوبتها بالملوحة.","نعالج في الفحيحيل مشاكل الرطوبة والملوحة الشائعة قرب البحر بتجهيز الجدران وعزل مناسب ودهانات داخلية وخارجية مقاومة للفطريات، وننفّذ دهان المحلات مساءً. معاينة وعرض سعر مجاني في الفحيحيل والمنقف والمهبولة على 90998489."],
    whyUs: ["الفحيحيل مركز تجاري وسكني مهم في محافظة الأحمدي يجمع بين مجمع الكوت التجاري والبيوت القديمة القريبة من الساحل، وهذا التنوع ينعكس مباشرة على طلبات الصباغة فيها: محلات تحتاج تنفيذاً سريعاً خارج أوقات الدوام، وبيوت قديمة قرب الساحل تعاني من رطوبة وملوحة متكررة في جدرانها. صباغ الفحيحيل الجيد هو من يتعامل بكفاءة مع النوعين معاً دون التضحية بالوقت أو الجودة."],
    localTips: ["لأصحاب المحلات في مجمع الكوت وما حوله بالفحيحيل، اتفق مسبقاً مع الصباغ على تنفيذ مسائي أو في يوم الإجازة حتى لا يتأثر دوام العمل. أما للبيوت القريبة من ساحل الفحيحيل، فالخطوة الأولى قبل أي دهان هي كشط الأجزاء المتملّحة من الجدار ومعالجتها بمواد مانعة للأملاح، وإلا ستظهر نفس المشكلة خلال أشهر قليلة مهما كانت جودة الدهان."],
    commonJobs: ["طلبات الفحيحيل تتوزع بين دهان محلات مجمع الكوت مساءً، ودهان شقق مؤجرة في بلوك 7 وبلوك 11، ومعالجة ملوحة ورطوبة متكررة في البيوت القديمة قرب ساحل الفحيحيل وسوقها القديم."],
    coverage: ["نغطي الفحيحيل القديمة وساحلها وبلوكاتها بالكامل، ونصل أيضاً إلى الأحمدي والمنقف والمهبولة المجاورة."],
    faq: [{"q":"بيتي في الفحيحيل قريب من البحر وفيه ملوحة ورطوبة بالجدران، وش الحل؟","a":"نكشط الأجزاء المتملّحة، نعالج بمواد مانعة للأملاح وطبقة عزل، ثم معجون ودهان مقاوم للرطوبة، وهذه مشكلة شائعة في بيوت ساحل الفحيحيل ونتعامل معها كثيراً."},{"q":"عندي محل في مجمع الكوت بالفحيحيل، تقدرون تدهنون بعد الدوام؟","a":"نعم، ننفذ دهان المحلات في مجمع الكوت ومحيطه مساءً أو في يوم الإجازة حتى لا يتأثر عملك، ونسلّم المحل نظيفاً وجاهزاً."}],
    priceList: [
      { service: "دهان شقة غرفتين", price: "من 65 د.ك", note: "شامل المواد" },
      { service: "دهان محل مجمع الكوت", price: "من 55 د.ك", note: "حسب المساحة" },
      { service: "معالجة ملوحة ورطوبة", price: "من 25 د.ك", note: "حسب الحجم" },
      { service: "دهان بيت قديم قرب الساحل", price: "من 170 د.ك", note: "داخلي وخارجي" },
    ],
  },
  "sabaagh-aljabriya": {
    neighbourhoods: ["قطعة 1أ","قطعة 6","قطعة 11","محيط جامعة الخليج"],
    landmarks: ["مستشفى مبارك الكبير","جامعة الخليج للعلوم والتكنولوجيا","جمعية الجابرية"],
    propertyMix: "فلل عائلية وبعض العمارات وشقق للطلبة قرب الجامعات",
    geo: { latitude: 29.3167, longitude: 48.0333 },
    intro: ["الجابرية منطقة سكنية راقية في محافظة حولي قريبة من مستشفى مبارك وجامعة الخليج، وطلبات \u003cstrong>صباغ الجابرية\u003c/strong> تجمع بين دهان الفلل العائلية وتجديد شقق مؤجرة للطلبة والعاملين في المستشفى.","ننفّذ في الجابرية دهانات داخلية بتشطيب ناعم وديكورات جبس في المجالس، مع تجهيز الجدران بمعجون وتأسيس قبل الدهان الخارجي للواجهات، والتزام تام بالمواعيد والنظافة. للمعاينة المجانية في الجابرية اتصل على 90998489."],
    whyUs: ["الجابرية منطقة راقية نسبياً في محافظة حولي وقريبة من مستشفى مبارك الكبير وجامعة الخليج للعلوم والتكنولوجيا، لذلك يجمع الطلب فيها بين فئتين مختلفتين تماماً: أصحاب الفلل العائلية الذين يريدون تشطيباً هادئاً وأنيقاً، وملاك الشقق الصغيرة المؤجرة للطلبة والعاملين في المستشفى الذين يحتاجون تنفيذاً سريعاً بين الفصول الدراسية. هذا التنوع يجعل صباغ الجابرية يحتاج مرونة في التسعير والتنفيذ لا تتوفر عند كل صباغ عادي."],
    localTips: ["إذا كنت تدهن شقة للتأجير الطلابي في الجابرية، حاول التنفيذ في فترة العطلة بين الفصول الدراسية حتى تكون الشقة جاهزة قبل بداية الفصل الجديد مباشرة. أما في فلل الجابرية، يفضَّل اختيار تشطيب داخلي ناعم للمجالس مع دهان خارجي متين للواجهة، لأن كثيراً من فلل المنطقة قريبة من شوارع رئيسية تتعرض لأتربة وعوادم السيارات بشكل يومي."],
    commonJobs: ["في الجابرية يتوزع الطلب بين دهان فلل عائلية كاملة بتشطيب هادئ، ودهان شقق صغيرة مؤجرة للطلبة والعاملين في مستشفى مبارك الكبير بالقرب من جامعة الخليج، بالإضافة إلى ديكورات جبس وجدران مجلس في الفلل الأكبر مساحة."],
    coverage: ["نخدم جميع قطع الجابرية بما فيها قطعة 1أ وقطعة 6 وقطعة 11 ومحيط الجامعة، ونصل أيضاً إلى حولي والسالمية والرميثية وسلوى وبيان المجاورة."],
    faq: [{"q":"كم سعر دهان فيلا في الجابرية؟","a":"يبدأ دهان فيلا كاملة في الجابرية من 220 ديناراً حسب المساحة وعدد الأدوار، ويشمل معجون وتأسيس وطبقتي تشطيب. نقدم معاينة مجانية وعرض سعر دقيق."},{"q":"أملك شقة صغيرة أؤجرها للطلبة قرب الجامعة، تقدرون تدهنونها بسرعة؟","a":"نعم، شقق الجابرية القريبة من جامعة الخليج ننجزها عادة خلال يوم واحد بدهان اقتصادي ونظيف يناسب دورة التأجير السريعة بين الفصول الدراسية."}],
    priceList: [
      { service: "دهان فيلا كاملة", price: "من 220 د.ك", note: "شامل المواد" },
      { service: "دهان شقة طلابية للتأجير", price: "من 60 د.ك", note: "شامل المواد" },
      { service: "ديكور جبس وجدران مجلس", price: "من 60 د.ك", note: "حسب التصميم" },
      { service: "دهان خارجي للفيلا", price: "1.5 – 2.5 د.ك / م²", note: "حسب نوع الدهان" },
    ],
  },
  "sabaagh-bayan": {
    neighbourhoods: ["قطعة 6","قطعة 10","قطعة 12","محيط قصر بيان"],
    landmarks: ["قصر بيان","مجمع الأسواق","حديقة بيان"],
    propertyMix: "فلل كبيرة وقصور خاصة بمساحات واسعة",
    geo: { latitude: 29.3167, longitude: 48.0333 },
    intro: ["بيان من أرقى مناطق محافظة حولي وتغلب عليها الفلل الكبيرة والقصور الخاصة، وطلبات \u003cstrong>صباغ بيان\u003c/strong> عادة دهان فيلا كاملة قرب قصر بيان بتشطيبات فاخرة: جدران بروفايل، دهانات مخملية ومعدنية، وديكورات جبس مصمّمة.","نتعامل مع مشاريع بيان بتشطيبات دقيقة، ونقدّم عينات ألوان وكتالوج دهانات ديكورية قبل التنفيذ، مع تجهيز الجدران بمعجون مرتين وصنفرة دقيقة لضمان نعومة السطح قبل الدهان النهائي. معاينة مجانية على 90998489."],
    whyUs: ["بيان من أرقى مناطق محافظة حولي وتغلب عليها الفلل الكبيرة والقصور الخاصة قرب قصر بيان، فطلبات الصباغة هنا مختلفة جذرياً عن أي منطقة أخرى في الكويت: العميل في بيان لا يبحث عن دهان عادي بل عن تشطيبات دقيقة كالجدران المخملية والمعدنية والبروفايل، وهذا يتطلب صباغاً معتاداً على التعامل مع تفاصيل التصميم الداخلي وليس فقط طلاء الجدران بلون واحد."],
    localTips: ["قبل بدء أي مشروع دهان في بيان، اطلب من الصباغ عرض عينات ألوان وكتالوج تشطيبات ديكورية فعلية قبل التنفيذ حتى تتأكد من النتيجة النهائية للمجلس أو الصالة. الفلل الكبيرة في بيان تحتاج وقتاً أطول للتحضير — صنفرة ومعجون مرتين على الأقل — فلا تستعجل الجدول الزمني إذا كنت تريد سطحاً ناعماً خالياً من أي عيوب ظاهرة تحت الإضاءة القوية."],
    commonJobs: ["طلبات بيان مختلفة عن باقي المناطق؛ الأغلبية دهان فلل وقصور كاملة بتشطيبات دقيقة مثل الجدران المخملية والمعدنية والبروفايل قرب قصر بيان، مع طلبات متكررة لديكورات جبس مصممة خصيصاً للمجلس والصالة."],
    coverage: ["نغطي جميع قطع بيان من قطعة 6 وقطعة 10 إلى قطعة 12 ومحيط قصر بيان، ونصل أيضاً إلى حولي والسالمية والرميثية وسلوى والجابرية المجاورة."],
    faq: [{"q":"كم سعر دهان فيلا كبيرة في بيان؟","a":"دهان الفلل والقصور في بيان يُحسب بعد معاينة دقيقة لأن التشطيبات فيها تختلف (مخملي، معدني، جدران بروفايل)، وعادة يبدأ من 350 ديناراً للفيلا الكاملة بتشطيب فاخر."},{"q":"أبغى تشطيب مميز لمجلس فيلتي في بيان، وش الخيارات؟","a":"نوفّر دهانات مخملية ومعدنية وثلاثية الأبعاد وجدران بروفايل وجبس مصمّم خصيصاً للمجلس، ونعرض عليك كتالوج ألوان وعينات قبل البدء."}],
    priceList: [
      { service: "دهان فيلا فاخرة كاملة", price: "من 350 د.ك", note: "تشطيب فاخر" },
      { service: "دهان مخملي/معدني للمجلس", price: "من 80 د.ك", note: "حسب المساحة والتصميم" },
      { service: "جدران بروفايل وجبس مصمّم", price: "حسب المعاينة", note: "عرض سعر مخصص" },
      { service: "دهان قصر خاص", price: "حسب المعاينة", note: "فريق تشطيبات دقيقة" },
    ],
  },
  "sabaagh-salwa": {
    neighbourhoods: ["شارع الخليج","قطعة 3","قطعة 7","قطعة 12"],
    landmarks: ["شارع سلوى","جمعية سلوى","كورنيش سلوى"],
    propertyMix: "فلل عائلية وبعض العمارات الصغيرة قرب شارع الخليج",
    geo: { latitude: 29.3, longitude: 48.0833 },
    intro: ["سلوى منطقة عائلية مطلة على شارع الخليج في محافظة حولي، وطلبات \u003cstrong>صباغ سلوى\u003c/strong> غالباً تجديد فلل قائمة من الداخل والخارج، مع اهتمام واضح بألوان الواجهات لقربها من البحر والحاجة لدهان يتحمّل الرطوبة.","ننفّذ في سلوى دهانات خارجية مقاومة للملوحة والرطوبة، وداخلية بتشطيب ناعم، مع تجهيز الجدران ومعالجة أي تشققات في الأسطح قبل التأسيس والدهان النهائي. معاينة وعرض سعر مجاني في سلوى على 90998489."],
    whyUs: ["سلوى منطقة عائلية تطل على شارع الخليج العربي، وقربها من البحر يجعل واجهات الفلل فيها عرضة للرطوبة والأملاح بشكل أكبر من المناطق الداخلية في الكويت. لهذا السبب يبحث سكان سلوى تحديداً عن صباغ يفهم فرق التعامل بين دهان داخلي عادي ودهان خارجي مقاوم للملوحة، لأن استخدام دهان عادي على واجهة قريبة من البحر يعني تكراراً للمشكلة خلال موسم أو موسمين فقط."],
    localTips: ["لأي فيلا في سلوى قريبة من شارع الخليج، لا تكتفِ بدهان الواجهة بشكل مباشر؛ اطلب طبقة عزل أساس مقاومة للرطوبة أولاً ثم دهاناً خارجياً مخصصاً للمناطق الساحلية. للداخل، يمكن الاعتماد على تشطيب ناعم عادي لأن المشكلة الأساسية في سلوى مرتبطة بالواجهات الخارجية أكثر من الجدران الداخلية المحمية من الطقس."],
    commonJobs: ["أكثر طلبات سلوى تجديد فلل قائمة من الداخل والخارج مع تركيز واضح على دهان الواجهات المقاوم للملوحة بسبب قرب المنطقة من شارع الخليج، إلى جانب معالجة تشققات الأسطح في الفلل الأقدم."],
    coverage: ["نصل إلى جميع قطع سلوى من قطعة 3 وقطعة 7 إلى قطعة 12 وشارع الخليج، ونخدم أيضاً حولي والسالمية والرميثية وبيان والجابرية المجاورة."],
    faq: [{"q":"فيلتي في سلوى قريبة من البحر، هل الدهان العادي يكفي للواجهة؟","a":"لا ننصح بالدهان العادي؛ نستخدم دهاناً خارجياً مقاوماً للملوحة والرطوبة القادمة من البحر مع طبقة عزل أساس، وهذا يطيل عمر الواجهة بشكل واضح."},{"q":"كم سعر دهان فيلا كاملة في سلوى؟","a":"يبدأ دهان الفيلا الكاملة داخلي وخارجي في سلوى من 220 ديناراً حسب المساحة، ونقدم معاينة مجانية لتحديد السعر بدقة."}],
    priceList: [
      { service: "دهان فيلا كاملة (داخلي وخارجي)", price: "من 220 د.ك", note: "شامل المواد" },
      { service: "دهان واجهة مقاومة للملوحة", price: "1.5 – 2.5 د.ك / م²", note: "عزل أساس متضمّن" },
      { service: "دهان داخلي بتشطيب ناعم", price: "من 130 د.ك", note: "حسب المساحة" },
      { service: "معالجة تشققات الأسطح", price: "من 20 د.ك", note: "حسب الحجم" },
    ],
  },
  "sabaagh-alrumaithiya": {
    neighbourhoods: ["قطعة 2","قطعة 6","قطعة 9","شارع المطاعم"],
    landmarks: ["جمعية الرميثية","حديقة الرميثية","شارع المها"],
    propertyMix: "فلل عائلية متوسطة وكبيرة مع القليل من الشقق",
    geo: { latitude: 29.317, longitude: 48.067 },
    intro: ["الرميثية منطقة عائلية مستقرة في محافظة حولي، وطلبات \u003cstrong>صباغ الرميثية\u003c/strong> عادة دهان بيت العائلة كاملاً بعد سنوات من آخر دهان، خصوصاً في القطع القريبة من حديقة الرميثية وشارع المها، مع معالجة تشققات الجص وإعادة دهان الأسقف والدرج.","ننفّذ في الرميثية دهان الفلل بمراحل نظيفة مع تغطية كاملة للأثاث والأرضيات، وتجهيز الجدران بمعجون وتأسيس قبل دهانات أصلية بضمان. الفيلا الكاملة تُنجز في 3 إلى 5 أيام. معاينة مجانية على 90998489."],
    whyUs: ["الرميثية منطقة عائلية مستقرة في محافظة حولي تغلب عليها الفلل المتوسطة والكبيرة، وكثير من طلبات الصباغة فيها يأتي من بيوت لم تُدهن منذ سنوات طويلة، ما يعني ظهور تشققات في الجص وتغير واضح في لون الأسقف والدرج مع مرور الوقت. هذا النوع من الطلب يحتاج صباغاً صبوراً في مرحلة التجهيز أكثر من صباغ سريع، لأن جودة النتيجة النهائية في الرميثية ترتبط مباشرة بجودة معالجة الجدران القديمة قبل الدهان."],
    localTips: ["قبل دهان فيلا قديمة في الرميثية، تأكد أن الصباغ يعالج تشققات الجص أولاً بمعجون مناسب بدل تغطيتها بطبقة دهان مباشرة، لأن التشقق سيظهر مرة أخرى خلال وقت قصير إذا لم تتم معالجته بشكل صحيح. لا تنسَ تضمين الأسقف والدرج في خطة الدهان، فهذه الأجزاء غالباً ما تُهمل في فلل الرميثية القديمة رغم أنها تؤثر بوضوح على المظهر العام للمنزل."],
    commonJobs: ["أغلب طلبات الرميثية دهان فيلا كاملة لم تُدهن منذ سنوات طويلة، مع معالجة تشققات الجص وإعادة دهان الأسقف والدرج المهملة عادة، خصوصاً في القطع القريبة من حديقة الرميثية وشارع المها."],
    coverage: ["نغطي قطعة 2 وقطعة 6 وقطعة 9 وشارع المطاعم بالكامل، ونصل أيضاً إلى حولي والسالمية وسلوى وبيان والجابرية المجاورة."],
    faq: [{"q":"بيتنا في الرميثية ما انصبغ من سنين وفيه تشققات بالجص، وش الحل؟","a":"نبدأ بكشط التشققات ومعالجتها بمعجون جص مناسب، ثم تأسيس ودهان طبقتين، ونهتم أيضاً بدهان الأسقف والدرج التي غالباً تُهمل مع مرور الوقت."},{"q":"كم يستغرق دهان فيلا كاملة في الرميثية؟","a":"الفيلا المتوسطة إلى الكبيرة في الرميثية تُنجز عادة خلال 3 إلى 5 أيام مع تغطية كاملة للأثاث والأرضيات أثناء التنفيذ."}],
    priceList: [
      { service: "دهان فيلا كاملة", price: "من 230 د.ك", note: "شامل المواد" },
      { service: "دهان أسقف ودرج", price: "من 50 د.ك", note: "حسب المساحة" },
      { service: "معالجة تشققات الجص", price: "من 20 د.ك", note: "حسب الحجم" },
      { service: "دهان خارجي للفيلا", price: "1.5 – 2.5 د.ك / م²", note: "حسب نوع الدهان" },
    ],
  },
  "sabaagh-mubarak-al-kabeer": {
    neighbourhoods: ["قطعة 1","قطعة 4","قطعة 7"],
    landmarks: ["جمعية مبارك الكبير","حديقة مبارك الكبير"],
    propertyMix: "بيوت حكومية وفلل عائلية كبيرة",
    geo: { latitude: 29.2122, longitude: 48.0606 },
    intro: ["مبارك الكبير منطقة عائلية هادئة تغلب عليها البيوت الحكومية والفلل الكبيرة، وطلبات \u003cstrong>صباغ مبارك الكبير\u003c/strong> عادة دهان فيلا كاملة أو دور كامل قرب جمعية مبارك الكبير وحديقتها، مع ديكورات جبس في المجالس ودهان خارجي للأسوار والواجهات.","ننفّذ الدهان في مبارك الكبير على مراحل: صنفرة، تجهيز الجدران بالمعجون والتأسيس، ثم طبقتي تشطيب داخلي وخارجي، مع خيار الدهانات الديكورية للجدران المميزة. معاينة وعرض سعر مجاني على 90998489."],
    whyUs: ["مبارك الكبير محافظة هادئة تغلب عليها البيوت الحكومية والفلل العائلية الكبيرة قرب جمعية مبارك الكبير وحديقتها، وطلبات الصباغة فيها عادة مرتبطة بمناسبة معينة — دخول بيت جديد أو تجديد قبل زواج — أكثر من كونها صيانة دورية سريعة كما في مناطق الشقق المستأجرة. هذا يعني أن العميل في مبارك الكبير غالباً يريد تنفيذاً كاملاً ومدروساً للفيلا بأكملها وليس دهان غرفة أو جدار واحد."],
    localTips: ["عند التخطيط لدهان فيلا في مبارك الكبير قبل مناسبة، حدد موعد التنفيذ قبل المناسبة بوقت كافٍ لا يقل عن أسبوع لتفادي أي ضغط في اللحظة الأخيرة، خصوصاً إذا كنت تضيف ديكورات جبس للمجلس. أسوار وواجهات فلل مبارك الكبير تحتاج دهاناً خارجياً متيناً يتحمل الشمس المباشرة معظم اليوم دون أن يفقد لونه خلال سنة أو سنتين."],
    commonJobs: ["أغلب طلبات مبارك الكبير دهان فيلا أو دور كامل قرب جمعية مبارك الكبير وحديقتها، غالباً قبل مناسبة أو دخول بيت جديد، مع طلبات متكررة لديكور جبس المجلس ودهان أسوار وواجهات خارجية متينة."],
    coverage: ["نغطي جميع قطع مبارك الكبير من قطعة 1 وقطعة 4 إلى قطعة 7، ونصل أيضاً إلى صباح السالم المجاورة ضمن محافظة مبارك الكبير."],
    faq: [{"q":"كم سعر دهان فيلا كاملة في مبارك الكبير؟","a":"يبدأ دهان فيلا كاملة في مبارك الكبير من 210 دنانير حسب المساحة وعدد الأدوار، ويشمل صنفرة ومعجون وتأسيس وطبقتي تشطيب."},{"q":"أبغى ديكور جبس مميز لمجلس بيتي في مبارك الكبير، تنفذون؟","a":"نعم، ننفذ ديكورات الجبس والجدران المميزة في المجالس مع الدهان، ونعطيك عرض سعر يفصل الدهان عن أعمال الديكور."}],
    priceList: [
      { service: "دهان فيلا كاملة", price: "من 210 د.ك", note: "شامل المواد" },
      { service: "دهان دور كامل", price: "من 140 د.ك", note: "شامل المواد" },
      { service: "ديكور جبس للمجلس", price: "من 60 د.ك", note: "حسب التصميم" },
      { service: "دهان خارجي للواجهة", price: "1.5 – 2.5 د.ك / م²", note: "حسب نوع الدهان" },
    ],
  },
  "sabaagh-jaber-alahmad": {
    neighbourhoods: ["قطعة 1","قطعة 3","قطعة 5","المنطقة الاستثمارية"],
    landmarks: ["مجمع الأفنيوز - الوصلة القريبة","جمعية جابر الأحمد"],
    propertyMix: "فلل حديثة نظام موحّد وشقق استثمارية جديدة",
    geo: { latitude: 29.2714, longitude: 47.9186 },
    intro: ["ضاحية جابر الأحمد من المناطق الحديثة في محافظة العاصمة، وبيوتها ذات تصميم موحّد نسبياً، وطلبات \u003cstrong>صباغ جابر الأحمد\u003c/strong> غالباً دهان فيلا مستلمة حديثاً بالكامل، أو دهان شقة في العمارات الاستثمارية الجديدة قرب مجمع الأفنيوز قبل السكن.","ننفّذ في جابر الأحمد دهان الفلل الجديدة بتجهيز كامل للجدران: معجون وتأسيس ثم طبقتا تشطيب داخلي وخارجي، مع ديكورات جبس وجدران مميزة حسب الطلب. الشقة تُنجز في يوم إلى يومين. معاينة مجانية على 90998489."],
    whyUs: ["جابر الأحمد من أحدث ضواحي محافظة العاصمة، وفللها ذات تصميم شبه موحّد وحديث التسليم، فمعظم من يبحث عن صباغ في جابر الأحمد إما يستلم فيلا جديدة تحتاج معجوناً وتأسيساً كاملاً من الصفر، أو ينتقل إلى شقة استثمارية جديدة قرب مجمع الأفنيوز قبل السكن مباشرة. هذا يختلف عن مناطق البيوت القديمة التي تحتاج معالجة رطوبة وتشققات، فالتركيز في جابر الأحمد ينصبّ على إخراج الجدران بشكل ناعم واحترافي من أول مرة."],
    localTips: ["عند دهان فيلا جديدة في جابر الأحمد، لا تستعجل الانتقال لطبقة التشطيب قبل إنهاء المعجون والتأسيس بشكل كامل، لأن أي إهمال في هذه المرحلة يظهر لاحقاً كخطوط أو فقاعات تحت الدهان. إذا كنت تفكر في ديكورات جبس أو جدران مميزة للمجلس في جابر الأحمد، ناقش التصميم مع الصباغ قبل البدء بالدهان العادي حتى يتم التنسيق بين المرحلتين بدل تكرار العمل مرتين."],
    commonJobs: ["أغلب الطلبات في جابر الأحمد لدهان فيلا مستلمة حديثاً بالكامل من الداخل والخارج، مع معجون وتأسيس شامل لأن المبنى جديد تماماً، يليها دهان شقق العمارات الاستثمارية الجديدة قرب مجمع الأفنيوز قبل السكن مباشرة، وأحياناً طلبات ديكور جبس للمجلس في نفس الوقت."],
    coverage: ["نغطي جميع قطع جابر الأحمد من قطعة 1 وقطعة 3 وقطعة 5 إلى المنطقة الاستثمارية بالكامل، ونصل إلى باقي ضواحي محافظة العاصمة المجاورة عند الطلب."],
    faq: [{"q":"استلمت فيلا جديدة في جابر الأحمد، هل تحتاج معجوناً كاملاً قبل الدهان؟","a":"نعم، الفلل المستلمة حديثاً تحتاج معجوناً كاملاً وتأسيساً قبل طبقتي التشطيب النهائيتين حتى تظهر الجدران ناعمة بدون فقاعات أو خطوط."},{"q":"كم يستغرق دهان فيلا جديدة كاملة في جابر الأحمد؟","a":"الفيلا الجديدة في جابر الأحمد تُنجز عادة خلال 4 إلى 6 أيام حسب المساحة، شاملة المعجون والتأسيس وأي ديكورات جبس مطلوبة."}],
    priceList: [
      { service: "دهان فيلا جديدة كاملة", price: "من 240 د.ك", note: "شامل معجون وتأسيس" },
      { service: "دهان شقة استثمارية جديدة", price: "من 70 د.ك", note: "شامل المواد" },
      { service: "ديكور جبس وجدران مميزة", price: "من 60 د.ك", note: "حسب التصميم" },
      { service: "دهان خارجي للفيلا", price: "1.5 – 2.5 د.ك / م²", note: "حسب نوع الدهان" },
    ],
  },
  "sabaagh-alshuwaykh": {
    neighbourhoods: ["الشويخ السكنية","الشويخ التعليمية","الشويخ الصناعية","ميناء الشويخ"],
    landmarks: ["جامعة الكويت - الشويخ","ميناء الشويخ","مستشفى الأميري القريب"],
    propertyMix: "بيوت سكنية قديمة ومكاتب ومحلات ومخازن في المنطقة الصناعية",
    geo: { latitude: 29.3486, longitude: 47.9382 },
    intro: ["الشويخ منطقة مختلطة في محافظة العاصمة تجمع السكن والتعليم والصناعة، وطلبات \u003cstrong>صباغ الشويخ\u003c/strong> تتنوع بين دهان بيوت الشويخ السكنية القديمة، وتجهيز المكاتب والمحلات، ودهان المخازن والورش في الشويخ الصناعية.","ننفّذ في الشويخ دهان المكاتب والمحلات خارج أوقات الدوام، ودهان المخازن بمساحات كبيرة بأسعار بالمتر بعد تجهيز الجدران المعدنية أو الإسمنتية بالدهان الأساسي المناسب، إضافة إلى دهان البيوت السكنية داخلياً وخارجياً. معاينة مجانية على 90998489."],
    whyUs: ["الشويخ من أكثر مناطق الكويت تنوعاً، فهي تجمع الشويخ السكنية والتعليمية والصناعية في نطاق واحد، وهذا يعني أن طلبات الصباغة في الشويخ لا تقتصر على البيوت فقط بل تمتد إلى مكاتب ومحلات ومخازن وورش كبيرة في المنطقة الصناعية. التعامل مع هذا التنوع يحتاج صباغاً يعرف الفرق بين تجهيز جدار سكني عادي وتجهيز جدار معدني أو إسمنتي في مخزن، فكل نوع يحتاج دهاناً أساسياً مختلفاً قبل طبقة التشطيب."],
    localTips: ["إذا كنت تدير مخزناً أو ورشة في الشويخ الصناعية، اطلب من الصباغ تسعير العمل بالمتر المربع بعد معاينة فعلية لارتفاع السقف ونوع الجدار، لأن هذا يختلف كثيراً عن تسعير الشقق السكنية. لمكاتب الشويخ التعليمية أو التجارية، الأفضل تنفيذ الدهان مساءً أو في عطلة نهاية الأسبوع مع تغطية كاملة للأثاث والأجهزة قبل البدء."],
    commonJobs: ["تنوّع طلبات الشويخ يشمل دهان بيوت الشويخ السكنية القديمة، وتجهيز مكاتب ومحلات في الشويخ التعليمية مساءً، إلى جانب دهان مخازن وورش كبيرة بالمتر المربع في الشويخ الصناعية قرب ميناء الشويخ."],
    coverage: ["نصل إلى الشويخ السكنية والتعليمية والصناعية وميناء الشويخ بالكامل، ونخدم أيضاً باقي مناطق محافظة العاصمة عند الطلب."],
    faq: [{"q":"عندي مخزن كبير في الشويخ الصناعية، كيف تحسبون السعر؟","a":"نحسب دهان المخازن والورش بالمتر المربع حسب المساحة وارتفاع السقف ونوع الدهان، ونقدم عرضاً مكتوباً بعد المعاينة."},{"q":"عندي مكتب في الشويخ التعليمية وأبغى دهانه بدون تعطيل الدوام، ممكن؟","a":"نعم، ننفذ دهان المكاتب في الشويخ مساءً أو في عطلة نهاية الأسبوع، ونغطي الأثاث والأجهزة بالكامل قبل البدء."}],
    priceList: [
      { service: "دهان بيت سكني قديم", price: "من 160 د.ك", note: "داخلي كامل" },
      { service: "دهان مكتب", price: "من 45 د.ك", note: "تنفيذ خارج الدوام" },
      { service: "دهان مخزن/ورشة", price: "1 – 2 د.ك / م²", note: "حسب المساحة والارتفاع" },
      { service: "دهان محل تجاري", price: "من 55 د.ك", note: "حسب المساحة" },
    ],
  },
  "sabaagh-almanqaf": {
    neighbourhoods: ["بلوك 1","بلوك 3","بلوك 4","ساحل المنقف"],
    landmarks: ["ميناء المنقف لصيد السمك","ساحل المنقف"],
    propertyMix: "شقق مؤجرة وعمارات مع بيوت قديمة قرب الساحل",
    geo: { latitude: 29.1053, longitude: 48.1269 },
    intro: ["المنقف منطقة ساحلية في محافظة الأحمدي عالية الكثافة السكانية، وطلبات \u003cstrong>صباغ المنقف\u003c/strong> غالباً دهان شقق مؤجرة بسرعة وسعر مناسب، مع معالجة الرطوبة والملوحة في المباني القريبة من ساحل المنقف وميناء الصيد.","ننفّذ في المنقف دهان الشقق في يوم واحد بدهانات داخلية مقاومة للرطوبة بعد تجهيز الجدران، مع خيار العمالة فقط. معاينة وعرض سعر مجاني في المنقف والمهبولة والفحيحيل على 90998489."],
    whyUs: ["المنقف منطقة ساحلية عالية الكثافة السكانية في محافظة الأحمدي، وقربها من الساحل وميناء الصيد يجعل مشكلة الرطوبة والملوحة في شقق المنقف أكثر تكراراً من أي منطقة داخلية. سكان المنقف الذين يبحثون عن صباغ غالباً يواجهون رطوبة متكررة في نفس الجدار رغم الدهان السابق، وهذا تحديداً ما يميز الطلب في المنقف عن باقي مناطق الأحمدي البعيدة عن الساحل."],
    localTips: ["إذا كانت شقتك في المنقف تعاني من رطوبة متكررة رغم دهانها أكثر من مرة، اطلب من الصباغ فحص مصدر الرطوبة أولاً بدل تكرار نفس الدهان العادي فوق المشكلة. دهان مضاد للفطريات مع طبقة عزل قبل التشطيب هو الحل الأنسب لشقق المنقف القريبة من ساحل المنطقة وميناء الصيد."],
    commonJobs: ["الطلب الأكبر في المنقف دهان شقق للتأجير بسرعة وسعر مناسب في بلوك 1 وبلوك 3 وبلوك 4، إلى جانب معالجة متكررة للرطوبة والملوحة في المباني القريبة من ساحل المنقف وميناء الصيد."],
    coverage: ["نصل إلى جميع بلوكات المنقف وساحلها، ونخدم أيضاً الأحمدي والفحيحيل والمهبولة المجاورة ضمن نفس جدول المعاينة."],
    faq: [{"q":"شقتي في المنقف قريبة من الساحل وفيها رطوبة دايم، وش الحل النهائي؟","a":"نستخدم دهاناً مضاداً للفطريات مع طبقة عزل قبل التشطيب، وهذا يقلل رجوع الرطوبة بشكل كبير مقارنة بالدهان العادي، خصوصاً في شقق بلوكات المنقف القريبة من الساحل."},{"q":"عندي عدة شقق للتأجير في المنقف، تقدرون تدهنون بسعر مخفّض؟","a":"نعم، نوفّر سعراً خاصاً عند دهان أكثر من شقة في نفس العمارة بالمنقف مع جدول تنفيذ متتابع لتجهيزها للتأجير بسرعة."}],
    priceList: [
      { service: "دهان شقة غرفتين", price: "من 60 د.ك", note: "شامل المواد" },
      { service: "دهان شقة 3 غرف", price: "من 85 د.ك", note: "شامل المواد" },
      { service: "عمالة فقط (بدون مواد)", price: "من 35 د.ك", note: "إذا وفّرت الدهان بنفسك" },
      { service: "معالجة رطوبة وملوحة", price: "من 20 د.ك", note: "حسب الحجم" },
    ],
  },
  "sabaagh-almahboula": {
    neighbourhoods: ["بلوك 1","بلوك 2","منطقة أبراج المهبولة","ساحل المهبولة"],
    landmarks: ["أبراج المهبولة السكنية","ساحل المهبولة"],
    propertyMix: "أبراج سكنية وشقق مؤجرة كثيفة قرب البحر",
    geo: { latitude: 29.1491, longitude: 48.119 },
    intro: ["المهبولة منطقة أبراج وشقق مؤجرة كثيفة في محافظة الأحمدي، وأغلب ما يطلبه سكانها من \u003cstrong>صباغ المهبولة\u003c/strong> دهان شقق في الأبراج قبل السكن أو التأجير، مع معالجة الرطوبة الناتجة عن قرب البحر وسوء التهوية في بعض الأبراج.","ننفّذ في المهبولة دهان شقق الأبراج بسرعة ونظافة، ونعالج الرطوبة والعفن في الحمامات والمطابخ بتجهيز الجدران ودهانات داخلية مضادة للفطريات. معاينة مجانية على 90998489."],
    whyUs: ["المهبولة منطقة أبراج وشقق مؤجرة كثيفة قرب البحر في محافظة الأحمدي، وأغلب طلبات الصباغة فيها تتركز على الأبراج السكنية تحديداً حيث تجتمع مشكلتان معاً: رطوبة قادمة من قرب البحر، وسوء تهوية طبيعي في بعض الوحدات الداخلية للبرج. هذا المزيج يجعل العفن في حمامات المهبولة مشكلة متكررة أكثر من أي منطقة أخرى، ويحتاج تعاملاً مختلفاً عن مجرد إعادة الدهان العادي."],
    localTips: ["قبل دهان أي حمام أو مطبخ في أبراج المهبولة يظهر عليه عفن، لا بد من كشط العفن ومعالجة سببه أولاً — غالباً سوء تهوية أو تسريب بسيط — ثم استخدام دهان مضاد للفطريات مخصص لهذه الحالة. لشقق المهبولة المعروضة للتأجير أو البيع، يُفضَّل دهان سريع خلال يوم واحد يعطي انطباعاً نظيفاً وجاهزاً للمعاينة مباشرة."],
    commonJobs: ["أكثر طلبات المهبولة دهان شقق الأبراج السكنية قبل السكن أو التأجير، مع معالجة متكررة للعفن والرطوبة في حمامات ومطابخ الأبراج القريبة من ساحل المهبولة."],
    coverage: ["نغطي بلوك 1 وبلوك 2 ومنطقة الأبراج السكنية وساحل المهبولة بالكامل، ونصل أيضاً إلى الأحمدي والفحيحيل والمنقف المجاورة."],
    faq: [{"q":"شقتي في برج بالمهبولة فيها عفن بالحمام، تقدرون تحلونها نهائياً؟","a":"نعم، نكشط العفن أولاً ونعالج السبب (غالباً سوء تهوية أو تسريب بسيط)، ثم نستخدم دهاناً مضاداً للفطريات مقاوماً للرطوبة يمنع رجوع العفن."},{"q":"كم سعر دهان شقة في أبراج المهبولة؟","a":"يبدأ دهان شقة غرفتين في المهبولة من 60 ديناراً وشقة 3 غرف من 85 ديناراً شامل المواد، مع إمكانية التنفيذ السريع خلال يوم واحد."}],
    priceList: [
      { service: "دهان شقة غرفتين", price: "من 60 د.ك", note: "شامل المواد" },
      { service: "دهان شقة 3 غرف", price: "من 85 د.ك", note: "شامل المواد" },
      { service: "معالجة عفن ورطوبة الحمام", price: "من 20 د.ك", note: "دهان مضاد للفطريات" },
      { service: "دهان شقة قبل التأجير", price: "من 55 د.ك", note: "تنفيذ سريع خلال يوم" },
    ],
  },
  "sabaagh-subah-alanasir": {
    neighbourhoods: ["قطعة 1","قطعة 3","قطعة 5"],
    landmarks: ["جمعية صباح الناصر","حديقة صباح الناصر"],
    propertyMix: "بيوت شعبية وفلل عائلية متوسطة",
    geo: { latitude: 29.243, longitude: 47.847 },
    intro: ["صباح الناصر منطقة عائلية في محافظة الفروانية تغلب عليها البيوت الشعبية والفلل المتوسطة، وطلبات \u003cstrong>صباغ صباح الناصر\u003c/strong> عادة تجديد بيت العائلة من الداخل بعد سنوات، أو دهان دور للإيجار قرب جمعية صباح الناصر وحديقتها.","ننفّذ في صباح الناصر دهاناً اقتصادياً داخلياً نظيفاً بجودة جيدة، مع تجهيز الجدران ومعالجة تقشير الدهان القديم والتشققات قبل التأسيس والتشطيب. معاينة وعرض سعر مجاني على 90998489."],
    whyUs: ["صباح الناصر منطقة عائلية في محافظة الفروانية تغلب عليها البيوت الشعبية والفلل المتوسطة، وأغلب طلبات الصباغة فيها مرتبطة بتجديد بيت العائلة بعد سنوات طويلة من آخر دهان، أو تجهيز دور للإيجار قرب جمعية صباح الناصر وحديقتها. هذا يختلف عن مناطق الشقق سريعة الدوران، فالعميل في صباح الناصر يبحث عادة عن تجديد شامل واقتصادي أكثر من صيانة سريعة ومتكررة."],
    localTips: ["إذا لم يُدهن بيتك في صباح الناصر منذ سنوات، توقّع أن تحتاج معالجة تقشير وتشققات قبل أي طبقة تشطيب جديدة، فهذه المرحلة ضرورية حتى لا يتكرر التقشير بعد فترة قصيرة. للدور المخصص للإيجار في صباح الناصر، يمكن الاعتماد على دهان اقتصادي نظيف ينهي العمل خلال يومين إلى ثلاثة أيام دون التأثير على الجودة العامة للمكان."],
    commonJobs: ["الطلب الأساسي في صباح الناصر تجديد بيت العائلة بعد سنوات طويلة من آخر دهان، أو تجهيز دور للإيجار قرب جمعية صباح الناصر وحديقتها، مع معالجة متكررة لتقشير الدهان القديم والتشققات."],
    coverage: ["نصل إلى جميع قطع صباح الناصر من قطعة 1 وقطعة 3 إلى قطعة 5، ونخدم أيضاً الفروانية وخيطان المجاورتين."],
    faq: [{"q":"أبغى دهان بيت اقتصادي في صباح الناصر بدون التنازل عن الجودة، ينفع؟","a":"نعم، نقدم في صباح الناصر دهاناً اقتصادياً نظيفاً بمواد جيدة، ونعالج تقشير الدهان القديم والتشققات قبل التنفيذ حتى تدوم النتيجة."},{"q":"عندي دور للإيجار في صباح الناصر، كم يستغرق دهانه؟","a":"الدور المتوسط في صباح الناصر يُنجز عادة خلال يومين إلى ثلاثة أيام، ونسلّمه جاهزاً للتأجير مباشرة."}],
    priceList: [
      { service: "دهان بيت شعبي كامل", price: "من 140 د.ك", note: "شامل المواد" },
      { service: "دهان دور للإيجار", price: "من 110 د.ك", note: "شامل المواد" },
      { service: "معالجة تقشير وتشققات", price: "من 15 د.ك", note: "حسب الحجم" },
      { service: "عمالة فقط (بدون مواد)", price: "من 35 د.ك", note: "إذا وفّرت الدهان بنفسك" },
    ],
  },
};

export const PRIORITY_REGION_SLUGS = Object.keys(PRIORITY_CONTENT);

/** Merge base geo data with any hand-written priority content for the slug. */
export function getRegionContent(slug: string): RegionContent | null {
  const clean = slug.replace(/^\/+/, '');
  const base = BASE[clean];
  if (!base) return null;
  return { ...base, ...(PRIORITY_CONTENT[clean] ?? {}) };
}

/** Every slug that has a content entry (all regions in data/regions.json). */
export const REGION_CONTENT_SLUGS = Object.keys(BASE);

/**
 * Generic area FAQ. Takes the real per-area `propertyMix` (already
 * hand-written for every priority area, previously unused anywhere on the
 * page) and works it into the two answers where it actually changes the
 * advice — cost and duration genuinely depend on whether the area is mostly
 * apartment towers or family villas, so this isn't padding.
 */
export function genericRegionFaqs(area: string, propertyMix?: string): RegionFaq[] {
  const mixClause = propertyMix ? ` — في ${area} يغلب على العقارات طابع ${propertyMix}` : "";
  return [
    {
      q: `كم سعر الصباغ في ${area}؟`,
      a: `تختلف تكلفة الصباغ في ${area} حسب مساحة المكان، وعدد الغرف، وحالة الجدران، ونوع الدهان وعدد الطبقات المطلوبة${mixClause}. يمكن تحديد التكلفة بعد معرفة مساحة المكان وحالته وتقديم عرض سعر واضح قبل التنفيذ.`,
    },
    {
      q: `هل يوجد صباغ في ${area} مع المواد؟`,
      a: `نعم، يمكن تنفيذ خدمة الصباغ في ${area} شاملة المواد، كما يمكن تنفيذ العمالة فقط إذا كانت الدهانات متوفرة لديك. يتم توضيح المواد المطلوبة وتكلفة التنفيذ قبل بدء العمل.`,
    },
    {
      q: `هل تقدمون معالجة الرطوبة والتشققات قبل الدهان في ${area}؟`,
      a: `نعم، يمكن تجهيز الجدران قبل الدهان من خلال معالجة التشققات وتقشير الدهان وآثار الرطوبة حسب حالة السطح، ثم تنفيذ المعجون والتأسيس والدهان المناسب.`,
    },
    {
      q: `كم يستغرق دهان شقة كاملة في ${area}؟`,
      a: `تختلف مدة دهان الشقة في ${area} حسب المساحة وحالة الجدران وعدد الطبقات المطلوبة${mixClause}. قد يستغرق العمل من يوم إلى يومين في الحالات البسيطة، بينما تحتاج الجدران التي تتطلب معالجة وتجهيزًا إضافيًا إلى وقت أطول.`,
    },
    {
      q: `هل يمكن تنفيذ دهان ديكوري في ${area}؟`,
      a: `نعم، يمكن تنفيذ الدهانات الديكورية والجدران المميزة حسب التصميم المطلوب، مع اختيار الألوان والخامات المناسبة للمجلس أو غرفة المعيشة أو أي مساحة داخلية.`,
    },
    {
      q: `كيف أحجز صباغ في ${area}؟`,
      a: `يمكنك الاتصال على 90998489 أو التواصل عبر واتساب لتحديد موعد مناسب ومعرفة تفاصيل المكان ونوع الدهان المطلوب، ثم تحديد التكلفة المناسبة قبل التنفيذ.`,
    },
  ];
}

/** Area-specific FAQ (if any) followed by the generic set — the exact list the
 *  location page renders AND feeds into its FAQPage JSON-LD. */
export function buildRegionFaqs(content: RegionContent): RegionFaq[] {
  return [...(content.faq ?? []), ...genericRegionFaqs(content.area, content.propertyMix)];
}

/** Fallback price list for areas without a hand-written one. */
export function genericRegionPriceList(area: string): RegionPriceItem[] {
  return [
    { service: "دهان غرفة واحدة", price: "من 25 د.ك", note: "شامل المواد" },
    { service: `دهان شقة 3 غرف في ${area}`, price: "من 80 د.ك", note: "شامل المواد" },
    { service: "دهان فيلا كاملة", price: "من 200 د.ك", note: "حسب المساحة" },
    { service: "دهان متر مربع", price: "1.5 – 3 د.ك", note: "حسب نوع الدهان" },
    { service: "تركيب ورق جدران", price: "من 4 د.ك / م²", note: "شامل التركيب" },
    { service: "معالجة التشققات", price: "من 15 د.ك", note: "حسب الحجم" },
  ];
}

/** Area's own price list if hand-written, else the generic fallback — the
 *  exact list the location page renders in its pricing section. */
export function buildRegionPriceList(content: RegionContent): RegionPriceItem[] {
  return content.priceList?.length ? content.priceList : genericRegionPriceList(content.area);
}
