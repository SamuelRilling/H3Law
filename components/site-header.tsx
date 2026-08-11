'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { BASE_PATH } from '@/lib/base-path'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Nuestros Servicios', href: '/nuestros-servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolledPast, setScrolledPast] = useState(false)
  const [open, setOpen] = useState(false)
  const scrolled = !isHome || scrolledPast

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolledPast(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_theme(colors.border)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md">
            <Image
              src={`${BASE_PATH}/images/h2law-logo.jpg`}
              alt="Logo H2Law"
              width={64}
              height={64}
              className="h-full w-full object-contain"
              priority
            />
          </span>

        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors',
                pathname === link.href
                  ? scrolled
                    ? 'text-foreground'
                    : 'text-white'
                  : scrolled
                    ? 'text-foreground/70 hover:text-foreground'
                    : 'text-white/85 hover:text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contacto"
          className={cn(
            'hidden rounded-sm border px-5 py-2.5 text-sm font-medium tracking-wide transition-colors md:inline-flex',
            scrolled
              ? 'border-primary bg-primary text-primary-foreground hover:bg-primary/90'
              : 'border-white/70 text-white hover:bg-white/10',
          )}
        >
          Consulta Ahora
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className={cn(
            'inline-flex items-center justify-center rounded-sm p-2 md:hidden',
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-foreground/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Consulta Ahora
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
