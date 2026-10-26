"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid2 as Grid, Stack, Pagination, Typography } from "@mui/material";
import SectionTitle from "../layouts/SectionTitle";
import regions from "@/data/regions.json";
import PaintServiceCard from "../ServiceCard";
import { CustomLink } from "../layouts/CustomLink";
import { getRegionContent } from "@/data/regions-content";

type Region = (typeof regions)[number];

/** Display order of the governorate groups on the /regions hub. */
const GOVERNORATES = ["العاصمة", "حولي", "الفروانية", "الجهراء", "الأحمدي", "مبارك الكبير"];

function governorateOf(region: Region): string {
    return getRegionContent(region.slug.en)?.governorate ?? "";
}

const PREFIX = "Regions";
const classes = {
    text: `${PREFIX}-text`,
    container: `${PREFIX}-container`,
};

const Root = styled(Container)(({ theme }) => ({
    margin: "50px auto !important",
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main),
    },
    [`& .${classes.container}`]: {
        position: "relative",
        background: theme.palette.background.default,
        borderRadius: 20,
        boxShadow:
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        [`&::before`]: {
            content: '""',
            position: "absolute",
            top: "-5px",
            left: "-5px",
            width: "100px",
            height: "100px",
            background: theme.palette.primary.main,
            zIndex: -1,
            borderRadius: 20,
            transition: "width 0.3s ease, height 0.3s ease",
        },
        [`&::after`]: {
            content: '""',
            position: "absolute",
            bottom: "-5px",
            right: "-5px",
            width: "100px",
            height: "100px",
            background: theme.palette.primary.main,
            zIndex: -1,
            borderRadius: 20,
            transition: "width 0.3s ease, height 0.3s ease",
        },
        "&:hover": {
            [`&::after`]: {
                width: "150px",
                height: "100%",
            },
            [`&::before`]: {
                width: "150px",
                height: "100%",
            },
        },
    },
}));

function RegionCard({ region }: { region: Region }) {
    return (
        <PaintServiceCard
            service={{
                description: region.description,
                keywords: region.keywords,
                phone: region.phone,
                slug_ar: region.slug.ar,
                slug_en: region.slug.en,
                title: region.title,
            }}
            type={"/regions"}
            btnText={"عرض المنطقه"}
        />
    );
}

const RegionsSection = ({ pagination = true, grouped = false }: { pagination?: boolean; grouped?: boolean }) => {
    const itemsPerPage = pagination ? 6 : regions.length; // عدد الخدمات في كل صفحة
    const [page, setPage] = useState(1);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRegions = regions.slice(startIndex, endIndex);
    const totalPages = Math.ceil(regions.length / itemsPerPage);

    if (grouped) {
        return (
            <Root maxWidth="lg" sx={{ my: 5 }} id={"regions"}>
                <Stack alignItems={"center"} spacing={5}>
                    <SectionTitle sectionTitle="المناطق التي نقدم خدمات صباغ الكويت" />
                    {GOVERNORATES.map((gov) => {
                        const items = regions.filter((r) => governorateOf(r) === gov);
                        if (!items.length) return null;
                        return (
                            <Stack key={gov} spacing={3} width={"100%"} component="section" aria-label={`محافظة ${gov}`}>
                                <Typography component="h2" variant="h4" fontWeight={800} color="primary">
                                    محافظة {gov}
                                </Typography>
                                <Grid container spacing={3} alignItems={"stretch"}>
                                    {items.map((region) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={region.slug.en} display={"flex"}>
                                            <RegionCard region={region} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Stack>
                        );
                    })}
                </Stack>
            </Root>
        );
    }

    return (
        <Root maxWidth="lg" sx={{ my: 5 }} id={"regions"}>
            <Stack alignItems={"center"} spacing={5}>
                <SectionTitle sectionTitle="المناطق التي نقدم خدمات صباغ الكويت" />
                {pagination && <CustomLink title={"كل المناطق"} href={"/regions"}>
                    عرض المناطق
                </CustomLink>}

                <Stack spacing={5} my={10} width={"100%"}>
                    <Grid container spacing={3} alignItems={"stretch"}>
                        {currentRegions.map((region, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} display={"flex"}>
                                <RegionCard region={region} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* ✅ Pagination */}
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                    shape="rounded"
                    size="large"
                />
            </Stack>
        </Root>
    );
};

export default RegionsSection;
