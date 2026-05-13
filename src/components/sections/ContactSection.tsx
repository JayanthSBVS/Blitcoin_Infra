'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { Icon: Phone, label: 'Call Us', value: '+91 7997696688', href: 'tel:+917997696688' },
  { Icon: Mail, label: 'Email Us', value: 'Projects@blitconinfra.com', href: 'mailto:Projects@blitconinfra.com' },
  { Icon: MapPin, label: 'Head Office', value: 'Hyderabad, Telangana, India', href: '#' },
]

const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Pune', 'Delhi']

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', projectType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    background: 'var(--surface-card)',
    border: `1.5px solid ${focused === field ? 'var(--brand-accent)' : 'var(--border-primary)'}`,
    color: 'var(--text-primary)',
    fontSize: '0.925rem',
    fontWeight: '600',
    fontFamily: 'inherit',
    padding: '1.125rem 1.5rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focused === field ? '0 10px 20px -10px rgba(30,64,175,0.2)' : 'var(--shadow-sm)',
    borderRadius: '4px',
  } as React.CSSProperties)

  return (
    <section id="contact" className="relative overflow-hidden" style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="arch-grid opacity-15 absolute inset-0" />
      <div className="absolute top-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      <div className="container-fluid relative z-10">
        {/* Header */}
        <div ref={headRef} className="mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={headInView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-5">
            <div className="divider-brand" />
            <span className="text-eyebrow">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md"
          >
            Start Your <span className="gradient-text-brand">Project</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            <div>
              <h3 className="font-black text-lg mb-2" style={{ color: 'var(--text-primary)' }}>Let's Build Together</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                Whether you have a detailed brief or just a vision, our team is ready to help you transform it into a landmark structure.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {contactInfo.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1.5px solid var(--border-primary)',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'var(--brand-accent)' }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-muted)' }}>{label}</div>
                    <div
                      className="text-sm font-bold mt-0.5 transition-colors duration-200 group-hover:text-brand-600"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Operating cities */}
            <div className="card-premium p-5">
              <div className="text-[9px] font-black tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
                Operating In
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="text-[9px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: 'var(--bg-secondary)',
                      color: 'var(--brand-accent)',
                      border: '1.5px solid var(--border-accent)',
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 card-premium rounded-sm"
              >
                <CheckCircle className="w-14 h-14 mb-5" style={{ color: 'var(--brand-accent)' }} />
                <h3 className="font-black text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-premium p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--text-muted)' }}>
                      Your Name *
                    </label>
                    <input
                      required type="text" suppressHydrationWarning
                      placeholder="Rajesh Kumar"
                      style={inputStyle('name')}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--text-muted)' }}>
                      Email *
                    </label>
                    <input
                      required type="email" suppressHydrationWarning
                      placeholder="you@company.com"
                      style={inputStyle('email')}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--text-muted)' }}>
                      Phone
                    </label>
                    <input
                      type="tel" suppressHydrationWarning
                      placeholder="+91 98765 43210"
                      style={inputStyle('phone')}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--text-muted)' }}>
                      Project Type
                    </label>
                    <select
                      suppressHydrationWarning
                      style={{ ...inputStyle('projectType'), cursor: 'pointer' }}
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      onFocus={() => setFocused('projectType')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select type</option>
                      <option>Residential Villa</option>
                      <option>Apartment Development</option>
                      <option>Commercial Construction</option>
                      <option>Township Development</option>
                      <option>Interior Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: 'var(--text-muted)' }}>
                    Project Brief *
                  </label>
                  <textarea
                    required suppressHydrationWarning
                    rows={5}
                    placeholder="Describe your project vision, location, scale, and timeline..."
                    style={{ ...inputStyle('message'), resize: 'none' }}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="btn btn-primary w-full justify-center h-16 sm:h-auto mt-2 text-[11px] tracking-[0.2em] shadow-brand active:scale-[0.98] transition-all"
                >
                  Send Project Brief
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
