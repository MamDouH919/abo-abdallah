"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import "./testimonial.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import SectionTitle from "../layouts/SectionTitle";
import { supabase } from "@/supabaseClient";
import TestimonialDialog from "./TestimonialDialog";

interface Testimonial {
  id?: string;
  comment: string;
  name: string;
  rate: number;
  role?: string;
}

const SwiperSlideStyle = styled(SwiperSlide)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

const TopBoxStyle = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: 6,
  background: "linear-gradient(90deg, #0080a9, #D8F6FF, #0080a9)",
}));

const CardStyle = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(0, 2),
  height: 260,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: theme.spacing(2),
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.4),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: 12,
    transform: "translateY(-8px)",
  },
}));

const CardContentStyle = styled(CardContent)(() => ({
  flexGrow: 1,
  zIndex: 2,
}));

const PREFIX = "Testimonial";
const classes = {
  gold: `${PREFIX}-gold`,
  grey: `${PREFIX}-grey`,
};

const FaStarStyle = styled(FaStar)(() => ({
  [`&.${classes.gold}`]: { color: "#FFD700" },
  [`&.${classes.grey}`]: { color: "#C0C0C0" },
}));

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const theme = useTheme();

  return (
    <article
      itemScope
      itemType="https://schema.org/Review"
    >
      <CardStyle>
        {/* itemReviewed */}
        <div
          itemProp="itemReviewed"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <meta itemProp="name" content="صباغ الكويت - خدمات الصباغة والدهان" />
          <meta itemProp="url" content="https://sabaghinkuwait.com" />
        </div>

        <TopBoxStyle />

        <Box position={"absolute"} top={24} right={24} aria-hidden="true">
          <FaQuoteLeft size={64} color={theme.palette.secondary.main} />
        </Box>

        <CardContentStyle>
          {/* Rating */}
          <Box
            display={"flex"}
            mb={2}
            itemProp="reviewRating"
            itemScope
            itemType="https://schema.org/Rating"
          >
            <meta itemProp="worstRating" content="1" />
            <meta itemProp="ratingValue" content={testimonial.rate.toString()} />
            <meta itemProp="bestRating" content="5" />
            {[...Array(5)].map((_, idx) => (
              <FaStarStyle
                key={idx}
                size={20}
                className={idx < testimonial.rate ? classes.gold : classes.grey}
                aria-label={idx < testimonial.rate ? "نجمة ممتلئة" : "نجمة فارغة"}
              />
            ))}
            <span className="sr-only">
              التقييم: {testimonial.rate} من 5 نجوم
            </span>
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            fontSize={"1.1rem"}
            mb={3}
            mt={5}
            fontStyle={"italic"}
            itemProp="reviewBody"
          >
            &ldquo;{testimonial.comment}&rdquo;
          </Typography>
        </CardContentStyle>

        {/* Author */}
        <Box
          display={"flex"}
          alignItems={"center"}
          mt={2}
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <Box ml={2}>
            <Typography
              variant="caption"
              fontWeight="bold"
              color="text.primary"
              itemProp="name"
            >
              {testimonial.name}
            </Typography>
            {testimonial.role && (
              <Typography
                variant="body2"
                color="text.secondary"
                itemProp="jobTitle"
              >
                {testimonial.role}
              </Typography>
            )}
          </Box>
        </Box>
      </CardStyle>
    </article>
  );
};

const BoxSectionStyle = styled("section")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: "relative",
  background: "linear-gradient(135deg, #fafafa 0%, #fff 50%, #faf5ff 100%)",
  overflow: "hidden",
}));

const CardStatusStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backdropFilter: "blur(8px)",
  textAlign: "center",
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  minWidth: 160,
  height: 48,
  borderRadius: theme.spacing(2),
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 600,
  boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
  "&:hover": {
    boxShadow: "1px 1px 1px rgba(0,0,0,0.8)",
    transform: "translateY(-2px)",
  },
  transition: "all 0.2s ease-in-out",
}));

