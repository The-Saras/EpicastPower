import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — Epicast Power Equipment',
  description:
    'Get in touch with Epicast Power Equipment. Request a quote, send an inquiry, or visit our manufacturing facility.',
}

interface ContactItem {
  label: string
  value: string
  href?: string
}

interface ContactDetail {
  icon: typeof MapPin
  title: string
  items: ContactItem[]
}

const details: ContactDetail[] = [
  {
    icon: MapPin,
    title: 'Locations',
    items: [
      {
        label: 'Office (Unit-1)',
        value: 'Plot No. W-134(A), MIDC Ambad, Nashik - 422010',
      },
      {
        label: 'Works (Unit-2)',
        value: 'Datta Nagar Road, MIDC Ambad, Nashik - 422010',
      },
    ],
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    items: [
      {
        label: 'Sales & Inquiries',
        value: '+91-9730537603',
        href: 'tel:+919730537603'
      },
      {
        label: 'Operations & Support',
        value: '+91-9823565857',
        href: 'tel:+919823565857',
      },
    ],
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    items: [
      {
        label: 'Marketing / Sales',
        value: 'mkt1.epicastpower@gmail.com',
        href: 'mailto:mkt1.epicastpower@gmail.com',
      },
      {
        label: 'Purchases / Vendors',
        value: 'pur2.epicastpower@gmail.com',
        href: 'mailto:pur2.epicastpower@gmail.com',
      },
    ],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    items: [
      {
        label: 'Working Hours',
        value: 'Mon – Friday | Sunday: 9:00 AM – 6:00 PM',
      },
      {
        label: 'Weekly Off',
        value: 'Saturday: Closed',
      },
    ],
  },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Get in Touch
            </span>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Let&apos;s build something precise together.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Whether you need a quote, technical specifications, or a partnership
              discussion, our team is ready to help.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Send us a message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form and we&apos;ll respond within one business day.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Contact details
              </h2>
              <p className="mt-2 text-muted-foreground">
                Reach us directly or visit our facility.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {details.map((d) => (
                  <div
                    key={d.title}
                    className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
                  >
                    <div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                        <d.icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-heading font-bold text-foreground">
                        {d.title}
                      </h3>
                      <div className="mt-3 space-y-2.5">
                        {d.items.map((item, idx) => (
                          <div key={idx} className="text-sm">
                            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                              {item.label}
                            </span>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="mt-0.5 block leading-relaxed text-muted-foreground hover:text-primary transition-colors break-all"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-0.5 leading-relaxed text-muted-foreground">
                                {item.value}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Epicast Power Equipment location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.735%2C19.94%2C73.755%2C19.96&layer=mapnik&marker=19.950%2C73.745"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
