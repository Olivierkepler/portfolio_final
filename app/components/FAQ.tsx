'use client';

import React, { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';

const faqs = [
  {
    question: 'What are your core technical skills?',
    answer:
      'I’m proficient in Python, Java, C++, HTML/CSS, and MySQL. I also have hands-on experience with React.js, MATLAB, AutoCAD, and Fusion 360.',
  },
  {
    question: 'What kind of projects have you worked on?',
    answer:
      'I’ve conducted research on urban air quality using Python, mentored 60+ students in math, and supported operations at MGH and Suffolk Construction.',
  },
  {
    question: 'What languages do you speak?',
    answer:
      'I speak English, French, and Haitian Creole — fluently and professionally.',
  },
  {
    question: 'Are you open to internships or collaboration?',
    answer:
      'Yes! I’m actively seeking opportunities to grow through internships, research, and collaborative tech projects.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto py-20 "> 
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-800 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {faq.question}
              <IconChevronDown
                className={`transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600 dark:text-gray-300 border-t bg-gray-50 dark:bg-gray-900">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
