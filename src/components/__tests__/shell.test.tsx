import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Rail from '@/components/Rail'
import ContactBar from '@/components/ContactBar'

const wrap = (ui: React.ReactNode) => render(<MemoryRouter>{ui}</MemoryRouter>)

describe('shell', () => {
  it('rail lists all 8 numbered pages', () => {
    wrap(<Rail />)
    const nav = screen.getByRole('navigation', { name: /pages/i })
    expect(within(nav).getAllByRole('link')).toHaveLength(8)
    expect(within(nav).getByText('04')).toBeInTheDocument()
  })
  it('contact bar shows both phones and the email', () => {
    wrap(<ContactBar />)
    expect(screen.getByRole('link', { name: /98241-45738/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /atulda@hotmail\.com/ })).toBeInTheDocument()
  })
})
