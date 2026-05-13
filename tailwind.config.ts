import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Blues ──
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',   // Interactive royal blue
          700: '#1e40af',   // Deep brand accent
          800: '#1e3a8a',   // Architectural navy
          900: '#1e2d6e',
          950: '#0f2340',   // Darkest navy
        },

        // ── Semantic via CSS vars ──
        primary:   'var(--bg-primary)',    // Maps to bg-primary, text-primary, etc.
        secondary: 'var(--bg-secondary)',
        tertiary:  'var(--bg-tertiary)',
        
        'brand-primary': 'var(--brand-primary)',
        'brand-accent':  'var(--brand-accent)',
        'brand-light':   'var(--brand-light)',
        'brand-deep':    'var(--brand-deep)',

        // ── Content / Text (Explicit) ──
        'main':      'var(--text-primary)',
        'sub':       'var(--text-secondary)',
        'dim':       'var(--text-muted)',

        // ── Surface ──
        'card':           'var(--surface-card)',
        'surface':        'var(--bg-primary)',
        'surface-stone':  'var(--bg-secondary)',
        'glass':          'var(--surface-glass)',

        // ── Legacy neutrals (kept for backward compat) ──
        silver:     'var(--text-secondary)',
        mist:       'var(--text-muted)',
        onyx:       '#080c12',
        graphite:   '#131923',
        charcoal:   '#1c2333',
        'mid-gray': '#2a3347',

        // ── Metallic ──
        gold:       '#c9a84c',
        'gold-light': '#e6c874',
      },

      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        '7xl':  ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl':  ['6rem',    { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        '9xl':  ['8rem',    { lineHeight: '1',    letterSpacing: '-0.04em' }],
        '10xl': ['10rem',   { lineHeight: '0.95', letterSpacing: '-0.05em' }],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      },

      screens: {
        'xs':  '480px',
        '3xl': '1920px',
      },

      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
      },

      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'grain':       'grain 0.5s steps(1) infinite',
        'scan':        'scan 2.5s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.7s ease forwards',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(4%, -1%)' },
          '50%': { transform: 'translate(-3%, 3%)' },
          '60%': { transform: 'translate(2%, -4%)' },
          '70%': { transform: 'translate(-4%, 1%)' },
          '80%': { transform: 'translate(1%, -2%)' },
          '90%': { transform: 'translate(3%, 4%)' },
        },
        scan: {
          '0%':   { opacity: '0', transform: 'translateY(-100%)' },
          '50%':  { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(100%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },

      backgroundImage: {
        'brand-gradient':   'linear-gradient(135deg, #1e3a6e 0%, #1d4ed8 60%, #3b82f6 100%)',
        'radial-brand':     'radial-gradient(ellipse at center, rgba(30,64,175,0.12) 0%, transparent 70%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
        'gold-gradient':    'linear-gradient(135deg, #c9a84c 0%, #e6c874 50%, #c9a84c 100%)',
      },

      backdropBlur: {
        xs: '2px',
      },

      boxShadow: {
        // Light-mode brand shadows (visible against white)
        'brand-sm': '0 2px 12px -2px rgba(30,58,110,0.20), 0 1px 4px -1px rgba(30,58,110,0.12)',
        'brand-md': '0 8px 24px -4px rgba(30,58,110,0.28), 0 3px 10px -3px rgba(30,58,110,0.16)',
        'brand-lg': '0 20px 40px -8px rgba(30,58,110,0.32), 0 8px 16px -5px rgba(30,58,110,0.18)',

        // Glass / elevation
        'glass': '0 4px 24px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.60)',
        'card':  '0 2px 8px -1px rgba(15,23,42,0.08), 0 1px 3px -1px rgba(15,23,42,0.05)',

        // Gold
        'gold-glow': '0 0 30px rgba(201,168,76,0.25)',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

export default config
