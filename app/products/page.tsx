'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Smart Budget App',
    description: 'Track your finances effortlessly with gamified budgeting.',
    image: '/products/budget-app.png',
    href: '/products/budget-app'
  },
  {
    name: 'Virtual Try-On',
    description: 'Use AI to see how clothes look on you in real time.',
    image: '/products/virtual-tryon.png',
    href: '/products/virtual-tryon'
  },
  {
    name: 'AI Resume Builder',
    description: 'Generate powerful resumes tailored to any job in minutes.',
    image: '/products/resume-builder.png',
    href: '/products/resume-builder'
  }
];

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6 md:px-12">
      {/* <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Products</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover innovative solutions designed to make life easier, smarter, and more inspiring.
        </p>
      </div> */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <Link href={product.href} className="block h-full">
              <div className="relative w-full h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {product.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
