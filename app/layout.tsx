import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import dynamic from "next/dynamic";
import React from "react";
import ThemeProv from "@/context/ThemeProv";
import Script from "next/script";
import { organizationLd, websiteLd } from "@/lib/seo/jsonld";
import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo/site";

const cairo = Cairo({
  weight: ["600", "700", "800"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

// @ts-ignore
import "./globals.css";

const Footer = dynamic(() => import("@/components/layouts/Footer"));
const SocialIcons = dynamic(() => import("@/components/layouts/SocialIcons"));


export const metadata: Metadata = {
  metadataBase: new URL("https://sabaghelkuwait.com"),
  title: {
    default: `${SITE_TITLE} – خدمات الصباغة والدهانات في جميع مناطق الكويت`,
    // Inner-page titles already carry the keyword themselves (e.g. "صباغ
    // حولي | ..."), so the template appends only the brand — appending the
    // keyword again here would be stuffing.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "صباغ الكويت يقدم أفضل خدمات الصباغة والدهانات بأسعار رخيصة وجودة عالية في جميع مناطق الكويت. نوفر صباغين محترفين لتجديد منازلك ودهان الجدران بأحدث الألوان والتقنيات الحديثة.",
  keywords: [
    "صباغ الكويت",
    "صباغ شاطر في الكويت",
    "صباغ رخيص الكويت",
    "افضل صباغ في الكويت",
    "صباغ منازل الكويت",
    "دهانات الكويت",
    "ورق جدران الكويت",
    "اصباغ حديثة الكويت",
    "صباغ ديكور الكويت",
    "دهانات جوتن الكويت",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "خدمات صباغة",
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: SITE_URL,
    siteName: SITE_TITLE,
    title: `${SITE_TITLE} – خدمات الصباغة والدهانات في جميع مناطق الكويت`,
    description:
      "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: `${SITE_TITLE} - خدمات الدهانات والصباغة`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE} – خدمات الصباغة والدهانات في جميع مناطق الكويت`,
    description:
      "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية في جميع مناطق الكويت.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://sabaghelkuwait.com",
    languages: {
      ar: "https://sabaghelkuwait.com",
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

// Site-wide structured data only. Per-page entities (WebPage, BreadcrumbList,
// Service, LocalBusiness, FAQPage, BlogPosting) are emitted by each route from
// its own live data — never a fixed graph injected on every URL.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [websiteLd(), organizationLd()],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* LCP image preload — must be in <head> with fetchpriority so the browser
            discovers it before parsing the client-component bundle */}
        <link
          rel="preload"
          as="image"
          href="/Images/%D8%B5%D8%A8%D8%A7%D8%BA-%D8%A7%D9%84%D9%83%D9%88%D9%8A%D8%AA.webp"
          fetchPriority="high"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className={`${cairo.variable} ${cairo.className}`}>
        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YYCCSJQ60Q"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YYCCSJQ60Q');
            `,
          }}
        />
        <ThemeProv>
          <SocialIcons />
          <main>{children}</main>
          <Footer />
        </ThemeProv>
      </body>
    </html>
  );
}