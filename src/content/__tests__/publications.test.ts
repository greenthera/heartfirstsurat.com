import { describe, expect, it } from 'vitest'
import { publications } from '@/content/publications'

describe('publications', () => {
  it('has ~102 sequential entries', () => {
    expect(publications.length).toBeGreaterThanOrEqual(95)
    publications.forEach((p, i) => expect(p.n).toBe(i + 1))
  })
  it('entries are non-empty and de-tagged', () => {
    for (const p of publications) {
      expect(p.text.length).toBeGreaterThan(20)
      expect(p.text).not.toMatch(/<\/?[a-z][^>]*>/i)
    }
  })
  it('keeps the TUXEDO NEJM 2015 paper', () => {
    expect(
      publications.some(p => p.text.includes('N Engl J Med. 2015') && p.text.includes('TUXEDO')),
    ).toBe(true)
  })
})
