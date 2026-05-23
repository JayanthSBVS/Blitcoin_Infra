'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, ChevronDown, Star } from 'lucide-react'

type PackageId = 'standard' | 'premium' | 'luxury'

const packages = [
  {
    id: 'standard' as PackageId,
    name: 'Standard',
    price: 'Rs. 1850',
    unit: '/sq.ft',
    tagline: 'Quality construction for essential living',
    badge: null,
    headerBg: 'linear-gradient(145deg, #1a2744 0%, #243257 100%)',
    accentColor: '#7ba3e0',
  },
  {
    id: 'premium' as PackageId,
    name: 'Premium',
    price: 'Rs. 2000',
    unit: '/sq.ft',
    tagline: 'Enhanced materials for superior comfort',
    badge: 'Most Popular',
    headerBg: 'linear-gradient(145deg, #0d1f3c 0%, #162b50 100%)',
    accentColor: '#93c5fd',
  },
  {
    id: 'luxury' as PackageId,
    name: 'Luxury',
    price: 'Rs. 2300',
    unit: '/sq.ft',
    tagline: 'Uncompromising quality, premium finishes',
    badge: 'Ultimate',
    headerBg: 'linear-gradient(145deg, #1a1200 0%, #2d1f00 50%, #1a1200 100%)',
    accentColor: '#c9a84c',
  },
]

