"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import services from "@/data/services.json";
import PaintServiceCard from "@/components/ServiceCard";
import { CustomLink } from "@/components/layouts/CustomLink";

// Six real, distinct service pages from data/services.json — no invented
// categories, no duplicate URLs. Picked to cover interior/decor/apartments/
// homes/wallpaper/ceiling-prep without repeating near-identical keyword slugs.
const FEATURED_SLUGS = [
  "/kuwait-paints",
  "/decor-painter-kuwait",
  "/apartment-painter-kuwait",
  "/home-painter-kuwait",
  "/wallpaper-installation-kuwait",
  "/gypsum-master-kuwait",
];

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  color: theme.palette.primary.main,
}));

export default function ServicesTeaser() {
  const featured = FEATURED_SLUGS
    .map((slug) => services.find((s) => s.slug_en === slug))
    .filter(Boolean) as typeof services;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }} id="services">
      <Stack alignItems="center" spacing={1} mb={5}>
        <Title variant="h2">خدمات صباغ الكويت</Title>
        <Typography color="text.secondary" textAlign="center" maxWidth={640}>
          خدمات دهان وصباغة متكاملة للمنازل والشقق والفلل، بدهانات أصلية وتنفيذ احترافي.
        </Typography>
      </Stack>

      <Grid container spacing={3} alignItems="stretch">
        {featured.map((service) => (
          <Grid key={service.slug_en} size={{ xs: 12, sm: 6, md: 4 }} display="flex">
            <PaintServiceCard service={service} type="/services" />
          </Grid>
        ))}
      </Grid>

      <Stack alignItems="center" mt={5}>
        <CustomLink href="/services" title="جميع خدمات صباغ الكويت">
          عرض جميع الخدمات
        </CustomLink>
      </Stack>
    </Container>
  );
}
