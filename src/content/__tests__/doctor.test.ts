import { describe, expect, it } from 'vitest'
import { doctor } from '@/content/doctor'
import { navigation } from '@/content/navigation'

describe('doctor data', () => {
  it('has the verbatim credential line', () => {
    expect(doctor.credentialLine).toBe(
      'MD, DM, FACC, FSCAI, FAPSIC, FCSI, FISE Interventional Cardiologist',
    )
  })
  it('has both clinic phone numbers and the email', () => {
    expect(doctor.phones).toEqual(['98241-45738', '90992-31122'])
    expect(doctor.email).toBe('atulda@hotmail.com')
  })
})

describe('navigation', () => {
  it('lists the eight pages with 01..08 numbers', () => {
    expect(navigation.map(n => n.n)).toEqual(['01', '02', '03', '04', '05', '06', '07', '08'])
    expect(navigation[0].path).toBe('/')
    expect(navigation[2].path).toBe('/career-highlights')
    for (const n of navigation) expect(n.path).not.toMatch(/\.html$/)
  })
})