const categories = [
  {
    title: 'Designs & Drawings',
    specs: {
      standard: [
        'Floor Plans',
        'Structural Design',
        '3D Elevation',
        'Electrical Drawings',
        'Plumbing Drawings'
      ],
      premium: [
        'Floor Plans',
        'Structural Design',
        '3D Elevation',
        'Electrical Drawings',
        'Plumbing Drawings'
      ],
      luxury: [
        'Floor Plans',
        'Structural Design',
        '3D Elevation',
        'Electrical Drawings',
        'Plumbing Drawings',
        'Furniture Plan',
        'Landscape Design'
      ]
    }
  },
  {
    title: 'Structure',
    specs: {
      standard: [
        'Aggregates: 20mm & 40mm',
        'Brick Work: Standard Red Bricks',
        'Exterior Walls: 9 inch',
        'Interior Walls: 4 inch',
        'Sand: Only River Sand',
        'RCC Design Mix: As per structural engineer recommendation',
        'Ceiling Height: 10 feet',
        'Steel: Radha TMT / Shree TMT / JaiRai TMT / Kamdhenu TMT',
        'Cement: Bharati / Zuari / Nagarjuna',
        'Waterproofing: Dr Fixit / Fosroc'
      ],
      premium: [
        'Aggregates: 20mm & 40mm',
        'Brick Work: Standard Red Bricks',
        'Exterior Walls: 9 inch',
        'Interior Walls: 4 inch',
        'Sand: Only River Sand',
        'RCC Design Mix: Structural engineer recommendation',
        'Ceiling Height: 10ft 6in',
        'Steel: Vizag TMT / JSW TMT',
        'Cement: UltraTech / ACC / Ambuja',
        'Waterproofing: Dr Fixit / Fosroc'
      ],
      luxury: [
        'Aggregates: 20mm & 40mm',
        'Brick Work: Standard Red Bricks',
        'Exterior Walls: 9 inch',
        'Interior Walls: 4 inch',
        'Sand: Only River Sand',
        'RCC Design Mix: Structural design recommendation',
        'Ceiling Height: 11 feet',
        'Steel: Vizag TMT / Jindal TMT',
        'Cement: UltraTech / ACC / Ambuja',
        'Waterproofing: Dr Fixit / Fosroc'
      ]
    }
  },
  {
    title: 'Kitchen',
    specs: {
      standard: [
        'Granite: Up to Rs. 90/sft',
        'Wall Tiles: Up to Rs. 50/sft',
        'Faucet: Up to Rs. 2000',
        'Sink: Rs. 5000 (Nirali or equivalent)'
      ],
      premium: [
        'Granite: Up to Rs. 110/sft',
        'Wall Tiles: Up to Rs. 60/sft',
        'Faucet: Up to Rs. 2500',
        'Sink: Rs. 6000 (Nirali / Futura / Crysil)'
      ],
      luxury: [
        'Granite: Up to Rs. 130/sft',
        'Wall Tiles: Up to Rs. 70/sft',
        'Faucet: Up to Rs. 3000',
        'Sink: Rs. 6000 (Nirali / Futura / Crysil)'
      ]
    }
  },
  {
    title: 'Bathroom',
    specs: {
      standard: [
        'Wall Tiles: Up to Rs. 50/sft',
        'Sanitary & CP Fittings: Up to Rs. 40000 per 1000 sft',
        'CPVC Pipe: Sudhakar',
        'Bathroom Doors: WPC frames with waterproof flush doors'
      ],
      premium: [
        'Wall Tiles: Up to Rs. 60/sft',
        'Sanitary & CP Fittings: Up to Rs. 50000 per 1000 sft',
        'CPVC Pipe: Ashirwad',
        'Bathroom Doors: WPC waterproof doors'
      ],
      luxury: [
        'Wall Tiles: Up to Rs. 70/sft',
        'Sanitary & CP Fittings: Up to Rs. 60000 per 1000 sft',
        'CPVC Pipe: Ashirwad / Supreme',
        'Bathroom Doors: WPC waterproof doors'
      ]
    }
  },
  {
    title: 'Doors & Windows',
    specs: {
      standard: [
        'Main Door: Teak door with teak frame 5"x3"',
        'Size: 7ft x 3ft 6in',
        'Main Door Worth: Rs. 25000 including fixtures',
        'Windows: UPVC with mesh shutters (3 track)',
        'Window Cost: Up to Rs. 400/sft',
        'Internal Doors: Laminated flush doors up to Rs. 8000',
        'Door Frames: Sal Wood / WPC'
      ],
      premium: [
        'Main Door Worth: Rs. 40000',
        'Main Door Size: 7ft x 3ft 6in',
        'Windows: UPVC mesh shutters',
        'Window Cost: Up to Rs. 450/sft',
        'Internal Doors: Up to Rs. 9000',
        'Door Frames: African Teak / WPC'
      ],
      luxury: [
        'Main Door: 5"x3.5"',
        'Main Door Size: 8ft x 3ft 6in',
        'Main Door Worth: Rs. 50000',
        'Windows: UPVC mesh shutters',
        'Window Cost: Up to Rs. 500/sft',
        'Internal Doors: Up to Rs. 11000',
        'Door Frames: African Teak 4"x3" / WPC'
      ]
    }
  },
  {
    title: 'Painting',
    specs: {
      standard: [
        'Interior: JK Wall Putty + Asian Premium Emulsion',
        'Exterior: Asian Primer + Ace Exterior Emulsion'
      ],
      premium: [
        'Interior: Birla Putty + Apcolite Premium Emulsion',
        'Exterior: Asian Primer + Apex Exterior Emulsion'
      ],
      luxury: [
        'Interior: Birla Putty + Asian Royal Emulsion',
        'Exterior: Asian Primer + Apex Ultima Weatherproof'
      ]
    }
  },
  {
    title: 'Flooring',
    specs: {
      standard: [
        'Living/Dining: Up to Rs. 60/sft',
        'Bedroom/Kitchen: Up to Rs. 50/sft',
        'Balcony/Open Area: Anti-skid up to Rs. 40/sft',
        'Parking Tiles: Up to Rs. 50/sft',
        'Staircase: Sadarahalli Granite up to Rs. 70/sft'
      ],
      premium: [
        'Living/Dining: Tiles or Granite up to Rs. 90/sft',
        'Bedroom/Kitchen: Up to Rs. 70/sft',
        'Balcony/Open Area: Anti-skid up to Rs. 50/sft',
        'Parking Tiles: Up to Rs. 50/sft',
        'Staircase: Sadarahalli Granite up to Rs. 80/sft'
      ],
      luxury: [
        'Living/Dining: Tiles or Granite or Marble up to Rs. 110/sft',
        'Bedroom/Kitchen: Up to Rs. 90/sft',
        'Balcony/Open Area: Anti-skid up to Rs. 70/sft',
        'Parking Tiles: Up to Rs. 60/sft',
        'Staircase: Sadarahalli Granite up to Rs. 90/sft'
      ]
    }
  },
  {
    title: 'Electrical',
    specs: {
      standard: [
        'Wires: Finolex / Polycab',
        'Switches: Anchor Penta',
        'DB & MCB: Legrand'
      ],
      premium: [
        'Wires: Finolex / Polycab',
        'Switches: Anchor Roma / Gold Medal',
        'DB & MCB: Legrand'
      ],
      luxury: [
        'Wires: Finolex / Polycab',
        'Switches: Gold Medal / Legrand',
        'DB & MCB: Legrand'
      ]
    }
  },
  {
    title: 'Miscellaneous',
    specs: {
      standard: [
        'Overhead Tank: Sintex Double Layer 1500L',
        'Underground Sump: 6000L',
        'Staircase Railing: SS Railing',
        'Window Grills: MS grills with enamel paint Rs. 110/sft'
      ],
      premium: [
        'Overhead Tank: 2000L',
        'Underground Sump: 7000L',
        'Staircase Railing: SS Railing',
        'Window Grills: MS grills with enamel paint Rs. 110/sft'
      ],
      luxury: [
        'Overhead Tank: 2500L',
        'Underground Sump: 7500L',
        'Staircase Railing: SS railing with glass',
        'Window Grills: MS grills with enamel paint Rs. 110/sft',
        'False Ceiling: Included'
      ]
    }
  }
]

