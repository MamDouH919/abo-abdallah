import { Box, Container, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
const PhoneStyle = dynamic(() => import("@/components/layouts/PhoneStyle"));

/**
 * Hub-page banner (/services, /regions). Each hub passes its own <h1> and
 * intro so the two pages don't share a heading or body copy.
 */
const BannerOne = ({ title, intro }: { title: string; intro: string[] }) => {
    return (
        <Box  mt={8} py={10} id="home">
            <Container maxWidth="md">
                <Stack
                    spacing={4}
                    border={1}
                    borderColor="primary.main"
                    borderRadius={2}
                    p={5}
                    textAlign="center"
                >
                    <Typography component="h1" variant="h1" fontSize={30} color="primary.main" fontWeight="bold">
                        {title}
                    </Typography>
                    {intro.map((p) => (
                        <Typography key={p} color="#000" variant="body1" lineHeight={1.7}>
                            {p}
                        </Typography>
                    ))}

                </Stack>
                <PhoneStyle />
            </Container>
        </Box>
    )
}

export default BannerOne