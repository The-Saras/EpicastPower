'use client'

import { useState, useEffect } from 'react'
import { Award, CheckCircle2, ExternalLink, X, ZoomIn } from 'lucide-react'

const certificationsList = [
  {
    title: 'ISO 9001:2015 Certification',
    issuer: 'International Organization for Standardization',
    badge: 'Quality Management',
    description: 'Certified Quality Management System for the design, manufacturing, assembly, and testing of current transformers, potential transformers, and electrical metering cubicles.',
    image: '/certifications/EPICAST_iso.jpeg',
    fileUrl: '/certifications/EPICAST_iso.pdf',
    isPdf: true,
  },
  {
    title: 'MSME ZED Certificate',
    issuer: 'Ministry of MSME, Govt of India',
    badge: 'Zero Defect Zero Effect',
    description: 'Awarded under the ZED Scheme, certifying our commitment to zero-defect manufacturing processes and zero-effect environmental impact.',
    image: '/certifications/ZED Certificate- Epicast Power Equipmet_page-0001.jpg',
    fileUrl: '/certifications/ZED Certificate- Epicast Power Equipmet_page-0001.jpg',
    isPdf: false,
  },
  {
    title: 'MSEDCL Vendor Approval',
    issuer: 'Maharashtra State Electricity Distribution Co.',
    badge: 'Utility Approved Supplier',
    description: 'Approved vendor for 11 kV HT Metering Cubicles, 11 kV Dry Type Potential Transformers, and 11kV/22kV/33kV Current Transformers.',
    image: '/certifications/epicast_power_no_14848_page_1.jpg',
    fileUrl: '/certifications/Epicast Power No 14848.pdf',
    isPdf: true,
  },
  {
    title: 'GST Registration Certificate',
    issuer: 'Government of India',
    badge: 'Tax Compliance',
    description: 'Goods and Services Tax Registration Certificate under the Government of India, verifying our tax compliance and business registration status.',
    image: '/certifications/epicast_udyam.jpeg',
    fileUrl: '/certifications/epicast_udyam.pdf',
    isPdf: true,
  },
]

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  // Listen for Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        setSelectedTitle(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleCardClick = (cert: typeof certificationsList[0]) => {
    if (cert.isPdf) {
      window.open(cert.fileUrl, '_blank')
    } else {
      setSelectedImage(cert.image)
      setSelectedTitle(cert.title)
    }
  }

  return (
    <section className="bg-background py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red flex items-center justify-center gap-1.5">
            <Award className="h-4 w-4" />
            Credentials & Compliance
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Certified Quality & Utility Approvals
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our commitment to manufacturing excellence is verified by international standards and approvals from major electricity distribution utilities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsList.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/20"
            >
              <div>
                {/* Certificate Preview Image */}
                <div
                  className="relative h-80 w-full overflow-hidden bg-muted cursor-pointer"
                  onClick={() => handleCardClick(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground shadow-lg">
                      {cert.isPdf ? (
                        <>
                          <ExternalLink className="h-4 w-4 text-brand-red" />
                          Open PDF Document
                        </>
                      ) : (
                        <>
                          <ZoomIn className="h-4 w-4 text-brand-red" />
                          View Certificate
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4">
                <button
                  onClick={() => handleCardClick(cert)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-background py-2.5 px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
                >
                  {cert.isPdf ? (
                    <>
                      View Full PDF Approval
                      <ExternalLink className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Expand Certificate
                      <ZoomIn className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={() => {
            setSelectedImage(null)
            setSelectedTitle(null)
          }}
        >
          {/* Modal Content Wrapper */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center bg-card rounded-2xl border border-border shadow-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="w-full flex items-center justify-between border-b border-border/40 pb-3 mb-4">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {selectedTitle}
              </h3>
              <button
                onClick={() => {
                  setSelectedImage(null)
                  setSelectedTitle(null)
                }}
                className="rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Image */}
            <div className="relative w-full max-h-[70vh] flex justify-center bg-muted/30 rounded-lg overflow-hidden border border-border/55">
              <img
                src={selectedImage}
                alt={selectedTitle || "Certificate"}
                className="max-h-[65vh] object-contain"
              />
            </div>

            {/* Footer Actions */}
            <div className="w-full flex justify-end gap-3 mt-4 pt-3 border-t border-border/40">
              <a
                href={selectedImage}
                download
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary py-2 px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Download Image
              </a>
              <button
                onClick={() => {
                  setSelectedImage(null)
                  setSelectedTitle(null)
                }}
                className="inline-flex items-center rounded-lg border border-border bg-background py-2 px-4 text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


//indoor outdoor category in products 