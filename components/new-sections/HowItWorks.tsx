"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

const steps = [
  { icon: <PhoneInTalkIcon fontSize="large" />, title: "تواصل معنا", desc: "اتصل على 90998489 أو راسلنا على واتساب، وأخبرنا بالمنطقة ونوع العقار والأعمال المطلوبة، ويمكنك إرسال صور للجدران لتقدير أولي." },
  { icon: <FactCheckIcon fontSize="large" />, title: "المعاينة", desc: "نزور المكان لتحديد حالة الجدران والأسقف، وما تحتاجه من معالجة تشققات أو رطوبة، وعدد طبقات الدهان المناسب." },
  { icon: <FactCheckIcon fontSize="large" />, title: "عرض السعر المكتوب", desc: "عرض يفصل تكلفة المواد عن العمالة ويحدد نوع الدهان ورقم اللون ومدة التنفيذ، والاتفاق على موعد البدء." },
  { icon: <FormatPaintIcon fontSize="large" />, title: "الحماية والتجهيز", desc: "تغطية الأثاث والأرضيات، ثم الكشط والمعجون والصنفرة ومعالجة التشققات، وهي المرحلة التي تحدد عمر الدهان." },
  { icon: <FormatPaintIcon fontSize="large" />, title: "التأسيس والدهان", desc: "طبقة أساس مناسبة للسطح، ثم طبقات الدهان بالتسلسل الصحيح مع ترك وقت الجفاف الكافي بين كل طبقة." },
  { icon: <FormatPaintIcon fontSize="large" />, title: "المراجعة والتسليم", desc: "تنظيف الحواف والأرضيات، ومراجعة العمل معك تحت الإضاءة قبل التسليم، وإصلاح أي ملاحظة فوراً." },
];

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50],
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(5),
}));

const StepNumber = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 56,
  height: 56,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  margin: "0 auto 16px",
}));

export default function HowItWorks() {
  return (
    <Wrapper id="how-it-works" aria-labelledby="how-it-works-title">
      <Container maxWidth="lg">
        <Title variant="h2" id="how-it-works-title">
          خطوات العمل: كيف ننفذ الصباغة من المعاينة حتى التسليم
        </Title>
        <Grid container spacing={4}>
          {steps.map((step, i) => (
            <Grid key={step.title} size={{ xs: 12, md: 4 }}>
              <div style={{ textAlign: "center" }}>
                <StepNumber aria-hidden="true">{step.icon}</StepNumber>
                <Typography component="h3" variant="h6" fontWeight={700} gutterBottom>
                  {i + 1}. {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
