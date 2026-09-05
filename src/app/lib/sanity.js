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
  if (!source) return null;
  return builder.image(source)
}

// Portfolio Full Data Query (Including Projects Array)
export async function getPortfolioData() {
  const query = `*[_type == "portfolio"][0] {
    heroSubtitleBadge,
    heroTitleName,
    heroDescription,
    "profileImageUrl": profileImage.asset->url,
    aboutParagraph1,
    aboutParagraph2,
    brands[] {
      _key,
      brandName,
      role
    },
    education[] {
      _key,
      badge,
      institutionTag,
      degreeTitle,
      instituteFullName,
      isCurrent
    },
    skills[] {
      _key,
      title,
      description,
      iconName
    },
    services[] {
      _key,
      title,
      description,
      iconName
    },
    projects[] {
      _key,
      title,
      type,
      description,
      tags,
      "image": image.asset->url,
      iconType
    },
    whatsappNumber,
    emailAddress,
    socialLinks
  }`
  return await client.fetch(query)
}