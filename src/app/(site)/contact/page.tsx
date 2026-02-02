import { Metadata } from "next";
import { getContactPage, getSiteSettings } from "@/sanity/client";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Bru-Hart Industries",
  description: "Get in touch with Bru-Hart Industries for quotes, technical support, or to discuss your security gate and fencing requirements. Call (318) 344-5731 or request a quote online.",
};

// Fallback data for contact page
const fallbackData = {
  heroHeading: 'Get in Touch',
  heroSubtext: 'Whether you need a quote, technical support, or want to discuss your security requirements, our team is here to help.',
  contactInfoTitle: 'Contact Information',
  businessHours: 'Mon-Fri 8am-6pm CT',
  emergencyLabel: '24/7 Emergency Support',
  emergencyNote: 'For existing customers only',
};

// Fallback site settings
const fallbackSettings = {
  phone: '(318) 344-5731',
  email: 'contact@bruhart.com',
  salesEmail: 'sales@bruhart.com',
  billingEmail: 'billing@bruhart.com',
  address: {
    street: '7135 US Hwy 27',
    city: 'Branford',
    state: 'FL',
    zip: '32008',
  },
};

export default async function ContactPage() {
  const [contactPageData, siteSettings] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
  ]);

  // Merge with fallbacks
  const heroHeading = contactPageData?.heroHeading || fallbackData.heroHeading;
  const heroSubtext = contactPageData?.heroSubtext || fallbackData.heroSubtext;
  const contactInfoTitle = contactPageData?.contactInfoTitle || fallbackData.contactInfoTitle;
  const businessHours = contactPageData?.businessHours || fallbackData.businessHours;
  const emergencyLabel = contactPageData?.emergencyLabel || fallbackData.emergencyLabel;
  const emergencyNote = contactPageData?.emergencyNote || fallbackData.emergencyNote;
  const showEmergencySupport = contactPageData?.showEmergencySupport !== false; // Default to true

  const phone = siteSettings?.phone || fallbackSettings.phone;
  const email = siteSettings?.email || fallbackSettings.email;
  const salesEmail = siteSettings?.salesEmail || fallbackSettings.salesEmail;
  const billingEmail = siteSettings?.billingEmail || fallbackSettings.billingEmail;
  const address = siteSettings?.address || fallbackSettings.address;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {heroHeading}
            </h1>
            <p className="text-xl text-white/80">
              {heroSubtext}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">{contactInfoTitle}</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Headquarters</h3>
                    <p className="text-foreground-muted">
                      {address.street}<br />
                      {address.city}, {address.state} {address.zip}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-foreground-muted hover:text-primary transition-colors">
                      {phone}
                    </a>
                    <p className="text-sm text-foreground-muted mt-1">{businessHours}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <div className="space-y-1">
                      <a href={`mailto:${salesEmail}`} className="block text-foreground-muted hover:text-primary transition-colors">
                        {salesEmail}
                      </a>
                      <a href={`mailto:${billingEmail}`} className="block text-foreground-muted hover:text-primary transition-colors">
                        {billingEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emergency */}
                {showEmergencySupport && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{emergencyLabel}</h3>
                      <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-red-600 font-medium hover:text-red-700 transition-colors">
                        {phone}
                      </a>
                      <p className="text-sm text-foreground-muted mt-1">{emergencyNote}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Google Maps */}
              <div className="mt-8 aspect-square bg-background-alt rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9068664044166!2d-82.8847631!3d29.953357399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8d53858009793%3A0xed8774c40ed6c70d!2s7135%20US-27%2C%20Branford%2C%20FL%2032008!5e0!3m2!1sen!2sus!4v1767908717766!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bru-Hart Industries Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm data={contactPageData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
