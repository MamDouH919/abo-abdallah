"use client";

import { styled } from "@mui/material/styles";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HOME_FAQS } from "@/data/home-faqs";

const FaqSection = styled("section")(() => ({
  backgroundColor: "#fff",
  padding: "80px 20px",
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: "50px",
  color: theme.palette.primary.main,
}));

export default function FAQs() {
  const faqs = HOME_FAQS;

  return (
    <FaqSection id="faqs">
      <Container>
        <Title variant="h2">الأسئلة الشائعة – صباغ الكويت</Title>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography component="h3">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="p">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </FaqSection>
  );
}
