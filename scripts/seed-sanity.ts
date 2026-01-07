import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '7fzguk2o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

// Products data
const products = [
  {
    _type: 'product',
    name: 'Crash-Rated Gates',
    slug: { _type: 'slug', current: 'crash-rated' },
    tagline: 'ASTM F2656 Certified Protection',
    description: 'Our crash-rated gates are engineered to stop vehicles at high speeds, providing the highest level of perimeter protection for critical infrastructure. Available in K4, K8, and K12 ratings to meet DOS and ASTM standards.',
    features: [
      'K4/K8/K12 crash ratings available',
      'ASTM F2656 and DOS certified',
      'Slide, swing, and beam configurations',
      'Rapid deployment options (EFO)',
      'Integration with existing security systems',
      'Custom sizes up to 40ft clear opening',
    ],
    applications: ['Government facilities', 'Data centers', 'Airports', 'Military bases', 'Embassies'],
    order: 1,
  },
  {
    _type: 'product',
    name: 'Slide Gates',
    slug: { _type: 'slug', current: 'slide-gates' },
    tagline: 'Heavy-Duty Industrial Performance',
    description: 'Our cantilever and track slide gates are designed for the most demanding industrial applications. Engineered for continuous duty cycles and extreme weather conditions.',
    features: [
      'Cantilever and track-mounted options',
      'Openings up to 100ft',
      'Heavy-gauge steel construction',
      'Hot-dip galvanized or powder coated',
      'Chain link, ornamental, or solid panel infill',
      'Crash-rated options available',
    ],
    applications: ['Industrial facilities', 'Warehouses', 'Utilities', 'Logistics centers', 'Manufacturing plants'],
    order: 2,
  },
  {
    _type: 'product',
    name: 'Swing Gates',
    slug: { _type: 'slug', current: 'swing-gates' },
    tagline: 'Versatile Access Control',
    description: 'Single and bi-parting swing gates for a wide range of applications. Available in standard and crash-rated configurations with multiple design options.',
    features: [
      'Single and bi-parting configurations',
      'Standard and crash-rated options',
      'Decorative and ornamental styles',
      'Up to 24ft per leaf',
      'Multiple infill options',
      'Automated or manual operation',
    ],
    applications: ['Corporate campuses', 'Residential estates', 'Government buildings', 'Commercial properties'],
    order: 3,
  },
  {
    _type: 'product',
    name: 'Gate Operators',
    slug: { _type: 'slug', current: 'operators' },
    tagline: 'Industrial-Grade Automation',
    description: 'Our operators are built for continuous duty and harsh environments. Hydraulic and electromechanical options designed to handle the largest and heaviest gates.',
    features: [
      'Hydraulic and electromechanical options',
      'UL 325 safety compliant',
      'Designed for continuous duty cycles',
      'Battery backup systems',
      'Remote monitoring capabilities',
      'Integration with all access control systems',
    ],
    applications: ['High-cycle applications', 'Critical infrastructure', '24/7 facilities', 'Extreme environments'],
    order: 4,
  },
  {
    _type: 'product',
    name: 'Access Control Systems',
    slug: { _type: 'slug', current: 'access-control' },
    tagline: 'Integrated Security Management',
    description: 'Complete access control solutions from simple keypads to enterprise-grade biometric systems. Seamlessly integrate with your existing security infrastructure.',
    features: [
      'Card readers and keypads',
      'Biometric options (fingerprint, facial)',
      'Telephone entry systems',
      'Cloud-based management',
      'Multi-site support',
      'Video intercom integration',
    ],
    applications: ['All facility types', 'Multi-tenant buildings', 'Secure campuses', 'Visitor management'],
    order: 5,
  },
  {
    _type: 'product',
    name: 'Crash Grates',
    slug: { _type: 'slug', current: 'crash-grates' },
    tagline: 'Engineered Drainage Security',
    description: 'Unique crash-rated drainage grates that provide vehicle barrier capabilities while maintaining water flow. Protect underground access points at critical facilities.',
    features: [
      'DOS and ASTM certified',
      'High load capacity ratings',
      'Maintains drainage function',
      'Custom sizes available',
      'Hot-dip galvanized steel',
      'Tamper-resistant hardware',
    ],
    applications: ['Data centers', 'Government facilities', 'Financial institutions', 'Critical infrastructure'],
    order: 6,
  },
]

