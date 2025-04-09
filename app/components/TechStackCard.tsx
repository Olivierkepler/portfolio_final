"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { techStack } from "@/app/lib/techData";

export default function TechStackCard() {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Tech Stack
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {techStack.map((tech, idx) => (
            <Link href={`/tech/${tech.slug}`} key={idx}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
                className=" rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-14 h-14 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < tech.level ? "text-yellow-500" : "text-gray-300"}
                        fill={i < tech.level ? "#facc15" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
