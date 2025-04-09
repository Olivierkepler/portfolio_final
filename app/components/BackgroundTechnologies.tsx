'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface OrbitingTechnology {
  name: string
  icon: string
  size: number
  radius: number
  angle: number
  speed: number
}

const ICONS: Record<string, string> = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
  TailwindCSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
}

const INITIAL_TECHS: Omit<OrbitingTechnology, 'radius' | 'angle' | 'speed'>[] = [
  { name: 'React', icon: ICONS.React, size: 36 },
  { name: 'TypeScript', icon: ICONS.TypeScript, size: 34 },
  { name: 'Node.js', icon: ICONS['Node.js'], size: 36 },
  { name: 'Python', icon: ICONS.Python, size: 36 },
  { name: 'JavaScript', icon: ICONS.JavaScript, size: 38 },
  { name: 'Next.js', icon: ICONS['Next.js'], size: 38 },
  { name: 'TailwindCSS', icon: ICONS.TailwindCSS, size: 34 },
  { name: 'MongoDB', icon: ICONS.MongoDB, size: 36 },
  { name: 'Git', icon: ICONS.Git, size: 33 },
  { name: 'AWS', icon: ICONS.AWS, size: 36 },
]

// Controls how often the orbit is updated (in ms)
const ORBIT_UPDATE_INTERVAL = 30
// Base distance from center for orbiting icons
const BASE_RADIUS = 150
// Lower this for slower movement
const ANGLE_STEP = 0.005

export default function BackgroundTechnologies({ height = 800 }: { height?: number }) {
  const [center, setCenter] = useState<{ x: number; y: number } | null>(null)
  const [techs, setTechs] = useState<OrbitingTechnology[]>([])

  useEffect(() => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    const centerX = screenWidth / 2
    const centerY = (height ?? screenHeight) / 2
    setCenter({ x: centerX, y: centerY })

    const spaced = INITIAL_TECHS.map((tech, i) => ({
      ...tech,
      radius: BASE_RADIUS + i * 30,
      angle: Math.random() * Math.PI * 2,
      speed: ANGLE_STEP + Math.random() * 0.003, // slower and slightly varied
    }))

    setTechs(spaced)

    const interval = setInterval(() => {
      setTechs(prev =>
        prev.map(tech => ({
          ...tech,
          angle: tech.angle + tech.speed,
        }))
      )
    }, ORBIT_UPDATE_INTERVAL)

    return () => clearInterval(interval)
  }, [height])

  if (!center || techs.length === 0) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ height }}>
      {techs.map((tech, i) => {
        const x = center.x + tech.radius * Math.cos(tech.angle)
        const y = center.y + tech.radius * Math.sin(tech.angle)

        return (
          <motion.div
            key={`${tech.name}-${i}`}
            animate={{ x, y }}
            transition={{ duration: ORBIT_UPDATE_INTERVAL / 1000, ease: 'linear' }}
            className="absolute"
            whileHover={{ scale: 1.2 }}
          >
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
              <img
                src={tech.icon}
                alt={tech.name}
                width={tech.size}
                height={tech.size}
                referrerPolicy="no-referrer"
                className="object-contain"
              />
              <span className="text-sm text-gray-400 dark:text-white font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
