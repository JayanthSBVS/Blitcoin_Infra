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
  closed: { opacity: 0, y: '-100%', transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  open:   { opacity: 1, y: '0%',    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
}

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.25, 1, 0.5, 1] },
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
        style={isScrolled ? {
          padding: '10px 0',
          backgroundColor: 'var(--surface-glass)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-primary)',
          boxShadow: 'var(--shadow-md)',
        } : {
          padding: '22px 0',
          background: 'transparent',
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
                style={{ color: 'var(--text-main)' }}
              >
                Blitcon
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-[1px] bg-brand-accent/50" />
                <span
                  className="text-[10px] lg:text-[11px] font-black tracking-[0.4em] uppercase transition-colors duration-500"
                  style={{ color: 'var(--brand-accent)' }}
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
                      : 'var(--text-sub)',
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
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500"
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-4.5 h-4.5" style={{ color: 'var(--text-main)' }} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-4.5 h-4.5" style={{ color: 'var(--text-main)' }} />
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
              backgroundColor: 'var(--bg-primary)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Close area */}
            <button
              suppressHydrationWarning
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}
              aria-label="Close menu"
            >
              <X className="w-4 h-4" style={{ color: 'var(--text-main)' }} />
            </button>

            <nav className="container-fluid flex flex-col gap-1" aria-label="Mobile navigation">
              <div
                className="text-[9px] font-black tracking-[0.3em] uppercase mb-8"
                style={{ color: 'var(--text-dim)' }}
              >
                Navigation
              </div>
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
                    className="group flex items-center justify-between py-5 border-b transition-colors duration-200"
                    style={{ borderColor: 'var(--border-secondary)' }}
                  >
                    <span
                      className="text-display-sm group-hover:text-brand-accent transition-colors duration-250"
                      style={{ color: 'var(--text-main)', fontWeight: 700 }}
                    >
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: 'var(--brand-accent)' }}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  Start a Project
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
