import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const configuredProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const hasSanityConfig = Boolean(configuredProjectId && configuredProjectId !== 'your-project-id')
export const projectId = hasSanityConfig ? configuredProjectId as string : 'your-project-id'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source)
}

type SanityImageSource = Parameters<typeof builder.image>[0]
type NullableSanityImageSource = SanityImageSource | null

type FooterLink = {
  name: string
  href: string
}

type NavItem = FooterLink & {
  children?: FooterLink[]
}

type Address = {
  street?: string
  city?: string
  state?: string
  zip?: string
}

type ContactCard = {
  title: string
  description: string
  contactType: 'email' | 'phone'
  contactValue: string
}

type PortableTextValue =
  | { _type: string; _key?: string; [key: string]: unknown }
  | Array<{ _type: string; _key?: string; [key: string]: unknown }>

type SiteSettings = {
  siteName?: string
  tagline?: string
  phone?: string
  email?: string
  salesEmail?: string
  billingEmail?: string
  emergencyPhone?: string
  address?: Address
  socialLinks?: Record<string, string>
  stats?: Array<Record<string, unknown>>
  mainNavigation?: NavItem[]
  headerCtaText?: string
  headerCtaLink?: string
  footerDescription?: string
  footerProductLinks?: FooterLink[]
  footerLocalAgLinks?: FooterLink[]
  footerIndustryLinks?: FooterLink[]
  footerCompanyLinks?: FooterLink[]
  footerResourceLinks?: FooterLink[]
}

export type Product = {
  _id: string
  name: string
  slug?: string
  tagline?: string
  description?: string
  features?: string[]
  applications?: string[]
  image?: NullableSanityImageSource
  imageUrl?: string
  certifications?: string[]
}

export type Industry = {
  _id: string
  name: string
  slug?: string
  tagline?: string
  description?: string
  challenges?: string[]
  solutions?: string[]
  image?: NullableSanityImageSource
  imageUrl?: string
}

type Testimonial = {
  _id: string
  quote?: string
  author?: string
  title?: string
  company?: string
  image?: NullableSanityImageSource
  featured?: boolean
}

type AboutPageContent = {
  heroHeading?: string
  heroSubtext?: string
  storyTitle?: string
  storyContent?: PortableTextValue
  valuesTitle?: string
  valuesSubtext?: string
  values?: Array<{
    title: string
    description: string
    iconType: string
  }>
  timeline?: Array<{
    year: string
    title: string
    description: string
  }>
  ctaTitle?: string
  ctaSubtext?: string
  ctaButtonText?: string
  ctaButtonLink?: string
}

type HomePageContent = {
  heroBadge?: string
  heroHeadline?: string
  heroHeadlineHighlight?: string
  heroSubheadline?: string
  heroBackgroundImage?: NullableSanityImageSource
  heroBackgroundImageUrl?: string
  heroPrimaryCta?: string
  heroPrimaryCtaLink?: string
  heroSecondaryCta?: string
  heroSecondaryCtaLink?: string
  heroStatsLabel?: string
  heroStats?: Array<Record<string, unknown>>
  productsSectionLabel?: string
  productsSectionTitle?: string
  productsSectionDescription?: string
  productsCtaText?: string
  industriesSectionLabel?: string
  industriesSectionTitle?: string
  industriesSectionDescription?: string
  certificationsSectionTitle?: string
  certificationsSectionDescription?: string
  certifications?: Array<{
    name: string
    description: string
  }>
  stats?: Array<Record<string, unknown>>
  ctaHeadline?: string
  ctaDescription?: string
  ctaPrimaryButtonText?: string
  ctaPrimaryButtonLink?: string
  ctaCards?: ContactCard[]
  manufacturersSectionLabel?: string
  manufacturersSectionTitle?: string
  manufacturersSectionDescription?: string
  manufacturersLinkText?: string
}

type ContactPageContent = {
  showEmergencySupport?: boolean
  heroHeading?: string
  heroSubtext?: string
  contactInfoTitle?: string
  businessHours?: string
  emergencyLabel?: string
  emergencyNote?: string
  formTitle?: string
  formSubtext?: string
  contactReasons?: string[]
  submitButtonText?: string
  submittingText?: string
  successMessage?: string
  successDescription?: string
  errorMessage?: string
  errorDescription?: string
}

export type Manufacturer = {
  _id: string
  name: string
  slug: string
  logo?: NullableSanityImageSource
  logoUrl?: string
  description?: string
  website?: string
}

type ManufacturersPageContent = {
  heroHeading?: string
  heroSubtext?: string
  ctaHeading?: string
  ctaSubtext?: string
  ctaButtonText?: string
  ctaButtonLink?: string
}

async function fetchSanity<T>(query: string, fallback: T): Promise<T> {
  if (!hasSanityConfig) {
    return fallback
  }

  try {
    const result = await client.fetch<T | null>(query)
    return result ?? fallback
  } catch (error) {
    console.warn('Sanity fetch failed; using fallback content.', error)
    return fallback
  }
}

// Query functions
export async function getProducts() {
  return fetchSanity<Product[]>(`
    *[_type == "product"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      features,
      applications,
      image,
      imageUrl,
      certifications
    }
  `, [])
}

export async function getSiteSettings() {
  return fetchSanity<SiteSettings | undefined>(`
    *[_type == "siteSettings"][0] {
      siteName,
      tagline,
      phone,
      email,
      salesEmail,
      billingEmail,
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
  `, undefined)
}

export async function getIndustries() {
  return fetchSanity<Industry[]>(`
    *[_type == "industry"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      challenges,
      solutions,
      image,
      imageUrl
    }
  `, [])
}

export async function getTestimonials(featured?: boolean) {
  const filter = featured ? ' && featured == true' : ''
  return fetchSanity<Testimonial[]>(`
    *[_type == "testimonial"${filter}] {
      _id,
      quote,
      author,
      title,
      company,
      image,
      featured
    }
  `, [])
}

export async function getAboutPage() {
  return fetchSanity<AboutPageContent | undefined>(`
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
  `, undefined)
}

export async function getHomePage() {
  return fetchSanity<HomePageContent | undefined>(`
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
  `, undefined)
}

export async function getContactPage() {
  return fetchSanity<ContactPageContent | undefined>(`
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
  `, undefined)
}

export async function getManufacturers() {
  return fetchSanity<Manufacturer[]>(`
    *[_type == "manufacturer"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      logo,
      logoUrl,
      description,
      website
    }
  `, [])
}

export async function getManufacturersPage() {
  return fetchSanity<ManufacturersPageContent | undefined>(`
    *[_type == "manufacturersPage"][0] {
      heroHeading,
      heroSubtext,
      ctaHeading,
      ctaSubtext,
      ctaButtonText,
      ctaButtonLink
    }
  `, undefined)
}
