import Link from 'next/link';

export default function FeaturedTestimonial() {
  return (
    <section className="py-16 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Quote Section */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex items-center gap-2 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-foreground font-medium mb-6 leading-relaxed">
                &ldquo;These trucks are by far the best I have ever seen over my last forty years in the gate operator business.
                We currently have well over a million cycles on the trucks. I can attest that these trucks are far superior
                to any others on the market.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Dick Loos</p>
                  <p className="text-sm text-foreground-muted">Co-Owner, Vmag &bull; 40+ Years in Industry</p>
                </div>
                <Link
                  href="/custom-fabrication#cnc-trucks"
                  className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Learn about our trucks
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="lg:col-span-2 bg-primary p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Premium Track Systems & Components
              </h3>
              <p className="text-white/80 mb-6">
                See why fabricators with decades of experience choose our CNC milled trucks and BH Track systems.
              </p>
              <Link
                href="/custom-fabrication"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
              >
                View Custom Fabrication
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
