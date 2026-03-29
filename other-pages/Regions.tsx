import { Typography, Button, Container, Box, Grid2 as Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Award, CheckCircle2, Droplet, Home, MapPin, MessageCircle, Palette, Phone, Users } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { AccentButton, AccentTitle, BoxStyle, ButtonsWrapper, Card, HeaderContainer, HeroSection, PaperStyle, Section, StyledAppBar, StyledPaper, TitleBox } from "./Styled";
import Portfolio from "@/components/sections/Portfolio";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";

const features = [
    { icon: CheckCircle2, title: "خبرة طويلة", desc: "أكثر من 10 سنوات في مجال الصباغة والدهانات" },
    { icon: Palette, title: "ألوان متنوعة", desc: "تشكيلة ضخمة من أفضل الشركات العالمية" },
    { icon: Home, title: "نظافة مضمونة", desc: "لا نترك أي فوضى خلفنا بعد الانتهاء" },
];

const services = [
    "دهان الجدران الداخلية والخارجية",
    "صبغ الأسقف والجدران بالرش أو الرول",
    "دهانات الديكور والتصميمات الحديثة",
    "ورق الجدران بأنواعه المختلفة",
    "إزالة التشققات ومعالجة الرطوبة",
    "دهانات مقاومة للماء والرطوبة",
    "تغيير ألوان الغرف والمجالس",
    "تجديد صبغ الفلل والمنازل القديمة",
];

const steps = [
    { num: 1, title: "زيارة الموقع وتقييم الحالة", desc: "معاينة الجدران والأسقف لمعرفة احتياجاتك" },
    { num: 2, title: "تقديم عرض السعر المناسب", desc: "عرض مفصل يشمل المواد والعمل" },
    { num: 3, title: "التحضير والتنظيف", desc: "تغطية الأرضيات والأثاث لحمايتها" },
    { num: 4, title: "الدهان والتنفيذ", desc: "تطبيق الطبقات بالتسلسل الصحيح" },
    { num: 5, title: "المراجعة والتسليم", desc: "فحص العمل والتأكد من رضاك التام" },
];

const paints = [
    { title: "دهانات بلاستيكية", desc: "مناسبة للجدران الداخلية وسهلة التنظيف" },
    { title: "دهانات زيتية", desc: "تعطي لمعة قوية ومقاومة للرطوبة" },
    { title: "دهانات ديكورية", desc: "مثل المخملية أو المعدنية الحديثة" },
    { title: "دهانات مقاومة", desc: "للرطوبة والعفن في المطابخ والحمامات" },
    { title: "دهانات خارجية", desc: "مقاومة لأشعة الشمس والظروف الجوية" },
    { title: "ورق جدران", desc: "بأنواعه وأشكاله المختلفة والعصرية" },
];

