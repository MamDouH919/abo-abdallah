import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";
import React, { Suspense } from "react";

import services from "@/data/services.json";
import regions from "@/data/regions.json";

import "./globals.css";

const AuthContextProvider = React.lazy(() =>
  import("@/components/AuthContext").then((m) => ({
    default: m.AuthContextProvider,
  }))
);

const ThemeProv = dynamic(() => import("@/context/ThemeProv"));
const Footer = dynamic(() => import("@/components/layouts/Footer"));
const SocialIcons = dynamic(() => import("@/components/layouts/SocialIcons"));

const cairo = Cairo({ weight: ["600", "700", "800"], subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL("https://sabaghinkuwait.com"),
  title: {
    default: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
    template: "%s | صباغ الكويت"
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
  authors: [{ name: "صباغ الكويت", url: "https://sabaghinkuwait.com" }],
  creator: "صباغ الكويت",
  publisher: "صباغ الكويت",
  category: "خدمات صباغة",
  openGraph: {
    type: "website",
    locale: "ar_KW",
    url: "https://sabaghinkuwait.com",
    siteName: "صباغ الكويت",
    title: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
    description:
      "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية وبأسعار تنافسية.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "صباغ الكويت - خدمات الدهانات والصباغة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
    description:
      "صباغ الكويت يقدم خدمات صباغة رخيصة واحترافية بجودة عالية في جميع مناطق الكويت.",
    images: ["/logo.png"],
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
    canonical: "https://sabaghinkuwait.com",
    languages: {
      ar: "https://sabaghinkuwait.com",
    },
  },
  verification: {
    other: {
      'ahrefs-site-verification': '626e8511e09a73482896f0cdd7d31bc5de01290e6929e644a14f4129313ba897',
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

// Structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sabaghinkuwait.com/#website",
      url: "https://sabaghinkuwait.com/",
      name: "صباغ الكويت",
      description: "صباغ الكويت 50303335 تركيب ورق جدران اصباغ الكويت صباغ شاطر ورخيص",
      inLanguage: "ar",
      publisher: {
        "@id": "https://sabaghinkuwait.com/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://sabaghinkuwait.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://sabaghinkuwait.com/#organization",
      name: "صباغ الكويت",
      url: "https://sabaghinkuwait.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sabaghinkuwait.com/logo.png",
        width: 600,
        height: 450,
      },
      image: {
        "@type": "ImageObject",
        url: "https://sabaghinkuwait.com/logo.png",
      },
      sameAs: [
        // Add your social media URLs here
        // "https://www.facebook.com/yourpage",
        // "https://www.instagram.com/yourpage",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+965-50303335",
        contactType: "customer service",
        areaServed: "KW",
        availableLanguage: ["ar", "Arabic"],
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "KW",
        addressLocality: "الكويت",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebPage",
      "@id": "https://sabaghinkuwait.com/#webpage",
      url: "https://sabaghinkuwait.com/",
      name: "صباغ الكويت - 50303335 - صباغ شاطر ورخيص",
      isPartOf: {
        "@id": "https://sabaghinkuwait.com/#website"
      },
      about: {
        "@id": "https://sabaghinkuwait.com/#organization"
      },
      datePublished: "2020-12-29T13:47:49+00:00",
      dateModified: new Date().toISOString(),
      description:
        "صباغ الكويت - هل تريد رقم صباغ شاطر ورخيص بالكويت؟ نوفر لك أفضل تصميمات وديكورات منزلية احترافية فني تركيب ورق جدران ممتاز اتصل الآن",
      inLanguage: "ar",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://sabaghinkuwait.com/logo.png",
      },
      breadcrumb: {
        "@id": "https://sabaghinkuwait.com/#breadcrumb"
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://sabaghinkuwait.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://sabaghinkuwait.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "الخدمات",
          item: "https://sabaghinkuwait.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "المناطق",
          item: "https://sabaghinkuwait.com/regions",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "خدمات صباغ الكويت",
      itemListElement: services.slice(0, 10).map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.title,
        url: `https://sabaghinkuwait.com${item.slug_ar}`,
      })),
    },
    {
      "@type": "ItemList",
      name: "مناطق خدمة صباغ الكويت",
      itemListElement: regions.slice(0, 10).map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.title,
        url: `https://sabaghinkuwait.com${item.slug.ar}`,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="SJKHMA1/aRdi9hvI6jwSjQ"
          strategy="afterInteractive"
        />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKTVLMGN');
          `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17541194066"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17541194066');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className={cairo.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKTVLMGN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <ThemeProv>
            <SocialIcons />
            <AuthContextProvider>
              {children}
              <Footer />
            </AuthContextProvider>
          </ThemeProv>
        </Suspense>
      </body>
    </html>
  );
}