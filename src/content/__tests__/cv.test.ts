import { describe, expect, it } from 'vitest'
import { cv, careerHighlights } from '@/content/cv'

describe('cv', () => {
  it('has the 14 career-highlight bullets', () => {
    expect(careerHighlights).toHaveLength(14)
    expect(careerHighlights[3]).toContain('17000 interventions')
  })
  it('has all six residency rows, four of them teaching posts', () => {
    expect(cv.residency).toHaveLength(6)
    expect(cv.residency.filter(r => r.teaching)).toHaveLength(4)
  })
  it('has five professional-experience roles', () => {
    expect(cv.experience).toHaveLength(5)
  })
  it('carries the key CV lists', () => {
    expect(cv.academicAchievements).toHaveLength(7)
    expect(cv.otherAwards).toHaveLength(7)
    expect(cv.extracurricular).toHaveLength(16)
    expect(cv.editorialPositions).toHaveLength(7)
    expect(cv.phase4Trials[0]).toContain('TUXEDO')
  })
  it('has no leftover placeholders', () => {
    const blob = JSON.stringify(cv)
    expect(blob).not.toMatch(/\bTODO\b|\bTBD\b/)
    expect(blob).not.toContain('/*')
  })
})
