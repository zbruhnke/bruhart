import { createClient } from '@sanity/client'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: '.env.local' })

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
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
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
    _id: 'product-bollards',
    name: 'Bollards & Barriers',
    slug: { _type: 'slug', current: 'bollards' },
    tagline: 'Vehicle Mitigation Solutions',
    description: 'Fixed, removable, and retractable bollards along with wedge barriers for vehicle mitigation and perimeter protection. Crash-rated options available for high-security applications.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    features: [
      'Fixed, removable, and retractable options',
      'K4/K8/K12 crash ratings available',
      'Wedge barriers for high-security',
      'Shallow and deep mount foundations',
      'Decorative and industrial styles',
      'Integrated lighting options',
    ],
    applications: ['Storefronts', 'Pedestrian areas', 'Government facilities', 'Corporate campuses', 'Event venues'],
    order: 2,
  },
  {
    _type: 'product',
    _id: 'product-security-fencing',
    name: 'Security Fencing',
    slug: { _type: 'slug', current: 'security-fencing' },
    tagline: 'Perimeter Protection Systems',
    description: 'High-security fencing systems including anti-climb, anti-cut, and detection-integrated options. Complete perimeter solutions from chain link to ornamental steel.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: [
      'Anti-climb and anti-cut mesh',
      'Chain link and welded wire',
      'Ornamental steel fencing',
      'Intrusion detection integration',
      'Barbed wire and razor ribbon',
      'Custom heights and configurations',
    ],
    applications: ['Critical infrastructure', 'Industrial facilities', 'Airports', 'Utilities', 'Correctional facilities'],
    order: 3,
  },
  {
    _type: 'product',
    _id: 'product-access-control',
    name: 'Access Control',
    slug: { _type: 'slug', current: 'access-control' },
    tagline: 'Integrated Security Management',
    description: 'Complete access control solutions from simple keypads to enterprise-grade biometric systems. Seamlessly integrate with your existing security infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    features: [
      'Card readers and keypads',
      'Biometric options (fingerprint, facial)',
      'Telephone entry systems',
      'Cloud-based management',
      'Multi-site support',
      'Video intercom integration',
    ],
    applications: ['All facility types', 'Multi-tenant buildings', 'Secure campuses', 'Visitor management'],
    order: 4,
  },
  {
    _type: 'product',
    _id: 'product-barrier-arms',
    name: 'Barrier Arms',
    slug: { _type: 'slug', current: 'barrier-arms' },
    tagline: 'Traffic Control Solutions',
    description: 'Automatic barrier arm systems for parking facilities, toll plazas, and controlled access points. High-speed and high-cycle options for demanding applications.',
    imageUrl: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
    features: [
      'High-speed operation available',
      'Continuous duty cycle rated',
      'LED lighting options',
      'Breakaway and folding arms',
      'Integration with access systems',
      'Battery backup available',
    ],
    applications: ['Parking facilities', 'Toll plazas', 'Security checkpoints', 'Corporate campuses', 'Airports'],
    order: 5,
  },
  {
    _type: 'product',
    _id: 'product-operators',
    name: 'Gate Operators & Automation',
    slug: { _type: 'slug', current: 'operators' },
    tagline: 'Industrial-Grade Automation',
    description: 'Industrial operators and complete automation systems for slide, swing, and vertical lift gates. Built for continuous duty and harsh environments.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    features: [
      'Hydraulic and electromechanical options',
      'UL 325 safety compliant',
      'Slide, swing, and vertical lift',
      'Battery backup systems',
      'Remote monitoring capabilities',
      'Integration with all access control systems',
    ],
    applications: ['High-cycle applications', 'Critical infrastructure', '24/7 facilities', 'Extreme environments'],
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
    imageUrl: '/images/industries/data-center.jpg',
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
    imageUrl: '/images/industries/airports.jpg',
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
    imageUrl: '/images/industries/utilities.jpg',
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
    imageUrl: '/images/industries/government.jpg',
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
    imageUrl: '/images/industries/ports.jpg',
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
    imageUrl: '/images/industries/corporate.jpg',
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
  salesEmail: 'sales@bruhart.com',
  supportEmail: 'support@bruhart.com',
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
  mainNavigation: [
    { _key: 'nav1', name: 'Home', href: '/' },
    { _key: 'nav2', name: 'Wholesale', href: '/custom-fabrication', children: [
      { _key: 'nav2a', name: 'Custom Fabrication', href: '/custom-fabrication' },
      { _key: 'nav2b', name: 'Our Manufacturers', href: '/manufacturers' },
    ]},
    { _key: 'nav3', name: 'Products', href: '/products', children: [
      { _key: 'nav3a', name: 'Crash-Rated Gates', href: '/products#crash-rated' },
      { _key: 'nav3b', name: 'Bollards & Barriers', href: '/products#bollards' },
      { _key: 'nav3c', name: 'Security Fencing', href: '/products#security-fencing' },
      { _key: 'nav3d', name: 'Access Control', href: '/products#access-control' },
      { _key: 'nav3e', name: 'Barrier Arms', href: '/products#barrier-arms' },
      { _key: 'nav3f', name: 'Gate Operators', href: '/products#operators' },
    ]},
    { _key: 'nav4', name: 'Industries', href: '/industries' },
    { _key: 'nav5', name: 'About', href: '/about' },
    { _key: 'nav6', name: 'Contact', href: '/contact' },
  ],
  headerCtaText: 'Request Quote',
  headerCtaLink: '/contact',
  footerDescription: 'Wholesale fencing and gate distributor specializing in high-security gate systems and crash-rated barriers for critical infrastructure.',
  footerProductLinks: [
    { _key: 'fp1', name: 'Crash-Rated Gates', href: '/products#crash-rated' },
    { _key: 'fp2', name: 'Bollards & Barriers', href: '/products#bollards' },
    { _key: 'fp3', name: 'Security Fencing', href: '/products#security-fencing' },
    { _key: 'fp4', name: 'Access Control', href: '/products#access-control' },
    { _key: 'fp5', name: 'Barrier Arms', href: '/products#barrier-arms' },
    { _key: 'fp6', name: 'Gate Operators', href: '/products#operators' },
  ],
  footerIndustryLinks: [
    { _key: 'fi1', name: 'Data Centers', href: '/industries#data-centers' },
    { _key: 'fi2', name: 'Airports', href: '/industries#airports' },
    { _key: 'fi3', name: 'Utilities', href: '/industries#utilities' },
    { _key: 'fi4', name: 'Government', href: '/industries#government' },
    { _key: 'fi5', name: 'Ports & Logistics', href: '/industries#ports' },
    { _key: 'fi6', name: 'Corporate', href: '/industries#corporate' },
  ],
  footerCompanyLinks: [
    { _key: 'fc1', name: 'About Us', href: '/about' },
    { _key: 'fc2', name: 'Our Team', href: '/about#team' },
    { _key: 'fc3', name: 'Careers', href: '/careers' },
    { _key: 'fc4', name: 'News', href: '/news' },
    { _key: 'fc5', name: 'Contact', href: '/contact' },
  ],
  footerResourceLinks: [
    { _key: 'fr1', name: 'Product Catalog', href: '/resources/catalog' },
    { _key: 'fr2', name: 'Technical Specs', href: '/resources/specs' },
    { _key: 'fr3', name: 'Installation Guides', href: '/resources/guides' },
    { _key: 'fr4', name: 'Warranty Info', href: '/resources/warranty' },
    { _key: 'fr5', name: 'FAQs', href: '/resources/faqs' },
  ],
}

