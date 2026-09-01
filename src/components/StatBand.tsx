export default function StatBand({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="grid grid-cols-2 bg-indigo text-paper md:grid-cols-4">
      {items.map(s => (
        <div
          key={s.label}
          className="border-l border-paper/20 p-6 first:border-l-0 md:first:border-l"
        >
          <div className="font-display text-3xl font-light md:text-4xl">{s.value}</div>
          <div className="label mt-2 text-paper/80">{s.label}</div>
        </div>
      ))}
    </section>
  )
}
