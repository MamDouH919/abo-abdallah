"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Grid2 as Grid, Stack, Pagination } from "@mui/material";
import SectionTitle from "../layouts/SectionTitle";
import services from "@/data/services.json";
import PaintServiceCard from "../ServiceCard";
import { CustomLink } from "../layouts/CustomLink";

const PREFIX = "Services";
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

const ServicesSection = ({ pagination = true }: { pagination?: boolean }) => {
    const itemsPerPage = pagination ? 6 : services.length; // عدد الخدمات في كل صفحة
    const [page, setPage] = useState(1);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentServices = services.slice(startIndex, endIndex);
    const totalPages = Math.ceil(services.length / itemsPerPage);

    return (
        <Root maxWidth="lg" id={"services"}>
            <Stack alignItems={"center"} spacing={5}>
                <SectionTitle sectionTitle="الخدمات التي نقدمها لك" />
                {pagination && <CustomLink title={"كل الخدمات"} href={"الخدمات"}>
                    عرض الخدمات
                </CustomLink>}

                <Stack spacing={5} my={10}>
                    <Grid container spacing={3} alignItems={"stretch"}>
                        {currentServices.map((service, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} display={"flex"}>
                                <PaintServiceCard service={service} type={"/الخدمات"} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {pagination && <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                    shape="rounded"
                    size="large"
                />}
            </Stack>
        </Root>
    );
};

export default ServicesSection;
