import { MetadataRoute } from 'next'
import { seoLandingPages } from '@/content/seoLandingPages'

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.bruhart.com'
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const lastModified = new Date('2026-04-26')

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/products',
    '/industries',
    '/manufacturers',
    '/custom-fabrication',
    '/expert-sourcing',
    '/reviews',
    '/case-studies',
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const seoEntries = seoLandingPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page.sitemapPriority,
  }))

  return [...staticEntries, ...seoEntries]
}
