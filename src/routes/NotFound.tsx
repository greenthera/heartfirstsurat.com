import { Link } from 'react-router'
import { Seo } from '@/seo/Seo'
import { navigation } from '@/content/navigation'

export default function NotFound() {
  return (
    <section className="px-[clamp(1.5rem,5vw,3.5rem)] py-24">
      <Seo
        title="Page not found | HeartFirst Surat"
        description="The page you are looking for could not be found."
        canonical="/404"
      />
      <p className="label text-indigo">Error 404</p>
      <h1 className="mt-3 font-display text-4xl">This page could not be found.</h1>
      <ul className="mt-8 space-y-1">
        {navigation.map(n => (
          <li key={n.path}>
            <Link to={n.path} className="text-indigo hover:underline">
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
