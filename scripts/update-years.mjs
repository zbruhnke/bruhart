import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load from .env.local (Next.js convention)
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

async function updateYears() {
  console.log('Updating years from 40+ to 45+ in Sanity...\n')

  // 1. Update siteSettings
  console.log('1. Checking siteSettings...')
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{ _id, stats }`)
  if (siteSettings?.stats?.yearsInBusiness === '40+') {
    await client.patch(siteSettings._id)
      .set({ 'stats.yearsInBusiness': '45+' })
      .commit()
    console.log('   Updated siteSettings.stats.yearsInBusiness to 45+')
  } else {
    console.log('   siteSettings stats already correct or not found')
  }

  // 2. Update homePage hero stats
  console.log('\n2. Checking homePage heroStats...')
  const homePage = await client.fetch(`*[_type == "homePage"][0]{ _id, heroStats }`)
  if (homePage?.heroStats) {
    const updatedStats = homePage.heroStats.map(stat => {
      if (stat.value === '40+' && stat.label?.toLowerCase().includes('year')) {
        return { ...stat, value: '45+' }
      }
      return stat
    })
    await client.patch(homePage._id)
      .set({ heroStats: updatedStats })
      .commit()
    console.log('   Updated homePage heroStats')
  } else {
    console.log('   No heroStats found on homePage')
  }

  // 3. Update homePage certifications stats
  console.log('\n3. Checking homePage certification stats...')
  const homePageStats = await client.fetch(`*[_type == "homePage"][0]{ _id, stats }`)
  if (homePageStats?.stats) {
    const updatedStats = homePageStats.stats.map(stat => {
      if (stat.value === '40+' && stat.label?.toLowerCase().includes('year')) {
        return { ...stat, value: '45+' }
      }
      return stat
    })
    await client.patch(homePageStats._id)
      .set({ stats: updatedStats })
      .commit()
    console.log('   Updated homePage stats')
  } else {
    console.log('   No stats found on homePage')
  }

  // 4. Update aboutPage timeline
  console.log('\n4. Checking aboutPage timeline...')
  const aboutPage = await client.fetch(`*[_type == "aboutPage"][0]{ _id, timeline, heroHeading }`)
  if (aboutPage?.timeline) {
    const updatedTimeline = aboutPage.timeline.map(item => {
      if (item.year === '1985') {
        return {
          ...item,
          year: '1980',
          description: item.description?.replace('40+', '45+')
        }
      }
      return item
    })
    await client.patch(aboutPage._id)
      .set({ timeline: updatedTimeline })
      .commit()
    console.log('   Updated aboutPage timeline (1985 -> 1980)')
  }

  // Also update heroHeading if it contains 40+
  if (aboutPage?.heroHeading?.includes('40+')) {
    await client.patch(aboutPage._id)
      .set({ heroHeading: aboutPage.heroHeading.replace('40+', '45+') })
      .commit()
    console.log('   Updated aboutPage heroHeading')
  }

  console.log('\nDone!')
}

updateYears().catch(console.error)
