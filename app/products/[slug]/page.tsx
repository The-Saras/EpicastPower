import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChevronRight, Download, MessageSquare } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { categories, getCategory } from '@/lib/products'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return { title: 'Product — Forgeline Industries' }
  return {
    title: `${category.name} — Forgeline Industries`,
    description: category.shortDescription,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/products" className="hover:text-foreground">
                Products
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-foreground">
                {category.name}
              </span>
            </nav>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              {category.overview}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg">
                <Download className="mr-1 h-4 w-4" />
                Download Brochure
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  Send Inquiry
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Product Gallery
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {category.gallery.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <img
                    src={src || '/placeholder.svg'}
                    alt={`${category.name} sample ${i + 1}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 max-w-2xl">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Specifications
            </h2>
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {category.specs.map((spec, i) => (
                    <tr
                      key={spec.label}
                      className={i % 2 === 1 ? 'bg-muted/40' : ''}
                    >
                      <th
                        scope="row"
                        className="w-1/2 px-5 py-3.5 text-left font-medium text-muted-foreground"
                      >
                        {spec.label}
                      </th>
                      <td className="px-5 py-3.5 font-semibold text-foreground">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
