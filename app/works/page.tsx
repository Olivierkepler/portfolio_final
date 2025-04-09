'use client'

import { useState } from 'react'
import { works } from '@/app/data/workData'
import WorkCard from '@/app/components/WorkCard'
import TagFilter from '@/app/components/TagFilter'

export default function WorksPage() {
  const allTags = Array.from(new Set(works.flatMap(work => work.tags || [])))
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredWorks = selectedTag
    ? works.filter(work => work.tags?.includes(selectedTag))
    : works

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Projects & Experience
      </h1>

      <TagFilter tags={allTags} selectedTag={selectedTag} onSelect={setSelectedTag} />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWorks.map(work => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No projects match the selected tag.
        </p>
      )}
    </section>
  )
}
