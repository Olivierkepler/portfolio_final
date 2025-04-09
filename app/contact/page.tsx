'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative isolate bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Whether you have a project idea, question, or just want to connect — I’d love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 space-y-8 border border-gray-200 dark:border-white/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2.5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="peer w-full px-4 pt-5 pb-2 border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2.5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
            className="peer w-full px-4 pt-5 pb-3 border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Message"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-2.5 text-sm text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm"
          >
            Your Message
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-md shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-500 font-medium mt-4"
          >
            ✅ Message sent! I’ll be in touch shortly.
          </motion.p>
        )}
      </form>

      {/* Decorative gradient background shape */}
      <div
        aria-hidden="true"
        className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px] opacity-20"
      />
    </section>
  );
}
