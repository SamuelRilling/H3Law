import Link from 'next/link'

const SERVICES = [
  'Solicitudes de Derecho de Aprovechamiento de Aguas',
  'Escrituras de Compraventa de Derecho de Aprovechamiento de Aguas',
  'Regularización de Derecho de Aprovechamiento de Aguas',
  'Traslado de Punto de Captación y ejercicio de Derechos',
  'Denuncias por extracción ilegal de Aguas',
  'Recursos judiciales contra Resoluciones DGA',
  'Inscripción de Derechos en el Catastro Público de Aguas',
  'Asesorías a Parcelaciones',
]

export function ServicesSection() {
  return (
    <section className="on-dark">
      <div className="grid md:grid-cols-[1fr_1.3fr]">
        <div className="flex items-center px-6 py-20 md:px-10 md:py-28">
          <p className="max-w-xs text-balance font-serif text-2xl font-medium leading-snug text-foreground">
            Más de una década protegiendo el derecho al agua de familias, comunidades agrícolas y
            empresas en el sur de Chile.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 px-6 py-20 md:px-10 md:py-28">
          <div>
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Lo que hacemos
            </span>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-accent sm:text-5xl">
              Nuestros Servicios
            </h2>
          </div>

          <ol className="flex flex-col">
            {SERVICES.slice(0, 5).map((title, index) => (
              <li
                key={title}
                className="flex items-baseline gap-4 border-t border-border py-3 first:border-t-0"
              >
                <span className="font-serif text-sm text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[15px] leading-relaxed text-foreground/85">{title}</span>
              </li>
            ))}
          </ol>

          <Link
            href="/nuestros-servicios"
            className="inline-flex w-fit items-center justify-center rounded-sm bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
