type ResearchSection = { heading: string; body?: string }

// Section headings from research.html. The source page carries no descriptive
// copy under them — it is an index of the doctor's research/education activity —
// so no body text is invented.
export const research: ResearchSection[] = [
  { heading: 'Clinical Research' },
  { heading: 'Multicentre National & Global Trials' },
  { heading: 'Original Research' },
  { heading: 'Academic Activities' },
  { heading: 'Student Dissertations' },
  { heading: 'Teaching Programs & Workshops' },
]
