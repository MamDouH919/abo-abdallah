"use client";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import regions from "@/data/regions.json";

// Every live /regions/{slug} page, straight from data/regions.json, so a new
// area page is linked from the homepage as soon as it exists.
const AREAS = regions.map((r) => ({
  href: `/regions/${r.slug.en.replace(/^\/+/, "")}`,
  label: r.title.split(" | ")[0].replace(/^صباغ\s+/, "").trim(),
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 800,
  fontSize: "2rem",
  color: theme.palette.primary.main,
}));

const Chip = styled("a")(({ theme }) => ({
  display: "inline-block",
  padding: "9px 18px",
  borderRadius: 20,
  border: `1.5px solid ${theme.palette.grey[300]}`,
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: "0.9rem",
  textDecoration: "none",
  backgroundColor: theme.palette.background.paper,
  transition: "all .18s",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

export default function AreasTeaser() {
  return (
    <Container component="section" aria-labelledby="areas-title" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }} id="areas">
      <Stack alignItems="center" spacing={1} mb={4}>
        <Title variant="h2" id="areas-title">مناطق خدمة دار الألوان في الكويت</Title>
        <Typography color="text.secondary" textAlign="center" maxWidth={640}>
          نقدم خدمات الصباغة والدهانات في محافظات الكويت الست، ولكل منطقة من هذه المناطق صفحة بتفاصيل الخدمة والأسعار والمناطق القريبة منها.
        </Typography>
      </Stack>

      <Stack
        component="nav"
        aria-label="روابط مناطق الخدمة"
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={1.5}
      >
        {AREAS.map((area) => (
          <Chip key={area.href} href={area.href}>
            صباغ {area.label}
          </Chip>
        ))}
      </Stack>

      <Stack alignItems="center" mt={4}>
        <Chip href="/regions" style={{ fontWeight: 700 }}>
          المناطق حسب المحافظة ←
        </Chip>
      </Stack>
    </Container>
  );
}
