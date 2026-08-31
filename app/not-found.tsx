import { Metadata } from 'next';
import ContactPageClient from './contact-client';

export const metadata: Metadata = {
    title: "الصفحة غير موجودة | صباغ الكويت - 90998489",
    description: "لم نتمكن من العثور على الصفحة المطلوبة. تواصل مع صباغ الكويت للحصول على معاينة مجانية وأفضل خدمات الصباغة والدهانات في الكويت: 90998489",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return <ContactPageClient />;
}