const TestimonialSection = ({
  testimonials,
  onAddTestimonial,
}: {
  testimonials: Testimonial[];
  onAddTestimonial: () => void;
}) => {
  const totalTestimonials = testimonials.length;
  const averageRating =
    testimonials.length > 0
      ? (
        testimonials.reduce((sum, t) => sum + t.rate, 0) / testimonials.length
      ).toFixed(1)
      : "0.0";
  const satisfactionRate =
    testimonials.length > 0
      ? Math.round(
        (testimonials.filter((t) => t.rate >= 4).length / testimonials.length) *
        100
      )
      : 0;

  // JSON-LD for aggregate rating
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "صباغ الكويت - خدمات الصباغة والدهان",
    "@id": "https://sabaghinkuwait.com",
    "url": "https://sabaghinkuwait.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": totalTestimonials,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <BoxSectionStyle
      aria-labelledby="testimonials-heading"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Box position={"relative"} zIndex={2} px={2} maxWidth={1200} mx={"auto"}>
        <Box mb={4} component="header">
          <SectionTitle
            sectionTitle={"ماذا يقول عملاؤنا"}
            variant="body1"
            subSectionTitle="لا تكتفِ بكلامنا. إليك ما يقوله عملاؤنا الراضون عن تجربتهم معنا."
          />

          <Box display="flex" justifyContent="center" mt={3}>
            <ButtonStyle
              variant="contained"
              color="primary"
              onClick={onAddTestimonial}
              aria-label="إضافة رأي جديد عن خدماتنا"
            >
              إضافة رأي جديد
            </ButtonStyle>
          </Box>
        </Box>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="coverflow"
          loop={testimonials.length > 3}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="testimonials-swiper"
          aria-label="عرض شرائح آراء العملاء"
        >
          {testimonials.map((t, index) => (
            <SwiperSlideStyle key={t.id || index}>
              <TestimonialCard testimonial={t} />
            </SwiperSlideStyle>
          ))}
        </Swiper>

        {/* Statistics */}
        <Grid container spacing={4} justifyContent="center" mt={8} component="aside" aria-label="إحصائيات رضا العملاء">
          {[
            {
              value: `${totalTestimonials}+`,
              label: "عملاء راضيين",
              ariaLabel: `لدينا أكثر من ${totalTestimonials} عميل راضٍ`,
            },
            {
              value: `${satisfactionRate}%`,
              label: "معدل الرضا",
              ariaLabel: `معدل رضا العملاء ${satisfactionRate} بالمائة`,
            },
            {
              value: `${Math.round(+averageRating)}/5`,
              label: "متوسط التقييم",
              ariaLabel: `متوسط التقييم ${Math.round(+averageRating)} من 5`,
            },
          ].map((stat, i) => (
            <Grid item xs={12} md={4} key={i}>
              <CardStatusStyle boxShadow={4} role="status" aria-label={stat.ariaLabel}>
                <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom component="div">
                  {stat.value}
                </Typography>
                <Typography color="text.secondary" component="div">
                  {stat.label}
                </Typography>
              </CardStatusStyle>
            </Grid>
          ))}
        </Grid>
      </Box>
    </BoxSectionStyle>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const loadTestimonials = async () => {
    const { data, error } = await supabase
      .from("testimonials_abo_farha")
      .select("*")
      .eq("status", "approved");

    if (error) console.error("Error loading testimonials:", error);
    else setTestimonials(data ?? []);
  };

  useEffect(() => { loadTestimonials(); }, []);
  useEffect(() => {
    if (searchParams.get("open") === "true") setDialogOpen(true);
  }, [searchParams]);

  const handleDialogSuccess = () => loadTestimonials();
  const handleDialogClose = () => {
    setDialogOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("open");
    window.history.replaceState({}, "", url.toString());
  };
  const handleOpen = () => {
    const params = new URLSearchParams(searchParams);
    params.set("open", "true");
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <TestimonialSection testimonials={testimonials} onAddTestimonial={handleOpen} />
      <TestimonialDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        onSuccess={handleDialogSuccess}
      />
    </>
  );
};

export default Testimonials;