import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getManufacturers, getManufacturersPage, urlFor } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'Manufacturers We Represent | Bru-Hart Industries',
  description: 'Bru-Hart Industries proudly represents leading manufacturers of high-security gate systems, fencing, and access control solutions.',
};

// Fallback data
const fallbackManufacturers = [
  {
    _id: 'alfafence',
    name: 'AlfaFence',
    slug: 'alfafence',
    logo: null,
    logoUrl: '/manufacturers/AF_logo.jpg',
    description: 'European-style aluminum fencing and gates combining modern aesthetics with superior durability for residential and commercial applications.',
    website: 'https://www.alfafence.us',
  },
  {
    _id: 'ball-fabrics',
    name: 'Ball Fabrics',
    slug: 'ball-fabrics',
    logo: null,
    logoUrl: '/manufacturers/ball_fabrics.jpeg',
    description: 'Premium fabric solutions for security fencing and screening applications, offering durability and aesthetic appeal.',
    website: 'https://ballfabrics.com',
  },
  {
    _id: 'd-d-technologies',
    name: 'D&D Technologies',
    slug: 'd-d-technologies',
    logo: null,
    logoUrl: '/manufacturers/d-d-logo-horizontal-white-registered-mark-scaled.jpg',
    description: "The world's most trusted gate hardware manufacturer, specializing in innovative hinges, latches, and closers for gates of all sizes.",
    website: 'https://ddtech.com',
  },
  {
    _id: 'fencetrac',
    name: 'FenceTrac',
    slug: 'fencetrac',
    logo: null,
    logoUrl: '/manufacturers/fencetrac-fence-systems-1000px.png',
    description: 'Revolutionary fence framing systems that create clean, modern commercial fencing with superior strength and faster installation.',
    website: 'https://fencetrac.com',
  },
  {
    _id: 'gatemaster',
    name: 'Gatemaster',
    slug: 'gatemaster',
    logo: null,
    logoUrl: '/manufacturers/GM-logo-scaled.jpg',
    description: 'Industry-leading manufacturer of gate locks, closers, and security hardware for commercial and industrial applications.',
    website: 'https://www.gatemasterlocks.com/en-us/',
  },
  {
    _id: 'hi-motions',
    name: 'HI Motions',
    slug: 'hi-motions',
    logo: null,
    logoUrl: '/manufacturers/hi-motion-logo.jpg',
    description: 'Premium cantilever gate hardware and rolling gate solutions engineered for smooth, reliable operation in demanding environments.',
    website: 'https://himotions.com',
  },
  {
    _id: 'locinox',
    name: 'Locinox',
    slug: 'locinox',
    logo: null,
    logoUrl: '/manufacturers/LocinoxLogo.jpg',
    description: 'Industry-leading manufacturer of high-quality gate locks, hinges, and closers designed for security and durability in all weather conditions.',
    website: 'https://www.locinoxusa.com',
  },
  {
    _id: 'max-controls',
    name: 'Max Controls',
    slug: 'max-controls',
    logo: null,
    logoUrl: '/manufacturers/Max_Controls_Logo_FILLED-GLOW_HIGH_RES-scaled.jpg',
    description: 'High-performance gate operators and access control systems designed for maximum durability and security.',
    website: 'https://max.us.com/',
  },
  {
    _id: 'rotary-gate-systems',
    name: 'Rotary Gate Systems',
    slug: 'rotary-gate-systems',
    logo: null,
    logoUrl: '/manufacturers/rotary-gate-systems.jpg',
    description: 'Innovative rotary gate solutions providing space-efficient security for facilities with limited clearance requirements.',
    website: 'https://rotarygatesystems.com',
  },
];

const fallbackPage = {
  heroHeading: 'Manufacturers We Represent',
  heroSubtext: "As an authorized manufacturer's representative, we bring you direct access to industry-leading security and fencing solutions from trusted brands.",
  ctaHeading: 'Need Help Choosing the Right Solution?',
  ctaSubtext: 'Our team has deep expertise with all of our manufacturer partners. Let us help you find the perfect products for your project.',
  ctaButtonText: 'Contact Us',
  ctaButtonLink: '/contact',
};

export default async function ManufacturersPage() {
  const [pageData, manufacturers] = await Promise.all([
    getManufacturersPage(),
    getManufacturers(),
  ]);

  const heroHeading = pageData?.heroHeading || fallbackPage.heroHeading;
  const heroSubtext = pageData?.heroSubtext || fallbackPage.heroSubtext;
  const ctaHeading = pageData?.ctaHeading || fallbackPage.ctaHeading;
  const ctaSubtext = pageData?.ctaSubtext || fallbackPage.ctaSubtext;
  const ctaButtonText = pageData?.ctaButtonText || fallbackPage.ctaButtonText;
  const ctaButtonLink = pageData?.ctaButtonLink || fallbackPage.ctaButtonLink;

  const displayManufacturers = manufacturers && manufacturers.length > 0 ? manufacturers : fallbackManufacturers;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {heroHeading}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {heroSubtext}
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturers Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayManufacturers.map((manufacturer: any) => {
              const logoSrc = manufacturer.logo
                ? urlFor(manufacturer.logo).width(600).fit('max').url()
                : manufacturer.logoUrl || '/manufacturers/placeholder.png';

              return (
                <div
                  key={manufacturer._id}
                  className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Logo Section */}
                  <div className="bg-slate-50 p-8 flex items-center justify-center h-48 border-b border-border">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={logoSrc}
                        alt={manufacturer.name}
                        fill
                        className="object-contain p-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      {manufacturer.name}
                    </h2>
                    <p className="text-foreground-muted mb-4">
                      {manufacturer.description}
                    </p>
                    {manufacturer.website && (
                      <a
                        href={manufacturer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Visit Website
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {ctaHeading}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {ctaSubtext}
          </p>
          <Link
            href={ctaButtonLink}
            className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
          >
            {ctaButtonText}
          </Link>
        </div>
      </section>
    </>
  );
}
