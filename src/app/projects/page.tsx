'use client'

import PageHero from '@/components/ui/PageHero'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Maximize2, MapPin, Filter, ArrowUpRight, Tag, X } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'
import Reveal from '@/components/ui/Reveal'
import Link from 'next/link'

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation']

const projects = [
  {
    id: 1,
    title: 'The Skyline Villa',
    category: 'Residential',
    location: 'Banjara Hills, Hyderabad',
    image: '/assets/images/real_residential.png',
    size: '4,500 Sqft',
    status: 'Completed',
    gallery: ['/assets/images/real_residential.png', '/assets/images/real_interior.png'],
  },
  {
    id: 2,
    title: 'Enterprise Plaza',
    category: 'Commercial',
    location: 'HITEC City, Hyderabad',
    image: '/assets/images/real_commercial.png',
    size: '12,000 Sqft',
    status: 'In Progress',
    gallery: ['/assets/images/real_commercial.png', '/assets/images/real_construction.png'],
  },
  {
    id: 3,
    title: 'Modern Zen Interior',
    category: 'Interior',
    location: 'Jubilee Hills, Hyderabad',
    image: '/assets/images/real_interior.png',
    size: '2,800 Sqft',
    status: 'Completed',
    gallery: ['/assets/images/real_interior.png', '/assets/images/real_residential.png'],
  },
  {
    id: 4,
    title: 'Heritage Remodel',
    category: 'Renovation',
    location: 'Secunderabad',
    image: '/assets/images/real_residential.png',
    size: '3,200 Sqft',
    status: 'Completed',
    gallery: ['/assets/images/real_residential.png', '/assets/images/real_interior.png'],
  },
  {
    id: 5,
    title: 'Green Valley Township',
    category: 'Residential',
    location: 'Gachibowli, Hyderabad',
    image: '/assets/images/real_construction.png',
    size: '50 Acres',
    status: 'In Planning',
    gallery: ['/assets/images/real_construction.png', '/assets/images/real_residential.png'],
  },
  {
    id: 6,
    title: 'Corporate Loft',
    category: 'Commercial',
    location: 'Madhapur, Hyderabad',
    image: '/assets/images/real_commercial.png',
    size: '8,500 Sqft',
    status: 'Completed',
    gallery: ['/assets/images/real_commercial.png', '/assets/images/real_interior.png'],
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter)

  return (
    <PageTransition>
      <main className="bg-surface min-h-screen">
        <PageHero
          title="Architecture of Tomorrow"
          subtitle="Our Portfolio"
          description="A curated showcase of our most ambitious residential, commercial, and urban development projects across the region."
          image="/assets/images/real_construction.png"
          breadcrumb={[{ label: 'Projects' }]}
        />

        {/* -- Filter Bar -- */}
        <section className="py-12 border-b border-border-primary sticky top-[80px] z-40 bg-surface/80 backdrop-blur-md">
          <div className="container-fluid">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <Reveal>
                <div className="flex items-center gap-3">
                  <Filter className="w-4 h-4 text-brand-accent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dim">Filter By Category</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                        filter === cat 
                          ? 'bg-brand-primary text-white shadow-brand' 
                          : 'bg-surface-stone text-dim hover:text-main border border-border-primary'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* -- Project Grid -- */}
        <section className="py-24 lg:py-32">
          <div className="container-fluid">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-stone shadow-lg hover:shadow-xl transition-shadow duration-500 border border-border-primary group">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Dark Overlay - Always visible on mobile, hover on desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/50 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 lg:p-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Tag className="w-3 h-3 text-brand-light" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-light">{p.category}</span>
                            <span className="text-[10px] font-black text-white/50">•</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{p.status}</span>
                          </div>
                          <h3 className="text-xl lg:text-2xl font-black text-white leading-tight">{p.title}</h3>
                          <div className="flex items-center gap-2 text-white/80">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{p.location}</span>
                          </div>
                          <div className="pt-4 flex items-center justify-between border-t border-white/20 mt-4">
                            <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{p.size}</span>
                            <button 
                              onClick={() => setSelectedProject(p)}
                              className="btn btn-primary text-[9px] px-4 py-2"
                            >
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info Tag (Static) */}
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-brand-accent text-white rounded-sm shadow-sm lg:opacity-100 lg:group-hover:opacity-0 transition-opacity">
                        <span className="text-[9px] font-black uppercase tracking-widest">{p.status}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* -- Page Closure -- */}
        <section className="py-24 border-t border-border-secondary">
          <div className="container-fluid">
             <div className="flex flex-col items-center text-center">
                <div className="w-20 h-px bg-brand-accent/20 mb-12" />
                <p className="text-sm font-black uppercase tracking-[0.3em] text-dim">Architectural Excellence Since 2019</p>
             </div>
          </div>
        </section>

        <Footer />

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-brand-deep/95 backdrop-blur-sm flex flex-col"
            >
              <div className="p-4 md:p-8 flex justify-between items-center border-b border-white/10">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white">{selectedProject.title}</h3>
                  <p className="text-[10px] md:text-xs font-bold text-brand-accent uppercase tracking-widest mt-1">
                    {selectedProject.location} • {selectedProject.size} • {selectedProject.status}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto pb-12">
                  {selectedProject.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-xl">
                       <Image src={img} alt={`${selectedProject.title} ${i+1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" quality={90} className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  )
}
