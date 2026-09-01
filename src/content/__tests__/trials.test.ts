import { describe, expect, it } from 'vitest'
import { trials } from '@/content/trials'

describe('trials', () => {
  it('has 15+ rows with a molecule', () => {
    expect(trials.length).toBeGreaterThanOrEqual(15)
    for (const t of trials) expect(t.molecule.length).toBeGreaterThan(1)
  })
  it('includes Rivaroxaban for Non Valvular AF', () => {
    expect(
      trials.some(t => /Rivaroxaban/i.test(t.molecule) && /Non Valvular AF/i.test(t.condition)),
    ).toBe(true)
  })
})
