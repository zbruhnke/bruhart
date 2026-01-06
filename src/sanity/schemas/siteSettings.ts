export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
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
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
      ],
    },
    {
      name: 'stats',
      title: 'Company Stats',
      type: 'object',
      fields: [
        { name: 'yearsInBusiness', title: 'Years in Business', type: 'string' },
        { name: 'projectsCompleted', title: 'Projects Completed', type: 'string' },
        { name: 'statesServed', title: 'States Served', type: 'string' },
      ],
    },
    {
      name: 'emergencyPhone',
      title: '24/7 Emergency Phone',
      type: 'string',
    },
  ],
  // Singleton pattern - only one siteSettings document
  __experimental_actions: ['update', 'publish'],
}
