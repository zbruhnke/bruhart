import Link from 'next/link';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-block">
            <Logo className="h-12 w-auto" color="white" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-white/80 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* About Bru-Hart */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              About Bru-Hart Industries
            </h3>
            <p className="text-white/80 mb-4">
              We're a wholesale distributor of high-security fencing, gates, and access control systems
              with over 45 years of experience. From crash-rated barriers to custom gate solutions,
              we provide end-to-end perimeter security for critical infrastructure.
            </p>
            <p className="text-white/80">
              Looking for something specific? Our team is here to help.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            <a
              href="tel:+1-318-344-5731"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (318) 344-5731
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="text-white/80 hover:text-white text-sm transition-colors">
                Products
              </Link>
              <Link href="/manufacturers" className="text-white/80 hover:text-white text-sm transition-colors">
                Our Partners
              </Link>
              <Link href="/industries" className="text-white/80 hover:text-white text-sm transition-colors">
                Industries
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
