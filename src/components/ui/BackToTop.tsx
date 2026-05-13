'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0 })
    const win = window as typeof window & { lenis?: { scrollTo: (t: number) => void } }
    if (win.lenis) win.lenis.scrollTo(0)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          suppressHydrationWarning
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-[9000] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'var(--brand-accent)',
            boxShadow: 'var(--shadow-brand-lg)',
            border: 'none',
            cursor: 'none',
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
