'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/ui/LoadingScreen'
import MarqueeBand from '@/components/ui/MarqueeBand'
import BackToTop from '@/components/ui/BackToTop'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TrustSection from '@/components/sections/TrustSection'
import PackagesSection from '@/components/sections/PackagesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Failsafe in case LoadingScreen doesn't call onComplete
    const timer = setTimeout(() => setLoaded(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <HeroSection />
      <MarqueeBand />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  )
}

