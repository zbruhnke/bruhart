import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/client';

// Fallback data when Sanity data isn't available
const fallbackManufacturers = [
  {
    _id: 'alfafence',
    name: 'AlfaFence',
    slug: 'alfafence',
    logo: null,
    logoUrl: '/manufacturers/AF_logo.jpg',
    website: 'https://www.alfafence.us',
  },
  {
    _id: 'ball-fabrics',
    name: 'Ball Fabrics',
    slug: 'ball-fabrics',
    logo: null,
    logoUrl: '/manufacturers/ball_fabrics.jpeg',
    website: 'https://ballfabrics.com',
  },
  {
    _id: 'd-d-technologies',
    name: 'D&D Technologies',
    slug: 'd-d-technologies',
    logo: null,
    logoUrl: '/manufacturers/d-d-logo-horizontal-white-registered-mark-scaled.jpg',
    website: 'https://ddtech.com',
  },
  {
    _id: 'fencetrac',
    name: 'FenceTrac',
    slug: 'fencetrac',
    logo: null,
    logoUrl: '/manufacturers/fencetrac-fence-systems-1000px.png',
    website: 'https://fencetrac.com',
  },
  {
    _id: 'gatemaster',
    name: 'Gatemaster',
    slug: 'gatemaster',
    logo: null,
    logoUrl: '/manufacturers/GM-logo-scaled.jpg',
    website: 'https://www.gatemasterlocks.com/en-us/',
  },
  {
    _id: 'hi-motions',
    name: 'HI Motions',
    slug: 'hi-motions',
    logo: null,
    logoUrl: '/manufacturers/hi-motion-logo.jpg',
    website: 'https://himotions.com',
  },
  {
    _id: 'locinox',
    name: 'Locinox',
    slug: 'locinox',
    logo: null,
    logoUrl: '/manufacturers/LocinoxLogo.jpg',
    website: 'https://www.locinoxusa.com',
  },
  {
    _id: 'max-controls',
    name: 'Max Controls',
    slug: 'max-controls',
    logo: null,
    logoUrl: '/manufacturers/Max_Controls_Logo_FILLED-GLOW_HIGH_RES-scaled.jpg',
    website: 'https://max.us.com/',
  },
  {
    _id: 'rotary-gate-systems',
    name: 'Rotary Gate Systems',
    slug: 'rotary-gate-systems',
    logo: null,
    logoUrl: '/manufacturers/rotary-gate-systems.jpg',
    website: 'https://rotarygatesystems.com',
  },
];

const fallbackSection = {
  manufacturersSectionLabel: 'Our Partners',
  manufacturersSectionTitle: 'Manufacturers We Represent',
  manufacturersSectionDescription: 'We proudly partner with industry-leading manufacturers to bring you the highest quality security solutions.',
  manufacturersLinkText: 'View all manufacturers & learn more',
};

interface Manufacturer {
  _id: string;
  name: string;
  slug: string;
  logo?: any;
  logoUrl?: string;
  website?: string;
}

interface ManufacturersProps {
  showLink?: boolean;
  data?: {
    manufacturersSectionLabel?: string;
    manufacturersSectionTitle?: string;
    manufacturersSectionDescription?: string;
    manufacturersLinkText?: string;
  };
  manufacturers?: Manufacturer[];
}

export default function Manufacturers({ showLink = true, data, manufacturers }: ManufacturersProps) {
  const sectionLabel = data?.manufacturersSectionLabel || fallbackSection.manufacturersSectionLabel;
  const sectionTitle = data?.manufacturersSectionTitle || fallbackSection.manufacturersSectionTitle;
  const sectionDescription = data?.manufacturersSectionDescription || fallbackSection.manufacturersSectionDescription;
  const linkText = data?.manufacturersLinkText || fallbackSection.manufacturersLinkText;

  const displayManufacturers = manufacturers && manufacturers.length > 0 ? manufacturers : fallbackManufacturers;

  return (
    <section className="py-20 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">
            {sectionLabel}
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {sectionTitle}
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayManufacturers.map((manufacturer) => {
            const logoSrc = manufacturer.logo
              ? urlFor(manufacturer.logo).width(400).height(200).url()
              : manufacturer.logoUrl || '/manufacturers/placeholder.png';

            return (
              <a
                key={manufacturer._id}
                href={manufacturer.website || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg p-6 flex items-center justify-center h-24 transition-shadow hover:shadow-lg"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logoSrc}
                    alt={manufacturer.name}
                    fill
                    className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Link to full page */}
        {showLink && (
          <div className="text-center mt-10">
            <Link
              href="/manufacturers"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              {linkText}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
