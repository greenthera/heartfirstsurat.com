import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import Masthead from '@/components/Masthead'
import Section from '@/components/Section'
import Portrait from '@/components/Portrait'
import { doctor } from '@/content/doctor'
import { aboutResources } from '@/content/about'

export default function About() {
  return (
    <>
      <Seo {...metaFor('/about')} />
      <Masthead n="02" eyebrow="About the Doctor" title="Know About" accent="Dr. Atul Abhyankar" />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Portrait src="/original-assets/Picture3.webp" name={doctor.name} />
          <div>
            <p className="font-serif text-lg leading-relaxed text-ink">{doctor.credentialLine}</p>
            <ul className="mt-8 grid border-t border-line">
              {aboutResources.map(r => (
                <li key={r.label} className="border-b border-line">
                  <Link
                    to={r.to}
                    className="flex items-center justify-between gap-4 p-4 text-[15px] capitalize hover:text-indigo"
                  >
                    <span className="min-w-0 break-words">{r.label}</span>
                    <ArrowRight size={15} className="shrink-0 text-indigo" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
