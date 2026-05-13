'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle: string
  description?: string
  image: string
  breadcrumb?: { label: string; href?: string }[]
}

export default function PageHero({ title, subtitle, description, image, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[550px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center scale-[1.02]"
        />
        
        {/* Cinematic Multi-Layer Overlays */}
        {/* 1. Base Darkening */}
        <div className="absolute inset-0 bg-black/45" />
        
        {/* 2. Text-Region Vertical Gradient (Improves readability from bottom up) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
        
        {/* 3. Text-Region Horizontal Gradient (Improves readability from left side) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent opacity-80" />
        
        {/* 4. Soft Blue Architectural Tint */}
        <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
      </motion.div>

      <div className="container-fluid relative z-10 pt-24">
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          {breadcrumb && (
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-8"
            >
              <Link href="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumb.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 text-white/30" />
                  {item.href ? (
                    <Link href={item.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-light">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </motion.nav>
          )}

          {/* Subtitle / Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-brand-accent shadow-[0_0_10px_rgba(147,197,253,0.5)]" />
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-brand-light drop-shadow-sm">
              {subtitle}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-white mb-10 leading-[0.92] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 1 ? 'text-white/85' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-white/75 max-w-2xl font-medium leading-relaxed drop-shadow-sm"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>

      {/* Decorative Architecture Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-px bg-gradient-to-l from-brand-accent/40 to-transparent z-10" />
      <div className="absolute right-[12%] bottom-0 w-px h-32 bg-gradient-to-t from-brand-accent/40 to-transparent z-10" />
    </section>
  )
}
