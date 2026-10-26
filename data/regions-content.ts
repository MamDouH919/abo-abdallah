/**
 * Per-area content for /regions/{slug}. Only the PRIORITY_CONTENT slugs (one
 * hub per governorate, the highest-demand areas, and the 12 areas restored on
 * 2026-10-26 after the URL migration) are live pages — see data/regions.json
 * and data/redirects.json. The other BASE-only entries used to render as thin,
 * templated duplicate pages (72-96% text overlap between them); they're kept
 * here only as geo reference data. Their old URLs 301 to the /regions hub
 * (not to an unrelated area). Do not add a live route for a BASE-only slug
 * without also writing real PRIORITY_CONTENT for it.
 *
 * `getRegionContent(slug)` merges BASE + LIVE_NEARBY + PRIORITY_CONTENT.
 * `other-pages/Regions.tsx` builds the page from the result.
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
  "sabaagh-alshaab": { area: "الشعب", governorate: "حولي", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alnahda": { area: "النهضة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-aldohah": { area: "الدوحة", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alsulaybikhat": { area: "الصليبيخات", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-jaber-alahmad": { area: "جابر الأحمد", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alshuwaykh": { area: "الشويخ", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "sabaagh-alrai": { area: "الري", governorate: "العاصمة", nearby: ["sabaagh-asharq", "sabaagh-alshamiya", "sabaagh-alqadesiya", "sabaagh-aldaiya", "sabaagh-aldasma", "sabaagh-almansouriya", "sabaagh-alnuzha", "sabaagh-kaifan"] },
  "hawally-painter": { area: "حولي", governorate: "حولي", nearby: ["sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-alsaalimia": { area: "السالمية", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-alrumaithiya": { area: "الرميثية", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-salwa": { area: "سلوى", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-bayan": { area: "بيان", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-mishref": { area: "مشرف", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-aljabriya", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-aljabriya": { area: "الجابرية", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-hateen", "sabaagh-alzahraa"] },
  "sabaagh-hateen": { area: "حطين", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-alzahraa"] },
  "sabaagh-alzahraa": { area: "الزهراء", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-al-salam": { area: "السلام", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-alsiddiq": { area: "الصديق", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-alshuhadaa": { area: "الشهداء", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-janoub-alsura": { area: "جنوب السرة", governorate: "حولي", nearby: ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alrumaithiya", "sabaagh-salwa", "sabaagh-bayan", "sabaagh-mishref", "sabaagh-aljabriya", "sabaagh-hateen"] },
  "sabaagh-alfarwaniyah": { area: "الفروانية", governorate: "الفروانية", nearby: ["sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfirdous", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-khaitan": { area: "خيطان", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfirdous", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-alaardiya": { area: "العارضية", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfirdous", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-ishbiliya": { area: "إشبيلية", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-alfirdous", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-alfirdous": { area: "الفردوس", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-subah-alanasir", "sabaagh-abdullah-mubarak"] },
  "sabaagh-subah-alanasir": { area: "صباح الناصر", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfirdous", "sabaagh-abdullah-mubarak"] },
  "sabaagh-abdullah-mubarak": { area: "عبدالله المبارك", governorate: "الفروانية", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfirdous", "sabaagh-subah-alanasir"] },
  "sabaagh-alqurain": { area: "القرين", governorate: "مبارك الكبير", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alrai", "sabaagh-alandalus", "sabaagh-ishbiliya", "sabaagh-alfirdous", "sabaagh-subah-alanasir"] },
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
  "sabaagh-sabah-alahmad": { area: "صباح الأحمد", governorate: "الأحمدي", nearby: ["sabaagh-alwafra", "sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf"] },
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
  "sabaagh-mubarak-al-kabeer": { area: "مبارك الكبير", governorate: "مبارك الكبير", nearby: ["sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-sabah-alsaalim": { area: "صباح السالم", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-aladaan": { area: "العدان", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-alqurawan": { area: "القرين الجنوبي", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-abu-ftaira": { area: "أبو فطيرة", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-almasayel", "sabaagh-subhan", "sabaagh-mubarak"] },
  "sabaagh-subhan": { area: "صبحان", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-mubarak"] },
  "sabaagh-mubarak": { area: "مبارك", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan"] },
  "sabaagh-al-fintas": { area: "الفينطيس", governorate: "مبارك الكبير", nearby: ["sabaagh-mubarak-al-kabeer", "sabaagh-sabah-alsaalim", "sabaagh-aladaan", "sabaagh-alqurain", "sabaagh-alqurawan", "sabaagh-abu-ftaira", "sabaagh-almasayel", "sabaagh-subhan"] },
};

/**
 * Real neighbours for every live region page, restricted to slugs that are
 * themselves live (4–6 each, nearest first). Overrides the BASE `nearby`
 * lists, which repeat the same governorate list for every area and mostly
 * point at slugs that no longer route.
 */
