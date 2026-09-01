import { describe, expect, it } from 'vitest'
import { renderToString } from 'react-dom/server'
import { Seo, SeoProvider, type SeoSink } from '@/seo/Seo'
import { metaFor } from '@/seo/siteMeta'

describe('Seo', () => {
  it('collects title + description into the sink during SSR', () => {
    const sink: SeoSink = { tags: [] }
    renderToString(
      <SeoProvider sink={sink}>
        <Seo {...metaFor('/scientific-publications')} />
      </SeoProvider>,
    )
    const html = sink.tags.join('')
    expect(html).toContain('<title>')
    expect(html).toContain('Scientific Publications')
    expect(html).toContain('name="description"')
  })

  it('home route carries physician JSON-LD', () => {
    const sink: SeoSink = { tags: [] }
    renderToString(
      <SeoProvider sink={sink}>
        <Seo {...metaFor('/')} />
      </SeoProvider>,
    )
    expect(sink.tags.join('')).toContain('application/ld+json')
  })

  it('every canonical route has a title and description', () => {
    for (const path of [
      '/',
      '/about',
      '/career-highlights',
      '/scientific-publications',
      '/facilities',
      '/services',
      '/research',
      '/reach-us',
    ]) {
      const m = metaFor(path)
      expect(m.title.length).toBeGreaterThan(10)
      expect(m.description.length).toBeGreaterThan(30)
      expect(m.canonical).not.toMatch(/\.html$/)
    }
  })
})
