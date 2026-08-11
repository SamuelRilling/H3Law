'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { validateContactForm, type ContactFormState } from '@/lib/contact-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const INITIAL_STATE: ContactFormState = { status: 'idle' }

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.2h2.4l.46-2.8h-2.86V9.3c0-.77.24-1.3 1.4-1.3h1.5V5.5c-.26-.04-1.14-.11-2.17-.11-2.15 0-3.63 1.31-3.63 3.72v2.07H8.1v2.8h2.4V21h3Z" />
    </svg>
  )
}

export function ContactSection({
  includeApellido = false,
  showHeading = true,
}: {
  includeApellido?: boolean
  showHeading?: boolean
}) {
  const [state, setState] = useState<ContactFormState>(INITIAL_STATE)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState(validateContactForm(new FormData(event.currentTarget)))
  }

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {showHeading && (
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Hablemos
            </span>
            <h2 className="font-serif text-4xl font-medium tracking-tight text-accent sm:text-5xl">
              Contáctanos
            </h2>
          </div>
        )}

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary text-foreground">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="pt-2 text-[15px] leading-relaxed text-foreground/80">
                Antonio Varas 687, Oficina 509,
                <br />
                Torre Sinergia, Temuco, Chile
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary text-foreground">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <a
                href="tel:+56982719372"
                className="pt-2 text-[15px] leading-relaxed text-foreground/80 transition-colors hover:text-accent"
              >
                +56 9 8271 9372
              </a>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary text-foreground">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <a
                href="mailto:annerillingminte@gmail.com"
                className="pt-2 text-[15px] leading-relaxed text-foreground/80 transition-colors hover:text-accent"
              >
                annerillingminte@gmail.com
              </a>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de H2Law"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de H2Law"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <div className="flex flex-col gap-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="Tu nombre"
                autoComplete="given-name"
                aria-invalid={Boolean(state.fieldErrors?.nombre)}
                aria-describedby={state.fieldErrors?.nombre ? 'nombre-error' : undefined}
              />
              {state.fieldErrors?.nombre && (
                <p id="nombre-error" className="text-xs text-destructive">
                  {state.fieldErrors.nombre}
                </p>
              )}
            </div>
            {includeApellido && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  id="apellido"
                  name="apellido"
                  placeholder="Tu apellido"
                  autoComplete="family-name"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">
                Email <span className="text-accent">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                autoComplete="email"
                aria-invalid={Boolean(state.fieldErrors?.email)}
                aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined}
              />
              {state.fieldErrors?.email && (
                <p id="email-error" className="text-xs text-destructive">
                  {state.fieldErrors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="mensaje">Escribe un mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="¿En qué podemos ayudarte?"
                aria-invalid={Boolean(state.fieldErrors?.mensaje)}
                aria-describedby={state.fieldErrors?.mensaje ? 'mensaje-error' : undefined}
              />
              {state.fieldErrors?.mensaje && (
                <p id="mensaje-error" className="text-xs text-destructive">
                  {state.fieldErrors.mensaje}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-sm bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Enviar
            </button>
            <div role="status" aria-live="polite">
              {state.status === 'success' && (
                <p className="text-sm text-primary">{state.message}</p>
              )}
              {state.status === 'error' && state.message && !state.fieldErrors && (
                <p className="text-sm text-destructive">{state.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
