export const contactPage = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'contactInfo', title: 'Contact Info' },
    { name: 'form', title: 'Form Settings' },
    { name: 'visibility', title: 'Section Visibility' },
  ],
  fields: [
    // Visibility Toggles
    {
      name: 'showEmergencySupport',
      title: 'Show Emergency Support Section',
      type: 'boolean',
      group: 'visibility',
      initialValue: true,
      description: 'Toggle the 24/7 Emergency Support section on/off',
    },

    // Hero
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      group: 'hero',
      initialValue: 'Get in Touch',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
      group: 'hero',
    },

    // Contact Info Section
    {
      name: 'contactInfoTitle',
      title: 'Contact Info Title',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'Contact Information',
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'Mon-Fri 8am-6pm CT',
    },
    {
      name: 'emergencyLabel',
      title: 'Emergency Support Label',
      type: 'string',
      group: 'contactInfo',
      initialValue: '24/7 Emergency Support',
    },
    {
      name: 'emergencyNote',
      title: 'Emergency Support Note',
      type: 'string',
      group: 'contactInfo',
      initialValue: 'For existing customers only',
    },

    // Form Section
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      group: 'form',
      initialValue: 'Send Us a Message',
    },
    {
      name: 'formSubtext',
      title: 'Form Subtext',
      type: 'string',
      group: 'form',
      initialValue: "Fill out the form below and we'll get back to you within 24 hours.",
    },
    {
      name: 'contactReasons',
      title: 'Contact Reasons (dropdown options)',
      type: 'array',
      group: 'form',
      of: [{ type: 'string' }],
      initialValue: [
        'Request a Quote',
        'Technical Support',
        'Schedule a Consultation',
        'Product Information',
        'Partnership Inquiry',
        'Other',
      ],
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      group: 'form',
      initialValue: 'Send Message',
    },
    {
      name: 'submittingText',
      title: 'Submitting Text',
      type: 'string',
      group: 'form',
      initialValue: 'Sending...',
    },
    {
      name: 'successMessage',
      title: 'Success Message Title',
      type: 'string',
      group: 'form',
      initialValue: 'Thank you for your inquiry!',
    },
    {
      name: 'successDescription',
      title: 'Success Message Description',
      type: 'string',
      group: 'form',
      initialValue: "We'll get back to you within 24 hours.",
    },
    {
      name: 'errorMessage',
      title: 'Error Message Title',
      type: 'string',
      group: 'form',
      initialValue: 'Something went wrong',
    },
    {
      name: 'errorDescription',
      title: 'Error Message Description',
      type: 'string',
      group: 'form',
      initialValue: 'Please try again or call us directly.',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page Content' }
    },
  },
}
