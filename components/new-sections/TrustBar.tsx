"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

// Compact trust strip — only claims already stated elsewhere on the site
// (AboutSection / SeoTextSection), no invented numbers or guarantees.
const items = [
  { icon: <EventAvailableIcon fontSize="large" />, title: "خدمة جميع مناطق الكويت", desc: "فريقنا يصل إليك في أي منطقة بالكويت." },
  { icon: <VerifiedIcon fontSize="large" />, title: "معاينة وتحديد السعر", desc: "زيارة الموقع وتقديم عرض سعر واضح قبل البدء." },
  { icon: <FormatPaintIcon fontSize="large" />, title: "دهانات أصلية معتمدة", desc: "نستخدم دهانات أصلية معتمدة مناسبة لمناخ الكويت." },
  { icon: <HomeWorkIcon fontSize="large" />, title: "منازل، شقق وفلل ومكاتب", desc: "تنفيذ لجميع أنواع العقارات السكنية والتجارية." },
];

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(5, 0),
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.grey[100]}`,
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
}));

const IconWrap = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

export default function TrustBar() {
  return (
    <Wrapper aria-label="مميزات دار الألوان">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid key={item.title} size={{ xs: 6, md: 3 }}>
              <div style={{ textAlign: "center" }}>
                <IconWrap aria-hidden="true">{item.icon}</IconWrap>
                <Typography component="p" variant="subtitle1" fontWeight={700} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
