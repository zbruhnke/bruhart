const certifications = [
  {
    name: 'ASTM F2656',
    description: 'Vehicle Crash Testing Standard',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M24 8L26.5 18H37L28.5 24.5L31 35L24 28.5L17 35L19.5 24.5L11 18H21.5L24 8Z" fill="currentColor" opacity="0.3"/>
        <path d="M16 24L21 29L32 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'DOS Certified',
    description: 'Department of State K-Rating',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M4 16H44" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
        <path d="M24 23V28L27 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="12" r="2" fill="currentColor"/>
        <circle cx="16" cy="12" r="2" fill="currentColor"/>
        <circle cx="22" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'UL 325',
    description: 'Gate Operator Safety Listed',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
        <text x="24" y="22" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">UL</text>
        <text x="24" y="32" textAnchor="middle" fontSize="7" fill="currentColor">325</text>
      </svg>
    ),
  },
  {
    name: 'ASIS Member',
    description: 'Security Industry Association',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L6 12V22C6 33.05 13.68 43.22 24 46C34.32 43.22 42 33.05 42 22V12L24 4Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
        <path d="M18 24L22 28L30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const stats = [
  { value: '40+', label: 'Years in Business' },
  { value: '500+', label: 'Projects Completed' },
  { value: '48', label: 'States Served' },
  { value: '24/7', label: 'Support Available' },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-16"></div>

        {/* Certifications Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Industry Certifications & Standards
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our products meet the highest security standards required by government agencies
            and private sector organizations worldwide.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-colors group"
            >
              <div className="text-white/80 group-hover:text-white transition-colors flex justify-center mb-4">
                {cert.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {cert.name}
              </h3>
              <p className="text-white/60 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
