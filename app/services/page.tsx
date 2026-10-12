import Navbar from '@/components/layouts/Navbar';
import BannerOne from '@/components/sections/Banner-one';
import ServicesSection from '@/components/sections/ServicesSection';
import JsonLd from '@/components/articles/JsonLd';
import services from '@/data/services.json';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { breadcrumbLd, itemListLd } from '@/lib/seo/jsonld';
import { servicePath } from '@/lib/seo/links';

// This is a static route (/services) with no dynamic segments.
// generateStaticParams and dynamicParams only apply to routes with [param] segments.
// force-static makes the SSG intent explicit and causes a build error if a dynamic
// API (cookies, headers, searchParams) is accidentally introduced.
export const dynamic = 'force-static';

// Hub page: lists the services. It must not target "صباغ الكويت" — that's the
// homepage's keyword.
const TITLE = "خدمات الصباغة والدهانات في الكويت";
const DESCRIPTION =
  "جميع خدمات دار الألوان في الكويت: صباغة المنازل والشقق، الدهانات الديكورية، غرف الأطفال، ورق الجدران، دهان الأبواب الخشبية، الجبس بورد والسيراميك.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/services" });

const Page = () => {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "الرئيسية", url: "/" }, { name: "الخدمات" }])} />
      <JsonLd
        data={itemListLd({
          name: TITLE,
          url: "/services",
          items: services.map((s) => ({ name: s.title.split(" | ")[0].trim(), url: servicePath(s.slug_en) })),
        })}
      />
      <Navbar />
      <BannerOne
        title="خدمات دار الألوان"
        intro={[
          "نقدم في دار الألوان خدمات الصباغة والدهانات للمنازل والشقق والفلل في الكويت، من الدهانات الداخلية والخارجية إلى الدهانات الديكورية وغرف الأطفال.",
          "وإلى جانب الصباغة ننفذ تركيب ورق الجدران، ودهان الأبواب والأخشاب، وأعمال الجبس بورد والسيراميك. اختر الخدمة لتعرف تفاصيلها وطريقة التنفيذ.",
        ]}
      />
      <ServicesSection pagination={false} />
    </>
  );
};

export default Page;
