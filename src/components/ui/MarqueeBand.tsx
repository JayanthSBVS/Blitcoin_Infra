'use client'

import { motion } from 'framer-motion'

const items = [
  'Residential Construction',
  'Commercial Development',
  'Township Planning',
  'Interior Design',
  'Apartment Development',
  'Premium Engineering',
  'Smart Infrastructure',
  'Architectural Excellence',
]

export default function MarqueeBand() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        paddingBlock: '14px',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-primary)',
        borderBottom: '1px solid var(--border-primary)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }}
      />

      <motion.div
        animate={{ x: '-50%' }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        className="flex items-center gap-0 whitespace-nowrap"
        suppressHydrationWarning
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-4">
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              {item}
            </span>
            <span
              className="text-[8px]"
              style={{ color: 'var(--brand-accent)', opacity: 0.5 }}
            >
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
