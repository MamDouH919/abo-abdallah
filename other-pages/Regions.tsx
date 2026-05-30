"use client";
import { Typography, Button, Container, Box, Grid2 as Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Accordion, AccordionSummary, AccordionDetails, Divider, Chip } from "@mui/material";
import { Award, CheckCircle2, Droplet, Home, MapPin, MessageCircle, Palette, Phone, Star, Users } from "lucide-react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { AccentButton, AccentTitle, BoxStyle, ButtonsWrapper, Card, HeaderContainer, HeroSection, PaperStyle, Section, StyledAppBar, StyledPaper, TitleBox } from "./Styled";
import Portfolio from "@/components/sections/Portfolio";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";

interface NearbyRegion {
    title: string;
    slug: { ar: string, en: string };
}

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

const prices = [
    { service: "دهان غرفة واحدة", price: "من 25 د.ك", note: "شامل المواد" },
    { service: "دهان شقة 3 غرف", price: "من 80 د.ك", note: "شامل المواد" },
    { service: "دهان فيلا كاملة", price: "من 200 د.ك", note: "حسب المساحة" },
    { service: "دهان متر مربع", price: "1.5 – 3 د.ك", note: "حسب نوع الدهان" },
    { service: "تركيب ورق جدران", price: "من 4 د.ك / م²", note: "شامل التركيب" },
    { service: "معالجة التشققات", price: "من 15 د.ك", note: "حسب الحجم" },
];

const reviews = [
    { name: "أحمد الكويتي", rating: 5, text: "خدمة ممتازة جداً، الفريق محترف ونظيف والأسعار معقولة. دهانوا شقتي كاملة في يومين فقط وكانت النتيجة أكثر مما توقعت. أنصح بهم بشدة." },
    { name: "فاطمة العنزي", rating: 5, text: "أنصح بهم بشدة، الألوان جميلة والتشطيب راقي. استجابوا بسرعة وأنهوا العمل في الوقت المحدد بدون أي مشاكل." },
    { name: "محمد الراشد", rating: 5, text: "عملوا معي فيلا كاملة وكانت النتيجة مذهلة. استخدموا دهانات جوتن أصلية وضمنوا العمل لمدة سنتين. سعر ممتاز ومع الخدمة الاحترافية." },
    { name: "نورة السبيعي", rating: 5, text: "جودة عالية جداً في العمل. الفريق نظيف ومرتب ولا يتركون أي فوضى بعد الانتهاء. غرفة الأطفال طلعت رائعة!" },
    { name: "عبدالله المطيري", rating: 5, text: "أفضل صباغ تعاملت معه في الكويت، احترافية عالية وأمانة في التعامل والأسعار مناسبة جداً. سأتعامل معهم مرة أخرى." },
    { name: "سارة الدوسري", rating: 5, text: "قاموا بدهان مكتبنا التجاري بشكل رائع، الجميع يمدح الألوان والتشطيب الاحترافي. التزموا بالموعد ولم يتأخروا." },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <Box display="flex" gap={0.5} color="#f59e0b">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill={i < rating ? "#f59e0b" : "none"} />
            ))}
        </Box>
    );
}

