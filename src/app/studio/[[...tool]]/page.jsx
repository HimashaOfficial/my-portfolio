'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig, defineType, defineField } from 'sanity'
import { structureTool } from 'sanity/structure'

// 1. Projects Schema
const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category Badge (e.g. App Development, WordPress)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'image', title: 'Project Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'technologies', title: 'Technologies (Tags)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'demoLink', title: 'Live Demo URL', type: 'url' }),
    defineField({ name: 'githubLink', title: 'GitHub URL', type: 'url' }),
  ],
})

// 2. Education Schema
const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Degree / Course Title', type: 'string' }),
    defineField({ name: 'institution', title: 'Institution / University', type: 'string' }),
    defineField({ name: 'year', title: 'Year / Duration (e.g. 2024 - Present)', type: 'string' }),
    defineField({ name: 'badge', title: 'Badge Text (e.g. Present • Currently Reading)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})

// 3. Skills Schema
const skillType = defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Skill Name', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})

// 4. Services Schema
const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Name', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
  ],
})

// 5. Hero & About Section (Single Main Settings Document)
const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Hero & About Details',
  type: 'document',
  fields: [
    defineField({ name: 'heroName', title: 'Hero Name', type: 'string' }),
    defineField({ name: 'heroBadge', title: 'Hero Badge Text', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Bio / Description', type: 'text' }),
    defineField({ name: 'profileImage', title: 'Profile Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutParagraph1', title: 'About Paragraph 1', type: 'text' }),
    defineField({ name: 'aboutParagraph2', title: 'About Paragraph 2', type: 'text' }),
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
    types: [siteSettingsType, projectType, educationType, skillType, serviceType],
  },
})

export default function StudioPage() {
  return <NextStudio config={config} />
}