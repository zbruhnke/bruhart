import Link from 'next/link';
import { ReactNode } from 'react';

interface Product {
  _id: string;
  name: string;
  slug?: string;
  tagline?: string;
  description?: string;
  features?: string[];
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
  'slide-gates': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  'swing-gates': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
  'operators': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'access-control': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  'crash-grates': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
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
    _id: 'slide-gates',
    name: 'Slide Gates',
    slug: 'slide-gates',
    description: 'Heavy-duty cantilever and track slide gates for industrial and commercial applications up to 100ft spans.',
    features: ['Up to 100ft Spans', 'Heavy-Duty Steel', 'Custom Designs'],
  },
  {
    _id: 'swing-gates',
    name: 'Swing Gates',
    slug: 'swing-gates',
    description: 'Single and bi-parting swing gates for controlled access points. Available in standard and crash-rated configurations.',
    features: ['Single & Bi-Parting', 'Crash-Rated Options', 'Decorative Styles'],
  },
  {
    _id: 'operators',
    name: 'Gate Operators',
    slug: 'operators',
    description: 'Industrial-grade hydraulic and electromechanical operators designed for continuous duty and extreme conditions.',
    features: ['Hydraulic & Electric', 'UL 325 Listed', '24/7 Operation'],
  },
  {
    _id: 'access-control',
    name: 'Access Control',
    slug: 'access-control',
    description: 'Integrated access control systems including card readers, keypads, intercoms, and remote monitoring solutions.',
    features: ['Biometric Options', 'Cloud Integration', 'Multi-Site Support'],
  },
  {
    _id: 'crash-grates',
    name: 'Crash Grates',
    slug: 'crash-grates',
    description: 'Engineered drainage grates with vehicle barrier capabilities. Protect underground access points without compromising drainage.',
    features: ['DOS Certified', 'High Load Capacity', 'Custom Sizes'],
  },
];

// Fallback section data
const fallbackSection = {
  productsSectionLabel: 'Our Products',
  productsSectionTitle: 'Complete Security Gate Solutions',
  productsSectionDescription: 'From crash-rated barriers to integrated access control, we provide end-to-end perimeter security solutions for the most demanding applications.',
  productsCtaText: 'View All Products',
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

            return (
              <Link
                key={product._id}
                href={`/products#${slug}`}
                className="group relative bg-white border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {icon}
                </div>

                {/* Content */}
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
