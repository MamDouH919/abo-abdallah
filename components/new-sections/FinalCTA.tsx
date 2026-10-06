"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { PHONE_E164, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/seo/site";

const Wrapper = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  textAlign: "center",
}));

export default function FinalCTA() {
  return (
    <Wrapper aria-labelledby="final-cta-title">
      <Container maxWidth="sm">
        <Typography id="final-cta-title" component="h2" variant="h4" fontWeight={800} gutterBottom>
          تواصل مع دار الألوان
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 4, lineHeight: 1.8 }}>
          اتصل بنا أو راسلنا عبر واتساب لتحديد موعد المعاينة ومعرفة تفاصيل خدمة الصباغة المناسبة لمكانك.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            startIcon={<PhoneIcon />}
            href={`tel:${PHONE_E164}`}
            sx={{ fontWeight: 700, px: 4 }}
          >
            اتصل الآن - {PHONE_DISPLAY}
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<WhatsAppIcon />}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 700, px: 4, color: "#fff", borderColor: "#fff", "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,.12)" } }}
          >
            تواصل عبر واتساب
          </Button>
        </Stack>
      </Container>
    </Wrapper>
  );
}
