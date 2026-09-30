import type { MetadataRoute } from 'next'
import { categories } from '@/lib/products'
import { siteConfig } from '@/lib/structured-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const productSectionRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${siteConfig.url}/products#${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...productSectionRoutes]
}
