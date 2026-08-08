const milestones = [
  { year: '1986', title: 'Founded', text: 'Forgeline opens its first machine shop in Detroit.' },
  { year: '1998', title: 'ISO Certified', text: 'Achieved ISO 9001 certification for quality systems.' },
  { year: '2007', title: 'Global Expansion', text: 'Opened distribution across Europe and Asia.' },
  { year: '2015', title: 'Automation', text: 'Deployed 5-axis CNC and robotic production lines.' },
  { year: '2024', title: 'Smart Factory', text: 'Launched fully connected Industry 4.0 facility.' },
]

export function History() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Journey
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Decades of milestones and measured growth.
          </h2>
        </div>

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="relative flex min-w-[760px] gap-6">
            <div className="absolute left-0 right-0 top-3 h-px bg-border" />
            {milestones.map((m) => (
              <div key={m.year} className="relative flex-1">
                <div className="h-6 w-6 rounded-full border-4 border-background bg-primary" />
                <div className="mt-5">
                  <div className="font-heading text-xl font-bold text-primary">
                    {m.year}
                  </div>
                  <div className="mt-1 font-semibold text-foreground">
                    {m.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
