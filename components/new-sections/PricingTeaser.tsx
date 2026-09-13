"use client";

import { styled, alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const FACTORS = [
  "مساحة المكان",
  "نوع الدهان المطلوب",
  "حالة الجدران الحالية",
  "نوع التشطيب",
];

const Section = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: theme.palette.primary.main,
  textAlign: "center",
  marginBottom: theme.spacing(1),
})) as typeof Typography;

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: "center",
  maxWidth: 680,
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: theme.spacing(2),
}));

const FactorsGrid = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const FactorChip = styled("span")(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(0.75, 2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.grey[100],
  color: theme.palette.text.secondary,
  fontSize: "0.85rem",
  fontWeight: 600,
}));

const Banner = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 60%, ${theme.palette.primary.light} 100%)`,
  borderRadius: theme.shape.borderRadius * 4,
  padding: theme.spacing(3.5, 4),
  textDecoration: "none",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.25)}`,
  transition: theme.transitions.create(["transform", "box-shadow"]),
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.32)}`,
  },
}));

const BannerEyebrow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(0.75),
  color: theme.palette.secondary.light,
  fontWeight: 700,
  fontSize: "0.85rem",
  marginBottom: theme.spacing(0.5),
})) as typeof Stack;

const BannerTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "1.4rem",
  fontWeight: 800,
  lineHeight: 1.3,
  marginBottom: theme.spacing(1),
})) as typeof Typography;

const BannerDescription = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.primary.contrastText, 0.82),
  fontSize: "0.95rem",
  lineHeight: 1.7,
}));

const BannerCta = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(0.5),
  flexShrink: 0,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  fontWeight: 700,
  fontSize: "0.95rem",
  padding: theme.spacing(1.25, 3),
  borderRadius: theme.shape.borderRadius,
  whiteSpace: "nowrap",
})) as typeof Stack;

export default function PricingTeaser() {
  return (
    <Section maxWidth="lg" id="pricing">
      <SectionTitle component="h2" variant="h4">
        أسعار الصباغ في الكويت 2026
      </SectionTitle>
      <SectionSubtitle>
        يعتمد سعر خدمات الدهان على عدة عوامل تختلف من مكان لآخر، ونقدّم لك عرض سعر واضح بعد المعاينة.
      </SectionSubtitle>

      <FactorsGrid container spacing={1.5} justifyContent="center">
        {FACTORS.map((f) => (
          <Grid key={f}>
            <FactorChip>{f}</FactorChip>
          </Grid>
        ))}
      </FactorsGrid>

      <Banner href="/asaar-sabagh-kuwait" aria-label="تعرف على أسعار الصباغ 2026">
        <div>
          <BannerEyebrow component="span">
            <ArticleRoundedIcon fontSize="small" />
            <span>دليل شامل محدّث 2026</span>
          </BannerEyebrow>
          <BannerTitle component="p">
            جدول أسعار كامل حسب المنطقة ونوع الخدمة
          </BannerTitle>
          <BannerDescription>
            مقارنة الدهانات · أسعار حسب المنطقة · 20 سؤالاً شائعاً حول الأسعار
          </BannerDescription>
        </div>
        <BannerCta component="span">
          تعرف على أسعار الصباغ 2026
          <ArrowBackRoundedIcon fontSize="small" />
        </BannerCta>
      </Banner>
    </Section>
  );
}
