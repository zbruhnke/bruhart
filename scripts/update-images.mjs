import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load from .env.local (Next.js convention)
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // Needs write access
  useCdn: false,
})

async function updateImages() {
  console.log('Updating Sanity with real project images...\n')

  // 1. Update Hero background image
  console.log('1. Updating Hero background image...')
  const homePage = await client.fetch(`*[_type == "homePage"][0]{ _id }`)
  if (homePage) {
    await client.patch(homePage._id)
      .set({ heroBackgroundImageUrl: '/images/bruhart_work/IMG_1287.jpeg' })
      .commit()
    console.log('   Hero updated to IMG_1287.jpeg (crane lifting security panel)\n')
  } else {
    console.log('   No homePage document found, skipping...\n')
  }

  // 2. Update Industry images
  console.log('2. Updating Industry images...')
  const industryImageMap = {
    'data-centers': { url: '/images/bruhart_work/IMG_1910.jpeg', desc: 'louvered gate with bollards' },
    'airports': { url: '/images/bruhart_work/IMG_4029.jpeg', desc: 'high-security perimeter' },
    'utilities': { url: '/images/bruhart_work/IMG_1453.jpeg', desc: 'black perforated screening' },
    'government': { url: '/images/bruhart_work/IMG_1976.jpeg', desc: 'palisade gate with anti-climb' },
    'ports': { url: '/images/bruhart_work/IMG_4010.jpeg', desc: 'gates on transport' },
    'corporate': { url: '/images/bruhart_work/IMG_1905.jpeg', desc: 'finished louvered gate' },
  }

  const industries = await client.fetch(`*[_type == "industry"]{ _id, name, "slug": slug.current }`)

  for (const industry of industries) {
    const mapping = industryImageMap[industry.slug]
    if (mapping) {
      await client.patch(industry._id)
        .set({ imageUrl: mapping.url })
        .commit()
      console.log(`   ${industry.name}: ${mapping.desc}`)
    }
  }

  console.log('\nDone! Run `npm run dev` to preview the changes locally.')
}

updateImages().catch(console.error)