// Industries data
const industries = [
  {
    _type: 'industry',
    name: 'Data Centers',
    slug: { _type: 'slug', current: 'data-centers' },
    tagline: 'Protecting the Digital Economy',
    description: 'Data centers house the critical infrastructure that powers our digital world. A security breach can result in massive financial losses and compromised data. Our crash-rated perimeter systems provide the physical security layer these facilities demand.',
    challenges: [
      '24/7 unmanned perimeters',
      'High-value target for attacks',
      'Multiple access points',
      'Integration with existing security',
    ],
    solutions: [
      'K8/K12 crash-rated vehicle barriers',
      'High-speed gates for authorized access',
      'Integrated access control systems',
      'Anti-climb fencing solutions',
    ],
    order: 1,
  },
  {
    _type: 'industry',
    name: 'Airports & Aviation',
    slug: { _type: 'slug', current: 'airports' },
    tagline: 'TSA & FAA Compliant Solutions',
    description: 'Airports are critical transportation infrastructure requiring multi-layered security. Our gate systems meet strict TSA and FAA requirements while maintaining the operational flow essential to modern air travel.',
    challenges: [
      'TSA and FAA compliance requirements',
      'High traffic volume',
      'Multiple security zones',
      'Runway and tarmac protection',
    ],
    solutions: [
      'TSA-compliant barrier systems',
      'High-cycle rate gate operators',
      'Crash-rated aircraft service gates',
      'Perimeter intrusion detection integration',
    ],
    order: 2,
  },
  {
    _type: 'industry',
    name: 'Utilities & Energy',
    slug: { _type: 'slug', current: 'utilities' },
    tagline: 'NERC CIP Compliant Protection',
    description: 'Power plants, substations, and energy infrastructure are essential to national security. Our solutions meet NERC CIP requirements and provide the physical security needed to protect these vital assets.',
    challenges: [
      'NERC CIP compliance',
      'Remote unmanned locations',
      'Harsh environmental conditions',
      'Large perimeter areas',
    ],
    solutions: [
      'NERC CIP compliant access control',
      'Weather-resistant crash gates',
      'Remote monitoring systems',
      'Solar-powered operator options',
    ],
    order: 3,
  },
  {
    _type: 'industry',
    name: 'Government & Military',
    slug: { _type: 'slug', current: 'government' },
    tagline: 'DOS Certified Security',
    description: 'Government facilities and military installations require the highest levels of security certification. Our DOS-certified barriers and access systems meet the stringent requirements of federal agencies.',
    challenges: [
      'DOS certification requirements',
      'High-security clearance zones',
      'Anti-terrorism standards',
      'Multi-level access control',
    ],
    solutions: [
      'DOS-certified crash barriers',
      'Anti-ram vehicle barriers',
      'Secure entry pavilions',
      'Biometric access integration',
    ],
    order: 4,
  },
  {
    _type: 'industry',
    name: 'Ports & Logistics',
    slug: { _type: 'slug', current: 'ports' },
    tagline: 'MTSA Compliant Maritime Security',
    description: 'Seaports and logistics hubs are critical nodes in the global supply chain. Our MTSA-compliant solutions protect these facilities while maintaining the high throughput essential to commerce.',
    challenges: [
      'MTSA compliance requirements',
      'High-volume traffic flow',
      'Container yard security',
      'Intermodal facility access',
    ],
    solutions: [
      'MTSA-compliant barrier systems',
      'High-speed commercial gates',
      'TWIC reader integration',
      'Vehicle inspection portals',
    ],
    order: 5,
  },
  {
    _type: 'industry',
    name: 'Corporate Campuses',
    slug: { _type: 'slug', current: 'corporate' },
    tagline: 'Security Meets Aesthetics',
    description: 'Fortune 500 headquarters and corporate campuses require security solutions that protect without compromising the welcoming environment essential to business. Our systems balance security with architectural aesthetics.',
    challenges: [
      'Aesthetic integration requirements',
      'Executive protection needs',
      'Visitor management',
      'Employee convenience',
    ],
    solutions: [
      'Decorative crash-rated barriers',
      'Ornamental security gates',
      'Visitor management systems',
      'VIP entry systems',
    ],
    order: 6,
  },
]

