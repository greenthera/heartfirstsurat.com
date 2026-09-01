import { describe, expect, it } from 'vitest'
import { render } from '@/entry-server'

describe('entry-server render()', () => {
  it('returns full HTML + head for the publications route', async () => {
    const { html, head } = await render('/scientific-publications')
    expect(html).toContain('Evidence that moves')
    expect(head).toContain('<title>')
    expect(head).toContain('Scientific Publications')
  })
  it('renders the home route with the main heading', async () => {
    const { html } = await render('/')
    expect(html).toContain('Experienced Interventional Cardiologist')
  })
  it('renders the career route with a trials-table molecule', async () => {
    const { html } = await render('/career-highlights')
    expect(html).toContain('Rivaroxaban')
  })
})
