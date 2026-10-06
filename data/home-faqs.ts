/**
 * Homepage FAQ — single source shared by the visible <FAQs> accordion
 * (components/new-sections/Faqs.tsx) and the FAQPage JSON-LD emitted from
 * app/page.tsx. The two MUST stay in sync: never add a JSON-LD-only entry.
 */

export interface HomeFaq {
  question: string;
  answer: string;
}

// Answers restate only what the site already says elsewhere (services-content,
// HowItWorks, AboutSection). No prices, fixed timelines or guarantee terms —
// those depend on the job and are confirmed after the site visit.
export const HOME_FAQS: HomeFaq[] = [
  {
    question: "كم تستغرق أعمال صباغة المنزل؟",
    answer:
      "تعتمد المدة على مساحة المكان وعدد الغرف وحالة الجدران ونوع الدهان المطلوب. نحدد المدة المتوقعة بعد معاينة المكان، وننفذ العمل في الموعد المتفق عليه.",
  },
  {
    question: "هل توفرون مواد الدهان؟",
    answer:
      "نعم، يمكنك اختيار الخدمة شاملة الدهانات الأصلية، أو خدمة العمالة فقط إذا كانت المواد متوفرة لديك.",
  },
  {
    question: "هل تقدمون خدمات صباغة الشقق؟",
    answer:
      "نعم، ننفذ أعمال الصباغة والدهانات للشقق السكنية والشقق المجهزة للتأجير، إضافة إلى المنازل والفلل والمكاتب.",
  },
  {
    question: "ما المناطق التي تخدمها دار الألوان؟",
    answer:
      "نقدم خدماتنا في مختلف مناطق الكويت، ومنها السالمية وحولي والفروانية والجهراء والأحمدي ومبارك الكبير وغيرها.",
  },
  {
    question: "كيف يتم تحديد تكلفة الصباغة؟",
    answer:
      "تعتمد التكلفة على مساحة المكان ونوع الدهان وحالة الجدران ونوع التشطيب المطلوب، ونقدم عرض سعر واضح بعد المعاينة وقبل بدء العمل.",
  },
  {
    question: "هل تقدمون خدمة تركيب ورق الجدران؟",
    answer:
      "نعم، نركّب ورق الجدران بأنواعه، مع تجهيز الجدار وتسويته قبل التركيب.",
  },
  {
    question: "كيف يمكن طلب خدمة الصباغة؟",
    answer:
      "اتصل بنا على 90998489 أو راسلنا عبر واتساب لتحديد موعد المعاينة، ثم نقدم لك عرض السعر قبل بدء العمل.",
  },
];
