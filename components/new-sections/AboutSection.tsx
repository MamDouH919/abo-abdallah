
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
    height: "400px",
}));

export default function AboutSection() {
    return (
        <AboutWrapper id="about" itemScope itemType="https://schema.org/AboutPage">
            <Container maxWidth="lg">
                <header>
                    <Title variant="h2">
                        عن صباغ الكويت
                    </Title>
                </header>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextContainer>
                            <Paragraph variant="body2" itemProp="description">
                                نحن في <strong>صباغ الكويت</strong> نمتلك خبرة تمتد لأكثر من عشر سنوات في تقديم
                                أفضل خدمات الصباغة والدهانات في جميع مناطق الكويت. نحرص دائمًا على استخدام مواد
                                عالية الجودة وأحدث التقنيات لضمان نتيجة مثالية تلبي ذوقك وتدوم طويلًا.
                            </Paragraph>

                            <Paragraph variant="body2">
                                فريقنا من <strong>الدهانين المحترفين</strong> يقدم حلول دهان داخلية وخارجية،
                                تشطيب شقق، ترميم جدران، ودهانات زخرفية حديثة. نعمل على تحقيق رضا عملائنا من خلال
                                الالتزام بالمواعيد والدقة في التفاصيل.
                            </Paragraph>
                        </TextContainer>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ImageContainer>
                            <Image
                                src="/Images/صباغ-الكويت.webp"
                                alt="صباغ الكويت أثناء تنفيذ أعمال الدهان في منزل"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                loading="lazy"
                                quality={85}
                                title="صباغ الكويت"
                            />
                        </ImageContainer>
                    </Grid>
                </Grid>

                {/* Schema Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "صباغ الكويت",
                            "description": "خدمات صباغة ودهانات احترافية في الكويت",
                            "image": "https://sabaghelkuwait.com/Images/صباغ-الكويت.webp",
                            "telephone": "+965-90998489",
                            "priceRange": "$$",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "KW",
                                "addressLocality": "الكويت"
                            }
                        })
                    }}
                />
            </Container>
        </AboutWrapper>
    );
}