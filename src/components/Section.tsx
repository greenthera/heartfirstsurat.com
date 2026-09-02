import type { ReactNode } from 'react'

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string
  eyebrow?: string
  title?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] py-[clamp(2rem,5vw,3.5rem)]"
    >
      {eyebrow && <p className="label text-mute">{eyebrow}</p>}
      {title && <h2 className="mt-2 font-display text-2xl font-light md:text-3xl">{title}</h2>}
      <div className={eyebrow || title ? 'mt-6' : ''}>{children}</div>
    </section>
  )
}
