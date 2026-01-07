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
    _id: 'product-crash-rated',
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
    _id: 'product-slide-gates',
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
    _id: 'product-swing-gates',
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
    _id: 'product-operators',
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
    _id: 'product-access-control',
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
    _id: 'product-crash-grates',
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
    _id: 'industry-data-centers',
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
    _id: 'industry-airports',
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
    _id: 'industry-utilities',
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
    _id: 'industry-government',
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
    _id: 'industry-ports',
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
    _id: 'industry-corporate',
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
    _id: 'testimonial-michael-chen',
    quote: 'Bru-Hart delivered a turnkey crash-rated gate system that exceeded our security requirements. Their team understood the unique challenges of protecting a Tier IV data center.',
    author: 'Michael Chen',
    title: 'Director of Physical Security',
    company: 'Major Cloud Provider',
    featured: true,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-sarah-martinez',
    quote: 'The installation was completed on schedule with minimal disruption to our operations. The gate system has performed flawlessly for over three years.',
    author: 'Sarah Martinez',
    title: 'Facilities Manager',
    company: 'Regional Airport Authority',
    featured: true,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-james-wilson',
    quote: 'Working with Bru-Hart on our NERC CIP compliance project was seamless. They understood the regulatory requirements and delivered a solution that passed our audit with flying colors.',
    author: 'James Wilson',
    title: 'Security Compliance Officer',
    company: 'Electric Utility Company',
    featured: true,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-amanda-thompson',
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

// About page content
const aboutPage = {
  _type: 'aboutPage',
  _id: 'aboutPage',
  heroHeading: 'Protecting Critical Infrastructure for Over 40 Years',
  heroSubtext: 'From our founding in 1985, Bru-Hart has been dedicated to providing the highest quality security gate systems for the most demanding applications.',
  storyTitle: 'Our Story',
  storyContent: [
    {
      _type: 'block',
      _key: 'story1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span1',
          text: 'Bru-Hart Security Solutions was founded with a simple mission: to provide uncompromising security solutions for facilities where protection is paramount.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'story2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span2',
          text: 'What started as a small operation serving local industrial clients has grown into a nationally recognized leader in high-security perimeter protection. Today, our crash-rated gates and barrier systems protect some of the most critical facilities in North America.',
        },
      ],
    },
    {
      _type: 'block',
      _key: 'story3',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 'span3',
          text: 'Our specialization in crash-rated systems, large-scale gates, and operators for electrical facilities, data centers, airports, and government installations sets us apart. We understand that these facilities require security solutions that go beyond standard offerings.',
        },
      ],
    },
  ],
  valuesTitle: 'Our Values',
  valuesSubtext: 'These principles guide everything we do, from product design to customer service.',
  values: [
    {
      _key: 'value1',
      title: 'Security First',
      description: 'We never compromise on security. Every product we design and install meets the highest industry standards.',
      iconType: 'shield',
    },
    {
      _key: 'value2',
      title: 'Engineering Excellence',
      description: 'Our team of engineers brings decades of experience designing solutions for the most demanding applications.',
      iconType: 'cog',
    },
    {
      _key: 'value3',
      title: 'Customer Partnership',
      description: 'We work alongside our clients as trusted partners, understanding their unique security challenges.',
      iconType: 'people',
    },
    {
      _key: 'value4',
      title: 'Lifetime Support',
      description: 'Our relationship doesn\'t end at installation. We provide ongoing support and maintenance for the life of your system.',
      iconType: 'support',
    },
  ],
  timeline: [
    { _key: 'timeline1', year: '1985', title: 'Founded', description: 'Bru-Hart was established with a focus on industrial gate systems.' },
    { _key: 'timeline2', year: '1995', title: 'First Crash-Rated System', description: 'Pioneered our first ASTM certified crash-rated gate system.' },
    { _key: 'timeline3', year: '2005', title: 'National Expansion', description: 'Expanded operations to serve all 48 continental states.' },
    { _key: 'timeline4', year: '2015', title: '500th Project', description: 'Completed our 500th major infrastructure security project.' },
    { _key: 'timeline5', year: '2024', title: 'Industry Leader', description: 'Recognized as a leading provider of critical infrastructure security.' },
  ],
  ctaTitle: 'Join Our Team',
  ctaSubtext: 'We\'re always looking for talented individuals who share our passion for security excellence.',
  ctaButtonText: 'View Open Positions',
  ctaButtonLink: '/careers',
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

  // Create about page
  console.log('📄 Creating about page content...')
  try {
    await client.createOrReplace(aboutPage)
    console.log('✅ About page created\n')
  } catch (error) {
    console.error('❌ Error creating about page:', error)
  }

  // Create products (using createOrReplace to avoid duplicates)
  console.log('📦 Creating products...')
  for (const product of products) {
    try {
      await client.createOrReplace(product)
      console.log(`✅ Created/Updated: ${product.name}`)
    } catch (error) {
      console.error(`❌ Error creating ${product.name}:`, error)
    }
  }

  // Create industries (using createOrReplace to avoid duplicates)
  console.log('\n🏭 Creating industries...')
  for (const industry of industries) {
    try {
      await client.createOrReplace(industry)
      console.log(`✅ Created/Updated: ${industry.name}`)
    } catch (error) {
      console.error(`❌ Error creating ${industry.name}:`, error)
    }
  }

  // Create testimonials (using createOrReplace to avoid duplicates)
  console.log('\n💬 Creating testimonials...')
  for (const testimonial of testimonials) {
    try {
      await client.createOrReplace(testimonial)
      console.log(`✅ Created/Updated testimonial from: ${testimonial.author}`)
    } catch (error) {
      console.error(`❌ Error creating testimonial from ${testimonial.author}:`, error)
    }
  }

  console.log('\n🎉 Seeding complete!')
  console.log('\nContent created:')
  console.log(`  - 1 Site Settings`)
  console.log(`  - 1 About Page`)
  console.log(`  - ${products.length} Products`)
  console.log(`  - ${industries.length} Industries`)
  console.log(`  - ${testimonials.length} Testimonials`)
  console.log('\nView your content at: http://localhost:3000/studio')
}

seed().catch(console.error)
