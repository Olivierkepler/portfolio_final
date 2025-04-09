export type WorkItem = {
    slug: string
    title: string
    description: string
    tech: string[]
    year: string
    body: string
    image?: string
    tags?: string[]
  }
  
  export const works: WorkItem[] = [
    {
      slug: 'portfolio-website',
      title: 'Personal Portfolio Website',
      description: 'Showcase site built with Next.js and Tailwind CSS.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      year: '2024',
      body: 'This portfolio demonstrates dynamic routing, dark mode, motion, and a custom design system.',
      image: 'https://images.unsplash.com/photo-1581093588401-115d17e42f7e?auto=format&fit=crop&w=900&q=80',
      tags: ['Web Dev', 'Portfolio'],
    },
    {
      slug: 'hope-mentorship',
      title: 'Math Gateway Specialist – HOPE Initiative',
      description: 'Mentored 60+ students and led weekly academic support sessions.',
      tech: ['Mentorship', 'Education'],
      year: '2022',
      body: 'Led student tutoring sessions and managed resources to help students succeed in math.',
      image: 'https://images.unsplash.com/photo-1584697964191-458d9b5c1bde?auto=format&fit=crop&w=900&q=80',
      tags: ['Education', 'Outreach']
    }
  ]
  