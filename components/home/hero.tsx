'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
  {
    image: '/images/hero-facility.png',
    alt: 'Modern manufacturing facility floor with CNC machinery',
  },
  {
    image: '/images/plant.png',
    alt: 'Epicast Power manufacturing plant',
  },
]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  return (
    <section className="group relative isolate overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${activeIndex * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Dark overlay with premium gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
            Precision Manufacturing Since 2004
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
            Decades of manufacturing excellence in power solutions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Epicast Power Equipment designs and manufactures reliable power equipment and customized electrical solutions for power transmission, distribution, utilities, industries, and infrastructure projects.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary-foreground/20 bg-primary/20 p-2 text-primary-foreground opacity-0 transition-all duration-300 hover:bg-primary/50 group-hover:opacity-100 focus:opacity-100 sm:left-6 md:opacity-0 group-hover:md:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-primary-foreground/20 bg-primary/20 p-2 text-primary-foreground opacity-0 transition-all duration-300 hover:bg-primary/50 group-hover:opacity-100 focus:opacity-100 sm:right-6 md:opacity-0 group-hover:md:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'bg-primary-foreground w-8'
                : 'bg-primary-foreground/40 hover:bg-primary-foreground/60 w-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
