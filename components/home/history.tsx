import { Compass, Goal, Sparkles, Shield } from 'lucide-react'

export function VisionMission() {
  const visionPills = ['Innovation', 'Reliability', 'Sustainability']
  const missionPills = ['Precision Engineering', 'Quality Standards', 'Customer Trust']

  return (
    <section className="bg-card py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle decorative background blur shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Our Core Purpose
          </span>
          {/* <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Our Vision &amp; Mission
          </h2> */}
          <p className="mt-4 text-lg text-muted-foreground">
            Empowering the electrical infrastructure of tomorrow through innovation, quality, and strong partnerships.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Vision Card (Navy Blue Dark Theme) */}
          <div className="group relative overflow-hidden rounded-3xl bg-primary px-8 py-10 text-primary-foreground shadow-lg border border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Soft decorative red glowing light inside dark card */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-red/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/20 text-brand-red shadow-sm border border-brand-red/30">
                  <Compass className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-primary-foreground tracking-tight">
                  Our Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 font-normal">
                  To be a trusted leader in power equipment manufacturing by delivering innovative, reliable, and technologically advanced solutions that contribute to efficient, safe, and sustainable power distribution systems.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {visionPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium border border-primary-foreground/15 text-primary-foreground/90"
                  >
                    <Sparkles className="mr-1 h-3.5 w-3.5 text-brand-red" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card (Light Card Theme) */}
          <div className="group relative overflow-hidden rounded-3xl bg-background px-8 py-10 border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/20">
            {/* Soft decorative primary blue glowing light inside light card */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm border border-primary/20">
                  <Goal className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-foreground tracking-tight">
                  Our Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground font-normal">
                  To provide high-quality, cost-effective electrical solutions through continuous innovation, precision engineering, stringent quality standards, and a customer-centric approach — building lasting partnerships based on trust and excellence.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {missionPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full bg-brand-red/10 px-3 py-1 text-xs font-medium border border-brand-red/20 text-brand-red"
                  >
                    <Shield className="mr-1 h-3.5 w-3.5 text-primary" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
