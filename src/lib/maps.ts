// Google Maps search URL for a place/address string.
export function mapUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export const CLINIC_MAP_QUERY =
  'Heart First Cardiac And Vascular Centre, 201 Milestone Leone, Athwagate Circle, Surat 395001'
