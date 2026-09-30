import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Inter } from 'next/font/google'
import {
  siteConfig,
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/structured-data'
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

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Epicast Power Equipment — Precision Power Solutions',
    template: '%s | Epicast Power Equipment',
  },
  description: siteConfig.description,
  keywords: [
    'Epicast Power Equipment',
    'power transmission equipment',
    'power distribution solutions',
    'precision CNC machining',
    'industrial components',
    'metal fabrication',
    'machinery components',
    'custom manufacturing',
    'MIDC Ambad Nashik',
    'ISO 9001:2015 certified',
    'electrical power equipment manufacturer',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Epicast Power Equipment — Precision Power Solutions',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-facility.png',
        width: 1200,
        height: 630,
        alt: 'Epicast Power Equipment Manufacturing Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epicast Power Equipment — Precision Power Solutions',
    description: siteConfig.description,
    images: ['/images/hero-facility.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = getOrganizationSchema()
  const webSiteSchema = getWebSiteSchema()

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
