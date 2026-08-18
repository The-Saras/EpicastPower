import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { Clients } from '@/components/home/clients'
import { About } from '@/components/home/about'
import { VisionMission } from '@/components/home/history'
import { Directors } from '@/components/home/directors'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Certifications } from '@/components/home/certifications'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Directors />
        <Clients />
        <Certifications />
        <WhyChooseUs />
      </main>
      <SiteFooter />
    </>
  )
}
