import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import { publications } from '@/content/publications'

export default function Publications() {
  return (
    <>
      <Seo {...metaFor('/scientific-publications')} />
      <Masthead
        n="04"
        eyebrow="Scientific Work"
        title="Evidence that moves"
        accent="cardiac care forward."
      />
      <Section
        eyebrow={`${publications.length} peer-reviewed papers, abstracts & chapters — 1986–2020`}
      >
        <ol className="space-y-4">
          {publications.map(p => (
            <li key={p.n} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line pt-4">
              <span className="font-display text-indigo">{String(p.n).padStart(2, '0')}</span>
              <p className="min-w-0 break-words font-serif text-[15px] leading-relaxed text-ink">
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
