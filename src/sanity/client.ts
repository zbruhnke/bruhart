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
      salesEmail,
      supportEmail,
      emergencyPhone,
      address,
      socialLinks,
      stats,
      mainNavigation,
      headerCtaText,
      headerCtaLink,
      footerDescription,
      footerProductLinks,
      footerIndustryLinks,
      footerCompanyLinks,
      footerResourceLinks
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

export async function getHomePage() {
  return client.fetch(`
    *[_type == "homePage"][0] {
      heroBadge,
      heroHeadline,
      heroHeadlineHighlight,
      heroSubheadline,
      heroBackgroundImage,
      heroBackgroundImageUrl,
      heroPrimaryCta,
      heroPrimaryCtaLink,
      heroSecondaryCta,
      heroSecondaryCtaLink,
      heroStatsLabel,
      heroStats,
      productsSectionLabel,
      productsSectionTitle,
      productsSectionDescription,
      productsCtaText,
      industriesSectionLabel,
      industriesSectionTitle,
      industriesSectionDescription,
      certificationsSectionTitle,
      certificationsSectionDescription,
      certifications,
      stats,
      ctaHeadline,
      ctaDescription,
      ctaPrimaryButtonText,
      ctaPrimaryButtonLink,
      ctaCards,
      manufacturersSectionLabel,
      manufacturersSectionTitle,
      manufacturersSectionDescription,
      manufacturersLinkText
    }
  `)
}

export async function getContactPage() {
  return client.fetch(`
    *[_type == "contactPage"][0] {
      showEmergencySupport,
      heroHeading,
      heroSubtext,
      contactInfoTitle,
      businessHours,
      emergencyLabel,
      emergencyNote,
      formTitle,
      formSubtext,
      contactReasons,
      submitButtonText,
      submittingText,
      successMessage,
      successDescription,
      errorMessage,
      errorDescription
    }
  `)
}

export async function getManufacturers() {
  return client.fetch(`
    *[_type == "manufacturer"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      logo,
      logoUrl,
      description,
      website
    }
  `)
}

export async function getManufacturersPage() {
  return client.fetch(`
    *[_type == "manufacturersPage"][0] {
      heroHeading,
      heroSubtext,
      ctaHeading,
      ctaSubtext,
      ctaButtonText,
      ctaButtonLink
    }
  `)
}
