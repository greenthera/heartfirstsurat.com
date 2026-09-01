export type NavItem = { n: string; label: string; path: string }

export type Address = { label: string; lines: string[] }

export type Doctor = {
  name: string
  credentialLine: string
  mainHeading: string
  phones: string[]
  email: string
  addresses: Address[]
  hours: string
}

export type LinkItem = { label: string; to: string; external?: boolean }

export type Publication = { n: number; text: string }

export type Trial = { molecule: string; condition: string; sponsor: string; cro: string }

export type CvRow = { label: string; values: string[] }
export type CvExperience = {
  heading: string
  period?: string
  blocks: { label?: string; text: string }[]
}
export type ResidencyRow = {
  role: string
  institution: string
  dates: string
  teaching: boolean
}
export type Cv = {
  details: CvRow[]
  academicAchievements: string[]
  bestPaperAwards: string[]
  otherAwards: string[]
  scholarships: string[]
  educationalDetail: string[]
  residency: ResidencyRow[]
  experience: CvExperience[]
  positionsHeld: string[]
  fellowships: string[]
  memberships: string[]
  extracurricular: string[]
  interventionalExperience: string[]
  researchProjects: string[]
  firstInManTrials: string[]
  phase4Trials: string[]
  editorialPositions: string[]
}