export default function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(0)
  const [selectedPkg, setSelectedPkg] = useState<PackageId>('premium')
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  const selectedPackage = packages.find(p => p.id === selectedPkg)!

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
            Three tiers of excellence - strictly mapped to our official architectural and engineering specifications.
          </motion.p>
        </div>

        {/* Package Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 relative z-20">
          {packages.map((pkg, i) => {
            const isSelected = selectedPkg === pkg.id
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 32 }}
                animate={headInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedPkg(pkg.id)}
                className="relative rounded-sm overflow-hidden cursor-pointer transition-all duration-400 select-none"
                style={{
                  border: isSelected ? `2px solid ${pkg.accentColor}` : '2px solid var(--border-primary)',
                  boxShadow: isSelected ? `0 0 32px ${pkg.accentColor}30` : 'var(--shadow-sm)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {pkg.badge && (
                  <div
                    className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em]"
                    style={{ background: pkg.accentColor, color: pkg.id === 'luxury' ? '#0a0a0a' : '#ffffff' }}
                  >
                    {pkg.id === 'premium' && <Star className="w-2.5 h-2.5" />}
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 relative overflow-hidden" style={{ background: pkg.headerBg }}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/5" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-white/5" />
                  <div className="relative z-10">
                    <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-3" style={{ color: pkg.accentColor }}>
                      {pkg.id.toUpperCase()} PACKAGE
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="text-4xl font-black" style={{ color: pkg.accentColor }}>{pkg.price}</span>
                      <span className="text-white/60 text-sm font-bold">{pkg.unit}</span>
                    </div>
                    <p className="text-white/60 text-xs font-medium mt-2">{pkg.tagline}</p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center gap-2 py-3 text-[10px] font-black tracking-[0.2em] uppercase"
                  style={{
                    backgroundColor: 'var(--surface-card)',
                    color: isSelected ? pkg.accentColor : 'var(--text-muted)',
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: isSelected ? pkg.accentColor : 'var(--border-primary)',
                      background: isSelected ? pkg.accentColor : 'transparent',
                    }}
                  >
                    {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                  </div>
                  {isSelected ? 'Selected' : 'View Details'}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Specification Detail Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.65 }}
          className="rounded-sm overflow-hidden"
          style={{ border: '1px solid var(--border-primary)', background: 'var(--surface-card)' }}
        >
          <div
            className="px-6 sm:px-8 py-5 flex items-center justify-between"
            style={{
              background: selectedPackage.headerBg,
              borderBottom: `1px solid ${selectedPackage.accentColor}30`,
            }}
          >
            <div>
              <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-1" style={{ color: selectedPackage.accentColor }}>
                Exact Specifications
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white">{selectedPackage.name} Package - {selectedPackage.price}/sq.ft</h4>
            </div>
          </div>

          {categories.map((category, idx) => {
            const isOpen = activeCategory === idx
            const specs = category.specs[selectedPkg]
            return (
              <div
                key={category.title}
                style={{ borderBottom: '1px solid var(--border-primary)' }}
              >
                <button
                  suppressHydrationWarning
                  onClick={() => setActiveCategory(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-6 sm:px-8 py-5 text-left transition-colors duration-200 hover:bg-opacity-50"
                  style={{
                    backgroundColor: isOpen ? 'var(--bg-secondary)' : 'transparent',
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-4">
                    <span
                      className="text-[9px] font-black tracking-[0.25em] uppercase hidden sm:block"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-black text-sm sm:text-base text-main">{category.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                          {specs.map((spec, i) => {
                            // Extract bold parts for better visual hierarchy (e.g. "Ceiling Height - 10 feet" -> bold "Ceiling Height")
                            const dashIndex = spec.indexOf(' - ')
                            if (dashIndex > 0) {
                              const label = spec.substring(0, dashIndex)
                              const value = spec.substring(dashIndex + 3)
                              return (
                                <div key={i} className="flex items-start gap-3">
                                  <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: selectedPackage.accentColor }} />
                                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                    <span className="font-bold text-main">{label}:</span> {value}
                                  </span>
                                </div>
                              )
                            }
                            return (
                              <div key={i} className="flex items-start gap-3">
                                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: selectedPackage.accentColor }} />
                                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                                  {spec}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <a
            href="/contact"
            className="btn btn-primary w-full sm:w-auto justify-center px-10 py-4 text-sm tracking-widest"
          >
            Start Your Project
          </a>
          <a
            href="/assets/packages pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full sm:w-auto justify-center px-10 py-4 text-sm tracking-widest"
          >
            Download PDF Brochure
          </a>
        </motion.div>
      </div>
    </section>
  )
}
