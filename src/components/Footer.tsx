import Link from 'next/link';
import Logo from './Logo';

interface FooterLink {
  name: string;
  href: string;
}

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
    facebook?: string;
  };
  footerDescription?: string;
  footerProductLinks?: FooterLink[];
  footerLocalAgLinks?: FooterLink[];
  footerIndustryLinks?: FooterLink[];
  footerCompanyLinks?: FooterLink[];
  footerResourceLinks?: FooterLink[];
  [key: string]: unknown;
}

// Fallback footer links
const fallbackLinks = {
  products: [
    { name: 'Crash Rated Gates', href: '/products/crash-rated-gates' },
    { name: 'Crash Rated Barriers', href: '/products/crash-rated-barriers' },
    { name: 'Perimeter Security Fencing', href: '/products/perimeter-security-fencing' },
    { name: 'Access Control', href: '/products/access-control-automation' },
    { name: 'Cantilever Gate Systems', href: '/products/cantilever-gate-systems' },
    { name: 'Bollards & Barriers', href: '/products/bollards-barriers' },
    { name: 'Chain Link Supplies', href: '/products/chain-link-fence-supplies' },
    { name: 'Wood Fence Materials', href: '/products/wood-fence-materials' },
    { name: 'Gate Operators', href: '/products/gate-operators' },
    { name: 'Fence Hardware', href: '/products/fence-hardware' },
  ],
  localAg: [
    { name: 'Branford Ag Fencing', href: '/service-areas/branford-fl-agricultural-fencing' },
    { name: 'Agricultural Fencing', href: '/products/agricultural-fencing' },
    { name: 'Field Fence & Woven Wire', href: '/products/field-fence-woven-wire' },
    { name: 'Horse Fencing', href: '/products/horse-fencing' },
    { name: 'Farm & Ranch Gates', href: '/products/farm-ranch-gates' },
    { name: 'Fence Materials', href: '/products/fence-materials-supplies' },
  ],
  industries: [
    { name: 'Data Centers', href: '/industries/data-center-security-gates' },
    { name: 'Airports', href: '/industries/airport-perimeter-security' },
    { name: 'Utilities', href: '/industries/utility-substation-security' },
    { name: 'Government', href: '/industries/government-facility-security' },
    { name: 'Ports & Logistics', href: '/industries#ports' },
    { name: 'Corporate', href: '/industries#corporate' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Expert Sourcing', href: '/expert-sourcing' },
    { name: 'Industry Experience', href: '/about/fence-industry-experience' },
    { name: 'Why Contractors Call', href: '/about/why-contractors-call-bruhart' },
    { name: 'Hard-to-Source Products', href: '/resources/hard-to-source-fence-gate-products' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Ask a Fence Expert', href: '/resources/ask-a-fence-expert' },
    { name: 'Our Partners', href: '/manufacturers' },
    { name: 'Contact', href: '/contact' },
  ],
};

const normalizeFooterLink = (link: FooterLink): FooterLink => {
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
  };

  return {
    name: nameMap[link.name] || link.name,
    href: hrefMap[link.href] || link.href,
  };
};

const mergeFooterLinks = (links: FooterLink[] | undefined, fallback: FooterLink[], required: FooterLink[] = []) => {
  const base = links && links.length > 0 ? links.map(normalizeFooterLink) : fallback;
  const seen = new Set(base.map((link) => link.href));

  return [
    ...base,
    ...required.filter((link) => {
      if (seen.has(link.href)) {
        return false;
      }
      seen.add(link.href);
      return true;
    }),
  ];
};

export default function Footer({ settings }: { settings?: SiteSettings }) {
  const phone = settings?.phone || "(318) 344-5731";
  const email = settings?.email || "contact@bruhart.com";
  const address = settings?.address || {
    street: "7135 US Hwy 27",
    city: "Branford",
    state: "FL",
    zip: "32008",
  };
  const socialLinks = settings?.socialLinks || {};
  const siteName = settings?.siteName || "Bru-Hart Industries";
  const footerDescription = settings?.footerDescription || "Wholesale fencing and gate distributor for buyers who need expert sourcing, product judgment, high-security gates, agricultural fence materials, and hard-to-find components.";

  // Use Sanity links or fallback
  const productLinks = mergeFooterLinks(settings?.footerProductLinks, fallbackLinks.products, [
    { name: 'Chain Link Supplies', href: '/products/chain-link-fence-supplies' },
    { name: 'Gate Operators', href: '/products/gate-operators' },
    { name: 'Fence Hardware', href: '/products/fence-hardware' },
  ]);
  const localAgLinks = mergeFooterLinks(settings?.footerLocalAgLinks, fallbackLinks.localAg);
  const industryLinks = mergeFooterLinks(settings?.footerIndustryLinks, fallbackLinks.industries);
  const companyLinks = mergeFooterLinks(settings?.footerCompanyLinks, fallbackLinks.company, [
    { name: 'Expert Sourcing', href: '/expert-sourcing' },
    { name: 'Hard-to-Source Products', href: '/resources/hard-to-source-fence-gate-products' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Ask a Fence Expert', href: '/resources/ask-a-fence-expert' },
  ]);

  // Check if any social links are set
  const hasLinkedIn = socialLinks.linkedin && socialLinks.linkedin !== '#';
  const hasYouTube = socialLinks.youtube && socialLinks.youtube !== '#';
  const hasFacebook = socialLinks.facebook && socialLinks.facebook !== '#';
  const hasSocialLinks = hasLinkedIn || hasYouTube || hasFacebook;

  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo className="h-12 w-auto" color="white" />
            </Link>
            <p className="text-steel-light mb-6 max-w-xs">
              {footerDescription}
            </p>
            {hasSocialLinks && (
              <div className="flex gap-4">
                {hasLinkedIn && (
                  <a href={socialLinks.linkedin} className="text-steel-light hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {hasYouTube && (
                  <a href={socialLinks.youtube} className="text-steel-light hover:text-white transition-colors">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                )}
                {hasFacebook && (
                  <a href={socialLinks.facebook} className="text-steel-light hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-steel-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local & Ag */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Local & Ag
            </h3>
            <ul className="space-y-3">
              {localAgLinks.map((link) => (
                <li key={link.href}>
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
              {industryLinks.map((link) => (
                <li key={link.href}>
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
              {companyLinks.map((link) => (
                <li key={link.href}>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
        <div className="py-6 border-t border-white/10">
          <p className="text-steel-light text-sm text-center">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
