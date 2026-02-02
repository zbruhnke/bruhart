import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

// Barlow - geometric sans-serif with bold weights, used for logo
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Default to production URL (localhost only needed for local dev)
  return process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bruhart.com';
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "Bru-Hart Industries | High-Security Gate Systems",
  description: "Industry-leading crash-rated gates, barrier systems, and operators protecting data centers, airports, utilities, and government facilities across North America.",
  keywords: "crash rated gates, security gates, barrier systems, data center security, airport security, infrastructure protection, ASTM F2656, DOS certified",
  openGraph: {
    title: "Bru-Hart Industries | High-Security Gate Systems",
    description: "Industry-leading crash-rated gates, barrier systems, and operators protecting critical infrastructure.",
    type: "website",
    locale: "en_US",
    siteName: "Bru-Hart Industries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bru-Hart Industries | High-Security Gate Systems",
    description: "Industry-leading crash-rated gates, barrier systems, and operators protecting critical infrastructure.",
  },
};

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.bruhart.com",
  name: "Bru-Hart Industries",
  description: "Wholesale fencing and gate distributor specializing in high-security gate systems, crash-rated barriers, and access control solutions for critical infrastructure.",
  url: "https://www.bruhart.com",
  telephone: "+1-318-344-5731",
  email: "sales@bruhart.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7135 US Hwy 27",
    addressLocality: "Branford",
    addressRegion: "FL",
    postalCode: "32008",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.953357,
    longitude: -82.884763,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "Crash-rated gates",
    "Security gates",
    "Barrier systems",
    "Access control",
    "Perimeter security",
    "Data center security",
    "ASTM F2656 certified products",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="antialiased">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
