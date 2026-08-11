import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { FadeIn } from '@/components/fade-in'

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <div className="bg-page-wash">
        <FadeIn>
          <ServicesSection />
        </FadeIn>
        
        <FadeIn direction="up">
          <AboutSection />
        </FadeIn>
        
        <FadeIn direction="up">
          <ContactSection />
        </FadeIn>
        
        <SiteFooter />
      </div>
    </main>
  )
}
