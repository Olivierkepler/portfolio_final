'use client';

import { useState } from 'react';
import { Phone, Mail, X } from 'lucide-react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <main className="relative">
      <div className="text-white py-3 px-6 sm:px-12 bg-black/40 backdrop-blur-md  border-white/10">
        <div className="flex justify-end ">
          {/* Contact Info */}
          <div className="flex gap-4 justify-center items-center space-x-6 sm:text-base">
            {/* Phone */}
            <div className="flex items-center cursor-pointer gap-2 hover:text-orange-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(617) 380-8053</span>
            </div>

            {/* Divider */}
            <span className="hidden sm:inline text-gray-400 mx-2">|</span>

            {/* Email */}
            <div className="flex items-center cursor-pointer gap-2 hover:text-orange-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>olivierkfrancois1@gmail.com</span>
            </div>
          </div>

          {/* Close Button
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white hover:text-orange-400 transition cursor-pointer"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </main>
  );
}
