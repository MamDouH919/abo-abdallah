import React from 'react';
import { Box, Container, Grid2 as Grid, Stack, Typography } from '@mui/material';
import image1 from '@/app/Images/صباغ-الكويت.webp';
import image2 from '@/app/Images/img3.webp';
import image3 from '@/app/Images/img4.webp';

import image4 from '@/app/Images/img7.webp';
import image5 from '@/app/Images/img5.webp';

import Image from 'next/image';
import SectionTitle from '../layouts/SectionTitle';

const data = [
    {
        "id": 1,
        "title": "معلم صباغ بالكويت",
        "description": <Typography color={"text.secondary"} fontSize={15}>
            ما هي خدمات الدهان والصباغة المتميزة؟ خدمات الدهان والصباغة المتميزة تتطلب مهارة وخبرة. تبدأ العملية بالتنظيف الدقيق للسطح. ثم تطبيق طبقات الدهان بمهارة عالية.صباغ متميز في الكويت لديهم خبرة كبيرة في الدهان والصباغة. هذا يضمن جودة عالية للنتائج. فريقهم لديهم مهارات لتنفيذ الصباغة بكفاءة وإتقان، مع الالتزام بالسلامة والنظافة. عند البحث عن خدمات الدهان والصباغة في الكويت، من المهم الاختيار الحكيم لصباغ متميز. هذه الشركات تقدم مزايا فريدة تجعلها خيارًا مثاليًا لأي مشروع.
        </Typography>,
        "image": image1
    },
    {
        "id": 2,
        "title": "معلم صباغ",
        "description": (
            <Typography color={"text.secondary"} fontSize={15}>
                معلم صباغ الكويت المحترف: الإتقان في كل لون في عالم تصميم وتجديد المساحات،
                يلعب الصباغون دورًا حيويًا في تحويل الرؤى والأفكار إلى واقع ملموس.
                بين هؤلاء المحترفين، يبرز معلم <strong>أفضل صباغ الكويت</strong> كرمز للجودة والإبداع
                في مجال الصباغة. بفضل سنوات من الخبرة والتفاني، يقدم معلم
                <strong> صباغ الكويت للدهانات والديكورات</strong> خدمات صباغة استثنائية
                تضيف لمسة من التميز إلى كل مشروع.
            </Typography>
        ),
        "image": image3
    },
    {
        "id": 3,
        "title": " صباغ رخيص",
        "description": <Typography color={"text.secondary"} fontSize={15}>
            صباغ رخيص بالكويت: كيفية الحصول على خدمات صباغة بجودة عالية وأسعار معقولة في عالم التصميم الداخلي والخارجي، تعد الصباغة أحد العناصر الأساسية التي تسهم في تغيير وتجديد المظهر العام للمساحات. ومع تزايد تكاليف المشاريع، يبحث الكثيرون عن حلول صباغة توفر قيمة جيدة مقابل المال. في هذا السياق، يمكن أن يكون العثور على صباغ رخيص بالكويت خيارًا ممتازًا لتحقيق توازن بين الجودة والتكلفة. دعنا نكشف لك كيفية الحصول على خدمات صباغة بأسعار معقولة دون التنازل عن الجودة.
        </Typography>,
        "image": image2
    },
    {
        "id": 4,
        "title": "صباغ متميز",
        "description": <Typography color={"text.secondary"} fontSize={15}>
            صباغ متميز في الكويت: الاختيار المثالي لجودة العمل والتفوق تعتبر مهنة الصباغة من الحرف المهمة التي تساهم في تحسين جمالية الأماكن وتحديث مظهرها. في الكويت، حيث تتنوع المشاريع الإنشائية من المنازل إلى المباني التجارية، يلعب الصباغون دورًا حيويًا في تلبية احتياجات العملاء وتحقيق التميز في العمل.
        </Typography>,
        "image": image4
    },
    {
        "id": 5,
        "title": "اصباغ وديكورات حديثة",
        "description": <Typography color={"text.secondary"} fontSize={15}>
            الاصباغ والديكورات الحديثة في الكويت: إضفاء لمسة عصرية على الفضاءات تعتبر الاصباغ والديكورات الحديثة من العناصر الأساسية التي تحدد جمالية وروح المكان في الكويت. مع تقدم التصميم الداخلي وتطور تقنيات الاصباغ، أصبح بإمكان الأفراد والشركات في الكويت الاستفادة من أحدث الاتجاهات لإضفاء لمسة عصرية وجذابة على منازلهم ومكاتبهم.
        </Typography>,
        "image": image5
    },
]


const About = () => {
    return (
        <Box my={5}>
            <Container maxWidth="lg" id={"about-us"}>
                <SectionTitle
                    sectionTitle={"صباغ الكويت هو صباغ شاطر ورخيص في جميع اماكن الكويت"}
                />
                <Stack spacing={2} mt={5}>
                    {data.map((element, index) => (
                        <div key={index}  >
                            <Grid
                                container
                                spacing={2}
                                alignItems={"center"}
                                flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                                m={0}
                                // border={1}
                                // borderColor={"primary.main"}
                                // borderRadius={10}
                                p={3}
                                textAlign={"center"}
                            >
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <div>
                                        <Image
                                            title={element.title}
                                            src={element.image}
                                            alt={element.title}

                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: 10
                                            }}
                                        />
                                    </div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }} container justifyContent={"center"} alignItems={"center"}>
                                    <Typography variant='h3' color='primary.main' mb={2} fontSize={30} fontWeight={500}>
                                        {element.title}
                                    </Typography>
                                    {element.description}
                                    <Box height={1} width={10} bgcolor={"secondary.dark"}></Box>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default About


