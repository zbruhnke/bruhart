import { Metadata } from "next";
import Link from "next/link";
import { getProducts, urlFor } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Products | Bru-Hart Security Solutions",
  description: "Explore our complete line of crash-rated gates, bollards, security fencing, access control, barrier arms, and gate operators.",
};

// Fallback products when Sanity is empty
const fallbackProducts = [
  {
    id: "crash-rated",
    name: "Crash-Rated Gates",
    tagline: "ASTM F2656 Certified Protection",
    description: "Our crash-rated gates are engineered to stop vehicles at high speeds, providing the highest level of perimeter protection for critical infrastructure. Available in K4, K8, and K12 ratings to meet DOS and ASTM standards.",
    features: [
      "K4/K8/K12 crash ratings available",
      "ASTM F2656 and DOS certified",
      "Slide, swing, and beam configurations",
      "Rapid deployment options (EFO)",
      "Integration with existing security systems",
      "Custom sizes up to 40ft clear opening",
    ],
    applications: ["Government facilities", "Data centers", "Airports", "Military bases", "Embassies"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "security-fencing",
    name: "Security Fencing",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "access-control",
    name: "Access Control",
    tagline: "Integrated Security Management",
    description: "Complete access control solutions from simple keypads to enterprise-grade biometric systems. Seamlessly integrate with your existing security infrastructure.",
    features: [
      "Card readers and keypads",
      "Biometric options (fingerprint, facial)",
      "Telephone entry systems",
      "Cloud-based management",
      "Multi-site support",
      "Video intercom integration",
    ],
    applications: ["All facility types", "Multi-tenant buildings", "Secure campuses", "Visitor management"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
  },
  {
    id: "barrier-arms",
    name: "Barrier Arms",
    tagline: "Traffic Control Solutions",
    description: "Automatic barrier arm systems for parking facilities, toll plazas, and controlled access points. High-speed and high-cycle options for demanding applications.",
    features: [
      "High-speed operation available",
      "Continuous duty cycle rated",
      "LED lighting options",
      "Breakaway and folding arms",
      "Integration with access systems",
      "Battery backup available",
    ],
    applications: ["Parking facilities", "Toll plazas", "Security checkpoints", "Corporate campuses", "Airports"],
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  },
  {
    id: "operators",
    name: "Gate Operators & Automation",
    tagline: "Industrial-Grade Automation",
    description: "Industrial operators and complete automation systems for slide, swing, and vertical lift gates. Built for continuous duty and harsh environments.",
    features: [
      "Hydraulic and electromechanical options",
      "UL 325 safety compliant",
      "Slide, swing, and vertical lift",
      "Battery backup systems",
      "Remote monitoring capabilities",
      "Integration with all access control systems",
    ],
    applications: ["High-cycle applications", "Critical infrastructure", "24/7 facilities", "Extreme environments"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
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
        image: p.image ? urlFor(p.image).width(800).url() : null,
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
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-white/90">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span className="text-sm font-medium">Industry Certified</span>
                        </div>
                      </div>
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