export default function Regions({ region, nearbyRegions = [] }: { region: string; nearbyRegions?: NearbyRegion[] }) {
    const faqs = [
        {
            q: `كم سعر الصباغ في ${region}؟`,
            a: `تبدأ أسعار الصباغ في ${region} من 1.5 دينار كويتي للمتر المربع، وقد تصل إلى 3 دنانير حسب نوع الدهان المستخدم. دهان الغرفة الكاملة يبدأ من 25 دينار شامل المواد. نقدم معاينة مجانية وعرض سعر تفصيلي مجاناً.`,
        },
        {
            q: "هل تقدمون الخدمة مع المواد؟",
            a: "نعم، يمكن اختيار الخدمة شاملة المواد (دهانات جوتن أو ناشنال أو سكيب) أو خدمة العمالة فقط إذا كنت تمتلك المواد.",
        },
        {
            q: "هل تستخدمون دهانات أصلية ومعتمدة؟",
            a: "نعم، نستخدم حصراً دهانات أصلية ومعتمدة من شركات عالمية مثل جوتن وناشنال وسكيب، مع فاتورة رسمية لجميع المواد المستخدمة.",
        },
        {
            q: "هل يمكن تنفيذ تصميمات ديكورية خاصة؟",
            a: "نعم، نقدم خدمات الدهانات الديكورية المتخصصة كالدهانات المخملية والمعدنية والثلاثية الأبعاد وورق الجدران، ونساعدك في اختيار التصميم المناسب.",
        },
        {
            q: `كم يستغرق دهان شقة كاملة في ${region}؟`,
            a: "عادةً يستغرق دهان شقة من 3 غرف يوماً إلى يومين عمل حسب المساحة والحالة. الفيلا الكاملة تحتاج من 3 إلى 5 أيام. نلتزم بالمواعيد المتفق عليها.",
        },
        {
            q: "هل تضمنون جودة العمل بعد الانتهاء؟",
            a: "نعم، نقدم ضماناً على جودة العمل والمواد. في حال ظهور أي مشكلة في الدهان خلال فترة الضمان نعود لإصلاحها مجاناً.",
        },
        {
            q: "هل تعملون في الإجازات والعطل الرسمية؟",
            a: "نعم، نعمل طوال أيام الأسبوع بما فيها الجمعة والسبت والإجازات الرسمية، لأننا نعرف أن العملاء يفضلون العمل في أوقات راحتهم.",
        },
        {
            q: "ما هي الدهانات المناسبة للمطبخ والحمام؟",
            a: "للمطبخ والحمام ننصح بالدهانات المقاومة للرطوبة والبخار كدهانات الإيبوكسي أو البلاستيكية المقاومة للماء. هذه الدهانات تمنع ظهور العفن وتدوم أطول.",
        },
        {
            q: "كيف يمكنني حجز موعد معاينة مجانية؟",
            a: "يمكنك الاتصال بنا على الرقم 90998489 أو إرسال رسالة واتساب، وسنتواصل معك خلال ساعات لتحديد موعد المعاينة المجانية في أقرب وقت.",
        },
    ];

    return (
        <>
            {/* ═══ NAVBAR ═══ */}
            <StyledAppBar>
                <HeaderContainer maxWidth="lg">
                    <TitleBox>
                        <div style={{ position: 'relative', width: '100px', height: '60px' }}>
                            <Link href="https://sabaghelkuwait.com" title='صباغ الكويت'>
                                <Image
                                    src="/logo.webp"
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
                    <Link href={"tel:+96590998489"} target="_blank" rel="noopener noreferrer" title="mobile">
                        <AccentButton variant="contained">احجز الآن</AccentButton>
                    </Link>
                </HeaderContainer>
            </StyledAppBar>

            {/* ═══ HERO ═══ */}
            <HeroSection>
                <Container maxWidth="md">
                    <Typography variant="h1" fontWeight="bold" gutterBottom fontSize={35}>
                        صباغ {region} – خبرة وجودة بأيدي أفضل الصباغين
                    </Typography>
                    <Typography variant="h2" fontSize={20} color="text.secondary" paragraph>
                        خدمات الصباغة والدهانات بأعلى جودة وسعر مناسب لجميع أنواع المباني في {region} والمناطق المجاورة
                    </Typography>
                    <Box display="flex" justifyContent="center" gap={0.5} mb={3} color="#f59e0b">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={22} fill="#f59e0b" />
                        ))}
                        <Typography color="text.secondary" fontSize={14} mr={1} alignSelf="center">
                            4.9/5 (من 150+ تقييم)
                        </Typography>
                    </Box>
                    <ButtonsWrapper>
                        <Link href={"tel:+96590998489"} target="_blank" rel="noopener noreferrer" title="mobile">
                            <AccentButton size="large" variant="contained">
                                <Phone size={20} />
                                اتصل الآن: 90998489
                            </AccentButton>
                        </Link>
                        <Link href={"https://wa.me/+96590998489"} target="_blank" rel="noopener noreferrer" title="whatsApp">
                            <Button size="large" variant="outlined">
                                <MessageCircle size={20} />
                                واتساب
                            </Button>
                        </Link>
                    </ButtonsWrapper>
                </Container>
            </HeroSection>

            {/* ═══ PORTFOLIO ═══ */}
            <Portfolio portfolio={portfolio} />

            {/* ═══ ABOUT ═══ */}
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" marginBottom={6} fontSize={28}>
                        من نحن - صباغ {region}
                    </Typography>
                    <Grid container spacing={6} alignItems="center" marginBottom={8}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <AccentTitle variant="h3" fontSize={22}>خدمات الصباغة المتميزة في {region}</AccentTitle>
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
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>خبرة معتمدة</Typography>
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
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>خدمة محلية متخصصة</Typography>
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
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>فريق محترف</Typography>
                                            <Typography color="text.secondary" variant="body2">
                                                فريق متدرب وملتزم بأعلى معايير الجودة والنظافة والاحترافية
                                            </Typography>
                                        </Box>
                                    </Box>
                                </StyledPaper>
                            </Box>
                        </Grid>
                    </Grid>

                    <StyledPaper>
                        <Typography variant="h3" fontWeight="bold" textAlign="center" marginBottom={4} fontSize={22}>
                            منطقة {region} - موقع استراتيجي مهم
                        </Typography>
                        <Grid container spacing={4}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AccentTitle variant="h4" fontSize={18}>عن منطقة {region}</AccentTitle>
                                <Typography color="text.secondary" paragraph>
                                    تعتبر منطقة {region} من أهم المناطق السكنية والتجارية في الكويت، وتتميز بتطورها العمراني المستمر وكثافة المشاريع السكنية والتجارية. هذا يجعلها بحاجة مستمرة لخدمات الصباغة والدهانات عالية الجودة.
                                </Typography>
                                <Typography color="text.secondary">
                                    نحن نفهم احتياجات سكان {region} وخصائص المناخ المحلي، مما يجعلنا نختار الدهانات والمواد المناسبة التي تتحمل الحرارة والرطوبة والظروف الجوية القاسية.
                                </Typography>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <AccentTitle variant="h4" fontSize={18}>لماذا صباغ {region}؟</AccentTitle>
                                <List>
                                    {[
                                        "معرفة عميقة بمتطلبات المنطقة والمناخ المحلي",
                                        "استجابة سريعة وخدمة عملاء ممتازة على مدار الأسبوع",
                                        "أسعار تنافسية وعروض خاصة للعملاء المنتظمين",
                                        "ضمان على جودة العمل والمواد المستخدمة",
                                    ].map((text, index) => (
                                        <ListItem key={index} disableGutters>
                                            <ListItemIcon><CheckCircle2 /></ListItemIcon>
                                            <ListItemText primaryTypographyProps={{ color: "text.secondary" }} primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </StyledPaper>
                </Container>
            </Section>

            {/* ═══ WHY CHOOSE US ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" marginBottom={8} fontSize={28}>
                        لماذا تختار صباغ {region}؟
                    </Typography>
                    <Grid container spacing={2}>
                        {features.map((item, i) => (
                            <Grid key={i} size={{ xs: 12, md: 4 }}>
                                <Card>
                                    <item.icon size={40} />
                                    <Typography variant="h3" fontSize={20} fontWeight="bold" gutterBottom>{item.title}</Typography>
                                    <Typography color="text.secondary">{item.desc}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ SERVICES ═══ */}
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={28}>
                        خدماتنا في {region}
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

            {/* ═══ PRICING TABLE ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={28}>
                        أسعار الصباغ في {region}
                    </Typography>
                    <Typography color="text.secondary" textAlign="center" mb={6}>
                        أسعار تقريبية — نقدم معاينة مجانية وعرض سعر تفصيلي
                    </Typography>
                    <Grid container spacing={3}>
                        {prices.map((item, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        border: "2px solid",
                                        borderColor: "primary.main",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1,
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="bold">{item.service}</Typography>
                                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                                        {item.price}
                                    </Typography>
                                    <Chip label={item.note} size="small" variant="outlined" sx={{ alignSelf: "flex-start" }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Box textAlign="center" mt={5}>
                        <Link href={"tel:+96590998489"} title="احصل على عرض سعر مجاني">
                            <AccentButton size="large" variant="contained">
                                <Phone size={18} />
                                احصل على عرض سعر مجاني
                            </AccentButton>
                        </Link>
                    </Box>
                </Container>
            </Section>

            {/* ═══ WORK STEPS ═══ */}
            <Section>
                <Container maxWidth="md">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={28}>
                        خطوات عملنا
                    </Typography>
                    <Stack spacing={4}>
                        {steps.map((step) => (
                            <Stack key={step.num} direction="row" spacing={3} alignItems="flex-start">
                                <BoxStyle>{step.num}</BoxStyle>
                                <Paper
                                    elevation={0}
                                    sx={{ flex: 1, p: 2, bgcolor: "background.default", borderRadius: 2 }}
                                >
                                    <Typography variant="h3" fontSize={18} fontWeight="bold" mb={0.5}>
                                        {step.title}
                                    </Typography>
                                    <Typography color="text.secondary">{step.desc}</Typography>
                                </Paper>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Section>

            {/* ═══ PAINT TYPES ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={28}>
                        أنواع الدهانات المتوفرة
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
                                    <Typography variant="h3" fontSize={18} fontWeight="bold" mb={1}>{paint.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{paint.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ REVIEWS ═══ */}
            <Section>
                <Container maxWidth="lg">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" mb={2} fontSize={28}>
                        آراء عملائنا في {region}
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center" gap={1} mb={6}>
                        <Box display="flex" gap={0.5} color="#f59e0b">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={20} fill="#f59e0b" />
                            ))}
                        </Box>
                        <Typography color="text.secondary" fontSize={15}>
                            4.9 من 5 — بناءً على +150 تقييم
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {reviews.map((review, i) => (
                            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        border: "1px solid",
                                        borderColor: "divider",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1.5,
                                    }}
                                    itemScope
                                    itemType="https://schema.org/Review"
                                >
                                    <StarRating rating={review.rating} />
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        lineHeight={1.8}
                                        itemProp="reviewBody"
                                    >
                                        "{review.text}"
                                    </Typography>
                                    <Divider />
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Box
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: "50%",
                                                bgcolor: "primary.main",
                                                color: "white",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: "bold",
                                                fontSize: 14,
                                            }}
                                        >
                                            {review.name[0]}
                                        </Box>
                                        <Typography fontWeight="bold" fontSize={14} itemProp="author">
                                            {review.name}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Section>

            {/* ═══ FAQs ═══ */}
            <Section sx={{ bgcolor: "background.paper" }}>
                <Container maxWidth="md">
                    <Typography variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={28}>
                        الأسئلة الشائعة — صباغ {region}
                    </Typography>
                    {faqs.map((faq, i) => (
                        <Accordion key={i} sx={{ mb: 2, borderRadius: 2, bgcolor: "background.default" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{ fontWeight: "bold", "& .MuiAccordionSummary-content": { justifyContent: "space-between" } }}
                            >
                                {faq.q}
                            </AccordionSummary>
                            <AccordionDetails sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.8 }}>
                                {faq.a}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Section>

            {/* ═══ CTA BANNER ═══ */}
            <Box
                sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: 8,
                    textAlign: "center",
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" fontWeight="bold" fontSize={28} mb={2} color="white">
                        جاهز لتحويل منزلك في {region}؟
                    </Typography>
                    <Typography fontSize={18} mb={4} sx={{ opacity: 0.9 }} color="white">
                        تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر بدون التزام
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                        <Link href="tel:+96590998489" title="اتصل بصباغ الكويت">
                            <Button
                                size="large"
                                variant="contained"
                                sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "grey.100" } }}
                            >
                                <Phone size={20} />
                                اتصل الآن: 90998489
                            </Button>
                        </Link>
                        <Link href="https://wa.me/+96590998489" target="_blank" rel="noopener noreferrer" title="واتساب">
                            <Button size="large" variant="outlined" sx={{ borderColor: "white", color: "white" }}>
                                <MessageCircle size={20} />
                                واتساب
                            </Button>
                        </Link>
                    </Stack>
                </Container>
            </Box>

            {/* ═══ NEARBY REGIONS ═══ */}
            {nearbyRegions.length > 0 && (
                <Section>
                    <Container maxWidth="lg">
                        <Typography variant="h2" fontWeight="bold" textAlign="center" mb={6} fontSize={28}>
                            مناطق مجاورة نخدمها أيضاً
                        </Typography>
                        <Grid container spacing={2}>
                            {nearbyRegions.map((r, i) => (
                                <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
                                    <Link href={r.slug.en} title={r.title} style={{ textDecoration: "none" }}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 2.5,
                                                borderRadius: 2,
                                                border: "1px solid",
                                                borderColor: "divider",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                transition: "all 0.2s",
                                                "&:hover": {
                                                    borderColor: "primary.main",
                                                    bgcolor: "action.hover",
                                                },
                                            }}
                                        >
                                            <MapPin size={20} color="#012e8d" />
                                            <Typography
                                                fontWeight="medium"
                                                fontSize={14}
                                                mt={1}
                                                color="text.primary"
                                            >
                                                {r.title.split(" | ")[0]}
                                            </Typography>
                                        </Paper>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Section>
            )}
        </>
    );
}
