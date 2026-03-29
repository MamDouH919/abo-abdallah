'use client'
import Link from 'next/link'
import { styled } from "@mui/material/styles";
import { Typography } from '@mui/material';

const PREFIX = "NavLink";
const classes = {
  active: `${PREFIX}-active`,
};

const Root = styled("div")(({ theme }) => ({
  display: "inline-block",

  "a": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    textDecoration: "none",
    fontWeight: 500,
    borderRadius: theme.shape.borderRadius * 3,
    padding: theme.spacing(1, 2),
    fontSize: "15px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
    transition: "all 0.3s ease",
    boxShadow: theme.shadows[1],

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      boxShadow: theme.shadows[4],
      transform: "translateY(-2px)",
      textDecoration: "none",
    },

    [`&.${classes.active}`]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      fontWeight: 600,
      boxShadow: theme.shadows[2],
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  },
}));

export const CustomLink = ({
  href,
  children,
  title,
}: {
  href: string;
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <Root>
      <Link href={href} shallow title={title}>
        <Typography component="span" mb={0} whiteSpace="nowrap">
          {children}
        </Typography>
      </Link>
    </Root>
  );
};
