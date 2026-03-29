// components/home/ServicesSection.tsx
"use client"

import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const ServicesWrapper = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
    textAlign: "center",
    marginBottom: theme.spacing(4),
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[2],
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: theme.shadows[6],
    },
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.3rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1.5),
}));

const ServiceText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    lineHeight: 1.7,
}));

const ServiceIcon = styled("img")({
    width: "70px",
    height: "70px",
    margin: "0 auto 16px",
});

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: "دهان داخلي",
            description:
                "نقدم خدمات دهان داخلي بجودة عالية تشمل الأسقف والجدران، مع استخدام أحدث الدهانات المقاومة للرطوبة لضمان لمسة فنية تدوم طويلاً.",
            icon: "/Images/icons/interior-paint.png",
        },
        {
            id: 2,
            title: "دهان خارجي",
            description:
                "صباغ الكويت يوفر دهان خارجي مقاوم للعوامل الجوية والحرارة، يضمن حماية واجهات المنازل والمباني بمظهر أنيق ومتجدد.",
            icon: "/Images/icons/exterior-paint.png",
        },
        {
            id: 3,
            title: "دهانات زخرفية",
            description:
                "تصاميم عصرية من الدهانات الزخرفية لإضافة لمسة فاخرة لجدران منزلك أو مكتبك — باستخدام أحدث تقنيات التشطيب الإيطالي والفرنسي.",
            icon: "/Images/icons/decorative-paint.png",
        },
        {
            id: 4,
            title: "ترميم وتشطيب",
            description:
                "نقوم بأعمال الترميم والتشطيب الكامل للجدران قبل عملية الدهان لضمان سطح ناعم ومتناسق يعكس جودة العمل الاحترافية.",
            icon: "/Images/icons/renovation.png",
        },
    ];

    return (
        <ServicesWrapper id="services">
            <Container maxWidth="lg">
                <header>
                    <Title variant="h2">
                        خدماتنا في صباغ الكويت
                    </Title>
                </header>

                <Grid container spacing={4} component="div">
                    {services.map((service) => (
                        <Grid item xs={12} sm={6} md={3} key={service.id}>
                            <article>
                                <ServiceCard elevation={0}>
                                    <ServiceIcon
                                        src={service.icon}
                                        alt={`خدمة ${service.title} من صباغ الكويت`}
                                        loading="lazy"
                                    />
                                    <ServiceTitle variant="h3">
                                        {service.title}
                                    </ServiceTitle>
                                    <ServiceText variant="caption">{service.description}</ServiceText>
                                </ServiceCard>
                            </article>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ServicesWrapper>
    );
}
