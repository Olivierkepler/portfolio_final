// 'use client'

// import { useEffect, useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion'

// // Project type definition
// type Project = {
//   name: string
//   tech: string[]
//   description: string
//   link: string
// }

// // Categories of technologies
// const techCategories = [
//   {
//     key: 'languages',
//     title: 'Languages',
//     desc: 'Languages I use to build software across platforms.',
//     items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
//   },
//   {
//     key: 'frameworks',
//     title: 'Frameworks & Libraries',
//     desc: 'My go-to tools for scalable and modern app development.',
//     items: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Express'],
//   },
//   {
//     key: 'ml',
//     title: 'Machine Learning / AI',
//     desc: 'ML libraries and frameworks I’ve used in AI projects.',
//     items: ['TensorFlow', 'scikit-learn', 'NumPy'],
//   },
//   {
//     key: 'databases',
//     title: 'Databases',
//     desc: 'Efficient and scalable database technologies I work with.',
//     items: ['MongoDB', 'PostgreSQL', 'MySQL'],
//   },
//   {
//     key: 'tools',
//     title: 'Dev Tools',
//     desc: 'Core tools I use daily for development and deployment.',
//     items: ['Git', 'Docker', 'VS Code', 'Postman'],
//   },
//   {
//     key: 'ui',
//     title: 'UI & Design',
//     desc: 'Design systems and styling tools I use for great UI/UX.',
//     items: ['Tailwind CSS', 'Figma', 'Bootstrap'],
//   },
// ]

// // Experience levels for each technology
// const techLevels: Record<string, 'Beginner' | 'Intermediate' | 'Advanced'> = {
//   JavaScript: 'Advanced',
//   TypeScript: 'Intermediate',
//   Python: 'Advanced',
//   Java: 'Intermediate',
//   C: 'Beginner',
//   React: 'Advanced',
//   'Next.js': 'Advanced',
//   'Spring Boot': 'Intermediate',
//   'Node.js': 'Advanced',
//   Express: 'Advanced',
//   TensorFlow: 'Intermediate',
//   'scikit-learn': 'Beginner',
//   NumPy: 'Intermediate',
//   MongoDB: 'Advanced',
//   PostgreSQL: 'Intermediate',
//   MySQL: 'Intermediate',
//   Git: 'Advanced',
//   Docker: 'Intermediate',
//   'VS Code': 'Advanced',
//   Postman: 'Intermediate',
//   'Tailwind CSS': 'Advanced',
//   Figma: 'Intermediate',
//   Bootstrap: 'Advanced',
// }

// // Icons for each technology
// const techIcons: Record<string, string> = {
//   JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//   TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
//   Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
//   Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
//   C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
//   React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//   'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
//   'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
//   'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//   Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//   TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
//   'scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg',
//   NumPy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
//   MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
//   PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
//   MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
//   Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//   Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
//   'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
//   Postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
//   'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
//   Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
//   Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
// }

// export default function TechCloud() {
//   const [activeTab, setActiveTab] = useState('languages')
//   const [search, setSearch] = useState('')
//   const [selectedTech, setSelectedTech] = useState<string | null>(null)
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     fetch('/projects.json')
//       .then((res) => res.json())
//       .then((data) => setProjects(data))
//   }, [])

//   const currentCategory = techCategories.find((cat) => cat.key === activeTab)
//   const filteredTechList = currentCategory?.items.filter((tech) =>
//     tech.toLowerCase().includes(search.toLowerCase())
//   )

//   const relatedProjects = selectedTech
//     ? projects.filter((proj) => proj.tech.includes(selectedTech))
//     : []

//   return (
//     <section className="bg-gradient-to-br from-[#f9fafb] via-white to-[#f1f5f9] py-28 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
//           Tech Stack
//         </h2>
//         <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-600">
//           My favorite tools, languages, and frameworks that power the software I build.
//         </p>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
//           {techCategories.map((cat) => (
//             <button
//               key={cat.key}
//               onClick={() => {
//                 setActiveTab(cat.key)
//                 setSearch('')
//               }}
//               className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition duration-200 ${
//                 activeTab === cat.key
//                   ? 'bg-gray-900 text-white shadow-lg'
//                   : 'bg-white/80 backdrop-blur border border-gray-300 text-gray-700 hover:bg-white'
//               }`}
//             >
//               {cat.title}
//             </button>
//           ))}
//         </div>

//         {/* Search Bar */}
//         <div className="mb-12 flex justify-center">
//           <input
//             type="text"
//             placeholder="Search tech..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full max-w-md px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-500 text-sm bg-white"
//           />
//         </div>

//         {/* Tech Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab + search}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.4 }}
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
//           >
//             {filteredTechList?.map((tech) => (
//               <div
//                 key={tech}
//                 onClick={() => setSelectedTech(tech)}
//                 className="cursor-pointer group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 transition hover:shadow-xl hover:-translate-y-1 w-40 sm:w-44 md:w-48 lg:w-52"
//               >
//                 <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
//                   <img
//                     src={techIcons[tech]}
//                     alt={tech}
//                     className="max-h-full max-w-full object-contain"
//                   />
//                 </div>
//                 <span className="mt-4 text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-black text-center">
//                   {tech}
//                 </span>
//                 <span
//                   className={`mt-2 inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
//                     techLevels[tech] === 'Advanced'
//                       ? 'bg-green-600 text-white'
//                       : techLevels[tech] === 'Intermediate'
//                       ? 'bg-yellow-500 text-white'
//                       : 'bg-gray-500 text-white'
//                   }`}
//                 >
//                   {techLevels[tech]}
//                 </span>
//               </div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Modal with Related Projects */}
//       {selectedTech && (
//         <div
//           onClick={() => setSelectedTech(null)}
//           className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
//           >
//             <button
//               onClick={() => setSelectedTech(null)}
//               aria-label="Close"
//               title="Close"
//               className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold transition"
//             >
//               &times;
//             </button>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//               Projects using {selectedTech}
//             </h3>
//             <ul className="space-y-4 text-left text-base text-gray-700">
//               {relatedProjects.length > 0 ? (
//                 relatedProjects.map((proj, i) => (
//                   <li key={i}>
//                     <p className="font-semibold">{proj.name}</p>
//                     <p className="text-sm text-gray-500">{proj.description}</p>
//                     <a
//                       href={proj.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-600 hover:underline text-sm"
//                     >
//                       View project
//                     </a>
//                   </li>
//                 ))
//               ) : (
//                 <p>No related projects found.</p>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }
