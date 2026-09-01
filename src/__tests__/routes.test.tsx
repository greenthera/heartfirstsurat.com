import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'
import { SeoProvider } from '@/seo/Seo'
import { routeList, LegacyRedirects } from '@/routes'

function App({ path }: { path: string }) {
  return (
    <SeoProvider sink={{ tags: [] }}>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          {routeList.map(r => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          {LegacyRedirects}
        </Routes>
      </MemoryRouter>
    </SeoProvider>
  )
}

describe('routes', () => {
  it('has all eight clean canonical paths (no .html)', () => {
    expect(routeList.map(r => r.path).sort()).toEqual(
      [
        '/',
        '/about',
        '/career-highlights',
        '/facilities',
        '/reach-us',
        '/research',
        '/scientific-publications',
        '/services',
      ].sort(),
    )
    for (const r of routeList) expect(r.path).not.toMatch(/\.html$/)
  })
  it('renders the home heading at /', () => {
    render(<App path="/" />)
    expect(screen.getAllByRole('heading', { name: /Atul D\. Abhyankar/i }).length).toBeGreaterThan(0)
  })
  it('redirects /index.html to home', () => {
    render(<App path="/index.html" />)
    expect(screen.getByText(/Most Senior & Experienced/i)).toBeTruthy()
  })
  it('redirects /about.html to the clean /about page', () => {
    render(<App path="/about.html" />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Know About/i)
  })
})
