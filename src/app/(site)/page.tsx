import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Certifications from "@/components/Certifications";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import Manufacturers from "@/components/Manufacturers";
import CTA from "@/components/CTA";
import { getHomePage, getProducts, getIndustries, getSiteSettings, getManufacturers } from "@/sanity/client";

export default async function Home() {
  // Fetch all data in parallel
  const [homePageData, products, industries, siteSettings, manufacturers] = await Promise.all([
    getHomePage(),
    getProducts(),
    getIndustries(),
    getSiteSettings(),
    getManufacturers(),
  ]);

  return (
    <>
      <Hero data={homePageData} />
      <Products data={homePageData} products={products} />
      <Industries data={homePageData} industries={industries} />
      <Certifications data={homePageData} />
      <FeaturedTestimonial />
      <Manufacturers data={homePageData} manufacturers={manufacturers} />
      <CTA data={homePageData} settings={siteSettings} />
    </>
  );
}
