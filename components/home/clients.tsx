'use client'

export function Clients() {
  const clients = [
    { id: 1, name: 'TechCore Industries', initials: 'TC' },
    { id: 2, name: 'Global Manufacturing Co', initials: 'GM' },
    { id: 3, name: 'Precision Solutions Ltd', initials: 'PS' },
    { id: 4, name: 'Advanced Dynamics', initials: 'AD' },
    { id: 5, name: 'Industrial Partners Group', initials: 'IP' },
    { id: 6, name: 'NextGen Engineering', initials: 'NG' },
    { id: 6, name: 'Bharat Heavy Electronic Limited', initials: 'BHEL' },
  ]

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with industry leaders across manufacturing, aerospace, automotive, and technology sectors.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center rounded-lg border border-border bg-card p-8 transition-all hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <span className="text-sm font-bold text-primary">
                  {client.initials}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border pt-12 md:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <p className="mt-2 text-muted-foreground">Active Clients Worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25+</div>
            <p className="mt-2 text-muted-foreground">Years of Partnership</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">98%</div>
            <p className="mt-2 text-muted-foreground">Client Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
