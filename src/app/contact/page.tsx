'use client'

import PageHero from '@/components/ui/PageHero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'
import Reveal from '@/components/ui/Reveal'

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="bg-primary min-h-screen">
        <PageHero
          title="Start Your Architectural Journey"
          subtitle="Contact Us"
          description="Ready to build? Reach out to our engineering experts for a consultation or detailed project estimation."
          image="/assets/images/project_interior.png"
          breadcrumb={[{ label: 'Contact' }]}
        />

        <section className="py-24 lg:py-32">
          <div className="container-fluid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* -- Contact Info -- */}
              <div className="lg:col-span-4">
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-px bg-brand-accent" />
                    <span className="text-eyebrow uppercase">Direct Reach</span>
                  </div>
                  <h2 className="text-display-sm font-black mb-10 leading-tight text-main">We are ready to <span className="text-brand-accent">Collaborate.</span></h2>
                  
                  <div className="space-y-12">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-sm bg-brand-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 border border-brand-accent/10">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-dim mb-2">Phone</h4>
                        <p className="text-xl font-black text-main">+91 7997696688</p>
                        <p className="text-sm text-sub font-medium">Mon - Sat, 9am - 7pm</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-sm bg-brand-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 border border-brand-accent/10">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-dim mb-2">Email</h4>
                        <p className="text-xl font-black text-main">Projects@blitconinfra.com</p>
                        <p className="text-sm text-sub font-medium">Inquiries within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-sm bg-brand-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 border border-brand-accent/10">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-dim mb-2">Location</h4>
                        <p className="text-xl font-black text-main">Hyderabad, India</p>
                        <p className="text-sm text-sub font-medium">Serving the entire regional area</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 pt-10 border-t border-border-primary">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-dim">Office Hours Active</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* -- Main Contact Form -- */}
              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <div className="card-premium p-10 lg:p-16 border-border-primary bg-card shadow-xl">
                    <div className="flex items-center gap-3 mb-10">
                      <MessageSquare className="w-5 h-5 text-brand-accent" />
                      <h3 className="text-2xl font-black text-main">Project Inquiry Form</h3>
                    </div>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-dim">Full Name *</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-surface-stone border border-border-primary/50 p-5 rounded-sm text-sm font-bold focus:ring-1 focus:ring-brand-accent transition-all outline-none text-main placeholder:text-dim/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-dim">Phone Number *</label>
                        <input type="tel" placeholder="+91 00000 00000" className="w-full bg-surface-stone border border-border-primary/50 p-5 rounded-sm text-sm font-bold focus:ring-1 focus:ring-brand-accent transition-all outline-none text-main placeholder:text-dim/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-dim">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full bg-surface-stone border border-border-primary/50 p-5 rounded-sm text-sm font-bold focus:ring-1 focus:ring-brand-accent transition-all outline-none text-main placeholder:text-dim/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-dim">City</label>
                        <input type="text" placeholder="Hyderabad" className="w-full bg-surface-stone border border-border-primary/50 p-5 rounded-sm text-sm font-bold focus:ring-1 focus:ring-brand-accent transition-all outline-none text-main placeholder:text-dim/50" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-dim">Type of Service</label>
                        <select className="w-full bg-surface-stone border border-border-primary/50 p-5 rounded-sm text-sm font-bold focus:ring-1 focus:ring-brand-accent transition-all outline-none cursor-pointer appearance-none text-main">
                          <option>Residential Construction</option>
                          <option>Commercial Construction</option>
                          <option>Apartment Development</option>
                          <option>Interior Design</option>
                          <option>Township Development</option>
                          <option>Renovation</option>
                        </select>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-dim">Project Brief *</label>
                        <textarea rows={6} placeholder="Tell us about your vision..." className="w-full bg-surface-stone border border-border-primary/50 p-5 rounded-sm text-sm font-bold focus:ring-1 focus:ring-brand-accent transition-all outline-none resize-none text-main placeholder:text-dim/50"></textarea>
                      </div>
                      <div className="md:col-span-2 pt-4">
                        <button type="submit" className="btn btn-primary w-full justify-center py-6 shadow-brand text-sm tracking-widest">
                          Submit Project Brief
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* -- Map Visual -- */}
        <section className="py-24 lg:py-32 bg-surface-stone border-t border-border-primary/50">
          <div className="container-fluid">
            <Reveal>
              <div className="relative h-[550px] rounded-sm overflow-hidden shadow-2xl group border border-border-primary">
                <Image
                  src="/assets/images/hero_bg.png"
                  alt="Hyderabad Location"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
                
                {/* Fixed Hyderabad HQ Card */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="p-10 lg:p-14 bg-card/90 backdrop-blur-xl rounded-sm text-center shadow-2xl max-w-sm border border-border-primary/50 transform transition-transform group-hover:scale-[1.02] duration-500">
                    <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-8 border border-brand-accent/20">
                      <MapPin className="w-8 h-8 text-brand-accent" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-main tracking-tight">Our Hyderabad HQ</h3>
                    <p className="text-base text-sub font-medium leading-relaxed">
                      Strategically located to serve premium infrastructure and architectural projects across the metropolitan region.
                    </p>
                    <div className="mt-8 pt-8 border-t border-border-secondary/50">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Corporate Office</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
