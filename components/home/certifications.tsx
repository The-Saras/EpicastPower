import { Award } from 'lucide-react'

const certificationsList = [
  {
    title: 'ISO 14001:2015 Certification',
    issuer: 'International Organization for Standardization',
    image: '/certifications/EPICAST_iso.jpeg',
  },
  {
    title: 'MSME ZED Certificate',
    issuer: 'Ministry of MSME, Govt of India',
    image: '/certifications/ZED Certificate- Epicast Power Equipmet_page-0001.jpg',
  },
  {
    title: 'MSEDCL Vendor Approval',
    issuer: 'Maharashtra State Electricity Distribution Co.',
    image: '/certifications/epicast_power_no_14848_page_1.jpg',
  },
  {
    title: 'Udyam Registration Certificate',
    issuer: 'Government of India',
    image: '/certifications/epicast_udyam.jpeg',
  },
]

export function Certifications() {
  return (
    <section className="bg-background py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-red flex items-center justify-center gap-1.5">
            <Award className="h-4 w-4" />
            Credentials & Compliance
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
            Certified Quality & Utility Approvals
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Our commitment to manufacturing excellence is verified by international standards and approvals from major electricity distribution utilities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {certificationsList.map((cert) => (
            <div
              key={cert.title}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              {/* Certificate Preview Image */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-muted/40 p-2 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Certificate Name Section */}
              <div className="p-3 text-center border-t border-border/50 bg-card">
                <h3 className="font-heading text-xs sm:text-sm font-semibold text-foreground line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}