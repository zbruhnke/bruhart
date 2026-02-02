import { Metadata } from "next";
import { getAboutPage } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Bru-Hart Industries",
  description: "Bru-Hart is a new company built on 45+ years of fence and gate industry experience. High-security gates and critical infrastructure done right.",
};

// Icon components based on iconType
const valueIcons: Record<string, ReactNode> = {
  shield: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  cog: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  people: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  support: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

// Fallback data when Sanity is empty
const fallbackValues = [
  {
    title: "Security First",
    description: "We never compromise on security. Every product we design and install meets the highest industry standards.",
    iconType: "shield",
  },
  {
    title: "Engineering Excellence",
    description: "Our team of engineers brings decades of experience designing solutions for the most demanding applications.",
    iconType: "cog",
  },
  {
    title: "Customer Partnership",
    description: "We work alongside our clients as trusted partners, understanding their unique security challenges.",
    iconType: "people",
  },
  {
    title: "Lifetime Support",
    description: "Our relationship doesn't end at installation. We provide ongoing support and maintenance for the life of your system.",
    iconType: "support",
  },
];

const fallbackTimeline = [
  { year: "1980", title: "Industry Roots", description: "Dana Bruhnke starts his career at Southern Steel, beginning 45+ years in the fence and gate industry." },
  { year: "1985", title: "Building Expertise", description: "Joins Jamieson Fence (now Master Halco), spending decades becoming one of the industry's foremost experts in gate fabrication." },
  { year: "2010s", title: "Wholesale Distribution", description: "Founds Premier Access, building relationships with manufacturers and contractors across the country." },
  { year: "2020", title: "DCB Perimeter", description: "Launches DCB Perimeter, continuing to serve the industry with quality products and expert guidance." },
  { year: "2025", title: "Bru-Hart Launches", description: "Dana partners with a new generation to launch Bru-Hart Industries, focused on high-security and critical infrastructure." },
];

const fallbackStoryParagraphs = [
  "Bru-Hart is a new company built on 45+ years of industry experience. Our founder, Dana Bruhnke, got his start in the fence business back in 1980 at Southern Steel. He spent decades with Jamieson Fence (now Master Halco) and founded Premier Access, becoming one of the most respected names in the industry. If you've worked in the fence business long enough, you probably know Dana.",
  "That experience matters when you're securing critical infrastructure. We've seen what works and what doesn't across thousands of projects at data centers, utilities, government facilities, and more. We know the products, the manufacturers, and the details that make the difference between a gate that works and one that works right.",
  "Now Dana has partnered with a new team committed to carrying that expertise forward. Whether you're a contractor looking for reliable wholesale partners or a facility that needs a turnkey solution, Bru-Hart is here to get it done right.",
];

export default async function AboutPage() {
  const aboutContent = await getAboutPage();

  // Use Sanity data or fallback
  const heroHeading = aboutContent?.heroHeading || "45+ Years of Expertise. A New Standard in Security.";
  const heroSubtext = aboutContent?.heroSubtext || "Bru-Hart is built on over four decades of hands-on experience in the fence and gate industry. When critical infrastructure needs protecting, you want someone who's done it before.";
  const storyTitle = aboutContent?.storyTitle || "Our Story";
  const storyContent = aboutContent?.storyContent;
  const valuesTitle = aboutContent?.valuesTitle || "Our Values";
  const valuesSubtext = aboutContent?.valuesSubtext || "These principles guide everything we do, from product design to customer service.";
  const values = aboutContent?.values && aboutContent.values.length > 0 ? aboutContent.values : fallbackValues;
  const timeline = aboutContent?.timeline && aboutContent.timeline.length > 0 ? aboutContent.timeline : fallbackTimeline;
  const ctaTitle = aboutContent?.ctaTitle || "Ready to Work with Us?";
  const ctaSubtext = aboutContent?.ctaSubtext || "Whether you need crash-rated gates for a data center or custom fabrication for a unique project, we're here to help.";
  const ctaButtonText = aboutContent?.ctaButtonText || "Get in Touch";
  const ctaButtonLink = aboutContent?.ctaButtonLink || "/contact";

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {heroHeading}
            </h1>
            <p className="text-xl text-white/80">
              {heroSubtext}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Story Image */}
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-16">
            <Image
              src="/images/bruhart_work/IMG_1287.jpeg"
              alt="Bru-Hart team installing high-security fence with crane"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/90 text-sm font-medium">Our team at work on a large-scale security installation</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{storyTitle}</h2>
              <div className="space-y-4 text-foreground-muted">
                {storyContent ? (
                  <PortableText value={storyContent} />
                ) : (
                  fallbackStoryParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                )}
              </div>
            </div>
            <div className="bg-background-alt rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Company Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item: any, index: number) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5"></div>
                      {index < timeline.length - 1 && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">{valuesTitle}</h2>
            <p className="text-lg text-foreground-muted">
              {valuesSubtext}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value: any) => (
              <div key={value.title} className="bg-white rounded-xl p-8 border border-border">
                <div className="text-primary mb-4">
                  {valueIcons[value.iconType] || valueIcons.shield}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{ctaTitle}</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {ctaSubtext}
          </p>
          <a
            href={ctaButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
          >
            {ctaButtonText}
          </a>
        </div>
      </section>
    </>
  );
}
