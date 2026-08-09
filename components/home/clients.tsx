'use client'

export function Clients() {
  const clients = [
    {
      id: 1,
      name: 'CG Power',
      logo: '/clients-logo/CG.png',
    },
    {
      id: 2,
      name: 'Lucy Electric',
      logo: '/clients-logo/LucyElectric_logo_cmyk_no-background-square-proportion-1 (1).png',
    },
    {
      id: 3,
      name: 'MSEDCL',
      logo: '/clients-logo/MSEDCLlogo.png',
    },
    {
      id: 4,
      name: 'BHEL',
      logo: '/clients-logo/images.webp',
    },
    {
      id: 5,
      name: 'Jyoti Ltd',
      logo: '/clients-logo/jyoti-300x300.png',
    },
    {
      id: 6,
      name: 'ABB Group',
      logo: '/clients-logo/kisspng-abb-group-automation-industry-company-product-5acae76aa1f3f3.4118179915232469546634-removebg-preview.png',
    },
  ]

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with industry leaders across manufacturing, power, electrical, and automation sectors.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex h-32 items-center justify-center rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-16 max-w-full object-contain filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 dark:brightness-150"
              />
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
