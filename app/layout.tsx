import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kumo Crepe | French-Inspired Crepes & Specialty Drinks — San Marcos, TX',
  description:
    'Artisanal French crepes and specialty beverages in San Marcos, Texas. Crepe with a soul. Open Tue–Sat 11AM–9PM at 312 University Drive.',
  keywords: ['crepes', 'San Marcos', 'Texas', 'French cafe', 'specialty coffee', 'kumo'],
  openGraph: {
    title: 'Kumo Crepe — Crepe with a soul',
    description: 'French-inspired crepes and specialty beverages in San Marcos, TX.',
    url: 'https://kumocrepe.com',
    siteName: 'Kumo Crepe',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-kumo-bg text-kumo-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}
