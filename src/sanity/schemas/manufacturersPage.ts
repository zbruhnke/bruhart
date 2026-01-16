export const manufacturersPage = {
  name: 'manufacturersPage',
  title: 'Manufacturers Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'cta', title: 'CTA Section' },
  ],
  fields: [
    // Hero Section
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      group: 'hero',
      initialValue: 'Manufacturers We Represent',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
      group: 'hero',
      initialValue: "As an authorized manufacturer's representative, we bring you direct access to industry-leading security and fencing solutions from trusted brands.",
    },

    // CTA Section
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
      group: 'cta',
      initialValue: 'Need Help Choosing the Right Solution?',
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'text',
      rows: 2,
      group: 'cta',
      initialValue: 'Our team has deep expertise with all of our manufacturer partners. Let us help you find the perfect products for your project.',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Contact Us',
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      group: 'cta',
      initialValue: '/contact',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Manufacturers Page Content' }
    },
  },
}
