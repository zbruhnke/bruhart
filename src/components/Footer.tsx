import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
  products: [
    { name: 'Crash-Rated Gates', href: '/products#crash-rated' },
    { name: 'Slide Gates', href: '/products#slide-gates' },
    { name: 'Swing Gates', href: '/products#swing-gates' },
    { name: 'Gate Operators', href: '/products#operators' },
    { name: 'Access Control', href: '/products#access-control' },
    { name: 'Crash Grates', href: '/products#crash-grates' },
  ],
  industries: [
    { name: 'Data Centers', href: '/industries#data-centers' },
    { name: 'Airports', href: '/industries#airports' },
    { name: 'Utilities', href: '/industries#utilities' },
    { name: 'Government', href: '/industries#government' },
    { name: 'Ports & Logistics', href: '/industries#ports' },
    { name: 'Corporate', href: '/industries#corporate' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Product Catalog', href: '/resources/catalog' },
    { name: 'Technical Specs', href: '/resources/specs' },
    { name: 'Installation Guides', href: '/resources/guides' },
    { name: 'Warranty Info', href: '/resources/warranty' },
    { name: 'FAQs', href: '/resources/faqs' },
  ],
};

interface SiteSettings {
  siteName?: string;
  phone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  socialLinks?: {
    linkedin?: string;
    youtube?: string;
  };
  [key: string]: any;
}

export default function Footer({ settings }: { settings?: SiteSettings }) {
  const phone = settings?.phone || "(318) 344-5731";
  const email = settings?.email || "info@bruhart.com";
  const address = settings?.address || {
    street: "7111 US Hwy 27",
    city: "Branford",
    state: "FL",
    zip: "32008",
  };
  const socialLinks = settings?.socialLinks || { linkedin: "#", youtube: "#" };
  const siteName = settings?.siteName || "Bru-Hart Industries";

  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo className="h-12 w-auto" color="white" />
            </Link>
            <p className="text-steel-light mb-6 max-w-xs">
              Wholesale fencing and gate distributor specializing in high-security
              gate systems and crash-rated barriers for critical infrastructure.
            </p>
            <div className="flex gap-4">
              <a href={socialLinks.linkedin || "#"} className="text-steel-light hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={socialLinks.youtube || "#"} className="text-steel-light hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-steel-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-steel-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-steel-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-steel-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-steel-light text-sm">{fullAddress}</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-steel-light hover:text-white transition-colors text-sm">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${email}`} className="text-steel-light hover:text-white transition-colors text-sm">
                {email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-light text-sm">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-steel-light hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-steel-light hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
