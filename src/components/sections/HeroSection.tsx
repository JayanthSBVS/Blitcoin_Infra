'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const specialisms = [
  { value: 'Residential', label: 'Construction & Villas' },
  { value: 'Commercial', label: 'Enterprise Campuses' },
  { value: 'Townships', label: 'Integrated Communities' },
  { value: 'Interiors', label: 'Premium Spatial Design' },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 700], [0, 140])
  const y2 = useTransform(scrollY, [0, 700], [0, -80])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const watermarkOpacity = useTransform(scrollY, [0, 600], [0.04, 0])

  // Particle canvas removed for performance optimization

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* ── Background Image — cinematic, editorial visibility ── */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src="/assets/images/hero_bg.png"
          alt="Modern Architectural Building"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          style={{ opacity: 0.85 }}
        />
        {/* Deep cinematic dark overlay for premium real-estate look */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(4,10,22,0.92) 0%, rgba(4,10,22,0.75) 45%, rgba(4,10,22,0.45) 70%, rgba(4,10,22,0.25) 100%)',
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(4,10,22,0.15) 0%, transparent 30%, rgba(4,10,22,0.6) 85%, rgba(4,10,22,0.95) 100%)',
        }} />
      </motion.div>



      {/* Arch grid */}
      <div className="arch-grid absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Subtle radial light */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '40%', transform: 'translate(-50%, -55%)',
          width: '60vw', height: '60vw', maxWidth: '700px', maxHeight: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30,64,175,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Main Content ── */}
      <motion.div
        style={{ opacity } as any}
        className="container-fluid relative z-10 pt-32 pb-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <div className="glow-dot" />
            <span className="text-eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Premium Infrastructure Since 2019</span>
            <div
              className="flex-1 h-px max-w-[80px]"
              style={{ background: 'linear-gradient(to right, var(--brand-accent), transparent)', opacity: 0.6 }}
            />
          </motion.div>

          {/* Headline — cinematic three-line treatment */}
          <motion.div variants={itemVariants}>
            <h1
              className="font-black leading-[0.9] mb-2"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              YOUR DREAM
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1
              className="font-black leading-[0.9] mb-2"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(135deg, #c9a84c 0%, #f5d98b 50%, #c9a84c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              OUR EXPERTISE
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1
              className="font-black leading-[0.9] mb-8 md:mb-12"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)',
                letterSpacing: '-0.02em',
                color: 'rgba(255,255,255,0.92)',
              }}
            >
              PERFECTLY BUILT
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg max-w-md leading-relaxed mb-10 font-medium"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Where engineering precision meets architectural vision.
            Blitcon Infra delivers spaces that endure, inspire, and transform communities across India.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #c9a84c 0%, #e8c067 100%)',
                color: '#0a0a0a',
                borderRadius: '2px',
              }}
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '2px',
                backdropFilter: 'blur(8px)',
              }}
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Specialisms strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
          >
            {specialisms.map((s) => (
              <div key={s.value} className="group cursor-default">
                <div
                  className="text-sm font-black mb-0.5 transition-colors duration-300"
                  style={{ color: '#c9a84c' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Right-side Floating Card ── */}
      <motion.div
        style={{ y: y1 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3"
      >
        {/* Building wireframe */}
        <div className="card-premium p-5 rounded-sm">
          <div className="w-28 h-40 relative">
            <div className="absolute bottom-0 left-0 w-7 h-28" style={{ background: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.15)' }} />
            <div className="absolute bottom-0 left-9 w-9 h-40" style={{ background: 'rgba(30,64,175,0.06)', border: '1px solid rgba(30,64,175,0.12)' }} />
            <div className="absolute bottom-0 left-[4.75rem] w-7 h-32" style={{ background: 'rgba(30,64,175,0.08)', border: '1px solid rgba(30,64,175,0.15)' }} />
            <div className="absolute bottom-0 right-0 w-5 h-22" style={{ background: 'rgba(30,64,175,0.05)', border: '1px solid rgba(30,64,175,0.10)' }} />
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="absolute left-0 right-0 h-px" style={{ background: 'rgba(30,64,175,0.08)', bottom: `${i * 25}%` }} />
            ))}
            <div className="absolute top-0 left-9 w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Live Project</span>
          </div>
        </div>

        {/* Floating metric */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass p-4 rounded-sm"
        >
          <div className="text-2xl font-black" style={{ color: 'var(--brand-accent)' }}>98%</div>
          <div className="text-[10px] font-bold tracking-widest uppercase mt-0.5" style={{ color: 'var(--text-muted)' }}>On-Time Delivery</div>
        </motion.div>
      </motion.div>

      {/* Background watermark text */}
      <motion.div
        style={{ y: y2, opacity: watermarkOpacity, color: 'var(--text-primary)' } as any}
        className="absolute right-0 bottom-16 text-[clamp(4rem,15vw,12rem)] font-black leading-none select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span>BLITCON</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[9px] font-bold tracking-[0.35em] uppercase" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <div className="scroll-indicator">
          <div className="scroll-indicator__line" />
        </div>
        <ArrowDown className="w-3 h-3 animate-bounce" style={{ color: 'var(--brand-accent)' }} />
      </motion.div>
    </section>
  )
}
