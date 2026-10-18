'use client'

import { useState, useEffect } from 'react'
import { Building2, Award, ThumbsUp } from 'lucide-react'

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

        {/* Key Metrics Banner */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-[#072d62] to-[#041d40] px-6 py-10 shadow-xl border border-primary/20 sm:mt-20 sm:rounded-3xl sm:px-10 sm:py-12">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 gap-8 divide-y divide-white/10 md:grid-cols-3 md:gap-0 md:divide-y-0 md:divide-x md:divide-white/15">
            <div className="flex flex-col items-center text-center md:px-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 shadow-sm backdrop-blur-sm">
                <Building2 className="h-5 w-5 text-brand-red" />
              </span>
              <div className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                500<span className="text-brand-red">+</span>
              </div>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                Active Clients Across India
              </p>
            </div>

            <div className="flex flex-col items-center pt-8 text-center md:pt-0 md:px-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 shadow-sm backdrop-blur-sm">
                <Award className="h-5 w-5 text-brand-red" />
              </span>
              <div className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                25<span className="text-brand-red">+</span>
              </div>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                Years of Partnership
              </p>
            </div>

            <div className="flex flex-col items-center pt-8 text-center md:pt-0 md:px-6">
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white border border-white/15 shadow-sm backdrop-blur-sm">
                <ThumbsUp className="h-5 w-5 text-brand-red" />
              </span>
              <div className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                98<span className="text-brand-red">%</span>
              </div>
              <p className="mt-2 text-sm font-medium text-white/80 sm:text-base">
                Client Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