// Home page content
const homePage = {
  _type: 'homePage',
  _id: 'homePage',
  heroBadge: 'Wholesale Fencing & Gate Distributor',
  heroHeadline: 'High-Security Gate Systems for',
  heroHeadlineHighlight: 'Critical Infrastructure',
  heroSubheadline: 'Industry-leading crash-rated gates, barrier systems, and operators protecting data centers, airports, utilities, and government facilities across North America.',
  heroBackgroundImageUrl: 'https://bruhart.com/wp-content/uploads/2025/10/d1345cc4-52d7-42b7-8a25-b514ae8f09b3-1.jpg',
  heroPrimaryCta: 'Get a Quote',
  heroPrimaryCtaLink: '/contact',
  heroSecondaryCta: 'View Products',
  heroSecondaryCtaLink: '/products',
  heroStatsLabel: 'Trusted by industry leaders',
  heroStats: [
    { _key: 'hs1', value: '500+', label: 'Projects Completed' },
    { _key: 'hs2', value: '40+', label: 'Years Experience' },
    { _key: 'hs3', value: '100%', label: 'ASTM Certified' },
  ],
  productsSectionLabel: 'Our Products',
  productsSectionTitle: 'Complete Security Gate Solutions',
  productsSectionDescription: 'From crash-rated barriers to integrated access control, we provide end-to-end perimeter security solutions for the most demanding applications.',
  productsCtaText: 'Explore Our Solutions',
  industriesSectionLabel: 'Industries We Serve',
  industriesSectionTitle: 'Securing Critical Infrastructure',
  industriesSectionDescription: 'We specialize in high-security applications where failure is not an option. Our solutions protect the facilities that keep society running.',
  certificationsSectionTitle: 'Industry Certifications & Standards',
  certificationsSectionDescription: 'Our products meet the highest security standards required by government agencies and private sector organizations worldwide.',
  certifications: [
    { _key: 'cert1', name: 'ASTM F2656', description: 'Vehicle Crash Testing Standard' },
    { _key: 'cert2', name: 'DOS Certified', description: 'Department of State K-Rating' },
    { _key: 'cert3', name: 'UL 325', description: 'Gate Operator Safety Listed' },
    { _key: 'cert4', name: 'ASIS Member', description: 'Security Industry Association' },
  ],
  stats: [
    { _key: 'stat1', value: '40+', label: 'Years in Business' },
    { _key: 'stat2', value: '500+', label: 'Projects Completed' },
    { _key: 'stat3', value: '48', label: 'States Served' },
    { _key: 'stat4', value: '24/7', label: 'Support Available' },
  ],
  ctaHeadline: 'Ready to Secure Your Facility?',
  ctaDescription: 'Our team of security experts is ready to help you design and implement the perfect perimeter protection solution for your specific needs.',
  ctaPrimaryButtonText: 'Request a Consultation',
  ctaPrimaryButtonLink: '/contact',
  ctaCards: [
    { _key: 'cta1', title: 'Sales Inquiries', description: 'Get a custom quote for your project', contactType: 'email', contactValue: 'sales@bruhart.com' },
    { _key: 'cta2', title: 'Technical Support', description: '24/7 support for existing customers', contactType: 'email', contactValue: 'support@bruhart.com' },
  ],
  manufacturersSectionLabel: 'Our Partners',
  manufacturersSectionTitle: 'Manufacturers We Represent',
  manufacturersSectionDescription: 'We proudly partner with industry-leading manufacturers to bring you the highest quality security solutions.',
  manufacturersLinkText: 'View all manufacturers & learn more',
}

