"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import services from "@/data/services.json";
import PaintServiceCard from "@/components/ServiceCard";
import { CustomLink } from "@/components/layouts/CustomLink";

// Six real, distinct service pages from data/services.json. The homepage
// shows a plain service name + short description per card (no keyword chips)
// and links with descriptive anchors. /kuwait-paints is deliberately not
// featured: it targets the homepage's own primary keyword ("صباغ الكويت").
const FEATURED = [
  {
    slug: "/home-painter-kuwait",
    title: "صباغة المنازل",
    description: "دهان المنزل من الداخل والخارج: الغرف والصالات والمجالس والأسقف والواجهات، مع تغطية الأثاث قبل البدء.",
  },
  {
    slug: "/apartment-painter-kuwait",
    title: "صباغة الشقق",
    description: "دهان الشقق السكنية والشقق المجهزة للتأجير، بدهان يتحمل الاستخدام اليومي.",
  },
  {
    slug: "/paint-kuwait",
    title: "الدهانات الداخلية والخارجية",
    description: "دهانات داخلية مطفية ونصف لامعة، ودهانات خارجية ومقاومة للرطوبة حسب طبيعة كل سطح.",
  },
  {
    slug: "/decor-painter-kuwait",
    title: "الدهانات الديكورية",
    description: "جدران مميزة بدهانات مخملية ومعدنية وتأثيرات الإسمنت والرخام، مع عرض عينات قبل التنفيذ.",
  },
  {
    slug: "/wallpaper-installation-kuwait",
    title: "تركيب ورق الجدران",
    description: "تركيب ورق الجدران بأنواعه بعد تجهيز الجدار وتسويته لإخفاء العيوب.",
  },
  {
    slug: "/gypsum-master-kuwait",
    title: "ديكورات الجبس بورد",
    description: "أسقف معلقة وديكورات جبس بورد للمجالس والصالات، تُسلَّم جاهزة للدهان.",
  },
];

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  color: theme.palette.primary.main,
}));

export default function ServicesTeaser() {
  const featured = FEATURED.flatMap((item) => {
    const service = services.find((s) => s.slug_en === item.slug);
    return service ? [{ ...service, title: item.title, description: item.description, keywords: [] }] : [];
  });

  return (
    <Container component="section" aria-labelledby="services-title" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }} id="services">
      <Stack alignItems="center" spacing={1} mb={5}>
        <Title variant="h2" id="services-title">خدمات الصباغة والدهانات في الكويت</Title>
        <Typography color="text.secondary" textAlign="center" maxWidth={640}>
          أعمال دهان وصباغة للمنازل والشقق والفلل، من التجهيز ومعالجة الجدران حتى التشطيب النهائي.
        </Typography>
      </Stack>

      <Grid container spacing={3} alignItems="stretch">
        {featured.map((service) => (
          <Grid key={service.slug_en} size={{ xs: 12, sm: 6, md: 4 }} display="flex">
            <PaintServiceCard service={service} type="/services" linkText={`تفاصيل ${service.title}`} />
          </Grid>
        ))}
      </Grid>

      <Stack alignItems="center" mt={5}>
        <CustomLink href="/services">
          عرض جميع خدمات الصباغة
        </CustomLink>
      </Stack>
    </Container>
  );
}
