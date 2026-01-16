import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { urlFor } from '@/sanity/client';

interface Product {
  _id: string;
  name: string;
  slug?: string;
  tagline?: string;
  description?: string;
  features?: string[];
  image?: {
    asset: {
      _ref: string;
    };
  };
  imageUrl?: string;
}

interface ProductsProps {
  data?: {
    productsSectionLabel?: string;
    productsSectionTitle?: string;
    productsSectionDescription?: string;
    productsCtaText?: string;
  };
  products?: Product[];
}

// Icon mapping by product slug
const productIcons: Record<string, ReactNode> = {
  'crash-rated': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  'bollards': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'security-fencing': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  'access-control': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  'barrier-arms': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
  'operators': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

// Default icon for products without a specific icon
const defaultIcon = (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Fallback products
const fallbackProducts: Product[] = [
  {
    _id: 'crash-rated',
    name: 'Crash-Rated Gates',
    slug: 'crash-rated',
    description: 'ASTM F2656 certified barriers and gates designed to stop vehicles at high speeds. Ideal for high-security perimeters.',
    features: ['K4/K8/K12 Ratings', 'DOS Certified', 'Multiple Configurations'],
  },
  {
    _id: 'bollards',
    name: 'Bollards & Barriers',
    slug: 'bollards',
    description: 'Fixed, removable, and retractable bollards along with wedge barriers for vehicle mitigation and perimeter protection.',
    features: ['Crash-Rated Options', 'Retractable Models', 'Decorative Styles'],
  },
  {
    _id: 'security-fencing',
    name: 'Security Fencing',
    slug: 'security-fencing',
    description: 'High-security fencing systems including anti-climb, anti-cut, and detection-integrated options for complete perimeter protection.',
    features: ['Anti-Climb Mesh', 'Detection Integration', 'Custom Heights'],
  },
  {
    _id: 'access-control',
    name: 'Access Control',
    slug: 'access-control',
    description: 'Integrated access control systems including card readers, keypads, intercoms, and remote monitoring solutions.',
    features: ['Biometric Options', 'Cloud Integration', 'Multi-Site Support'],
  },
  {
    _id: 'barrier-arms',
    name: 'Barrier Arms',
    slug: 'barrier-arms',
    description: 'Automatic barrier arm systems for parking facilities, toll plazas, and controlled access points with high-speed options.',
    features: ['High-Speed Operation', 'LED Lighting', 'Access Integration'],
  },
  {
    _id: 'operators',
    name: 'Gate Operators & Automation',
    slug: 'operators',
    description: 'Industrial operators and automation systems for slide, swing, and vertical lift gates. Built for continuous duty.',
    features: ['Hydraulic & Electric', 'UL 325 Listed', '24/7 Operation'],
  },
];

// Fallback section data
const fallbackSection = {
  productsSectionLabel: 'Our Products',
  productsSectionTitle: 'Complete Security Gate Solutions',
  productsSectionDescription: 'From crash-rated barriers to integrated access control, we provide end-to-end perimeter security solutions for the most demanding applications.',
  productsCtaText: 'Explore Our Solutions',
};

export default function Products({ data, products }: ProductsProps) {
  const sectionLabel = data?.productsSectionLabel || fallbackSection.productsSectionLabel;
  const sectionTitle = data?.productsSectionTitle || fallbackSection.productsSectionTitle;
  const sectionDescription = data?.productsSectionDescription || fallbackSection.productsSectionDescription;
  const ctaText = data?.productsCtaText || fallbackSection.productsCtaText;

  const displayProducts = products && products.length > 0 ? products : fallbackProducts;

  return (
    <section className="py-24 bg-background">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => {
            const slug = product.slug || product._id;
            const icon = productIcons[slug] || defaultIcon;
            const features = product.features || [];

            const imageUrl = product.image?.asset?._ref
              ? urlFor(product.image).width(400).height(250).url()
              : product.imageUrl;

            return (
              <Link
                key={product._id}
                href={`/products#${slug}`}
                className="group relative bg-white border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image or Icon */}
                {imageUrl ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-slate-100 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      {icon}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-foreground-muted mb-6">
                    {product.description || product.tagline}
                  </p>

                  {/* Features */}
                  {features.length > 0 && (
                    <ul className="space-y-2">
                      {features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-steel">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Arrow */}
                  <div className="absolute bottom-8 right-8 text-steel group-hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
          >
            {ctaText}
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
