import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { Clients } from '@/components/home/clients'
import { About } from '@/components/home/about'
import { History } from '@/components/home/history'
import { Directors } from '@/components/home/directors'
import { WhyChooseUs } from '@/components/home/why-choose-us'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Clients />
        <About />
        <History />
        <Directors />
        <WhyChooseUs />
      </main>
      <SiteFooter />
    </>
  )
}
