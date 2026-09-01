export default function Gallery({
  images,
  altPrefix,
}: {
  images: string[]
  altPrefix: string
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, i) => (
        <figure key={src} className="border border-line bg-paper">
          <img
            src={src}
            alt={`${altPrefix} ${i + 1}`}
            loading="lazy"
            className="aspect-[4/3] w-full object-contain"
          />
        </figure>
      ))}
    </div>
  )
}
