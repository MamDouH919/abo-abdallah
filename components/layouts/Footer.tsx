"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Stack, Typography } from '@mui/material';
import { FaRegCopyright } from 'react-icons/fa';
import Link from 'next/link';
import SocialMediaLinks from '../Social';


const PREFIX = "Footer";
const classes = {
    text: `${PREFIX}-text`,
    container: `${PREFIX}-container`
};


const Root = styled(Stack)(({ theme }) => ({
    background: theme.palette.primary.main,
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        fontSize: 20,
        textAlign: "center"
    },
    [`& .${classes.container}`]: {
        position: "relative",
        background: theme.palette.background.default,
        borderRadius: 20,
        boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
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
        '&:hover': {
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

export type SocialMediaItem = {
    key: string;
    value: string;
};

const socialLinks: SocialMediaItem[] = [
    { key: "FACEBOOK", value: "https://www.facebook.com/novaslash1/" },
    { key: "INSTAGRAM", value: "https://www.instagram.com/sabaghelkuwait" },
    { key: "LINKEDIN", value: "https://www.linkedin.com/in/novaslash/" },
    { key: "YOUTUBE", value: "https://www.youtube.com/@novaslash1" },
    { key: "X", value: "https://x.com/novaslash1s" },
];

const Services = () => {
    return (
        <Root mt={5} p={3} spacing={2} alignItems={"center"}>
            <Typography className={classes.text}>
                <Link className={classes.text} href="https://sabaghelkuwait.com" title="صباغ الكويت">صباغ الكويت</Link> الاول في الوطن العربي
            </Typography>
            <Typography className={classes.text}>تواصل معنا</Typography>
            <Stack direction={"row"} spacing={2} alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
                <Link className={classes.text} href="/about" title="من نحن">من نحن</Link>
                <Link className={classes.text} href="/privacy-policy" title="سياسة الخصوصية">سياسة الخصوصية</Link>
                <Link className={classes.text} href="/terms-conditions" title="الشروط والأحكام">الشروط والأحكام</Link>
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" mb={1}>
                <Stack direction="row" spacing={1.5} flexWrap="wrap">
                    <SocialMediaLinks links={socialLinks.map((s) => ({ code: s.key, link: s.value }))} />
                </Stack>
            </Stack>

            <Stack direction={"row"} spacing={1} alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
                <FaRegCopyright className={classes.text} />
                <Typography className={classes.text}>2024 تطوير</Typography>
                <Link title='creator' className={classes.text} href='https://mamdouh.mountain-egy.site/' rel="noopener noreferrer" target="_blank">Mamdouh Mohammed</Link>

                {/* <Link
                    title='creator'
                    className={classes.text} href='https://wa.me/+96590998489'
                    rel="noopener noreferrer" target="_blank"
                >
                    محمد ابو فرحة
                </Link> */}
            </Stack>
        </Root>
    )
}

export default Services