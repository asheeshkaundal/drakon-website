import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drakon Sports | Premium Cricket Equipment & Custom Gear in India",
  description:
    "Leading provider of premium cricket equipment in India. Shop custom-made cricket bats, professional gear, and exclusive cricket experiences. Expert craftsmanship meets performance excellence at Drakon Sports.",
  keywords: [
    "cricket equipment India",
    "premium cricket gear",
    "custom cricket bats",
    "cricket bat India",
    "professional cricket equipment",
    "cricket accessories",
    "bespoke cricket gear",
    "cricket experiences",
    "Drakon Sports",
    "cricket ball India",
  ],
  authors: [{ name: "Drakon Sports" }],
  creator: "Drakon Sports",
  publisher: "Drakon Sports",
  metadataBase: new URL("https://www.drakonsports.com"),
  alternates: {
    canonical: "https://www.drakonsports.com",
  },
  openGraph: {
    title: "Drakon Sports | Premium Cricket Equipment & Custom Gear in India",
    description:
      "Leading provider of premium cricket equipment in India. Shop custom-made cricket bats, professional gear, and exclusive cricket experiences.",
    type: "website",
    url: "https://www.drakonsports.com",
    locale: "en_IN",
    siteName: "Drakon Sports",
    images: [
      {
        url: "/footer-logo-final.png",
        width: 1200,
        height: 630,
        alt: "Drakon Sports - Premium Cricket Equipment India",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drakon_sports",
    creator: "@drakon_sports",
    title: "Drakon Sports | Premium Cricket Equipment & Custom Gear in India",
    description:
      "Leading provider of premium cricket equipment in India. Shop custom-made cricket bats, professional gear, and exclusive experiences.",
    images: ["/footer-logo-final.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
  icons: {
    icon: [
      { url: "/footer-logo-final.png", type: "image/png" },
      { url: "/footer-logo-final.png", sizes: "32x32", type: "image/png" },
      { url: "/footer-logo-final.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/footer-logo-final.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/footer-logo-final.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Drakon Sports Private Limited",
    alternateName: "Drakon Sports",
    url: "https://www.drakonsports.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.drakonsports.com/footer-logo-final.png",
      width: "1200",
      height: "630",
    },
    image: "https://www.drakonsports.com/footer-logo-final.png",
    description:
      "Leading provider of premium cricket equipment in India. Shop custom-made cricket bats, professional gear, and exclusive cricket experiences. Expert craftsmanship meets performance excellence.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/drakonsports/",
      "https://www.linkedin.com/in/asheesh-kaundal-304575221/",
      "https://www.youtube.com/@DrakonSports",
      "https://x.com/drakon_sports",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "asheesh.kaundal@drakonsports.com",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Drakon Sports",
    url: "https://www.drakonsports.com",
    description: "Premium cricket equipment and custom gear provider in India",
    publisher: {
      "@type": "Organization",
      name: "Drakon Sports Private Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://www.drakonsports.com/footer-logo-final.png",
      },
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsStore",
    name: "Drakon Sports",
    url: "https://www.drakonsports.com",
    logo: "https://www.drakonsports.com/footer-logo-final.png",
    image: "https://www.drakonsports.com/footer-logo-final.png",
    description:
      "Premium cricket equipment store offering custom-made cricket bats, professional gear, and exclusive cricket experiences in India.",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/drakonsports/",
      "https://www.youtube.com/@DrakonSports",
      "https://x.com/drakon_sports",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}
