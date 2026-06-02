"use client";
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaPhone, FaWhatsapp, FaHome, FaPaintBrush, FaMapMarkerAlt } from 'react-icons/fa';

const PageWrapper = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #e8f5e9 100%)',
    padding: theme.spacing(4),
}));

const Card = styled(Box)(({ theme }) => ({
    background: '#ffffff',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(6, 5),
    maxWidth: 560,
    width: '100%',
    boxShadow: '0 8px 32px rgba(0,128,169,0.12)',
    textAlign: 'center',
}));

const ContactButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    height: 52,
    fontSize: '1.05rem',
    fontWeight: 700,
    textTransform: 'none',
    width: '100%',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
    },
}));

const NavLink = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(1.5),
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    flex: 1,
    transition: 'all 0.2s ease-in-out',
    '&:hover': { transform: 'translateY(-2px)' },
}));

const ContactPageClient = () => {
    return (
        <PageWrapper>
            <Card>
                {/* H1 — main page heading */}
                <Typography
                    component="h1"
                    variant="h4"
                    fontWeight={800}
                    color="primary.main"
                    mb={1}
                    fontSize={{ xs: 26, md: 32 }}
                >
                    تواصل معنا
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={1} fontSize={16}>
                    اصباغ ابو عبدالله — صباغ الكويت
                </Typography>

                <Divider sx={{ my: 3, borderColor: 'primary.light' }} />

                {/* H2 — contact methods sub-section */}
                <Typography
                    component="h2"
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    mb={2}
                    fontSize={18}
                >
                    وسائل التواصل
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={4} lineHeight={2}>
                    نحن هنا لخدمتك في جميع أعمال الصباغة والدهانات بالكويت.
                    تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر تفصيلي.
                </Typography>

                <Stack spacing={2} mb={4}>
                    <ContactButton
                        variant="contained"
                        color="primary"
                        href="tel:+96590998489"
                        startIcon={<FaPhone />}
                        aria-label="اتصل بنا على 90998489"
                    >
                        اتصل بنا: 90998489
                    </ContactButton>

                    <Button
                        variant="contained"
                        href="https://wa.me/96590998489"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<FaWhatsapp size={20} />}
                        aria-label="تواصل عبر واتساب 90998489"
                        sx={{
                            borderRadius: 2,
                            height: 52,
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            width: '100%',
                            background: '#25D366',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                background: '#1ebe5d',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                            },
                        }}
                    >
                        واتساب: 90998489
                    </Button>
                </Stack>

                <Divider sx={{ my: 3, borderColor: 'grey.200' }} />

                {/* H2 — internal navigation sub-section */}
                <Typography
                    component="h2"
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    mb={3}
                    fontSize={18}
                >
                    تصفح موقعنا
                </Typography>

                <Stack direction="row" spacing={1.5} mb={2} flexWrap="wrap" gap={1.5}>
                    <NavLink
                        variant="outlined"
                        color="primary"
                        href="/"
                        startIcon={<FaHome />}
                    >
                        الرئيسية
                    </NavLink>

                    <NavLink
                        variant="outlined"
                        color="primary"
                        href="/services"
                        startIcon={<FaPaintBrush />}
                    >
                        خدماتنا
                    </NavLink>

                    <NavLink
                        variant="outlined"
                        color="primary"
                        href="/regions"
                        startIcon={<FaMapMarkerAlt />}
                    >
                        المناطق
                    </NavLink>
                </Stack>
            </Card>
        </PageWrapper>
    );
};

export default ContactPageClient;
