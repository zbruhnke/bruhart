'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

interface NavItem {
  name: string;
  href: string;
  children?: Array<{ name: string; href: string }>;
}

interface SiteSettings {
  phone?: string;
  mainNavigation?: Array<{
    name: string;
    href: string;
    children?: Array<{ name: string; href: string }>;
  }>;
  headerCtaText?: string;
  headerCtaLink?: string;
  [key: string]: unknown;
}

// Fallback navigation
const fallbackNavigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Wholesale',
    href: '/manufacturers',
    children: [
      { name: 'Expert Sourcing', href: '/expert-sourcing' },
      { name: 'Hard-to-Source Products', href: '/resources/hard-to-source-fence-gate-products' },
      { name: 'Complex Gate RFQs', href: '/resources/complex-gate-package-rfq-guide' },
      { name: 'Our Partners', href: '/manufacturers' },
      { name: 'Custom Fabrication', href: '/custom-fabrication' },
      { name: 'Enclosed Aluminum Gate Track', href: '/custom-fabrication/enclosed-aluminum-gate-track' },
      { name: 'CNC-Milled Gate Trucks', href: '/custom-fabrication/cnc-milled-gate-trucks' },
    ],
  },
  {
    name: 'Expert Sourcing',
    href: '/expert-sourcing',
    children: [
      { name: 'Expert Sourcing Hub', href: '/expert-sourcing' },
      { name: 'Hard-to-Source Products', href: '/resources/hard-to-source-fence-gate-products' },
      { name: 'Complex Gate Package RFQs', href: '/resources/complex-gate-package-rfq-guide' },
      { name: 'Value Engineering', href: '/resources/fence-gate-value-engineering' },
      { name: 'Fix Bad Specifications', href: '/resources/fixing-bad-fence-gate-specifications' },
      { name: 'Replacement Parts & Substitutions', href: '/resources/replacement-gate-parts-field-substitutions' },
    ],
  },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
      { name: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
      { name: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
      { name: 'Access Control & Automation', href: '/products/access-control-automation' },
      { name: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
      { name: 'Bollards & Barriers', href: '/products/bollards-barriers' },
      { name: 'Chain Link Fence Supplies', href: '/products/chain-link-fence-supplies' },
      { name: 'Wood Fence Materials', href: '/products/wood-fence-materials' },
      { name: 'Vinyl Fence Supplies', href: '/products/vinyl-fence-supplies' },
      { name: 'Gate Operators', href: '/products/gate-operators' },
      { name: 'Fence Hardware', href: '/products/fence-hardware' },
    ],
  },
  {
    name: 'North Florida',
    href: '/service-areas/branford-fl-agricultural-fencing',
    children: [
      { name: 'Branford Agricultural Fencing', href: '/service-areas/branford-fl-agricultural-fencing' },
      { name: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
      { name: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
      { name: 'Horse Fencing', href: '/products/horse-fencing' },
      { name: 'Barbed Wire & High-Tensile', href: '/products/barbed-wire-high-tensile-fence' },
      { name: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
      { name: 'Fence Materials & Supplies', href: '/products/fence-materials-supplies' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Data Center Security Gates', href: '/industries/data-center-security-gates' },
      { name: 'Utility Substation Security', href: '/industries/utility-substation-security' },
      { name: 'Airport Perimeter Security', href: '/industries/airport-perimeter-security' },
      { name: 'Government Facility Security', href: '/industries/government-facility-security' },
    ],
  },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'About Bru-Hart', href: '/about' },
      { name: 'Fence Industry Experience', href: '/about/fence-industry-experience' },
      { name: 'Why Contractors Call Bru-Hart', href: '/about/why-contractors-call-bruhart' },
      { name: 'Branford Local Commitment', href: '/about/branford-local-commitment' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Ask a Fence Expert', href: '/resources/ask-a-fence-expert' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

const normalizeNavItem = (item: NavItem): NavItem => {
  const hrefMap: Record<string, string> = {
    '/products#commercial-residential': '/products/commercial-gates',
    '/products#bollards': '/products/bollards-barriers',
    '/products#security-fencing': '/products/perimeter-security-fencing',
    '/products#access-control': '/products/access-control-automation',
    '/products#crash-rated': '/products/crash-rated-gates',
    '/products#custom-solutions': '/custom-fabrication',
    '/industries#data-centers': '/industries/data-center-security-gates',
    '/industries#airports': '/industries/airport-perimeter-security',
    '/industries#utilities': '/industries/utility-substation-security',
    '/industries#government': '/industries/government-facility-security',
  };

  const nameMap: Record<string, string> = {
    'Crash Rated & Tested Gates': 'Crash Rated Gates',
    'Crash-Rated & Tested Gates': 'Crash Rated Gates',
    'Local & Ag': 'North Florida',
    'Local + Ag': 'North Florida',
  };

  return {
    name: nameMap[item.name] || item.name,
    href: hrefMap[item.href] || item.href,
    children: item.children?.map(normalizeNavItem),
  };
};

const appendMissingLinks = (existing: NavItem[], additions: NavItem[]) => {
  const seen = new Set(existing.map((item) => item.href));

  return [
    ...existing,
    ...additions.filter((item) => {
      if (seen.has(item.href)) {
        return false;
      }
      seen.add(item.href);
      return true;
    }),
  ];
};

const enhanceNavigation = (items: NavItem[]) => {
  const normalized = items.map(normalizeNavItem);
  const expertSourcing = fallbackNavigation.find((item) => item.href === '/expert-sourcing');
  const localNorthFlorida = fallbackNavigation.find((item) => item.href === '/service-areas/branford-fl-agricultural-fencing');

  return appendMissingLinks(normalized, [expertSourcing, localNorthFlorida].filter(Boolean) as NavItem[]);
};

const uniqueLinks = (links: Array<{ name: string; href: string }>) => {
  const seen = new Set<string>();

  return links.filter((link) => {
    if (seen.has(link.href)) {
      return false;
    }

    seen.add(link.href);
    return true;
  });
};

export default function Header({ settings }: { settings?: SiteSettings }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const phone = settings?.phone || "(318) 344-5731";
  const headerCtaText = settings?.headerCtaText || "Request Quote";
  const headerCtaLink = settings?.headerCtaLink || "/contact";

  // Transform Sanity navigation to component format, or use fallback
  const navigation: NavItem[] = settings?.mainNavigation && settings.mainNavigation.length > 0
    ? enhanceNavigation(settings.mainNavigation.map(item => ({
        name: item.name,
        href: item.href,
        children: item.children?.map(child => ({
          name: child.name,
          href: child.href,
        })),
      })))
    : fallbackNavigation;

  const findNavItem = (href: string) =>
    navigation.find((item) => item.href === href) || fallbackNavigation.find((item) => item.href === href);

  const wholesaleNav = findNavItem('/manufacturers');
  const productsNav = findNavItem('/products');
  const industriesNav = findNavItem('/industries');
  const expertSourcingNav = findNavItem('/expert-sourcing');
  const localAgNav = findNavItem('/service-areas/branford-fl-agricultural-fencing');
  const aboutNav = findNavItem('/about');
  const contactNav = findNavItem('/contact');

  const compactNavigation: NavItem[] = [
    wholesaleNav,
    productsNav,
    industriesNav,
    expertSourcingNav,
    localAgNav,
    {
      name: 'More',
      href: '/about',
      children: uniqueLinks([
        { name: 'About Bru-Hart', href: '/about' },
        ...(aboutNav?.children || []),
        { name: 'Reviews', href: '/reviews' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: contactNav?.href || '/contact' },
      ]),
    },
  ].filter(Boolean) as NavItem[];

  const renderDesktopNavigation = (items: NavItem[], compact = false) => (
    items.map((item) => {
      const dropdownKey = `${item.name}-${item.href}`;

      return (
        <div
          key={dropdownKey}
          className="relative"
          onMouseEnter={() => item.children && setOpenDropdown(dropdownKey)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link
            href={item.href}
            className={`${compact ? 'px-2.5' : 'px-3'} py-2 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap`}
          >
            {item.name}
            {item.children && (
              <svg className="ml-1 inline-block w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>
          {item.children && openDropdown === dropdownKey && (
            <div className="absolute top-full left-0 w-80 bg-white border border-border rounded-lg shadow-lg py-2">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-cream hover:text-primary transition-colors"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    })
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo className="h-12 w-auto lg:h-10 2xl:h-12" color="primary" />
            </Link>
          </div>

          {/* Compact Desktop Navigation */}
          <div className="hidden lg:flex 2xl:hidden lg:items-center lg:gap-0.5">
            {renderDesktopNavigation(compactNavigation, true)}
          </div>

          {/* Full Desktop Navigation */}
          <div className="hidden 2xl:flex 2xl:items-center 2xl:gap-1">
            {renderDesktopNavigation(navigation)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3 2xl:gap-4">
            <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="hidden 2xl:inline-flex text-sm font-medium text-steel hover:text-primary transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </span>
            </a>
            <Link
              href={headerCtaLink}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors 2xl:px-6"
            >
              {headerCtaText}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center gap-2 rounded-lg p-2 text-steel hover:text-primary"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <span className="hidden sm:inline text-sm font-semibold">Menu</span>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden -mx-4 sm:-mx-6 mt-0 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-white shadow-xl lg:shadow-none">
            <div className="px-4 py-5 sm:px-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href={headerCtaLink}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {headerCtaText}
                </Link>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-4 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Call {phone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-border bg-background-alt px-4 py-5 sm:grid-cols-2 sm:px-6">
              {navigation.map((item) => (
                <div key={item.name} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between gap-3 text-base font-bold text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <svg className="w-4 h-4 flex-shrink-0 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {item.children && (
                    <div className="mt-3 grid gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-steel hover:bg-cream hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="px-4 py-5 sm:px-6">
              <Link
                href="/resources/tier-1-content-packets"
                className="block rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground hover:border-primary/40"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block font-bold text-primary">Review the SEO content packet</span>
                <span className="mt-1 block text-steel">Open the Dana walkthrough, Tier 1 page requirements, and proof-asset checklist.</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
