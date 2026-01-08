export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'contact', title: 'Contact Info' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    // General
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      group: 'general',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
    },
    {
      name: 'stats',
      title: 'Company Stats',
      type: 'object',
      group: 'general',
      fields: [
        { name: 'yearsInBusiness', title: 'Years in Business', type: 'string' },
        { name: 'projectsCompleted', title: 'Projects Completed', type: 'string' },
        { name: 'statesServed', title: 'States Served', type: 'string' },
      ],
    },

    // Contact Info
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'salesEmail',
      title: 'Sales Email',
      type: 'string',
      group: 'contact',
      initialValue: 'sales@bruhart.com',
    },
    {
      name: 'supportEmail',
      title: 'Support Email',
      type: 'string',
      group: 'contact',
      initialValue: 'support@bruhart.com',
    },
    {
      name: 'emergencyPhone',
      title: '24/7 Emergency Phone',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
      ],
    },

    // Navigation
    {
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
            {
              name: 'children',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Name', type: 'string' },
                    { name: 'href', title: 'Link', type: 'string' },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: 'name', subtitle: 'href' },
          },
        },
      ],
    },
    {
      name: 'headerCtaText',
      title: 'Header CTA Button Text',
      type: 'string',
      group: 'navigation',
      initialValue: 'Request Quote',
    },
    {
      name: 'headerCtaLink',
      title: 'Header CTA Link',
      type: 'string',
      group: 'navigation',
      initialValue: '/contact',
    },

    // Footer
    {
      name: 'footerDescription',
      title: 'Footer Brand Description',
      type: 'text',
      rows: 3,
      group: 'footer',
    },
    {
      name: 'footerProductLinks',
      title: 'Footer Product Links',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'footerIndustryLinks',
      title: 'Footer Industry Links',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'footerCompanyLinks',
      title: 'Footer Company Links',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'footerResourceLinks',
      title: 'Footer Resource Links',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' },
          ],
        },
      ],
    },
  ],
}
