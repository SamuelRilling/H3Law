export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="pt-36 pb-20 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
        <h1 className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-foreground/70">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
