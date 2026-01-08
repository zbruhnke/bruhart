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
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Crash-Rated Gates', href: '/products#crash-rated' },
      { name: 'Slide Gates', href: '/products#slide-gates' },
      { name: 'Swing Gates', href: '/products#swing-gates' },
      { name: 'Gate Operators', href: '/products#operators' },
      { name: 'Access Control', href: '/products#access-control' },
    ],
  },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header({ settings }: { settings?: SiteSettings }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const phone = settings?.phone || "(318) 344-5731";
  const headerCtaText = settings?.headerCtaText || "Request Quote";
  const headerCtaLink = settings?.headerCtaLink || "/contact";

  // Transform Sanity navigation to component format
  const navigation: NavItem[] = settings?.mainNavigation && settings.mainNavigation.length > 0
    ? settings.mainNavigation.map(item => ({
        name: item.name,
        href: item.href,
        children: item.children?.map(child => ({
          name: child.name,
          href: child.href,
        })),
      }))
    : fallbackNavigation;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo className="h-12 w-auto" color="primary" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                  {item.children && (
                    <svg className="ml-1 inline-block w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-border rounded-lg shadow-lg py-2">
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
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium text-steel hover:text-primary transition-colors">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </span>
            </a>
            <Link
              href={headerCtaLink}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              {headerCtaText}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-steel hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
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
          <div className="lg:hidden py-4 border-t border-border">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-sm text-steel hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href={headerCtaLink}
                className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {headerCtaText}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
