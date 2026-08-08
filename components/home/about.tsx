const stats = [
  { value: '38+', label: 'Years of Experience' },
  { value: '99.8%', label: 'Product Quality Rate' },
  { value: '50K+', label: 'Units / Month Capacity' },
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
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            About Forgeline
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            A trusted manufacturing partner built on precision and reliability.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            For nearly four decades, Forgeline has partnered with global
            enterprises to deliver components that meet the highest standards of
            quality and performance. Our integrated facilities, certified
            processes, and engineering expertise allow us to scale from prototype
            to mass production without compromise.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">
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
