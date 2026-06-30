import type { Metadata } from "next"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Navbar from "@/components/layouts/Navbar"
import { ArticleSection, HeroSection, MaxWidthBox, PaddedCardContent, ProseContent } from "@/lib/styles"

const siteUrl = "https://sabaghelkuwait.com"

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "سياسة الخصوصية الخاصة بموقع صباغ الكويت توضّح كيفية جمع بياناتك واستخدامها وحمايتها عند استخدامك لموقعنا وخدماتنا.",
  keywords: ["سياسة الخصوصية", "صباغ الكويت", "خصوصية البيانات", "حماية البيانات"],
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: `${siteUrl}/privacy-policy`,
    title: "سياسة الخصوصية – صباغ الكويت",
    description: "سياسة الخصوصية الخاصة بموقع صباغ الكويت وكيفية حماية بياناتك.",
    siteName: "صباغ الكويت",
    images: [{ url: `${siteUrl}/logo.webp`, width: 1200, height: 630, alt: "صباغ الكويت" }],
  },
  robots: { index: true, follow: true },
}

const content = `
<p>نحن في <strong>صباغ الكويت</strong> نحترم خصوصية زوّار موقعنا ونلتزم بحماية بياناتهم الشخصية. توضّح سياسة الخصوصية هذه نوع المعلومات التي قد نجمعها منك وكيفية استخدامها وحمايتها عند استخدامك لموقعنا أو طلب خدماتنا.</p>

<h2>المعلومات التي نجمعها</h2>
<p>قد نقوم بجمع بعض المعلومات عند تواصلك معنا أو طلبك لخدماتنا، وتشمل:</p>
<ul>
<li>الاسم ورقم الهاتف عند طلب عرض سعر أو معاينة.</li>
<li>عنوان الموقع المطلوب تنفيذ الخدمة فيه.</li>
<li>تفاصيل الخدمة المطلوبة والملاحظات التي تشاركها معنا.</li>
<li>بيانات تقنية عامة مثل نوع المتصفح وصفحات الموقع التي تزورها.</li>
</ul>

<h2>كيف نستخدم معلوماتك</h2>
<p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
<ul>
<li>التواصل معك لتقديم عرض السعر وتنفيذ الخدمة المطلوبة.</li>
<li>تحسين جودة خدماتنا وتجربة استخدام الموقع.</li>
<li>الرد على استفساراتك وطلباتك.</li>
</ul>

<h2>حماية البيانات</h2>
<p>نتّخذ إجراءات معقولة للحفاظ على أمان معلوماتك وحمايتها من الوصول غير المصرّح به أو الاستخدام أو الإفصاح. لا نبيع أو نؤجّر بياناتك الشخصية لأي طرف ثالث.</p>

<h2>مشاركة المعلومات مع أطراف خارجية</h2>
<p>لا نشارك معلوماتك الشخصية مع أي جهة خارجية إلا في الحدود اللازمة لتنفيذ الخدمة المطلوبة أو عند وجود التزام قانوني يقتضي ذلك.</p>

<h2>ملفات تعريف الارتباط (Cookies)</h2>
<p>قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة الزوار. يمكنك ضبط متصفحك لرفض هذه الملفات، مع العلم أن ذلك قد يؤثر على بعض وظائف الموقع.</p>

<h2>التعديلات على سياسة الخصوصية</h2>
<p>قد نقوم بتحديث سياسة الخصوصية من وقت لآخر، وسيتم نشر أي تغييرات على هذه الصفحة. ننصحك بمراجعتها دورياً للاطّلاع على آخر التحديثات.</p>

<h2>تواصل معنا</h2>
<p>إذا كان لديك أي استفسار بخصوص سياسة الخصوصية، يمكنك التواصل معنا على الرقم <a href="tel:+96590998489">90998489</a>.</p>
`

export default function PrivacyPolicyPage() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />

      <HeroSection>
        <Container maxWidth="lg">
          <MaxWidthBox>
            <Typography variant="h1" fontWeight="bold" mb={2} lineHeight={1.3} fontSize={{ xs: "2rem", md: "3rem" }}>
              سياسة الخصوصية
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              نوضّح لك كيف نجمع بياناتك ونستخدمها ونحميها عند استخدامك لموقع صباغ الكويت.
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