// Contact page content
const contactPage = {
  _type: 'contactPage',
  _id: 'contactPage',
  showEmergencySupport: true,
  heroHeading: 'Get in Touch',
  heroSubtext: 'Whether you need a quote, technical support, or want to discuss your security requirements, our team is here to help.',
  contactInfoTitle: 'Contact Information',
  businessHours: 'Mon-Fri 8am-6pm CT',
  emergencyLabel: '24/7 Emergency Support',
  emergencyNote: 'For existing customers only',
  formTitle: 'Send Us a Message',
  formSubtext: "Fill out the form below and we'll get back to you within 24 hours.",
  contactReasons: [
    'Request a Quote',
    'Technical Support',
    'Schedule a Consultation',
    'Product Information',
    'Partnership Inquiry',
    'Other',
  ],
  submitButtonText: 'Send Message',
  submittingText: 'Sending...',
  successMessage: 'Thank you for your inquiry!',
  successDescription: "We'll get back to you within 24 hours.",
  errorMessage: 'Something went wrong',
  errorDescription: 'Please try again or call us directly.',
}

// Manufacturers data
const manufacturers = [
  {
    _type: 'manufacturer',
    _id: 'manufacturer-ball-fabrics',
    name: 'Ball Fabrics',
    slug: { _type: 'slug', current: 'ball-fabrics' },
    logoUrl: '/manufacturers/ball_fabrics.jpeg',
    description: 'Premium fabric solutions for security fencing and screening applications, offering durability and aesthetic appeal.',
    website: 'https://ballfabrics.com',
    order: 1,
  },
  {
    _type: 'manufacturer',
    _id: 'manufacturer-d-d-technologies',
    name: 'D&D Technologies',
    slug: { _type: 'slug', current: 'd-d-technologies' },
    logoUrl: '/manufacturers/d-d-logo-horizontal-white-registered-mark-scaled.jpg',
    description: "The world's most trusted gate hardware manufacturer, specializing in innovative hinges, latches, and closers for gates of all sizes.",
    website: 'https://ddtech.com',
    order: 2,
  },
  {
    _type: 'manufacturer',
    _id: 'manufacturer-fencetrac',
    name: 'FenceTrac',
    slug: { _type: 'slug', current: 'fencetrac' },
    logoUrl: '/manufacturers/fencetrac-fence-systems-1000px.png',
    description: 'Revolutionary fence framing systems that create clean, modern commercial fencing with superior strength and faster installation.',
    website: 'https://fencetrac.com',
    order: 3,
  },
  {
    _type: 'manufacturer',
    _id: 'manufacturer-gatemaster',
    name: 'Gatemaster',
    slug: { _type: 'slug', current: 'gatemaster' },
    logoUrl: '/manufacturers/GM-logo-scaled.jpg',
    description: 'Industry-leading manufacturer of gate locks, closers, and security hardware for commercial and industrial applications.',
    website: 'https://www.gatemasterlocks.com/en-us/',
    order: 4,
  },
  {
    _type: 'manufacturer',
    _id: 'manufacturer-hi-motions',
    name: 'HI Motions',
    slug: { _type: 'slug', current: 'hi-motions' },
    logoUrl: '/manufacturers/hi-motion-logo.jpg',
    description: 'Premium cantilever gate hardware and rolling gate solutions engineered for smooth, reliable operation in demanding environments.',
    website: 'https://himotions.com',
    order: 5,
  },
  {
    _type: 'manufacturer',
    _id: 'manufacturer-max-controls',
    name: 'Max Controls',
    slug: { _type: 'slug', current: 'max-controls' },
    logoUrl: '/manufacturers/Max_Controls_Logo_FILLED-GLOW_HIGH_RES-scaled.jpg',
    description: 'High-performance gate operators and access control systems designed for maximum durability and security.',
    website: 'https://max.us.com/',
    order: 6,
  },
  {
    _type: 'manufacturer',
    _id: 'manufacturer-rotary-gate-systems',
    name: 'Rotary Gate Systems',
    slug: { _type: 'slug', current: 'rotary-gate-systems' },
    logoUrl: '/manufacturers/rotary-gate-systems.jpg',
    description: 'Innovative rotary gate solutions providing space-efficient security for facilities with limited clearance requirements.',
    website: 'https://rotarygatesystems.com',
    order: 7,
  },
]

