import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { PageHeader } from '@/components/page-header'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Contacto | H2Law',
  description:
    'Contáctanos en Antonio Varas 687, Oficina 509, Torre Sinergia, Temuco, Chile. Escríbenos o llámanos para una asesoría en derecho de aguas.',
}

export default function ContactoPage() {
  return (
    <main>
      <SiteHeader />
      <PageHeader
        eyebrow="Hablemos"
        title="Contáctanos"
        description="Escríbenos y te contactaremos a la brevedad para conversar sobre tu derecho de aguas."
      />
      <ContactSection includeApellido showHeading={false} />
      <SiteFooter />
    </main>
  )
}
