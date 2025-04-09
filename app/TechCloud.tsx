'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { techIcons, techLevels } from './components/data/techData'

type Project = {
  name: string
  tech: string[]
  description: string
  link: string
}

const techCategories = [
  {
    key: 'languages',
    title: 'Languages',
    desc: 'Languages I use to build software across platforms.',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
  },
  {
    key: 'frameworks',
    title: 'Frameworks & Libraries',
    desc: 'My go-to tools for scalable and modern app development.',
    items: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Express'],
  },
  {
    key: 'ml',
    title: 'Machine Learning / AI',
    desc: 'ML libraries and frameworks I’ve used in AI projects.',
    items: ['TensorFlow', 'scikit-learn', 'NumPy'],
  },
  {
    key: 'databases',
    title: 'Databases',
    desc: 'Efficient and scalable database technologies I work with.',
    items: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    key: 'tools',
    title: 'Dev Tools',
    desc: 'Core tools I use daily for development and deployment.',
    items: ['Git', 'Docker', 'VS Code', 'Postman'],
  },
  {
    key: 'ui',
    title: 'UI & Design',
    desc: 'Design systems and styling tools I use for great UI/UX.',
    items: ['Tailwind CSS', 'Figma', 'Bootstrap'],
  },
]

export default function TechCloud() {
  const [activeTab, setActiveTab] = useState('languages')
  const [search, setSearch] = useState('')

  const currentCategory = techCategories.find((cat) => cat.key === activeTab)
  const filteredItems = currentCategory?.items.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="bg-gradient-to-br from-[#f9fafb] via-white to-[#f1f5f9] py-28 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Tech Stack
        </h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          My favorite tools, languages, and frameworks that power the software I build.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {techCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveTab(cat.key)
                setSearch('')
              }}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition duration-200 ${
                activeTab === cat.key
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur border border-gray-300 text-gray-700 hover:bg-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-500 text-sm bg-white"
          />
        </div>

        {/* Tech Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + search}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          >
            {filteredItems?.map((tech) => {
              const slug = encodeURIComponent(tech.replace(/\s/g, '-'))
              return (
                <Link
                  href={`/tech/${slug}`}
                  key={tech}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 transition hover:shadow-xl hover:-translate-y-1 w-40 sm:w-44 md:w-48 lg:w-52 cursor-pointer"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-black text-center">
                    {tech}
                  </span>
                  <span
                    className={`mt-2 inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                      techLevels[tech] === 'Advanced'
                        ? 'bg-green-600 text-white'
                        : techLevels[tech] === 'Intermediate'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {techLevels[tech]}
                  </span>
                </Link>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