export default function Regions({ region }: { region: string }) {
    const faqs = [
        {
            q: `كم سعر الصباغ في ${region}؟`,
            a: "تبدأ الأسعار من 1.5 دينار كويتي للمتر وقد تختلف حسب نوع الدهان",
        },
        { q: "هل تقدمون الخدمة مع المواد؟", a: "نعم، يمكن اختيار الخدمة مع توفير المواد أو بدونها" },
        { q: "هل تستخدمون دهانات أصلية؟", a: "نعم، نستخدم فقط دهانات أصلية ومعتمدة من الشركات العالمية" },
        { q: "هل يمكن تنفيذ تصميمات خاصة؟", a: "نعم، نقدم خدمات الدهانات الديكورية والتصميمات المخصصة" },
    ];


    return (
        <>
            <StyledAppBar>
                <HeaderContainer maxWidth="lg">
                    <TitleBox>
                        <div style={{ position: 'relative', width: '100px', height: '60px' }}>
                            <Link href="https://sabaghinkuwait.com" title='صباغ الكويت'>
                                <Image
                                    src="/logo.png"
                                    alt="صباغ الكويت"
                                    fill
                                    sizes="200px"
                                    style={{ objectFit: 'contain' }}
                                    title="logo"
                                />
                            </Link>
                        </div>
                        <Typography fontWeight="bold" color="primary" fontSize={22}>
                            صباغ {region}
                        </Typography>
                    </TitleBox>
                    <Link href={"tel:+96550303335"} target="_blank" rel="noopener noreferrer" title="mobile">
                        <AccentButton variant="contained">احجز الآن</AccentButton>
                    </Link>
                </HeaderContainer>
            </StyledAppBar>

            <HeroSection>
                <Container maxWidth="md">
                    <Typography variant="h1" fontWeight="bold" gutterBottom fontSize={35}>
                        صباغ {region} – خبرة وجودة بأيدي أفضل الصباغين
                    </Typography>
                    <Typography variant="h6" color="text.secondary" paragraph>
                        نقدم خدمات الصباغة والدهانات بأعلى جودة وسعر مناسب لجميع أنواع المباني
                    </Typography>
                    <ButtonsWrapper>
                        <Link href={"tel:+96550303335"} target="_blank" rel="noopener noreferrer" title="mobile">
                            <AccentButton size="large" variant="contained">
                                <Phone size={20} />
                                اتصل الآن: 50303335
                            </AccentButton>
                        </Link>
                        <Link href={"https://wa.me/+96550303335"} target="_blank" rel="noopener noreferrer" title="whatsApp">
                            <Button size="large" variant="outlined">
                                <MessageCircle size={20} />
                                واتساب
                            </Button>
                        </Link>
                    </ButtonsWrapper>
                </Container>
            </HeroSection>
            <Portfolio portfolio={portfolio}/>
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom={6}>
                        من نحن - صباغ {region}
                    </Typography>
                    <Grid container spacing={6} alignItems="center" marginBottom={8}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <AccentTitle variant="h5">خدمات الصباغة المتميزة في {region}</AccentTitle>
                            <Typography color="text.secondary" paragraph>
                                نحن متخصصون في تقديم خدمات <strong>الدهانات</strong> و<strong>الصباغة</strong> عالية الجودة في منطقة {region} وما حولها.
                                بفضل خبرتنا التي تزيد عن 10 سنوات في مجال <strong>دهان المنازل</strong> و<strong>الديكورات الداخلية والخارجية</strong>،
                                أصبحنا الخيار الأول للكثير من العملاء الذين يبحثون عن <strong>فني دهان محترف</strong> يقدم جودة وموثوقية بأسعار تنافسية.
                            </Typography>

                            <Typography color="text.secondary" paragraph>
                                يقدم فريقنا المتخصص خدمات متنوعة تشمل <strong>دهان الجدران</strong>، <strong>دهان الأسقف</strong>،
                                <strong>دهان الأبواب والنوافذ</strong>، بالإضافة إلى تنفيذ <strong>تصاميم حديثة</strong>
                                باستخدام أفضل أنواع الدهانات مثل <strong>جوتن</strong> و<strong>ناشنال</strong> و<strong>سكيب</strong>.
                                نستخدم أدوات ومواد عالية الجودة لضمان تشطيب احترافي يدوم طويلاً ويمنح منزلك أو مكتبك مظهراً أنيقاً ومميزاً.
                            </Typography>

                            <Typography color="text.secondary" paragraph>
                                سواء كنت تبحث عن <strong>دهان داخلي</strong> أو <strong>دهان خارجي</strong>،
                                فإننا نلتزم بتقديم أفضل النتائج مع الالتزام التام بالمواعيد والنظافة أثناء العمل.
                                كما نوفر استشارات مجانية لاختيار الألوان المناسبة التي تعكس ذوقك الشخصي وتنسجم مع ديكور منزلك.
                            </Typography>

                            <Typography color="text.secondary">
                                التزامنا الدائم بالجودة والاحترافية أكسبنا ثقة آلاف العملاء في {region} والمناطق المجاورة.
                                إذا كنت تبحث عن <strong>شركة دهانات</strong> موثوقة تقدم خدمات <strong>صباغة احترافية</strong> وسريعة التنفيذ،
                                فلا تتردد في التواصل معنا اليوم للحصول على عرض سعر مجاني وخدمة متميزة ترضي تطلعاتك.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box display="flex" flexDirection="column" gap={3}>
                                <StyledPaper>
                                    <Box display="flex" gap={2} alignItems="flex-start">
                                        <Award />
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                خبرة معتمدة
                                            </Typography>
                                            <Typography color="text.secondary" variant="body2">
                                                أكثر من 10 سنوات من الخبرة المتراكمة في مجال الصباغة والدهانات بجميع أنواعها
                                            </Typography>
                                        </Box>
                                    </Box>
                                </StyledPaper>

                                <StyledPaper>
                                    <Box display="flex" gap={2} alignItems="flex-start">
                                        <MapPin />
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                خدمة محلية متخصصة
                                            </Typography>
                                            <Typography color="text.secondary" variant="body2">
                                                نغطي جميع مناطق {region} والمناطق المجاورة بسرعة واحترافية عالية
                                            </Typography>
                                        </Box>
                                    </Box>
                                </StyledPaper>

                                <StyledPaper>
                                    <Box display="flex" gap={2} alignItems="flex-start">
                                        <Users />
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                فريق محترف
                                            </Typography>
                                            <Typography color="text.secondary" variant="body2">
                                                فريق متدرب وملتزم بأعلى معايير الجودة والنظافة والاحترافية
                                            </Typography>
                                        </Box>
                                    </Box>
                                </StyledPaper>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Region Information */}
                    <StyledPaper>
                        <Typography variant="h5" fontWeight="bold" textAlign="center" marginBottom={4}>
                            منطقة {region} - موقع استراتيجي مهم
                        </Typography>

                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AccentTitle variant="h6">عن منطقة {region}</AccentTitle>
                                <Typography color="text.secondary" paragraph>
                                    تعتبر منطقة {region} من أهم المناطق السكنية والتجارية في الكويت، وتتميز بتطورها العمراني المستمر وكثافة المشاريع السكنية والتجارية. هذا يجعلها بحاجة مستمرة لخدمات الصباغة والدهانات عالية الجودة.
                                </Typography>
                                <Typography color="text.secondary">
                                    نحن نفهم احتياجات سكان {region} وخصائص المناخ المحلي، مما يجعلنا نختار الدهانات والمواد المناسبة التي تتحمل الحرارة والرطوبة والظروف الجوية القاسية.
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: 6 }}>
                                <AccentTitle variant="h6">لماذا صباغ {region}؟</AccentTitle>
                                <List>
                                    {[
                                        "معرفة عميقة بمتطلبات المنطقة والمناخ المحلي",
                                        "استجابة سريعة وخدمة عملاء ممتازة",
                                        "أسعار تنافسية وعروض خاصة للعملاء المنتظمين",
                                        "ضمان على جودة العمل والمواد المستخدمة",
                                    ].map((text, index) => (
                                        <ListItem key={index} disableGutters>
                                            <ListItemIcon>
                                                <CheckCircle2 />
                                            </ListItemIcon>
                                            <ListItemText primaryTypographyProps={{ color: "text.secondary" }} primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </StyledPaper>
                </Container>
            </Section>
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom={8}>
                        لماذا تختار صباغ {region}؟
                    </Typography>
                    <Grid container spacing={2}>
                        {features.map((item, i) => (
                            <Grid key={i} size={{ xs: 12, md: 4 }}>
                                <Card>
                                    <item.icon size={40} />
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography color="text.secondary">{item.desc}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
                        خدماتنا
                    </Typography>
                    <Grid container spacing={3}>
                        {services.map((service, index) => (
                            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                                <PaperStyle elevation={1}>
                                    <Droplet size={22} />
                                    <Typography fontWeight="medium">{service}</Typography>
                                </PaperStyle>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>
            <Section>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
                        خطوات عملنا
                    </Typography>
                    <Stack spacing={4}>
                        {steps.map((step) => (
                            <Stack key={step.num} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle>
                                    {step.num}
                                </BoxStyle>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        flex: 1,
                                        p: 2,
                                        bgcolor: "background.default",
                                        borderRadius: 2,
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold" mb={0.5}>
                                        {step.title}
                                    </Typography>
                                    <Typography color="text.secondary">{step.desc}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
                        أنواع الدهانات
                    </Typography>
                    <Grid container spacing={3}>
                        {paints.map((paint, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 2,
                                        border: "1px solid",
                                        borderColor: "divider",
                                        bgcolor: "background.paper",
                                        height: "100%",
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold" mb={1}>
                                        {paint.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {paint.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>
            <Section>
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
                        الأسئلة الشائعة
                    </Typography>
                    {faqs.map((faq, i) => (
                        <Accordion key={i} sx={{ mb: 2, borderRadius: 2, bgcolor: "background.default" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{ fontWeight: "bold", "& .MuiAccordionSummary-content": { justifyContent: "space-between" } }}
                            >
                                {faq.q}
                            </AccordionSummary>
                            <AccordionDetails sx={{ color: "text.secondary", fontSize: 14 }}>
                                {faq.a}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Section>
        </>
    );
}