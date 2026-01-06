export const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Data Centers', value: 'data-centers' },
          { title: 'Airports', value: 'airports' },
          { title: 'Utilities', value: 'utilities' },
          { title: 'Government', value: 'government' },
          { title: 'Ports & Logistics', value: 'ports' },
          { title: 'Corporate', value: 'corporate' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 3,
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 3,
    },
    {
      name: 'results',
      title: 'Results',
      type: 'text',
      rows: 3,
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'products',
      title: 'Products Used',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show on homepage',
    },
    {
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    },
  ],
}