// Manufacturers page content
const manufacturersPage = {
  _type: 'manufacturersPage',
  _id: 'manufacturersPage',
  heroHeading: 'Manufacturers We Represent',
  heroSubtext: "As an authorized manufacturer's representative, we bring you direct access to industry-leading security and fencing solutions from trusted brands.",
  ctaHeading: 'Need Help Choosing the Right Solution?',
  ctaSubtext: 'Our team has deep expertise with all of our manufacturer partners. Let us help you find the perfect products for your project.',
  ctaButtonText: 'Contact Us',
  ctaButtonLink: '/contact',
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

  // Create home page
  console.log('🏠 Creating home page content...')
  try {
    await client.createOrReplace(homePage)
    console.log('✅ Home page created\n')
  } catch (error) {
    console.error('❌ Error creating home page:', error)
  }

  // Create about page
  console.log('📄 Creating about page content...')
  try {
    await client.createOrReplace(aboutPage)
    console.log('✅ About page created\n')
  } catch (error) {
    console.error('❌ Error creating about page:', error)
  }

  // Create contact page
  console.log('📞 Creating contact page content...')
  try {
    await client.createOrReplace(contactPage)
    console.log('✅ Contact page created\n')
  } catch (error) {
    console.error('❌ Error creating contact page:', error)
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

  // Create manufacturers (using createOrReplace to avoid duplicates)
  console.log("\n🏭 Creating manufacturers...")
  for (const manufacturer of manufacturers) {
    try {
      await client.createOrReplace(manufacturer)
      console.log(`✅ Created/Updated: ${manufacturer.name}`)
    } catch (error) {
      console.error(`❌ Error creating ${manufacturer.name}:`, error)
    }
  }

  // Create manufacturers page
  console.log('\n📄 Creating manufacturers page content...')
  try {
    await client.createOrReplace(manufacturersPage)
    console.log('✅ Manufacturers page created\n')
  } catch (error) {
    console.error('❌ Error creating manufacturers page:', error)
  }

  console.log('\n🎉 Seeding complete!')
  console.log('\nContent created:')
  console.log(`  - 1 Site Settings (with navigation & footer)`)
  console.log(`  - 1 Home Page`)
  console.log(`  - 1 About Page`)
  console.log(`  - 1 Contact Page`)
  console.log(`  - 1 Manufacturers Page`)
  console.log(`  - ${products.length} Products`)
  console.log(`  - ${industries.length} Industries`)
  console.log(`  - ${testimonials.length} Testimonials`)
  console.log(`  - ${manufacturers.length} Manufacturers`)
  console.log('\nView your content at: http://localhost:3000/studio')
}

seed().catch(console.error)
