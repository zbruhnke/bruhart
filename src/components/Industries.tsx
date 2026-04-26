import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/client';

type SanityImageSource = Parameters<typeof urlFor>[0];
type MaybeSanityImage = SanityImageSource | null | undefined;

interface IndustriesProps {
  data?: {
    industriesSectionLabel?: string;
    industriesSectionTitle?: string;
    industriesSectionDescription?: string;
  };
  industries?: Array<{
    _id: string;
    name: string;
    slug?: string;
    description?: string;
    image?: SanityImageSource | null;
    imageUrl?: string;
  }>;
}

// Icon mapping by industry slug
const industryIcons: Record<string, ReactNode> = {
  'data-centers': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  'airports': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  'utilities': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'government': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
  'ports': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  'corporate': (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
};

// Default icon
const defaultIcon = (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

// Fallback industries - using real project photos
const fallbackIndustries: Array<{
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: SanityImageSource | null;
  imageUrl?: string;
}> = [
  {
    _id: 'data-centers',
    name: 'Data Centers',
    slug: 'data-centers',
    description: 'Protecting the backbone of the digital economy with crash-rated perimeters and multi-layer access control.',
    imageUrl: '/images/bruhart_work/IMG_1910.jpeg',
  },
  {
    _id: 'airports',
    name: 'Airports & Aviation',
    slug: 'airports',
    description: 'TSA and FAA compliant gate systems for runway access, cargo areas, and secure perimeters.',
    imageUrl: '/images/bruhart_work/IMG_4029.jpeg',
  },
  {
    _id: 'utilities',
    name: 'Utilities & Energy',
    slug: 'utilities',
    description: 'NERC CIP compliant solutions for substations, power plants, and critical energy infrastructure.',
    imageUrl: '/images/bruhart_work/IMG_3969.jpeg',
  },
  {
    _id: 'government',
    name: 'Government & Military',
    slug: 'government',
    description: 'DOS/K-rated anti-ram barrier options and high-security entry systems for federal facilities.',
    imageUrl: '/images/bruhart_work/IMG_1976.jpeg',
  },
  {
    _id: 'ports',
    name: 'Ports & Logistics',
    slug: 'ports',
    description: 'MTSA compliant maritime security solutions for container terminals and port facilities.',
    imageUrl: '/images/bruhart_work/IMG_1905.jpeg',
  },
  {
    _id: 'corporate',
    name: 'Corporate Campuses',
    slug: 'corporate',
    description: 'Integrated security solutions balancing aesthetics with protection for Fortune 500 headquarters.',
    imageUrl: '/images/bruhart_work/IMG_3972.jpeg',
  },
];

// Fallback image URLs by slug - using real project photos
const fallbackImageUrls: Record<string, string> = {
  'data-centers': '/images/bruhart_work/IMG_1910.jpeg',
  'data-center-security': '/images/bruhart_work/IMG_1910.jpeg',
  'data-center-security-gates': '/images/bruhart_work/IMG_1910.jpeg',
  'airports': '/images/bruhart_work/IMG_4029.jpeg',
  'airports-aviation': '/images/bruhart_work/IMG_4029.jpeg',
  'airport-perimeter-security': '/images/bruhart_work/IMG_4029.jpeg',
  'utilities': '/images/bruhart_work/IMG_3969.jpeg',
  'utilities-energy': '/images/bruhart_work/IMG_3969.jpeg',
  'utility-substation-security': '/images/bruhart_work/IMG_3969.jpeg',
  'government': '/images/bruhart_work/IMG_1976.jpeg',
  'government-military': '/images/bruhart_work/IMG_1976.jpeg',
  'government-facility-security': '/images/bruhart_work/IMG_1976.jpeg',
  'ports': '/images/bruhart_work/IMG_1905.jpeg',
  'ports-logistics': '/images/bruhart_work/IMG_1905.jpeg',
  'corporate': '/images/bruhart_work/IMG_3972.jpeg',
  'corporate-campuses': '/images/bruhart_work/IMG_3972.jpeg',
};

const normalizeLookupKey = (value?: string) =>
  value?.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const hasSanityImage = (image: MaybeSanityImage): image is SanityImageSource => {
  if (!image) {
    return false;
  }

  if (typeof image === 'string') {
    return image.length > 0;
  }

  if (typeof image === 'object') {
    const asset = (image as { asset?: { _ref?: string; _id?: string } | null }).asset;
    return Boolean(asset?._ref || asset?._id);
  }

  return true;
};

const getIndustryImageUrl = (industry: NonNullable<IndustriesProps['industries']>[number]) => {
  if (hasSanityImage(industry.image)) {
    return urlFor(industry.image).width(800).height(500).fit('crop').url();
  }

  if (industry.imageUrl) {
    return industry.imageUrl;
  }

  const slugKey = normalizeLookupKey(industry.slug || industry._id);
  const nameKey = normalizeLookupKey(industry.name);

  return (slugKey && fallbackImageUrls[slugKey])
    || (nameKey && fallbackImageUrls[nameKey])
    || '/images/bruhart_work/IMG_1910.jpeg';
};

// Fallback section data
const fallbackSection = {
  industriesSectionLabel: 'Industries We Serve',
  industriesSectionTitle: 'Securing Critical Infrastructure',
  industriesSectionDescription: 'We specialize in high-security applications where failure is not an option. Our solutions protect the facilities that keep society running.',
};

export default function Industries({ data, industries }: IndustriesProps) {
  const sectionLabel = data?.industriesSectionLabel || fallbackSection.industriesSectionLabel;
  const sectionTitle = data?.industriesSectionTitle || fallbackSection.industriesSectionTitle;
  const sectionDescription = data?.industriesSectionDescription || fallbackSection.industriesSectionDescription;

  const displayIndustries = industries && industries.length > 0 ? industries : fallbackIndustries;

  return (
    <section className="py-24 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {sectionLabel}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {sectionTitle}
          </p>
          <p className="text-lg text-foreground-muted">
            {sectionDescription}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayIndustries.map((industry) => {
            const slug = industry.slug || industry._id;
            const icon = industryIcons[slug] || defaultIcon;
            const imageUrl = getIndustryImageUrl(industry);

            return (
              <Link
                key={industry._id}
                href={`/industries#${slug}`}
                className="group flex h-full flex-col bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg hover:border-primary/30 transition-all"
              >
                {/* Image or Icon */}
                {imageUrl ? (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={imageUrl}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-slate-100 flex items-center justify-center">
                    <div className="text-primary">
                      {icon}
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-foreground-muted">
                    {industry.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
          >
            See Who We Serve
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
