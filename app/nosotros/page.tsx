import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { PageHeader } from '@/components/page-header'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Nosotros | H2Law',
  description:
    'Conoce al equipo de H2Law, abogados especializados en derecho de aguas establecidos en la Región de la Araucanía, Chile.',
}

const TEAM = [
  {
    name: 'Sergio Pinto López',
    role: 'Abogado',
  },
  {
    name: 'Anne Rilling Minte',
    role: 'Abogada',
  },
]

export default function NosotrosPage() {
  return (
    <main>
      <SiteHeader />
      <PageHeader
        eyebrow="Quiénes somos"
        title="Nuestro Equipo"
        description="Somos un equipo jurídico establecido en la Región de la Araucanía, especializado en el Derecho de Aguas tanto en La Araucanía como en las regiones de Los Ríos y Los Lagos."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          {TEAM.map((member, index) => (
            <div
              key={member.name}
              className="group flex items-baseline justify-between gap-6 border-t border-border py-8 transition-colors first:border-t-0 hover:border-accent"
            >
              <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                {member.name}
              </h2>
              <p className="flex-none text-xs font-medium uppercase tracking-[0.25em] text-accent">
                {member.role}
              </p>
              <span
                aria-hidden="true"
                className="hidden font-serif text-sm text-muted-foreground transition-colors group-hover:text-accent sm:block"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  )
}
