export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'products', title: 'Products Section' },
    { name: 'industries', title: 'Industries Section' },
    { name: 'certifications', title: 'Certifications Section' },
    { name: 'cta', title: 'CTA Section' },
  ],
  fields: [
    // Hero Section
    {
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Wholesale Fencing & Gate Distributor',
    },
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      group: 'hero',
      initialValue: 'High-Security Gate Systems for',
    },
    {
      name: 'heroHeadlineHighlight',
      title: 'Hero Headline Highlight',
      type: 'string',
      group: 'hero',
      description: 'The accented part of the headline',
      initialValue: 'Critical Infrastructure',
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      group: 'hero',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    },
    {
      name: 'heroBackgroundImageUrl',
      title: 'Hero Background Image URL (fallback)',
      type: 'url',
      group: 'hero',
      description: 'Used if no image is uploaded above',
    },
    {
      name: 'heroPrimaryCta',
      title: 'Primary CTA Button Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Get a Quote',
    },
    {
      name: 'heroPrimaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
      group: 'hero',
      initialValue: '/contact',
    },
    {
      name: 'heroSecondaryCta',
      title: 'Secondary CTA Button Text',
      type: 'string',
      group: 'hero',
      initialValue: 'View Products',
    },
    {
      name: 'heroSecondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
      group: 'hero',
      initialValue: '/products',
    },
    {
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      group: 'hero',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: {
            select: { value: 'value', label: 'label' },
            prepare({ value, label }: { value: string; label: string }) {
              return { title: `${value} - ${label}` }
            },
          },
        },
      ],
    },

    // Products Section
    {
      name: 'productsSectionLabel',
      title: 'Products Section Label',
      type: 'string',
      group: 'products',
      initialValue: 'Our Products',
    },
    {
      name: 'productsSectionTitle',
      title: 'Products Section Title',
      type: 'string',
      group: 'products',
      initialValue: 'Complete Security Gate Solutions',
    },
    {
      name: 'productsSectionDescription',
      title: 'Products Section Description',
      type: 'text',
      rows: 3,
      group: 'products',
    },
    {
      name: 'productsCtaText',
      title: 'Products CTA Text',
      type: 'string',
      group: 'products',
      initialValue: 'View All Products',
    },

    // Industries Section
    {
      name: 'industriesSectionLabel',
      title: 'Industries Section Label',
      type: 'string',
      group: 'industries',
      initialValue: 'Industries We Serve',
    },
    {
      name: 'industriesSectionTitle',
      title: 'Industries Section Title',
      type: 'string',
      group: 'industries',
      initialValue: 'Securing Critical Infrastructure',
    },
    {
      name: 'industriesSectionDescription',
      title: 'Industries Section Description',
      type: 'text',
      rows: 3,
      group: 'industries',
    },

    // Certifications Section
    {
      name: 'certificationsSectionTitle',
      title: 'Certifications Section Title',
      type: 'string',
      group: 'certifications',
      initialValue: 'Industry Certifications & Standards',
    },
    {
      name: 'certificationsSectionDescription',
      title: 'Certifications Section Description',
      type: 'text',
      rows: 2,
      group: 'certifications',
    },
    {
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      group: 'certifications',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'description' },
          },
        },
      ],
    },
    {
      name: 'stats',
      title: 'Company Stats',
      type: 'array',
      group: 'certifications',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: {
            select: { value: 'value', label: 'label' },
            prepare({ value, label }: { value: string; label: string }) {
              return { title: `${value} - ${label}` }
            },
          },
        },
      ],
    },

    // CTA Section
    {
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready to Secure Your Facility?',
    },
    {
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 3,
      group: 'cta',
    },
    {
      name: 'ctaPrimaryButtonText',
      title: 'CTA Primary Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Request a Consultation',
    },
    {
      name: 'ctaPrimaryButtonLink',
      title: 'CTA Primary Button Link',
      type: 'string',
      group: 'cta',
      initialValue: '/contact',
    },
    {
      name: 'ctaCards',
      title: 'CTA Info Cards',
      type: 'array',
      group: 'cta',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'contactType', title: 'Contact Type', type: 'string', options: { list: ['email', 'phone'] } },
            { name: 'contactValue', title: 'Contact Value', type: 'string' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'contactValue' },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: 'Home Page Content' }
    },
  },
}
