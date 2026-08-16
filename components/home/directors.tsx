const directors = [
  {
    name: 'Mr.Atul P. Bedarkar',
    role: 'Director',
    image: '/directors/dir1.webp',
    bio: "Over 30 years of experience in power and electrical infrastructure.Expertise in manufacturing and power distribution equipment.Leads Epicast with a focus on quality, engineering, and innovation."
  },
  {
    name: 'Prathamesh Bedarkar',
    role: 'Chief Operations Officer',
    image: '/directors/dir2.webp',
    bio: "Second-generation entrepreneur with an MBA and technical understanding.Drives growth, innovation, R&D, and operational excellence.Focused on building future-ready power solutions and expanding Epicast's reach.",
  },

]

export function Directors() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
          Leadership
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Directors &amp; partners guiding our vision.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {directors.map((d) => (
          <div
            key={d.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md sm:flex-row"
          >
            <div className="overflow-hidden sm:w-[40%] shrink-0">
              <img
                src={d.image}
                alt={`Portrait of ${d.name}`}
                className="aspect-[3/4] w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:w-[60%]">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {d.name}
              </h3>
              <p className="text-sm font-medium text-brand-red">{d.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {d.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
