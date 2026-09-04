'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig, defineType, defineField } from 'sanity'
import { structureTool } from 'sanity/structure'

// 1. Projects Schema Definition
const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'technologies', title: 'Technologies (Tags)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'demoLink', title: 'Live Demo URL', type: 'url' }),
    defineField({ name: 'githubLink', title: 'GitHub URL', type: 'url' }),
  ],
})

// 2. Education Schema Definition
const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Degree / Course Title', type: 'string' }),
    defineField({ name: 'institution', title: 'Institution / University', type: 'string' }),
    defineField({ name: 'year', title: 'Year / Duration (e.g. 2023 - Present)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})

// Sanity Studio Configuration
const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'etwo8ozb',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Portfolio Admin Studio',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: [projectType, educationType],
  },
})

export default function StudioPage() {
  return <NextStudio config={config} />
}