import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
