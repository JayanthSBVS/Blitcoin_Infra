'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(target: number, duration = 2200, inView = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, inView])
  return count
}

const stats = [
  { value: 6, suffix: '+', label: 'Years of Expertise', desc: 'Industry excellence in infrastructure' },
  { value: 50, suffix: '+', label: 'Projects Delivered', desc: 'From villas to commercial hubs' },
  { value: 100, suffix: '%', label: 'Quality Assurance', desc: 'Craftsmanship without compromise' },
  { value: 100, suffix: '%', label: 'Client Trust', desc: 'Delivering on every promise' },
]

const pillars = [
  { number: '01', title: 'Structural Integrity', desc: 'Every structure undergoes rigorous stress-testing, quality material certification, and third-party structural audits before delivery.', icon: '⬡' },
  { number: '02', title: 'Transparent Timelines', desc: 'Real-time project dashboards give clients visibility into every milestone — no surprises, only results.', icon: '◈' },
  { number: '03', title: 'Premium Materials', desc: 'We partner exclusively with ISO-certified suppliers for every material category — steel, concrete, façade, interiors.', icon: '◉' },
  { number: '04', title: 'Post-Delivery Support', desc: 'A dedicated after-care team ensures your property remains in peak condition with structured maintenance programs.', icon: '◌' },
  { number: '05', title: 'Environmental Standards', desc: 'All projects are designed with sustainability targets — from IGBC certification to low-carbon material sourcing.', icon: '◈' },
  { number: '06', title: 'Design Excellence', desc: 'Our in-house design studio ensures every space is architecturally refined, functionally optimal, and aesthetically distinctive.', icon: '⬒' },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  const count = useCountUp(stat.value, 2200, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-premium p-8 group flex flex-col items-center text-center cursor-default"
    >
      <div
        className="font-black leading-none mb-3 transition-transform duration-500 group-hover:scale-110"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--brand-primary)' }}
      >
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="font-black text-[11px] uppercase tracking-[0.2em] mb-1.5" style={{ color: 'var(--text-primary)' }}>
        {stat.label}
      </div>
      <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
        {stat.desc}
      </div>
      <div
        className="mt-5 h-0.5 w-8 group-hover:w-full transition-all duration-600 ease-out"
        style={{ background: 'linear-gradient(to right, var(--brand-accent), transparent)' }}
      />
    </motion.div>
  )
}

function PillarCard({ p, i }: { p: typeof pillars[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.07 }}
      className="card-premium p-6 group cursor-default relative overflow-hidden"
    >
      {/* Background number */}
      <div
        className="absolute top-3 right-4 text-5xl font-black select-none pointer-events-none"
        style={{ color: 'var(--text-primary)', opacity: 0.04 }}
      >
        {p.number}
      </div>
      <div className="text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block" style={{ color: 'var(--brand-accent)' }}>
        {p.icon}
      </div>
      <h3
        className="font-black text-sm uppercase tracking-wide mb-2 transition-colors duration-300 group-hover:text-brand-600"
        style={{ color: 'var(--text-primary)' }}
      >
        {p.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {p.desc}
      </p>
      <div
        className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: 'linear-gradient(to right, var(--brand-accent), transparent)' }}
      />
    </motion.div>
  )
}

export default function TrustSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  return (
    <section id="trust" className="relative overflow-hidden" style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="arch-grid opacity-20 absolute inset-0" />
      <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      {/* Subtle ambient glow — toned down for light mode */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,64,175,0.06) 0%, transparent 70%)' }}
      />

      <div className="container-fluid relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}} className="flex items-center justify-center gap-3 mb-5">
            <div className="divider-brand" />
            <span className="text-eyebrow">Why Blitcon</span>
            <div className="divider-brand" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md mb-4"
          >
            Built on <span className="gradient-text-brand">Trust</span>,
            <br />Delivered with <span className="gradient-text-gold">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base font-medium max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Six years of delivering premium infrastructure — with zero compromise on quality, timeline, or integrity.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
        </div>

        {/* Pillars of trust */}
        <div>
          <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--text-muted)' }}>
            Our Pillars
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p, i) => <PillarCard key={p.number} p={p} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
