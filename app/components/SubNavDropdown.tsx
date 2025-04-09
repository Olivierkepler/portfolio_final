'use client'

import { useState } from 'react'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react'
import { Transition } from '@headlessui/react'

const menuPanels = {
  Products: [
    { title: 'Analytics', desc: 'Track user metrics in real time' },
    { title: 'Billing', desc: 'Automate your billing system' },
    { title: 'Security', desc: 'Protect your data with best practices' },
  ],
  Services: [
    { title: 'Consulting', desc: 'Expert guidance for your projects' },
    { title: 'Support', desc: '24/7 support for all users' },
    { title: 'Custom Dev', desc: 'Tailor-made solutions for your team' },
  ],
  Company: [
    { title: 'About', desc: 'Learn more about us' },
    { title: 'Careers', desc: 'Join our team' },
    { title: 'Contact', desc: 'Get in touch with us' },
  ],
}

export default function SubNavMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <div className="relative  w-full z-50 border-white/10">
      {/* Top Navigation */}
      <div className="flex items-center  max-w-2xl mx-auto justify-between  text-black md:justify-center md:space-x-16">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-black"
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
{/* desktop menu */}
<nav className="hidden md:flex items-center gap-8 relative bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-md ring-1 ring-gray-200 dark:ring-white/10 backdrop-blur-sm">
  {Object.keys(menuPanels).map((category) => (
    <div
      key={category}
      className="relative group"
      onMouseEnter={() => setHoveredCategory(category)}
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-orange-500 transition-colors duration-200">
        {category}
        <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>

      {/* Mega Dropdown */}
      <Transition
        show={hoveredCategory === category}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-5xl px-10 py-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl z-40">
          <div className="flex gap-12 divide-x divide-gray-200 dark:divide-white/10">
            {menuPanels[category as keyof typeof menuPanels].map((item) => (
              <div
                key={item.title}
                className="flex-1 px-6 transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-md rounded-md cursor-pointer"
              >
                <p className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  ))}
</nav>


      </div>

      {/* Mobile Fullscreen Overlay */}
      <Transition
        show={isOpen}
        as="div"
        enter="transition ease-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-0 z-50 flex">
          {/* Clickable backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Nav Content */}
          <div className="relative w-72 bg-white text-black p-6 shadow-xl overflow-y-auto z-50">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600"
              aria-label="Close menu"
            >
              <XIcon className="w-5 h-5" />
            </button>

            <div className="space-y-6 mt-10">
              {Object.keys(menuPanels).map((category) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {menuPanels[category as keyof typeof menuPanels].map((item) => (
                      <div key={item.title}>
                        <p className="text-base font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
