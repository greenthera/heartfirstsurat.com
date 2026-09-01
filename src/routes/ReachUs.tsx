import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import ExternalLink from '@/components/ExternalLink'
import { mapUrl } from '@/lib/maps'

const clinic = ['+91-9099231122', '+91-261-2472211', '+91-9824145738']
const hospital = ['+91-261-2290000', '+91-261-2290003']

function Numbers({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1">
      {items.map(p => (
        <li key={p}>
          <a href={`tel:${p.replace(/[^\d+]/g, '')}`} className="text-indigo hover:underline">
            {p}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function ReachUs() {
  return (
    <>
      <Seo {...metaFor('/reach-us')} />
      <Masthead n="08" eyebrow="Appointments & Emergency" title="Reach" accent="HeartFirst" />

      <Section eyebrow="Emergency" title="What to do in an Emergency Situation?">
        <p className="font-serif text-[15px] leading-relaxed text-ink">
          You can call{' '}
          <a href="tel:9824145738" className="text-indigo">
            9824145738
          </a>{' '}
          /{' '}
          <a href="tel:9825145738" className="text-indigo">
            9825145738
          </a>{' '}
          at any time of day or night for a genuine emergency.
        </p>
        <p className="mt-3 font-serif text-[15px] leading-relaxed text-ink">
          Call 108 or reach in your vehicle at the earliest to the Emergency Department of{' '}
          <ExternalLink
            href={mapUrl('Mahavir Heart Institute, Ring Road, Athwagate, Surat')}
            className="text-indigo underline underline-offset-2"
          >
            Mahavir Heart Institute, Ring Road, Athwagate, Surat
          </ExternalLink>
          .
        </p>
      </Section>

      <Section eyebrow="Out Patient Appointments" title="Contact for appointment">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="label text-indigo">At Clinic</h3>
            <Numbers items={clinic} />
          </div>
          <div>
            <h3 className="label text-indigo">At Mahavir Heart Institute</h3>
            <Numbers items={hospital} />
          </div>
        </div>
      </Section>
    </>
  )
}
