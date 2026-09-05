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
          title: 'Brand Item',
          fields: [
            { name: 'brandName', title: 'Brand Name', type: 'string' },
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
          title: 'Education Item',
          fields: [
            { name: 'badge', title: 'Badge Text (e.g. Present • Currently Reading / 2024 - 2025)', type: 'string' },
            { name: 'institutionTag', title: 'Institution Tag (e.g. UCSC, IMBS Campus)', type: 'string' },
            { name: 'degreeTitle', title: 'Degree / Qualification Title', type: 'string' },
            { name: 'instituteFullName', title: 'Institute Full Name', type: 'string' },
            { name: 'isCurrent', title: 'Is Current / Highlighted?', type: 'boolean', initialValue: false }
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
          title: 'Skill Item',
          fields: [
            { name: 'title', title: 'Skill Name', type: 'string' },
            { name: 'description', title: 'Skill Description', type: 'text' },
            { name: 'iconName', title: 'Icon Name (e.g. Code2, Smartphone, Globe, Palette, Video, Cpu)', type: 'string' }
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
          title: 'Service Item',
          fields: [
            { name: 'title', title: 'Service Name', type: 'string' },
            { name: 'description', title: 'Service Description', type: 'text' },
            { name: 'iconName', title: 'Icon Name (e.g. Code2, Globe, Palette, Clapperboard)', type: 'string' }
          ]
        }
      ]
    },

    // ---------------- CONTACT & SOCIAL INFORMATION ----------------
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
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'github', title: 'GitHub URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'tiktok', title: 'TikTok URL', type: 'url' }
      ]
    }
  ]
}