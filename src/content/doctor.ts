import type { Doctor } from './types'

export const doctor: Doctor = {
  name: 'Dr. Atul D. Abhyankar',
  credentialLine: 'MD, DM, FACC, FSCAI, FAPSIC, FCSI, FISE Interventional Cardiologist',
  mainHeading: "South Gujarat's Most Senior & Experienced Interventional Cardiologist",
  phones: ['98241-45738', '90992-31122'],
  email: 'atulda@hotmail.com',
  addresses: [
    {
      label: 'Clinic',
      lines: ['201 Milestone Leone, Athwagate Circle', 'Surat 395001, Gujarat, India'],
    },
    {
      label: 'Hospital',
      lines: [
        'Cardiac Cath Lab, Mahavir Heart Institute',
        'Athwagate, Ring Road, Surat 395001, India',
      ],
    },
  ],
  hours: 'Monday to Saturday · 10:00 AM–12:00 Noon & 6:00 PM–9:00 PM',
}
