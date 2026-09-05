'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
// schemaTypes (index.js) එක import කරගැනීම
import { schemaTypes } from '../../sanity/schemaTypes'

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'etwo8ozb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Portfolio Admin Studio',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes, // index.js එකේ තියෙන portfolio schema එක මෙතැනට pass වේ
  },
})

export default function StudioPage() {
  return <NextStudio config={config} />
}