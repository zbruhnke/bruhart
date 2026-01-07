import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '7fzguk2o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

async function cleanup() {
  console.log('🧹 Cleaning up duplicate products...\n')

  // Fetch all products with their creation dates
  const products = await client.fetch(`
    *[_type == "product"] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      _createdAt
    }
  `)

  console.log(`Found ${products.length} total products\n`)

  // Group by slug
  const grouped: Record<string, any[]> = {}
  for (const product of products) {
    const key = product.slug || product.name
    if (!grouped[key]) {
      grouped[key] = []
    }
    grouped[key].push(product)
  }

  // Find duplicates (keep the newest, delete the older ones)
  const toDelete: string[] = []

  for (const [slug, items] of Object.entries(grouped)) {
    if (items.length > 1) {
      // Sort by creation date ascending (oldest first)
      items.sort((a, b) => new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime())

      // Keep the last one (newest), mark others for deletion
      const duplicates = items.slice(0, -1)
      for (const dup of duplicates) {
        toDelete.push(dup._id)
        console.log(`Will delete: "${dup.name}" (created ${dup._createdAt})`)
      }
      console.log(`Keeping: "${items[items.length - 1].name}" (created ${items[items.length - 1]._createdAt})\n`)
    }
  }

  if (toDelete.length === 0) {
    console.log('✅ No duplicates found!')
    return
  }

  console.log(`\nDeleting ${toDelete.length} duplicate(s)...`)

  // Delete duplicates
  for (const id of toDelete) {
    try {
      await client.delete(id)
      console.log(`✅ Deleted: ${id}`)
    } catch (error) {
      console.error(`❌ Error deleting ${id}:`, error)
    }
  }

  console.log('\n🎉 Cleanup complete!')
}

cleanup().catch(console.error)
