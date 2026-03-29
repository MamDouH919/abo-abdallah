"use client";

import { styled } from "@mui/material/styles";
import {
    Container,
    Typography,
    Box,
    Grid,
    Paper,
    Divider,
} from "@mui/material";
import {
    FaPaintRoller,
    FaCheckCircle,
    FaPhoneAlt,
    FaWhatsapp,
} from "react-icons/fa";

const ContentSection = styled("section")(() => ({
    padding: "80px 20px",
    backgroundColor: "#fff",
    marginTop: 80,
}));

const MainTitle = styled(Typography)(({ theme }) => ({
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
    },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
    },
}));

const Paragraph = styled(Typography)(() => ({
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#444",
    marginBottom: "20px",
    textAlign: "justify",
}));

const HighlightBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: "16px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
}));

const FeatureList = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
}));

const FeatureItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
    "& svg": {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(2),
        marginTop: "4px",
        fontSize: "1.5rem",
        flexShrink: 0,
    },
}));

const ContactBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: "16px",
    background: theme.palette.primary.main,
    color: "#fff",
    textAlign: "center",
    marginTop: theme.spacing(6),
    "& a": {
        color: "#fff",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: theme.spacing(1),
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginTop: theme.spacing(2),
        "&:hover": {
            opacity: 0.9,
        },
    },
}));
const date = new Date().toISOString()

const gg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "صباغ الكويت - أفضل خدمات الدهانات والصباغة",
    description:
        "صباغ الكويت رخيص وشاطر يقدم خدمات الدهانات وتركيب ورق الجدران بخبرة 15+ عاماً",
    author: {
        "@type": "Organization",
        name: "صباغ الكويت",
        telephone: "+965-50303335",
    },
    publisher: {
        "@type": "Organization",
        name: "صباغ الكويت",
        logo: {
            "@type": "ImageObject",
            url: "https://sabaghinkuwait.com/logo.png",
        },
    },
    datePublished: "2020-12-29",
    dateModified: date,
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://sabaghinkuwait.com",
    },
    image: "https://sabaghinkuwait.com/logo.png",
    keywords:
        "صباغ الكويت, صباغ رخيص, صباغ شاطر, دهانات الكويت, ورق جدران",
})

