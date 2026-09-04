export default {
  name: 'portfolio',
  title: 'Portfolio Content',
  type: 'document',
  fields: [
    // ---------------- HERO SECTION ----------------
    {
      name: 'heroSubtitleBadge',
      title: 'Hero Badge Text',
      type: 'string',
      initialValue: 'Digital Creator & Developer'
    },
    { 
      name: 'heroTitleName', 
      title: 'Hero Full Name', 
      type: 'string',
      initialValue: 'Himasha Keshana Rathnayaka'
    },
    { 
      name: 'heroDescription', 
      title: 'Hero Description Text', 
      type: 'text',
      initialValue: 'Founder of Virtmex and VarixWare. Combining software engineering, WordPress development, graphic design, and video editing with AI-driven workflows to craft powerful digital solutions.'
    },
    { 
      name: 'profileImage', 
      title: 'Hero Profile Image', 
      type: 'image', 
      options: { hotspot: true } 
    },

    // ---------------- ABOUT SECTION ----------------
    { 
      name: 'aboutParagraph1', 
      title: 'About Paragraph 1', 
      type: 'text',
      initialValue: 'I am an Information Technology student, Digital Creator, and the Founder of Virtmex and VarixWare. My focus spans web engineering, custom software solutions, app development, and high-impact digital media.'
    },
    { 
      name: 'aboutParagraph2', 
      title: 'About Paragraph 2', 
      type: 'text',
      initialValue: 'By combining modern software architecture with intuitive UI design and AI-driven workflows, I craft scalable products tailored to solve real-world challenges with precision and speed.'
    },
    {
      name: 'brands',
      title: 'Brands / Companies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Brand Name', type: 'string' },
            { name: 'role', title: 'Role / Designation', type: 'string' }
          ]
        }
      ]
    },

    // ---------------- EDUCATION SECTION ----------------
    {
      name: 'education',
      title: 'Education & Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'badge', title: 'Badge Text (e.g. Present • Currently Reading / 2024 - 2025)', type: 'string' },
            { name: 'institutionTag', title: 'Institution Tag (e.g. UCSC, IMBS Campus)', type: 'string' },
            { name: 'degreeTitle', title: 'Degree / Course Title', type: 'string' },
            { name: 'instituteFullName', title: 'Institute Full Name', type: 'string' },
            { name: 'isCurrent', title: 'Is Current / Highlighted?', type: 'boolean' }
          ]
        }
      ]
    },

    // ---------------- SKILLS SECTION ----------------
    {
      name: 'skills',
      title: 'Skills & Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Skill Name', type: 'string' },
            { name: 'description', title: 'Skill Description', type: 'text' },
            { name: 'iconName', title: 'Lucide Icon Name (e.g. Code2, Globe, Video)', type: 'string' }
          ]
        }
      ]
    },

    // ---------------- SERVICES SECTION ----------------
    {
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Service Name', type: 'string' },
            { name: 'description', title: 'Service Description', type: 'text' },
            { name: 'iconName', title: 'Lucide Icon Name', type: 'string' }
          ]
        }
      ]
    },

    // ---------------- FEATURED PROJECTS SECTION ----------------
    {
      name: 'projects',
      title: 'Featured Software Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Project Title', type: 'string' },
            { name: 'category', title: 'Category Badge (e.g. App Development, WordPress)', type: 'string' },
            { name: 'description', title: 'Project Description', type: 'text' },
            { name: 'image', title: 'Project Image / Logo', type: 'image', options: { hotspot: true } },
            { name: 'iconName', title: 'Lucide Icon Name (if no image)', type: 'string' },
            { name: 'tags', title: 'Tags List', type: 'array', of: [{ type: 'string' }] }
          ]
        }
      ]
    },

    // ---------------- CONTACT INFORMATION ----------------
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number (without + symbol)',
      type: 'string',
      initialValue: '94750434734'
    },
    {
      name: 'emailAddress',
      title: 'Contact Email Address',
      type: 'string',
      initialValue: 'himashakeshana.official@gmail.com'
    }
  ]
}