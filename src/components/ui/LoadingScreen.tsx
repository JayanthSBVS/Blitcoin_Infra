'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1400
    const interval = 20
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      setProgress(Math.min(100, Math.round((current / steps) * 100)))
      if (current >= steps) {
        clearInterval(timer)
        setTimeout(onComplete, 350)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Subtle arch grid */}
        <div className="arch-grid absolute inset-0 opacity-25" />

        {/* Soft center glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,64,175,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-10 flex items-center gap-4"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Blitcon Infra"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
              {/* Glow behind logo */}
              <div
                className="absolute -inset-3 rounded-full blur-xl pointer-events-none"
                style={{ background: 'rgba(30,64,175,0.12)', animation: 'pulse-slow 2.5s ease-in-out infinite' }}
              />
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="font-black text-2xl tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Blitcon
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.55 }}
                className="text-[9px] font-black tracking-[0.4em] uppercase"
                style={{ color: 'var(--brand-accent)' }}
              >
                Infra
              </motion.div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.45 }}
            className="w-44 h-px relative overflow-hidden"
            style={{ backgroundColor: 'var(--border-primary)' }}
          >
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, var(--brand-primary), var(--brand-accent))',
                boxShadow: '0 0 8px rgba(30,64,175,0.5)',
                transition: 'width 0.02s linear',
              }}
            />
          </motion.div>

          {/* Progress number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="font-mono text-xs mt-3 tabular-nums"
            style={{ color: 'var(--text-muted)' }}
          >
            {progress.toString().padStart(3, '0')}%
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-[9px] font-black tracking-[0.35em] uppercase mt-6"
            style={{ color: 'var(--text-disabled)' }}
          >
            Engineering Excellence
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
