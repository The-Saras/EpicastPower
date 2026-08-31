import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, Share2, AtSign } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4 max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/images/Logo.png"
                alt="Epicast Logo"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-primary-foreground">
                Epicast Power Equipment
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Precision power transmission & distribution solutions trusted by utilities and industries. Engineering excellence since 2004.
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

          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/" className="hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Products
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/products?category=Current+Transformer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Current Transformers
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Potential+Transformer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Potential Transformers
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Metering+Cubicle"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Metering Cubicles
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                <div className="space-y-0.5">
                  <span className="block font-medium text-primary-foreground/90">Office (Unit-1)</span>
                  <span className="block leading-snug">Plot No. W-134(A), MIDC Ambad, Nashik - 422010</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                <div className="space-y-0.5">
                  <span className="block font-medium text-primary-foreground/90">Works (Unit-2)</span>
                  <span className="block leading-snug">Datta Nagar Road, MIDC Ambad, Nashik - 422010</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+917350882159"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +91-7350882159
                  </a>
                  <a
                    href="tel:+919823565857"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    +91-9823565857
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground/50" />
                <div className="flex flex-col gap-1 break-all">
                  <a
                    href="mailto:mkt1.epicastpower@gmail.com"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    mkt1.epicastpower@gmail.com
                  </a>
                  <a
                    href="mailto:pur2.epicastpower@gmail.com"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    pur2.epicastpower@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row text-center sm:text-left">
          <p>© {new Date().getFullYear()} Epicast Power Equipment. All rights reserved.</p>
          <p>ISO 14001:2015 Certified</p>
        </div>
      </div>
    </footer>
  )
}
