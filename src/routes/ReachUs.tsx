import { Ambulance, Phone } from 'lucide-react'
import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import ExternalLink from '@/components/ExternalLink'
import { mapUrl } from '@/lib/maps'

const emergencyNumbers = ['9824145738', '9825145738']
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

      <section
        id="emergency"
        className="scroll-mt-24 border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] py-[clamp(2rem,5vw,3.5rem)]"
      >
        <div className="border-l-4 border-danger bg-danger-tint p-5 sm:p-7">
          <p className="label flex items-center gap-2 text-danger">
            <Ambulance size={16} /> Emergency
          </p>
          <h2 className="mt-2 font-display text-2xl font-light text-danger-deep md:text-3xl">
            What to do in an Emergency Situation?
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {emergencyNumbers.map(n => (
              <a
                key={n}
                href={`tel:${n}`}
                className="inline-flex items-center gap-2 bg-danger px-5 py-3 font-display text-lg text-paper hover:bg-danger-deep"
              >
                <Phone size={16} /> {n}
              </a>
            ))}
          </div>
          <p className="mt-4 font-serif text-[15px] leading-relaxed text-ink">
            Call these numbers at any time of day or night for a genuine emergency.
          </p>
          <p className="mt-3 font-serif text-[15px] leading-relaxed text-ink">
            Or call{' '}
            <a href="tel:108" className="font-semibold text-danger-deep">
              108
            </a>{' '}
            and reach the Emergency Department of{' '}
            <ExternalLink
              href={mapUrl('Mahavir Heart Institute, Ring Road, Athwagate, Surat')}
              className="text-danger-deep underline underline-offset-2"
            >
              Mahavir Heart Institute, Ring Road, Athwagate, Surat
            </ExternalLink>{' '}
            at the earliest.
          </p>
        </div>
      </section>

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
