import type { Metadata } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Navbar from "@/components/layouts/Navbar"
import { ArticleSection, HeroSection, MaxWidthBox, PaddedCardContent, ProseContent } from "@/lib/styles"

const siteUrl = "https://sabaghelkuwait.com"

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description:
    "الشروط والأحكام الخاصة باستخدام موقع صباغ الكويت وخدماته. اطّلع على حقوقك والتزاماتك قبل طلب خدمات الصباغة والدهانات.",
  keywords: ["الشروط والأحكام", "صباغ الكويت", "شروط الخدمة", "أحكام الاستخدام"],
  alternates: { canonical: `${siteUrl}/terms-conditions` },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: `${siteUrl}/terms-conditions`,
    title: "الشروط والأحكام – صباغ الكويت",
    description: "الشروط والأحكام الخاصة باستخدام موقع صباغ الكويت وخدماته.",
    siteName: "صباغ الكويت",
    images: [{ url: `${siteUrl}/logo.webp`, width: 1200, height: 630, alt: "صباغ الكويت" }],
  },
  robots: { index: true, follow: true },
}

const content = `
<p>مرحباً بك في موقع <strong>صباغ الكويت</strong>. باستخدامك لموقعنا أو طلبك لخدماتنا فإنك توافق على الالتزام بالشروط والأحكام التالية. نرجو قراءتها بعناية قبل التعامل معنا.</p>

<h2>قبول الشروط</h2>
<p>يُعدّ دخولك إلى الموقع أو طلبك لأي خدمة من خدماتنا موافقةً ضمنية على هذه الشروط والأحكام. إذا كنت لا توافق على أي بند منها، يُرجى عدم استخدام الموقع أو طلب الخدمات.</p>

<h2>طبيعة الخدمات</h2>
<p>يقدّم صباغ الكويت خدمات الصباغة والدهانات للمنازل والشقق والفلل والمحلات التجارية في جميع مناطق الكويت. تخضع كل خدمة لاتفاق مسبق يحدّد نطاق العمل والسعر والمدة الزمنية.</p>

<h2>عروض الأسعار</h2>
<ul>
<li>تُقدّم عروض الأسعار بناءً على معاينة الموقع وتفاصيل العمل المطلوب.</li>
<li>قد يتغيّر السعر في حال تغيّر نطاق العمل أو ظهور أعمال إضافية لم تكن واضحة وقت المعاينة.</li>
<li>عرض السعر صالح للمدة المذكورة فيه، وبعدها قد يخضع للمراجعة.</li>
</ul>

<h2>الدفع</h2>
<ul>
<li>يتم الاتفاق على طريقة الدفع وجدوله قبل بدء العمل.</li>
<li>قد يُطلب دفع دفعة مقدمة معقولة، ويُسدّد باقي المبلغ عند إتمام العمل ورضا العميل عن النتيجة.</li>
</ul>

<h2>التزامات العميل</h2>
<ul>
<li>توفير إمكانية الوصول إلى موقع العمل في المواعيد المتفق عليها.</li>
<li>إبلاغنا بأي متطلبات أو ملاحظات خاصة قبل بدء العمل.</li>
<li>إخلاء أو تغطية الأثاث والمقتنيات الثمينة قدر الإمكان قبل بدء الصباغة.</li>
</ul>

<h2>الضمان</h2>
<p>نقدّم ضماناً على جودة العمل ضمن المدة المتفق عليها. لا يشمل الضمان الأضرار الناتجة عن سوء الاستخدام أو عوامل خارجة عن إرادتنا مثل الرطوبة الناتجة عن تسريبات أو الأضرار الإنشائية.</p>

<h2>المسؤولية</h2>
<p>نلتزم ببذل أقصى عناية مهنية في تنفيذ أعمالنا. ومع ذلك، لا نتحمّل المسؤولية عن أي أضرار غير مباشرة أو ظروف خارجة عن نطاق الخدمة المتفق عليها.</p>

<h2>تعديل الشروط</h2>
<p>يحتفظ صباغ الكويت بحق تعديل هذه الشروط والأحكام في أي وقت، وتسري التعديلات فور نشرها على هذه الصفحة.</p>

<h2>تواصل معنا</h2>
<p>لأي استفسار حول الشروط والأحكام أو خدماتنا، تواصل معنا على الرقم <a href="tel:+96590998489">90998489</a> أو تصفّح <a href="/services">خدمات الصباغة لدينا</a>.</p>
`

export default function TermsConditionsPage() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />

      <HeroSection>
        <Container maxWidth="lg">
          <MaxWidthBox>
            <Typography variant="h1" fontWeight="bold" mb={2} lineHeight={1.3} fontSize={{ xs: "2rem", md: "3rem" }}>
              الشروط والأحكام
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              اطّلع على شروط استخدام موقع صباغ الكويت وخدماته وحقوقك والتزاماتك قبل طلب الخدمة.
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
