'use client'

import { motion } from 'framer-motion'
import HeroSection from "./components/hero"     
import Produits from "./components/produits" 
import Skills from "./components/skill"
import NewsLetter from "./components/newsLetter"
import FAQ from "./components/FAQ"
import WorkShowcase from "./components/WorkShowcase"
import TechStackCard from "./components/TechStackCard"
import Pricing from "./components/Pricing"
import WelcomeSlide from "./WelcomeSlide"
import SubNavDropdown from "./components/SubNavDropdown"
import BackgroundFeed from "./components/BackgroundFeed"
import Banner from "./components/banner"
import TechCloud from "./components/TechCloud"
import CyberEyeScene from "./components/CyberEye"
import WorkCard from "./components/WorkCard"
import { works } from "./data/workData"

import Link from "next/link"


//import CyberEye from './components/CyberEye'
export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  return (
    <div>
      <motion.main
        initial="initial"
        animate="animate"
        className="space-y-16"
      >
        {/* Sub Navigation */}
        <motion.div {...fadeUp}>
          <div className="relative">
            <SubNavDropdown />
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div {...fadeUp}>
          <HeroSection />
        </motion.div>

        {/* Newsletter */}
        <motion.div {...fadeUp}>
          <NewsLetter />
        </motion.div>
        {/* Tech Cloud */}
        <motion.div {...fadeUp}>
          <TechCloud />
        </motion.div>
 
        
{/* 
            <div className='h-screen w-screen'>
            <CyberEye  />
            </div> */}

        {/* Background Feed */}
        <motion.div {...fadeUp}>
          <div className='bg-gradient-to-b from-gray-950 via-gray-900 to-black'>
            <BackgroundFeed />  
          </div>
        </motion.div>

        {/* Work Showcase Grid */}
        <motion.div {...fadeUp}>
          <WorkShowcase />
        </motion.div>

        {/* Tech Stack */}
        <motion.div {...fadeUp}>
          <TechStackCard />
        </motion.div>

        {/* Skills */}
        <motion.div {...fadeUp}>
          <Skills />
        </motion.div>

        {/* Pricing */}
        <motion.div {...fadeUp}>
          <Pricing />
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeUp}>
          <FAQ />
        </motion.div>
      </motion.main>
    </div>
  )
}
