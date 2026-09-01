import type { LinkItem } from './types'

// Labels verbatim from the homepage; targets map to the closest inner page.
export const homeQuickLinks: LinkItem[] = [
  { label: 'Know about your Doctor', to: '/about.html' },
  { label: 'Clinic Informations & Facilities', to: '/facilities.html' },
  { label: 'Hospital attachments and Procedures Performed', to: '/services.html' },
  { label: 'Academic Activities, Research and Education', to: '/research.html' },
  { label: 'Information and Videos for Patients and Public', to: '/about.html' },
  { label: 'For Appointment and Emergency Situations', to: '/reach-us.html' },
  { label: 'Recent Interesting Cases & CMEs for Medical Professionals', to: '/research.html' },
]

// Figures taken verbatim from the Career Highlights bullet list on the source.
export const homeStats: { value: string; label: string }[] = [
  { value: '31', label: "Years’ experience in interventional cardiology" },
  { value: '17,000+', label: 'Interventions' },
  { value: '105+', label: 'Publications and abstracts' },
  { value: '25+', label: 'International clinical trials' },
]
