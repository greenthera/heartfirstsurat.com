export default function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex gap-3 border-t border-line pt-3 font-serif text-[15px] leading-relaxed"
        >
          <span className="w-7 shrink-0 font-display text-indigo">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="min-w-0 flex-1 break-words">{it}</span>
        </li>
      ))}
    </ol>
  )
}
