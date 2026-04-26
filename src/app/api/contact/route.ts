import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { Resend } from 'resend'

// Email address to receive notifications (set in environment variables)
const NOTIFICATION_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL || 'sales@bruhart.com'

export async function POST(request: NextRequest) {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const token = process.env.SANITY_WRITE_TOKEN

    if (!projectId || !token) {
      console.error('Contact form is missing Sanity configuration')
      return NextResponse.json(
        { error: 'Contact form is not configured' },
        { status: 503 }
      )
    }

    const client = createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      token,
      useCdn: false,
    })
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()

    const { firstName, lastName, email, phone, company, reason, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !reason || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact submission in Sanity
    const submission = await client.create({
      _type: 'contactSubmission',
      firstName,
      lastName,
      email,
      phone: phone || '',
      company: company || '',
      reason,
      message,
      status: 'new',
      submittedAt: new Date().toISOString(),
    })

    // Send email notification
    try {
      await resend.emails.send({
        from: 'Bru-Hart Website <bruhart@m.ordinary.company>',
        to: NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission: ${reason}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Reason:</strong> ${reason}</p>
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br />')}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT<br />
            View all submissions in <a href="https://bruhart.sanity.studio/structure/contactSubmission">Sanity Studio</a>
          </p>
        `,
      })
    } catch (emailError) {
      // Log email error but don't fail the request - the submission is already saved
      console.error('Failed to send email notification:', emailError)
    }

    return NextResponse.json(
      { success: true, id: submission._id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
