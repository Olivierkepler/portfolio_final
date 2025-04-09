import { notFound } from 'next/navigation'
import { works } from '@/app/data/workData'

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const work = works.find(w => w.slug === params.slug)

  if (!work) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">{work.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{work.year}</p>

      {work.image && (
        <img src={work.image} alt={work.title} className="rounded-xl w-full h-64 object-cover mb-6" />
      )}

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
        <p>{work.body}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {work.tech.map(tech => (
          <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
