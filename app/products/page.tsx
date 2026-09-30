import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductsClient } from '@/components/products-client'
import { categories } from '@/lib/products'
import {
  getProductsItemListSchema,
  getBreadcrumbSchema,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Products & Capabilities',
  description:
    'Explore our precision power transmission equipment, CNC machined parts, industrial assemblies, metal fabrication, and custom manufacturing solutions.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products & Capabilities — Epicast Power Equipment',
    description:
      'Explore our precision power transmission equipment, CNC machined parts, industrial assemblies, metal fabrication, and custom manufacturing solutions.',
    url: '/products',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products & Capabilities — Epicast Power Equipment',
    description:
      'Explore our precision power transmission equipment, CNC machined parts, industrial assemblies, and metal fabrication.',
  },
}

export default function ProductsPage() {
  const productsSchema = getProductsItemListSchema(categories)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <SiteHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Our Products
            </span>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Precision-engineered solutions across every category.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              From standardized components to fully bespoke assemblies, our
              manufacturing capabilities cover the full spectrum of industrial
              needs — delivered to exacting tolerances.
            </p>
          </div>
        </section>

        <ProductsClient />
      </main>
      <SiteFooter />
    </>
  )
}
