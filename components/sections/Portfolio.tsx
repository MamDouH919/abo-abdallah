"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Card, CardContent, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import SectionTitle from "../layouts/SectionTitle";

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
}

const Portfolio = ({ portfolio }: { portfolio: PortfolioItem[] }) => {
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
                            معرض أعمال صباغ الكويت
                        </h2>
                        <meta itemProp="name" content="معرض أعمال صباغ الكويت" />
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
                                <h3 itemProp="name">{item.title}</h3>
                                {item.description && (
                                    <p itemProp="description">{item.description}</p>
                                )}
                                <meta itemProp="contentUrl" content={`/${item.image}`} />
                                <meta itemProp="thumbnailUrl" content={`/${item.image}`} />
                                {item.category && <meta itemProp="genre" content={item.category} />}
                                {item.date && <meta itemProp="datePublished" content={item.date} />}
                                <span itemProp="creator" itemScope itemType="https://schema.org/Organization">
                                    <meta itemProp="name" content="صباغ الكويت" />
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
                        aria-label="شرائح من أعمال صباغ الكويت"
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
                                                alt={`${item.title} - صباغ الكويت`}
                                                width={650}
                                                height={650}
                                                className="image-style"
                                                loading="lazy"
                                                itemProp="contentUrl"
                                                title={`${item.title} - صباغ الكويت`}
                                            />
                                            <meta itemProp="url" content={`/${item.image}`} />
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
                                            <meta itemProp="name" content="صباغ الكويت" />
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
                                "name": "معرض أعمال صباغ الكويت",
                                "description": "مجموعة من أعمالنا المتميزة في مجال الدهانات والصباغة في الكويت",
                                "image": portfolio.map((item) => ({
                                    "@type": "ImageObject",
                                    "contentUrl": `/${item.image}`,
                                    "name": item.title,
                                    "description": item.description || item.title,
                                    "creator": {
                                        "@type": "Organization",
                                        "name": "صباغ الكويت",
                                    },
                                    ...(item.date && { datePublished: item.date }),
                                    ...(item.category && { genre: item.category }),
                                })),
                                "creator": {
                                    "@type": "Organization",
                                    "name": "صباغ الكويت",
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