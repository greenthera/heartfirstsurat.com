import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'
import { doctor } from '@/content/doctor'
import { homeQuickLinks, homeStats } from '@/content/home'
import { navigation } from '@/content/navigation'
import StatBand from '@/components/StatBand'
import Section from '@/components/Section'
import CardiacIllustration from '@/components/CardiacIllustration'

export default function Home() {
  return (
    <>
      <Seo {...metaFor('/')} />
      <header className="grid gap-8 border-b border-line px-[clamp(1.5rem,5vw,3.5rem)] pb-12 pt-[clamp(1.75rem,7vw,5rem)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="load-reveal label flex items-center gap-2 text-indigo">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow" />
            Interventional Cardiologist
          </p>
          <h1 className="load-reveal load-reveal-delay mt-4 font-display text-[clamp(2.25rem,7vw,4.5rem)] font-light leading-[0.98] tracking-tight">
            {doctor.name}
          </h1>
          <p className="mt-4 font-serif text-lg text-mute">{doctor.credentialLine}</p>
          <p className="mt-7 max-w-xl border-l-2 border-indigo bg-gradient-to-r from-indigo/[0.07] to-transparent py-3 pl-5 pr-4 font-serif text-xl leading-snug text-ink">
            <span className="italic">{doctor.mainHeading}</span>
          </p>
          <Link
            to="/about"
            className="label mt-8 inline-flex items-center gap-3 border border-ink px-6 py-4 hover:bg-ink hover:text-paper"
          >
            About the doctor <ArrowRight size={15} />
          </Link>
        </div>
        <CardiacIllustration className="w-full max-w-[500px] justify-self-center lg:justify-self-end" />
      </header>

      <StatBand items={homeStats} />

      <Section eyebrow="Start here" title="Quick access">
        <ul className="grid border-l border-t border-line sm:grid-cols-2">
          {homeQuickLinks.map(l => (
            <li key={l.label} className="border-b border-r border-line">
              <Link
                to={l.to}
                className="flex h-full items-center justify-between gap-4 p-5 text-[15px] hover:text-indigo"
              >
                <span className="min-w-0 break-words">{l.label}</span>
                <ArrowRight size={15} className="shrink-0 text-indigo" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Explore" title="A complete picture of your cardiac care.">
        <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {navigation.slice(1).map(n => (
            <Link
              key={n.path}
              to={n.path}
              className="flex min-h-[120px] flex-col justify-between border-b border-r border-line p-5 hover:text-indigo"
            >
              <span className="label text-mute/70">{n.n}</span>
              <span className="text-[15px]">{n.label}</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
