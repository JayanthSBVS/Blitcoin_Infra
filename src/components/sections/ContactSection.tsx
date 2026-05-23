'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const WHATSAPP_NUMBER = '917997696688'

const contactInfo = [
  { Icon: Phone, label: 'Call Us', value: '+91 7997696688', href: 'tel:+917997696688' },
  { Icon: Mail, label: 'Email Us', value: 'Projects@blitconinfra.com', href: 'mailto:Projects@blitconinfra.com' },
  { Icon: MapPin, label: 'Head Office', value: 'Hyderabad, Telangana, India', href: '#' },
]

const cities = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Pune', 'Delhi']

type FormData = {
  name: string
  email: string
  phone: string
  city: string
  projectType: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function buildWhatsAppMessage(data: FormData): string {
  const serviceLabel = data.projectType || 'Not specified'
  const cityLabel = data.city || 'Not specified'

  const message = [
    '🏗️ *New Blitcon Infra Lead*',
    '',
    '👤 *Name:*',
    data.name,
    '',
    '📞 *Phone:*',
    data.phone,
    '',
    '📧 *Email:*',
    data.email,
    '',
    '📍 *City:*',
    cityLabel,
    '',
    '🏠 *Service:*',
    serviceLabel,
    '',
    '💬 *Message:*',
    data.message,
    '',
    '─────────────────────',
    '📅 Received via Blitcon Infra Website',
  ].join('\n')

  return message
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[+\d][\d\s\-()]{7,14}$/.test(data.phone.trim())) {
    errors.phone = 'Enter a valid phone number'
  }
  if (!data.projectType) errors.projectType = 'Please select a service type'
  if (!data.message.trim()) errors.message = 'Please describe your project'
  return errors
}

export default function ContactSection() {
  const [formState, setFormState] = useState<FormData>({
    name: '', email: '', phone: '', city: '', projectType: '', message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success'>('idle')
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const [focused, setFocused] = useState<string | null>(null)

  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-12%' })

  const showToast = (type: 'success' | 'error', msg: string) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 4500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(formState)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      showToast('error', 'Please fix the errors before submitting.')
      return
    }
    setErrors({})
    setSubmitState('loading')

    // Small delay for loading UX feel, then open WhatsApp
    setTimeout(() => {
      try {
        const message = buildWhatsAppMessage(formState)
        const encoded = encodeURIComponent(message)
        const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
        window.open(waUrl, '_blank', 'noopener,noreferrer')
        setSubmitState('success')
        showToast('success', 'WhatsApp opened! Please send the pre-filled message.')
      } catch {
        setSubmitState('idle')
        showToast('error', 'Something went wrong. Please try again.')
      }
    }, 900)
  }

  const handleReset = () => {
    setFormState({ name: '', email: '', phone: '', city: '', projectType: '', message: '' })
    setErrors({})
    setSubmitState('idle')
  }

  const inputStyle = (field: string) => ({
    width: '100%',
    background: 'var(--surface-card)',
    border: `1.5px solid ${
      errors[field as keyof FormData]
        ? '#ef4444'
        : focused === field
        ? 'var(--brand-accent)'
        : 'var(--border-primary)'
    }`,
    color: 'var(--text-primary)',
    fontSize: '0.925rem',
    fontWeight: '600',
    fontFamily: 'inherit',
    padding: '1.125rem 1.5rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow:
      focused === field ? '0 10px 20px -10px rgba(30,64,175,0.2)' : 'var(--shadow-sm)',
    borderRadius: '4px',
  } as React.CSSProperties)

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ paddingBlock: 'var(--section-padding)', backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="arch-grid opacity-15 absolute inset-0" />
      <div
        className="absolute top-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }}
      />

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-sm shadow-2xl"
            style={{
              background: toast.type === 'success' ? '#052e16' : '#450a0a',
              border: `1.5px solid ${toast.type === 'success' ? '#16a34a' : '#dc2626'}`,
              minWidth: '280px',
              maxWidth: '400px',
            }}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#22c55e' }} />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#ef4444' }} />
            )}
            <span
              className="text-sm font-bold"
              style={{ color: toast.type === 'success' ? '#86efac' : '#fca5a5' }}
            >
              {toast.msg}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-fluid relative z-10">
        {/* Header */}
        <div ref={headRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 mb-5"
          >
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
              <h3 className="font-black text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                Let's Build Together
              </h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                Whether you have a detailed brief or just a vision, our team is ready to help you
                transform it into a landmark structure.
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
                    <div
                      className="text-[9px] font-black uppercase tracking-[0.25em]"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {label}
                    </div>
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
              <div
                className="text-[9px] font-black tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
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
            <AnimatePresence mode="wait">
              {submitState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 card-premium rounded-sm gap-5"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '2px solid rgba(34,197,94,0.3)' }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: '#22c55e' }} />
                  </div>
                  <h3 className="font-black text-xl" style={{ color: 'var(--text-primary)' }}>
                    Lead Sent via WhatsApp!
                  </h3>
                  <p className="text-sm font-medium max-w-xs" style={{ color: 'var(--text-secondary)' }}>
                    WhatsApp has opened with your pre-filled inquiry. Simply hit send and our team will
                    respond within a few hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn btn-outline text-xs tracking-widest uppercase mt-2"
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
                  noValidate
                  className="card-premium p-8 flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        suppressHydrationWarning
                        placeholder="Rajesh Kumar"
                        style={inputStyle('name')}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-bold mt-1.5" style={{ color: '#ef4444' }}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        suppressHydrationWarning
                        placeholder="you@company.com"
                        style={inputStyle('email')}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-bold mt-1.5" style={{ color: '#ef4444' }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label
                        className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        suppressHydrationWarning
                        placeholder="+91 98765 43210"
                        style={inputStyle('phone')}
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                      />
                      {errors.phone && (
                        <p className="text-[11px] font-bold mt-1.5" style={{ color: '#ef4444' }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label
                        className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        suppressHydrationWarning
                        placeholder="Hyderabad"
                        style={inputStyle('city')}
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        onFocus={() => setFocused('city')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Service Type *
                    </label>
                    <select
                      suppressHydrationWarning
                      style={{ ...inputStyle('projectType'), cursor: 'pointer' }}
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      onFocus={() => setFocused('projectType')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="">Select service type</option>
                      <option>Residential Villa</option>
                      <option>Apartment Development</option>
                      <option>Commercial Construction</option>
                      <option>Township Development</option>
                      <option>Interior Design</option>
                      <option>Home Renovation</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-[11px] font-bold mt-1.5" style={{ color: '#ef4444' }}>
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[9px] font-black uppercase tracking-[0.25em] mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Project Brief *
                    </label>
                    <textarea
                      suppressHydrationWarning
                      rows={5}
                      placeholder="Describe your project vision, location, scale, and timeline..."
                      style={{ ...inputStyle('message'), resize: 'none' }}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-bold mt-1.5" style={{ color: '#ef4444' }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    suppressHydrationWarning
                    disabled={submitState === 'loading'}
                    className="btn btn-primary w-full justify-center h-16 sm:h-auto mt-2 text-[11px] tracking-[0.2em] shadow-brand active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitState === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Preparing WhatsApp…
                      </>
                    ) : (
                      <>
                        Send via WhatsApp
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p
                    className="text-center text-[10px] font-bold tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Your inquiry will open in WhatsApp for instant delivery.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
