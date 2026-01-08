import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Certifications from "@/components/Certifications";
import CTA from "@/components/CTA";
import { getHomePage, getProducts, getIndustries, getSiteSettings } from "@/sanity/client";

export default async function Home() {
  // Fetch all data in parallel
  const [homePageData, products, industries, siteSettings] = await Promise.all([
    getHomePage(),
    getProducts(),
    getIndustries(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero data={homePageData} />
      <Products data={homePageData} products={products} />
      <Industries data={homePageData} industries={industries} />
      <Certifications data={homePageData} />
      <CTA data={homePageData} settings={siteSettings} />
    </>
  );
}