const LIVE_NEARBY: Record<string, string[]> = {
  // العاصمة
  "sabaagh-alshamiya": ["sabaagh-alrawdah", "sabaagh-alqadesiya", "sabaagh-alshuwaykh", "sabaagh-alsulaybikhat"],
  "sabaagh-alrawdah": ["sabaagh-alqadesiya", "sabaagh-alshamiya", "sabaagh-aljabriya", "hawally-painter", "sabaagh-alshuwaykh"],
  "sabaagh-alqadesiya": ["sabaagh-alrawdah", "sabaagh-alshamiya", "sabaagh-alshaab", "hawally-painter", "sabaagh-alshuwaykh"],
  "sabaagh-alsulaybikhat": ["sabaagh-jaber-alahmad", "sabaagh-alshuwaykh", "sabaagh-alshamiya", "sabaagh-alaardiya", "sabaagh-subah-alanasir"],
  "sabaagh-alshuwaykh": ["sabaagh-alshamiya", "sabaagh-alsulaybikhat", "sabaagh-alrawdah", "sabaagh-jaber-alahmad", "sabaagh-alfarwaniyah"],
  "sabaagh-jaber-alahmad": ["sabaagh-alsulaybikhat", "sabaagh-aljahraa", "sabaagh-alshuwaykh", "sabaagh-subah-alanasir", "sabaagh-alaardiya"],
  // حولي
  "hawally-painter": ["sabaagh-alshaab", "sabaagh-alsaalimia", "sabaagh-aljabriya", "sabaagh-alrumaithiya", "sabaagh-bayan"],
  "sabaagh-alshaab": ["hawally-painter", "sabaagh-alsaalimia", "sabaagh-alqadesiya", "sabaagh-aljabriya"],
  "sabaagh-alsaalimia": ["sabaagh-alrumaithiya", "hawally-painter", "sabaagh-alshaab", "sabaagh-salwa", "sabaagh-bayan"],
  "sabaagh-alrumaithiya": ["sabaagh-alsaalimia", "sabaagh-salwa", "sabaagh-bayan", "hawally-painter", "sabaagh-aljabriya"],
  "sabaagh-salwa": ["sabaagh-alrumaithiya", "sabaagh-bayan", "sabaagh-alsaalimia", "sabaagh-sabah-alsaalim"],
  "sabaagh-bayan": ["sabaagh-salwa", "sabaagh-alrumaithiya", "sabaagh-aljabriya", "sabaagh-alshuhadaa", "sabaagh-alzahraa"],
  "sabaagh-aljabriya": ["hawally-painter", "sabaagh-bayan", "sabaagh-alrumaithiya", "sabaagh-alsaalimia", "sabaagh-alshuhadaa"],
  "sabaagh-alshuhadaa": ["sabaagh-alzahraa", "sabaagh-aljabriya", "sabaagh-bayan", "sabaagh-salwa", "hawally-painter"],
  "sabaagh-alzahraa": ["sabaagh-alshuhadaa", "sabaagh-aljabriya", "sabaagh-bayan", "hawally-painter"],
  // الفروانية
  "sabaagh-alfarwaniyah": ["sabaagh-khaitan", "sabaagh-alaardiya", "sabaagh-alfirdous", "sabaagh-subah-alanasir"],
  "sabaagh-khaitan": ["sabaagh-alfarwaniyah", "sabaagh-alaardiya", "sabaagh-alfirdous", "sabaagh-subah-alanasir"],
  "sabaagh-alaardiya": ["sabaagh-alfirdous", "sabaagh-subah-alanasir", "sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alsulaybikhat"],
  "sabaagh-alfirdous": ["sabaagh-subah-alanasir", "sabaagh-alaardiya", "sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-alsulaybikhat"],
  "sabaagh-subah-alanasir": ["sabaagh-alfirdous", "sabaagh-alaardiya", "sabaagh-alfarwaniyah", "sabaagh-alsulaybikhat", "sabaagh-jaber-alahmad"],
  // الجهراء
  "sabaagh-aljahraa": ["sabaagh-jaber-alahmad", "sabaagh-alsulaybikhat", "sabaagh-subah-alanasir", "sabaagh-alfirdous"],
  // مبارك الكبير
  "sabaagh-mubarak-al-kabeer": ["sabaagh-sabah-alsaalim", "sabaagh-alqurain", "sabaagh-salwa", "sabaagh-bayan"],
  "sabaagh-sabah-alsaalim": ["sabaagh-alqurain", "sabaagh-mubarak-al-kabeer", "sabaagh-salwa", "sabaagh-alfhahil"],
  "sabaagh-alqurain": ["sabaagh-sabah-alsaalim", "sabaagh-mubarak-al-kabeer", "sabaagh-alfhahil", "sabaagh-almahboula", "sabaagh-al-ahmadi"],
  // الأحمدي
  "sabaagh-al-ahmadi": ["sabaagh-alfhahil", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-alqurain", "sabaagh-sabah-alahmad"],
  "sabaagh-alfhahil": ["sabaagh-al-ahmadi", "sabaagh-almanqaf", "sabaagh-almahboula", "sabaagh-alqurain"],
  "sabaagh-almanqaf": ["sabaagh-alfhahil", "sabaagh-almahboula", "sabaagh-al-ahmadi", "sabaagh-alqurain"],
  "sabaagh-almahboula": ["sabaagh-almanqaf", "sabaagh-alfhahil", "sabaagh-al-ahmadi", "sabaagh-alqurain", "sabaagh-sabah-alsaalim"],
  "sabaagh-sabah-alahmad": ["sabaagh-alwafra", "sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf"],
  "sabaagh-alwafra": ["sabaagh-sabah-alahmad", "sabaagh-al-ahmadi", "sabaagh-alfhahil", "sabaagh-almanqaf"],
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
  "hawally-painter": {
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
  // ── Restored 2026-10-26 (pages deleted in the URL migration) ──────────────
  "sabaagh-alfirdous": {
    metaTitle: "صباغ الفردوس | أفضل معلم صباغ في الفردوس",
    metaDescription: "صباغ الفردوس لدهان البيوت والأدوار المؤجرة والملاحق، معالجة تشققات البيوت القديمة ودهان الأسوار. معاينة وعرض سعر على 90998489.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5", "محيط الجمعية والسوق المركزي"],
    landmarks: ["جمعية الفردوس التعاونية", "الدائري السادس", "منطقة صباح الناصر المجاورة"],
    propertyMix: "بيوت عائلية حكومية قديمة توسّعت بأدوار وملاحق، وكثير منها مقسّم إلى أدوار مؤجرة",
    geo: { latitude: 29.2843, longitude: 47.9466 },
    intro: [
      "الفردوس من أكثر مناطق محافظة الفروانية ازدحاماً بالبيوت العائلية، وأغلب طلبات <strong>صباغ الفردوس</strong> تأتي من بيوت حكومية بُنيت قبل عقود ثم أُضيف إليها دور ثانٍ أو ملحق على السطح. هذا التوسع المتتابع يعني أن البيت الواحد قد يجمع جدراناً عمرها ثلاثون سنة وأخرى عمرها سنتان، ولكل منها معاملة مختلفة: الجدار القديم يحتاج كشطاً للدهان المتقشر ومعالجة تشققات الأسقف، والجدار الجديد في الملحق يحتاج معجوناً كاملاً وتأسيساً قبل أي لون.",
      "كثير من الملاك في الفردوس يؤجرون دوراً أو ملحقاً، لذلك نرتب العمل بحيث يُدهن الدور الفارغ بين مستأجر وآخر خلال يوم أو يومين، دون إزعاج العائلة الساكنة في الدور الآخر. نوفر الخدمة شاملة المواد أو بالعمالة فقط إذا اشتريت الدهان بنفسك، ونوضح لك قبل البدء ما الذي يحتاجه كل دور فعلاً حتى لا تدفع ثمن طبقات لا داعي لها. للمعاينة في الفردوس اتصل على 90998489 أو راسلنا على واتساب.",
    ],
    whyUs: [
      "مشكلة البيوت في الفردوس ليست اللون، بل ما تحت اللون. أعمال التوسعة المتكررة تترك فواصل بين البناء القديم والجديد تظهر على شكل شروخ طولية في الزوايا والأسقف، ودهانها بطبقة جديدة فقط يعيدها خلال أشهر. لهذا نبدأ في الفردوس بفتح الشرخ وتعبئته بمادة مرنة ثم شبك وتأسيس، وبعدها نختار نوع الدهان المناسب لكل غرفة. كما أن بيوت الفردوس المكتظة بالأطفال تحتاج دهاناً قابلاً للغسيل في الممرات وغرف الأطفال، وهو ما نقترحه عادة بدل الدهان المطفي العادي.",
    ],
    localTips: [
      "إذا كنت تجهّز دوراً للتأجير في الفردوس، اختر لوناً محايداً واحداً لكل الغرف ودهاناً نصف لامع في المطبخ والحمام؛ هذا يقلل التكلفة ويسهل الترميم بين مستأجر وآخر. وإذا كان الملحق على السطح، اطلب معالجة السقف من الرطوبة قبل الدهان لأن حرارة الصيف والأمطار القليلة في الشتاء تكشف أي ضعف في العزل. أما الأسوار الخارجية فيُفضل دهانها في الصباح الباكر في أشهر الصيف حتى لا يجف الدهان بسرعة ويترك آثار الفرشاة.",
    ],
    commonJobs: [
      "أكثر ما ننفذه في الفردوس: دهان دور كامل قبل التأجير، ودهان ملاحق السطح الجديدة من الصفر، ومعالجة شروخ الأسقف في البيوت الحكومية القديمة، ثم دهان الأسوار والبوابات الحديدية. يطلب كثير من الأهالي أيضاً دهان غرف الأطفال بألوان قابلة للغسيل وتركيب ورق جدران في المجالس.",
    ],
    coverage: [
      "نغطي جميع قطع الفردوس من القطعة 1 إلى آخر القطع السكنية، ونصل من نفس الفريق إلى صباح الناصر والعارضية والفروانية وخيطان. إذا كان لديك أكثر من بيت أو دور في الفردوس نرتب جدولاً واحداً لتنفيذها متتابعة.",
    ],
    faq: [
      { q: "كم سعر دهان دور كامل في الفردوس؟", a: "يبدأ دهان دور بثلاث غرف وصالة في الفردوس من نحو 90 ديناراً شامل المواد إذا كانت الجدران سليمة، ويزيد إذا احتاجت الأسقف معالجة شروخ أو احتاج الملحق معجوناً كاملاً. نحدد السعر النهائي بعد المعاينة." },
      { q: "عندي ملحق جديد على السطح، هل يحتاج تحضيراً خاصاً؟", a: "نعم، الجص الجديد في الملاحق يحتاج معجوناً كاملاً وصنفرة وطبقة تأسيس قبل اللون، وإلا يمتص الدهان بشكل غير متساوٍ ويظهر التبقع." },
      { q: "هل يمكن دهان الدور المؤجر والعائلة ساكنة في الدور الآخر؟", a: "نعم، نعمل في الدور الفارغ فقط ونغطي الدرج والمداخل المشتركة، ونلتزم بأوقات عمل لا تزعج سكان البيت." },
      { q: "هل تعالجون شروخ الأسقف في البيوت الحكومية القديمة؟", a: "نعم، نفتح الشرخ ونعبئه بمادة مرنة ونضع شبكاً عند الحاجة، ثم نؤسس وندهن حتى لا يعود الشرخ للظهور بسرعة." },
    ],
    priceList: [
      { service: "دهان غرفة متوسطة", price: "من 25 د.ك", note: "شامل المواد" },
      { service: "دهان دور 3 غرف وصالة", price: "من 90 د.ك", note: "حسب حالة الجدران" },
      { service: "دهان ملحق جديد (معجون كامل)", price: "من 110 د.ك", note: "شامل التأسيس" },
      { service: "معالجة شروخ الأسقف", price: "من 15 د.ك", note: "لكل غرفة" },
      { service: "دهان سور خارجي", price: "1.5 – 2.5 د.ك / م²", note: "دهان أكريليك خارجي" },
      { service: "العمالة فقط", price: "من 0.8 د.ك / م²", note: "إذا كانت المواد لديك" },
    ],
  },
  "sabaagh-alrawdah": {
    metaTitle: "صباغ الروضة | أفضل معلم صباغ في الروضة",
    metaDescription: "صباغ الروضة لدهان الفلل والمجالس والدواوين، دهانات ديكورية وترميم جدران الفلل القديمة بتشطيب فاخر. اتصل على 90998489 للمعاينة.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5"],
    landmarks: ["جمعية الروضة وحولي التعاونية", "الدائري الثالث", "الدائري الرابع"],
    propertyMix: "فلل عائلية واسعة، بعضها قديم من الستينات والسبعينات وبعضها أعيد بناؤه بتصاميم حديثة",
    geo: { latitude: 29.3297, longitude: 47.9966 },
    intro: [
      "الروضة من مناطق العاصمة القديمة الهادئة، وبيوتها في الغالب فلل عائلية كبيرة تضم مجلساً للرجال وديوانية وصالات واسعة بأسقف عالية. طلبات <strong>صباغ الروضة</strong> هنا تختلف عن مناطق الشقق: العميل لا يبحث عن أرخص سعر بقدر ما يبحث عن تشطيب نظيف بلا تموجات، وألوان متناسقة بين المجلس والصالة والدرج، وصباغ يحترم خصوصية البيت ويعمل بهدوء.",
      "ننفذ في الروضة نوعين أساسيين من الأعمال: ترميم دهان الفلل القديمة التي تظهر فيها تشققات الجص وتقشر الدهان الزيتي القديم، وتشطيب الفلل التي أعيد بناؤها بدهانات حديثة وديكورية مثل الإيطالي المعتق والمخمل والتجاليد. في الحالتين نبدأ بمعاينة نحدد فيها حالة كل جدار، ثم نقدم عرضاً يفصل المواد عن العمالة. للحجز في الروضة اتصل على 90998489.",
    ],
    whyUs: [
      "الفلل القديمة في الروضة دُهنت غالباً بدهانات زيتية في عقود سابقة، ووضع دهان مائي حديث فوقها مباشرة يسبب تقشراً بعد أسابيع. لهذا نختبر نوع الدهان القديم أولاً ثم نستخدم أساساً رابطاً مناسباً قبل الطبقات الجديدة. كما أن ارتفاع أسقف المجالس والدرج في فلل الروضة يتطلب سقالات مناسبة وعمالة معتادة على العمل في الارتفاعات، وهذا ما يجعل الفرق واضحاً بين صباغ متخصص في الفلل وصباغ معتاد على الشقق الصغيرة فقط.",
    ],
    localTips: [
      "في فلل الروضة الواسعة، اختر درجة لون واحدة للممرات والدرج ودرجتين متقاربتين للمجالس حتى يبقى البيت متناسقاً عند الانتقال بين الأدوار. للمجلس والديوانية يناسب الدهان نصف اللامع أو الدهانات الديكورية لأنها تتحمل كثرة الضيوف وتنظف بسهولة. وإذا كان البيت سيُدهن وأنتم ساكنون فيه، اطلب تقسيم العمل إلى مراحل تبدأ بالمجالس والضيافة ثم غرف النوم، حتى يبقى جزء من البيت جاهزاً دائماً.",
    ],
    commonJobs: [
      "أكثر الطلبات في الروضة: تجديد دهان المجالس والدواوين قبل المناسبات والأعياد، ترميم الجدران والأسقف في الفلل القديمة، دهانات ديكورية لجدار التلفزيون والمدخل، ودهان الواجهات والأسوار الحجرية. يأتي بعدها دهان الأبواب الخشبية الكبيرة وتجديد ورق الجدران في غرف النوم.",
    ],
    coverage: [
      "نخدم جميع قطع الروضة، ونصل من نفس الفريق إلى القادسية والشامية والجابرية وحولي والشويخ. نحدد مواعيد المعاينة في الروضة صباحاً أو بعد العصر حسب ما يناسب أهل البيت.",
    ],
    faq: [
      { q: "كم تكلفة دهان فيلا في الروضة؟", a: "تبدأ تكلفة دهان فيلا متوسطة من الداخل في الروضة من نحو 350 ديناراً شامل المواد، وتختلف حسب عدد الأدوار وارتفاع الأسقف وحالة الجدران ونوع الدهان. نقدم عرضاً تفصيلياً بعد المعاينة." },
      { q: "جدران فيلتي القديمة مدهونة بدهان زيتي، هل يمكن الدهان فوقه؟", a: "يمكن، لكن بعد صنفرة السطح ووضع أساس رابط مناسب. الدهان المائي فوق الزيتي مباشرة يتقشر سريعاً." },
      { q: "هل تنفذون دهانات ديكورية للمجالس في الروضة؟", a: "نعم، ننفذ الإيطالي المعتق والمخمل والدهانات المعدنية وجدران التلفزيون، ونعرض عليك عينات على الجدار قبل التنفيذ." },
      { q: "كم يوماً يستغرق دهان مجلس كبير؟", a: "المجلس الكبير يحتاج عادة يومين إلى ثلاثة أيام شاملة المعالجة والتأسيس والطبقات، وأكثر إذا كان فيه دهان ديكوري." },
    ],
    priceList: [
      { service: "دهان مجلس أو ديوانية", price: "من 60 د.ك", note: "حسب المساحة" },
      { service: "دهان فيلا من الداخل", price: "من 350 د.ك", note: "شامل المواد" },
      { service: "دهان ديكوري لجدار مميز", price: "من 6 د.ك / م²", note: "إيطالي أو مخمل" },
      { service: "ترميم أسقف وجدران قديمة", price: "من 20 د.ك", note: "لكل غرفة" },
      { service: "دهان واجهة فيلا", price: "2 – 3.5 د.ك / م²", note: "حسب الارتفاع والدهان" },
      { service: "دهان باب خشبي كبير", price: "من 25 د.ك", note: "صنفرة وتأسيس" },
    ],
  },
  "sabaagh-alshamiya": {
    metaTitle: "صباغ الشامية | أفضل معلم صباغ في الشامية",
    metaDescription: "صباغ الشامية لدهان الفلل القديمة والجديدة والدواوين والواجهات الحجرية، مع معالجة الرطوبة والتشققات. اتصل على 90998489.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5", "قطعة 6"],
    landmarks: ["جمعية الشامية والشويخ التعاونية", "طريق جمال عبدالناصر", "منطقة الشويخ السكنية المجاورة"],
    propertyMix: "فلل عائلية قديمة إلى جانب فلل أعيد هدمها وبناؤها بواجهات حجرية وتصاميم حديثة",
    geo: { latitude: 29.3456, longitude: 47.9649 },
    intro: [
      "الشامية منطقة سكنية عريقة في العاصمة، يجاورها الشويخ السكني والروضة والقادسية، وتشهد منذ سنوات موجة هدم وإعادة بناء جعلت شوارعها تجمع بين الفلل القديمة بجدرانها السميكة والفلل الحديثة بواجهات الحجر والزجاج. لذلك فإن عمل <strong>صباغ الشامية</strong> يتوزع بين مسارين: ترميم وتجديد في البيوت القائمة، وتشطيب كامل من الصفر في البيوت الجديدة بعد استلامها من المقاول.",
      "في الفلل الجديدة نعمل بعد انتهاء أعمال الجبس والكهرباء مباشرة: معجون كامل على مرحلتين، صنفرة، تأسيس، ثم طبقتا تشطيب باللون الذي يختاره صاحب البيت مع مراعاة الإضاءة المخفية في الأسقف. وفي الفلل القديمة نعالج الرطوبة الصاعدة في الجدران السفلية وتقشر الدهان في الحمامات قبل أي تجديد. للتواصل مع صباغ في الشامية اتصل على 90998489 أو عبر واتساب.",
    ],
    whyUs: [
      "البيت الجديد في الشامية غالباً مصمم بإضاءة خطية ومخفية في الأسقف والجدران، وهذه الإضاءة تكشف أي تموج في المعجون أو أثر للرولة. لهذا نعطي التحضير وقتاً أطول من المعتاد ونستخدم إضاءة فحص جانبية قبل كل طبقة. أما الفلل القديمة فتعاني عادة من رطوبة في الجدران الملاصقة للحديقة ومن تقشر الدهان الخارجي بسبب الشمس، وهي مشاكل لا يحلها اللون الجديد إن لم تعالج أولاً.",
    ],
    localTips: [
      "إذا كانت فيلتك في الشامية جديدة ومجهزة بإضاءة مخفية، اطلب دهاناً مطفياً عالي الجودة للأسقف لأن الدهان اللامع يضخم أي عيب تحت الضوء الجانبي. وللواجهات الحجرية لا تُدهن الحجارة نفسها، بل تُعالج بمادة عازلة شفافة، بينما تُدهن الأجزاء المحارة بدهان أكريليك خارجي. وفي الديوانية يناسب لون دافئ ودهان قابل للمسح لأنها أكثر غرف البيت استخداماً.",
    ],
    commonJobs: [
      "أكثر الأعمال في الشامية: تشطيب الفلل الجديدة بعد الاستلام، دهان الدواوين والمجالس، معالجة الرطوبة في الجدران السفلية للفلل القديمة، ودهان الأجزاء المحارة من الواجهات والأسوار. نُطلب أيضاً لتركيب ورق الجدران في غرف النوم وتنفيذ جدار تلفزيون بدهان ديكوري.",
    ],
    coverage: [
      "نعمل في جميع قطع الشامية، ونغطي من نفس الفريق الروضة والقادسية والشويخ والصليبخات. ننسق مع المقاول أو مهندس البيت في الفلل الجديدة حتى يبدأ الدهان مباشرة بعد انتهاء أعمال الجبس والكهرباء.",
    ],
    faq: [
      { q: "متى أبدأ دهان فيلتي الجديدة في الشامية؟", a: "بعد انتهاء أعمال الجبس والكهرباء والتكييف وقبل تركيب الأرضيات الخشبية والأثاث، حتى يكون التحضير كاملاً ولا تتضرر التشطيبات." },
      { q: "هل تدهنون الواجهات الحجرية؟", a: "لا ننصح بدهان الحجر نفسه؛ نعالجه بمادة عازلة شفافة، وندهن الأجزاء المحارة من الواجهة بدهان أكريليك خارجي مقاوم للشمس." },
      { q: "كم سعر تشطيب دهان فيلا جديدة في الشامية؟", a: "يعتمد على المساحة وعدد الأدوار ونوع الدهان. كمؤشر، تشطيب الدور الواحد بمساحة متوسطة يبدأ من نحو 300 دينار شامل المعجون الكامل والمواد. نحدد السعر بعد المعاينة." },
      { q: "عندي رطوبة في الجدار الملاصق للحديقة، ما الحل؟", a: "نكشط الجزء المتضرر ونعالجه بمادة عازلة للرطوبة، ثم معجون مقاوم للماء ودهان مضاد للفطريات. وإذا كان مصدر الرطوبة الري، ننصح بإبعاد الري عن الجدار." },
    ],
    priceList: [
      { service: "تشطيب دور جديد (معجون كامل)", price: "من 300 د.ك", note: "شامل المواد" },
      { service: "دهان ديوانية أو مجلس", price: "من 60 د.ك", note: "حسب المساحة" },
      { service: "معالجة رطوبة جدار", price: "من 20 د.ك", note: "عزل ودهان مضاد للفطريات" },
      { service: "دهان سقف مع إضاءة مخفية", price: "من 3 د.ك / م²", note: "دهان مطفي عالي الجودة" },
      { service: "دهان أجزاء الواجهة المحارة", price: "2 – 3.5 د.ك / م²", note: "أكريليك خارجي" },
      { service: "تركيب ورق جدران", price: "من 4 د.ك / م²", note: "شامل التركيب" },
    ],
  },
  "sabaagh-alqurain": {
    metaTitle: "صباغ القرين | أفضل معلم صباغ في القرين",
    metaDescription: "صباغ القرين لدهان البيوت العائلية وغرف الأطفال والملاحق والأسوار بأسعار مناسبة، مع معالجة التشققات. اتصل على 90998489.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5", "قطعة 6"],
    landmarks: ["متحف بيت القرين", "جمعية القرين التعاونية", "منطقة صباح السالم المجاورة"],
    propertyMix: "بيوت حكومية عائلية متشابهة التصميم، أضاف كثير من أصحابها ملاحق وغرفاً جديدة",
    geo: { latitude: 29.1985, longitude: 48.0747 },
    intro: [
      "القرين منطقة سكنية عائلية في محافظة مبارك الكبير، تعرف بمتحف بيت القرين الذي يوثق إحدى أبرز معارك فترة الغزو، وبيوتها في الغالب بيوت حكومية متشابهة التصميم تسكنها أسر كبيرة. طلبات <strong>صباغ القرين</strong> تتركز على تجديد البيت كاملاً أو جزء منه بعد سنوات من الاستخدام: غرف أطفال، صالات، ممرات، ودرج، إلى جانب دهان الملاحق والغرف التي يضيفها الأهالي مع كبر العائلة.",
      "لأن تصاميم بيوت القرين متقاربة، أصبحت لدينا خبرة بمواضع الضعف المتكررة فيها: تشققات فوق الأبواب والنوافذ، رطوبة في سقف الحمام العلوي، وتقشر الدهان الخارجي في الجهة المواجهة للشمس. نعالج هذه المواضع أولاً ثم ندهن، ونوفر خيار المواد الاقتصادية الجيدة لمن يريد تجديداً بميزانية محددة. للحجز في القرين اتصل على 90998489.",
    ],
    whyUs: [
      "البيت العائلي في القرين يُستخدم بكثافة: أطفال، ضيوف، وحركة يومية في الممرات والدرج، وهذا يجعل الدهان المطفي العادي يتسخ بسرعة ولا يحتمل المسح. لذلك نقترح هنا دهانات قابلة للغسيل في الأماكن المزدحمة، ودهاناً مطفياً فقط في غرف النوم والأسقف. كما أن الملاحق المضافة لاحقاً كثيراً ما يختلف لونها عن بقية البيت، فنقوم بمطابقة اللون أو توحيده حتى لا يظهر الفرق.",
    ],
    localTips: [
      "إذا كنت ستدهن غرف الأطفال في القرين، اختر دهاناً مائياً قليل الرائحة وقابلاً للغسيل، واترك الغرفة تتهوى يوماً كاملاً قبل النوم فيها. ولتوفير التكلفة، يمكن دهان الصالات والممرات في مرحلة وغرف النوم في مرحلة لاحقة بنفس اللون المسجل لدينا. أما الأسوار فأفضل وقت لدهانها في القرين هو أشهر الربيع والخريف حين تكون الحرارة معتدلة والغبار أقل.",
    ],
    commonJobs: [
      "الأكثر طلباً في القرين: دهان بيت كامل من الداخل بعد سنوات من السكن، دهان غرف الأطفال برسومات أو ألوان مبهجة، دهان الملاحق الجديدة ومطابقة لونها مع البيت، ومعالجة رطوبة سقف الحمامات. ثم دهان الأسوار والبوابات وتجديد الأبواب الخشبية الداخلية.",
    ],
    coverage: [
      "نغطي جميع قطع القرين، ونصل بنفس الفريق إلى صباح السالم ومبارك الكبير والفحيحيل والمهبولة والأحمدي. يمكن تحديد موعد المعاينة في القرين في نفس الأسبوع غالباً.",
    ],
    faq: [
      { q: "كم سعر دهان بيت حكومي كامل في القرين؟", a: "يبدأ دهان بيت حكومي متوسط من الداخل في القرين من نحو 250 ديناراً شامل المواد الاقتصادية الجيدة، ويرتفع مع الدهانات الفاخرة أو إذا احتاجت الجدران معالجة كبيرة." },
      { q: "هل يوجد دهان مناسب لغرف الأطفال؟", a: "نعم، نستخدم دهانات مائية قليلة الرائحة قابلة للغسيل، ويمكن تنفيذ رسومات بسيطة أو جدار بلون مميز حسب عمر الطفل." },
      { q: "لون الملحق الجديد مختلف عن البيت، هل يمكن توحيده؟", a: "نعم، نطابق اللون الحالي بجهاز أو بعينة من الجدار، أو نقترح توحيد البيت كله بلون جديد إذا كان القديم باهتاً." },
      { q: "هل يمكن تقسيم دهان البيت على مراحل؟", a: "نعم، كثير من عملائنا في القرين يدهنون الصالات أولاً ثم غرف النوم لاحقاً، ونحتفظ برقم اللون حتى يكون التشطيب متطابقاً." },
    ],
    priceList: [
      { service: "دهان بيت حكومي من الداخل", price: "من 250 د.ك", note: "مواد اقتصادية جيدة" },
      { service: "دهان غرفة أطفال", price: "من 30 د.ك", note: "دهان قابل للغسيل" },
      { service: "دهان ملحق مع مطابقة اللون", price: "من 70 د.ك", note: "حسب المساحة" },
      { service: "معالجة رطوبة سقف حمام", price: "من 20 د.ك", note: "عزل ودهان مقاوم" },
      { service: "دهان سور وبوابة", price: "من 60 د.ك", note: "حسب الطول" },
      { service: "دهان متر مربع", price: "1.5 – 3 د.ك", note: "حسب نوع الدهان" },
    ],
  },
  "sabaagh-alsulaybikhat": {
    metaTitle: "صباغ الصليبيخات | أفضل معلم صباغ في الصليبيخات",
    metaDescription: "صباغ الصليبيخات لدهان البيوت القريبة من الساحل، معالجة الرطوبة والملوحة وتقشر الدهان الخارجي. معاينة وعرض سعر على 90998489.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5", "منطقة الدوحة المجاورة"],
    landmarks: ["ساحل جون الكويت", "جمعية الصليبيخات التعاونية", "منطقة جابر الأحمد المجاورة"],
    propertyMix: "بيوت حكومية قديمة ومتوسطة الحجم، بعضها قريب من الساحل ومعرض للرطوبة والملوحة",
    geo: { latitude: 29.3204, longitude: 47.9122 },
    intro: [
      "الصليبيخات منطقة سكنية قديمة على ساحل جون الكويت، وقربها من البحر يمنح بيوتها نسيماً لطيفاً لكنه يجلب معه رطوبة وملوحة تهاجم الدهان أسرع من المناطق الداخلية. لهذا فإن أغلب ما يُطلب من <strong>صباغ الصليبيخات</strong> ليس تغيير لون فقط، بل علاج تقشر الدهان الخارجي، وبقع الرطوبة في الجدران المواجهة للبحر، والصدأ على البوابات والدرابزين الحديدي.",
      "نتعامل مع بيوت الصليبيخات بخطة تبدأ من الخارج إلى الداخل: غسل الواجهة من الأملاح، كشط الدهان المنتفخ، معالجة بمادة عازلة، ثم دهان خارجي مقاوم للرطوبة والأشعة. وفي الداخل نعالج الحمامات والمطابخ بدهانات مضادة للفطريات، وندهن الغرف بالألوان التي يختارها أهل البيت. اتصل على 90998489 لتحديد موعد المعاينة في الصليبيخات.",
    ],
    whyUs: [
      "الملح الذي يحمله هواء البحر يترسب على الجدران الخارجية ويمنع التصاق الدهان الجديد، فإذا دُهن الجدار دون غسله ومعالجته ينتفخ الدهان ويتقشر خلال موسم واحد. صباغ لا يعرف هذه الطبيعة سيعطيك سعراً أقل، لكنك ستعيد الدهان في السنة التالية. في الصليبيخات نحسب خطوة الغسل والمعالجة ضمن العمل دائماً، ونستخدم دهانات خارجية مخصصة للمناطق الساحلية، ونعالج الحديد بمانع صدأ قبل دهانه.",
    ],
    localTips: [
      "إذا كان بيتك في الصليبيخات قريباً من الساحل، افحص الواجهة المواجهة للبحر مرة كل سنة وعالج أي انتفاخ صغير قبل أن يتسع. اختر ألواناً فاتحة للواجهات لأنها تعكس الحرارة وتخفي أثر الملح أكثر من الألوان الداكنة. وللبوابات والدرابزين استخدم دهان مانع صدأ ثم دهان زيتي خارجي، ولا تكتفِ بالدهان المائي على الحديد.",
    ],
    commonJobs: [
      "أكثر الأعمال في الصليبيخات: معالجة ودهان الواجهات المتقشرة، علاج بقع الرطوبة والفطريات في الجدران الداخلية المواجهة للبحر، دهان البوابات والدرابزين الحديدي بمانع صدأ، ثم دهان البيت من الداخل وتجديد الحمامات والمطابخ.",
    ],
    coverage: [
      "نخدم جميع قطع الصليبيخات ومنطقة الدوحة المجاورة، ونصل بنفس الفريق إلى جابر الأحمد والشويخ والشامية والعارضية وصباح الناصر.",
    ],
    faq: [
      { q: "لماذا يتقشر الدهان الخارجي بسرعة في الصليبيخات؟", a: "بسبب الملوحة والرطوبة القادمة من البحر، والدهان فوق جدار لم يُغسل من الأملاح. الحل غسل الواجهة ومعالجتها ثم دهان خارجي مخصص للمناطق الساحلية." },
      { q: "كم سعر دهان واجهة بيت في الصليبيخات؟", a: "يتراوح بين 2 و3.5 دينار للمتر المربع تقريباً شامل الغسل والمعالجة والدهان الخارجي، حسب الارتفاع وحالة الجدار." },
      { q: "هل تعالجون الصدأ على البوابات والدرابزين؟", a: "نعم، نزيل الصدأ بالفرشاة الحديدية والصنفرة، ثم طبقة مانع صدأ، ثم دهان زيتي خارجي." },
      { q: "هل يوجد دهان داخلي مقاوم للرطوبة؟", a: "نعم، نستخدم في الحمامات والمطابخ والغرف المواجهة للبحر دهانات مضادة للفطريات وقابلة للغسيل." },
    ],
    priceList: [
      { service: "دهان واجهة مع غسل ومعالجة", price: "2 – 3.5 د.ك / م²", note: "دهان ساحلي خارجي" },
      { service: "معالجة رطوبة وفطريات", price: "من 20 د.ك", note: "لكل جدار أو غرفة" },
      { service: "دهان بوابة ودرابزين حديد", price: "من 35 د.ك", note: "مانع صدأ + زيتي" },
      { service: "دهان بيت من الداخل", price: "من 230 د.ك", note: "شامل المواد" },
      { service: "دهان حمام أو مطبخ", price: "من 20 د.ك", note: "دهان مضاد للفطريات" },
      { service: "دهان غرفة واحدة", price: "من 25 د.ك", note: "شامل المواد" },
    ],
  },
  "sabaagh-alshuhadaa": {
    metaTitle: "صباغ الشهداء | أفضل معلم صباغ في الشهداء",
    metaDescription: "صباغ الشهداء لدهان الفلل الحديثة، أسقف الجبس بورد والإضاءة المخفية، ورق الجدران والدهانات الديكورية. اتصل على 90998489.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "منطقة حطين المجاورة", "منطقة الصديق المجاورة"],
    landmarks: ["منطقة الزهراء المجاورة", "منطقة حطين", "منطقة الصديق"],
    propertyMix: "فلل عائلية حديثة نسبياً بتصاميم معاصرة، فيها أسقف جبس بورد وإضاءة مخفية",
    geo: { latitude: 29.2826, longitude: 48.0129 },
    intro: [
      "الشهداء من المناطق السكنية الحديثة نسبياً في محافظة حولي، تجاورها حطين والصديق والزهراء، وأغلب بيوتها فلل عائلية بتصاميم معاصرة: أسقف جبس بورد بإضاءة مخفية، جدران تلفزيون مكسوة بالتجاليد، ودرج مفتوح على الصالة. هذا الطابع يجعل عمل <strong>صباغ الشهداء</strong> أقرب إلى التشطيب الدقيق منه إلى الدهان العادي، فالتفاصيل الصغيرة هي ما يلاحظه صاحب البيت أولاً.",
      "ننفذ في الشهداء تجديد ألوان الفلل بعد سنوات من السكن، ودهان أسقف الجبس بورد ومعالجة شقوق الفواصل فيها، وتركيب ورق جدران في غرف النوم، ودهانات ديكورية للمجالس. نحرص على تغطية الأرضيات الرخامية والخشبية جيداً، وعلى حماية وحدات الإضاءة والتكييف قبل البدء. للمعاينة في الشهداء اتصل على 90998489 أو راسلنا على واتساب.",
    ],
    whyUs: [
      "أكثر مشكلة نراها في فلل الشهداء هي الشقوق الرفيعة عند فواصل ألواح الجبس بورد في الأسقف، والتي تظهر بعد سنة أو سنتين من التشطيب بسبب التمدد الحراري. دهانها فوق الشق مباشرة لا يفيد؛ نفتح الفاصل ونضع شريطاً ومعجوناً مرناً ثم ندهن. كما أن الإضاءة المخفية تكشف أي اختلاف في درجة اللون بين طبقة وأخرى، لذلك نخلط الكمية كاملة من نفس الدفعة قبل البدء.",
    ],
    localTips: [
      "في الفلل الحديثة بالشهداء، الألوان الرمادية الدافئة والبيج الفاتح تتناسب مع أرضيات الرخام والتجاليد الخشبية وتبقى عصرية لسنوات. اختر دهاناً مطفياً للأسقف ونصف مطفي للجدران، وخصص الدهان الديكوري لجدار واحد في المجلس أو الصالة بدل تعميمه. وإذا كانت لديك تجاليد خشبية، اطلب حمايتها بشريط لاصق مناسب لا يترك أثراً عند إزالته.",
    ],
    commonJobs: [
      "الأكثر طلباً في الشهداء: تجديد ألوان الفيلا بالكامل بألوان عصرية، معالجة شقوق فواصل الجبس بورد ودهان الأسقف، تركيب ورق جدران لغرف النوم، ودهانات ديكورية لجدار التلفزيون والمجلس. ثم دهان الأسوار والواجهات المحارة.",
    ],
    coverage: [
      "نغطي جميع قطع الشهداء، ونصل بنفس الفريق إلى الزهراء والجابرية وبيان وسلوى وحولي، إضافة إلى حطين والصديق المجاورتين.",
    ],
    faq: [
      { q: "تظهر شقوق في سقف الجبس بورد، هل يكفي الدهان؟", a: "لا، نفتح الفاصل ونضع شريطاً ومعجوناً مرناً ثم ندهن، لأن الدهان وحده لا يمنع الشق من الظهور مجدداً." },
      { q: "كم سعر تجديد دهان فيلا في الشهداء؟", a: "يبدأ تجديد دهان فيلا متوسطة من الداخل في الشهداء من نحو 320 ديناراً شامل المواد، ويختلف حسب المساحة ونوع الدهان والأعمال الديكورية." },
      { q: "ما الألوان المناسبة لفيلا حديثة؟", a: "الرمادي الدافئ والبيج الفاتح والأبيض المكسور تناسب أغلب الفلل الحديثة، ويمكن إضافة جدار مميز بلون أغمق أو دهان ديكوري." },
      { q: "هل تحمون الأرضيات الرخامية أثناء العمل؟", a: "نعم، نغطي الأرضيات بالكامل بغطاء سميك ونحمي وحدات الإضاءة والتكييف والتجاليد قبل البدء." },
    ],
    priceList: [
      { service: "تجديد دهان فيلا من الداخل", price: "من 320 د.ك", note: "شامل المواد" },
      { service: "معالجة شقوق جبس بورد", price: "من 15 د.ك", note: "لكل غرفة" },
      { service: "دهان سقف جبس بورد", price: "من 2.5 د.ك / م²", note: "دهان مطفي" },
      { service: "تركيب ورق جدران", price: "من 4 د.ك / م²", note: "شامل التركيب" },
      { service: "دهان ديكوري لجدار", price: "من 6 د.ك / م²", note: "حسب النوع" },
      { service: "دهان سور خارجي", price: "1.5 – 2.5 د.ك / م²", note: "أكريليك خارجي" },
    ],
  },
  "sabaagh-alwafra": {
    metaTitle: "صباغ الوفرة | أفضل معلم صباغ في الوفرة",
    metaDescription: "صباغ الوفرة لدهان البيوت والمزارع والاستراحات بدهانات خارجية تتحمل الشمس والغبار، مع زيارة يوم كامل. اتصل على 90998489.",
    neighbourhoods: ["الوفرة السكنية", "منطقة المزارع", "الاستراحات والشاليهات الزراعية", "محيط الجمعية"],
    landmarks: ["مزارع الوفرة", "الوفرة السكنية", "مدينة صباح الأحمد القريبة"],
    propertyMix: "بيوت سكنية مستقلة إلى جانب بيوت المزارع والاستراحات ذات المساحات الخارجية الكبيرة",
    intro: [
      "الوفرة في أقصى جنوب الكويت تختلف عن أي منطقة أخرى نخدمها: مساحات مفتوحة، مزارع واستراحات، وبيوت تتعرض لشمس مباشرة طوال النهار ولعواصف غبار متكررة. لذلك فإن ما يحتاجه سكان المنطقة من <strong>صباغ الوفرة</strong> هو دهان خارجي يتحمل هذه الظروف قبل أي شيء آخر: أسوار طويلة، واجهات مكشوفة، مظلات حديدية، وغرف خدمة وملاحق في المزارع.",
      "بسبب بُعد الوفرة عن المدينة، نرتب العمل فيها على شكل زيارات يوم كامل بفريق مكتمل ومعدات كافية، حتى ننجز أكبر قدر ممكن في كل زيارة ولا نُحمّلك تكلفة تنقل متكرر. نبدأ عادة بالخارج في ساعات الصباح الباكر، ثم ننتقل إلى الداخل في وقت الظهيرة. للمعاينة في الوفرة أرسل لنا صور المكان على واتساب أو اتصل على 90998489 لتحديد يوم الزيارة.",
    ],
    whyUs: [
      "الشمس في الوفرة لا ترحم الدهانات الرخيصة؛ الألوان تبهت خلال صيف واحد، والدهان يتشقق ويتطبشر على الأسوار المكشوفة، والغبار يلتصق بالأسطح الخشنة. الحل ليس في الإكثار من الطبقات، بل في اختيار دهان أكريليك خارجي مقاوم للأشعة فوق البنفسجية، وتنظيف السطح من الغبار جيداً قبل الدهان، والعمل في الساعات الباردة من اليوم. وفي المزارع نتعامل أيضاً مع الحديد والخشب المكشوفين: مظلات ومخازن وأبواب تحتاج مانع صدأ ودهاناً زيتياً خارجياً.",
    ],
    localTips: [
      "إذا كنت تملك مزرعة أو استراحة في الوفرة، اجمع كل أعمال الدهان في زيارة واحدة: الأسوار والمظلات والملاحق والغرف الداخلية، فهذا يوفر عليك كثيراً. اختر ألواناً فاتحة للأسوار والواجهات لأنها تعكس الحرارة وتخفي الغبار، وتجنب الألوان الداكنة على الحديد المكشوف لأنها تسخن وتتقشر أسرع. وأفضل موسم للدهان الخارجي في الوفرة هو من أكتوبر إلى أبريل.",
    ],
    commonJobs: [
      "أكثر الأعمال في الوفرة: دهان الأسوار الطويلة والبوابات في المزارع والبيوت، دهان المظلات والهياكل الحديدية بمانع صدأ، تجديد الواجهات الباهتة، ودهان غرف الاستراحات والملاحق من الداخل. يطلب بعض العملاء أيضاً دهان الديوانية الخارجية والجلسات.",
    ],
    coverage: [
      "نصل إلى الوفرة السكنية ومنطقة المزارع والاستراحات، ونغطي من نفس الفريق مدينة صباح الأحمد والأحمدي والفحيحيل والمنقف. نحدد مواعيد الوفرة مسبقاً لتكون زيارة يوم كامل.",
    ],
    faq: [
      { q: "هل تصلون إلى مزارع الوفرة؟", a: "نعم، نصل إلى الوفرة السكنية والمزارع والاستراحات، ونرتب الزيارة يوماً كاملاً بفريق ومعدات كافية لإنجاز أكبر قدر من العمل." },
      { q: "ما أفضل دهان لأسوار المزارع في الوفرة؟", a: "دهان أكريليك خارجي مقاوم للأشعة فوق البنفسجية بلون فاتح، بعد تنظيف السور من الغبار ومعالجة أي تشققات." },
      { q: "كم سعر دهان سور مزرعة؟", a: "يتراوح دهان الأسوار الخارجية في الوفرة بين 1.5 و2.5 دينار للمتر المربع تقريباً حسب حالة السور ونوع الدهان، ونعطيك سعراً إجمالياً بعد المعاينة أو من الصور." },
      { q: "هل يمكن المعاينة عن طريق الصور؟", a: "نعم، أرسل صوراً ومقاسات تقريبية على واتساب لنعطيك تقديراً أولياً، ثم نؤكد السعر عند الزيارة." },
    ],
    priceList: [
      { service: "دهان سور خارجي", price: "1.5 – 2.5 د.ك / م²", note: "أكريليك مقاوم للشمس" },
      { service: "دهان مظلة أو هيكل حديد", price: "من 40 د.ك", note: "مانع صدأ + زيتي" },
      { service: "دهان واجهة بيت أو استراحة", price: "2 – 3 د.ك / م²", note: "حسب الارتفاع" },
      { service: "دهان غرفة استراحة", price: "من 25 د.ك", note: "شامل المواد" },
      { service: "دهان ملحق خدمة", price: "من 60 د.ك", note: "حسب المساحة" },
      { service: "زيارة يوم كامل", price: "حسب حجم العمل", note: "سعر إجمالي بعد المعاينة" },
    ],
  },
  "sabaagh-alzahraa": {
    metaTitle: "صباغ الزهراء | أفضل معلم صباغ في الزهراء",
    metaDescription: "صباغ الزهراء لدهان الفلل العصرية بالألوان الحديثة، دهانات ديكورية وجدران تلفزيون ودهان الواجهات. اتصل على 90998489 للمعاينة.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5", "قطعة 6", "قطعة 7", "قطعة 8"],
    landmarks: ["مجمع 360", "الدائري السادس", "منطقة الشهداء المجاورة"],
    propertyMix: "فلل حديثة البناء بتصاميم عصرية وواجهات مودرن، أغلبها لعائلات شابة",
    geo: { latitude: 29.2780, longitude: 47.9975 },
    intro: [
      "الزهراء من أحدث المناطق السكنية في محافظة حولي، وتشتهر بقربها من مجمع 360 والدائري السادس، وأغلب فللها بُنيت خلال العقدين الأخيرين بتصاميم مودرن وواجهات بسيطة بخطوط مستقيمة. عملاء <strong>صباغ الزهراء</strong> في الغالب عائلات شابة تعرف ما تريد: ألوان هادئة عصرية، جدار تلفزيون مميز، وتشطيب ناعم بلا عيوب تحت الإضاءة.",
      "نعمل في الزهراء على تجديد ألوان الفلل بعد السنوات الأولى من السكن، وعلى تغيير الطابع الكامل للبيت عند تغيير الأثاث، إضافة إلى دهان الواجهات المودرن التي تفقد بياضها بسبب الغبار. نعرض على العميل عينات حقيقية على الجدار قبل اعتماد اللون، لأن اللون في الكتالوج يختلف عنه تحت إضاءة البيت. للتواصل مع صباغ في الزهراء اتصل على 90998489 أو عبر واتساب.",
    ],
    whyUs: [
      "الواجهات المودرن في الزهراء بيضاء أو رمادية فاتحة غالباً، وأي بقعة أو سيلان من المكيفات أو مياه الري يظهر عليها بوضوح. لهذا نستخدم في الواجهات دهانات خارجية قابلة للغسيل وطاردة للأتربة، ونعالج مواضع السيلان قبل الدهان. وفي الداخل، الأسقف المرتفعة والصالات المفتوحة تحتاج عملاً منظماً حتى لا تظهر فواصل بين مساحة دُهنت اليوم وأخرى دُهنت أمس، فنقسم العمل بحيث تُنجز كل مساحة مفتوحة في جلسة واحدة.",
    ],
    localTips: [
      "قبل أن تعتمد لوناً لفيلتك في الزهراء، اطلب عينة بحجم متر مربع على جدارين مختلفين وانظر إليها نهاراً وتحت إضاءة الليل. الألوان الترابية مثل البيج الرملي والرمادي الدافئ والأخضر الزيتوني الفاتح هي الأكثر طلباً حالياً، وتتماشى مع الأثاث الخشبي الفاتح. للواجهات اختر دهاناً خارجياً بخاصية طرد الأتربة، فهو يحافظ على مظهر الواجهة المودرن لفترة أطول.",
    ],
    commonJobs: [
      "الأكثر طلباً في الزهراء: تغيير ألوان الفيلا بالكامل إلى ألوان عصرية، تنفيذ جدار تلفزيون بدهان ديكوري أو تجاليد، دهان الواجهات المودرن وغسلها، وتركيب ورق جدران لغرف الأطفال والنوم. يأتي بعدها دهان الأسقف المرتفعة في الصالات المفتوحة.",
    ],
    coverage: [
      "نخدم جميع قطع الزهراء من القطعة 1 إلى القطعة 8، ونصل بنفس الفريق إلى الشهداء والجابرية وبيان وحولي، إضافة إلى حطين والصديق والسلام القريبة.",
    ],
    faq: [
      { q: "ما الألوان العصرية المناسبة لفلل الزهراء؟", a: "البيج الرملي والرمادي الدافئ والأبيض المكسور والأخضر الزيتوني الفاتح هي الأكثر طلباً، ونعرض عينات حقيقية على الجدار قبل الاعتماد." },
      { q: "كم سعر تنفيذ جدار تلفزيون بدهان ديكوري؟", a: "يبدأ من نحو 60 ديناراً لجدار متوسط حسب نوع الدهان الديكوري والمساحة، ويشمل التحضير والتنفيذ." },
      { q: "واجهة فيلتي البيضاء اتسخت من الغبار، هل يكفي الغسيل؟", a: "إذا كان الدهان سليماً يكفي الغسيل، أما إذا بهت أو تشقق فنغسل الواجهة ونعالجها ثم ندهن بدهان خارجي طارد للأتربة." },
      { q: "كم يستغرق تجديد دهان فيلا في الزهراء؟", a: "فيلا متوسطة من الداخل تحتاج عادة من 4 إلى 7 أيام حسب المساحة وعدد الأدوار وحالة الجدران والأعمال الديكورية." },
    ],
    priceList: [
      { service: "تجديد دهان فيلا من الداخل", price: "من 330 د.ك", note: "شامل المواد" },
      { service: "جدار تلفزيون ديكوري", price: "من 60 د.ك", note: "حسب النوع والمساحة" },
      { service: "دهان واجهة مودرن", price: "2 – 3.5 د.ك / م²", note: "دهان طارد للأتربة" },
      { service: "دهان صالة مفتوحة بسقف مرتفع", price: "من 80 د.ك", note: "حسب الارتفاع" },
      { service: "تركيب ورق جدران", price: "من 4 د.ك / م²", note: "شامل التركيب" },
      { service: "عينة لون على الجدار", price: "مجاناً", note: "عند المعاينة" },
    ],
  },
  "sabaagh-alaardiya": {
    metaTitle: "صباغ العارضية | أفضل معلم صباغ في العارضية",
    metaDescription: "صباغ العارضية لدهان البيوت السكنية والمحلات والمعارض والورش في العارضية الحرفية، تنفيذ مسائي متاح. اتصل على 90998489.",
    neighbourhoods: ["العارضية السكنية", "العارضية الحرفية", "منطقة المخازن", "قطعة 1", "قطعة 2", "قطعة 3"],
    landmarks: ["العارضية الحرفية", "مخازن العارضية", "الدائري السادس"],
    propertyMix: "بيوت سكنية عائلية في القطع السكنية، ومحلات وورش ومعارض ومخازن في المنطقة الحرفية",
    geo: { latitude: 29.2994, longitude: 47.9081 },
    intro: [
      "العارضية منطقة مزدوجة الطابع في محافظة الفروانية: قطع سكنية تسكنها عائلات في بيوت مستقلة، ومنطقة حرفية ومخازن تضم ورشاً ومعارض ومحلات. لهذا يتنوع ما نُطلب له كـ<strong>صباغ العارضية</strong> بين دهان بيت عائلي هادئ في القطع السكنية، وتجديد معرض أو محل في العارضية الحرفية يحتاج إنجازاً سريعاً حتى لا يتوقف العمل.",
      "في الجزء السكني نعالج تشققات البيوت ونجدد الغرف والصالات والأسوار، وفي الجزء الحرفي ننفذ دهان المعارض والمكاتب الملحقة بالورش ودهان الواجهات واللوحات الجدارية الإرشادية، مع إمكانية العمل مساءً أو يوم الجمعة. نستخدم دهانات قوية قابلة للغسيل في الأماكن التجارية لأنها تتعرض للغبار والاحتكاك. للحجز في العارضية اتصل على 90998489.",
    ],
    whyUs: [
      "صاحب المعرض أو الورشة في العارضية الحرفية يحسب الوقت بالمال؛ كل يوم إغلاق يعني خسارة. لذلك نعمل في المحلات التجارية بفريق أكبر لإنهاء العمل في وقت أقصر، ونقسمه على فترات مسائية إذا لزم. أما في البيوت السكنية فالأولوية مختلفة: هدوء، نظافة، وحماية للأثاث. هذا التنوع في نوعية العمل داخل منطقة واحدة يحتاج صباغاً يعرف كيف يتعامل مع الحالتين بنفس الجودة.",
    ],
    localTips: [
      "إذا كنت تجدد معرضاً في العارضية الحرفية، اختر دهاناً نصف لامع أو ساتان للجدران لأنه يُمسح بسهولة من الغبار، ودهاناً إيبوكسياً أو زيتياً للأجزاء المعرضة للاحتكاك. ونسّق موعد الدهان مع أقل أيام الأسبوع حركة. أما في البيوت السكنية بالعارضية، فالبيوت القريبة من المنطقة الحرفية تتعرض لغبار أكثر، لذا يفضل اختيار ألوان متوسطة الدرجة للأسوار والواجهات بدل الأبيض الناصع.",
    ],
    commonJobs: [
      "الأكثر طلباً في العارضية: دهان المعارض والمحلات والمكاتب في المنطقة الحرفية خارج أوقات الدوام، دهان واجهات المحلات، تجديد البيوت السكنية من الداخل، ومعالجة تشققات الجدران والأسقف، ثم دهان الأسوار والبوابات.",
    ],
    coverage: [
      "نغطي العارضية السكنية والعارضية الحرفية ومنطقة المخازن، ونصل بنفس الفريق إلى الفردوس وصباح الناصر والفروانية وخيطان والصليبيخات.",
    ],
    faq: [
      { q: "هل تدهنون المعارض في العارضية الحرفية مساءً؟", a: "نعم، ننفذ دهان المعارض والمحلات والمكاتب مساءً أو يوم العطلة، ونسلم المكان نظيفاً وجاهزاً لاستقبال الزبائن." },
      { q: "كم سعر دهان معرض أو محل في العارضية؟", a: "يبدأ دهان محل متوسط من نحو 60 ديناراً، ويعتمد على المساحة وارتفاع الجدران ونوع الدهان المطلوب." },
      { q: "ما الدهان المناسب للأماكن التجارية المعرضة للغبار؟", a: "دهان نصف لامع أو ساتان قابل للمسح للجدران، ودهان أقوى للأجزاء المعرضة للاحتكاك مثل الأعمدة والزوايا." },
      { q: "هل تخدمون البيوت السكنية في العارضية أيضاً؟", a: "نعم، ندهن البيوت السكنية من الداخل والخارج ونعالج التشققات، ونعمل فيها بهدوء مع حماية كاملة للأثاث." },
    ],
    priceList: [
      { service: "دهان محل أو معرض", price: "من 60 د.ك", note: "تنفيذ مسائي متاح" },
      { service: "دهان مكتب ورشة", price: "من 40 د.ك", note: "حسب المساحة" },
      { service: "دهان واجهة محل", price: "2 – 3 د.ك / م²", note: "دهان خارجي" },
      { service: "دهان بيت سكني من الداخل", price: "من 240 د.ك", note: "شامل المواد" },
      { service: "معالجة تشققات", price: "من 15 د.ك", note: "حسب الحجم" },
      { service: "دهان سور وبوابة", price: "من 60 د.ك", note: "حسب الطول" },
    ],
  },
  "sabaagh-alqadesiya": {
    metaTitle: "صباغ القادسية | أفضل معلم صباغ في القادسية",
    metaDescription: "صباغ القادسية لترميم ودهان البيوت القديمة والفلل، معالجة تشققات الجص والرطوبة ودهان الدواوين والواجهات. اتصل على 90998489.",
    neighbourhoods: ["قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5", "قطعة 6", "قطعة 7"],
    landmarks: ["جمعية القادسية التعاونية", "الدائري الثاني", "الدائري الثالث"],
    propertyMix: "بيوت وفلل قديمة من أوائل التخطيط السكني، بجدران جص سميكة وأسقف عالية، إلى جانب بيوت أعيد بناؤها",
    geo: { latitude: 29.3455, longitude: 48.0018 },
    intro: [
      "القادسية من أقدم المناطق السكنية النموذجية في العاصمة، تقع بين الدائري الثاني والثالث، وكثير من بيوتها يعود إلى بدايات التخطيط العمراني الحديث في الكويت. هذا العمر يعني أن ما يُطلب من <strong>صباغ القادسية</strong> هو في الغالب ترميم قبل الدهان: جص متشقق، طبقات دهان قديمة متراكمة، رطوبة في الجدران السفلية، وأسقف خشبية أو جبسية تحتاج عناية خاصة.",
      "نتعامل مع البيوت القديمة في القادسية بأسلوب متدرج: إزالة الطبقات المتقشرة حتى نصل إلى سطح سليم، ترميم الجص في الأجزاء الضعيفة، معالجة الرطوبة، ثم تأسيس ودهان. ونحافظ في الوقت نفسه على الطابع الأصلي للبيت إذا رغب أصحابه، كالأقواس والكرانيش القديمة. وفي البيوت التي أعيد بناؤها ننفذ تشطيباً حديثاً كاملاً. للمعاينة في القادسية اتصل على 90998489.",
    ],
    whyUs: [
      "تراكم طبقات الدهان على مدى عقود في بيوت القادسية يجعل الجدار ثقيلاً وغير مستوٍ، وأي طبقة جديدة فوقه تتقشر مع القديم. لذلك نقيّم في كل غرفة: هل يكفي الكشط الجزئي أم يجب إزالة الطبقات كلها؟ هذا القرار يحدد عمر الدهان الجديد. كما أن الجص القديم يمتص الدهان بشكل مختلف عن الجص الحديث، فنستخدم أساساً مناسباً يوحد الامتصاص قبل اللون.",
    ],
    localTips: [
      "إذا كان بيتك في القادسية قديماً، لا تقارن الأسعار على أساس المتر فقط؛ اسأل الصباغ عن خطة التحضير لأن ثلثي الجودة فيها. حافظ على الكرانيش والأقواس الأصلية إن وُجدت ودعها تُدهن بلون أفتح من الجدار لإبرازها. وفي الجدران السفلية التي تظهر فيها رطوبة، عالج مصدر الماء أولاً، ثم استخدم معجوناً مقاوماً للماء قبل الدهان.",
    ],
    commonJobs: [
      "الأكثر طلباً في القادسية: ترميم ودهان البيوت القديمة بالكامل، إزالة طبقات الدهان المتقشرة، معالجة الرطوبة في الجدران السفلية، دهان الدواوين والمجالس، ودهان الواجهات والأسوار القديمة. ثم تشطيب البيوت المعاد بناؤها.",
    ],
    coverage: [
      "نخدم جميع قطع القادسية، ونصل بنفس الفريق إلى الروضة والشامية والشعب وحولي والشويخ، إضافة إلى المنصورية والدسمة والفيحاء القريبة.",
    ],
    faq: [
      { q: "بيتي في القادسية قديم والدهان يتقشر طبقات، ما الحل؟", a: "نزيل الطبقات المتقشرة حتى نصل إلى سطح سليم، ونرمم الجص الضعيف، ثم أساس موحد للامتصاص وطبقتا دهان. الدهان فوق الطبقات المتقشرة لا يدوم." },
      { q: "كم تكلفة ترميم ودهان بيت قديم في القادسية؟", a: "تعتمد كثيراً على حالة الجدران؛ كمؤشر تبدأ الغرفة التي تحتاج ترميماً كاملاً من نحو 45 ديناراً، والبيت الكامل يُسعّر بعد المعاينة." },
      { q: "هل يمكن الحفاظ على الكرانيش والأقواس القديمة؟", a: "نعم، نرممها وندهنها بعناية، ويمكن إبرازها بلون مختلف عن الجدار." },
      { q: "هل تعالجون الرطوبة في الجدران السفلية؟", a: "نعم، بعد تحديد مصدر الرطوبة نكشط الجزء المتضرر ونستخدم معجوناً مقاوماً للماء ودهاناً مضاداً للفطريات." },
    ],
    priceList: [
      { service: "ترميم ودهان غرفة قديمة", price: "من 45 د.ك", note: "شامل إزالة الطبقات" },
      { service: "دهان غرفة بحالة جيدة", price: "من 25 د.ك", note: "شامل المواد" },
      { service: "معالجة رطوبة جدار سفلي", price: "من 20 د.ك", note: "معجون مقاوم للماء" },
      { service: "دهان ديوانية", price: "من 60 د.ك", note: "حسب المساحة" },
      { service: "ترميم كرانيش وأقواس", price: "حسب الحالة", note: "بعد المعاينة" },
      { service: "دهان واجهة بيت قديم", price: "2 – 3.5 د.ك / م²", note: "شامل المعالجة" },
    ],
  },
  "sabaagh-alshaab": {
    metaTitle: "صباغ الشعب | أفضل معلم صباغ في الشعب",
    metaDescription: "صباغ الشعب لدهان الفلل والشقق القريبة من البحر بدهانات مقاومة للرطوبة والملوحة، ودهان الواجهات. اتصل على 90998489.",
    neighbourhoods: ["الشعب البحري", "قطعة 1", "قطعة 2", "قطعة 3", "قطعة 4", "قطعة 5"],
    landmarks: ["شارع الخليج العربي", "الشعب البحري", "منطقة حولي المجاورة"],
    propertyMix: "فلل عائلية وبيوت قديمة وحديثة، بعضها مطل على البحر، إلى جانب عمارات سكنية قليلة",
    geo: { latitude: 29.3560, longitude: 48.0350 },
    intro: [
      "الشعب منطقة صغيرة المساحة في محافظة حولي، تمتد بين حولي وشارع الخليج العربي، ويطل جزء منها وهو الشعب البحري على البحر مباشرة. هذا الموقع يجعل بيوتها مرغوبة، لكنه يفرض على <strong>صباغ الشعب</strong> التعامل مع رطوبة البحر وملوحته في الواجهات والجدران الخارجية، إلى جانب الأعمال الداخلية المعتادة في الفلل العائلية.",
      "نبدأ في بيوت الشعب القريبة من البحر بفحص الواجهات: انتفاخ الدهان، بقع الأملاح البيضاء، وصدأ الحديد في الشرفات والأسوار. نعالج كل ذلك بالغسل والكشط والعزل قبل الدهان الخارجي، ونستخدم في الداخل دهانات مقاومة للرطوبة في الغرف المواجهة للبحر. أما البيوت الداخلية في الشعب فنجدد غرفها ومجالسها بالألوان التي يختارها أصحابها. اتصل على 90998489 لحجز معاينة في الشعب.",
    ],
    whyUs: [
      "الفلل المطلة على البحر في الشعب تدفع ثمن إطلالتها في صورة دهان يتلف أسرع؛ الملح والرطوبة يخترقان الدهان العادي خلال موسم أو اثنين. لهذا نستخدم في هذه البيوت نظاماً كاملاً بدل طبقة واحدة: غسل بالماء العذب، مادة عازلة، دهان خارجي مخصص للأجواء البحرية بطبقتين. ونعالج الحديد بمانع صدأ قبل دهانه، لأن الصدأ هو أول ما يشوه واجهات البيوت البحرية.",
    ],
    localTips: [
      "إذا كان بيتك في الشعب البحري، خطط لدهان الواجهة المواجهة للبحر كل ثلاث إلى أربع سنوات، وعالج أي انتفاخ صغير فوراً. اختر الألوان الفاتحة للواجهات، ودهاناً قابلاً للغسيل حتى يمكن إزالة الأملاح المترسبة بالماء. وفي الداخل، شغّل التكييف والتهوية أثناء الدهان وبعده في الغرف المطلة على البحر حتى يجف الدهان جيداً.",
    ],
    commonJobs: [
      "الأكثر طلباً في الشعب: دهان واجهات الفلل البحرية ومعالجة الأملاح والانتفاخ، دهان الشرفات والأسوار الحديدية بمانع صدأ، تجديد المجالس والصالات في الفلل العائلية، ومعالجة الرطوبة في الغرف المطلة على البحر.",
    ],
    coverage: [
      "نخدم الشعب البحري وجميع قطع الشعب، ونصل بنفس الفريق إلى حولي والسالمية والقادسية والجابرية.",
    ],
    faq: [
      { q: "ما الدهان المناسب لفيلا مطلة على البحر في الشعب؟", a: "دهان خارجي مخصص للأجواء البحرية بطبقتين فوق مادة عازلة، بعد غسل الواجهة من الأملاح بالماء العذب." },
      { q: "كم مرة يجب دهان واجهة بيت بحري؟", a: "كل ثلاث إلى أربع سنوات تقريباً للواجهة المواجهة للبحر، مع معالجة أي انتفاخ صغير فور ظهوره." },
      { q: "كم سعر دهان واجهة في الشعب؟", a: "يتراوح بين 2.5 و4 دنانير للمتر المربع تقريباً شامل الغسل والعزل والدهان البحري، حسب الارتفاع وحالة الواجهة." },
      { q: "هل تدهنون الشرفات والدرابزين الحديدي؟", a: "نعم، نزيل الصدأ ونضع مانع صدأ ثم دهاناً زيتياً خارجياً مقاوماً للرطوبة." },
    ],
    priceList: [
      { service: "دهان واجهة بحرية", price: "2.5 – 4 د.ك / م²", note: "غسل + عزل + دهان" },
      { service: "دهان شرفة ودرابزين حديد", price: "من 35 د.ك", note: "مانع صدأ + زيتي" },
      { service: "دهان مجلس أو صالة", price: "من 50 د.ك", note: "حسب المساحة" },
      { service: "معالجة رطوبة غرفة", price: "من 20 د.ك", note: "دهان مقاوم للفطريات" },
      { service: "دهان فيلا من الداخل", price: "من 330 د.ك", note: "شامل المواد" },
      { service: "دهان غرفة واحدة", price: "من 25 د.ك", note: "شامل المواد" },
    ],
  },
  "sabaagh-sabah-alahmad": {
    metaTitle: "صباغ صباح الأحمد | أفضل معلم صباغ في صباح الأحمد",
    metaDescription: "صباغ صباح الأحمد لتشطيب البيوت الجديدة بعد الاستلام ودهان شاليهات المدينة البحرية بدهانات مقاومة للرطوبة. اتصل على 90998489.",
    neighbourhoods: ["مدينة صباح الأحمد السكنية", "مدينة صباح الأحمد البحرية", "قطع البيوت الحكومية الجديدة", "منطقة الشاليهات"],
    landmarks: ["مدينة صباح الأحمد البحرية", "مدينة صباح الأحمد السكنية", "منطقة الخيران القريبة"],
    propertyMix: "بيوت حكومية جديدة مستلمة حديثاً في المدينة السكنية، وبيوت وشاليهات على القنوات في المدينة البحرية",
    intro: [
      "مدينة صباح الأحمد تجمع نوعين مختلفين تماماً من العقارات: بيوت حكومية جديدة في المدينة السكنية يستلمها أصحابها ويبدؤون تشطيبها، وبيوت وشاليهات على القنوات في مدينة صباح الأحمد البحرية. لذلك يتوزع عمل <strong>صباغ صباح الأحمد</strong> بين التشطيب الكامل للبيوت الجديدة من الصفر، ودهان الشاليهات والبيوت البحرية بدهانات تتحمل الرطوبة والملوحة.",
      "في البيوت المستلمة حديثاً نبدأ بالمعجون الكامل على مرحلتين ثم الصنفرة والتأسيس وطبقتي التشطيب، وننسق مع مقاول الجبس والكهرباء حتى لا يتعارض العمل. وفي المدينة البحرية نعالج الواجهات والشرفات المعرضة للبحر بنظام دهان خارجي متكامل. وبسبب بعد المنطقة، نرتب العمل بأيام متتالية وفريق ثابت حتى ينتهي البيت دون انقطاع. للحجز في صباح الأحمد اتصل على 90998489.",
    ],
    whyUs: [
      "البيت الحكومي الجديد في صباح الأحمد يُسلَّم بجدران جص خام أو بطبقة أساس بسيطة، وكثير من الملاك يتعجلون الدهان مباشرة فتظهر بعد أشهر بقع وتموجات وشقوق شعرية. التشطيب الصحيح يحتاج معجوناً كاملاً وصنفرة دقيقة قبل أي لون، وهذا ما نلتزم به. أما في الشاليهات على القنوات فالتحدي مختلف: الرطوبة العالية طوال السنة تتطلب دهانات مقاومة للفطريات في الداخل ودهانات بحرية في الخارج.",
    ],
    localTips: [
      "إذا استلمت بيتك في صباح الأحمد، لا تبدأ الدهان قبل انتهاء أعمال الجبس بورد والكهرباء والتكييف، ولا تركب الأرضيات الخشبية قبل الدهان. اختر لوناً موحداً للممرات والدرج ولوناً مختلفاً لكل غرفة نوم إن أردت، فهذا يسهل الصيانة مستقبلاً. وفي الشاليه، اطلب دهاناً قابلاً للغسيل في الداخل لأن الرمل والرطوبة يتركان آثاراً على الجدران بسرعة.",
    ],
    commonJobs: [
      "الأكثر طلباً في صباح الأحمد: تشطيب البيوت الحكومية الجديدة بعد الاستلام بالكامل، دهان أسقف الجبس بورد، دهان الشاليهات والبيوت في المدينة البحرية من الداخل والخارج، ومعالجة الرطوبة في الشاليهات، ثم دهان الأسوار والبوابات.",
    ],
    coverage: [
      "نخدم مدينة صباح الأحمد السكنية ومدينة صباح الأحمد البحرية، ونصل بنفس الفريق إلى الوفرة والأحمدي والفحيحيل والمنقف والخيران.",
    ],
    faq: [
      { q: "استلمت بيتي في صباح الأحمد، متى أبدأ الدهان؟", a: "بعد انتهاء أعمال الجبس بورد والكهرباء والتكييف، وقبل تركيب الأرضيات الخشبية والأثاث، حتى يكون المعجون والتشطيب كاملين." },
      { q: "كم سعر تشطيب دهان بيت حكومي جديد؟", a: "يبدأ تشطيب بيت حكومي جديد في صباح الأحمد من نحو 600 دينار شامل المعجون الكامل والمواد، ويختلف حسب المساحة وعدد الأدوار ونوع الدهان." },
      { q: "هل تدهنون الشاليهات في المدينة البحرية؟", a: "نعم، ندهن الشاليهات والبيوت على القنوات من الداخل والخارج بدهانات مقاومة للرطوبة والملوحة." },
      { q: "كيف تتعاملون مع بعد المنطقة؟", a: "نحدد أياماً متتالية بفريق ثابت حتى ينتهي العمل دون انقطاع، ونجهز كل المواد مسبقاً." },
    ],
    priceList: [
      { service: "تشطيب بيت حكومي جديد", price: "من 600 د.ك", note: "معجون كامل + مواد" },
      { service: "معجون كامل للجدران", price: "من 1.2 د.ك / م²", note: "مرحلتان + صنفرة" },
      { service: "دهان سقف جبس بورد", price: "من 2.5 د.ك / م²", note: "دهان مطفي" },
      { service: "دهان شاليه من الداخل", price: "من 150 د.ك", note: "دهان مقاوم للرطوبة" },
      { service: "دهان واجهة شاليه بحري", price: "2.5 – 4 د.ك / م²", note: "نظام دهان بحري" },
      { service: "دهان سور وبوابة", price: "من 60 د.ك", note: "حسب الطول" },
    ],
  },
};

export const PRIORITY_REGION_SLUGS = Object.keys(PRIORITY_CONTENT);

/** Merge base geo data with any hand-written priority content for the slug. */
export function getRegionContent(slug: string): RegionContent | null {
  const clean = slug.replace(/^\/+/, '');
  const base = BASE[clean];
  if (!base) return null;
  return {
    ...base,
    nearby: LIVE_NEARBY[clean] ?? base.nearby,
    ...(PRIORITY_CONTENT[clean] ?? {}),
  };
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
  const own = content.faq ?? [];
  const generic = genericRegionFaqs(content.area, content.propertyMix);
  // Areas with 4+ hand-written questions keep the list at 6: only the two
  // generic answers that don't overlap area copy (materials, how to book).
  if (own.length >= 4) {
    return [...own, ...generic.filter((f) => f.q.startsWith("هل يوجد صباغ") || f.q.startsWith("كيف أحجز"))].slice(0, 6);
  }
  return [...own, ...generic];
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