// Testimonials data
const testimonials = [
  {
    _type: 'testimonial',
    quote: 'Bru-Hart delivered a turnkey crash-rated gate system that exceeded our security requirements. Their team understood the unique challenges of protecting a Tier IV data center.',
    author: 'Michael Chen',
    title: 'Director of Physical Security',
    company: 'Major Cloud Provider',
    featured: true,
  },
  {
    _type: 'testimonial',
    quote: 'The installation was completed on schedule with minimal disruption to our operations. The gate system has performed flawlessly for over three years.',
    author: 'Sarah Martinez',
    title: 'Facilities Manager',
    company: 'Regional Airport Authority',
    featured: true,
  },
  {
    _type: 'testimonial',
    quote: 'Working with Bru-Hart on our NERC CIP compliance project was seamless. They understood the regulatory requirements and delivered a solution that passed our audit with flying colors.',
    author: 'James Wilson',
    title: 'Security Compliance Officer',
    company: 'Electric Utility Company',
    featured: true,
  },
  {
    _type: 'testimonial',
    quote: 'The ornamental crash-rated gates perfectly balance our security needs with the aesthetic requirements of our corporate headquarters. Visitors never realize they are walking through a certified barrier.',
    author: 'Amanda Thompson',
    title: 'VP of Corporate Security',
    company: 'Fortune 500 Corporation',
    featured: false,
  },
]

// Site settings
const siteSettings = {
  _type: 'siteSettings',
  _id: 'siteSettings',
  siteName: 'Bru-Hart Industries',
  tagline: 'High-Security Gate Systems',
  phone: '(318) 344-5731',
  email: 'info@bruhart.com',
  emergencyPhone: '(318) 344-5731',
  address: {
    street: '7111 US Hwy 27',
    city: 'Branford',
    state: 'FL',
    zip: '32008',
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/company/bruhart',
    youtube: 'https://youtube.com/@bruhart',
  },
  stats: {
    yearsInBusiness: '40+',
    projectsCompleted: '500+',
    statesServed: '48',
  },
}

async function seed() {
  console.log('🌱 Seeding Sanity database...\n')

  // Create site settings
  console.log('📋 Creating site settings...')
  try {
    await client.createOrReplace(siteSettings)
    console.log('✅ Site settings created\n')
  } catch (error) {
    console.error('❌ Error creating site settings:', error)
  }

  // Create products
  console.log('📦 Creating products...')
  for (const product of products) {
    try {
      await client.create(product)
      console.log(`✅ Created: ${product.name}`)
    } catch (error) {
      console.error(`❌ Error creating ${product.name}:`, error)
    }
  }

  // Create industries
  console.log('\n🏭 Creating industries...')
  for (const industry of industries) {
    try {
      await client.create(industry)
      console.log(`✅ Created: ${industry.name}`)
    } catch (error) {
      console.error(`❌ Error creating ${industry.name}:`, error)
    }
  }

  // Create testimonials
  console.log('\n💬 Creating testimonials...')
  for (const testimonial of testimonials) {
    try {
      await client.create(testimonial)
      console.log(`✅ Created testimonial from: ${testimonial.author}`)
    } catch (error) {
      console.error(`❌ Error creating testimonial from ${testimonial.author}:`, error)
    }
  }

  console.log('\n🎉 Seeding complete!')
  console.log('\nContent created:')
  console.log(`  - 1 Site Settings`)
  console.log(`  - ${products.length} Products`)
  console.log(`  - ${industries.length} Industries`)
  console.log(`  - ${testimonials.length} Testimonials`)
  console.log('\nView your content at: http://localhost:3000/studio')
}

seed().catch(console.error)
