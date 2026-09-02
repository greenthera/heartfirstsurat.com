import { asset } from '@/lib/asset'

export default function Portrait({ src, name, fill = false }: { src: string; name: string; fill?: boolean }) {
  return (
    <figure className={`relative overflow-hidden border border-line ${fill ? 'h-full' : ''}`}>
      <img src={asset(src)} alt={name} className={`w-full object-cover ${fill ? 'h-full' : ''}`} />
      <figcaption className="label absolute bottom-0 left-0 bg-paper px-3 py-2 text-ink">
        {name}
      </figcaption>
    </figure>
  )
}
