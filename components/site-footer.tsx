import Link from 'next/link'
import { Factory, MapPin, Phone, Mail, Globe, Share2, AtSign } from 'lucide-react'
import { categories } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground text-primary">
                <Factory className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold tracking-tight">
                Forgeline
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Precision manufacturing solutions trusted by enterprises across 30+
              countries. Engineering excellence since 1986.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, Share2, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/" className="hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Products
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              {categories.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="hover:text-primary-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary-foreground/50" />
                <span>1200 Industrial Parkway, Detroit, MI 48201, USA</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary-foreground/50" />
                <span>+1 (313) 555-0142</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-foreground/50" />
                <span>info@forgeline.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Forgeline Industries. All rights reserved.</p>
          <p>ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  )
}
