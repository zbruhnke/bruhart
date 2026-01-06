import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bru-Hart Security Solutions",
  description: "Learn about Bru-Hart's 40+ years of experience providing high-security gate systems for critical infrastructure.",
};

const values = [
  {
    title: "Security First",
    description: "We never compromise on security. Every product we design and install meets the highest industry standards.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Engineering Excellence",
    description: "Our team of engineers brings decades of experience designing solutions for the most demanding applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Partnership",
    description: "We work alongside our clients as trusted partners, understanding their unique security challenges.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Lifetime Support",
    description: "Our relationship doesn't end at installation. We provide ongoing support and maintenance for the life of your system.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "1985", title: "Founded", description: "Bru-Hart was established with a focus on industrial gate systems." },
  { year: "1995", title: "First Crash-Rated System", description: "Pioneered our first ASTM certified crash-rated gate system." },
  { year: "2005", title: "National Expansion", description: "Expanded operations to serve all 48 continental states." },
  { year: "2015", title: "500th Project", description: "Completed our 500th major infrastructure security project." },
  { year: "2024", title: "Industry Leader", description: "Recognized as a leading provider of critical infrastructure security." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Protecting Critical Infrastructure for Over 40 Years
            </h1>
            <p className="text-xl text-white/80">
              From our founding in 1985, Bru-Hart has been dedicated to providing the highest
              quality security gate systems for the most demanding applications.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  Bru-Hart Security Solutions was founded with a simple mission: to provide
                  uncompromising security solutions for facilities where protection is paramount.
                </p>
                <p>
                  What started as a small operation serving local industrial clients has grown
                  into a nationally recognized leader in high-security perimeter protection.
                  Today, our crash-rated gates and barrier systems protect some of the most
                  critical facilities in North America.
                </p>
                <p>
                  Our specialization in crash-rated systems, large-scale gates, and operators
                  for electrical facilities, data centers, airports, and government installations
                  sets us apart. We understand that these facilities require security solutions
                  that go beyond standard offerings.
                </p>
              </div>
            </div>
            <div className="bg-background-alt rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Company Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5"></div>
                      {index < timeline.length - 1 && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-foreground-muted">
              These principles guide everything we do, from product design to customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 border border-border">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for security excellence.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </>
  );
}
