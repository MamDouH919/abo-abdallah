import { Metadata } from 'next';
import ContactPageClient from './contact-client';

export const metadata: Metadata = {
    title: "تواصل معنا | صباغ الكويت - 90998489",
    description: "تواصل مع صباغ الكويت للحصول على معاينة مجانية وأفضل خدمات الصباغة والدهانات في الكويت. اتصل الآن: 90998489",
    alternates: {
        canonical: "https://sabaghelkuwait.com/contact",
    },
};

export default function NotFound() {
    return <ContactPageClient />;
}
