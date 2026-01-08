export const contactPage = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    // Hero
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'Get in Touch',
    },
    {
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      rows: 3,
    },

    // Contact Info Section
    {
      name: 'contactInfoTitle',
      title: 'Contact Info Title',
      type: 'string',
      initialValue: 'Contact Information',
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'Mon-Fri 8am-6pm CT',
    },
    {
      name: 'emergencyLabel',
      title: 'Emergency Support Label',
      type: 'string',
      initialValue: '24/7 Emergency Support',
    },
    {
      name: 'emergencyNote',
      title: 'Emergency Support Note',
      type: 'string',
      initialValue: 'For existing customers only',
    },

    // Form Section
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      initialValue: 'Send Us a Message',
    },
    {
      name: 'formSubtext',
      title: 'Form Subtext',
      type: 'string',
      initialValue: "Fill out the form below and we'll get back to you within 24 hours.",
    },
    {
      name: 'contactReasons',
      title: 'Contact Reasons (dropdown options)',
      type: 'array',
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
      initialValue: 'Send Message',
    },
    {
      name: 'submittingText',
      title: 'Submitting Text',
      type: 'string',
      initialValue: 'Sending...',
    },
    {
      name: 'successMessage',
      title: 'Success Message Title',
      type: 'string',
      initialValue: 'Thank you for your inquiry!',
    },
    {
      name: 'successDescription',
      title: 'Success Message Description',
      type: 'string',
      initialValue: "We'll get back to you within 24 hours.",
    },
    {
      name: 'errorMessage',
      title: 'Error Message Title',
      type: 'string',
      initialValue: 'Something went wrong',
    },
    {
      name: 'errorDescription',
      title: 'Error Message Description',
      type: 'string',
      initialValue: 'Please try again or call us directly.',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page Content' }
    },
  },
}
