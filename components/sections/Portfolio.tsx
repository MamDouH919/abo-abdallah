"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Card, CardContent, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionTitle from "../layouts/SectionTitle";
import { absUrl } from "@/lib/seo/site";

const Root = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.grey[50],
    "& .image-style": {
        width: "100%",
        height: "24rem",
        objectFit: "cover",
    },
    ".figure-style": {
        position: "relative",
    },
    ".card-style": {
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
            boxShadow: theme.shadows[4],
        },
    },
    ".card-content-style": {
        padding: "0 !important",
    },
    ".header-style": {
        textAlign: "center",
        marginBottom: theme.spacing(12),
    },
    "& .sr-only": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
    },
}));

interface PortfolioItem {
    image: string;
    title: string;
    description?: string;
    date?: string;
    category?: string;
    /** Literal description of the photo. When set it is used as-is for the
     *  alt text (no " - صباغ الكويت" suffix and no title tooltip). */
    alt?: string;
}

interface PortfolioProps {
    portfolio: PortfolioItem[];
    /** Gallery name for the hidden heading / ImageGallery schema. */
    name?: string;
}

const DEFAULT_NAME = "معرض أعمال صباغ الكويت";

const Portfolio = ({ portfolio, name = DEFAULT_NAME }: PortfolioProps) => {
    return (
        <section>
            <Root
                maxWidth="lg"
                sx={{ my: 5 }}
                id={"our-services"}
                aria-labelledby="portfolio-heading"
                itemScope
                itemType="https://schema.org/ImageGallery"
            >
                <Container maxWidth="lg">
                    {/* Heading */}
                    <header className="header-style">
                        <SectionTitle
                            sectionTitle="معرض أعمالنا"
                            subSectionTitle="شاهد بعض من أعمالنا المتميزة"
                        />
                        <h2 id="portfolio-heading" className="sr-only">
                            {name}
                        </h2>
                        <meta itemProp="name" content={name} />
                        <meta itemProp="description" content="شاهد بعض من أعمالنا المتميزة في مجال الدهانات والصباغة" />
                    </header>

                    {/* Hidden gallery for SEO - accessible to search engines */}
                    <div className="sr-only" aria-label="قائمة أعمال المعرض">
                        {portfolio.map((item, index) => (
                            <article
                                key={`seo-${index}`}
                                itemScope
                                itemType="https://schema.org/ImageObject"
                            >
                                {/* Not a real page heading — a hidden per-image SEO caption.
                                    A previous <h3> here injected each item's title (including
                                    unrelated ones like "جبس بورد") into every page that renders
                                    this gallery, corrupting that page's heading hierarchy. */}
                                <p itemProp="name">{item.title}</p>
                                {item.description && (
                                    <p itemProp="description">{item.description}</p>
                                )}
                                <meta itemProp="contentUrl" content={absUrl(item.image)} />
                                <meta itemProp="thumbnailUrl" content={absUrl(item.image)} />
                                {item.category && <meta itemProp="genre" content={item.category} />}
                                {item.date && <meta itemProp="datePublished" content={item.date} />}
                                <span itemProp="creator" itemScope itemType="https://schema.org/Organization">
                                    <meta itemProp="name" content="دار الألوان" />
                                </span>
                            </article>
                        ))}
                    </div>

                    {/* Carousel - Visual presentation */}
                    <Splide
                        options={{
                            type: "loop",
                            perPage: 3,
                            perMove: 1,
                            gap: "1rem",
                            pagination: true,
                            arrows: true,
                            direction: "rtl",
                            autoplay: true,
                            interval: 3000,
                            slideFocus: false,
                            breakpoints: {
                                768: { perPage: 1 },
                                1024: { perPage: 2 },
                            },
                        }}
                        aria-label={`شرائح من ${name}`}
                    >
                        {portfolio.map((item, index) => (
                            <SplideSlide
                                key={index}
                                aria-label={`شريحة ${index + 1}: ${item.title}`}
                            >
                                <Card
                                    className="card-style"
                                    component="article"
                                    itemScope
                                    itemType="https://schema.org/CreativeWork"
                                >
                                    <CardContent className="card-content-style">
                                        <figure
                                            className="figure-style"
                                            itemProp="image"
                                            itemScope
                                            itemType="https://schema.org/ImageObject"
                                        >
                                            <Image
                                                src={"/" + item.image}
                                                alt={item.alt ?? `${item.title} - صباغ الكويت`}
                                                width={650}
                                                height={650}
                                                className="image-style"
                                                loading="lazy"
                                                itemProp="contentUrl"
                                                title={item.alt ? undefined : `${item.title} - صباغ الكويت`}
                                            />
                                            <meta itemProp="url" content={absUrl(item.image)} />
                                            <meta itemProp="name" content={item.title} />
                                            {item.description && (
                                                <meta itemProp="description" content={item.description} />
                                            )}
                                            {item.title && (
                                                <figcaption className="sr-only" itemProp="caption">
                                                    {item.title}
                                                </figcaption>
                                            )}
                                        </figure>

                                        {/* Creative work metadata */}
                                        <meta itemProp="name" content={item.title} />
                                        {item.description && (
                                            <meta itemProp="description" content={item.description} />
                                        )}
                                        {item.category && (
                                            <meta itemProp="genre" content={item.category} />
                                        )}
                                        {item.date && (
                                            <meta itemProp="dateCreated" content={item.date} />
                                        )}

                                        {/* Creator information */}
                                        <span
                                            itemProp="creator"
                                            itemScope
                                            itemType="https://schema.org/Organization"
                                            style={{ display: "none" }}
                                        >
                                            <meta itemProp="name" content="دار الألوان" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </SplideSlide>
                        ))}
                    </Splide>

                    {/* JSON-LD Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "ImageGallery",
                                "name": name,
                                "description": "مجموعة من أعمالنا المتميزة في مجال الدهانات والصباغة في الكويت",
                                "image": portfolio.map((item) => ({
                                    "@type": "ImageObject",
                                    "contentUrl": absUrl(item.image),
                                    "name": item.title,
                                    "description": item.description || item.title,
                                    "creator": {
                                        "@type": "Organization",
                                        "name": "دار الألوان",
                                    },
                                    ...(item.date && { datePublished: item.date }),
                                    ...(item.category && { genre: item.category }),
                                })),
                                "creator": {
                                    "@type": "Organization",
                                    "name": "دار الألوان",
                                },
                            }),
                        }}
                    />
                </Container>
            </Root>
        </section>
    );
};

export default Portfolio;