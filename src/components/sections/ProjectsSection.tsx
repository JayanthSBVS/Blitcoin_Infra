'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

const categories = ['All', 'Residential', 'Commercial', 'Township', 'Interior']

const projects = [
  {
    id: 1, title: 'Skyline Residences', category: 'Residential',
    location: 'Hyderabad, TG', year: '2024', area: '2.4M sq.ft', status: 'Completed',
    desc: 'A landmark 42-tower residential complex setting new standards for urban living.',
    tags: ['Luxury', 'High-Rise', 'Smart Home'],
    image: '/assets/images/project_residential.png',
  },
  {
    id: 2, title: 'Nexus Business Hub', category: 'Commercial',
    location: 'Bengaluru, KA', year: '2023', area: '850K sq.ft', status: 'Completed',
    desc: 'A premium commercial campus designed for enterprise-grade operations.',
    tags: ['Corporate', 'Campus', 'Sustainable'],
    image: '/assets/images/project_commercial.png',
  },
  {
    id: 3, title: 'Greenfield Township', category: 'Township',
    location: 'Pune, MH', year: '2024', area: '120 acres', status: 'Ongoing',
    desc: 'An integrated 120-acre township with residential, retail, parks, and smart infrastructure.',
    tags: ['Smart City', 'Mixed-Use', 'Green'],
    image: '/assets/images/project_residential.png',
  },
  {
    id: 4, title: 'Azure Apartments', category: 'Residential',
    location: 'Chennai, TN', year: '2023', area: '480K sq.ft', status: 'Completed',
    desc: 'Premium mid-rise apartments with curated community spaces and resort-style amenities.',
    tags: ['Mid-Rise', 'Amenity-Rich', 'Community'],
    image: '/assets/images/project_residential.png',
  },
  {
    id: 5, title: 'The Pinnacle Tower', category: 'Commercial',
    location: 'Mumbai, MH', year: '2024', area: '1.2M sq.ft', status: 'Ongoing',
    desc: 'A 68-floor commercial icon reshaping Mumbai\'s skyline with cutting-edge architecture.',
    tags: ['High-Rise', 'Icon', 'LEED Gold'],
    image: '/assets/images/project_commercial.png',
  },
  {
    id: 6, title: 'The Luxe Interior', category: 'Interior',
    location: 'Delhi, DL', year: '2023', area: '12K sq.ft', status: 'Completed',
    desc: 'A 12,000 sq.ft showcase interior for a premium corporate client.',
    tags: ['Premium', 'Corporate', 'Bespoke'],
    image: '/assets/images/project_interior.png',
  },
]

function ProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

    const sizes = [
      'col-span-1 row-span-1', 
      'col-span-1 lg:row-span-2', 
      'col-span-1 lg:col-span-2 row-span-1', 
      'col-span-1 row-span-1', 
      'col-span-1 row-span-1', 
      'col-span-1 row-span-1'
    ]

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      className={`relative overflow-hidden cursor-pointer group rounded-sm ${sizes[index % sizes.length]} active:scale-[0.98] transition-all duration-300`}
      style={{
        minHeight: index % 3 === 1 ? '420px' : '260px',
        boxShadow: hovered ? 'var(--shadow-xl)' : 'var(--shadow-md)',
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        style={{
          transition: 'transform 1s ease, filter 0.5s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          filter: hovered ? 'brightness(0.7)' : 'brightness(0.85)',
        }}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="empty"
      />
      {/* Always-on cinematic gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.3) 50%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        {/* Top badges */}
        <div className="flex items-center justify-between">
          <span
            className="text-[9px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(30,64,175,0.85)', color: '#fff', backdropFilter: 'blur(8px)' }}
          >
            {project.category}
          </span>
          <span
            className="text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{
              background: project.status === 'Completed' ? 'rgba(16,185,129,0.85)' : 'rgba(245,158,11,0.85)',
              color: '#fff',
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Bottom info — always visible */}
        <div>
          <h3 className="font-black text-lg leading-tight text-white mb-1">{project.title}</h3>
          <div className="flex items-center gap-2 text-[11px] text-white/70 font-bold mb-3">
            <span>{project.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{project.area}</span>
          </div>

          {/* Hover reveal */}
          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/80 text-xs leading-relaxed mb-3">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrow button */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8, y: hovered ? 0 : -8 }}
        transition={{ duration: 0.25 }}
        className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}
      >
        <ArrowUpRight className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative overflow-hidden" style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="arch-grid opacity-15 absolute inset-0" />
      <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      <div className="container-fluid relative z-10">
        {/* Header */}
        <div ref={headRef} className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-5">
                <div className="divider-brand" />
                <span className="text-eyebrow">Portfolio</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 32 }} animate={headInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="text-display-md">
                Featured <span className="gradient-text-brand">Projects</span>
              </motion.h2>
            </div>

            {/* Category filters */}
            <motion.div initial={{ opacity: 0 }} animate={headInView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }} className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  suppressHydrationWarning
                  onClick={() => setActiveCategory(cat)}
                  className="text-[10px] font-black tracking-[0.2em] uppercase py-2.5 px-5 rounded-full transition-all duration-300"
                  style={activeCategory === cat ? {
                    background: 'var(--brand-accent)',
                    color: '#ffffff',
                    boxShadow: 'var(--shadow-brand)',
                    border: '1.5px solid var(--brand-accent)',
                  } : {
                    background: 'var(--surface-card)',
                    color: 'var(--text-secondary)',
                    border: '1.5px solid var(--border-primary)',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelectedProject(p)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9500] flex items-center justify-center p-4"
            style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(16px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full rounded-sm overflow-hidden"
              style={{ background: 'var(--surface-card)', boxShadow: 'var(--shadow-xl)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%)' }} />
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(8px)' }}
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="p-7">
                <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-1" style={{ color: 'var(--brand-accent)' }}>{selectedProject.category}</div>
                <h3 className="font-black text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>{selectedProject.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{selectedProject.desc}</p>
                <div className="grid grid-cols-3 gap-4 pt-5" style={{ borderTop: '1px solid var(--border-primary)' }}>
                  {[['Location', selectedProject.location], ['Year', selectedProject.year], ['Area', selectedProject.area]].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[9px] font-black tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{k}</div>
                      <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
