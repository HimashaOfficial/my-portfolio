import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false, // Live update වීම සඳහා CDN Disable කර ඇත
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  if (!source) return null;
  return builder.image(source)
}

// Full Portfolio Data Query from Single Sanity Document
export async function getPortfolioData() {
  const query = `*[_type == "portfolio"][0] {
    heroSubtitleBadge,
    heroTitleName,
    heroDescription,
    "profileImageUrl": profileImage.asset->url,
    aboutParagraph1,
    aboutParagraph2,
    brands[] {
      brandName,
      role
    },
    education[] {
      badge,
      institutionTag,
      degreeTitle,
      instituteFullName,
      isCurrent
    },
    skills[] {
      title,
      description,
      iconName
    },
    services[] {
      title,
      description,
      iconName
    },
    whatsappNumber,
    emailAddress,
    socialLinks
  }`
  return await client.fetch(query)
}

// Fetch Software Projects
export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    type,
    description,
    tags,
    "image": image.asset->url,
    iconType
  }`
  return await client.fetch(query)
}