'use client'
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import { Typography } from '@mui/material';

const PREFIX = "NavLink";
const classes = {
    active: `${PREFIX}-active`,
};

const Root = styled("div")(({ theme }) => ({
    // background: theme.palette.background.default,
    "a": {
        // textDecoration: "none",
        color: theme.palette.secondary.contrastText,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        textTransform: "capitalize",
        transition: "all 0.5s",
        padding: theme.spacing(1, 2),
        background: theme.palette.secondary.light,
        borderRadius: theme.spacing(3),
        boxShadow: "2px 5px 2px rgba(0, 0, 0, 0.25)",
        [`&:hover`]: {
            background: theme.palette.secondary.main,
            // color: `${theme.palette.primary.light}!Important`,
            // font: "bold",
            textDecoration: "underline",
        },
        [`&.${classes.active}`]: {
            opacity: 1,
            color: `${theme.palette.primary.main}!Important`,
        },
    }
}));

export const CustomLink = ({ href, children, title }: { href: string, children: React.ReactNode, title?: string }) => {
    return (
        <Root>
            <Link href={href} shallow title={title}>
                <Typography paragraph mb={0} whiteSpace={"nowrap"}>
                    {children}
                </Typography>
            </Link>
        </Root>
    )
}