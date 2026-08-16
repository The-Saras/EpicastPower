const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: 'Up to 33 kV', label: 'Product Range' },
  { value: '100%', label: 'Quality-Focused Manufacturing' },
]

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src="/images/about-factory.png"
            alt="Engineers inspecting precision metal parts on the factory floor"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            About
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Powering Reliable Electrical Infrastructure
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Established in 2004, Epicast Power Equipment is a Nashik-based manufacturer of reliable power equipment for transmission and distribution applications. With over two decades of expertise, we specialize in CTs, PTs, HT Metering Cubicles, and allied equipment, delivering precision-engineered solutions built for safety, performance, and long-term reliability.

          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="font-heading text-2xl font-bold text-brand-red sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
