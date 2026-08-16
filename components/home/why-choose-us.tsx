import { ShieldCheck, Cog, Truck, HeartHandshake } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    text: 'Every product undergoes stringent quality checks and testing in compliance with applicable IS and IEC standards.',
  },
  {
    icon: Cog,
    title: 'Advanced Manufacturing',
    text: 'Modern production, assembly, and in-house testing infrastructure ensure consistent quality and dependable performance.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    text: 'Our focus on quality, precision, and timely delivery ensures dependable solutions for demanding power applications.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Satisfaction',
    text: 'Customized solutions, technical support, and responsive after-sales service help us build lasting customer relationships.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Built on engineering, quality, and reliability.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
