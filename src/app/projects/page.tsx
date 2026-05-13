'use client'

import PageHero from '@/components/ui/PageHero'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Maximize2, MapPin, Filter, ArrowUpRight, Tag } from 'lucide-react'
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
    image: '/assets/images/project_residential.png',
    size: '4,500 Sqft',
  },
  {
    id: 2,
    title: 'Enterprise Plaza',
    category: 'Commercial',
    location: 'HITEC City, Hyderabad',
    image: '/assets/images/project_commercial.png',
    size: '12,000 Sqft',
  },
  {
    id: 3,
    title: 'Modern Zen Interior',
    category: 'Interior',
    location: 'Jubilee Hills, Hyderabad',
    image: '/assets/images/project_interior.png',
    size: '2,800 Sqft',
  },
  {
    id: 4,
    title: 'Heritage Remodel',
    category: 'Renovation',
    location: 'Secunderabad',
    image: '/assets/images/about_legacy.png',
    size: '3,200 Sqft',
  },
  {
    id: 5,
    title: 'Green Valley Township',
    category: 'Residential',
    location: 'Gachibowli, Hyderabad',
    image: '/assets/images/hero_bg.png',
    size: '50 Acres',
  },
  {
    id: 6,
    title: 'Corporate Loft',
    category: 'Commercial',
    location: 'Madhapur, Hyderabad',
    image: '/assets/images/project_commercial.png',
    size: '8,500 Sqft',
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter)

  return (
    <PageTransition>
      <main className="bg-surface min-h-screen">
        <PageHero
          title="Architecture of Tomorrow"
          subtitle="Our Portfolio"
          description="A curated showcase of our most ambitious residential, commercial, and urban development projects across the region."
          image="/assets/images/project_commercial.png"
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
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-stone shadow-lg hover:shadow-xl transition-shadow duration-500 border border-border-primary">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-brand-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Tag className="w-3 h-3 text-brand-light" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-light">{p.category}</span>
                          </div>
                          <h3 className="text-2xl font-black text-white leading-tight">{p.title}</h3>
                          <div className="flex items-center gap-2 text-white/60">
                            <MapPin className="w-3 h-3" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">{p.location}</span>
                          </div>
                          <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-4">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{p.size}</span>
                            <button className="w-10 h-10 rounded-full bg-brand-accent text-white flex items-center justify-center hover:bg-white hover:text-brand-accent transition-colors">
                              <ArrowUpRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info Tag (Static) */}
                      <div className="absolute top-6 right-6 z-10 px-4 py-1.5 bg-card/90 backdrop-blur-md rounded-sm shadow-sm group-hover:opacity-0 transition-opacity border border-border-primary">
                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary">{p.category}</span>
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
      </main>
    </PageTransition>
  )
}
