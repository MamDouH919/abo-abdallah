"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

const steps = [
  { icon: <PhoneInTalkIcon fontSize="large" />, title: "تواصل معنا", desc: "اتصل أو راسلنا على واتساب لتحديد موعد معاينة." },
  { icon: <FactCheckIcon fontSize="large" />, title: "تحديد احتياجات العمل", desc: "معاينة المكان وتحديد نوع الدهان والتكلفة المناسبة." },
  { icon: <FormatPaintIcon fontSize="large" />, title: "بدء أعمال الصباغة", desc: "تنفيذ العمل في الموعد المتفق عليه وتسليم المكان نظيفاً." },
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
          كيف تحصل على الخدمة؟
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
