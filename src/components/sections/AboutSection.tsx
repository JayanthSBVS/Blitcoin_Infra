'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const milestones = [
  { year: '2019', title: 'Foundation', desc: 'Established with a vision to deliver exceptional quality and engineering integrity across South India.' },
  { year: '2021', title: 'Expansion', desc: 'Diversified into commercial construction and high-density apartment development projects.' },
  { year: '2023', title: 'Design Studio', desc: 'Launched bespoke interior design services — providing complete end-to-end living solutions.' },
  { year: '2025', title: 'Legacy', desc: 'Continuing our commitment to excellence, reliability, and unparalleled client trust.' },
]

const values = [
  { icon: '◈', title: 'Engineering Precision', desc: 'Every structure exceeds industry standards — structurally, aesthetically, and sustainably.' },
  { icon: '◉', title: 'Material Excellence', desc: 'Only premium, certified materials from verified vendors — ensuring decades of durability.' },
  { icon: '◌', title: 'Transparent Delivery', desc: 'Real-time tracking, transparent pricing, and milestone-based progress reporting.' },
  { icon: '⬡', title: 'Human-Centered Design', desc: 'Every space is designed around how people live, work, and thrive — not just aesthetics.' },
]

function ValueCard({ v, i }: { v: typeof values[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-premium p-6 group cursor-default"
    >
      <div className="text-2xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block text-brand-accent">
        {v.icon}
      </div>
      <h4 className="font-black text-sm uppercase tracking-wide mb-2 text-main">
        {v.title}
      </h4>
      <p className="text-sm leading-relaxed font-medium text-sub">
        {v.desc}
      </p>
    </motion.div>
  )
}

function TimelineItem({ item, index }: { item: typeof milestones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      className="flex gap-6"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ring-2 ring-offset-2"
          style={{
            background: 'var(--brand-accent)',
            boxShadow: '0 0 0 2px var(--bg-primary), 0 0 0 4px var(--brand-accent)',
          }}
        />
        <div className="w-px flex-1 mt-2" style={{ background: 'var(--border-primary)' }} />
      </div>
      <div className="pb-10">
        <div className="text-[10px] font-black tracking-[0.25em] uppercase mb-1 text-brand-accent">
          {item.year}
        </div>
        <h3 className="font-black text-lg mb-1.5 text-main">{item.title}</h3>
        <p className="text-sm leading-relaxed font-medium text-sub">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden" style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      {/* Background texture */}
      <div className="arch-grid opacity-20 absolute inset-0" />
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      <div className="container-fluid relative z-10">
        {/* Section Header */}
        <div ref={headRef} className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="divider-brand" />
            <span className="text-eyebrow">Our Story</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg mb-5"
          >
            More Than a Builder.{' '}
            <span className="gradient-text-brand">A Legacy.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-base md:text-lg leading-relaxed font-medium max-w-2xl mb-8 text-sub"
          >
            With over 6 years of expertise, we specialize in residential construction, commercial projects,
            and premium interior design. We don't just build — we engineer experiences and craft communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/about" className="btn btn-outline text-[11px] group">
              Discover Full Story
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Two-column: Timeline + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Timeline */}
          <div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-8 text-dim">
              Our Journey
            </div>
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} item={m} index={i} />
            ))}
          </div>

          {/* Sticky Image */}
          <div className="relative hidden lg:block">
            <motion.div style={{ y: imageY }} className="sticky top-28">
              <div className="relative h-[560px] overflow-hidden rounded-sm group shadow-xl border border-border-primary">
                <Image
                  src="/assets/images/about_legacy.png"
                  alt="Blitcon Infra Legacy"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle gradient at bottom for overlay cards */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 50%)' }}
                />

                {/* Est. badge */}
                <div
                  className="absolute top-5 left-5 px-4 py-3 rounded-sm shadow-lg backdrop-blur-md bg-card border border-border-primary"
                >
                  <div className="text-[9px] font-black tracking-[0.25em] uppercase text-brand-accent">
                    Est. 2019
                  </div>
                  <div className="font-black text-sm mt-0.5 text-main">
                    Blitcon Infra
                  </div>
                </div>

                {/* Headquarters Badge - Fixed for Dark Mode Visibility */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="px-5 py-4 rounded-sm shadow-2xl backdrop-blur-xl border transition-all duration-300 bg-card border-border-primary"
                  >
                    <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-1 text-dim">
                      Headquarters
                    </div>
                    <div className="font-black text-base tracking-tight text-main">
                      Hyderabad, Telangana
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-8 text-dim">
            Our Values
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} v={v} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
