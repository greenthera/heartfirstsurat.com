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
    <header className="masthead-vector relative overflow-hidden border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] pb-10 pt-[clamp(1.75rem,7vw,5rem)] sm:pr-32">
      <svg aria-hidden="true" viewBox="0 0 720 260" preserveAspectRatio="none" className="pointer-events-none absolute inset-y-0 right-0 h-full w-[70%] max-w-3xl text-indigo opacity-[0.11]">
        <path d="M0 164h117l23-44 31 89 34-67 20 22h85l25-40 29 75 24-35h332" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <circle cx="590" cy="95" r="76" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 9" vectorEffect="non-scaling-stroke" />
        <circle cx="590" cy="95" r="48" fill="currentColor" opacity=".12" />
      </svg>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 right-4 hidden font-display text-[clamp(4rem,12vw,8rem)] leading-none text-line/50 sm:block"
      >
        {n}
      </span>
      <p className="load-reveal label relative flex items-center gap-2 text-indigo">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow" />
        {eyebrow}
      </p>
      <h1 className="load-reveal load-reveal-delay relative mt-4 max-w-2xl font-display text-[clamp(2rem,6vw,4rem)] font-light leading-[1.02] tracking-tight">
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
