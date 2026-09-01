import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import Gallery from '@/components/Gallery'
import ExternalLink from '@/components/ExternalLink'
import { facilities } from '@/content/facilities'
import { mapUrl, CLINIC_MAP_QUERY } from '@/lib/maps'

export default function Facilities() {
  const clinicMap = mapUrl(CLINIC_MAP_QUERY)
  return (
    <>
      <Seo {...metaFor('/facilities')} />
      <Masthead n="05" eyebrow="HeartFirst Surat" title="Clinic" accent="Facilities" />

      <Section eyebrow="HeartFirst Cardiac Care" title={facilities.description}>
        <ExternalLink
          href={clinicMap}
          className="font-serif text-[15px] text-ink underline decoration-line underline-offset-4 hover:decoration-indigo"
        >
          {facilities.address}
        </ExternalLink>
        <p className="mt-2 font-serif text-[15px] text-mute">{facilities.timing}</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {facilities.apptContacts.map(p => (
            <a
              key={p}
              href={`tel:${p.replace(/[^\d+]/g, '')}`}
              className="text-indigo hover:underline"
            >
              {p}
            </a>
          ))}
          <a
            href={`mailto:${facilities.webAppointment}`}
            className="text-indigo hover:underline"
          >
            {facilities.webAppointment}
          </a>
          <ExternalLink href={clinicMap} className="text-indigo hover:underline">
            Open clinic location →
          </ExternalLink>
        </div>
      </Section>

      <Section eyebrow="On site" title="Clinic Facilities">
        <ul className="grid border-l border-t border-line sm:grid-cols-2">
          {facilities.facilityList.map((f, i) => (
            <li
              key={f}
              className="flex items-baseline gap-3 border-b border-r border-line p-4 text-[15px]"
            >
              <span className="label text-mute/70">{String(i + 1).padStart(2, '0')}</span>
              <span className="min-w-0 break-words">{f}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="The clinic">
        <Gallery images={facilities.images} altPrefix="HeartFirst clinic" />
      </Section>
    </>
  )
}
