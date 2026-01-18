import Link from 'next/link';
import { urlFor } from '@/sanity/client';

interface HeroProps {
  data?: {
    heroBadge?: string;
    heroHeadline?: string;
    heroHeadlineHighlight?: string;
    heroSubheadline?: string;
    heroBackgroundImage?: {
      asset: {
        _ref: string;
      };
    };
    heroBackgroundImageUrl?: string;
    heroPrimaryCta?: string;
    heroPrimaryCtaLink?: string;
    heroSecondaryCta?: string;
    heroSecondaryCtaLink?: string;
    heroStatsLabel?: string;
    heroStats?: Array<{ value: string; label: string }>;
  };
}

// Fallback data
const fallback = {
  heroBadge: 'Wholesale Fencing & Gate Distributor',
  heroHeadline: 'High-Security Gate Systems for',
  heroHeadlineHighlight: 'Critical Infrastructure',
  heroSubheadline: 'Industry-leading crash-rated gates, barrier systems, and operators protecting data centers, airports, utilities, and government facilities across North America.',
  heroBackgroundImageUrl: '/images/bruhart_work/IMG_1287.jpeg',
  heroPrimaryCta: 'Get a Quote',
  heroPrimaryCtaLink: '/contact',
  heroSecondaryCta: 'View Products',
  heroSecondaryCtaLink: '/products',
  heroStatsLabel: 'Trusted by industry leaders',
  heroStats: [
    { value: '500+', label: 'Projects Completed' },
    { value: '45+', label: 'Years Experience' },
    { value: '100%', label: 'ASTM Certified' },
  ],
};

export default function Hero({ data }: HeroProps) {
  const badge = data?.heroBadge || fallback.heroBadge;
  const headline = data?.heroHeadline || fallback.heroHeadline;
  const headlineHighlight = data?.heroHeadlineHighlight || fallback.heroHeadlineHighlight;
  const subheadline = data?.heroSubheadline || fallback.heroSubheadline;
  const primaryCta = data?.heroPrimaryCta || fallback.heroPrimaryCta;
  const primaryCtaLink = data?.heroPrimaryCtaLink || fallback.heroPrimaryCtaLink;
  const secondaryCta = data?.heroSecondaryCta || fallback.heroSecondaryCta;
  const secondaryCtaLink = data?.heroSecondaryCtaLink || fallback.heroSecondaryCtaLink;
  const statsLabel = data?.heroStatsLabel || fallback.heroStatsLabel;
  const stats = data?.heroStats && data.heroStats.length > 0 ? data.heroStats : fallback.heroStats;

  // Use Sanity image if uploaded, otherwise fall back to URL field, then hardcoded fallback
  let backgroundImageUrl = fallback.heroBackgroundImageUrl;
  if (data?.heroBackgroundImage?.asset) {
    backgroundImageUrl = urlFor(data.heroBackgroundImage).width(1920).quality(85).url();
  } else if (data?.heroBackgroundImageUrl) {
    backgroundImageUrl = data.heroBackgroundImageUrl;
  }

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImageUrl}')`,
        }}
      >
        {/* Industrial Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary-light/80"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></span>
            {badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
            <span className="text-accent-light"> {headlineHighlight}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryCtaLink}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
            >
              {primaryCta}
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              {secondaryCta}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">{statsLabel}</p>
            <div className="flex flex-wrap items-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-white/80">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
