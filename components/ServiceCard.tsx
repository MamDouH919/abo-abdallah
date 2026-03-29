import React from "react";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Stack,
    Chip,
    Box,
    Avatar,
    Paper,
} from "@mui/material";
import FormatPaintIcon from "@mui/icons-material/FormatPaint"; // default icon
import { CustomLink } from "./layouts/CustomLink";
import { styled } from "@mui/material/styles";
import { CustomPhoneLink } from "./layouts/CustomPhoneLink";

export type Service = {
    title: string;
    description: string;
    keywords: string[];
    phone: string;
    slug_ar: string;
    slug_en: string;
};

type Props = {
    service: Service;
    icon?: React.ReactNode; // optional icon prop
    type: string;
    btnText?: string;
};

const CardStyle = styled(Card)(() => ({
    maxWidth: 420,
    overflow: "hidden",
    textAlign: "center",
    p: 2,
    height: "100%",
}))

const AvatarStyle = styled(Avatar)(({ theme }) => ({
    background: theme.palette.primary.main,
    width: 64,
    height: 64,
}))

const BoxStyle = styled(Box)(() => ({
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    mt: 1,
}))


const CardActionsStyle = styled(CardActions)(() => ({
    justifyContent: "space-between",
    px: 2,
    pb: 2,
}))

const PaperStyle = styled(Paper)(() => ({
    borderRadius: 20,
    overflow: "hidden",
}))

export default function PaintServiceCard({ service, icon, type, btnText = "عرض الخدمة" }: Props) {
    const { title, description, keywords, phone, slug_ar } = service;

    return (
        <PaperStyle elevation={3}>
            <CardStyle>
                {/* --- Icon Section --- */}
                <Box display="flex" justifyContent="center" mt={2}>
                    <AvatarStyle>
                        {icon ?? <FormatPaintIcon fontSize="large" />}
                    </AvatarStyle>
                </Box>

                {/* --- Content --- */}
                <CardContent>
                    <Stack spacing={1} alignItems="center">
                        <Typography variant="h6" component="h3" fontWeight={700}>
                            {title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" textAlign="center">
                            {description}
                        </Typography>

                        <BoxStyle>
                            {keywords?.slice(0, 6).map((k) => (
                                <Chip key={k} label={k} size="small" />
                            ))}
                        </BoxStyle>
                    </Stack>
                </CardContent>

                {/* --- Actions --- */}
                <CardActionsStyle>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent={"center"} width={"100%"}>
                        <CustomPhoneLink
                            title={title + " " + phone}
                            href={`tel:+965${phone.replace(/[^0-9+]/g, "")}`}
                        >
                            اتصل الآن
                        </CustomPhoneLink>

                        <CustomLink
                            title={title}
                            href={slug_ar + type}
                        >
                            {btnText}
                        </CustomLink>
                    </Stack>
                </CardActionsStyle>
            </CardStyle>
        </PaperStyle>
    );
}
