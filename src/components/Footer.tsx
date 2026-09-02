import { Link } from 'react-router'
import ExternalLink from '@/components/ExternalLink'
import { navigation } from '@/content/navigation'
import { doctor } from '@/content/doctor'
import { mapUrl, CLINIC_MAP_QUERY } from '@/lib/maps'
import BrandMark from '@/components/BrandMark'

export default function Footer() {
  return (
    <footer className="border-t border-line px-[clamp(1.5rem,5vw,3.5rem)] py-12 text-sm text-mute">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <BrandMark />
          <p className="mt-2">{doctor.name} — Interventional Cardiologist</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-1">
          {navigation.slice(1).map(n => (
            <Link key={n.path} to={n.path} className="hover:text-indigo">
              {n.label}
            </Link>
          ))}
        </nav>
        <div>
          <ExternalLink
            href={mapUrl(CLINIC_MAP_QUERY)}
            className="block hover:text-indigo"
          >
            {doctor.addresses[0].lines.map(l => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </ExternalLink>
          <a href={`mailto:${doctor.email}`} className="mt-2 block hover:text-indigo">
            {doctor.email}
          </a>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-1 border-t border-line pt-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} HeartFirst Surat. All rights reserved.</p>
        <p>
          Developed by{' '}
          <ExternalLink
            href="https://shivantra.com"
            className="font-semibold text-indigo hover:underline"
          >
            Shivantra
          </ExternalLink>
        </p>
      </div>
    </footer>
  )
}
