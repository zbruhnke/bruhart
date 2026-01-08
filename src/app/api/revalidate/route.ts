import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

// Secret to verify requests are from Sanity
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET

// Map Sanity document types to their page paths
const typeToPath: Record<string, string[]> = {
  homePage: ['/'],
  aboutPage: ['/about'],
  contactPage: ['/contact'],
  product: ['/products', '/'],  // Products appear on home page too
  industry: ['/industries', '/'],  // Industries appear on home page too
  testimonial: ['/'],
  siteSettings: ['/', '/about', '/contact', '/products', '/industries'],  // Used in header/footer everywhere
}

export async function POST(request: NextRequest) {
  try {
    // Verify the secret
    const secret = request.nextUrl.searchParams.get('secret')
    if (secret !== REVALIDATION_SECRET) {
      return Response.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const body = await request.json()
    const { _type } = body

    if (!_type) {
      return Response.json({ message: 'No _type provided' }, { status: 400 })
    }

    // Get paths to revalidate for this document type
    const paths = typeToPath[_type] || []

    if (paths.length === 0) {
      return Response.json({
        message: `No paths configured for type: ${_type}`,
        revalidated: false
      })
    }

    // Revalidate all affected paths
    for (const path of paths) {
      revalidatePath(path)
    }

    return Response.json({
      revalidated: true,
      paths,
      type: _type,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return Response.json({ message: 'Error revalidating', error: String(error) }, { status: 500 })
  }
}
