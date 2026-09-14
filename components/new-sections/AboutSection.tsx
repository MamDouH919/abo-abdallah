
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
        <AboutWrapper id="about" itemScope itemType="https://schema.org/AboutPage">
            <Container maxWidth="lg">
                <header>
                    <Title variant="h2">
                        عن دار الألوان
                    </Title>
                </header>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextContainer>
                            <Paragraph variant="body2" itemProp="description">
                                نحن في <strong>دار الألوان</strong> — صباغ الكويت — نقدم خدمات الصباغة والدهانات
                                في جميع مناطق الكويت. نحرص دائمًا على استخدام مواد عالية الجودة وأحدث التقنيات
                                لضمان نتيجة مثالية تلبي ذوقك وتدوم طويلًا.
                            </Paragraph>

                            <Paragraph variant="body2">
                                فريقنا من <strong>الدهانين المحترفين</strong> يقدم حلول دهان داخلية وخارجية،
                                تشطيب شقق، ترميم جدران، ودهانات زخرفية حديثة. نعمل على تحقيق رضا عملائنا من خلال
                                الالتزام بالمواعيد والدقة في التفاصيل.
                            </Paragraph>

                            <Paragraph variant="body2">
                                نغطي جميع محافظات الكويت الست — العاصمة وحولي والفروانية والأحمدي والجهراء
                                ومبارك الكبير — بفريق يصل إلى موقعك للمعاينة وتحديد نوع الدهان المناسب قبل
                                البدء. تشمل خدماتنا الدهانات الداخلية والخارجية، الدهانات الديكورية والجدران
                                المميزة، تركيب ورق الجدران، ومعالجة تشققات الجدران وآثار الرطوبة قبل التنفيذ.
                            </Paragraph>

                            <Paragraph variant="body2">
                                نعمل بخطوات واضحة: تواصل وتحديد موعد المعاينة، ثم تحديد نوع الدهان والتكلفة
                                بعرض سعر واضح، وأخيراً التنفيذ والتسليم بعد التأكد من نظافة المكان. نستخدم
                                دهانات أصلية من ماركات معروفة، ونقدم ضماناً حقيقياً على أعمالنا لأن رضا العميل
                                هو معيار نجاحنا.
                            </Paragraph>
                        </TextContainer>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ImageContainer>
                            <Image
                                src="/Images/صباغ-الكويت.webp"
                                alt="دار الألوان أثناء تنفيذ أعمال الدهان في منزل بالكويت"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                priority
                                quality={75}
                                title="دار الألوان | صباغ الكويت"
                                style={{ objectFit: "cover" }}
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
                            "name": "دار الألوان",
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