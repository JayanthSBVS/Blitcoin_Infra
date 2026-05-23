'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, ChevronDown, Building2, Map, ShieldCheck, Clock } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'
import Reveal from '@/components/ui/Reveal'

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<Record<string, string>>({
    name: '', email: '', phone: '', city: '', service: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    // Simulate network request
    setTimeout(() => {
      setFormState('success')
    }, 1500)
  }

  const inputClasses = (fieldName: string) => `
    w-full bg-transparent border-b-2 py-4 px-0 text-base font-medium outline-none transition-all duration-300
    ${focusedField === fieldName ? 'border-brand-accent text-main' : 'border-border-primary text-main'}
    placeholder:text-transparent
  `

  const labelClasses = (fieldName: string) => `
    absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] font-black text-[10px]
    ${focusedField === fieldName || formValues[fieldName]
      ? '-top-2 text-brand-accent' 
      : 'top-4 text-dim'}
  `

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

        {/* -- Contact Form & Info Section -- */}
        <section className="py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-surface-stone/30 pointer-events-none" />
          <div className="container-fluid relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* -- Contact Info Left -- */}
              <div className="lg:col-span-4 sticky top-32">
                <Reveal>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-px bg-brand-accent" />
                    <span className="text-eyebrow uppercase">Direct Reach</span>
                  </div>
                  <h2 className="text-display-sm font-black mb-10 leading-tight text-main">We are ready to <br/><span className="text-brand-accent">Collaborate.</span></h2>
                  
                  <div className="space-y-10">
                    <div className="flex gap-5 group items-start">
                      <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 bg-surface-card border border-border-primary group-hover:border-brand-accent/50 transition-all duration-500">
                        <Phone className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-dim mb-1">Phone</h4>
                        <p className="text-lg font-black text-main">+91 7997696688</p>
                        <p className="text-xs text-sub mt-1">Mon - Sat, 9am - 7pm</p>
                      </div>
                    </div>

                    <div className="flex gap-5 group items-start">
                      <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 bg-surface-card border border-border-primary group-hover:border-brand-accent/50 transition-all duration-500">
                        <Mail className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-dim mb-1">Email</h4>
                        <a href="mailto:Projects@blitconinfra.com" className="text-base font-black text-main hover:text-brand-accent transition-colors">Projects@blitconinfra.com</a>
                        <p className="text-xs text-sub mt-1">Inquiries within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex gap-5 group items-start">
                      <div className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 bg-surface-card border border-border-primary group-hover:border-brand-accent/50 transition-all duration-500">
                        <MapPin className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-dim mb-1">Location</h4>
                        <p className="text-lg font-black text-main">Hyderabad, India</p>
                        <p className="text-xs text-sub mt-1">Serving the entire regional area</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-14 pt-8 border-t border-border-primary flex flex-col gap-4">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dim mb-2">Connect with us</p>
                     <div className="flex gap-3">
                       {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
                         <a key={social} href="#" className="text-xs font-bold text-main hover:text-brand-accent border-b border-transparent hover:border-brand-accent transition-all">
                           {social}
                         </a>
                       ))}
                     </div>
                  </div>
                </Reveal>
              </div>

              {/* -- Premium Interactive Form Right -- */}
              <div className="lg:col-span-8">
                <Reveal delay={0.2}>
                  <div className="bg-surface-card border border-border-primary rounded-sm p-8 md:p-14 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex items-center gap-3 mb-12 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                        <MessageSquare className="w-4 h-4 text-brand-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-main">Project Inquiry</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-dim mt-1">Fill out the details below</p>
                      </div>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {formState === 'success' ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center py-20 text-center"
                        >
                          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                          </div>
                          <h4 className="text-2xl font-black text-main mb-3">Inquiry Received</h4>
                          <p className="text-sub mb-8 max-w-sm">Thank you for reaching out. Our engineering team will review your project details and contact you within 24 hours.</p>
                          <button 
                            onClick={() => setFormState('idle')}
                            className="btn btn-outline text-xs tracking-widest uppercase"
                          >
                            Send Another Inquiry
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form 
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit} 
                          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 relative z-10"
                        >
                          {/* Name */}
                          <div className="relative group pt-4">
                            <input 
                              type="text" 
                              id="name"
                              value={formValues.name}
                              onChange={handleChange}
                              required
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              className={inputClasses('name')} 
                            />
                            <label htmlFor="name" className={labelClasses('name')}>Full Name *</label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 group-focus-within:w-full" />
                          </div>

                          {/* Email */}
                          <div className="relative group pt-4">
                            <input 
                              type="email" 
                              id="email"
                              value={formValues.email}
                              onChange={handleChange}
                              required
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              className={inputClasses('email')} 
                            />
                            <label htmlFor="email" className={labelClasses('email')}>Email Address *</label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 group-focus-within:w-full" />
                          </div>

                          {/* Phone */}
                          <div className="relative group pt-4">
                            <input 
                              type="tel" 
                              id="phone"
                              value={formValues.phone}
                              onChange={handleChange}
                              required
                              onFocus={() => setFocusedField('phone')}
                              onBlur={() => setFocusedField(null)}
                              className={inputClasses('phone')} 
                            />
                            <label htmlFor="phone" className={labelClasses('phone')}>Phone Number *</label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 group-focus-within:w-full" />
                          </div>

                          {/* City */}
                          <div className="relative group pt-4">
                            <input 
                              type="text" 
                              id="city"
                              value={formValues.city}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('city')}
                              onBlur={() => setFocusedField(null)}
                              className={inputClasses('city')} 
                            />
                            <label htmlFor="city" className={labelClasses('city')}>City</label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 group-focus-within:w-full" />
                          </div>

                          {/* Service Type */}
                          <div className="md:col-span-2 relative group pt-4">
                            <div className="relative">
                              <select 
                                id="service"
                                required
                                value={formValues.service}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('service')}
                                onBlur={() => setFocusedField(null)}
                                className={`${inputClasses('service')} appearance-none cursor-pointer bg-transparent relative z-10`}
                              >
                                <option value="" disabled hidden></option>
                                <option value="residential">Residential Construction</option>
                                <option value="commercial">Commercial Construction</option>
                                <option value="apartment">Apartment Development</option>
                                <option value="interior">Interior Design</option>
                                <option value="township">Township Development</option>
                                <option value="renovation">Home Renovation</option>
                              </select>
                              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-dim pointer-events-none z-0" />
                            </div>
                            <label htmlFor="service" className={labelClasses('service')}>Type of Service *</label>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 group-focus-within:w-full" />
                          </div>

                          {/* Message */}
                          <div className="md:col-span-2 relative group pt-4">
                            <textarea 
                              id="message"
                              rows={4}
                              required
                              value={formValues.message}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                              className={`${inputClasses('message')} resize-none`}
                            ></textarea>
                            <label htmlFor="message" className={labelClasses('message')}>Project Brief / Message *</label>
                            <div className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-500 group-focus-within:w-full" />
                          </div>

                          {/* Submit */}
                          <div className="md:col-span-2 pt-6">
                            <button 
                              type="submit" 
                              disabled={formState === 'submitting'}
                              className="w-full relative overflow-hidden group bg-brand-primary text-white font-bold tracking-[0.2em] uppercase text-[11px] h-16 rounded-sm flex items-center justify-center transition-all disabled:opacity-70"
                            >
                              <div className="absolute inset-0 bg-brand-accent transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                              <span className="relative z-10 flex items-center gap-3">
                                {formState === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                                {formState !== 'submitting' && <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                              </span>
                            </button>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* -- Why Contact Us Section -- */}
        <section className="py-20 lg:py-28 bg-surface-card border-y border-border-primary">
          <div className="container-fluid">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h3 className="text-3xl font-black text-main mb-4">Why Consult With Us?</h3>
                <p className="text-sub font-medium">Partner with engineering excellence. Our initial consultations are designed to bring clarity to your vision before a single brick is laid.</p>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'Expert Guidance', desc: 'Get actionable insights from senior structural engineers and architects tailored to your specific plot and vision.' },
                { icon: Map, title: 'Project Planning', desc: 'Receive a high-level timeline and feasibility assessment to help you plan your investment accurately.' },
                { icon: Clock, title: 'Transparent Costing', desc: 'Understand our package structures and get a clear picture of potential costs without hidden surprises.' }
              ].map((feature, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="p-8 border border-border-primary/50 bg-surface-stone rounded-sm h-full hover:border-brand-accent/50 transition-colors">
                    <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <h4 className="text-lg font-black text-main mb-3">{feature.title}</h4>
                    <p className="text-sm text-sub">{feature.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -- Map Visual -- */}
        <section className="relative h-[600px] w-full group overflow-hidden">
          {/* Interactive iframe map could go here, using an image as placeholder for premium look */}
          <Image
            src="/assets/images/hero_bg.png"
            alt="Hyderabad Location"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary" />
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Reveal>
              <div className="p-10 lg:p-14 bg-surface-card/90 backdrop-blur-xl rounded-sm text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] max-w-sm border border-border-primary pointer-events-auto hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 rounded-full border border-brand-accent/30 animate-ping opacity-20" />
                  <Building2 className="w-6 h-6 text-brand-accent relative z-10" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main tracking-tight">Our Headquarters</h3>
                <p className="text-sm text-sub font-medium leading-relaxed">
                  Hyderabad, Telangana
                  <br />India
                </p>
                <div className="mt-8 pt-8 border-t border-border-primary">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Corporate Office</span>
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
