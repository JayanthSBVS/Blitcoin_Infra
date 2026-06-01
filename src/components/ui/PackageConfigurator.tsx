'use client'

import React, { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ShieldCheck, Gem, Crown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface PackageItem {
  label: string
  standard: string
  premium: string
  luxury: string
}

interface PackageCategory {
  name: string
  icon: string
  items: PackageItem[]
}

const packageData: PackageCategory[] = [
  {
    name: 'Designs & Drawings',
    icon: '📐',
    items: [
      { label: 'Floor Plans', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Structural Design', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: '3D Elevation', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Electrical Drawings', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Plumbing Drawings', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Furniture Plan', standard: '-', premium: '-', luxury: 'Included' },
      { label: 'Landscape Design', standard: '-', premium: '-', luxury: 'Included' },
    ]
  },
  {
    name: 'Structure',
    icon: '🏗️',
    items: [
      { label: 'Aggregates', standard: '20mm & 40mm', premium: '20mm & 40mm', luxury: '20mm & 40mm' },
      { label: 'Brick Work', standard: 'Standard Red Bricks', premium: 'Standard Red Bricks', luxury: 'Standard Red Bricks' },
      { label: 'Exterior Walls', standard: '9 inch', premium: '9 inch', luxury: '9 inch' },
      { label: 'Interior Walls', standard: '4 inch', premium: '4 inch', luxury: '4 inch' },
      { label: 'Sand', standard: 'Only River Sand', premium: 'Only River Sand', luxury: 'Only River Sand' },
      { label: 'RCC Design Mix', standard: 'As per structural engineer recommendation', premium: 'Structural engineer recommendation', luxury: 'Structural design recommendation' },
      { label: 'Ceiling Height', standard: '10 feet', premium: '10ft 6in', luxury: '11 feet' },
      { label: 'Steel', standard: 'Radha TMT / Shree TMT / JaiRai TMT / Kamdhenu TMT', premium: 'Vizag TMT / JSW TMT', luxury: 'Vizag TMT / Jindal TMT' },
      { label: 'Cement', standard: 'Bharati / Zuari / Nagarjuna', premium: 'UltraTech / ACC / Ambuja', luxury: 'UltraTech / ACC / Ambuja' },
      { label: 'Waterproofing', standard: 'Dr Fixit / Fosroc', premium: 'Dr Fixit / Fosroc', luxury: 'Dr Fixit / Fosroc' },
    ]
  },
  {
    name: 'Kitchen',
    icon: '🍳',
    items: [
      { label: 'Granite', standard: 'Up to Rs. 90/sft', premium: 'Up to Rs. 110/sft', luxury: 'Up to Rs. 130/sft' },
      { label: 'Wall Tiles', standard: 'Up to Rs. 50/sft', premium: 'Up to Rs. 60/sft', luxury: 'Up to Rs. 70/sft' },
      { label: 'Faucet', standard: 'Up to Rs. 2000', premium: 'Up to Rs. 2500', luxury: 'Up to Rs. 3000' },
      { label: 'Sink', standard: 'Rs. 5000 (Nirali or equivalent)', premium: 'Rs. 6000 (Nirali / Futura / Crysil)', luxury: 'Rs. 6000 (Nirali / Futura / Crysil)' },
    ]
  },
  {
    name: 'Bathroom',
    icon: '🚿',
    items: [
      { label: 'Wall Tiles', standard: 'Up to Rs. 50/sft', premium: 'Up to Rs. 60/sft', luxury: 'Up to Rs. 70/sft' },
      { label: 'Sanitary & CP Fittings', standard: 'Up to Rs. 40000 per 1000 sft', premium: 'Up to Rs. 50000 per 1000 sft', luxury: 'Up to Rs. 60000 per 1000 sft' },
      { label: 'CPVC Pipe', standard: 'Sudhakar', premium: 'Ashirwad', luxury: 'Ashirwad / Supreme' },
      { label: 'Bathroom Doors', standard: 'WPC frames with waterproof flush doors', premium: 'WPC waterproof doors', luxury: 'WPC waterproof doors' },
    ]
  },
  {
    name: 'Doors & Windows',
    icon: '🚪',
    items: [
      { label: 'Main Door', standard: 'Teak door with teak frame 5"x3"', premium: 'Teak', luxury: '5"x3.5"' },
      { label: 'Main Door Size', standard: '7ft x 3ft 6in', premium: '7ft x 3ft 6in', luxury: '8ft x 3ft 6in' },
      { label: 'Main Door Worth', standard: 'Rs. 25000 including fixtures', premium: 'Rs. 40000', luxury: 'Rs. 50000' },
      { label: 'Windows', standard: 'UPVC with mesh shutters (3 track)', premium: 'UPVC mesh shutters', luxury: 'UPVC mesh shutters' },
      { label: 'Window Cost', standard: 'Up to Rs. 400/sft', premium: 'Up to Rs. 450/sft', luxury: 'Up to Rs. 500/sft' },
      { label: 'Internal Doors', standard: 'Laminated flush doors up to Rs. 8000', premium: 'Up to Rs. 9000', luxury: 'Up to Rs. 11000' },
      { label: 'Door Frames', standard: 'Sal Wood / WPC', premium: 'African Teak / WPC', luxury: 'African Teak 4"x3" / WPC' },
    ]
  },
  {
    name: 'Painting',
    icon: '🎨',
    items: [
      { label: 'Interior', standard: 'JK Wall Putty + Asian Premium Emulsion', premium: 'Birla Putty + Apcolite Premium Emulsion', luxury: 'Birla Putty + Asian Royal Emulsion' },
      { label: 'Exterior', standard: 'Asian Primer + Ace Exterior Emulsion', premium: 'Asian Primer + Apex Exterior Emulsion', luxury: 'Asian Primer + Apex Ultima Weatherproof' },
    ]
  },
  {
    name: 'Flooring',
    icon: '⬛',
    items: [
      { label: 'Living/Dining', standard: 'Up to Rs. 60/sft', premium: 'Tiles or Granite up to Rs. 90/sft', luxury: 'Tiles or Granite or Marble up to Rs. 110/sft' },
      { label: 'Bedroom/Kitchen', standard: 'Up to Rs. 50/sft', premium: 'Up to Rs. 70/sft', luxury: 'Up to Rs. 90/sft' },
      { label: 'Balcony/Open Area', standard: 'Anti-skid up to Rs. 40/sft', premium: 'Anti-skid up to Rs. 50/sft', luxury: 'Anti-skid up to Rs. 70/sft' },
      { label: 'Parking Tiles', standard: 'Up to Rs. 50/sft', premium: 'Up to Rs. 50/sft', luxury: 'Up to Rs. 60/sft' },
      { label: 'Staircase', standard: 'Sadarahalli Granite up to Rs. 70/sft', premium: 'Sadarahalli Granite up to Rs. 80/sft', luxury: 'Sadarahalli Granite up to Rs. 90/sft' },
    ]
  },
  {
    name: 'Electrical',
    icon: '⚡',
    items: [
      { label: 'Wires', standard: 'Finolex / Polycab', premium: 'Finolex / Polycab', luxury: 'Finolex / Polycab' },
      { label: 'Switches', standard: 'Anchor Penta', premium: 'Anchor Roma / Gold Medal', luxury: 'Gold Medal / Legrand' },
      { label: 'DB & MCB', standard: 'Legrand', premium: 'Legrand', luxury: 'Legrand' },
    ]
  },
  {
    name: 'Miscellaneous',
    icon: '✨',
    items: [
      { label: 'Overhead Tank', standard: 'Sintex Double Layer 1500L', premium: '2000L', luxury: '2500L' },
      { label: 'Underground Sump', standard: '6000L', premium: '7000L', luxury: '7500L' },
      { label: 'Staircase Railing', standard: 'SS Railing', premium: 'SS Railing', luxury: 'SS railing with glass' },
      { label: 'Window Grills', standard: 'MS grills with enamel paint Rs. 110/sft', premium: 'MS grills with enamel paint Rs. 110/sft', luxury: 'MS grills with enamel paint Rs. 110/sft' },
      { label: 'False Ceiling', standard: '-', premium: '-', luxury: 'Included' },
    ]
  }
]

// --- Performance Optimized Sub-Components ---

const DesktopCategory = memo(({ category, isExpanded, onToggle }: { 
  category: PackageCategory, 
  isExpanded: boolean, 
  onToggle: (name: string) => void 
}) => (
  <div className="py-1">
    <button 
      onClick={() => onToggle(category.name)}
      className="w-full flex items-center justify-between py-5 px-4 hover:bg-surface-stone/40 transition-all duration-300 rounded-sm group outline-none focus-visible:ring-1 focus-visible:ring-brand-accent"
    >
      <div className="flex items-center gap-4">
        <span className="text-xl sm:text-2xl">{category.icon}</span>
        <span className="text-base sm:text-lg font-black tracking-tight text-main">{category.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-dim opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
          {isExpanded ? 'Collapse' : 'Expand Details'}
        </span>
        <div className={`w-8 h-8 rounded-full border transition-all duration-500 flex items-center justify-center ${isExpanded ? 'bg-brand-accent border-brand-accent scale-110 shadow-lg' : 'bg-card border-border-primary'}`}>
          {isExpanded ? (
            <Minus className="w-3.5 h-3.5 text-white" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-main" />
          )}
        </div>
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden will-change-[height]"
        >
          <div className="pb-8">
            {category.items.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 py-4 px-4 hover:bg-surface-stone/20 transition-colors border-t border-border-primary/20 first:border-none">
                <div className="col-span-3 flex items-center">
                  <span className="text-sm font-bold text-sub">{item.label}</span>
                </div>
                <div className="col-span-3 px-6 text-center">
                  <span className="text-sm font-medium text-main">{item.standard}</span>
                </div>
                <div className="col-span-3 px-6 text-center border-x border-border-secondary/20">
                  <span className="text-sm font-bold text-main">{item.premium}</span>
                </div>
                <div className="col-span-3 px-6 text-center">
                  <span className="text-sm font-bold text-main">{item.luxury}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
))
DesktopCategory.displayName = 'DesktopCategory'

const MobileCategory = memo(({ category, isExpanded, onToggle }: { 
  category: PackageCategory, 
  isExpanded: boolean, 
  onToggle: (name: string) => void 
}) => (
  <div className="card-premium overflow-hidden bg-card shadow-sm border-border-primary rounded-sm transition-all duration-300">
    <button 
      onClick={() => onToggle(category.name)}
      className="w-full flex items-center justify-between p-6 active:bg-surface-stone/20 transition-colors outline-none"
    >
      <div className="flex items-center gap-4">
        <span className="text-xl">{category.icon}</span>
        <span className="text-base font-black tracking-tight text-main">{category.name}</span>
      </div>
      <div className={`w-8 h-8 rounded-full border transition-all duration-500 flex items-center justify-center ${isExpanded ? 'bg-brand-accent border-brand-accent rotate-180 shadow-md' : 'bg-card border-border-primary'}`}>
        {isExpanded ? (
          <Minus className="w-3.5 h-3.5 text-white" />
        ) : (
          <Plus className="w-3.5 h-3.5 text-main" />
        )}
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden border-t border-border-primary will-change-[height]"
        >
          <div className="p-4 space-y-6 bg-surface-stone/20">
            {category.items.map((item, idx) => (
              <div key={idx} className="space-y-3 pb-5 border-b border-border-primary/50 last:border-none last:pb-0">
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{item.label}</div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-dim text-xs">Standard</span>
                    <span className="font-bold text-main text-xs">{item.standard}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-dim text-xs">Premium</span>
                    <span className="font-bold text-brand-primary text-xs">{item.premium}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-dim text-xs">Luxury</span>
                    <span className="font-black text-brand-accent text-xs">{item.luxury}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
))
MobileCategory.displayName = 'MobileCategory'

export default function PackageConfigurator() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Civil Works'])

  const toggleCategory = useCallback((name: string) => {
    setExpandedCategories(prev => 
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    )
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* -- Premium Package Cards -- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Standard Card */}
        <div className="card-premium p-10 flex flex-col h-full bg-card border-border-primary rounded-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-main">Standard</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-dim">Best For: Essential Durability</p>
            </div>
          </div>
          <div className="mb-8">
             <span className="text-4xl font-black text-main">Rs. 1850</span>
             <span className="text-sm font-bold text-sub"> / sft</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Warranty</span>
               <span className="text-sm font-black text-brand-accent">10 Years</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Cement</span>
               <span className="text-sm font-bold text-main">Zuari / Nagarjuna</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Steel</span>
               <span className="text-sm font-bold text-main">Radha TMT</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Coverage</span>
               <span className="text-sm font-bold text-main">Core Structure</span>
            </div>
          </div>
          <Link href="/contact" className="btn btn-outline w-full text-center">Select Standard</Link>
        </div>

        {/* Premium Card */}
        <div className="card-premium p-10 flex flex-col h-full bg-surface-stone border-brand-accent/30 rounded-sm shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-brand-accent text-white text-[9px] font-black uppercase tracking-widest rounded-bl-sm">Recommended</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center border border-brand-accent/30">
              <Gem className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-main">Premium</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Best For: Superior Finish</p>
            </div>
          </div>
          <div className="mb-8">
             <span className="text-4xl font-black text-main">Rs. 2000</span>
             <span className="text-sm font-bold text-sub"> / sft</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            <div className="flex justify-between items-center pb-3 border-b border-border-primary/50">
               <span className="text-sm text-sub">Warranty</span>
               <span className="text-sm font-black text-brand-accent">10 Years</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-primary/50">
               <span className="text-sm text-sub">Cement</span>
               <span className="text-sm font-bold text-main">UltraTech / ACC</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-primary/50">
               <span className="text-sm text-sub">Steel</span>
               <span className="text-sm font-bold text-main">Vizag TMT</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-primary/50">
               <span className="text-sm text-sub">Coverage</span>
               <span className="text-sm font-bold text-main">Premium Materials</span>
            </div>
          </div>
          <Link href="/contact" className="btn btn-primary w-full text-center">Select Premium</Link>
        </div>

        {/* Luxury Card */}
        <div className="card-premium p-10 flex flex-col h-full bg-card border-border-primary rounded-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
              <Crown className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-main">Luxury</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-dim">Best For: Uncompromised Luxury</p>
            </div>
          </div>
          <div className="mb-8">
             <span className="text-4xl font-black text-main">Rs. 2300</span>
             <span className="text-sm font-bold text-sub"> / sft</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Warranty</span>
               <span className="text-sm font-black text-brand-accent">10 Years</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Cement</span>
               <span className="text-sm font-bold text-main">UltraTech / ACC</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Steel</span>
               <span className="text-sm font-bold text-main">Vizag / Jindal TMT</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border-secondary">
               <span className="text-sm text-sub">Coverage</span>
               <span className="text-sm font-bold text-main">Ultimate Experience</span>
            </div>
          </div>
          <Link href="/contact" className="btn btn-outline w-full text-center">Select Luxury</Link>
        </div>
      </div>

      {/* -- Desktop Comparison Table -- */}
      <div className="hidden lg:block">
        {/* Sticky Header - Optimized Blur */}
        <div className="sticky top-[80px] z-50 bg-surface/90 backdrop-blur-md border-b border-border-primary transition-all duration-300">
          <div className="grid grid-cols-12 py-8 items-center">
            <div className="col-span-3">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dim">Specifications</span>
            </div>
            <div className="col-span-3 px-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-black text-main">Standard</h3>
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest">Rs. 1850 / sft</span>
              </div>
            </div>
            <div className="col-span-3 px-6 text-center border-x border-border-secondary">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-2">
                  <Gem className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-black text-main">Premium</h3>
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest">Rs. 2000 / sft</span>
              </div>
            </div>
            <div className="col-span-3 px-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-2">
                  <Crown className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-black text-main">Luxury</h3>
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest">Rs. 2300 / sft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories - Memoized for Performance */}
        <div className="divide-y divide-border-secondary">
          {packageData.map((category) => (
            <DesktopCategory 
              key={category.name} 
              category={category} 
              isExpanded={expandedCategories.includes(category.name)}
              onToggle={toggleCategory}
            />
          ))}
        </div>
      </div>

      {/* -- Mobile Comparison Experience -- */}
      <div className="lg:hidden space-y-4 sm:space-y-6">
        {packageData.map((category) => (
          <MobileCategory 
            key={category.name} 
            category={category}
            isExpanded={expandedCategories.includes(category.name)}
            onToggle={toggleCategory}
          />
        ))}
      </div>

      {/* -- Footer CTA -- */}
      <div className="mt-20 lg:mt-24 mb-12 p-10 lg:p-12 bg-surface-stone rounded-sm text-center relative overflow-hidden group border border-border-primary shadow-xl">
        <div className="absolute inset-0 arch-grid opacity-10 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-2xl lg:text-3xl font-black text-main mb-6">Need a Custom Package?</h2>
          <p className="text-sub max-w-2xl mx-auto mb-10 font-medium leading-relaxed text-sm lg:text-base">
            We understand every dream is unique. Our engineering team can create a tailor-made material specification that fits your specific architectural vision and budget.
          </p>
          <div className="flex items-center justify-center">
            <Link 
              href="/contact"
              className="btn btn-primary px-10 lg:px-12 py-4 rounded-sm font-black uppercase tracking-widest text-[10px] lg:text-[11px] flex items-center gap-3 transition-all duration-300 shadow-brand hover:shadow-brand-lg active:scale-95"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
