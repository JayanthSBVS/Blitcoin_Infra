'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'

const packages = [
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Quality construction for essential living',
    priceDesc: 'Base Tier',
    headerBg: 'linear-gradient(135deg, #1e3a6e 0%, #2d4f8e 100%)',
    accent: '#60a5fa',
    features: ['2D Floor Plan & 3D Elevation', 'Structural, Electrical & Plumbing Drawings', 'Ceiling Height: 10ft 6in', 'Underground Sump 6000L & Overhead Tank 1500L'],
    materials: {
      Steel: 'Radha TMT, Shree TMT, Kamdhenu TMT, JSW TMT',
      Cement: 'Bharati, Zuari or equivalent',
      Bricks: 'Standard Red Bricks — ₹7/- each',
      Flooring: 'Living/Dining up to ₹80/sft, Rooms ₹60/sft',
      Woodwork: 'Teak main door (₹25,000), UPVC Windows (₹450/sft)',
      Electrical: 'Finolex/Polycab wires, Anchor switches',
      Plumbing: 'CPVC Ashirwad/Sudhakar, CP Fittings up to ₹50k/1000sft',
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Enhanced materials for superior comfort',
    priceDesc: 'Most Popular',
    headerBg: 'linear-gradient(135deg, #0f2340 0%, #1e3a6e 100%)',
    accent: '#93c5fd',
    features: ['2D Floor Plan & 3D Elevation', 'Structural, Electrical & Plumbing Drawings', 'Interior Painting: Birla/JK Putty + Asian Apcolite', 'Exterior Painting: Apex Exterior Emulsion'],
    materials: {
      Steel: 'Vizag TMT, JSW TMT',
      Cement: 'Ultratech, Bharati, Zuari',
      Bricks: 'Standard Red Bricks — ₹9/- each',
      Flooring: 'Living/Dining up to ₹90/sft, Rooms ₹65/sft',
      Woodwork: 'Teak main door (₹35,000), UPVC Windows (₹500/sft)',
      Electrical: 'Finolex/Polycab wires, Anchor Roma switches',
      Plumbing: 'CPVC Ashirwad/Sudhakar, CP Fittings up to ₹60k/1000sft',
    },
  },
  {
    id: 'luxury',
    name: 'Luxury',
    tagline: 'Uncompromising quality, premium finishes',
    priceDesc: 'Ultimate',
    headerBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#c9a84c',
    features: ['Digital Plot & Contour Survey', 'Premium 3D Elevation & Interior Planning', 'Interior Painting: Royal paint finish', 'Puja Space Marble Flooring up to ₹210/sft'],
    materials: {
      Steel: 'Tata TMT, Vizag TMT',
      Cement: 'Ultratech, Birla A1',
      Bricks: 'Standard Red Bricks — ₹11/- each',
      Flooring: 'Living/Dining up to ₹100/sft, Rooms ₹75/sft',
      Woodwork: 'Teak main door (₹40,000), UPVC Windows (₹600/sft)',
      Electrical: 'Finolex/Polycab wires, Anchor Roma switches',
      Plumbing: 'CPVC Ashirwad/Sudhakar, CP Fittings up to ₹70k/1000sft',
    },
  },
]

function PackageCard({ pkg, isActive, onClick }: {
  pkg: typeof packages[0]
  isActive: boolean
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="rounded-sm overflow-hidden cursor-pointer group transition-all duration-400"
      style={{
        background: 'var(--surface-card)',
        border: isActive ? `1.5px solid var(--brand-accent)` : '1.5px solid var(--border-primary)',
        boxShadow: isActive ? 'var(--shadow-brand-lg)' : 'var(--shadow-sm)',
        transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Header */}
      <div className="p-7 relative overflow-hidden" style={{ background: pkg.headerBg }}>
        {/* Decorative circle */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-white/10" />
        <div className="relative z-10">
          <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-2" style={{ color: pkg.accent }}>
            {pkg.priceDesc}
          </div>
          <h3 className="text-2xl font-black text-white mb-1">{pkg.name}</h3>
          <p className="text-white/70 text-sm font-medium">{pkg.tagline}</p>
        </div>
        {/* Expand chevron */}
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Features */}
      <div className="p-7" style={{ backgroundColor: 'var(--surface-card)' }}>
        <ul className="flex flex-col gap-3 mb-6">
          {pkg.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: pkg.id === 'luxury' ? '#c9a84c' : 'var(--brand-accent)' }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div
          className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300"
          style={{ color: isActive ? 'var(--brand-accent)' : 'var(--text-muted)' }}
        >
          {isActive ? 'Hide specifications' : 'View specifications'}
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Expandable Materials */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            style={{ borderTop: '1px solid var(--border-primary)' }}
          >
            <div className="p-7">
              <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-5" style={{ color: 'var(--text-muted)' }}>
                Material Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {Object.entries(pkg.materials).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: 'var(--text-muted)' }}>{key}</div>
                    <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PackagesSection() {
  const [activePkg, setActivePkg] = useState<string | null>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  return (
    <section id="packages" className="relative overflow-hidden" style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="arch-grid opacity-15 absolute inset-0" />
      <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      <div className="container-fluid relative z-10">
        <div ref={headRef} className="mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-5">
            <div className="divider-brand" />
            <span className="text-eyebrow">Pricing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md mb-4"
          >
            Construction <span className="gradient-text-brand">Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="text-base font-medium max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Three tiers of excellence — each backed by premium materials, certified processes, and guaranteed craftsmanship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              isActive={activePkg === pkg.id}
              onClick={() => setActivePkg(activePkg === pkg.id ? null : pkg.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
