import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] items-end overflow-hidden">
      <Image
        src="/images/hero-valley.jpg"
        alt="Vista aérea de un valle verde con un río que serpentea entre montañas, representando los recursos hídricos que H2Law protege"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-32 md:grid-cols-[1.4fr_1fr] md:items-end md:px-10 md:pb-24">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Estudio jurídico de derecho de aguas &middot; Temuco, Chile
          </p>
          <h1 className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-white sm:text-8xl">
            Defendemos
            <br />
            tu agua.
          </h1>
        </div>
        <div className="flex flex-col gap-6 border-t border-white/30 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
          <p className="text-balance text-base leading-relaxed text-white/85">
            Asesoría legal especializada en derechos de aprovechamiento de aguas para personas,
            comunidades y empresas en el sur de Chile.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              href="/nuestros-servicios"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Ver Servicios
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-sm border border-white/50 px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
