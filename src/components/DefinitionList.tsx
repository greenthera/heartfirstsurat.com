import type { CvRow } from '@/content/types'

export default function DefinitionList({ rows }: { rows: CvRow[] }) {
  return (
    <dl className="grid gap-x-8 sm:grid-cols-2">
      {rows.map(r => (
        <div key={r.label} className="min-w-0 border-t border-line py-3">
          <dt className="label text-indigo">{r.label}</dt>
          {r.values.map(v => (
            <dd key={v} className="mt-1 break-words font-serif text-[15px] leading-relaxed text-ink">
              {v}
            </dd>
          ))}
        </div>
      ))}
    </dl>
  )
}
