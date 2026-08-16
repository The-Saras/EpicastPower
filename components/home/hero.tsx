import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-facility.png"
          alt="Modern manufacturing facility floor with CNC machinery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
            Precision Manufacturing Since 2004
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Decades of manufacturing excellence in power solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Epicast Power Equipment designs and manufactures reliable power equipment and customized electrical solutions for power transmission, distribution, utilities, industries, and infrastructure projects.

          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button

              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button

              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
