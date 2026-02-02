import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom Fabrication | Bru-Hart Industries",
  description: "Wholesale gate components for fabricators. Custom extruded aluminum track systems and CNC milled trucks engineered for commercial and industrial gate applications.",
};

export default function CustomFabricationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
              Wholesale Components for Gate Fabricators
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Premium Track Systems & Components
            </h1>
            <p className="text-xl text-white/80">
              Building your own gates? Our custom extruded aluminum track and precision
              CNC milled trucks give your fabrication the quality components it needs.
              Competitive wholesale pricing with the performance your customers expect.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Quality Components for Your Builds
            </h2>
            <p className="text-lg text-foreground-muted">
              When you&apos;re fabricating gates for commercial and industrial clients,
              the components you use matter. Our track systems and trucks are designed
              and manufactured to deliver the reliability your customers demand—so you
              can build with confidence and stand behind your work.
            </p>
          </div>
        </div>
      </section>

      {/* BH Track Section */}
      <section className="py-16 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/products/BHTrack.jpg"
                alt="BH Track - Custom Extruded Aluminum Track System"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  BH Track System
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Made in USA
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                Custom Extruded Enclosed Aluminum Track
              </h2>
              <p className="text-lg text-foreground-muted mb-6">
                Give your gate builds the foundation they deserve. Our BH Track is a custom
                extruded enclosed aluminum track system that delivers smooth, reliable operation
                your customers will appreciate for years. The enclosed design means less
                maintenance callbacks and happier clients.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Why Fabricators Choose BH Track
                </h3>
                <ul className="space-y-3">
                  {[
                    "Enclosed design prevents debris—fewer service calls",
                    "Corrosion-resistant aluminum for any environment",
                    "Smooth, quiet operation your customers will notice",
                    "Custom lengths available—we cut to your specs",
                    "Built for high-cycle commercial applications",
                    "Competitive wholesale pricing",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground-muted">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNC Trucks Section */}
      <section id="cnc-trucks" className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="lg:order-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Precision Components
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Made in USA
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                CNC Milled Trucks
              </h2>
              <p className="text-lg text-foreground-muted mb-6">
                Precision matters when you&apos;re building gates that need to perform.
                Our trucks are CNC milled to exact tolerances, designed to pair perfectly
                with the BH Track system. The result? Gates that roll smooth and stay
                that way—the kind of quality that builds your reputation.
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Why Fabricators Choose Our Trucks
                </h3>
                <ul className="space-y-3">
                  {[
                    "Made in USA—domestic manufacturing, reliable supply",
                    "CNC machined to exact tolerances—consistent quality",
                    "Designed specifically for BH Track system",
                    "Heavy-duty construction handles commercial loads",
                    "Smooth rolling action your customers will feel",
                    "Lifetime warranty with competitive pricing",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground-muted">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden lg:order-2">
              <Image
                src="/images/products/cnc-trucks.jpg"
                alt="CNC Milled Trucks for Gate Systems"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl sm:text-2xl text-white font-medium mb-6 leading-relaxed">
            &ldquo;These trucks are by far the best I have ever seen over my last forty years in the gate operator business.
            We currently have well over a million cycles on the trucks. I can attest that these trucks are far superior
            to any others on the market.&rdquo;
          </blockquote>
          <div className="text-white/80">
            <p className="font-semibold">Dick Loos</p>
            <p className="text-sm text-white/60">Co-Owner, Vmag</p>
            <a
              href="http://www.vmagtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
            >
              vmagtech.com
            </a>
          </div>
        </div>
      </section>

      {/* Custom Work Showcase */}
      <section className="py-16 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/bruhart_work/IMG_3775.jpeg"
                alt="Custom decorative gate with rose medallion design"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Custom Designs
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
                Beyond Standard—Built to Your Vision
              </h2>
              <p className="text-lg text-foreground-muted mb-6">
                Sometimes standard components aren&apos;t enough. Whether it&apos;s decorative
                elements, custom medallions, or one-of-a-kind designs, we can help bring
                your vision to life. From ornamental gates to branded security barriers,
                our fabricators create pieces that stand out while maintaining the security
                standards your clients need.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom decorative medallions and inserts",
                  "Branded gate designs with logos",
                  "Ornamental security solutions",
                  "Architectural integration capabilities",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-foreground-muted">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The System Together */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Better Together
            </h2>
            <p className="text-lg text-foreground-muted">
              Pair our BH Track with our CNC milled trucks and you get a system designed
              from the ground up to work together. That means easier installs, smoother
              operation, and customers who come back for their next project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Easier Installs</h3>
              <p className="text-sm text-foreground-muted">
                Components designed to fit together means less time on-site adjusting and troubleshooting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Wholesale Pricing</h3>
              <p className="text-sm text-foreground-muted">
                Competitive pricing on quality components helps protect your margins without cutting corners.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Happy Customers</h3>
              <p className="text-sm text-foreground-muted">
                Smooth, reliable gates build your reputation. Quality components mean fewer callbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get wholesale pricing on BH Track systems, trucks, and components.
            We&apos;re here to help you spec the right parts for your next build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              Request Wholesale Pricing
            </Link>
            <a
              href="tel:+1-318-344-5731"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              Call (318) 344-5731
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
