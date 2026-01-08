import { ReactNode } from 'react';

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

// Fallback industries
const fallbackIndustries = [
  {
    _id: 'data-centers',
    name: 'Data Centers',
    slug: 'data-centers',
    description: 'Protecting the backbone of the digital economy with crash-rated perimeters and multi-layer access control.',
  },
  {
    _id: 'airports',
    name: 'Airports & Aviation',
    slug: 'airports',
    description: 'TSA and FAA compliant gate systems for runway access, cargo areas, and secure perimeters.',
  },
  {
    _id: 'utilities',
    name: 'Utilities & Energy',
    slug: 'utilities',
    description: 'NERC CIP compliant solutions for substations, power plants, and critical energy infrastructure.',
  },
  {
    _id: 'government',
    name: 'Government & Military',
    slug: 'government',
    description: 'DOS-certified anti-ram barriers and high-security entry systems for federal facilities.',
  },
  {
    _id: 'ports',
    name: 'Ports & Logistics',
    slug: 'ports',
    description: 'MTSA compliant maritime security solutions for container terminals and port facilities.',
  },
  {
    _id: 'corporate',
    name: 'Corporate Campuses',
    slug: 'corporate',
    description: 'Integrated security solutions balancing aesthetics with protection for Fortune 500 headquarters.',
  },
];

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

            return (
              <div
                key={industry._id}
                className="bg-white rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="text-primary mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.name}
                </h3>
                <p className="text-foreground-muted">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
