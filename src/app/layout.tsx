import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bru-Hart Security Solutions | High-Security Gate Systems",
  description: "Industry-leading crash-rated gates, barrier systems, and operators protecting data centers, airports, utilities, and government facilities across North America.",
  keywords: "crash rated gates, security gates, barrier systems, data center security, airport security, infrastructure protection, ASTM F2656, DOS certified",
  openGraph: {
    title: "Bru-Hart Security Solutions | High-Security Gate Systems",
    description: "Industry-leading crash-rated gates, barrier systems, and operators protecting critical infrastructure.",
    type: "website",
    locale: "en_US",
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
