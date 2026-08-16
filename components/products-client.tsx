'use client'

import { useState, useEffect } from 'react'
import { Search, X, Download, Mail, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Product {
  name: string
  fileName: string
  image: string
  category: 'Current Transformer' | 'Potential Transformer' | 'Metering Cubicle'
  description: string
}

export const products: Product[] = [
  {
    name: '11 KV 22 KV POTENTIAL TRANSFORMER',
    fileName: '11 KV 22 KV POTENTIAL TRANSFORMER.png',
    image: '/PRODUCT IMAGES/11 KV 22 KV POTENTIAL TRANSFORMER.png',
    category: 'Potential Transformer',
    description: 'High-accuracy indoor/outdoor potential transformer designed for 11 KV and 22 KV electrical systems. Engineered for durability, high insulation resistance, and reliable voltage measurement.',
  },
  {
    name: '11 KV 22KV POTENTIAL TRANSFORMER',
    fileName: '11 KV 22KV POTENTIAL TRANSFORMER.png',
    image: '/PRODUCT IMAGES/11 KV 22KV POTENTIAL TRANSFORMER.png',
    category: 'Potential Transformer',
    description: 'Alternative design for 11 KV / 22 KV potential transformer, offering reliable voltage stepping and monitoring in power distribution networks.',
  },
  {
    name: '11KV 22KV CURRENT TRANSFORMER',
    fileName: '11KV 22KV CURRENT TRANSFORMER.png',
    image: '/PRODUCT IMAGES/11KV 22KV CURRENT TRANSFORMER.png',
    category: 'Current Transformer',
    description: '11 KV to 22 KV medium voltage current transformer. Provides precise current measurement and protection, featuring high thermal and dynamic stability.',
  },
  {
    name: '3 PHASE POTENTIAL TRANSFORMER',
    fileName: '3 PHASE POTENTIAL TRANSFORMER.png',
    image: '/PRODUCT IMAGES/3 PHASE POTENTIAL TRANSFORMER.png',
    category: 'Potential Transformer',
    description: 'Three-phase voltage transformer designed for simultaneous monitoring of all three phases, ensuring system balance and reliable instrumentation inputs.',
  },
  {
    name: '33 KV POTENTIAL TRANSFORMER',
    fileName: '33 KV POTENTIAL TRANSFORMER.png',
    image: '/PRODUCT IMAGES/33 KV POTENTIAL TRANSFORMER.png',
    category: 'Potential Transformer',
    description: 'Heavy-duty 33 KV potential transformer built to withstand extreme electrical and environmental conditions while delivering accurate metering and relaying voltage.',
  },
  {
    name: '33KV CURRENT TRANSFORMER',
    fileName: '33KV CURRENT TRANSFORMER.png',
    image: '/PRODUCT IMAGES/33KV CURRENT TRANSFORMER.png',
    category: 'Current Transformer',
    description: '33 KV outdoor current transformer designed for system protection and metering in substations and heavy industrial distribution networks.',
  },
  {
    name: 'BAR TYPE CURRENT TRANSFORMER',
    fileName: 'BAR TYPE CURRENT TRANSFORMER.png',
    image: '/PRODUCT IMAGES/BAR TYPE CURRENT TRANSFORMER.png',
    category: 'Current Transformer',
    description: 'Bar-type current transformer (busbar mounted) engineered for simple installation and high performance in power control panels and switchgear.',
  },
  {
    name: 'METERING CUBICLE - VERTICLE',
    fileName: 'METERING CUBICLE - VERTICLE.png',
    image: '/PRODUCT IMAGES/METERING CUBICLE - VERTICLE.png',
    category: 'Metering Cubicle',
    description: 'Vertical layout metering cubicle. Compact footprint, robust metal enclosure, and integrated current/potential transformers for utility billing and energy monitoring.',
  },
  {
    name: 'METERING CUBICLE -HORIZONTAL',
    fileName: 'METERING CUBICLE -HORIZONTAL.png',
    image: '/PRODUCT IMAGES/METERING CUBICLE -HORIZONTAL.png',
    category: 'Metering Cubicle',
    description: 'Horizontal layout metering cubicle. Designed for easy access, wiring maintenance, and clear monitoring of instrumentation in industrial environments.',
  },
  {
    name: 'OIL COOLED CURRENT TRANSFORMER',
    fileName: 'OIL COOLED CURRENT TRANSFORMER.jpg',
    image: '/PRODUCT IMAGES/OIL COOLED CURRENT TRANSFORMER.jpg',
    category: 'Current Transformer',
    description: 'Outdoor oil-cooled current transformer. Features excellent dielectric properties, outdoor weatherproofing, and maximum heat dissipation for high-voltage protection.',
  },
  {
    name: 'OIL COOLED POTENTIAL TRANSFORMER',
    fileName: 'OIL COOLED POTENTIAL TRANSFORMER.jpg',
    image: '/PRODUCT IMAGES/OIL COOLED POTENTIAL TRANSFORMER.jpg',
    category: 'Potential Transformer',
    description: 'Outdoor oil-cooled potential transformer. Combines oil insulation with robust construction to deliver continuous voltage monitoring in high-voltage grids.',
  },
]

const categories = ['All', 'Current Transformer', 'Potential Transformer', 'Metering Cubicle']

export function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Listen for category parameter in URL (e.g. from footer links)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const cat = params.get('category')
      if (cat) {
        const matched = categories.find(
          (c) => c.toLowerCase().replace(/\s+/g, '') === cat.toLowerCase().replace(/\s+/g, '')
        )
        if (matched) {
          setSelectedCategory(matched)
        }
      }
    }
  }, [])

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Search and Filters */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border/60 pb-8 mb-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-red text-white border-brand-red shadow-sm'
                  : 'bg-card text-muted-foreground border-border hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              {cat === 'All' ? 'All Products' : cat + 's'}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-5 text-sm outline-none transition-all focus:border-brand-red focus:ring-1 focus:ring-brand-red text-foreground"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Grid Layout */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.fileName}
              onClick={() => setSelectedProduct(product)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-brand-red/30 cursor-pointer"
            >
              {/* Product Image Panel */}
              <div className="relative overflow-hidden aspect-[4/3] bg-muted/20 flex items-center justify-center p-4 border-b border-border/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with zoom button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Maximize2 className="h-5 w-5" />
                  </span>
                </div>
              </div>

              {/* Product Info Panel */}
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold text-brand-red uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="mt-2 text-base font-bold text-foreground line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {product.fileName.split('.').pop()?.toUpperCase()} Image
                  </span>
                  <span className="text-xs font-semibold text-brand-red group-hover:underline">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-border rounded-3xl bg-card/40">
          <p className="text-lg text-muted-foreground font-medium">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All')
              setSearchQuery('')
            }}
            className="mt-4 text-sm font-semibold text-brand-red hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal View */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 border border-border text-foreground hover:bg-muted hover:text-brand-red shadow transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image Area */}
            <div className="flex-1 bg-muted/10 p-6 flex items-center justify-center max-h-[50vh] md:max-h-full border-b md:border-b-0 md:border-r border-border/50">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Modal Detail Area */}
            <div className="w-full md:w-[380px] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-full bg-card">
              <div>
                <span className="inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red uppercase tracking-wider mb-4">
                  {selectedProduct.category}
                </span>
                <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight leading-snug">
                  {selectedProduct.name}
                </h2>
                <div className="mt-4 space-y-4 border-t border-border/40 pt-4">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Product Overview
                    </h4>
                    <p className="mt-2 text-sm text-foreground leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      File Source
                    </h4>
                    <p className="mt-1 text-sm font-mono text-muted-foreground">
                      /public/PRODUCT IMAGES/{selectedProduct.fileName}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40 flex flex-col gap-3">
                <Button asChild className="w-full cursor-pointer">
                  <a href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Request a Quote
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full cursor-pointer">
                  <a href={selectedProduct.image} download={selectedProduct.fileName}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Image
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
