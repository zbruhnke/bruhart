import { createClient } from '@sanity/client'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: '.env.local' })

const client = createClient({
  projectId: '7fzguk2o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

const timeline = [
  { _key: 'timeline1', year: '1980', title: 'Industry Roots', description: 'Dana Bruhnke starts his career at Southern Steel, beginning 45+ years in the fence and gate industry.' },
  { _key: 'timeline2', year: '1985', title: 'Building Expertise', description: 'Joins Jamieson Fence (now Master Halco), spending decades becoming one of the industry\'s foremost experts in gate fabrication.' },
  { _key: 'timeline3', year: '2010s', title: 'Wholesale Distribution', description: 'Founds Premier Access, building relationships with manufacturers and contractors across the country.' },
  { _key: 'timeline4', year: '2020', title: 'DCB Perimeter', description: 'Launches DCB Perimeter, continuing to serve the industry with quality products and expert guidance.' },
  { _key: 'timeline5', year: '2025', title: 'Bru-Hart Launches', description: 'Dana partners with a new generation to launch Bru-Hart Industries, focused on high-security and critical infrastructure.' },
]

async function updateTimeline() {
  try {
    console.log('Updating timeline in Sanity...')

    // Find the aboutPage document
    const aboutPage = await client.fetch(`*[_type == "aboutPage"][0]`)

    if (!aboutPage) {
      console.log('No aboutPage document found. Creating one...')
      await client.create({
        _type: 'aboutPage',
        timeline: timeline,
      })
    } else {
      console.log('Updating existing aboutPage...')
      await client.patch(aboutPage._id)
        .set({ timeline: timeline })
        .commit()
    }

    console.log('Timeline updated successfully!')
    console.log('New timeline:')
    timeline.forEach(t => console.log(`  ${t.year}: ${t.title}`))
  } catch (error) {
    console.error('Error updating timeline:', error.message)
    process.exit(1)
  }
}

updateTimeline()
