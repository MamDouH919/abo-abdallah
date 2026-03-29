"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Stack, Typography } from '@mui/material';
import { FaRegCopyright } from 'react-icons/fa';
import Link from 'next/link';


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

const Services = () => {
    return (
        <Root mt={5} p={3} spacing={2} alignItems={"center"}>
            <Typography className={classes.text}>صباغ الكويت الاول في الوطن العربي</Typography>
            <Typography className={classes.text}>تواصل معنا</Typography>
            {/* <Stack direction={"row"} spacing={2} flexWrap={"wrap"}>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    title="tiktok"
                    href={`https://www.tiktok.com/@user79235046171227?_t=ZS-8zOjsyMMxer&_r=1`}
                >
                    <Fab aria-label="instagram" size='small'>
                        <FaTiktok size={25} />
                    </Fab>
                </Link>
            </Stack> */}
            <Stack direction={"row"} spacing={1} alignItems={"center"} flexWrap={"wrap"} justifyContent={"center"}>
                <FaRegCopyright className={classes.text} />
                <Typography className={classes.text}>2024 تطوير</Typography>
                <Link title='creator' className={classes.text} href='https://mamdouh.mountain-egy.site/' rel="noopener noreferrer" target="_blank">Mamdouh Mohammed</Link>

                {/* <Link
                    title='creator'
                    className={classes.text} href='https://wa.me/+96550303335'
                    rel="noopener noreferrer" target="_blank"
                >
                    محمد ابو فرحة
                </Link> */}
            </Stack>
        </Root>
    )
}

export default Services