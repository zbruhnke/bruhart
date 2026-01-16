'use client';

import Image from 'next/image';
import Link from 'next/link';

const manufacturers = [
  {
    name: 'Ball Fabrics',
    logo: '/manufacturers/ball_fabrics.jpeg',
    slug: 'ball-fabrics',
    website: 'https://ballfabrics.com',
  },
  {
    name: 'D&D Technologies',
    logo: '/manufacturers/d-d-logo-horizontal-white-registered-mark-scaled.jpg',
    slug: 'd-d-technologies',
    website: 'https://ddtech.com',
  },
  {
    name: 'FenceTrac',
    logo: '/manufacturers/fencetrac-fence-systems-1000px.png',
    slug: 'fencetrac',
    website: 'https://fencetrac.com',
  },
  {
    name: 'Gatemaster',
    logo: '/manufacturers/GM-logo-scaled.jpg',
    slug: 'gatemaster',
    website: 'https://www.gatemasterlocks.com/en-us/',
  },
  {
    name: 'HI Motions',
    logo: '/manufacturers/hi-motion-logo.jpg',
    slug: 'hi-motions',
    website: 'https://himotions.com',
  },
  {
    name: 'Max Controls',
    logo: '/manufacturers/Max_Controls_Logo_FILLED-GLOW_HIGH_RES-scaled.jpg',
    slug: 'max-controls',
    website: 'https://max.us.com/',
  },
  {
    name: 'Rotary Gate Systems',
    logo: '/manufacturers/rotary-gate-systems.jpg',
    slug: 'rotary-gate-systems',
    website: 'https://rotarygatesystems.com',
  },
];

interface ManufacturersProps {
  showLink?: boolean;
}

export default function Manufacturers({ showLink = true }: ManufacturersProps) {
  return (
    <section className="py-20 bg-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3">
            Our Partners
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Manufacturers We Represent
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We proudly partner with industry-leading manufacturers to bring you the highest quality security solutions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {manufacturers.map((manufacturer) => (
            <a
              key={manufacturer.slug}
              href={manufacturer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-6 flex items-center justify-center h-24 transition-shadow hover:shadow-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={manufacturer.logo}
                  alt={manufacturer.name}
                  fill
                  className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Link to full page */}
        {showLink && (
          <div className="text-center mt-10">
            <Link
              href="/manufacturers"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              View all manufacturers & learn more
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
