import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// Fetch Brands / Companies Data from Sanity
export async function getBrands() {
  const query = `*[_type == "brand"] | order(_createdAt asc) {
    _id,
    brandName,
    role
  }`
  return await client.fetch(query)
}

// Fetch Portfolio / Bio Data from Sanity
export async function getPortfolioData() {
  const query = `*[_type == "portfolio"][0] {
    heroBadge,
    heroName,
    heroDescription,
    aboutParagraph1,
    aboutParagraph2,
    brands[] {
      brandName,
      role
    }
  }`
  return await client.fetch(query)
}