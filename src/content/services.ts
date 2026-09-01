// Verbatim from services.html "Hospital Attachment" (typo normalised:
// inteventional -> interventional).
export const services = {
  attachments: [
    'Director Interventional Cardiology, Mahavir Heart Institute, Ring Road, Athwagate, Surat',
    'Senior Visiting Consultant, Tristar Hospital, Opp T & TV School, Nanpura',
    'Senior Visiting Consultant, Sunshine Global Hospital, Dumas Road',
    'Senior Visiting Consultant, Shalby Hospital',
    'Senior Visiting Consultant, United Green Hospital',
  ],
  procedureSlides: Array.from({ length: 8 }, (_, i) => `/original-assets/slide${i + 1}.webp`),
}
