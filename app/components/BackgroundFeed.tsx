'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaThumbsUp, FaCheck } from 'react-icons/fa';

type TimelineEvent = {
  icon: 'user' | 'thumbs-up' | 'check';
  content: string;
  date: string;
  description: string;
  image: string;
  imageRight: string;
};

const timelineData: TimelineEvent[] = [
  {
    icon: 'user',
    content: 'Started B.S. in Computer Science at UMass Boston',
    date: 'Sep 2023',
    description: 'Began studies in software engineering, algorithms, and robotics.',
    image: '/olivier_logo.png',
    imageRight: '/brigham_logo.png',
  },
  {
    icon: 'thumbs-up',
    content: 'Joined World Vision International as Personal Assistant',
    date: 'May 2024',
    description: 'Assisting in executive operations, scheduling, and communications.',
    image: '/umb_logo1.jpg',
    imageRight: '/BunkerHillLogo.jpg',
  },
  {
    icon: 'check',
    content: 'Built Budgeting Game Web App with Next.js & Tailwind CSS',
    date: 'Aug 2024',
    description: 'Created a gamified financial tracker using modern web technologies.',
    image: '/brigham_logo.png',
    imageRight: '/meAvatar.webp',
  },
  {
    icon: 'thumbs-up',
    content: 'Applied to Hack.Diversity Fellowship Program',
    date: 'Jan 2025',
    description: 'Aiming to grow through mentorship, networking, and career training.',
    image: '/northeastern_logo.png',
    imageRight: '/Northeastern_logo.png',
  },
  {
    icon: 'check',
    content: 'Preparing for REU and graduate studies in Robotics',
    date: 'Mar 2025',
    description: 'Focusing on research experience and grad school in robotics and AI.',
    image: '/BunkerHillLogo.jpg',
    imageRight: '/umb_logo1.jpg',
  },
];

const iconMap = {
  user: <FaUser className="text-white" />,
  'thumbs-up': <FaThumbsUp className="text-white" />,
  check: <FaCheck className="text-white" />,
};

const iconColorMap = {
  user: 'bg-gray-600',
  'thumbs-up': 'bg-blue-600',
  check: 'bg-green-600',
};

export default function ProfessionalTimeline() {
  const [isOpenAll, setIsOpenAll] = useState(false);

  return (
    <section className="w-full px-6 py-20 bg-[#0f172a] text-white flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-6xl mb-16 px-4">
        <h2 className="text-4xl font-bold tracking-tight">
          📌 <span className="text-indigo-400">Professional Journey</span>
        </h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpenAll(prev => !prev)}
          className="text-sm px-5 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-500 transition"
        >
          {isOpenAll ? 'Collapse All' : 'Expand All'}
        </motion.button>
      </div>

      <div className="relative w-full max-w-6xl flex flex-col gap-10">
        <div className="absolute top-10 left-5 sm:left-14 bottom-0 w-0.5 bg-white/10 z-0" />

        {timelineData.map((event, index) => (
          <TimelineCard
            key={index}
            event={event}
            isOpenAll={isOpenAll}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineCard({
  event,
  isOpenAll,
  index,
}: {
  event: TimelineEvent;
  isOpenAll: boolean;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(index === 0);
  const isOpen = isOpenAll || isHovered;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-4 group"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0.4 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`absolute left-[-36px] sm:left-[-44px] top-0 w-10 h-10 rounded-full ring-4 ring-white flex items-center justify-center ${iconColorMap[event.icon]} shadow-lg z-10`}
      >
        {iconMap[event.icon]}
      </motion.div>

      {/* Left Card */}
      <motion.div
        className="ml-4 sm:ml-6  w-full bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg transition-all duration-300 sm:w-3/4  "
      ><div>
         
      </div>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <p className="text-base font-semibold hover:text-indigo-300 transition">
            {highlightNames(event.content)}
          </p>
          <span className="text-xs text-white/70 mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">
            {event.date}
          </span>
        </div>

        <div
          className={`text-sm text-white mt-2 leading-relaxed transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {event.description}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: isOpen ? 0 : 50,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full sm:w-1/4 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden sm:block'
        }`}
      >
      <div className="w-full h-5 object-cover">
      <img
          src={event.imageRight}
          alt={event.content}
          className="max-w-full max-h-32 mt-2 rounded-full" />
      </div>
      </motion.div>
    </motion.div>
  );
}

function highlightNames(content: string) {
  return content.split(' ').map((word, i) =>
    /^[A-Z][a-zA-Z]+/.test(word) ? (
      <strong key={i} className="text-white font-semibold">
        {word + ' '}
      </strong>
    ) : (
      word + ' '
    )
  );
}
