'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1, name: 'Rajesh Mehta', role: 'MD, Mehta Enterprises',
    project: 'Nexus Business Hub, Bengaluru', initials: 'RM', rating: 5,
    quote: 'Blitcon Infra delivered our 850,000 sq.ft commercial campus on time, on budget, and beyond specification. The quality of structural work and the transparency in execution was unlike any contractor we\'ve worked with in 20 years.',
  },
  {
    id: 2, name: 'Priya Chandrasekaran', role: 'Homeowner',
    project: 'Azure Apartments, Chennai', initials: 'PC', rating: 5,
    quote: 'What sets Blitcon apart is the attention to detail in finishes. Every surface, every corner, every fixture — you can feel the quality. Moving into my apartment felt like walking into a five-star hotel.',
  },
  {
    id: 3, name: 'Vinod Reddy', role: 'Director, VR Realty Group',
    project: 'Greenfield Township, Pune', initials: 'VR', rating: 5,
    quote: 'Managing a 120-acre township is extraordinarily complex. Blitcon\'s project management systems, real-time dashboards, and milestone reporting gave us complete confidence throughout a 3-year engagement.',
  },
  {
    id: 4, name: 'Anita Sharma', role: 'CEO, Sharma Holdings',
    project: 'The Pinnacle Tower, Mumbai', initials: 'AS', rating: 5,
    quote: 'The engineering precision on The Pinnacle project is world-class. The structural teams, façade engineers, and MEP coordinators worked in seamless alignment — delivering an icon for Mumbai\'s skyline.',
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)
  const t = testimonials[active]

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="arch-grid opacity-15 absolute inset-0" />
      <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      <div className="container-fluid relative z-10">
        {/* Header */}
        <div ref={headRef} className="mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-5">
            <div className="divider-brand" />
            <span className="text-eyebrow">Client Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md"
          >
            Heard From <span className="gradient-text-brand">Our Clients</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Quote Panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -32, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 32, filter: 'blur(4px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="card-premium p-8 lg:p-10 relative"
              >
                {/* Giant quote icon */}
                <Quote
                  className="absolute top-6 right-7 w-10 h-10 pointer-events-none"
                  style={{ color: 'var(--brand-accent)', opacity: 0.15 }}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-7">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ background: 'var(--brand-accent)' }}
                    />
                  ))}
                </div>

                <blockquote
                  className="text-lg lg:text-xl leading-relaxed font-medium mb-8"
                  style={{ color: 'var(--text-primary)' }}
                >
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4" style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-primary)' }}>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-black text-sm"
                    style={{
                      background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))',
                      color: '#ffffff',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-black text-sm" style={{ color: 'var(--text-primary)' }}>{t.name}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest mt-0.5" style={{ color: 'var(--brand-accent)' }}>{t.project}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-6">
              <button
                suppressHydrationWarning
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--surface-card)', border: '1.5px solid var(--border-primary)', boxShadow: 'var(--shadow-sm)' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    suppressHydrationWarning
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? '2rem' : '0.5rem',
                      height: '0.375rem',
                      background: i === active ? 'var(--brand-accent)' : 'var(--border-primary)',
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                suppressHydrationWarning
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--surface-card)', border: '1.5px solid var(--border-primary)', boxShadow: 'var(--shadow-sm)' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
              </button>
            </div>
          </div>

          {/* Client stack */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              All Testimonials
            </div>
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                suppressHydrationWarning
                onClick={() => setActive(i)}
                className="flex items-center gap-4 p-4 rounded-sm text-left transition-all duration-300 group w-full"
                style={{
                  background: i === active ? 'var(--surface-card)' : 'transparent',
                  border: i === active ? '1.5px solid var(--border-accent)' : '1.5px solid transparent',
                  boxShadow: i === active ? 'var(--shadow-md)' : 'none',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs transition-all duration-300"
                  style={{
                    background: i === active
                      ? 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))'
                      : 'var(--bg-tertiary)',
                    color: i === active ? '#ffffff' : 'var(--text-muted)',
                  }}
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <div
                    className="font-black text-sm truncate transition-colors duration-200"
                    style={{ color: i === active ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {item.name}
                  </div>
                  <div className="text-[10px] font-bold truncate" style={{ color: 'var(--text-muted)' }}>
                    {item.project}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
