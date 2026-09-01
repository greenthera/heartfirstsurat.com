import { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/content/navigation'

export default function Rail() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="label fixed left-4 top-4 z-50 flex items-center gap-2 bg-indigo px-3 py-2 text-paper lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={16} /> Menu
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(320px,86vw)] flex-col border-r border-line bg-paper px-6 py-8 transition-transform lg:w-[220px] lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="font-display text-lg leading-none"
            onClick={() => setOpen(false)}
          >
            HeartFirst<span className="text-indigo"> Surat</span>
          </NavLink>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav aria-label="Pages" className="mt-8 flex flex-col">
          {navigation.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-baseline gap-3 border-t border-line py-3 text-[13px] ${
                  isActive ? 'font-semibold text-ink' : 'text-mute'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`text-[10px] ${isActive ? 'text-indigo' : 'text-mute/60'}`}>
                    {item.n}
                  </span>
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <p className="mt-auto pt-6 font-display text-[13px] italic text-indigo">
          Precision. Compassion.
          <br />
          Every heart.
        </p>
      </aside>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-ink/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
