import type { Metadata } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Navbar from "@/components/layouts/Navbar"
import { ArticleSection, HeroSection, MaxWidthBox, PaddedCardContent, ProseContent } from "@/lib/styles"

const siteUrl = "https://sabaghelkuwait.com"

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرف على دار الألوان (صباغ الكويت)، فريقنا وخدماتنا في الصباغة والدهانات في جميع مناطق الكويت.",
  keywords: ["دار الألوان", "من نحن", "صباغ الكويت", "شركة صباغة الكويت", "فريق صباغ الكويت", "خدمات الصباغة في الكويت"],
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: `${siteUrl}/about`,
    title: "من نحن – دار الألوان | صباغ الكويت",
    description: "تعرف على دار الألوان (صباغ الكويت) وخدماتنا في الصباغة والدهانات في جميع مناطق الكويت.",
    siteName: "دار الألوان | صباغ الكويت",
    images: [{ url: `${siteUrl}/logo.webp`, width: 1200, height: 630, alt: "دار الألوان | صباغ الكويت" }],
  },
  robots: { index: true, follow: true },
  other: { "geo.region": "KW", "geo.placename": "Kuwait" },
}

const content = `
<p>مرحباً بك في <strong>دار الألوان</strong> — صباغ الكويت لخدمات صباغة ودهانات احترافية في جميع مناطق الكويت. نحن فريق من الصباغين المتخصصين نجمع بين المعرفة بالسوق الكويتي والحرص على تقديم أعلى جودة بأسعار تنافسية.</p>

<h2>من نحن</h2>
<p>دار الألوان مزوّد لخدمات الصباغة المنزلية والتجارية، نخدم العملاء في كل محافظات الكويت من العاصمة وحولي والفروانية إلى الأحمدي ومبارك الكبير والجهراء. هدفنا واضح: أن نوفر لكل بيت كويتي صباغة تليق به وتدوم رغم قسوة المناخ المحلي.</p>

<h2>رؤيتنا</h2>
<p>نسعى لأن نكون خياراً موثوقاً لخدمات الصباغة في الكويت، من خلال الالتزام بالجودة والشفافية في الأسعار واحترام مواعيد العملاء. نؤمن أن الصباغة الجيدة ليست مجرد لون على الجدار، بل استثمار يحمي منزلك ويجدّد أجواءه.</p>

<h2>لماذا تختار دار الألوان؟</h2>
<ul>
<li><strong>فريق متخصص:</strong> صباغون يعرفون طبيعة المباني الكويتية والدهانات الأنسب لمناخها الحار.</li>
<li><strong>معاينة وعرض سعر واضح:</strong> نزور الموقع ونقدّم عرض سعر مفصّل قبل البدء، بلا تكاليف خفية.</li>
<li><strong>التزام بالمواعيد:</strong> ننجز العمل في الوقت المتفق عليه ونترك المكان نظيفاً.</li>
<li><strong>ضمان على العمل:</strong> نقف خلف جودة عملنا ونقدّم ضماناً يطمئنك.</li>
</ul>

<h2>خدماتنا</h2>
<ul>
<li>صباغة المنازل والشقق الداخلية والخارجية</li>
<li>صباغة الفلل والقصور بأعلى مستويات التشطيب</li>
<li>صباغة المحلات التجارية والمكاتب والمستودعات</li>
<li>الديكورات الخاصة والدهانات الفنية ثلاثية الأبعاد</li>
<li>معالجة الجدران وترميم التشققات قبل الصباغة</li>
</ul>

<h2>تواصل معنا</h2>
<p>هل أنت جاهز لتجديد منزلك أو مشروعك؟ نحن هنا لمساعدتك. تواصل معنا الآن على الرقم <a href="tel:+96590998489">90998489</a> للحصول على معاينة وعرض سعر مجاني، أو تصفّح <a href="/services">خدمات الصباغة لدينا</a> لمعرفة المزيد عن كل ما نقدمه.</p>
`

export default function AboutPage() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />

      <HeroSection>
        <Container maxWidth="lg">
          <MaxWidthBox>
            <Typography variant="h1" fontWeight="bold" mb={2} lineHeight={1.3} fontSize={{ xs: "2rem", md: "3rem" }}>
              من نحن
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              تعرّف على دار الألوان — صباغ الكويت — فريقنا ورؤيتنا في تقديم خدمات الصباغة والدهانات في الكويت.
            </Typography>
          </MaxWidthBox>
        </Container>
      </HeroSection>

      <ArticleSection>
        <Container maxWidth="lg">
          <MaxWidthBox>
            <Card>
              <PaddedCardContent>
                <ProseContent dangerouslySetInnerHTML={{ __html: content }} />
              </PaddedCardContent>
            </Card>
          </MaxWidthBox>
        </Container>
      </ArticleSection>
    </Box>
  )
}
