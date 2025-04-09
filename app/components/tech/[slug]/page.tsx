import { notFound } from 'next/navigation'
import { techLevels, techIcons } from '@/app/components/data/techData'

type Project = {
  name: string
  tech: string[]
  description: string
  link: string
}

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/projects.json`)
  return res.json()
}

export default async function TechPage({ params }: { params: { slug: string } }) {
  const techName = decodeURIComponent(params.slug.replace(/-/g, ' '))
  const level = techLevels[techName]
  const icon = techIcons[techName]

  if (!level || !icon) notFound()

  const projects = await getProjects()
  const related = projects.filter((proj) => proj.tech.includes(techName))

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 text-center">
        <img src={icon} alt={techName} className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{techName}</h1>
        <p className="text-sm mb-6">
          Experience Level: <span className="font-semibold">{level}</span>
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects using {techName}</h2>

        {related.length > 0 ? (
          <ul className="space-y-4 text-left">
            {related.map((proj, i) => (
              <li key={i}>
                <p className="font-semibold">{proj.name}</p>
                <p className="text-sm text-gray-500">{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View project
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No projects found using this technology.</p>
        )}
      </div>
    </div>
  )
}
