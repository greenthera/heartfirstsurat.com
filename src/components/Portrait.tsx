export default function Portrait({ src, name }: { src: string; name: string }) {
  return (
    <figure className="relative overflow-hidden border border-line">
      <img src={src} alt={name} className="w-full object-cover" />
      <figcaption className="label absolute bottom-0 left-0 bg-paper px-3 py-2 text-ink">
        {name}
      </figcaption>
    </figure>
  )
}
