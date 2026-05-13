'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Packages', href: '/packages' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Residential Construction',
  'Commercial Construction',
  'Apartment Development',
  'Interior Design',
  'Township Development',
]

const socials = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const inView = useInView(footerRef, { once: true, margin: '-5%' })
  const { scrollYProgress } = useScroll({ target: footerRef, offset: ['start end', 'end end'] })
  const skyY = useTransform(scrollYProgress, [0, 1], [60, 0])
  const skyOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Top divider */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />

      {/* ── CTA Band ── */}
      <div
        className="relative overflow-hidden"
        style={{ paddingBlock: '6rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)' }}
      >
        <div className="arch-grid opacity-15 absolute inset-0" />

        {/* SVG Skyline — visible in both themes */}
        <motion.div
          style={{ y: skyY, opacity: skyOpacity } as any}
          className="absolute bottom-0 left-0 right-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect x="0"    y="110" width="60"  height="50" fill="rgba(30,58,110,0.06)" />
            <rect x="65"   y="85"  width="40"  height="75" fill="rgba(30,58,110,0.08)" />
            <rect x="110"  y="95"  width="80"  height="65" fill="rgba(30,58,110,0.05)" />
            <rect x="200"  y="60"  width="28"  height="100" fill="rgba(30,58,110,0.09)" />
            <rect x="204"  y="52"  width="6"   height="8"  fill="rgba(30,64,175,0.25)" />
            <rect x="235"  y="100" width="55"  height="60" fill="rgba(30,58,110,0.06)" />
            <rect x="300"  y="75"  width="25"  height="85" fill="rgba(30,58,110,0.08)" />
            <rect x="360"  y="55"  width="16"  height="105" fill="rgba(30,58,110,0.10)" />
            <rect x="363"  y="48"  width="5"   height="7"  fill="rgba(30,64,175,0.30)" />
            <rect x="400"  y="88"  width="90"  height="72" fill="rgba(30,58,110,0.05)" />
            <rect x="500"  y="70"  width="32"  height="90" fill="rgba(30,58,110,0.09)" />
            <rect x="610"  y="50"  width="24"  height="110" fill="rgba(30,58,110,0.10)" />
            <rect x="613"  y="43"  width="5"   height="7"  fill="rgba(30,64,175,0.25)" />
            <rect x="645"  y="80"  width="80"  height="80" fill="rgba(30,58,110,0.05)" />
            <rect x="785"  y="60"  width="30"  height="100" fill="rgba(30,58,110,0.09)" />
            <rect x="789"  y="53"  width="6"   height="7"  fill="rgba(30,64,175,0.20)" />
            <rect x="900"  y="75"  width="20"  height="85" fill="rgba(30,58,110,0.08)" />
            <rect x="930"  y="88"  width="90"  height="72" fill="rgba(30,58,110,0.05)" />
            <rect x="1030" y="62"  width="34"  height="98" fill="rgba(30,58,110,0.09)" />
            <rect x="1033" y="55"  width="5"   height="7"  fill="rgba(30,64,175,0.25)" />
            <rect x="1140" y="70"  width="80"  height="90" fill="rgba(30,58,110,0.06)" />
            <rect x="1300" y="66"  width="40"  height="94" fill="rgba(30,58,110,0.08)" />
            <rect x="1350" y="98"  width="90"  height="62" fill="rgba(30,58,110,0.05)" />
            <rect x="0"    y="158" width="1440" height="2" fill="rgba(30,58,110,0.08)" />
          </svg>
        </motion.div>

        <div className="container-fluid relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-eyebrow block mb-6"
          >
            Ready to Build?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg mb-8 mx-auto"
            style={{ maxWidth: '44rem' }}
          >
            Let's Create{' '}
            <span className="gradient-text-brand">Something Remarkable</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="#contact" className="btn btn-primary group">
              Start a Project
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="tel:+917997696688" className="btn btn-outline">
              Call Us Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Image src="/logo.png" alt="Blitcon Infra" width={120} height={40} className="h-8 w-auto object-contain" />
                <div>
                  <div className="font-black text-base leading-none" style={{ color: 'var(--text-primary)' }}>Blitcon</div>
                  <div className="text-[9px] font-black tracking-[0.3em] uppercase mt-0.5" style={{ color: 'var(--brand-accent)' }}>Infra</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 font-medium" style={{ color: 'var(--text-secondary)' }}>
                Premium infrastructure and construction — built with precision, delivered with integrity, designed to last generations.
              </p>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1.5px solid var(--border-primary)',
                      boxShadow: 'var(--shadow-xs)',
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 transition-colors duration-250" style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-muted)' }}>
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm font-bold transition-colors duration-250"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <span
                        className="h-px transition-all duration-350 group-hover:w-3"
                        style={{ width: 0, background: 'var(--brand-accent)', display: 'inline-block' }}
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-muted)' }}>
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="group flex items-center gap-2 text-sm font-bold transition-colors duration-250"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      <span
                        className="h-px transition-all duration-350 group-hover:w-3"
                        style={{ width: 0, background: 'var(--brand-accent)', display: 'inline-block' }}
                      />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6" style={{ color: 'var(--text-muted)' }}>
                Contact
              </h4>
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Phone', value: '+91 7997696688', href: 'tel:+917997696688' },
                  { label: 'Email', value: 'Projects@blitconinfra.com', href: 'mailto:Projects@blitconinfra.com' },
                  { label: 'Location', value: 'Hyderabad, Telangana 500081', href: '#' },
                  { label: 'RERA No.', value: 'P02400012345', href: '#' },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] mb-1" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </div>
                    <a
                      href={href}
                      className="text-sm font-bold transition-colors duration-250"
                      style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--brand-accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(to right, transparent, var(--border-primary), transparent)' }} />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} Blitcon Infra. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'RERA Disclosure'].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs font-bold transition-colors duration-250"
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {l}
                </a>
              ))}
            </div>
            <p className="text-xs font-black tracking-widest" style={{ color: 'var(--border-primary)', opacity: 0.8 }}>
              EST. 2019 · HYDERABAD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
