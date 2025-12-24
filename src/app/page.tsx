import Hero from '@/components/Hero'
import AboutSummary from '@/components/AboutSummary'
import ServicesSummary from '@/components/ServicesSummary'
import PortfolioSummary from '@/components/PortfolioSummary'
import Testimonials from '@/components/Testimonials'
import ContactSummary from '@/components/ContactSummary'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutSummary />
      <ServicesSummary />
      <PortfolioSummary />
      <Testimonials />
      <ContactSummary />
    </main>
  )
}
