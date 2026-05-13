'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/ui/LoadingScreen'
import MarqueeBand from '@/components/ui/MarqueeBand'
import BackToTop from '@/components/ui/BackToTop'
import HeroSection from '@/components/sections/HeroSection'
import dynamic from 'next/dynamic'

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), { ssr: true })
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'))
const TrustSection = dynamic(() => import('@/components/sections/TrustSection'))
const PackagesSection = dynamic(() => import('@/components/sections/PackagesSection'))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

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

