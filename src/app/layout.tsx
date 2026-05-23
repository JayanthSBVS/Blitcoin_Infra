import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import Navbar from '@/components/layout/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://blitconinfra.com'),
  title: 'Blitcon Infra - Premium Infrastructure & Construction',
  description: 'Blitcon Infra delivers premium infrastructure solutions - residential, commercial, and township development with engineering precision and architectural excellence.',
  keywords: ['infrastructure', 'construction', 'blitcon', 'blitcon infra', 'residential construction', 'commercial construction', 'township development', 'interior design', 'apartment development'],
  authors: [{ name: 'Blitcon Infra' }],
  openGraph: {
    title: 'Blitcon Infra - Premium Infrastructure & Construction',
    description: 'Engineering excellence. Architectural precision. Blitcon Infra builds the future.',
    url: 'https://blitconinfra.com',
    siteName: 'Blitcon Infra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blitcon Infra - Premium Infrastructure',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blitcon Infra - Premium Infrastructure',
    description: 'Engineering excellence. Architectural precision.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import { ThemeProvider } from '@/components/providers/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased transition-colors duration-500`} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Blitcon Infra",
              "url": "https://blitconinfra.com",
              "logo": "https://blitconinfra.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7997696688",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.linkedin.com/company/blitconinfra",
                "https://www.instagram.com/blitconinfra"
              ]
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScrollProvider>
            <CustomCursor />
            <NoiseOverlay />
            <Navbar />
            <main>{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

