"use client";

import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import {
  FaPaintRoller,
  FaPalette,
  FaTools,
  FaLightbulb,
  FaCheckCircle,
  FaUsers,
  FaHandshake,
  FaDollarSign,
  FaApper,
} from "react-icons/fa";

const AboutSection = styled("section")(() => ({
  padding: "80px 20px",
  backgroundColor: "#fff",
  position: "relative",
  overflow: "hidden",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "2.5rem",
  marginBottom: "20px",
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
}));

const SectionSubtitle = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: "1.1rem",
  color: "#666",
  marginBottom: "60px",
  maxWidth: "800px",
  margin: "0 auto 60px",
  lineHeight: 1.8,
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(3),
  borderRadius: "16px",
  transition: "all 0.3s ease",
  border: "1px solid #e0e0e0",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "12px",
  textAlign: "center",
  height: "100%",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  border: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: "3rem",
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export default function AboutPainterKuwait() {
  const services = [
    {
      icon: <FaPaintRoller />,
      title: "صباغة الجدران",
      description:
        "دهان المنازل والفلل والمكاتب بأنواع مختلفة من الأصباغ العادية والديكورية بأعلى جودة",
    },
    {
      icon: <FaApper />,
      title: "تركيب ورق الجدران",
      description:
        "توفير وتركيب أحدث موديلات ورق الجدران، بما في ذلك ورق الجدران ثلاثي الأبعاد",
    },
    {
      icon: <FaPalette />,
      title: "أعمال الديكور",
      description:
        "خدمات ديكور متكاملة تشمل تركيب جبس بورد للجدران والأسقف، وإضافة لمسات فنية متنوعة",
    },
    {
      icon: <FaTools />,
      title: "معالجة الجدران",
      description:
        "إصلاح مشاكل الجدران مثل البروزات أو الشقوق قبل بدء أعمال الصباغة",
    },
    {
      icon: <FaLightbulb />,
      title: "استشارات تصميمية",
      description:
        "مساعدة العملاء في اختيار الألوان والتصاميم المناسبة لمكانهم",
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: "جودة العمل",
      description:
        "استخدام مواد عالية الجودة وتقنيات حديثة لضمان نتائج تدوم طويلاً",
    },
    {
      icon: <FaUsers />,
      title: "الاحترافية",
      description: "فريق من الخبراء والفنيين ذوي الخبرة الطويلة في مجال الدهانات",
    },
    {
      icon: <FaHandshake />,
      title: "المرونة",
      description:
        "تلبية احتياجات العملاء في جميع المحافظات والعمل وفق أحدث التصاميم",
    },
    {
      icon: <FaDollarSign />,
      title: "أسعار تنافسية",
      description: "خدمات عالية الجودة بأسعار مناسبة لجميع الميزانيات",
    },
  ];

  return (
    <AboutSection
      id="about-painter-kuwait"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      <Container maxWidth="lg">
        {/* Main Title */}
        <SectionTitle variant="h2" id="about-heading" itemProp="name">
          صباغ الكويت
        </SectionTitle>

        {/* Introduction */}
        <SectionSubtitle variant="body1" itemProp="description">
          صباغ الكويت هو مصطلح عام يستخدم للإشارة إلى فنيي دهان وترميم المباني
          في الكويت، ويُقدمون خدمات متنوعة مثل صباغة الجدران، وتركيب ورق
          الجدران، وأعمال جبس بورد، ودهانات الديكور. يشتهر هؤلاء الفنيون
          بالجودة والاحترافية، ويسعون لتقديم خدمات متنوعة تناسب احتياجات
          العملاء، مع مراعاة الالتزام بالمواعيد والأسعار التنافسية.
        </SectionSubtitle>

        {/* Services Section */}
        <Box mb={8}>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            mb={4}
            color="primary"
            fontSize="2rem"
          >
            خدمات صباغ الكويت
          </Typography>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard
                  itemScope
                  itemType="https://schema.org/Service"
                  elevation={2}
                >
                  <CardContent>
                    <IconWrapper>{service.icon}</IconWrapper>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      itemProp="name"
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      lineHeight={1.7}
                      itemProp="description"
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            mb={4}
            color="primary"
            fontSize="2rem"
          >
            مميزات صباغ الكويت
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard elevation={0}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Hidden Schema Data */}
        <div style={{ display: "none" }}>
          <span itemProp="provider" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="صباغ الكويت" />
            <meta itemProp="telephone" content="+965-50303335" />
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="addressCountry" content="KW" />
              <meta itemProp="addressLocality" content="الكويت" />
            </span>
          </span>
          <meta itemProp="serviceType" content="خدمات الدهانات والصباغة" />
          <meta itemProp="areaServed" content="الكويت" />
        </div>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "صباغ الكويت",
              description:
                "خدمات دهان وترميم المباني في الكويت تشمل صباغة الجدران، تركيب ورق الجدران، وأعمال الديكور",
              provider: {
                "@type": "Organization",
                name: "صباغ الكويت",
                telephone: "+965-50303335",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "KW",
                  addressLocality: "الكويت",
                },
              },
              serviceType: "خدمات الدهانات والصباغة",
              areaServed: {
                "@type": "Country",
                name: "الكويت",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات صباغ الكويت",
                itemListElement: services.map((service, index) => ({
                  "@type": "Offer",
                  position: index + 1,
                  itemOffered: {
                    "@type": "Service",
                    name: service.title,
                    description: service.description,
                  },
                })),
              },
            }),
          }}
        />
      </Container>
    </AboutSection>
  );
}