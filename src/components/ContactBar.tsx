import { Link } from 'react-router'
import { doctor } from '@/content/doctor'

export default function ContactBar() {
  return (
    <section className="bg-indigo text-paper">
      <div className="flex flex-col gap-3 px-[clamp(1.5rem,5vw,3.5rem)] py-6 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
        <span>{doctor.hours}</span>
        {doctor.phones.map(p => (
          <a key={p} href={`tel:+91${p.replace(/\D/g, '')}`} className="hover:text-yellow">
            +91 {p}
          </a>
        ))}
        <a href={`mailto:${doctor.email}`} className="hover:text-yellow">
          {doctor.email}
        </a>
        <Link
          to="/reach-us"
          className="text-yellow underline underline-offset-4 sm:ml-auto"
        >
          Reach us →
        </Link>
      </div>
    </section>
  )
}
