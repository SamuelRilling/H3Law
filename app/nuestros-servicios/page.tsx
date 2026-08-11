import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact-section'
import { PageHeader } from '@/components/page-header'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Nuestros Servicios | H2Law',
  description:
    'Servicios legales de H2Law en derecho de aguas: derechos de aprovechamiento, escrituras, regularizaciones, traslados de captación, denuncias, recursos ante la DGA y más.',
}

const SERVICES = [
  {
    title: 'Solicitudes de Derecho de Aprovechamiento de Aguas',
    description:
      'Tramitamos ante la DGA los derechos de aprovechamiento de aguas superficiales y subterráneas cumpliendo con la normativa vigente en el Código de Aguas y su posterior inscripción en el Conservador de Bienes Raíces que corresponda.',
  },
  {
    title: 'Escrituras de Compraventa de Derechos de Aprovechamiento de Aguas',
    description:
      'Redacción de todas las escrituras correspondientes a la compra o venta de un derecho de aprovechamiento de aguas ya existente y sus inscripciones respectivas.',
  },
  {
    title: 'Regularización de Derechos de Aprovechamiento de Aguas',
    description:
      'Se contempla la regularización de derechos de aprovechamiento de aguas utilizadas y no inscritas, para solicitar su inscripción ante la DGA.',
  },
  {
    title: 'Traslado de Punto de Captación y ejercicio de un Derecho de Aguas',
    description:
      'Tramitamos ante la DGA el cambio del punto de captación de un derecho de aprovechamiento de aguas existente a un nuevo punto de captación y su correspondiente inscripción en el Conservador de Bienes Raíces.',
  },
  {
    title: 'Denuncias por extracción ilegal de aguas',
    description:
      'Si te sientes afectado en tu derecho de aguas por alguna persona que se encuentra extrayendo agua ilegalmente, realizamos las denuncias correspondientes tanto en sede penal como administrativa.',
  },
  {
    title: 'Recursos Judiciales contra resoluciones de la DGA',
    description:
      'Contra las resoluciones de la Dirección General de Aguas existen recursos en sede administrativa y sede judicial que se pueden interponer.',
  },
  {
    title: 'Inscripción de Derechos en el Catastro Público de Aguas',
    description:
      'En cumplimiento al nuevo Código de Aguas es necesario que todos los derechos de aprovechamiento inscritos se encuentren en el Catastro Público de Aguas de la DGA.',
  },
  {
    title: 'Asesorías a Parcelaciones',
    description: 'Asesoramos parcelaciones tanto con las soluciones hídricas como con la venta de cada lote.',
  },
]

export default function ServiciosPage() {
  return (
    <main>
      <SiteHeader />
      <div className="bg-page-wash">
        <PageHeader
          eyebrow="Lo que hacemos"
          title="Nuestros Servicios"
          description="Asesoría legal integral en derecho de aguas, desde la solicitud de nuevos derechos hasta la defensa ante la Dirección General de Aguas."
        />

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            {SERVICES.map(({ title, description }, index) => (
              <div
                key={title}
                className="grid gap-3 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[auto_1fr] md:gap-10"
              >
                <span className="font-serif text-3xl font-medium leading-none text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-serif text-xl font-medium tracking-tight text-accent">
                    {title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-foreground/75">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  )
}
