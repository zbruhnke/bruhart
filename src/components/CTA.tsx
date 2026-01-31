import Link from 'next/link';

interface CTAProps {
  data?: {
    ctaHeadline?: string;
    ctaDescription?: string;
    ctaPrimaryButtonText?: string;
    ctaPrimaryButtonLink?: string;
    ctaCards?: Array<{
      title: string;
      description: string;
      contactType: 'email' | 'phone';
      contactValue: string;
    }>;
  };
  settings?: {
    phone?: string;
  };
}

// Fallback data
const fallbackData = {
  ctaHeadline: 'Ready to Secure Your Facility?',
  ctaDescription: 'Our team of security experts is ready to help you design and implement the perfect perimeter protection solution for your specific needs.',
  ctaPrimaryButtonText: 'Request a Consultation',
  ctaPrimaryButtonLink: '/contact',
  ctaCards: [
    { title: 'Sales Inquiries', description: 'Get a custom quote for your project', contactType: 'email' as const, contactValue: 'sales@bruhart.com' },
    { title: 'Billing Questions', description: 'Invoices and payment inquiries', contactType: 'email' as const, contactValue: 'billing@bruhart.com' },
  ],
};

export default function CTA({ data, settings }: CTAProps) {
  const headline = data?.ctaHeadline || fallbackData.ctaHeadline;
  const description = data?.ctaDescription || fallbackData.ctaDescription;
  const primaryButtonText = data?.ctaPrimaryButtonText || fallbackData.ctaPrimaryButtonText;
  const primaryButtonLink = data?.ctaPrimaryButtonLink || fallbackData.ctaPrimaryButtonLink;
  const cards = data?.ctaCards && data.ctaCards.length > 0 ? data.ctaCards : fallbackData.ctaCards;
  const phone = settings?.phone || '(318) 344-5731';

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-steel-dark to-primary p-12 lg:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {headline}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={primaryButtonLink}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {primaryButtonText}
                </Link>
                <a
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors whitespace-nowrap"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {phone}
                </a>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-white/70 mb-3">{card.description}</p>
                  {card.contactType === 'email' ? (
                    <a href={`mailto:${card.contactValue}`} className="text-accent-light hover:text-white transition-colors">
                      {card.contactValue}
                    </a>
                  ) : (
                    <a href={`tel:${card.contactValue.replace(/[^0-9+]/g, '')}`} className="text-accent-light hover:text-white transition-colors">
                      {card.contactValue}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
