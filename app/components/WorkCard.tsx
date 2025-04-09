'use client'

import Link from 'next/link'
import { WorkItem } from '@/app/data/workData'
import { motion } from 'framer-motion'

export default function WorkCard({ work }: { work: WorkItem }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0px 8px 24px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
    >
      <Link href={`/works/${work.slug}`} className="block h-full">
        {work.image && (
          <img src={work.image} alt={work.title} className="w-full h-40 object-cover" />
        )}
        <div className="p-5 space-y-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{work.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{work.description}</p>

          {work.tags && (
            <div className="flex flex-wrap gap-2">
              {work.tags.map(tag => (
                <span key={tag} className="bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-white text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {work.tech.map(tech => (
              <span key={tech} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
