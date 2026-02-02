import { Metadata } from "next";
import Link from "next/link";
import { getProducts, urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Products | Bru-Hart Industries",
  description: "Explore our complete line of commercial and residential gates, bollards, security fencing, and access control systems.",
};

// Fallback products when Sanity is empty
const fallbackProducts = [
  {
    id: "commercial-residential",
    name: "Commercial & Residential Gates",
    tagline: "Custom Gate Solutions",
    description: "Custom slide, swing, and vertical lift gates for commercial properties and residences. From decorative estate gates to industrial-grade security barriers, we provide complete gate solutions. Crash-rated options available for high-security applications requiring ASTM F2656 certification.",
    features: [
      "Slide, swing, and vertical lift configurations",
      "Crash-rated options (K4/K8/K12)",
      "Custom fabrication and design",
      "Ornamental and industrial styles",
      "Custom sizes up to 40ft clear opening",
      "Integration with automation systems",
    ],
    applications: ["Commercial properties", "Residential estates", "Government facilities", "Data centers", "Industrial sites"],
    image: "/images/bruhart_work/IMG_1961.jpeg",
  },
  {
    id: "bollards",
    name: "Bollards & Barriers",
    tagline: "Vehicle Mitigation Solutions",
    description: "Fixed, removable, and retractable bollards along with wedge barriers for vehicle mitigation and perimeter protection. Crash-rated options available for high-security applications.",
    features: [
      "Fixed, removable, and retractable options",
      "K4/K8/K12 crash ratings available",
      "Wedge barriers for high-security",
      "Shallow and deep mount foundations",
      "Decorative and industrial styles",
      "Integrated lighting options",
    ],
    applications: ["Storefronts", "Pedestrian areas", "Government facilities", "Corporate campuses", "Event venues"],
    image: "/images/products/pop-up-bollards-2.jpg",
  },
  {
    id: "security-fencing",
    name: "Perimeter & Security Fencing",
    tagline: "Perimeter Protection Systems",
    description: "High-security fencing systems including anti-climb, anti-cut, and detection-integrated options. Complete perimeter solutions from chain link to ornamental steel.",
    features: [
      "Anti-climb and anti-cut mesh",
      "Chain link and welded wire",
      "Ornamental steel fencing",
      "Intrusion detection integration",
      "Barbed wire and razor ribbon",
      "Custom heights and configurations",
    ],
    applications: ["Critical infrastructure", "Industrial facilities", "Airports", "Utilities", "Correctional facilities"],
    image: "/images/bruhart_work/a1330cc2-a330-41e0-ad91-d8c6d5203efd.jpeg",
  },
  {
    id: "access-control",
    name: "Access Control & Automation",
    tagline: "Complete Control Systems",
    description: "Everything you need to control and automate your gates. Industrial-grade gate operators, barrier arms, card readers, keypads, and remote monitoring systems. Built for continuous duty and 24/7 operation.",
    features: [
      "Gate operators (hydraulic & electric)",
      "Barrier arm systems",
      "Card readers and keypads",
      "Biometric access options",
      "UL 325 safety compliant",
      "Cloud-based management",
    ],
    applications: ["All facility types", "High-cycle applications", "Parking facilities", "24/7 operations", "Multi-site management"],
    image: "/images/bruhart_work/IMG_1453.jpeg",
  },
  {
    id: "crash-rated",
    name: "Crash Rated & Tested Gates",
    tagline: "ASTM F2656 Certified Protection",
    description: "ASTM F2656 certified barriers designed to stop vehicles at high speeds. K4, K8, and K12 rated options provide the highest level of perimeter protection for critical infrastructure.",
    features: [
      "ASTM F2656 certified",
      "K4/K8/K12 ratings available",
      "DOS certified options",
      "Slide, swing, and beam configurations",
      "Rapid deployment options (EFO)",
      "Integration with existing security systems",
    ],
    applications: ["Government facilities", "Data centers", "Airports", "Military bases", "Embassies"],
    image: "/images/bruhart_work/Attachment.jpeg",
  },
  {
    id: "custom-solutions",
    name: "Custom Solutions",
    tagline: "Tailored to Your Needs",
    description: "Don't see exactly what you need? We specialize in custom fabrication and unique solutions for complex security challenges. Our team works with you to design and build exactly what your project requires.",
    features: [
      "Custom gate fabrication",
      "Unique design capabilities",
      "Expert consultation",
      "Specialty materials and finishes",
      "Complex integration projects",
      "One-of-a-kind solutions",
    ],
    applications: ["Unique architectural requirements", "Historic properties", "Specialized facilities", "Complex security needs"],
    image: "/images/bruhart_work/IMG_1960.jpeg",
  },
];

export default async function ProductsPage() {
  // Fetch products from Sanity
  const sanityProducts = await getProducts();

  // Use Sanity products if available, otherwise use fallback
  const products = sanityProducts && sanityProducts.length > 0
    ? sanityProducts.map((p: any) => ({
        id: p.slug || p._id,
        name: p.name,
        tagline: p.tagline,
        description: p.description,
        features: p.features || [],
        applications: p.applications || [],
        image: p.image ? urlFor(p.image).width(800).url() : p.imageUrl || null,
      }))
    : fallbackProducts;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Security Products Built for Critical Infrastructure
            </h1>
            <p className="text-xl text-white/80">
              From crash-rated barriers to integrated access control, our products meet
              the highest security standards required by government and enterprise facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {products.map((product: any) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="flex-shrink-0 px-4 py-2 text-sm font-medium text-foreground-muted hover:text-primary hover:bg-background-alt rounded-lg transition-colors"
              >
                {product.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product: any, index: number) => (
              <div
                key={product.id}
                id={product.id}
                className="scroll-mt-40"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      {product.tagline}
                    </span>
                    <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-lg text-foreground-muted mb-8">
                      {product.description}
                    </p>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Key Features
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.features.map((feature: string) => (
                            <li key={feature} className="flex items-start gap-2 text-foreground-muted">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Applications */}
                    {product.applications && product.applications.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Common Applications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app: string) => (
                            <span
                              key={app}
                              className="px-3 py-1 bg-background-alt text-foreground-muted text-sm rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                    >
                      Request Quote
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Product Image with Blue Overlay */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${product.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'}')` }}
                      />
                      {/* Blue Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary-light/30 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
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
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our security experts can help you identify the best products for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+1-318-344-5731"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              Call (318) 344-5731
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
