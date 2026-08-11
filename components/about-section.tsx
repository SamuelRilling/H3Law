import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <span aria-hidden="true" className="mx-auto mb-6 block h-px w-16 bg-accent" />
        <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Quiénes somos
        </span>
        <h2 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Nosotros
        </h2>
        <p className="mx-auto mt-6 text-balance text-base leading-relaxed text-foreground/75">
          Somos un equipo jurídico establecido en la Región de la Araucanía, especializado en el
          Derecho de Aguas tanto en La Araucanía como en las regiones de Los Ríos y Los Lagos.
        </p>
        <Link
          href="/nosotros"
          className="mt-8 inline-flex items-center justify-center rounded-sm border border-primary px-7 py-3 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Conoce a nuestro equipo
        </Link>
      </div>
    </section>
  )
}
