import type { SeoProps } from './Seo'
import { doctor } from '@/content/doctor'

const physician = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: doctor.name,
  medicalSpecialty: 'Cardiovascular',
  telephone: '+91-98241-45738',
  email: doctor.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '201 Milestone Leone, Athwagate Circle',
    addressLocality: 'Surat',
    postalCode: '395001',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '21:00',
  },
}

type MetaEntry = { title: string; description: string; jsonLd?: object }

const TABLE: Record<string, MetaEntry> = {
  '/': {
    title: `${doctor.name} — Interventional Cardiologist, Surat | HeartFirst Surat`,
    description: `${doctor.mainHeading}. Coronary angioplasty, angiography and preventive cardiology at 201 Milestone Leone, Athwagate Circle, Surat.`,
    jsonLd: physician,
  },
  '/about': {
    title: 'About Dr. Atul D. Abhyankar | HeartFirst Surat',
    description:
      'Know Dr. Atul D. Abhyankar — MD, DM, FACC, FSCAI: short CV, academic activities, honours, full curriculum vitae, publications and clinical research.',
  },
  '/career-highlights': {
    title: 'Career Highlights & Full Curriculum Vitae | Dr. Atul D. Abhyankar',
    description:
      '31 years and more than 17,000 interventions: qualifications, awards, residency, professional experience, research and the multicentre trials led by Dr. Abhyankar.',
  },
  '/scientific-publications': {
    title: 'Scientific Publications | Dr. Atul D. Abhyankar',
    description:
      'More than 100 peer-reviewed papers, abstracts and book chapters in interventional cardiology by Dr. Atul D. Abhyankar, 1986–2020.',
  },
  '/facilities': {
    title: 'Clinic Facilities | HeartFirst Surat',
    description:
      'Spacious, elegant clinic at 201 Milestone Leone, Athwagate Circle, Surat. ECG, treadmill test, 2D echo & colour Doppler, complete cardiac check-up, pathology and pharmacy.',
  },
  '/services': {
    title: 'Hospital Attachments & Procedures | Dr. Atul D. Abhyankar',
    description:
      'Director of Interventional Cardiology at Mahavir Heart Institute and senior visiting consultant at Tristar, Sunshine Global, Shalby and United Green hospitals, Surat.',
  },
  '/research': {
    title: 'Clinical Research & Education | Dr. Atul D. Abhyankar',
    description:
      'Multicentre national and global trials, original research, academic activities, student dissertations and teaching programs & workshops in interventional cardiology.',
  },
  '/reach-us': {
    title: 'Reach Us — Appointments & Emergency | HeartFirst Surat',
    description:
      'Outpatient appointment numbers for the clinic and Mahavir Heart Institute, plus what to do in a cardiac emergency in Surat.',
  },
}

export function metaFor(path: string): SeoProps {
  const e = TABLE[path] ?? TABLE['/']
  return { title: e.title, description: e.description, canonical: path, jsonLd: e.jsonLd }
}
