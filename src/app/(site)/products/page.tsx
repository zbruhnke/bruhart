import { Metadata } from "next";
import Link from "next/link";
import { getProducts, urlFor } from "@/sanity/client";
import SupplyOnlyNotice from "@/components/SupplyOnlyNotice";

type SanityImageSource = Parameters<typeof urlFor>[0];

interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  image: string | null;
}

interface SanityProduct {
  _id: string;
  slug?: string;
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  applications?: string[];
  image?: SanityImageSource;
  imageUrl?: string;
}

export const metadata: Metadata = {
  title: "Products | Bru-Hart Industries",
  description: "Explore commercial and residential gates, bollards, security fencing, access control materials, components, and technical support from Bru-Hart Industries.",
};

// Fallback products when Sanity is empty
const fallbackProducts: ProductItem[] = [
  {
    id: "commercial-residential",
    name: "Commercial & Residential Gates",
    tagline: "Custom Gate Solutions",
    description: "Custom slide, swing, and vertical lift gates for commercial properties and residences. From decorative estate gates to industrial-grade security barriers, we provide complete gate solutions. Crash-rated options are available for high-security applications with project-specific rating documentation requirements.",
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
    name: "Crash Rated Gates",
    tagline: "Rated Vehicle Mitigation",
    description: "Crash-rated gate and barrier options for critical infrastructure protection. K4, K8, and K12 rated configurations are available by product, application, and documentation requirements.",
    features: [
      "Crash-rated configurations",
      "K4/K8/K12 ratings available",
      "Specification support",
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

const productGuides = [
  { name: "Crash Rated Gates", href: "/products/crash-rated-gates", description: "Slide, swing, cantilever, vertical lift, and beam gate options for rated vehicle mitigation." },
  { name: "Crash Rated Barriers", href: "/products/crash-rated-barriers", description: "Bollards, wedges, beams, crash gates, and perimeter barriers for layered site protection." },
  { name: "Perimeter Security Fencing", href: "/products/perimeter-security-fencing", description: "Anti-climb, anti-cut, crash-rated, and access-control-ready fence systems." },
  { name: "Access Control & Automation", href: "/products/access-control-automation", description: "Gate operators, card readers, keypads, barrier arms, loops, and safety devices." },
  { name: "Cantilever Gate Systems", href: "/products/cantilever-gate-systems", description: "Commercial cantilever gates, enclosed track, trucks, operators, and component planning." },
  { name: "Bollards & Barriers", href: "/products/bollards-barriers", description: "Fixed, removable, retractable, decorative, and crash-rated vehicle mitigation options." },
];

const wholesaleCategoryGuides = [
  { name: "Chain Link Fence Supplies", href: "/products/chain-link-fence-supplies", description: "Fabric, posts, rails, fittings, gates, privacy slats, and chain link hardware." },
  { name: "Wood Fence Materials", href: "/products/wood-fence-materials", description: "Pickets, posts, rails, privacy layouts, gates, and repair materials." },
  { name: "Vinyl Fence Supplies", href: "/products/vinyl-fence-supplies", description: "Vinyl privacy, picket, ranch rail, posts, rails, gates, and hardware." },
  { name: "Ornamental Aluminum Fence", href: "/products/ornamental-aluminum-fence", description: "Aluminum panels, gates, pool fence, and architectural fence options." },
  { name: "Fence Pipe & Tube", href: "/products/fence-pipe-tube", description: "Pipe, tube, posts, rails, brace material, and gate frame material." },
  { name: "Commercial Gates", href: "/products/commercial-gates", description: "Slide, swing, vertical lift, barrier arm, estate, and custom gate support." },
  { name: "Gate Operators", href: "/products/gate-operators", description: "Slide, swing, barrier arm, controls, loops, photo eyes, and access accessories." },
  { name: "Fence Hardware", href: "/products/fence-hardware", description: "Hinges, latches, caps, fasteners, tension bands, truss rods, rollers, and guides." },
  { name: "Temporary Fence Panels", href: "/products/temporary-fence-panels", description: "Temporary panels, stands, clamps, gates, barricades, and site-control materials." },
];

const agriculturalGuides = [
  { name: "Agricultural Fencing", href: "/products/agricultural-fencing", description: "Farm fence, wire, posts, braces, gates, and material planning for working North Florida properties." },
  { name: "Field Fence & Woven Wire", href: "/products/field-fence-woven-wire", description: "Woven wire, posts, tensioning, braces, and gate planning for livestock and rural boundaries." },
  { name: "Horse Fencing", href: "/products/horse-fencing", description: "No-climb, board, rail, gate, post, and hardware support for horse properties and paddocks." },
  { name: "Barbed Wire & High-Tensile", href: "/products/barbed-wire-high-tensile-fence", description: "Wire fence packages for cattle, pasture boundaries, and long rural runs." },
  { name: "Farm & Ranch Gates", href: "/products/farm-ranch-gates", description: "Pasture gates, driveway gates, equipment openings, hinges, latches, and gate posts." },
  { name: "Fence Materials & Supplies", href: "/products/fence-materials-supplies", description: "Posts, wire, gates, braces, clips, staples, hardware, and repair materials." },
];

export default async function ProductsPage() {
  // Fetch products from Sanity
  const sanityProducts = await getProducts() as SanityProduct[];

  // Use Sanity products if available, otherwise use fallback
  const products: ProductItem[] = sanityProducts && sanityProducts.length > 0
    ? sanityProducts.map((p) => ({
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
              From crash-rated barriers to integrated access control, Bru-Hart supplies
              materials, components, documentation support, and product guidance for demanding facilities.
            </p>
            <SupplyOnlyNotice dark compact className="mt-8 max-w-2xl" />
          </div>
        </div>
      </section>

      {/* Product Navigation */}
      <section className="sticky top-20 z-40 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {products.map((product) => (
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

      <section className="py-16 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Detailed Product Guides</h2>
            <p className="text-lg text-foreground-muted">
              Start with these focused pages when you need to spec a specific gate, barrier, fence, or access-control package.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-lg border border-border bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{guide.name}</h3>
                <p className="text-sm leading-6 text-foreground-muted">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Wholesale Fence Supply
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Fence Supply Categories</h2>
            <p className="text-lg text-foreground-muted">
              Bru-Hart is expanding beyond a small brochure site into product-category pages that can compete with national fence supply distributors while still routing buyers into practical RFQ conversations.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wholesaleCategoryGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-lg border border-border bg-background-alt p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{guide.name}</h3>
                <p className="text-sm leading-6 text-foreground-muted">{guide.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/manufacturers"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View manufacturer support pages
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Local & Agricultural
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">Agricultural Fence & Gate Guides</h2>
            <p className="text-lg text-foreground-muted">
              Bru-Hart&apos;s Branford presence includes serving local agricultural fence, gate, and material needs for farms, ranches, homesteads, and rural properties.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {agriculturalGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-lg border border-border bg-background-alt p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{guide.name}</h3>
                <p className="text-sm leading-6 text-foreground-muted">{guide.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/service-areas/branford-fl-agricultural-fencing"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View Branford agricultural fencing support
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
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

      {/* Rating Reference - Video Section */}
      <section className="py-24 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Rating Reference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Understanding Vehicle Mitigation Ratings
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Crash-rated gate specifications should be matched to the site, rating requirement, and product documentation. Crash-tested language should only be used when a specific configuration has supporting physical test documentation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary-dark shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/4Do_0B4R6aI"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Crash Rating Reference
              </h3>
              <p className="text-foreground-muted">
                Reference footage can help explain vehicle mitigation concepts, but rating documentation should be confirmed for the specific gate, barrier, and configuration being specified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Materials?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our product experts can help you identify the right materials, components, documentation, and installer path for your specific requirements.
          </p>
          <SupplyOnlyNotice dark compact className="mx-auto mb-8 max-w-2xl text-left" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              Request Product Guidance
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
