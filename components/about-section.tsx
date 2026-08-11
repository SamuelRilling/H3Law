import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="font-serif text-4xl font-medium tracking-tight text-accent sm:text-5xl">
          Nosotros
        </h2>
        <p className="mx-auto mt-6 text-balance text-xl leading-relaxed text-white/90">
          Somos un equipo jurídico establecido en la Región de la Araucanía, especializado en el
          Derecho de Aguas tanto en La Araucanía como en las regiones de Los Ríos y Los Lagos.
        </p>
        <Link
          href="/nosotros"
          className="mt-8 inline-flex items-center justify-center rounded-sm border border-accent px-7 py-3 text-sm font-medium tracking-wide text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Conoce a nuestro equipo
        </Link>
      </div>
    </section>
  )
}
