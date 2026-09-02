// Content from research.html and its linked pages on the source site:
// trials.html, students-dissertations.html, teachings-workshops.html.

export type Dissertation = { name: string; photo: string; topic: string; ongoing?: boolean }

export type TeachingGroup = { title: string; items: string[] }

// students-dissertations.html — cardiology trainees guided by Dr. Abhyankar.
export const dissertations: Dissertation[] = [
  {
    name: 'Dr. Mihir Rathod',
    photo: '/original-assets/Pic1.webp',
    topic:
      'A study of left ventricular remodeling by 2D echocardiography in anterior wall ST elevation myocardial infarction following primary percutaneous transluminal coronary angioplasty.',
  },
  {
    name: 'Dr. Gaurang Patel',
    photo: '/original-assets/Pic2.webp',
    topic:
      'Impact of baseline WBC counts and haemoglobin on in-hospital and medium-term outcome in acute myocardial infarction patients treated with primary PCI.',
  },
  {
    name: 'Dr. Sunny Patel',
    photo: '/original-assets/Pic3.webp',
    topic:
      'Prognostic significance of heart rate, blood pressure and blood sugar level in patients undergoing primary angioplasty in myocardial infarction.',
    ongoing: true,
  },
]

// teachings-workshops.html
export const teachingGroups: TeachingGroup[] = [
  {
    title: 'Cath Lab Workshops',
    items: [
      'Preceptorship in Advanced Cardiac Technology (PACT)',
      'Skill Advancement for Cathlab Technicians (SECT)',
      'CTO Workshops',
      'Live Case Demonstrations',
    ],
  },
  {
    title: 'Post-graduate Teaching Programme',
    items: ['Interactive ECG Sessions', 'Focused Reviews', 'Journal Club', 'Case Presentation'],
  },
  {
    title: 'CME Videos',
    items: ['CME videos for physicians and family practitioners'],
  },
]
