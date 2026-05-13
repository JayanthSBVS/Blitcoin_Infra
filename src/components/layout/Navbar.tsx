'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Packages', href: '/packages' },
  { label: 'Contact', href: '/contact' },
]

const menuVariants = {
  closed: { opacity: 0, x: '100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  open:   { opacity: 1, x: '0%',    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
}

const linkVariants = {
  closed: { opacity: 0, x: 40, filter: 'blur(10px)' },
  open: (i: number) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { delay: 0.12 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Determine if the navbar should be in "Hero Mode" (Transparent bg)
  const isHeroMode = !isScrolled && !menuOpen

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-500"
        style={isHeroMode ? {
          padding: '22px 0',
          background: 'transparent',
        } : {
          padding: '10px 0',
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-primary)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="container-fluid flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-4 group" aria-label="Blitcon Infra Home">
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/logo.png"
                alt="Blitcon Infra Logo Symbol"
                width={120}
                height={40}
                className="w-auto h-9 lg:h-10 object-contain drop-shadow-sm"
              />
            </motion.div>
            
            <div className="flex flex-col leading-none">
              <span 
                className="font-black text-xl lg:text-2xl tracking-tighter transition-colors duration-500"
                style={{ color: isHeroMode ? '#ffffff' : 'var(--text-main)' }}
              >
                Blitcon
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-[1px] bg-brand-accent/50" />
                <span
                  className="text-[10px] lg:text-[11px] font-black tracking-[0.4em] uppercase transition-colors duration-500 text-brand-accent"
                >
                  Infra
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group text-[13px] font-bold tracking-wide transition-colors duration-500"
                  style={{
                    color: isActive 
                      ? 'var(--brand-accent)' 
                      : isHeroMode ? '#ffffff' : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                  {/* Hover underline */}
                  <span
                    className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-350"
                    style={{ background: 'var(--brand-accent)', display: 'block' }}
                  />
                  {isActive && (
                    <motion.span 
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 h-[1.5px] w-full"
                      style={{ background: 'var(--brand-accent)' }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden lg:flex btn btn-primary text-[11px] py-2.5 px-6 rounded-sm shadow-brand hover:shadow-brand-lg transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu button */}
            <button
              suppressHydrationWarning
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 shadow-sm"
              style={{
                backgroundColor: isHeroMode ? 'rgba(255, 255, 255, 0.1)' : 'var(--surface-card)',
                border: isHeroMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid var(--border-primary)',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-4.5 h-4.5" style={{ color: isHeroMode ? '#ffffff' : 'var(--text-main)' }} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-4.5 h-4.5" style={{ color: isHeroMode ? '#ffffff' : 'var(--text-main)' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[8999] flex flex-col justify-center"
            style={{
              backgroundColor: 'var(--surface-overlay)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
            }}
          >
            {/* Architectural Grid Background for Mobile Menu */}
            <div className="arch-grid absolute inset-0 opacity-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 pointer-events-none" />

            {/* Close area */}
            <button
              suppressHydrationWarning
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-main transition-transform group-hover:rotate-90" />
            </button>

            <nav className="container-fluid relative z-10 flex flex-col gap-2" aria-label="Mobile navigation">
              <div
                className="text-[10px] font-black tracking-[0.4em] uppercase mb-10 text-brand-accent flex items-center gap-4"
              >
                <div className="w-8 h-px bg-brand-accent" />
                Navigation
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between py-6 border-b border-border-primary transition-all duration-300"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[11px] font-black text-brand-accent/40 font-mono">0{i + 1}</span>
                      <span
                        className="text-display-sm group-hover:text-brand-accent transition-all duration-300 text-main font-black group-hover:translate-x-2"
                      >
                        {link.label}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-border-primary flex items-center justify-center group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                      <ArrowUpRight
                        className="w-5 h-5 transition-all duration-500 text-dim group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-14"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full justify-center h-16 text-xs tracking-[0.2em]"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Info Strip for Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-widest text-dim">Contact Us</span>
                <span className="text-xs font-bold text-main">+91 79976 96688</span>
              </div>
              <div className="flex gap-4">
                {['IN', 'TW', 'LI'].map(social => (
                  <span key={social} className="text-[10px] font-black text-dim hover:text-brand-accent cursor-pointer transition-colors uppercase tracking-tighter">{social}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
