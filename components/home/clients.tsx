'use client'

import { useState, useEffect } from 'react'

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
    {
      id: 7,
      name: 'Megha Electromech pvt Ltd',
      logo: '/clients-logo/Megha.jpeg',
    },
    {
      id: 8,
      name: 'Madhya Pradesh Jal Nigam Maryadit ',
      logo: '/clients-logo/mpgov.jpg',
    },
  ]

  const batches = [
    [clients[0], clients[1]],
    [clients[2], clients[3]],
    [clients[4], clients[5]],
    [clients[6], clients[7]],
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % batches.length)
    }, 5000) // Scroll every 5 seconds
    return () => clearInterval(interval)
  }, [batches.length])

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

        {/* Carousel Viewport */}
        <div className="mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              width: `${batches.length * 100}%`,
              transform: `translateX(-${activeIndex * (100 / batches.length)}%)`,
            }}
          >
            {batches.map((batch, batchIdx) => (
              <div
                key={batchIdx}
                className="grid grid-cols-2 gap-8 px-2 sm:px-4"
                style={{ width: `${100 / batches.length}%` }}
              >
                {batch.map((client) => (
                  <div
                    key={client.id}
                    className="flex h-40 items-center justify-center rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md md:h-48 md:p-8"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-24 max-w-full object-contain dark:brightness-150 md:max-h-32"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {batches.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'bg-primary w-8'
                : 'bg-primary/20 hover:bg-primary/40 w-2.5'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-border pt-12 md:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <p className="mt-2 text-muted-foreground">Active Clients Across India</p>
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
