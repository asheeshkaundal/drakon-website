import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Drakon Sports - Premium Cricket Equipment & Experiences",
  description:
    "Discover premium cricket equipment, bespoke gear, and exclusive cricket experiences with Drakon Sports. Your ultimate destination for cricket excellence.",
  keywords: [
    "cricket equipment",
    "premium cricket gear",
    "cricket bat",
    "cricket accessories",
    "bespoke cricket",
    "cricket experiences",
  ],
  authors: [{ name: "Drakon Sports" }],
  creator: "Drakon Sports",
  publisher: "Drakon Sports",
  metadataBase: new URL("https://drakonsports.com"),
  openGraph: {
    title: "Drakon Sports - Premium Cricket Equipment",
    description: "Premium cricket equipment and exclusive experiences",
    type: "website",
    locale: "en_US",
    siteName: "Drakon Sports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drakon Sports - Premium Cricket Equipment",
    description: "Premium cricket equipment and exclusive experiences",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/newlogo.png", type: "image/png" },
      { url: "/newlogo.png", sizes: "32x32", type: "image/png" },
      { url: "/newlogo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/newlogo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/newlogo.png",
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
    url: "https://drakonsports.com",
    logo: "https://drakonsports.com/newlogo.png",
    description:
      "Premium cricket equipment, bespoke gear, and exclusive cricket experiences",
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
    },
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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
