import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/sanity/client";

// Fallback settings when Sanity is empty
const fallbackSettings = {
  siteName: "Bru-Hart Industries",
  phone: "(318) 344-5731",
  email: "info@bruhart.com",
  emergencyPhone: "(318) 344-5731",
  address: {
    street: "7111 US Hwy 27",
    city: "Branford",
    state: "FL",
    zip: "32008",
  },
  socialLinks: {
    linkedin: "#",
    youtube: "#",
  },
  stats: {
    yearsInBusiness: "40+",
    projectsCompleted: "500+",
    statesServed: "48",
  },
};

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sanitySettings = await getSiteSettings();
  const settings = sanitySettings || fallbackSettings;

  return (
    <>
      <Header settings={settings} />
      <main className="pt-20">
        {children}
      </main>
      <Footer settings={settings} />
    </>
  );
}
