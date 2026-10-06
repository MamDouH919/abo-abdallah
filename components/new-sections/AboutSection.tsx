
// ============================================
// 3. ABOUT SECTION - Fixed Typography & SEO
// ============================================
"use client"

import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Grid2 as Grid } from "@mui/material";

const AboutWrapper = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.grey[50],
    padding: theme.spacing(8, 0),
}));

const TextContainer = styled("article")(() => ({
    flex: 1,
    maxWidth: "600px",
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    fontSize: "1.05rem",
    marginBottom: theme.spacing(2),
}));

const ImageContainer = styled(Box)(() => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    aspectRatio: "400 / 533",   // matches the source image's natural dimensions
}));

export default function AboutSection() {
    return (
        <AboutWrapper id="about" aria-labelledby="about-title">
            <Container maxWidth="lg">
                <header>
                    <Title variant="h2" id="about-title">
                        دار الألوان لخدمات الصباغة والدهانات في الكويت
                    </Title>
                </header>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextContainer>
                            <Paragraph variant="body2">
                                <strong>دار الألوان</strong> فريق متخصص في أعمال الصباغة والدهانات للمنازل والشقق
                                والفلل والمكاتب في الكويت. نهتم بتجهيز الجدران جيداً قبل الدهان، لأن جودة
                                التجهيز هي ما يحدد شكل التشطيب النهائي ومدة بقائه.
                            </Paragraph>

                            <Paragraph variant="body2">
                                نقدم الدهانات الداخلية والخارجية، الدهانات الديكورية والجدران المميزة، تركيب ورق
                                الجدران، وديكورات الجبس بورد، إلى جانب معالجة تشققات الجدران وآثار الرطوبة قبل
                                بدء التنفيذ.
                            </Paragraph>

                            <Paragraph variant="body2">
                                نخدم العملاء في محافظات الكويت المختلفة — العاصمة وحولي والفروانية والأحمدي
                                والجهراء ومبارك الكبير — ونبدأ بمعاينة الموقع لتحديد نوع الدهان المناسب وتقديم
                                عرض سعر واضح قبل البدء.
                            </Paragraph>
                        </TextContainer>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ImageContainer>
                            <Image
                                src="/Images/صباغ-الكويت.webp"
                                alt="إعلان يعرض أنواع الأصباغ وخدمات الدهان المتوفرة مع رقم التواصل 90998489"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                                quality={75}
                                style={{ objectFit: "cover" }}
                            />
                        </ImageContainer>
                    </Grid>
                </Grid>
            </Container>
        </AboutWrapper>
    );
}