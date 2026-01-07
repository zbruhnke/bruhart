export const contactSubmission = {
  name: 'contactSubmission',
  title: 'Contact Submissions',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'reason',
      title: 'Reason for Contact',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in_progress' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'new',
    },
    {
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes about this inquiry (not visible to customer)',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    },
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      company: 'company',
      reason: 'reason',
      status: 'status',
    },
    prepare({ firstName, lastName, company, reason, status }: any) {
      return {
        title: `${firstName} ${lastName}${company ? ` - ${company}` : ''}`,
        subtitle: `${reason} (${status})`,
      }
    },
  },
}
