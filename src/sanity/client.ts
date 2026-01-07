import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Query functions
export async function getProducts() {
  return client.fetch(`
    *[_type == "product"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      features,
      applications,
      image,
      certifications
    }
  `)
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      siteName,
      tagline,
      phone,
      email,
      emergencyPhone,
      address,
      socialLinks,
      stats
    }
  `)
}

export async function getIndustries() {
  return client.fetch(`
    *[_type == "industry"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      challenges,
      solutions,
      image
    }
  `)
}

export async function getTestimonials(featured?: boolean) {
  const filter = featured ? ' && featured == true' : ''
  return client.fetch(`
    *[_type == "testimonial"${filter}] {
      _id,
      quote,
      author,
      title,
      company,
      image,
      featured
    }
  `)
}

export async function getAboutPage() {
  return client.fetch(`
    *[_type == "aboutPage"][0] {
      heroHeading,
      heroSubtext,
      storyTitle,
      storyContent,
      valuesTitle,
      valuesSubtext,
      values,
      timeline,
      ctaTitle,
      ctaSubtext,
      ctaButtonText,
      ctaButtonLink
    }
  `)
}
