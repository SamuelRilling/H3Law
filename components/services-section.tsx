'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  }

  return (
    <section>
      <div className="grid md:grid-cols-[1fr_1.3fr]">
        <div className="flex items-center justify-center px-6 py-20 text-center md:px-10 md:py-28">
          <p className="max-w-sm font-serif text-3xl italic leading-snug text-foreground md:text-left">
            Más de una década protegiendo el derecho al agua de familias, comunidades agrícolas y
            empresas en el sur de Chile.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-8 px-6 py-20 md:px-10 md:py-28">
          <div>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-accent sm:text-5xl">
              Nuestros Servicios
            </h2>
          </div>

          <ol className="flex flex-col">
            {SERVICES.slice(0, 5).map((title, index) => (
              <motion.li
                key={title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex items-baseline gap-4 border-t border-border py-3 first:border-t-0"
              >
                <span className="font-serif text-sm text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-lg leading-relaxed text-foreground/85">{title}</span>
              </motion.li>
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
