"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// What the workmanship guarantee covers. The duration is set per job in the
// written quote, so no fixed period is stated here.
const POINTS = [
  {
    title: "ضمان على جودة التنفيذ",
    desc: "إذا ظهر في الدهان تقشر أو فقاعات أو اختلاف في اللون بسبب التنفيذ، نعود لإصلاحه دون تكلفة إضافية خلال فترة الضمان المكتوبة في عرض السعر.",
  },
  {
    title: "دهانات أصلية بفاتورة",
    desc: "نستخدم دهانات أصلية من شركات معروفة، ونكتب اسم الشركة ورقم اللون في عرض السعر حتى تتمكن من مطابقته في أي ترميم لاحق.",
  },
  {
    title: "سعر مكتوب بلا مفاجآت",
    desc: "عرض السعر يفصل المواد عن العمالة ويحدد الأعمال المطلوبة ومدة التنفيذ، ولا نضيف أي تكلفة لم يتم الاتفاق عليها مسبقاً.",
  },
  {
    title: "تسليم نظيف",
    desc: "نغطي الأثاث والأرضيات قبل البدء، وننظف الحواف والأرضيات بعد الانتهاء، ونراجع العمل معك قبل التسليم.",
  },
];

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50],
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
}));

export default function Guarantee() {
  return (
    <Wrapper id="guarantee" aria-labelledby="guarantee-title">
      <Container maxWidth="lg">
        <Title variant="h2" id="guarantee-title">
          الضمان والتزاماتنا
        </Title>
        <Typography color="text.secondary" textAlign="center" maxWidth={720} mx="auto" mb={5}>
          ما نلتزم به مكتوب قبل أن نبدأ، حتى تعرف بالضبط ما الذي تحصل عليه.
        </Typography>
        <Grid container spacing={4}>
          {POINTS.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }} display="flex" gap={2}>
              <VerifiedUserIcon color="primary" fontSize="large" aria-hidden="true" />
              <div>
                <Typography component="h3" variant="h6" fontWeight={700} gutterBottom>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.9}>
                  {p.desc}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
