'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselProps {
  slides: React.ReactNode[]
  autoPlayInterval?: number
}

export default function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1)
  }, [slides.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === ' ') setIsPaused(prev => !prev)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrevious])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => handleNext(), autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlayInterval, handleNext, isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrevious()
    }

    setTouchStart(null)
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >


      <AnimatePresence mode="wait">
  <motion.div
    key={currentIndex}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.6,
    }}
    className="relative w-full"
  >
    <div className="z-10 w-full">{slides[currentIndex]}</div>
  </motion.div>
</AnimatePresence>

      {/* <AnimatePresence mode="wait">
        <motion.div
          // key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            type: "tween"
          }}
          className="w-full relative" // Ensures slide content is clickable
        >
         <div className='w-full z-[100]   '>{slides[currentIndex]}</div>
        </motion.div>
      </AnimatePresence> */}

      {/* Navigation Buttons */}
      <div className="absolute inset-0 z-20 flex items-center justify-between p-4 pointer-events-none">
        <button 
          onClick={handlePrevious}
          className="pointer-events-auto  cursor-pointer  bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-orange-300 hover:scale-110 hover:shadow-xl dark:hover:bg-orange-300 transition-all duration-300 ease-in-out transform"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* <button 
          onClick={() => setIsPaused(!isPaused)}
          className="pointer-events-auto bg-white/80 dark:bg-gray-800/80 p-4 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
        >
          {isPaused ? "▶" : "⏸"}
        </button> */}

        <button
          onClick={handleNext}
          className="pointer-events-auto  cur bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-orange-300 hover:scale-110 hover:shadow-xl dark:hover:bg-orange-300 transition-all duration-300 ease-in-out transform"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-orange-300 dark:bg-orange-300'
                : 'bg-gray-400 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
