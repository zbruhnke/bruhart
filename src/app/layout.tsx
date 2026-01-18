import type { Metadata } from "next";
import "./globals.css";

const getBaseUrl = () => {
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
