/**
 * Per-area content that makes each /regions/{slug} page genuinely unique
 * (brief §4). The base map below gives every Kuwait area its Arabic name and a
 * curated list of adjacent areas; the PRIORITY_CONTENT overrides add
 * hand-written intro paragraphs, neighbourhood lists, landmarks and
 * area-specific FAQ for the highest-demand areas.
 *
 * `getRegionContent(slug)` merges the two. `other-pages/Regions.tsx` builds the
 * page from the result — priority areas render their hand copy, every other
 * area renders content assembled from its own structured data + a slug-seeded
 * template variant, so no two pages read identically.
 */

export interface RegionFaq {
  q: string;
  a: string;
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
  /** Area-specific FAQ appended to the generic set (priority areas). */
  faq?: RegionFaq[];
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
  "indian-painter": { area: "صباغ هندي", governorate: "الكويت", nearby: ["sabaagh-alfarwaniyah", "sabaagh-khaitan", "sabaagh-hawalli", "sabaagh-aljahraa"] },
};

type PriorityOverride = Partial<Omit<RegionContent, 'area' | 'governorate' | 'nearby'>>;

const PRIORITY_CONTENT: Record<string, PriorityOverride> = {
  "sabaagh-alsaalimia": {
    neighbourhoods: ["شارع سالم المبارك","شارع حمد المبارك","بلوك 10","بلوك 12","منطقة البدع المجاورة"],
    landmarks: ["مجمع سيتي سنتر","مجمع الفنار","شارع الخليج العربي","ساحة السالمية"],
    propertyMix: "شقق سكنية وأبراج ومحلات تجارية بكثافة عالية إلى جانب فلل قديمة في البلوكات الداخلية",
    intro: ["تُعد السالمية من أكثر مناطق محافظة حولي كثافة سكانية وحركة تجارية، وهذا يعني طلباً مستمراً على خدمات \u003cstrong>صباغ السالمية\u003c/strong> لدهان الشقق المؤجَّرة والأبراج والمحلات التجارية على شارعي سالم المبارك وحمد المبارك. نعمل في السالمية منذ سنوات ونعرف طبيعة مبانيها: شقق يعاد تأجيرها بسرعة وتحتاج دهاناً نظيفاً سريع الجفاف، وفلل قديمة في البلوكات الداخلية تحتاج معالجة رطوبة وإعادة تأسيس قبل الطلاء.","نقدم في السالمية دهان الشقق كاملة خلال يوم إلى يومين مع إمكانية العمل مساءً حتى لا تتعطل حركة المحل أو المكتب، ونوفّر دهانات جوتن وناشيونال الأصلية بفواتير رسمية، مع معالجة تشققات الجص وعزل الحمامات والمطابخ ضد الرطوبة القادمة من قرب البحر. اتصل على 90998489 لمعاينة مجانية في السالمية وعرض سعر تفصيلي بدون التزام."],
    faq: [{"q":"كم سعر دهان شقة في السالمية؟","a":"يبدأ دهان شقة غرفتين في السالمية من 70 ديناراً ودهان شقة ثلاث غرف من 90 ديناراً شامل المواد، ويختلف السعر حسب حالة الجدران وعدد الطبقات المطلوبة. نقدم معاينة وعرض سعر مجاني."},{"q":"هل تعملون في محلات السالمية التجارية مساءً؟","a":"نعم، ننفذ دهان المحلات والمكاتب في السالمية خارج ساعات الدوام أو ليلاً لتقليل تعطّل العمل، ونسلّم المكان نظيفاً وجاهزاً في الصباح."},{"q":"شقتي في برج بالسالمية قريب من البحر وبها رطوبة، ما الحل؟","a":"نعالج الرطوبة أولاً بكشف مصدرها ثم معجون وعزل مقاوم للماء ودهان مضاد للفطريات، وهذا شائع في أبراج السالمية القريبة من شارع الخليج."}],
  },
  "sabaagh-hawalli": {
    neighbourhoods: ["ميدان حولي","شارع تونس","شارع بيروت","النقرة","منطقة السلام المجاورة"],
    landmarks: ["مجمع سيتي مول","شارع تونس التجاري","ميدان حولي"],
    propertyMix: "عمارات استثمارية وشقق مؤجرة كثيفة مع محلات على الشوارع التجارية",
    intro: ["حولي منطقة استثمارية بامتياز، ومعظم العمل الذي يطلبه سكانها من \u003cstrong>صباغ حولي\u003c/strong> هو دهان شقق العمارات قبل التأجير وتجديد المحلات على شارع تونس وشارع بيروت وميدان حولي. هذه المباني كثيرة الاستخدام وتحتاج صباغاً سريعاً ومنظماً ينهي الشقة في يوم واحد بدهان يتحمّل كثرة التنقل.","نتعامل في حولي مع ملاك العمارات ومكاتب العقار مباشرة، ونوفّر جدول تنفيذ لعدة شقق في نفس العمارة، مع دهانات أصلية وضمان على العمل. ننفّذ أيضاً معالجة التشققات والرطوبة في العمارات القديمة قرب النقرة. للحجز والمعاينة المجانية في حولي اتصل على 90998489."],
    faq: [{"q":"أملك عمارة في حولي وأريد دهان عدة شقق، هل يوجد سعر جملة؟","a":"نعم، نقدم سعراً خاصاً لدهان أكثر من شقة في نفس العمارة بحولي مع جدول تنفيذ متتابع حتى لا تتوقف عملية التأجير."},{"q":"كم يستغرق دهان شقة للتأجير في حولي؟","a":"شقة غرفتين في حولي تُدهن خلال يوم واحد، وشقة ثلاث غرف خلال يوم إلى يومين، وتكون جاهزة للتأجير مباشرة."}],
  },
  "sabaagh-alfarwaniyah": {
    neighbourhoods: ["شارع حبيب مناور","قطعة 1","قطعة 4","منطقة الشارع الرئيسي","جليب الشيوخ المجاورة"],
    landmarks: ["سوق الفروانية","شارع حبيب مناور","مستشفى الفروانية"],
    propertyMix: "عمارات شعبية وشقق مؤجرة ومحلات تجارية على الشوارع الرئيسية",
    intro: ["الفروانية من أكثر مناطق الكويت طلباً على \u003cstrong>صباغ الفروانية\u003c/strong> بحكم كثافة العمارات الشعبية والشقق المؤجرة فيها وفي محيطها. غالبية الطلبات هنا دهان شقق بسعر اقتصادي وسرعة في التنفيذ، مع معالجة تقشير الدهان القديم والرطوبة في العمارات ذات العمر الطويل.","نقدم في الفروانية دهاناً نظيفاً بأسعار تناسب العمائر الاستثمارية، مع خيار العمالة فقط أو الخدمة شاملة المواد الأصلية. نعمل طوال أيام الأسبوع وننهي الشقة في يوم، ونعطي فاتورة وضماناً على العمل. اتصل على 90998489 لمعاينة مجانية في الفروانية."],
    faq: [{"q":"أبغى صباغ رخيص وشاطر في الفروانية، تنفعوني؟","a":"نعم، نقدم في الفروانية دهاناً اقتصادياً بجودة جيدة يبدأ من 60 ديناراً للشقة الصغيرة، مع إمكانية توفيرك للمواد وتنفيذنا للعمالة فقط."},{"q":"الدهان يتقشّر في شقتي بالفروانية، وش السبب؟","a":"غالباً بسبب رطوبة أو دهان قديم على طبقة غير مؤسَّسة. نكشط الطبقة الضعيفة، نعالج الرطوبة، نؤسس من جديد ثم ندهن، ونضمن عدم التقشير."}],
  },
  "sabaagh-aljahraa": {
    neighbourhoods: ["القصر","النعيم","العيون","الواحة","تيماء","سعد العبدالله المجاورة"],
    landmarks: ["القصر الأحمر","سوق الجهراء","طريق الجهراء السريع"],
    propertyMix: "بيوت حكومية وفلل عائلية كبيرة مع بعض العمارات في المناطق الجديدة",
    intro: ["الجهراء منطقة سكنية عائلية تغلب عليها البيوت الحكومية والفلل الكبيرة في القصر والنعيم والعيون وسعد العبدالله، وطلبات \u003cstrong>صباغ الجهراء\u003c/strong> عادة دهان فيلا كاملة أو تجديد بيت العائلة من الداخل والخارج. الواجهات هنا تتعرض للغبار والحرارة الشديدة، لذلك ننصح دائماً بدهان خارجي مقاوم للأشعة والأتربة.","ننفّذ في الجهراء دهان الفلل الكاملة خلال 3 إلى 5 أيام حسب المساحة، مع صنفرة ومعجون وتأسيس ودهانات خارجية عالية التحمل، ومعالجة تشققات الأسطح والجدران. نصل إليك في جميع مناطق الجهراء ونقدم معاينة وعرض سعر مجاني على 90998489."],
    faq: [{"q":"كم سعر دهان فيلا كاملة في الجهراء؟","a":"يبدأ دهان فيلا كاملة داخلي في الجهراء من 200 دينار ويزيد حسب المساحة وعدد الأدوار، والدهان الخارجي يُحسب بالمتر حسب ارتفاع الواجهة."},{"q":"واجهة بيتي في الجهراء متأثرة بالغبار والشمس، أي دهان تنصحون به؟","a":"ننصح بدهان خارجي أكريليك مقاوم للأشعة فوق البنفسجية وسهل الغسل، مع طبقة أساس عازلة، وهو الأنسب لمناخ الجهراء."}],
  },
  "sabaagh-al-ahmadi": {
    neighbourhoods: ["الأحمدي القديمة","ضاحية فهد الأحمد المجاورة","حي الشرق","حي الوسط"],
    landmarks: ["حدائق الأحمدي","مستشفى الأحمدي","مبنى شركة نفط الكويت"],
    propertyMix: "بيوت شركة النفط ذات الطراز القديم وفلل عائلية وحدائق واسعة",
    intro: ["مدينة الأحمدي معروفة ببيوتها ذات الطراز القديم المملوكة لشركة نفط الكويت ومساحاتها الخضراء، وطلبات \u003cstrong>صباغ الأحمدي\u003c/strong> غالباً تجديد بيوت قديمة تحتاج معالجة رطوبة وتشققات وإعادة دهان داخلي وخارجي محافظ على الطابع العام للحي.","لدينا خبرة في التعامل مع الجدران السميكة القديمة في الأحمدي التي تحتاج معجوناً ومواد تأسيس خاصة، وننفّذ الدهان الخارجي بألوان هادئة تناسب طابع المدينة. نقدم معاينة مجانية في الأحمدي والفحيحيل والمناطق المجاورة على 90998489."],
    faq: [{"q":"بيتي في الأحمدي قديم وجدرانه سميكة وبها رطوبة، تقدرون تعالجونها؟","a":"نعم، بيوت الأحمدي القديمة نتعامل معها كثيراً؛ نكشف مصدر الرطوبة، نجفف ونعالج بمواد عازلة ثم معجون ودهان مضاد للفطريات."},{"q":"هل تلتزمون بألوان هادئة تناسب طابع مدينة الأحمدي؟","a":"نعم، نساعدك في اختيار ألوان خارجية متناسقة مع طابع الحي، وننفّذ الداخلي بأي درجات تختارها."}],
  },
  "sabaagh-khaitan": {
    neighbourhoods: ["خيطان القديمة","خيطان الجديدة","ابرق خيطان","شارع المطاعم"],
    landmarks: ["جمعية خيطان","شارع المطار","سوق خيطان"],
    propertyMix: "عمارات استثمارية وشقق مؤجرة كثيفة وبعض البيوت القديمة",
    intro: ["خيطان من أكثر مناطق محافظة الفروانية طلباً على دهان الشقق الاستثمارية، وأغلب ما يطلبه سكانها من \u003cstrong>صباغ خيطان\u003c/strong> هو تجهيز شقة للتأجير بسرعة وسعر مناسب، أو تجديد شقة العائلة في عمارة قديمة.","نعمل في خيطان القديمة والجديدة وابرق خيطان، وننهي الشقة في يوم واحد بدهان نظيف يتحمّل الاستخدام، مع معالجة تقشير الدهان القديم. خدمة العمالة فقط متاحة إذا كنت تملك المواد. للمعاينة المجانية في خيطان اتصل على 90998489."],
    faq: [{"q":"كم سعر دهان شقة للتأجير في خيطان؟","a":"يبدأ من 60 إلى 90 ديناراً حسب عدد الغرف وحالة الجدران، شامل المواد، مع إمكانية خصم عند دهان أكثر من شقة."}],
  },
  "sabaagh-sabah-alsaalim": {
    neighbourhoods: ["قطعة 1","قطعة 5","قطعة 8","منطقة الجمعية"],
    landmarks: ["جمعية صباح السالم","حديقة صباح السالم","جامعة الكويت - الشدادية القريبة"],
    propertyMix: "بيوت حكومية وفلل عائلية كبيرة نظام دورين وسرداب",
    intro: ["صباح السالم منطقة عائلية هادئة في محافظة مبارك الكبير تغلب عليها البيوت الحكومية والفلل الكبيرة، وطلبات \u003cstrong>صباغ صباح السالم\u003c/strong> عادة دهان فيلا كاملة أو دور كامل بعد استلامه أو قبل الزواج، مع تنفيذ ديكورات جبس وجدران مميزة في المجالس.","ننفّذ في صباح السالم دهان الفلل بمراحل منظمة: صنفرة، معجون، تأسيس، وطبقتي تشطيب، مع دهانات ديكورية وجدران بروفايل في المجالس وغرف الجلوس. الدور الكامل يُنجز في 3 إلى 4 أيام. معاينة مجانية على 90998489."],
    faq: [{"q":"استلمت دور في صباح السالم وأبغى أدهنه كامل مع ديكور مجلس، تنفعوني؟","a":"نعم، ننفذ الدور كاملاً مع ديكور جبس وجدران مميزة في المجلس والصالة، ونعطيك عرض سعر يفصّل الدهان عن أعمال الديكور."}],
  },
  "sabaagh-alfhahil": {
    neighbourhoods: ["الفحيحيل القديمة","ساحل الفحيحيل","بلوك 7","بلوك 11"],
    landmarks: ["مجمع الكوت","ساحل الفحيحيل","سوق الفحيحيل القديم"],
    propertyMix: "شقق مؤجرة وعمارات ومحلات تجارية مع بيوت قديمة قرب الساحل",
    intro: ["الفحيحيل مركز تجاري وسكني مهم في محافظة الأحمدي، وطلبات \u003cstrong>صباغ الفحيحيل\u003c/strong> تتنوع بين دهان الشقق المؤجرة والمحلات في مجمع الكوت ومحيطه، وتجديد البيوت القديمة القريبة من الساحل والتي تتأثر رطوبتها بالملوحة.","نعالج في الفحيحيل مشاكل الرطوبة والملوحة الشائعة قرب البحر بعزل مناسب ودهانات مقاومة للفطريات، وننفّذ دهان المحلات مساءً. معاينة وعرض سعر مجاني في الفحيحيل والمنقف والمهبولة على 90998489."],
    faq: [{"q":"بيتي في الفحيحيل قريب من البحر وفيه ملوحة ورطوبة بالجدران، وش الحل؟","a":"نكشط الأجزاء المتملّحة، نعالج بمواد مانعة للأملاح وطبقة عزل، ثم معجون ودهان مقاوم للرطوبة، وهذه مشكلة شائعة في بيوت ساحل الفحيحيل ونتعامل معها كثيراً."}],
  },
  "sabaagh-aljabriya": {
    neighbourhoods: ["قطعة 1أ","قطعة 6","قطعة 11","محيط جامعة الخليج"],
    landmarks: ["مستشفى مبارك الكبير","جامعة الخليج للعلوم والتكنولوجيا","جمعية الجابرية"],
    propertyMix: "فلل عائلية وبعض العمارات وشقق للطلبة قرب الجامعات",
    intro: ["الجابرية منطقة سكنية راقية في محافظة حولي قريبة من مستشفى مبارك وجامعة الخليج، وطلبات \u003cstrong>صباغ الجابرية\u003c/strong> تجمع بين دهان الفلل العائلية وتجديد شقق مؤجرة للطلبة والعاملين في المستشفى.","ننفّذ في الجابرية دهانات داخلية بتشطيب ناعم وديكورات جبس في المجالس، ودهاناً خارجياً للواجهات، مع التزام تام بالمواعيد والنظافة. للمعاينة المجانية في الجابرية اتصل على 90998489."],
  },
  "sabaagh-bayan": {
    neighbourhoods: ["قطعة 6","قطعة 10","قطعة 12","محيط قصر بيان"],
    landmarks: ["قصر بيان","مجمع الأسواق","حديقة بيان"],
    propertyMix: "فلل كبيرة وقصور خاصة بمساحات واسعة",
    intro: ["بيان من أرقى مناطق محافظة حولي وتغلب عليها الفلل الكبيرة والقصور الخاصة، وطلبات \u003cstrong>صباغ بيان\u003c/strong> عادة دهان فيلا كاملة بتشطيبات فاخرة: جدران بروفايل، دهانات مخملية ومعدنية، وديكورات جبس مصمّمة.","نخصّص لمشاريع بيان فريقاً للتشطيبات الدقيقة، ونقدّم عينات ألوان وكتالوج دهانات ديكورية قبل التنفيذ، مع معجون مرتين وصنفرة دقيقة لضمان نعومة الجدران. معاينة مجانية على 90998489."],
  },
  "sabaagh-salwa": {
    neighbourhoods: ["شارع الخليج","قطعة 3","قطعة 7","قطعة 12"],
    landmarks: ["شارع سلوى","جمعية سلوى","كورنيش سلوى"],
    propertyMix: "فلل عائلية وبعض العمارات الصغيرة قرب شارع الخليج",
    intro: ["سلوى منطقة عائلية مطلة على شارع الخليج في محافظة حولي، وطلبات \u003cstrong>صباغ سلوى\u003c/strong> غالباً تجديد فلل قائمة من الداخل والخارج، مع اهتمام واضح بألوان الواجهات لقربها من البحر والحاجة لدهان يتحمّل الرطوبة.","ننفّذ في سلوى دهانات خارجية مقاومة للملوحة والرطوبة، وداخلية بتشطيب ناعم، مع معالجة أي تشققات في الأسطح. معاينة وعرض سعر مجاني في سلوى على 90998489."],
  },
  "sabaagh-alrumaithiya": {
    neighbourhoods: ["قطعة 2","قطعة 6","قطعة 9","شارع المطاعم"],
    landmarks: ["جمعية الرميثية","حديقة الرميثية","شارع المها"],
    propertyMix: "فلل عائلية متوسطة وكبيرة مع القليل من الشقق",
    intro: ["الرميثية منطقة عائلية مستقرة في محافظة حولي، وطلبات \u003cstrong>صباغ الرميثية\u003c/strong> عادة دهان بيت العائلة كاملاً بعد سنوات من آخر دهان، مع معالجة تشققات الجص وإعادة دهان الأسقف والدرج.","ننفّذ في الرميثية دهان الفلل بمراحل نظيفة مع تغطية كاملة للأثاث والأرضيات، ودهانات أصلية بضمان. الفيلا الكاملة تُنجز في 3 إلى 5 أيام. معاينة مجانية على 90998489."],
  },
  "sabaagh-mubarak-al-kabeer": {
    neighbourhoods: ["قطعة 1","قطعة 4","قطعة 7"],
    landmarks: ["جمعية مبارك الكبير","حديقة مبارك الكبير"],
    propertyMix: "بيوت حكومية وفلل عائلية كبيرة",
    intro: ["مبارك الكبير منطقة عائلية هادئة تغلب عليها البيوت الحكومية والفلل الكبيرة، وطلبات \u003cstrong>صباغ مبارك الكبير\u003c/strong> عادة دهان فيلا كاملة أو دور كامل مع ديكورات جبس في المجالس.","ننفّذ الدهان في مبارك الكبير على مراحل: صنفرة، معجون، تأسيس، وطبقتي تشطيب، مع خيار الدهانات الديكورية للجدران المميزة. معاينة وعرض سعر مجاني على 90998489."],
  },
  "sabaagh-jaber-alahmad": {
    neighbourhoods: ["قطعة 1","قطعة 3","قطعة 5","المنطقة الاستثمارية"],
    landmarks: ["مجمع الأفنيوز - الوصلة القريبة","جمعية جابر الأحمد"],
    propertyMix: "فلل حديثة نظام موحّد وشقق استثمارية جديدة",
    intro: ["ضاحية جابر الأحمد من المناطق الحديثة في محافظة العاصمة، وبيوتها ذات تصميم موحّد نسبياً، وطلبات \u003cstrong>صباغ جابر الأحمد\u003c/strong> غالباً دهان فيلا مستلمة حديثاً بالكامل، أو دهان شقة في العمارات الاستثمارية الجديدة قبل السكن.","ننفّذ في جابر الأحمد دهان الفلل الجديدة بمعجون كامل وتأسيس وطبقتي تشطيب، مع ديكورات جبس وجدران مميزة حسب الطلب. الشقة تُنجز في يوم إلى يومين. معاينة مجانية على 90998489."],
  },
  "sabaagh-alshuwaykh": {
    neighbourhoods: ["الشويخ السكنية","الشويخ التعليمية","الشويخ الصناعية","ميناء الشويخ"],
    landmarks: ["جامعة الكويت - الشويخ","ميناء الشويخ","مستشفى الأميري القريب"],
    propertyMix: "بيوت سكنية قديمة ومكاتب ومحلات ومخازن في المنطقة الصناعية",
    intro: ["الشويخ منطقة مختلطة في محافظة العاصمة تجمع السكن والتعليم والصناعة، وطلبات \u003cstrong>صباغ الشويخ\u003c/strong> تتنوع بين دهان بيوت الشويخ السكنية القديمة، وتجهيز المكاتب والمحلات، ودهان المخازن والورش في الشويخ الصناعية.","ننفّذ في الشويخ دهان المكاتب والمحلات خارج أوقات الدوام، ودهان المخازن بمساحات كبيرة بأسعار بالمتر، إضافة إلى دهان البيوت السكنية. معاينة مجانية على 90998489."],
    faq: [{"q":"عندي مخزن كبير في الشويخ الصناعية، كيف تحسبون السعر؟","a":"نحسب دهان المخازن والورش بالمتر المربع حسب المساحة وارتفاع السقف ونوع الدهان، ونقدم عرضاً مكتوباً بعد المعاينة."}],
  },
  "sabaagh-almanqaf": {
    neighbourhoods: ["بلوك 1","بلوك 3","بلوك 4","ساحل المنقف"],
    landmarks: ["ميناء المنقف لصيد السمك","ساحل المنقف"],
    propertyMix: "شقق مؤجرة وعمارات مع بيوت قديمة قرب الساحل",
    intro: ["المنقف منطقة ساحلية في محافظة الأحمدي عالية الكثافة السكانية، وطلبات \u003cstrong>صباغ المنقف\u003c/strong> غالباً دهان شقق مؤجرة بسرعة وسعر مناسب، مع معالجة الرطوبة والملوحة في المباني القريبة من البحر.","ننفّذ في المنقف دهان الشقق في يوم واحد بدهانات مقاومة للرطوبة، مع خيار العمالة فقط. معاينة وعرض سعر مجاني في المنقف والمهبولة والفحيحيل على 90998489."],
  },
  "sabaagh-almahboula": {
    neighbourhoods: ["بلوك 1","بلوك 2","منطقة أبراج المهبولة","ساحل المهبولة"],
    landmarks: ["أبراج المهبولة السكنية","ساحل المهبولة"],
    propertyMix: "أبراج سكنية وشقق مؤجرة كثيفة قرب البحر",
    intro: ["المهبولة منطقة أبراج وشقق مؤجرة كثيفة في محافظة الأحمدي، وأغلب ما يطلبه سكانها من \u003cstrong>صباغ المهبولة\u003c/strong> دهان شقق في الأبراج قبل السكن أو التأجير، مع معالجة الرطوبة الناتجة عن قرب البحر وسوء التهوية في بعض الأبراج.","ننفّذ في المهبولة دهان شقق الأبراج بسرعة ونظافة، ونعالج الرطوبة والعفن في الحمامات والمطابخ بدهانات مضادة للفطريات. معاينة مجانية على 90998489."],
  },
  "sabaagh-subah-alanasir": {
    neighbourhoods: ["قطعة 1","قطعة 3","قطعة 5"],
    landmarks: ["جمعية صباح الناصر","حديقة صباح الناصر"],
    propertyMix: "بيوت شعبية وفلل عائلية متوسطة",
    intro: ["صباح الناصر منطقة عائلية في محافظة الفروانية تغلب عليها البيوت الشعبية والفلل المتوسطة، وطلبات \u003cstrong>صباغ صباح الناصر\u003c/strong> عادة تجديد بيت العائلة من الداخل بعد سنوات، أو دهان دور للإيجار.","ننفّذ في صباح الناصر دهاناً اقتصادياً نظيفاً بجودة جيدة، مع معالجة تقشير الدهان القديم والتشققات. معاينة وعرض سعر مجاني على 90998489."],
  },
  "indian-painter": {
    propertyMix: "جميع أنواع المباني في مختلف مناطق الكويت",
    intro: ["يبحث كثير من العملاء عن \u003cstrong>صباغ هندي\u003c/strong> في الكويت بحكم الخبرة الطويلة والسعر المناسب الذي يقدّمه فنيو الدهان الهنود في تشطيب الشقق والفلل وتركيب ورق الجدران والجبس بورد. فريقنا يضم صباغين هنود مدرَّبين على أحدث تقنيات الدهان والديكور.","نقدم خدمة الصباغ الهندي في جميع مناطق الكويت: دهان داخلي وخارجي، دهانات ديكورية، ورق جدران، ومعالجة تشققات ورطوبة، بأسعار تنافسية وفاتورة رسمية وضمان على العمل. اتصل على 90998489 لمعاينة مجانية."],
    faq: [{"q":"هل الصباغ الهندي أرخص من غيره في الكويت؟","a":"غالباً تكون أسعار الصباغ الهندي تنافسية، لكن السعر النهائي يعتمد على حالة الجدران ونوع الدهان وحجم العمل. نقدم عرض سعر مجاني بعد المعاينة."}],
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

/** Generic area FAQ, parameterised by area name. */
export function genericRegionFaqs(area: string): RegionFaq[] {
  return [
    {
      q: `كم سعر الصباغ في ${area}؟`,
      a: `تبدأ أسعار الصباغ في ${area} من 1.5 دينار كويتي للمتر المربع، وقد تصل إلى 3 دنانير حسب نوع الدهان. دهان الغرفة الكاملة يبدأ من 25 دينار شامل المواد. نقدم معاينة مجانية وعرض سعر تفصيلي.`,
    },
    {
      q: "هل تقدمون الخدمة مع المواد؟",
      a: "نعم، يمكن اختيار الخدمة شاملة المواد (دهانات جوتن أو ناشيونال أو سكيب) أو خدمة العمالة فقط إذا كنت تمتلك المواد.",
    },
    {
      q: "هل تستخدمون دهانات أصلية ومعتمدة؟",
      a: "نعم، نستخدم حصراً دهانات أصلية معتمدة من شركات عالمية، مع فاتورة رسمية لجميع المواد.",
    },
    {
      q: "هل يمكن تنفيذ تصميمات ديكورية خاصة؟",
      a: "نعم، نقدم دهانات مخملية ومعدنية وثلاثية الأبعاد وورق جدران، ونساعدك في اختيار التصميم المناسب.",
    },
    {
      q: `كم يستغرق دهان شقة كاملة في ${area}؟`,
      a: "عادة يوم إلى يومين للشقة، ومن 3 إلى 5 أيام للفيلا الكاملة، مع الالتزام بالموعد المتفق عليه.",
    },
    {
      q: "هل تضمنون جودة العمل؟",
      a: "نعم، نقدم ضماناً على العمل والمواد ونعود لأي إصلاح مجاناً خلال فترة الضمان.",
    },
    {
      q: "هل تعملون في الإجازات؟",
      a: "نعم، نعمل طوال أيام الأسبوع بما فيها الجمعة والسبت والأعياد.",
    },
    {
      q: "ما الدهانات المناسبة للمطبخ والحمام؟",
      a: "ننصح بالدهانات المقاومة للرطوبة كالإيبوكسي أو البلاستيكية المقاومة للماء لمنع العفن.",
    },
    {
      q: "كيف أحجز معاينة مجانية؟",
      a: "اتصل على 90998489 أو أرسل رسالة واتساب وسنتواصل معك خلال ساعات لتحديد موعد المعاينة.",
    },
  ];
}

/** Area-specific FAQ (if any) followed by the generic set — the exact list the
 *  location page renders AND feeds into its FAQPage JSON-LD. */
export function buildRegionFaqs(content: RegionContent): RegionFaq[] {
  return [...(content.faq ?? []), ...genericRegionFaqs(content.area)];
}
