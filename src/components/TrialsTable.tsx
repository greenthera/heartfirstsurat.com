import { trials } from '@/content/trials'

export default function TrialsTable() {
  return (
    <div className="max-w-full overflow-x-auto">
      <table
        aria-label="Multicentre national and global trials"
        className="w-full min-w-[640px] border-collapse text-left text-sm"
      >
        <thead>
          <tr className="label border-b border-line text-mute">
            <th className="py-3 pr-4 font-semibold">Molecule / Device</th>
            <th className="py-3 pr-4 font-semibold">Clinical condition</th>
            <th className="py-3 pr-4 font-semibold">Sponsor</th>
            <th className="py-3 font-semibold">Research organization</th>
          </tr>
        </thead>
        <tbody>
          {trials.map((t, i) => (
            <tr key={i} className="border-b border-line/60 align-top">
              <td className="py-3 pr-4 font-medium">{t.molecule}</td>
              <td className="py-3 pr-4 text-mute">{t.condition || '—'}</td>
              <td className="py-3 pr-4 text-mute">{t.sponsor || '—'}</td>
              <td className="py-3 text-mute">{t.cro || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
