import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/structured-data'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Epicast',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/images/Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
