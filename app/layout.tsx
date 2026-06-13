import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { CursorGlow } from '@/components/cursor-glow'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const instrumentSerif = Instrument_Serif({
  variable: '--font-serif-display',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Soom Raj — Full Stack Developer',
  description:
    'Soom Raj is a freelance full stack developer building fast, scalable, and visually stunning digital products for startups and businesses.',
  generator: 'v0.app',
  openGraph: {
    title: 'Soom Raj — Full Stack Developer',
    description:
      'Building modern web experiences that convert. Fast, scalable, and beautifully designed products.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <CursorGlow />
        <Navbar />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
