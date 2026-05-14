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
    name: 'Design & Drawings',
    icon: '📐',
    items: [
      { label: '2D Floor Plan', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Structural Design', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: '3D Elevation', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Electrical Drawings', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Plumbing Drawings', standard: 'Included', premium: 'Included', luxury: 'Included' },
      { label: 'Contour Survey', standard: 'Included', premium: 'Included', luxury: 'Included' },
    ]
  },
  {
    name: 'Civil Works',
    icon: '🏗️',
    items: [
      { label: 'Steel (TMT)', standard: 'Radha / Shree / Kamdhenu / JSW', premium: 'Vizag / JSW TMT', luxury: 'Tata / Vizag TMT' },
      { label: 'Cement', standard: 'Bharati / Zuari / Equivalent', premium: 'Ultratech / Bharati / Zuari', luxury: 'Ultratech / Birla A1' },
      { label: 'Red Bricks', standard: 'Standard (Rs. 7/- each)', premium: 'Premium (Rs. 9/- each)', luxury: 'Luxury (Rs. 11/- each)' },
      { label: 'RCC Design Mix', standard: 'M20', premium: 'M20', luxury: 'M20' },
      { label: 'Ceiling Height', standard: '10\' 6" (Finished Floor)', premium: '10\' 6" (Finished Floor)', luxury: '10\' 6" (Finished Floor)' },
      { label: 'Aggregates', standard: '20mm & 40mm', premium: '20mm & 40mm', luxury: '20mm & 40mm' },
    ]
  },
  {
    name: 'Kitchen & Utility',
    icon: '🍳',
    items: [
      { label: 'Wall Tiles (2\')', standard: 'Ceramic (Upto Rs. 60/sft)', premium: 'Ceramic (Upto Rs. 70/sft)', luxury: 'Ceramic (Upto Rs. 80/sft)' },
      { label: 'Kitchen Sink', standard: 'SS Single (Worth Rs. 6000)', premium: 'SS Single (Worth Rs. 7000)', luxury: 'SS Single (Worth Rs. 8000)' },
      { label: 'Sink Faucet', standard: 'ISI Marked (Upto Rs. 2000)', premium: 'ISI Marked (Upto Rs. 3000)', luxury: 'ISI Marked (Upto Rs. 5000)' },
      { label: 'Countertop', standard: 'Granite (Upto Rs. 120/sft)', premium: 'Granite (Upto Rs. 160/sft)', luxury: 'Granite (Upto Rs. 180/sft)' },
    ]
  },
  {
    name: 'Bathrooms',
    icon: '🚿',
    items: [
      { label: 'Wall Tiles (7\')', standard: 'Ceramic (Upto Rs. 60/sft)', premium: 'Ceramic (Upto Rs. 70/sft)', luxury: 'Ceramic (Upto Rs. 80/sft)' },
      { label: 'Sanitary & CP', standard: 'Upto Rs. 50k / 1000 sft', premium: 'Upto Rs. 60k / 1000 sft', luxury: 'Upto Rs. 70k / 1000 sft' },
      { label: 'CPVC Pipes', standard: 'Ashirwad / Sudhakar', premium: 'Ashirwad / Sudhakar', luxury: 'Ashirwad / Sudhakar' },
      { label: 'Accessories', standard: 'Worth Rs. 5000 / Bath', premium: 'Worth Rs. 6000 / Bath', luxury: 'Worth Rs. 7000 / Bath' },
      { label: 'Bathroom Doors', standard: 'WPC / Waterproof Flush', premium: 'WPC / Waterproof Flush', luxury: 'WPC / Waterproof Flush' },
    ]
  },
  {
    name: 'Doors & Windows',
    icon: '🚪',
    items: [
      { label: 'Main Door', standard: 'Teak (Rs. 25k allowance)', premium: 'Teak (Rs. 35k allowance)', luxury: 'Teak (Rs. 40k allowance)' },
      { label: 'Windows (UPVC)', standard: '3 Track (Rs. 450/sft)', premium: '3 Track (Rs. 500/sft)', luxury: '3 Track (Rs. 600/sft)' },
      { label: 'Internal Doors', standard: 'Flush / Membrane (Rs. 10k)', premium: 'Flush / Membrane (Rs. 11k)', luxury: 'Flush / Membrane (Rs. 11k)' },
    ]
  },
  {
    name: 'Painting & Finishes',
    icon: '🎨',
    items: [
      { label: 'Internal Paint', standard: 'Birla Putty + Asian Apcolite', premium: 'Birla Putty + Asian Apcolite', luxury: 'Birla Putty + Asian Royal' },
      { label: 'External Paint', standard: 'Asian Ace Emulsion', premium: 'Asian Apex Emulsion', luxury: 'Asian Apex Emulsion' },
    ]
  },
  {
    name: 'Flooring',
    icon: '⬛',
    items: [
      { label: 'Living & Dining', standard: 'Tiles (Upto Rs. 80/sft)', premium: 'Tiles/Granite (Rs. 90/sft)', luxury: 'Tiles/Granite (Rs. 100/sft)' },
      { label: 'Rooms & Kitchen', standard: 'Tiles (Upto Rs. 60/sft)', premium: 'Tiles (Upto Rs. 65/sft)', luxury: 'Tiles (Upto Rs. 75/sft)' },
      { label: 'Staircase', standard: 'Granite (Upto Rs. 70/sft)', premium: 'Granite (Upto Rs. 80/sft)', luxury: 'Granite (Upto Rs. 90/sft)' },
      { label: 'Parking Tiles', standard: 'Anti-skid (Rs. 50/sft)', premium: 'Anti-skid (Rs. 60/sft)', luxury: 'Anti-skid (Rs. 65/sft)' },
    ]
  },
  {
    name: 'Electrical & Others',
    icon: '⚡',
    items: [
      { label: 'Wires', standard: 'Finolex / Polycab', premium: 'Finolex / Polycab', luxury: 'Finolex / Polycab' },
      { label: 'Switches', standard: 'Anchor', premium: 'Anchor Roma', luxury: 'Anchor Roma' },
      { label: 'Overhead Tank', standard: 'Sintex 2-Layer 1500L', premium: 'Sintex 2-Layer 1500L', luxury: 'Sintex 2-Layer 1500L' },
      { label: 'Underground Sump', standard: '6000 Litres', premium: '6000 Litres', luxury: '6000 Litres' },
      { label: 'Staircase Railing', standard: 'MS Railing', premium: 'MS Railing', luxury: 'MS Railing' },
      { label: 'Puja Space', standard: 'Marble (Upto Rs. 190/sft)', premium: 'Marble (Upto Rs. 200/sft)', luxury: 'Marble (Upto Rs. 210/sft)' },
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
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest">Rs. 1,600 / sft</span>
              </div>
            </div>
            <div className="col-span-3 px-6 text-center border-x border-border-secondary">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-2">
                  <Gem className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-black text-main">Premium</h3>
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest">Rs. 1,850 / sft</span>
              </div>
            </div>
            <div className="col-span-3 px-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center mb-2">
                  <Crown className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-xl font-black text-main">Luxury</h3>
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-widest">Rs. 2,100 / sft</span>
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
