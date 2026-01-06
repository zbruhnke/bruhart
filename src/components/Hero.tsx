import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Blue Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://bruhart.com/wp-content/uploads/2025/10/d1345cc4-52d7-42b7-8a25-b514ae8f09b3-1.jpg')`,
        }}
      >
        {/* Industrial Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/90 to-primary-light/80"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></span>
            Wholesale Fencing & Gate Distributor
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            High-Security Gate Systems for
            <span className="text-accent-light"> Critical Infrastructure</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl">
            Industry-leading crash-rated gates, barrier systems, and operators protecting
            data centers, airports, utilities, and government facilities across North America.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
            >
              Get a Quote
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              View Products
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-white/80">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div className="text-white/80">
                <div className="text-3xl font-bold">40+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="text-white/80">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/60">ASTM Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
