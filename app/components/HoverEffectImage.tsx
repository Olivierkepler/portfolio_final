"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HoverEffectImageProps {
  src: string;
  alt?: string;
  overlayTitle?: string;
  overlayText?: string;
}

export default function HoverEffectImage({
  src,
  alt = "Image",
  overlayTitle = "Isa Dev",
  overlayText = "Full-Stack Developer",
}: HoverEffectImageProps) {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-xl group shadow-lg">
      {/* Image */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="object-cover w-full h-full transition duration-300"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold">{overlayTitle}</h3>
          <p className="text-sm opacity-80">{overlayText}</p>
          <button className="mt-4 px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-orange-300 transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
