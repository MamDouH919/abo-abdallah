import { Metadata } from 'next';
import ContactPageClient from './contact-client';

export const metadata: Metadata = {
    // Bare of the brand — the root layout's title template appends " | دار
    // الألوان" already.
    title: "الصفحة غير موجودة - 90998489",
    description: "لم نتمكن من العثور على الصفحة المطلوبة. تواصل مع دار الألوان للحصول على معاينة مجانية وأفضل خدمات الصباغة والدهانات في الكويت: 90998489",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return <ContactPageClient />;
}
