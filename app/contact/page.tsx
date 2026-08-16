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

const details = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['OFFICE -PLOT NO. W 134(A),MIDC AMBAD,NASHIK-10'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91-7350882159', '+91-9823565857'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['mkt1.epicastpower@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Sat: 9:00 – 18:00', 'Sunday: Closed'],
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
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-heading font-bold text-foreground">
                      {d.title}
                    </h3>
                    {d.lines.map((line) => (
                      <p
                        key={line}
                        className="mt-1 text-sm leading-relaxed text-muted-foreground"
                      >
                        {line}
                      </p>
                    ))}
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
