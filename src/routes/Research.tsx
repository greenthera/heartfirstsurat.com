import { Link } from 'react-router'
import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import { research } from '@/content/research'

export default function Research() {
  return (
    <>
      <Seo {...metaFor('/research')} />
      <Masthead n="07" eyebrow="Academic Work" title="Clinical Research" accent="& Education" />
      {research.map((s, i) => (
        <Section key={s.heading} eyebrow={String(i + 1).padStart(2, '0')} title={s.heading}>
          {s.body && (
            <p className="font-serif text-[15px] leading-relaxed text-ink">{s.body}</p>
          )}
          {s.heading === 'Multicentre National & Global Trials' && (
            <Link to="/career-highlights" className="text-indigo hover:underline">
              See the full trials table →
            </Link>
          )}
        </Section>
      ))}
    </>
  )
}
