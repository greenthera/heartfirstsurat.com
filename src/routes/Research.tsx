import { Link } from 'react-router'
import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import TrialsTable from '@/components/TrialsTable'
import { asset } from '@/lib/asset'
import { dissertations, teachingGroups } from '@/content/research'

export default function Research() {
  return (
    <>
      <Seo {...metaFor('/research')} />
      <Masthead n="07" eyebrow="Academic Work" title="Clinical Research" accent="& Education" />

      <Section eyebrow="01" title="Clinical Research">
        <p className="font-serif text-[15px] leading-relaxed text-ink">
          Principal Investigator for multicentre national and global clinical trials, including
          first-in-man and Phase-4 studies. See the{' '}
          <Link to="/career-highlights" className="text-indigo hover:underline">
            full research record on the Career Highlights page
          </Link>
          .
        </p>
      </Section>

      <Section eyebrow="02" title="Multicentre National & Global Trials">
        <TrialsTable />
      </Section>

      <Section eyebrow="03" title="Original Research">
        <p className="font-serif text-[15px] leading-relaxed text-ink">
          More than 100 peer-reviewed papers, abstracts and book chapters — see{' '}
          <Link to="/scientific-publications" className="text-indigo hover:underline">
            Scientific Publications
          </Link>
          .
        </p>
      </Section>

      <Section eyebrow="04" title="Academic Activities">
        <p className="font-serif text-[15px] leading-relaxed text-ink">
          Invited faculty at more than 50 national and international conferences and workshops;
          Course Director for six clinical conferences; Superspecialty (Cardiology) teacher for the
          Diplomate of National Board.
        </p>
      </Section>

      <Section eyebrow="05" title="Student Dissertations">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dissertations.map(d => (
            <li key={d.name} className="border border-line">
              <img
                src={asset(d.photo)}
                alt={d.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-4">
                <p className="font-display text-lg leading-tight">{d.name}</p>
                {d.ongoing && <p className="label mt-1 text-indigo">Ongoing</p>}
                <p className="mt-2 font-serif text-[14px] leading-relaxed text-mute">{d.topic}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="06" title="Teaching Programs & Workshops">
        <div className="grid gap-8 sm:grid-cols-3">
          {teachingGroups.map(g => (
            <div key={g.title}>
              <h3 className="label text-indigo">{g.title}</h3>
              <ul className="mt-3 space-y-2 font-serif text-[15px] leading-relaxed text-ink">
                {g.items.map(it => (
                  <li key={it} className="border-t border-line pt-2">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
