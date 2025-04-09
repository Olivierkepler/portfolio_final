'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/app/lib/techData';

export default function TechPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Technology Stack
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-12 h-12"
                />
                <div>
                  <h2 className="text-xl font-semibold">{tech.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{tech.category}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="h-full bg-orange-300 rounded-full"
                    style={{ width: `${(tech.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
