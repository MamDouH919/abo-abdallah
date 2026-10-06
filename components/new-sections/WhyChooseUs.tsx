
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
    // Only claims backed by the site's own service/process content — no
    // superlatives, price promises, years-of-experience or guarantee claims.
    const features = [
        {
            title: "خبرة في أعمال الصباغة والدهانات",
            desc: "ننفذ الدهانات الداخلية والخارجية والديكورية وتركيب ورق الجدران للمنازل والشقق والفلل والمكاتب.",
        },
        {
            title: "جودة في التشطيبات",
            desc: "نجهز السطح قبل الدهان بالمعجون والصنفرة ومعالجة التشققات، ثم نطبق طبقات الدهان بالتسلسل الصحيح.",
        },
        {
            title: "الاهتمام بتفاصيل العمل",
            desc: "نغطي الأثاث والأرضيات قبل البدء، ونراجع العمل ونسلّم المكان نظيفاً بعد الانتهاء.",
        },
        {
            title: "خدمة في مناطق متعددة بالكويت",
            desc: "نصل إلى العملاء في مختلف محافظات الكويت للمعاينة والتنفيذ، مع عرض سعر واضح قبل البدء.",
        },
    ];

    return (
        <WhyChooseUsSection id="why-choose-us" aria-labelledby="why-choose-title">
            <Container>
                <Title variant="h2" id="why-choose-title">
                    لماذا تختار دار الألوان؟
                </Title>
                <Grid container spacing={4}>
                    {features.map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <FeatureItem>
                                <IconWrapper aria-hidden="true">
                                    <CheckCircle fontSize="large" />
                                </IconWrapper>
                                <FeatureText>
                                    <FeatureTitle variant="h3">
                                        {item.title}
                                    </FeatureTitle>
                                    <FeatureDesc variant="body2">
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