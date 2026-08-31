import { Award } from 'lucide-react'

const certificationsList = [
  {
    title: 'ISO 9001:2015 Certification',
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
    title: 'GST Registration Certificate',
    issuer: 'Government of India',
    image: '/certifications/epicast_udyam.jpeg',
  },
]

export function Certifications() {
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
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
            >
              {/* Certificate Preview Image */}
              <div className="relative h-80 w-full overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Certificate Name Section */}
              <div className="p-4 text-center border-t border-border/50 bg-card">
                <h3 className="font-heading text-sm font-semibold text-foreground sm:text-base">
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