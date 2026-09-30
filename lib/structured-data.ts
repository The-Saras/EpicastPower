export const siteConfig = {
  name: 'Epicast Power Equipment',
  legalName: 'Epicast Power Equipment Pvt. Ltd.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.epicastpower.in',
  description:
    'Epicast Power Equipment designs and manufactures precision power transmission, distribution equipment, precision CNC machined parts, and heavy-duty industrial assemblies.',
  foundingDate: '2004',
  telephone: '+91-9730537603',
  altTelephone: '+91-9823565857',
  email: 'mkt1.epicastpower@gmail.com',
  purchaseEmail: 'pur2.epicastpower@gmail.com',
  address: {
    streetAddress: 'Plot No. W-134(A), MIDC Ambad',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422010',
    addressCountry: 'IN',
  },
  worksAddress: {
    streetAddress: 'Datta Nagar Road, MIDC Ambad',
    addressLocality: 'Nashik',
    addressRegion: 'Maharashtra',
    postalCode: '422010',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 19.95,
    longitude: 73.745,
  },
  openingHours: [
    'Mo-Fr 09:00-18:00',
    'Su 09:00-18:00',
  ],
  certifications: [
    'ISO 9001:2015',
    'AS9100 / ISO 13485',
    'EN 1090 / ISO 3834',
  ],
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo.png`,
    image: `${siteConfig.url}/images/hero-facility.png`,
    description: siteConfig.description,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHours: siteConfig.openingHours,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.telephone,
        contactType: 'sales and marketing',
        email: siteConfig.email,
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.altTelephone,
        contactType: 'operations and customer support',
        email: siteConfig.purchaseEmail,
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    inLanguage: 'en-US',
  }
}

export function getProductsItemListSchema(
  categories: {
    slug: string
    name: string
    shortDescription: string
    image: string
  }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Epicast Power Equipment Products & Services',
    description:
      'Precision engineered power transmission and distribution equipment, CNC machining, and metal fabrication.',
    itemListElement: categories.map((cat, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: cat.name,
        description: cat.shortDescription,
        image: `${siteConfig.url}${cat.image}`,
        url: `${siteConfig.url}/products#${cat.slug}`,
        brand: {
          '@type': 'Brand',
          name: siteConfig.name,
        },
        manufacturer: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
      },
    })),
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  }
}
