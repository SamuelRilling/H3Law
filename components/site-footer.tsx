export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:px-10 md:text-left">
        <p className="font-serif text-base text-foreground">
          H<span className="text-accent">2</span>Law
        </p>
        <p className="text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} H2Law — Defendemos tu agua. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
