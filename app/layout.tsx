import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Forgeline Industries — Precision Manufacturing Solutions',
  description:
    'Forgeline Industries delivers precision-engineered industrial components, metal fabrication, and custom manufacturing for global enterprises.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
