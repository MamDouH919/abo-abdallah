
// ============================================
// 4. WHY CHOOSE US - Fixed Typography Variants
// ============================================
"use client";

import { styled } from "@mui/material/styles";
import { Container, Typography, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const WhyChooseUsSection = styled("section")(() => ({
    backgroundColor: "#f8f9fa",
    padding: "80px 20px",
}));

const Title = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
    marginBottom: "40px",
    color: theme.palette.primary.main,
}));

const FeatureItem = styled("article")(() => ({
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "30px",
}));

const IconWrapper = styled("div")(({ theme }) => ({
    color: theme.palette.primary.main,
    marginRight: "15px",
    marginTop: "5px",
}));

const FeatureText = styled("div")(() => ({
    flex: 1,
}));

const FeatureTitle = styled(Typography)(() => ({
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
}));

const FeatureDesc = styled(Typography)(() => ({
    color: "#555",
    lineHeight: 1.6,
}));

export default function WhyChooseUs() {
    const features = [
        {
            title: "خبرة طويلة في مجال الصباغة",
            desc: "فريقنا من صباغي الكويت يمتلك سنوات من الخبرة في تنفيذ جميع أنواع الدهانات الداخلية والخارجية بدقة عالية.",
        },
        {
            title: "جودة المواد والألوان",
            desc: "نستخدم أجود أنواع الدهانات المقاومة للرطوبة والعوامل الجوية لضمان مظهر جميل يدوم طويلاً.",
        },
        {
            title: "أسعار تنافسية وخدمة سريعة",
            desc: "نحرص على تقديم أفضل جودة بأقل سعر في السوق مع الالتزام بالمواعيد المحددة لإنجاز العمل بسرعة واحترافية.",
        },
        {
            title: "ضمان على جميع الأعمال",
            desc: "نقدم ضماناً حقيقياً على خدمات الصباغة لدينا، لأن رضاك هو هدفنا الأول.",
        },
    ];

    return (
        <WhyChooseUsSection id="why-choose-us" aria-labelledby="why-choose-title">
            <Container>
                <Title variant="h2" id="why-choose-title">
                    لماذا تختارنا – صباغ الكويت
                </Title>
                <Grid container spacing={4}>
                    {features.map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <FeatureItem itemScope itemType="https://schema.org/Thing">
                                <IconWrapper aria-hidden="true">
                                    <CheckCircle fontSize="large" />
                                </IconWrapper>
                                <FeatureText>
                                    <FeatureTitle variant="h3" itemProp="name">
                                        {item.title}
                                    </FeatureTitle>
                                    <FeatureDesc variant="body2" itemProp="description">
                                        {item.desc}
                                    </FeatureDesc>
                                </FeatureText>
                            </FeatureItem>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </WhyChooseUsSection>
    );
}