export default function PainterKuwaitSEOContent() {
    const differentiators = [
        "اختيار الألوان: نقدم استشارات حول اختيار الألوان المناسبة التي تعكس ذوق العميل وتتناسب مع ديكور المكان",
        "الاحترافية: يتكون فريقنا من صباغين محترفين مدربين على أحدث أساليب وتقنيات الدهان لضمان نتائج مثالية",
        "الجودة العالية: نحن نستخدم مواد دهنية معتمدة وصديقة للبيئة لضمان الديمومة والجودة في كل عمل",
        "التقنيات الحديثة: نوظف أدوات حديثة وفعالة تجعل عمليات الطلاء أسرع وأكثر كفاءة",
        "الاهتمام بالتفاصيل: نحرص على متابعة التفاصيل الدقيقة خلال عملية الدهان مما يزيد من جمال النهاية",
    ];

    const technologies = [
        "تطبيقات إدارة المشاريع لتخطيط وتنظيم كافة المهام بكفاءة",
        "البرمجيات الخاصة بتصميم الألوان لمساعدة العملاء على رؤية النتيجة النهائية",
        "أدوات قياس الدقة مثل أجهزة الليزر لضمان التغطية الشاملة",
        "تقنيات التصوير لتوثيق حالة الجدران وتحديد المشكلات قبل البدء",
    ];

    const pricingFactors = [
        "حجم المساحة: كلما زادت المساحة زادت التكلفة",
        "نوع الطلاء المستخدم: لكل نوع سعره حسب جودته وخصائصه",
        "حالة الأسطح: التجهيزات المسبقة تزيد من التكلفة",
        "نوع الخدمة: صباغة داخلية أو خارجية",
        "وقت العمل: المشاريع العاجلة قد تؤثر على السعر",
        "المكان: تختلف الأسعار من منطقة لأخرى",
    ];

    return (
        <ContentSection
            itemScope
            itemType="https://schema.org/Article"
            aria-labelledby="main-heading"
        >
            <Container maxWidth="lg">
                {/* Hero Section */}
                <MainTitle variant="h2" id="main-heading" itemProp="headline">
                    صباغ الكويت - 50303335
                </MainTitle>

                <HighlightBox elevation={4}>
                    <FaPaintRoller size={50} />
                    <Typography variant="h5" fontWeight="bold" mt={2}>
                        أفضل صباغ في الكويت - خبرة أكثر من 15 عاماً
                    </Typography>
                    <Typography variant="body1" mt={2}>
                        نقدم خدمات الصباغة والدهانات وتركيب ورق الجدران بأعلى جودة وأقل
                        الأسعار في جميع مناطق الكويت
                    </Typography>
                </HighlightBox>

                {/* Main Content */}
                <Box itemProp="articleBody">
                    <Paragraph>
                        إذا كنت من الذين يبحثون عن <strong>صباغ الكويت رخيص وشاطر</strong>{" "}
                        للقيام بأعمال تشطيب الشقق والأصباغ وتركيب ورق الجدران، فنحن نختلف
                        عن باقي الصباغين بأعمال دهان الجدران. صباغ الكويت متخصص يقدم لكم
                        جميع خدمات تجديد المنازل وتركيب الديكورات بأحدث أنواع الأصباغ
                        والرسومات.
                    </Paragraph>

                    <Paragraph>
                        نستخدم أفضل الخامات المتوفرة داخل دولة الكويت ونقدم لكم أحدث
                        الديكورات بكتالوجات موجودة لدينا. خدماتنا تعد أفضل خدمات الأصباغ
                        داخل دولة الكويت مع صباغ خبرة أكثر من 15 عاماً في مجال الأصباغ.
                    </Paragraph>

                    {/* About Section */}
                    <SubTitle variant="h2">ما هو صباغ الكويت؟</SubTitle>
                    <Paragraph>
                        يعد صباغ الكويت واحد من أمهر الصباغين الموجودين في الكويت متخصص في
                        دهان الحوائط وتركيب ورق الجدران ويمتلك خبرة في مجال الأصباغ
                        ويعتبر من أفضل الصباغين. يتميز بالجودة في الخدمة والاحترافية
                        العالية والخبرة والأدوات والمعدات التي تعتبر من أحدث المعدات داخل
                        دولة الكويت.
                    </Paragraph>

                    {/* Why Choose Us */}
                    <SubTitle variant="h2">لماذا نختلف عن باقي الصباغين بالكويت؟</SubTitle>
                    <Paragraph>
                        خدمة صباغ الكويت التي نقدمها تتميز بتفوقها على باقي خدمات الصباغين
                        في الكويت. نعمل بجد لتوفير الأفضل لعملائنا من خلال استخدام تقنيات
                        متطورة ومواد ذات جودة عالية. نضمن أن كل عميل يحصل على نتيجة
                        متميزة تنعكس على جمال مساحته الداخلية:
                    </Paragraph>

                    <FeatureList>
                        {differentiators.map((item, index) => (
                            <FeatureItem key={index}>
                                <FaCheckCircle />
                                <Typography>{item}</Typography>
                            </FeatureItem>
                        ))}
                    </FeatureList>

                    {/* Technologies */}
                    <SubTitle variant="h2">
                        التقنيات التي يستخدمها صباغ الكويت
                    </SubTitle>
                    <Paragraph>
                        في العصر الحديث يعتمد فريق عملنا على مجموعة متنوعة من الوسائل
                        التكنولوجية المتطورة لتقديم خدمة دهان الشقق بأعلى مستويات الجودة:
                    </Paragraph>

                    <FeatureList>
                        {technologies.map((item, index) => (
                            <FeatureItem key={index}>
                                <FaCheckCircle />
                                <Typography>{item}</Typography>
                            </FeatureItem>
                        ))}
                    </FeatureList>

                    {/* Services Grid */}
                    <SubTitle variant="h2">خدماتنا المتخصصة</SubTitle>
                    <Grid container spacing={3} mt={2} mb={4}>
                        {[
                            {
                                title: "صباغ شاطر",
                                desc: "صباغ متخصص يقدم خدمات الصباغة باحترافية عالية وبكفاءة شديدة",
                            },
                            {
                                title: "صباغ رخيص",
                                desc: "أسعار تنافسية مع جودة عالية لجميع خدمات الدهانات",
                            },
                            {
                                title: "صباغ ممتاز",
                                desc: "إتقان في العمل واحترافية عالية مع أجود الخامات",
                            },
                            {
                                title: "تركيب ورق جدران",
                                desc: "أحدث موديلات ورق الجدران بما في ذلك ثلاثي الأبعاد",
                            },
                            {
                                title: "صباغ غرف نوم",
                                desc: "صباغة غرف النوم بألوان هادئة ومريحة",
                            },
                            {
                                title: "صباغ ديكورات",
                                desc: "تصاميم ديكورية متنوعة وتنسيق ألوان احترافي",
                            },
                        ].map((service, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        borderRadius: 2,
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow: 6,
                                        },
                                    }}
                                    itemScope
                                    itemType="https://schema.org/Service"
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="primary"
                                        gutterBottom
                                        itemProp="name"
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" itemProp="description">
                                        {service.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pricing */}
                    <SubTitle variant="h2">ما هي أسعار صباغ الكويت؟</SubTitle>
                    <Paragraph>
                        سعر خدمات صباغ الكويت يعتمد على مجموعة من المعايير التي تؤخذ بعين
                        الاعتبار لتحديد تكلفة الخدمة بشكل دقيق وعادل:
                    </Paragraph>

                    <FeatureList>
                        {pricingFactors.map((item, index) => (
                            <FeatureItem key={index}>
                                <FaCheckCircle />
                                <Typography>{item}</Typography>
                            </FeatureItem>
                        ))}
                    </FeatureList>

                    <Divider sx={{ my: 4 }} />

                    {/* Contact CTA */}
                    <ContactBox elevation={8}>
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            تواصل معنا الآن
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            للحصول على أفضل خدمات الصباغة في الكويت
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="center"
                            gap={3}
                            flexWrap="wrap"
                        >
                            <a href="tel:+96550303335">
                                <FaPhoneAlt /> 50303335
                            </a>
                            <a href="https://wa.me/96550303335">
                                <FaWhatsapp /> واتساب
                            </a>
                        </Box>
                    </ContactBox>
                </Box>

                {/* Schema Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: gg,
                    }}
                />
            </Container>
        </ContentSection>
    );
}