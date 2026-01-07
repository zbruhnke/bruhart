export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'Protecting Critical Infrastructure for Over 40 Years',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
    },
    {
      name: 'storyTitle',
      title: 'Story Section Title',
      type: 'string',
      initialValue: 'Our Story',
    },
    {
      name: 'storyContent',
      title: 'Story Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The main story/description text for the About page',
    },
    {
      name: 'valuesTitle',
      title: 'Values Section Title',
      type: 'string',
      initialValue: 'Our Values',
    },
    {
      name: 'valuesSubtext',
      title: 'Values Section Subtext',
      type: 'text',
      rows: 2,
    },
    {
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'iconType',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Shield (Security)', value: 'shield' },
                  { title: 'Cog (Engineering)', value: 'cog' },
                  { title: 'People (Partnership)', value: 'people' },
                  { title: 'Support (Lifetime)', value: 'support' },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    },
    {
      name: 'timeline',
      title: 'Company Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
          ],
          preview: {
            select: {
              title: 'title',
              year: 'year',
            },
            prepare({ title, year }: { title: string; year: string }) {
              return {
                title: `${year} - ${title}`,
              }
            },
          },
        },
      ],
    },
    {
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      initialValue: 'Join Our Team',
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Section Subtext',
      type: 'text',
      rows: 2,
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'View Open Positions',
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/careers',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Content',
      }
    },
  },
}
