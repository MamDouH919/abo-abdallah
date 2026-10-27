"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import services from "@/data/services.json";
import PaintServiceCard from "@/components/ServiceCard";
import { CustomLink } from "@/components/layouts/CustomLink";

// Eleven real, distinct service pages from data/services.json. The homepage
// shows a plain service name + short description per card (no keyword chips)
// and links with descriptive anchors. /kuwait-paints is deliberately not
// featured: it targets the homepage's own primary keyword ("صباغ الكويت").
const FEATURED = [
  {
    slug: "/cheap-painter-kuwait",
    title: "صباغ رخيص بالكويت",
    description: "دهان اقتصادي للشقق والمنازل بأسعار تبدأ من 60 ديناراً، عمالة فقط أو شامل المواد، دون التنازل عن التجهيز الصحيح.",
  },
  {
    slug: "/best-painter-kuwait",
    title: "أفضل صباغ بالكويت",
    description: "صباغ شاطر بتشطيب ناعم: تجهيز كامل للجدران، فحص بالإضاءة قبل الطبقة النهائية، ودهانات أصلية مختارة لكل مساحة.",
  },
  {
    slug: "/daily-painter-kuwait",
    title: "صباغ باليومية",
    description: "صباغ بأجر يومي واضح للترميم والأعمال الصغيرة واللمسات الأخيرة، مع عدة العمل الكاملة.",
  },
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
    slug: "/wood-door-paint",
    title: "دهان الأبواب الخشبية",
    description: "تجديد الأبواب والنوافذ والدواليب الخشبية بدهانات دوكو ولاكيه بعد صنفرة الطبقة القديمة ومعالجة الشقوق.",
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
  {
    slug: "/kids-room-painter",
    title: "صباغ غرف أطفال",
    description: "ألوان هادئة أو مبهجة ورسومات جدارية لغرف الأطفال، بدهانات قليلة الرائحة وسهلة التنظيف.",
  },
  {
    slug: "/ceramic-master-kuwait",
    title: "تركيب السيراميك",
    description: "تركيب سيراميك الأرضيات والحمامات والمطابخ على أرضية مستوية بفواصل منتظمة.",
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
