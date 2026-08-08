const directors = [
  {
    name: 'Robert Hensley',
    role: 'Chief Executive Officer',
    image: '/images/director-1.png',
    bio: 'Three decades of leadership in precision manufacturing and global operations.',
  },
  {
    name: 'Amara Okafor',
    role: 'Chief Operations Officer',
    image: '/images/director-2.png',
    bio: 'Drives operational excellence and lean production across all facilities.',
  },
  {
    name: 'Daniel Crüg',
    role: 'Director of Engineering',
    image: '/images/director-3.png',
    bio: 'Leads R&D and advanced engineering for custom manufacturing solutions.',
  },
]

export function Directors() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Leadership
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          Directors &amp; partners guiding our vision.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {directors.map((d) => (
          <div
            key={d.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={d.image}
                alt={`Portrait of ${d.name}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {d.name}
              </h3>
              <p className="text-sm font-medium text-primary">{d.role}</p>
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
