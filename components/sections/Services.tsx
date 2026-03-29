"use client"
import React from 'react'
import { styled } from "@mui/material/styles";
import { Container, Paper, Stack, Typography } from '@mui/material';
import SectionTitle from '../layouts/SectionTitle';


const PREFIX = "Services";
const classes = {
    text: `${PREFIX}-text`,
    container: `${PREFIX}-container`
};


const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.text}`]: {
        color: theme.palette.getContrastText(theme.palette.secondary.main)
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
        <Root maxWidth="lg" sx={{ my: 5 }} id={"our-services"}>
            <SectionTitle sectionTitle="خدماتنا" />
            <Stack spacing={5} my={10}>
                {/* Block 1 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        هل تبحث عن صباغ متميز في الكويت؟ أتساءل كيف يمكن أن تحصل على خدمات دهان عالية الجودة بأسعار تنافسية؟
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontSize={15}
                        color="text.secondary"
                        width={{ xs: "auto", md: "80%" }}
                        lineHeight={1.9}
                    >
                        اذا كنت تبحث عن أفضل شركة صباغ في الكويت تقدم خدمات دهان المنازل والديكورات الحديثة،
                        فشركة <strong>صباغ كويت رخيص</strong> هي الخيار المثالي لك.
                        نقدم خدماتنا المتميزة في الدهان، مثل دهان الجدران، صباغ الأسقف، دهان البوابات والأبواب وحتى دهان الأرضيات.
                        نعمل بجد لتقديم أفضل جودة واحترافية لخدماتنا.
                        فريقنا مؤهل ومدرّب على أحدث تقنيات الدهان في الكويت، ونستخدم أفضل المواد والمعدات لضمان دقة تنفيذ أعمال الصباغة.
                        نحرص على تقديم خدمات سريعة ونظيفة، مع الحفاظ على نظافة الموقع وتقديم استشارات لاختيار ألوان الدهانات المناسبة لمنزلك.
                        <br /><br />
                        اتصل بنا الآن ولا تتردد في طلب الخدمة من <strong>أفضل صباغ الكويت للدهانات والديكورات</strong>.
                    </Typography>
                </Paper>

                {/* Block 2 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        <strong>أفضل صباغ الكويت</strong>: خبرة في جميع أعمال الدهان والديكور
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontSize={15}
                        color="text.secondary"
                        width={{ xs: "auto", md: "80%" }}
                    >
                        في الكويت، يبحث الكثيرون عن صباغ منازل يقدم خدمات دهان احترافية بأسعار تنافسية.
                        هل تعلم أن هناك فرقًا كبيرًا بين صباغ محترف وعامل دهان عادي؟
                        كيف يمكنك الحصول على أفضل قيمة مقابل المال من دهانات الكويت؟
                        سنستكشف في هذا المقال خدمات الصباغ المتميزة في الكويت، وكيفية اختيار أفضل صباغ شاطر.
                        الصباغ الرخيص في الكويت يوفر المال بطريقة ذكية.
                        أسعارهم تنافسية ويمكن الوصول إليها من قبل الجميع.
                        يستخدمون مواد عالية الجودة مثل <strong>دهانات جوتن</strong> لتحقيق أقصى فائدة.
                        خبرتهم تضمن لك الحصول على <strong>أفضل نتائج دهان في الكويت</strong> مع جودة واحترافية عالية.
                    </Typography>
                </Paper>

                {/* Block 3 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        أهمية اختيار صباغ محترف وخبير
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontSize={15}
                        color="text.secondary"
                        width={{ xs: "auto", md: "80%" }}
                    >
                        عند البحث عن خدمات الدهان، من المهم جدًا اختيار <strong>صباغ شاطر بالكويت</strong>.
                        هذا يضمن نتائج دهان رائعة وإتمام المشروع في الوقت المحدد وضمن الميزانية المتفق عليها.
                        الصباغ الخبير يقدم نصائح حول اختيار ألوان الدهانات الداخلية والخارجية المناسبة،
                        ويعرف آخر صيحات الموضة في الديكور المنزلي.
                        يستخدم الصباغ الخبير أفضل المواد والمنتجات لضمان جودة الدهان مثل الدهانات البلاستيكية والزيتية.
                        الاستثمار في خدمات الصباغ الاحترافية يضمن لك نتائج متميزة وطويلة الأمد.
                        اختيار ألوان الدهان المناسبة مهم جدًا لمنزلك.
                        الألوان الفاتحة تجعل الغرفة تبدو أكبر وأكثر رحابة، بينما الألوان الداكنة تضيف لمسة فاخرة.
                        يجب أيضًا التنسيق بين ألوان الجدران والأثاث لتحقيق تناغم ديكوري جميل مع
                        <strong>أفضل صباغ ديكور في الكويت</strong>.
                    </Typography>

                </Paper>

                {/* Block 4 */}
                <Paper component={Stack} p={3} alignItems={"center"} spacing={2} className={classes.container}>
                    <Typography variant="h3" textAlign={"center"} fontWeight={500} fontSize={22} color="primary.main">
                        تقنيات الدهان الحديثة والمبتكرة
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontSize={15}
                        color="text.secondary"
                        width={{ xs: "auto", md: "80%" }}
                    >
                        مع تطور خدمات الصباغة في الكويت، ظهرت تقنيات حديثة للدهان مثل الدهان ثلاثي الأبعاد والدهانات الإيطالية.
                        الصباغ المحترف يستطيع تنفيذ أحدث التصاميم والديكورات العصرية.
                        اختيار ألوان الدهان مهم جدًا للجو العام للمنزل.
                        ننصحك بالتنسيق بين الألوان للحصول على ديكور رائع يعكس شخصيتك.
                        إذا كنت تبحث عن <strong>صباغ ديكور في الكويت</strong> يقدم حلولًا عصرية ومميزة،
                        فنحن نوفر لك <strong>أفضل خدمات الدهان الحديثة</strong> باستخدام خامات عالية الجودة ومعدات متطورة.
                    </Typography>
                </Paper>
            </Stack>
        </Root>

    )
}

export default Services