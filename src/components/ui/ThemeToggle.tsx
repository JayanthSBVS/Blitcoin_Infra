'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full glass" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      suppressHydrationWarning
      className="relative w-9 h-9 rounded-full glass flex items-center justify-center overflow-hidden hover:bg-white/10 dark:hover:bg-white/5 transition-colors group"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{
          y: isDark ? 0 : 24,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'backOut' }}
        className="absolute"
      >
        <Moon className="w-4 h-4 text-brand-300" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: isDark ? -24 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'backOut' }}
        className="absolute"
      >
        <Sun className="w-4 h-4 text-amber-500" />
      </motion.div>
    </button>
  )
}
