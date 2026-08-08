import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { categories } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Products — Forgeline Industries',
  description:
    'Explore our range of industrial components, precision parts, metal fabrication, machinery components, and custom manufacturing solutions.',
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

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="overflow-hidden">
                  <img
                    src={c.image || '/placeholder.svg'}
                    alt={c.name}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {c.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View Category
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
