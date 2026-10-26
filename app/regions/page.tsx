import Navbar from '@/components/layouts/Navbar';
import BannerOne from '@/components/sections/Banner-one';
import RegionsSection from '@/components/sections/RegionsSection';
import JsonLd from '@/components/articles/JsonLd';
import regions from '@/data/regions.json';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { breadcrumbLd, itemListLd } from '@/lib/seo/jsonld';
import { regionPath } from '@/lib/seo/links';

export const dynamic = 'force-static';

// Hub page: lists the area pages. Each "صباغ {area}" keyword belongs to its
// own /regions/{slug} page, and "صباغ الكويت" belongs to the homepage.
const TITLE = "مناطق خدمة صباغ الكويت";
const DESCRIPTION =
  "مناطق خدمة دار الألوان في محافظات الكويت الست: العاصمة وحولي والفروانية والجهراء والأحمدي ومبارك الكبير. اختر منطقتك لتعرف تفاصيل الخدمة فيها.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: "/regions" });

const Page = () => {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "الرئيسية", url: "/" }, { name: "المناطق" }])} />
      <JsonLd
        data={itemListLd({
          name: TITLE,
          url: "/regions",
          items: regions.map((r) => ({ name: r.title.split(" | ")[0].trim(), url: regionPath(r.slug.en) })),
        })}
      />
      <Navbar />
      <BannerOne
        title="المناطق التي نخدمها في الكويت"
        intro={[
          "يصل فريق دار الألوان إلى المناطق السكنية في محافظات الكويت: العاصمة وحولي والفروانية والأحمدي والجهراء ومبارك الكبير.",
          "لكل منطقة صفحة خاصة تشرح الخدمة فيها والمناطق المجاورة لها. اختر منطقتك من القائمة، أو تواصل معنا مباشرة إذا لم تجدها.",
        ]}
      />
      <RegionsSection pagination={false} grouped />
    </>
  );
};

export default Page;
