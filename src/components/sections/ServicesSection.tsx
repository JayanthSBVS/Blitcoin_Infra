'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Construction',
    tagline: 'Homes Crafted for Life',
    description: 'We design and build homes that reflect your lifestyle and preferences, ensuring a perfect balance of functionality and aesthetics.',
    features: ['Custom Villa Design', 'Premium Apartments', 'Structural Excellence', 'Smart Home Integration'],
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial Construction',
    tagline: 'Spaces That Drive Business',
    description: 'From office spaces to retail establishments, we deliver top-notch commercial buildings that meet modern business requirements and standards.',
    features: ['Corporate Offices', 'Retail Complexes', 'Industrial Facilities', 'Mixed-Use Developments'],
  },
  {
    id: 'apartment',
    number: '03',
    title: 'Apartment Development',
    tagline: 'Urban Living, Elevated',
    description: 'We specialize in constructing state-of-the-art apartment complexes that combine comfort, style, and practicality for modern living.',
    features: ['High-Rise Towers', 'Amenity Design', 'Landscape Planning', 'Community Spaces'],
  },
  {
    id: 'interior',
    number: '04',
    title: 'Home Interior',
    tagline: 'From Shell to Sanctuary',
    description: 'Our expertise extends to interior design and construction, creating spaces that are visually appealing, functional, and personalized to your needs.',
    features: ['Residential Interiors', 'Commercial Fit-Outs', 'Material Selection', '3D Visualization'],
  },
  {
    id: 'township',
    number: '05',
    title: 'Township Development',
    tagline: 'Building Communities',
    description: 'We develop and transform open land ventures into thriving residential or commercial communities with robust infrastructure.',
    features: ['Master Planning', 'Infrastructure Design', 'Green Spaces', 'Utility Systems'],
  },
  {
    id: 'renovation',
    number: '06',
    title: 'Home Renovation & Remodeling',
    tagline: 'Reimagine Your Space',
    description: 'Breathe new life into your space with expert renovation and remodeling for enhanced functionality and modern aesthetics.',
    features: ['Complete Renovation', 'Structural Remodeling', 'Modern Finishes', 'Space Optimization'],
  },
]

function ServiceCard({
  service,
  index,
  isActive,
  onClick,
}: {
  service: typeof services[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="card-premium cursor-pointer group"
      style={isActive ? {
        borderColor: 'var(--brand-accent)',
        boxShadow: 'var(--shadow-brand-lg)',
      } : {}}
    >
      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div
              className="text-[9px] font-black tracking-[0.3em] uppercase mb-2"
              style={{ color: 'var(--brand-accent)' }}
            >
              {service.number}
            </div>
            <div className="text-2xl" style={{ color: 'var(--text-primary)' }}>
              {service.id === 'residential' ? '⌂' :
               service.id === 'commercial' ? '⬡' :
               service.id === 'apartment' ? '⬒' :
               service.id === 'interior' ? '◎' :
               service.id === 'township' ? '◫' : '⟳'}
            </div>
          </div>
          <motion.div
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            style={{
              background: isActive ? 'var(--brand-accent)' : 'var(--bg-secondary)',
              border: '1px solid var(--border-primary)',
            }}
          >
            <ArrowUpRight
              className="w-4 h-4"
              style={{ color: isActive ? '#ffffff' : 'var(--text-muted)' }}
            />
          </motion.div>
        </div>

        <h3 className="font-black text-lg mb-1 leading-tight text-main">
          {service.title}
        </h3>
        <p
          className="text-[9px] font-black tracking-[0.25em] uppercase mb-3 text-brand-accent"
        >
          {service.tagline}
        </p>
        <p className="text-sm leading-relaxed text-sub">
          {service.description}
        </p>

        {/* Expandable features */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div
                className="mt-6 pt-5"
                style={{ borderTop: '1px solid var(--border-primary)' }}
              >
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-brand-accent" />
                      <span className="text-[11px] font-bold text-sub">{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  suppressHydrationWarning
                  className="btn btn-primary w-full text-[11px] py-2.5"
                >
                  View Projects
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: 'linear-gradient(to right, var(--brand-accent), transparent)' }}
      />
    </motion.div>
  )
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="arch-grid opacity-15 absolute inset-0" />
      <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      <div className="container-fluid relative z-10">
        {/* Header */}
        <div ref={headRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-5"
          >
            <div className="divider-brand" />
            <span className="text-eyebrow">What We Build</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md max-w-xl"
          >
            Our <span className="gradient-text-brand">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="text-base mt-4 max-w-lg font-medium mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Five integrated disciplines. One unified vision for premium infrastructure delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/services" className="btn btn-outline text-[11px] group">
              Explore All Services
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <ServiceCard
              key={svc.id}
              service={svc}
              index={i}
              isActive={activeId === svc.id}
              onClick={() => setActiveId(activeId === svc.id ? null : svc.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
