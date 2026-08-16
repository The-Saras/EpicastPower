import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductsClient } from '@/components/products-client'

export const metadata: Metadata = {
  title: 'Products — Epicast Power Equipment',
  description:
    'Explore our range of high-quality power distribution equipment, transmission hardware, and custom electrical solutions.',
}

export default function ProductsPage() {
  return (
    <>
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

