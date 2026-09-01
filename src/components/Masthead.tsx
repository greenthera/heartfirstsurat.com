export default function Masthead({
  n,
  eyebrow,
  title,
  accent,
}: {
  n: string
  eyebrow: string
  title: string
  accent?: string
}) {
  return (
    <header className="relative overflow-hidden border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] pb-10 pt-[clamp(3rem,8vw,5rem)] sm:pr-32">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-4 hidden font-display text-[clamp(4rem,12vw,8rem)] leading-none text-line/50 sm:block"
      >
        {n}
      </span>
      <p className="label flex items-center gap-2 text-indigo">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow" />
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(2rem,6vw,4rem)] font-light leading-[1.02] tracking-tight">
        {title}
        {accent && (
          <>
            {' '}
            <em className="italic text-indigo">{accent}</em>
          </>
        )}
      </h1>
    </header>
  )
}
