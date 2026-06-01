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
  { label: 'Contact Us', href: '/contact' },
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



      {/* ── Main Footer Grid ── */}
      <div className="py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Image src="/assets/images/logo.png" alt="Blitcon Infra" width={120} height={40} className="h-8 w-auto object-contain" />
                <div>
                  <div className="font-black text-base leading-none text-main">Blitcon</div>
                  <div className="text-[9px] font-black tracking-[0.3em] uppercase mt-0.5 text-brand-accent">Infra</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 font-medium text-sub">
                Premium infrastructure and construction - built with precision, delivered with integrity, designed to last generations.
              </p>
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300 hover:scale-110 group bg-secondary border border-border-primary shadow-xs hover:border-brand-accent/50"
                  >
                    <Icon className="w-3.5 h-3.5 text-dim group-hover:text-brand-accent transition-colors duration-250" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6 text-dim">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm font-bold text-sub hover:text-brand-accent transition-colors duration-250"
                    >
                      <span
                        className="h-px transition-all duration-350 group-hover:w-3 bg-brand-accent inline-block w-0"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6 text-dim">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="group flex items-center gap-2 text-sm font-bold text-sub hover:text-brand-accent transition-colors duration-250"
                    >
                      <span
                        className="h-px transition-all duration-350 group-hover:w-3 bg-brand-accent inline-block w-0"
                      />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6 text-dim">
                Contact Us
              </h4>
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Phone', value: '+91 7997696688', href: 'tel:+917997696688' },
                  { label: 'Email', value: 'Projects@blitconinfra.com', href: 'mailto:Projects@blitconinfra.com' },
                  { label: 'Location', value: 'Hyderabad, Telangana 500081', href: '#' },
                  { label: 'RERA No.', value: 'P02400012345', href: '#' },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <div className="text-[9px] font-black uppercase tracking-[0.25em] mb-1 text-dim">
                      {label}
                    </div>
                    <a
                      href={href}
                      className="text-sm font-bold text-sub hover:text-brand-accent transition-colors duration-250"
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px w-full mb-6 bg-gradient-to-r from-transparent via-border-primary to-transparent" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs font-medium text-dim">
              © {new Date().getFullYear()} Blitcon Infra. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'RERA Disclosure'].map((l) => (
                <Link
                  key={l}
                  href="#"
                  className="text-xs font-bold text-dim hover:text-sub transition-colors duration-250"
                >
                  {l}
                </Link>
              ))}
            </div>
            <p className="text-xs font-black tracking-widest text-border-primary opacity-80 uppercase">
              EST. 2019 · HYDERABAD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
