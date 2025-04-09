// "use client";

// import { motion } from "framer-motion";
// import Carousel from "../components/Carousel";

// export default function InfoPage() {
//   return (
//     <section className="py-20 px-6 min-h-screen bg-white dark:bg-gray-900">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
//             Information
//           </h1>

// {/*  */}

//           <div className="mb-12">

//             <Carousel
//               slides={[
//                 <div key="slide1" className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//                   <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
//                     About Me Olivier
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     I'm a Computer Science student at Northeastern University with a passion for building innovative web applications and solving complex problems.
//                   </p>
//                 </div>,
//                 <div key="slide2" className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//                   <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
//                     Experience
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     I have experience working with modern web technologies including React, Next.js, and TypeScript. I focus on creating responsive and accessible user interfaces.
//                   </p>
//                 </div>,
//                 <div key="slide3" className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//                   <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
//                     Goals
//                   </h2>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     My goal is to contribute to meaningful projects while continuously learning and growing as a developer. I'm particularly interested in full-stack development and AI applications.
//                   </p>
//                 </div>
//               ]}
//               autoPlayInterval={6000}
//             />
//           </div>

          

//           <div className="space-y-8">
//             <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
//                 Contact Details
//               </h2>
//               <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                 <li>Email: contact@olivierkepler.com</li>
//                 <li>Location: Boston, MA</li>
//                 <li>Available for: Full-time positions & Freelance projects</li>
//               </ul>
//             </div>

//             <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
//                 Education
//               </h2>
//               <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                 <li>B.S. in Computer Science - Northeastern University</li>
//                 <li>Minor in Mathematics</li>
//                 <li>Expected Graduation: 2025</li>
//               </ul>
//             </div>

//             <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
//                 Languages
//               </h2>
//               <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                 <li>English (Fluent)</li>
//                 <li>French (Native)</li>
//                 <li>Haitian Creole (Native)</li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// } 