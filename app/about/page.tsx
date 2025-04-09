'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="relative">
            <Image
              src="/meAvatar.webp"
              alt="Portrait"
              width={500}
              height={500}
              className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px] shadow-xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Hi, I'm Olivier — a full-stack developer and creative technologist dedicated to building
              accessible, performant, and beautifully designed web experiences. I enjoy merging code
              with creativity to deliver engaging solutions for real-world problems.
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">💡</span>
                <div>
                  <strong>Innovator:</strong> Whether it’s a budgeting game or AI-powered try-on, I create tools that spark change.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">🚀</span>
                <div>
                  <strong>Technologist:</strong> Passionate about AI, machine learning, WebAR, and 3D interactivity.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 text-xl">🤝</span>
                <div>
                  <strong>Community-Focused:</strong> I strive to build inclusive products that empower and uplift others.
                </div>
              </li>
            </ul>

            <Link
              href="/resume/olivier_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              <Download size={18} /> Download Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10">
            My Toolbox
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Next.js", "React", "Tailwind CSS", "Three.js", "Python", "TensorFlow"].map((tool, idx) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow hover:shadow-md transition text-center"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{tool}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Modern web tech I use regularly</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
