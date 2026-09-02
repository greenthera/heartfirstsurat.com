import { describe, expect, it } from 'vitest'
import { homeQuickLinks } from '@/content/home'
import { aboutResources } from '@/content/about'
import { facilities } from '@/content/facilities'
import { services } from '@/content/services'
import { dissertations, teachingGroups } from '@/content/research'

describe('page data', () => {
  it('home has the 7 quick-access links verbatim', () => {
    expect(homeQuickLinks.map(l => l.label)).toEqual([
      'Know about your Doctor',
      'Clinic Informations & Facilities',
      'Hospital attachments and Procedures Performed',
      'Academic Activities, Research and Education',
      'Information and Videos for Patients and Public',
      'For Appointment and Emergency Situations',
      'Recent Interesting Cases & CMEs for Medical Professionals',
    ])
  })
  it('about has the 8 "Know About" resources', () => {
    expect(aboutResources).toHaveLength(8)
  })
  it('facilities has address, timing and 7 facility items', () => {
    expect(facilities.address).toContain('201 Milestone Leone')
    expect(facilities.timing).toContain('10:00 AM')
    expect(facilities.facilityList).toHaveLength(7)
    expect(facilities.apptContacts).toEqual([
      '+91 90992 31122',
      '+91 261 2472211',
      '+91 98241 45738',
    ])
  })
  it('services has 5 attachments and 8 procedure slides', () => {
    expect(services.attachments).toHaveLength(5)
    expect(services.procedureSlides).toHaveLength(8)
    expect(services.procedureSlides[0]).toBe('/original-assets/slide1.webp')
  })
  it('research has the 3 student dissertations with photos', () => {
    expect(dissertations).toHaveLength(3)
    expect(dissertations.map(d => d.name)).toEqual([
      'Dr. Mihir Rathod',
      'Dr. Gaurang Patel',
      'Dr. Sunny Patel',
    ])
    for (const d of dissertations) {
      expect(d.photo).toMatch(/\.webp$/)
      expect(d.topic.length).toBeGreaterThan(30)
    }
  })
  it('research has the teaching programme groups', () => {
    expect(teachingGroups.map(g => g.title)).toEqual([
      'Cath Lab Workshops',
      'Post-graduate Teaching Programme',
      'CME Videos',
    ])
    expect(teachingGroups[0].items).toContain('CTO Workshops')
  })
})
