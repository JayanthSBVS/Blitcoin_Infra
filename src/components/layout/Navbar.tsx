'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const navLinks = [
  { label: 'Home', href: '/', mobileOnly: true },
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
  closed: { opacity: 0, y: 30, filter: 'blur(8px)', rotate: 2 },
  open: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)', rotate: 0,
    transition: { delay: 0.2 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme } = useTheme()
  const { scrollY } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Determine if the navbar should be in "Hero Mode" (Transparent bg)
  const isHeroMode = !isScrolled && !menuOpen
  const isDark = mounted && theme === 'dark'
  const isHomePage = pathname === '/'
  
  // Adaptive color logic for visibility
  // Internal pages in light theme should start with WHITE for cinematic harmony
  const textColor = isHeroMode 
    ? (isDark ? '#ffffff' : (isHomePage ? 'var(--text-main)' : '#ffffff')) 
    : 'var(--text-main)'

  const secondaryTextColor = isHeroMode
    ? (isDark ? '#ffffff' : (isHomePage ? 'var(--text-secondary)' : '#ffffff'))
    : 'var(--text-secondary)'

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-500"
        style={isHeroMode ? {
          padding: 'clamp(12px, 3vw, 22px) 0',
          background: 'transparent',
        } : {
          padding: 'clamp(8px, 2vw, 12px) 0',
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-primary)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div className="container-fluid flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2 lg:gap-4 group shrink-0" aria-label="Blitcon Infra Home">
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
                className="w-auto h-7 lg:h-10 object-contain drop-shadow-sm transition-all duration-300"
              />
            </motion.div>
            
            <div className="flex flex-col leading-none border-l border-border-primary/50 pl-2 lg:pl-4 py-0.5">
              <span 
                className="font-black text-lg lg:text-2xl tracking-tighter transition-colors duration-500"
                style={{ color: textColor }}
              >
                Blitcon
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className="text-[8px] lg:text-[11px] font-black tracking-[0.3em] lg:tracking-[0.4em] uppercase transition-colors duration-500 text-brand-accent"
                >
                  Infra
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.filter(l => !l.mobileOnly).map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group text-[13px] font-bold tracking-wide transition-colors duration-500"
                  style={{
                    color: isActive 
                      ? 'var(--brand-accent)' 
                      : textColor,
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
          <div className="flex items-center gap-2 lg:gap-3">
            <div className="scale-90 lg:scale-100 origin-right">
              <ThemeToggle />
            </div>

            {/* Mobile menu button - Refined Circular Glass */}
            <button
              suppressHydrationWarning
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full transition-all duration-500 glass hover:bg-white/10 dark:hover:bg-white/5 active:scale-90"
              style={{
                borderColor: isHeroMode ? 'rgba(255, 255, 255, 0.2)' : 'var(--border-primary)',
                background: isHeroMode ? 'rgba(255, 255, 255, 0.08)' : 'var(--surface-glass)',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <X className="w-4 h-4" style={{ color: textColor }} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Menu className="w-4 h-4" style={{ color: textColor }} />
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

            <nav className="container-fluid relative z-10 flex flex-col pt-24" aria-label="Mobile navigation">
              <div
                className="text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-brand-accent flex items-center gap-4 px-2"
              >
                <div className="w-8 h-px bg-brand-accent" />
                Index
              </div>
              
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-border-primary transition-all duration-300 px-2"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className="text-display-sm group-hover:text-brand-accent transition-all duration-300 text-main font-black"
                        >
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-dim/30 group-hover:text-brand-accent transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-12 px-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full justify-center h-16 text-xs tracking-[0.2em] rounded-sm"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4 ml-2" />
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
