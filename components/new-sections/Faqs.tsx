"use client";

import { styled } from "@mui/material/styles";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = styled("section")(() => ({
  backgroundColor: "#fff",
  padding: "80px 20px",
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: "50px",
  color: theme.palette.primary.main,
}));

export default function FAQs() {
  const faqs = [
    {
      question: "ما هي أسعار خدمات صباغ الكويت؟",
      answer: "أسعارنا تنافسية وتعتمد على نوع الخدمة وحجم المكان، ويمكن طلب عرض سعر مجاني.",
    },
    {
      question: "هل تقدمون ضمان على الأعمال؟",
      answer: "نعم، جميع خدماتنا تشمل ضمان على جودة الدهان والتشطيب لضمان رضا العميل.",
    },
    {
      question: "هل تستخدمون مواد صديقة للبيئة؟",
      answer: "نستخدم دهانات عالية الجودة وصديقة للبيئة، آمنة لجميع أفراد الأسرة.",
    },
    {
      question: "كم يستغرق تنفيذ مشروع الدهان؟",
      answer: "يعتمد ذلك على حجم المشروع. شقة متوسطة الحجم تستغرق من 3-5 أيام، بينما الفلل قد تستغرق من 7-14 يوم.",
    },
    {
      question: "هل تقدمون خدمات في جميع مناطق الكويت؟",
      answer: "نعم، نقدم خدماتنا في جميع مناطق الكويت بما في ذلك السالمية، حولي، الفروانية، الجهراء، والأحمدي وغيرها.",
    },
    {
      question: "ما هي أنواع الدهانات التي تستخدمونها؟",
      answer: "نستخدم أفضل الماركات العالمية مثل جوتن، دهانات ناشونال، وغيرها من الدهانات المعتمدة عالية الجودة.",
    },
    {
      question: "هل يمكنني اختيار الألوان بنفسي؟",
      answer: "بالتأكيد! نوفر لك كتالوج واسع من الألوان، كما نقدم استشارات مجانية لمساعدتك في اختيار الألوان المناسبة.",
    },
    {
      question: "هل تقومون بتجهيز الجدران قبل الدهان؟",
      answer: "نعم، نقوم بتجهيز كامل للجدران يشمل التنظيف، المعجون، الصنفرة، والتأسيس لضمان أفضل نتيجة.",
    },
    {
      question: "هل تقدمون خدمة تركيب ورق الجدران؟",
      answer: "نعم، لدينا فنيون محترفون متخصصون في تركيب جميع أنواع ورق الجدران بأحدث التقنيات.",
    },
    {
      question: "كيف يمكنني الحصول على عرض سعر؟",
      answer: "يمكنك الاتصال بنا على 90998489 أو إرسال طلبك عبر الواتساب، وسنقوم بزيارة الموقع وتقديم عرض سعر مفصل مجاناً.",
    },
    {
      question: "هل تنظفون المكان بعد انتهاء العمل؟",
      answer: "نعم، نلتزم بتنظيف المكان بالكامل بعد انتهاء العمل وإزالة جميع مخلفات الدهان.",
    },
    {
      question: "ما الفرق بين الدهانات الداخلية والخارجية؟",
      answer: "الدهانات الخارجية مقاومة للعوامل الجوية والرطوبة والحرارة، بينما الداخلية تركز على الجمال وسهولة التنظيف.",
    },
    {
      question: "هل تقدمون خدمات للشركات والمباني التجارية؟",
      answer: "نعم، نخدم العملاء السكنيين والتجاريين بما في ذلك المكاتب، المحلات، والمباني الكبيرة.",
    },
    {
      question: "كم مرة يجب إعادة دهان المنزل؟",
      answer: "عادة ننصح بإعادة الدهان كل 5-7 سنوات للداخل و3-5 سنوات للخارج حسب نوع الدهان وحالة الجدران.",
    },
    {
      question: "هل يمكنكم العمل في أوقات محددة تناسبني؟",
      answer: "نعم، نحن مرنون في مواعيد العمل ويمكننا تنسيق الأوقات التي تناسب جدولك الزمني.",
    },
  ];

  return (
    <FaqSection id="faqs">
      <Container>
        <Title variant="h2">الأسئلة الشائعة – صباغ الكويت</Title>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="h3">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="p">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </FaqSection>
  );
}
