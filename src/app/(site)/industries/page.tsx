import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { getIndustries, urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Industries We Serve | Bru-Hart Security Solutions",
  description: "Specialized security solutions for data centers, airports, utilities, government facilities, and more.",
};

// Fallback image URLs by industry ID
const fallbackImageUrls: Record<string, string> = {
  'data-centers': '/images/industries/data-center.jpg',
  'airports': '/images/industries/airports.jpg',
  'utilities': '/images/industries/utilities.jpg',
  'government': '/images/industries/government.jpg',
  'ports': '/images/industries/ports.jpg',
  'corporate': '/images/industries/corporate.jpg',
};

// Fallback industries when Sanity is empty
const fallbackIndustries = [
  {
    id: "data-centers",
    name: "Data Centers",
    tagline: "Protecting the Digital Economy",
    description: "Data centers house the critical infrastructure that powers our digital world. A security breach can result in massive financial losses and compromised data. Our crash-rated perimeter systems provide the physical security layer these facilities demand.",
    challenges: [
      "24/7 unmanned perimeters",
      "High-value target for attacks",
      "Multiple access points",
      "Integration with existing security",
    ],
    solutions: [
      "K8/K12 crash-rated vehicle barriers",
      "High-speed gates for authorized access",
      "Integrated access control systems",
      "Anti-climb fencing solutions",
    ],
    image: '/images/industries/data-center.jpg',
  },
  {
    id: "airports",
    name: "Airports & Aviation",
    tagline: "TSA & FAA Compliant Solutions",
    description: "Airports are critical transportation infrastructure requiring multi-layered security. Our gate systems meet strict TSA and FAA requirements while maintaining the operational flow essential to modern air travel.",
    challenges: [
      "TSA and FAA compliance requirements",
      "High traffic volume",
      "Multiple security zones",
      "Runway and tarmac protection",
    ],
    solutions: [
      "TSA-compliant barrier systems",
      "High-cycle rate gate operators",
      "Crash-rated aircraft service gates",
      "Perimeter intrusion detection integration",
    ],
    image: '/images/industries/airports.jpg',
  },
  {
    id: "utilities",
    name: "Utilities & Energy",
    tagline: "NERC CIP Compliant Protection",
    description: "Power plants, substations, and energy infrastructure are essential to national security. Our solutions meet NERC CIP requirements and provide the physical security needed to protect these vital assets.",
    challenges: [
      "NERC CIP compliance",
      "Remote unmanned locations",
      "Harsh environmental conditions",
      "Large perimeter areas",
    ],
    solutions: [
      "NERC CIP compliant access control",
      "Weather-resistant crash gates",
      "Remote monitoring systems",
      "Solar-powered operator options",
    ],
    image: '/images/industries/utilities.jpg',
  },
  {
    id: "government",
    name: "Government & Military",
    tagline: "DOS Certified Security",
    description: "Government facilities and military installations require the highest levels of security certification. Our DOS-certified barriers and access systems meet the stringent requirements of federal agencies.",
    challenges: [
      "DOS certification requirements",
      "High-security clearance zones",
      "Anti-terrorism standards",
      "Multi-level access control",
    ],
    solutions: [
      "DOS-certified crash barriers",
      "Anti-ram vehicle barriers",
      "Secure entry pavilions",
      "Biometric access integration",
    ],
    image: '/images/industries/government.jpg',
  },
  {
    id: "ports",
    name: "Ports & Logistics",
    tagline: "MTSA Compliant Maritime Security",
    description: "Seaports and logistics hubs are critical nodes in the global supply chain. Our MTSA-compliant solutions protect these facilities while maintaining the high throughput essential to commerce.",
    challenges: [
      "MTSA compliance requirements",
      "High-volume traffic flow",
      "Container yard security",
      "Intermodal facility access",
    ],
    solutions: [
      "MTSA-compliant barrier systems",
      "High-speed commercial gates",
      "TWIC reader integration",
      "Vehicle inspection portals",
    ],
    image: '/images/industries/ports.jpg',
  },
  {
    id: "corporate",
    name: "Corporate Campuses",
    tagline: "Security Meets Aesthetics",
    description: "Fortune 500 headquarters and corporate campuses require security solutions that protect without compromising the welcoming environment essential to business. Our systems balance security with architectural aesthetics.",
    challenges: [
      "Aesthetic integration requirements",
      "Executive protection needs",
      "Visitor management",
      "Employee convenience",
    ],
    solutions: [
      "Decorative crash-rated barriers",
      "Ornamental security gates",
      "Visitor management systems",
      "VIP entry systems",
    ],
    image: '/images/industries/corporate.jpg',
  },
];

// Icons for each industry (by slug) - used as fallback when no image
const industryIcons: Record<string, ReactNode> = {
  "data-centers": (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  "airports": (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  "utilities": (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "government": (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
  "ports": (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  "corporate": (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

export default async function IndustriesPage() {
  // Fetch industries from Sanity
  const sanityIndustries = await getIndustries();

  // Use Sanity industries if available, otherwise use fallback
  const industries = sanityIndustries && sanityIndustries.length > 0
    ? sanityIndustries.map((ind: any) => {
        const id = ind.slug || ind._id;
        return {
          id,
          name: ind.name,
          tagline: ind.tagline,
          description: ind.description,
          challenges: ind.challenges || [],
          solutions: ind.solutions || [],
          image: ind.image
            ? urlFor(ind.image).width(800).quality(80).url()
            : (ind.imageUrl || fallbackImageUrls[id] || null),
        };
      })
    : fallbackIndustries;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-white/80">
              We specialize in high-security applications where failure is not an option.
              Each industry has unique challenges—we have the expertise to address them.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry: any, index: number) => (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {/* Show icon only if no image */}
                    {!industry.image && (
                      <div className="text-primary mb-4">
                        {industryIcons[industry.id] || industryIcons["corporate"]}
                      </div>
                    )}
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      {industry.tagline}
                    </span>
                    <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-foreground-muted mb-8">
                      {industry.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                    >
                      Discuss Your Project
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Image or Challenges & Solutions */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    {industry.image ? (
                      /* Industry Image with Blue Overlay */
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group mb-6">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url('${industry.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary-light/30 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-3 text-white/90">
                            {industryIcons[industry.id] && (
                              <div className="w-8 h-8 flex-shrink-0 [&>svg]:w-8 [&>svg]:h-8">
                                {industryIcons[industry.id]}
                              </div>
                            )}
                            <span className="text-sm font-medium truncate">{industry.name}</span>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {/* Challenges & Solutions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {industry.challenges && industry.challenges.length > 0 && (
                        <div className="bg-red-50 rounded-xl p-6">
                          <h3 className="text-sm font-semibold text-red-800 uppercase tracking-wider mb-4">
                            Industry Challenges
                          </h3>
                          <ul className="space-y-3">
                            {industry.challenges.map((challenge: string) => (
                              <li key={challenge} className="flex items-start gap-2 text-red-700">
                                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span className="text-sm">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {industry.solutions && industry.solutions.length > 0 && (
                        <div className="bg-green-50 rounded-xl p-6">
                          <h3 className="text-sm font-semibold text-green-800 uppercase tracking-wider mb-4">
                            Our Solutions
                          </h3>
                          <ul className="space-y-3">
                            {industry.solutions.map((solution: string) => (
                              <li key={solution} className="flex items-start gap-2 text-green-700">
                                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We work with facilities across many sectors. Contact us to discuss your specific security requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
