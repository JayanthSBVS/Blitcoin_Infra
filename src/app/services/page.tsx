import PageHero from '@/components/ui/PageHero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Home, 
  Building2, 
  Layout, 
  PenTool, 
  Hammer, 
  Map, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Compass,
  Boxes
} from 'lucide-react'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import PageTransition from '@/components/ui/PageTransition'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: 'Our Services | Blitcon Infra',
  description: 'Comprehensive construction and infrastructure services including residential, commercial, township development, and premium interiors.',
}

const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    icon: Home,
    description: 'Specializing in custom villas and premium homes. We transform your personal vision into structural reality with uncompromising quality.',
    features: ['Custom Villa Design', 'Premium Material Sourcing', 'End-to-End Project Management', 'Sustainable Building Practices'],
    image: '/assets/images/project_residential.png'
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    icon: Building2,
    description: 'Enterprise-grade spaces designed for functionality and corporate excellence. We build offices, retail spaces, and industrial facilities.',
    features: ['High-Performance Workspaces', 'Modern Architectural Glass', 'Structural Engineering', 'Regulatory Compliance'],
    image: '/assets/images/project_commercial.png'
  },
  {
    id: 'interiors',
    title: 'Home Interior',
    icon: Layout,
    description: 'Bespoke spatial design that reflects your lifestyle. Our interior designers blend luxury with ergonomics for every room.',
    features: ['Modular Kitchens', 'Custom Lighting Design', 'Premium Woodwork', 'Space Optimization'],
    image: '/assets/images/project_interior.png'
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    icon: Hammer,
    description: 'Breathe new life into existing structures. We specialize in the remodeling of old buildings with modern upgrades.',
    features: ['Structural Strengthening', 'Façade Modernization', 'Electrical & Plumbing Overhaul', 'Aesthetic Refinement'],
    image: '/assets/images/about_legacy.png'
  }
]

const technicalOfferings = [
  { icon: FileText, title: '2D Floor Plan', desc: 'Precision mapping of your space.' },
  { icon: Boxes, title: 'Structural Design', desc: 'Engineering safety and longevity.' },
  { icon: PenTool, title: '3D Elevation', desc: 'Photorealistic architectural previews.' },
  { icon: Compass, title: 'Digital Survey', desc: 'Accurate plot and contour analysis.' }
]

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="bg-surface min-h-screen">
        <PageHero
          title="Comprehensive Infrastructure Solutions"
          subtitle="Services"
          description="From groundbreaking surveys to the final interior polish, we offer a full spectrum of architectural and construction expertise."
          image="/assets/images/hero_bg.png"
          breadcrumb={[{ label: 'Services' }]}
        />

        {/* -- Main Services -- */}
        <section className="py-24 lg:py-32">
          <div className="container-fluid">
            <div className="space-y-32">
              {services.map((s, i) => (
                <div key={s.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Reveal direction={i % 2 === 1 ? 'left' : 'right'}>
                      <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group cursor-pointer border border-border-primary">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors pointer-events-none" />
                      </div>
                    </Reveal>
                  </div>

                  <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Reveal direction={i % 2 === 1 ? 'right' : 'left'} delay={0.1}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-px bg-brand-accent" />
                        <s.icon className="w-5 h-5 text-brand-accent" />
                        <span className="text-eyebrow uppercase">Expertise</span>
                      </div>
                      <h2 className="text-display-sm font-black mb-6 leading-tight text-main">{s.title}</h2>
                      <p className="text-lg text-sub mb-10 font-medium leading-relaxed">
                        {s.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                        {s.features.map((f) => (
                          <div key={f} className="flex items-center gap-3 py-2 border-b border-border-secondary/50">
                            <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                            <span className="text-sm font-bold text-main">{f}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact" className="btn btn-outline group px-8 py-4">
                        Inquire About This Service
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Technical Pre-Construction Offerings -- */}
        <section className="py-24 lg:py-32 bg-surface-stone relative overflow-hidden border-y border-border-primary/50">
          <div className="absolute inset-0 arch-grid opacity-10 pointer-events-none" />
          
          <div className="container-fluid relative z-10">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-24">
                <span className="text-eyebrow uppercase mb-4 block">Design & Engineering</span>
                <h2 className="text-display-sm font-black mb-6 text-main">Pre-Construction Services</h2>
                <p className="text-lg text-sub font-medium leading-relaxed">
                  Every successful build starts with meticulous planning. We provide the technical backbone for your architectural journey.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalOfferings.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="card-premium p-10 bg-card border-border-primary hover:border-brand-accent transition-all duration-500 group h-full shadow-md hover:shadow-xl">
                    <div className="w-14 h-14 rounded-sm bg-brand-accent/10 flex items-center justify-center mb-8 transition-transform group-hover:rotate-12 border border-brand-accent/20">
                      <t.icon className="w-7 h-7 text-brand-accent" />
                    </div>
                    <h4 className="text-xl font-black mb-4 text-main">{t.title}</h4>
                    <p className="text-sm text-sub font-medium leading-relaxed">{t.desc}</p>
                    
                    <div className="mt-8 pt-6 border-t border-border-secondary flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-accent">Learn More</span>
                      <ArrowRight className="w-3 h-3 text-brand-accent" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -- Additional Segments -- */}
        <section className="py-24 lg:py-32 mb-20">
          <div className="container-fluid">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Reveal>
                <div className="card-premium p-12 flex flex-col items-center text-center h-full hover:border-brand-accent transition-colors bg-card border-border-primary shadow-sm hover:shadow-lg">
                  <Building2 className="w-12 h-12 text-brand-accent mb-8" />
                  <h3 className="text-2xl font-black mb-4 text-main">Apartment Development</h3>
                  <p className="text-sm text-sub leading-relaxed font-medium">
                    High-density residential solutions focused on community living and modern amenities.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card-premium p-12 flex flex-col items-center text-center h-full hover:border-brand-accent transition-colors bg-card border-border-primary shadow-sm hover:shadow-lg">
                  <Map className="w-12 h-12 text-brand-accent mb-8" />
                  <h3 className="text-2xl font-black mb-4 text-main">Township Development</h3>
                  <p className="text-sm text-sub leading-relaxed font-medium">
                    Integrated urban planning for large-scale communities and sustainable infrastructure.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="card-premium p-12 flex flex-col items-center text-center h-full hover:border-brand-accent transition-colors bg-card border-border-primary shadow-sm hover:shadow-lg">
                  <Boxes className="w-12 h-12 text-brand-accent mb-8" />
                  <h3 className="text-2xl font-black mb-4 text-main">Project Management</h3>
                  <p className="text-sm text-sub leading-relaxed font-medium">
                    Full-cycle oversight ensuring quality, safety, and timeliness in every execution phase.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
