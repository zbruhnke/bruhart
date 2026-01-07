import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

export async function POST(request: NextRequest) {
  try {
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
