export type ProductCategory = {
  slug: string
  name: string
  shortDescription: string
  image: string
  overview: string
  gallery: string[]
  specs: { label: string; value: string }[]
}

export const categories: ProductCategory[] = [
  {
    slug: 'industrial-components',
    name: 'Industrial Components',
    shortDescription:
      'Heavy-duty components engineered for demanding industrial applications.',
    image: '/images/cat-industrial-components.png',
    overview:
      'Our industrial components are built to perform under extreme conditions. From load-bearing assemblies to wear-resistant fittings, every part is engineered to exacting tolerances and validated through rigorous quality control.',
    gallery: [
      '/images/cat-industrial-components.png',
      '/images/cat-precision-parts.png',
      '/images/cat-machinery-components.png',
    ],
    specs: [
      { label: 'Material', value: 'Carbon & Stainless Steel' },
      { label: 'Tolerance', value: '± 0.01 mm' },
      { label: 'Surface Finish', value: 'Ra 0.8 – 3.2 µm' },
      { label: 'Certification', value: 'ISO 9001:2015' },
      { label: 'Lead Time', value: '2 – 4 weeks' },
    ],
  },
  {
    slug: 'precision-parts',
    name: 'Precision Parts',
    shortDescription:
      'High-tolerance machined parts for aerospace, medical, and automotive sectors.',
    image: '/images/cat-precision-parts.png',
    overview:
      'Precision is at the core of everything we do. Our multi-axis CNC machining centers produce intricate parts with micron-level accuracy, ideal for mission-critical applications where failure is not an option.',
    gallery: [
      '/images/cat-precision-parts.png',
      '/images/cat-custom-manufacturing.png',
      '/images/cat-industrial-components.png',
    ],
    specs: [
      { label: 'Material', value: 'Titanium, Aluminum, Brass' },
      { label: 'Tolerance', value: '± 0.005 mm' },
      { label: 'Axes', value: '5-Axis CNC' },
      { label: 'Certification', value: 'AS9100 / ISO 13485' },
      { label: 'Lead Time', value: '1 – 3 weeks' },
    ],
  },
  {
    slug: 'metal-fabrication',
    name: 'Metal Fabrication',
    shortDescription:
      'Custom sheet metal and structural fabrication with certified welding.',
    image: '/images/cat-metal-fabrication.png',
    overview:
      'Our fabrication facility combines laser cutting, CNC bending, and certified welding to deliver complete structural assemblies. From prototypes to high-volume production, we handle projects of any scale.',
    gallery: [
      '/images/cat-metal-fabrication.png',
      '/images/cat-machinery-components.png',
      '/images/hero-facility.png',
    ],
    specs: [
      { label: 'Max Sheet Size', value: '3000 × 1500 mm' },
      { label: 'Thickness Range', value: '0.5 – 25 mm' },
      { label: 'Welding', value: 'MIG / TIG / Spot' },
      { label: 'Certification', value: 'EN 1090 / ISO 3834' },
      { label: 'Lead Time', value: '2 – 5 weeks' },
    ],
  },
  {
    slug: 'machinery-components',
    name: 'Machinery Components',
    shortDescription:
      'Rotating assemblies, housings, and drivetrain parts for heavy machinery.',
    image: '/images/cat-machinery-components.png',
    overview:
      'We manufacture and assemble complete machinery components including gearboxes, housings, shafts, and bearing assemblies — balanced, tested, and ready for integration into your equipment.',
    gallery: [
      '/images/cat-machinery-components.png',
      '/images/cat-industrial-components.png',
      '/images/about-factory.png',
    ],
    specs: [
      { label: 'Material', value: 'Cast Iron, Alloy Steel' },
      { label: 'Balancing', value: 'ISO 1940 G2.5' },
      { label: 'Hardness', value: 'Up to 62 HRC' },
      { label: 'Certification', value: 'ISO 9001:2015' },
      { label: 'Lead Time', value: '3 – 6 weeks' },
    ],
  },
  {
    slug: 'custom-manufacturing',
    name: 'Custom Manufacturing',
    shortDescription:
      'End-to-end custom solutions from design to delivery, tailored to you.',
    image: '/images/cat-custom-manufacturing.png',
    overview:
      'Have a unique challenge? Our engineering team partners with you from concept through production. We provide design-for-manufacturability consulting, prototyping, and scalable production runs.',
    gallery: [
      '/images/cat-custom-manufacturing.png',
      '/images/cat-precision-parts.png',
      '/images/hero-facility.png',
    ],
    specs: [
      { label: 'Services', value: 'Design, Prototype, Production' },
      { label: 'MOQ', value: 'From 1 unit' },
      { label: 'Capacity', value: '50,000+ units/month' },
      { label: 'Certification', value: 'ISO 9001:2015' },
      { label: 'Lead Time', value: 'Project-based' },
    ],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}
