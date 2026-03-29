import { CustomLink } from '@/components/layouts/CustomLink'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const notFound = () => {
    return (
        <Stack spacing={2} height={"100vh"} width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <CustomLink href={"/"}>الرجوع الي القائمة الرئسية </CustomLink>
            <Typography variant='h1' fontSize={40} color='primary.main'>Page Not Found</Typography>
            <Typography variant='h2' fontSize={30} color='primary.main'>404</Typography>
        </Stack>
    )
}

export default notFound
