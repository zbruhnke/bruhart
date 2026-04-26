import { MetadataRoute } from 'next'

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bruhart.com'
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/studio/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
