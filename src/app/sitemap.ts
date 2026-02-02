import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bruhart.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/products',
    '/industries',
    '/manufacturers',
    '/custom-fabrication',
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  return staticEntries
}
