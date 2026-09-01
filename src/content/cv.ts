import type { Cv } from './types'

// Transcribed verbatim from the source Career Highlights page.
// Only obvious source typos were corrected (Carriculum -> Curriculum,
// "rdiac Cath Lab" -> "Cardiac Cath Lab", cadiogenic -> cardiogenic, "2years" -> "2 years").

export const careerHighlights: string[] = [
  'Doctor of Medicine (Cardiology) – University of Mumbai',
  'Fellow – Society for Cardiac Angiography and Interventions',
  'Fellow – American College of Cardiology',
  "31 Years’ Experience in Interventional Cardiology with more than 17000 interventions",
  'Invited as Faculty to more than 50 international & national conferences/workshops',
  'Course Director – 6 Clinical conferences',
  'More than 105 Publications and abstracts, Two best paper awards',
  'Editorial Consultant – Cath Cardiovascular Interventions, Indian Heart Journal, Int J of Cardiology, Heart & Mind, Expert Review in Cardiology, Minerva Cardiologica, Journal of Indian College of Cardiology',
  'PI – 2 First in Man and 10 Phase-4 Trials related to stents',
  'PI – More than 25 international clinical trials',
  'Superspecialty (Cardiology) Teacher for Diplomate of National Board',
  'Live case operator for India Live 2019',
  'Course Director – PACT (Preceptorship in Advanced Coronary Technology) – 3 Courses till now',
  'Course Director – SECT (Skill Enhancements for Cathlab Technicians) – 3 Courses till now',
]

export const cv: Cv = {
  details: [
    { label: 'Name', values: ['Dr. Atul Damodar Abhyankar'] },
    {
      label: 'Permanent address',
      values: ['205/C Abhishek Park, Athwalines Road, Parle point, Surat, Gujarat 395007, India'],
    },
    {
      label: 'Hospital Address',
      values: ['Cardiac Cath Lab, Mahavir Heart Institute, Athwagate, Ring Road, Surat 395001, India'],
    },
    { label: 'Contact Tel. No.', values: ['+91-261-2472211', '+91-98241-45738 (Mobile)'] },
    { label: 'Facsimile', values: ['+91-261-2254669'] },
    { label: 'E-mail', values: ['atulda@hotmail.com'] },
    {
      label: 'Qualifications',
      values: [
        'M.B. B.S [University of Bombay]',
        'M.D. [Medicine] [University of Bombay]',
        'D.M. [Cardiology] [University of Bombay]',
        'FSCAI (Fellow Society for Cardiac Angiography and Interventions, USA)',
        'FACC (American College of Cardiology, USA)',
        'FAPSIC (Fellow Asia Pacific Society for Interventional Cardiology)',
        'FCSI (Fellow Cardiological Society of India)',
        'FISE (Fellow Indian Society for Electrocardiology)',
      ],
    },
    {
      label: 'Present Designation',
      values: ['Clinical Director – Interventional Cardiology Mahavir Heart Institute, Surat, India'],
    },
    { label: 'Date of Birth', values: ['25th September 1961'] },
    { label: 'Nationality', values: ['Indian'] },
  ],

  academicAchievements: [
    'Fenneleno Bossuet Godinho Gold Medal in Physiology.',
    'Dr. T. H. Rindani Scholarship Prize in Physiology',
    'Second Prize - Competitive Examination in Pharmacology',
    'First Rank in College at MD [Medicine] examination.',
    'First Rank in University at D.M. [Cardiology] examination.',
    'First Prize in Intercollegiate Symposium Competition in Geriatrics held during First National Conference on Geriatrics.',
    'Second Prize in Dr. Bagadia trophy intermedical Psychiatry Seminar Competition.',
  ],

  bestPaperAwards: [
    'Dr. R.S.Rajgopalan Award for Best Paper in Electrocardiology - 1991 “Prognostic Value of Programmed Electrical Stimulation after acute Myocardial Infarction”',
    'Dr. R.S.Rajgopalan Award for best Paper in Electrocardiology - 1992 “Comparative Study of Late Potentials and Programmed Stimulation in Post Infarction Patients”',
  ],

  otherAwards: [
    'Best All Round Student of the College [1983]',
    'Appreciation Award for the Valuable Contribution to the Progress of the Institution: April 1991.',
    'Giants’ International Award for excellence in Medicine (2002)',
    'Jewel in the Crown of Surat (Divyabhaskar)',
    'Pathdarshak Pratibha (Government of Gujarat)',
    'Times Education Icon',
    'MyFM Award for Excellence in Cardiology',
  ],

  scholarships: [
    'University Scholarships for Undergraduate, Postgraduate and Superspeciality',
    'Hargobind Medical Foundation Fellowship for Advanced Training in Interventional Cardiology.',
    'K.C.Mahindra Education Trust Scholarship for Training in Interventional Cardiology.',
    'Diwaliben Mehta Charitable Trust Scholarship for Training in Interventional Cardiology.',
  ],

  educationalDetail: [
    'Secondary School Certificate: April 1976, Maharashtra State Board of Secondary Education, Awarded Distinction and National Merit Scholarship.',
    'Higher Secondary Certificate: April 1978, Maharashtra State Board of Secondary and Higher Secondary Education, Awarded Distinction and State Merit Scholarship.',
    'M.B.B.S: October 1982, University of Bombay. Subjects taken: Anatomy, Physiology, Biochemistry, Pharmacology, Pathology, Microbiology, Forensic Medicine, Preventive and Social Medicine, Internal Medicine, Surgery, Gynecology and Obstetrics, Pediatrics, Ophthalmology, Otolaryngology, Orthopedics, Dermatology, Psychiatry, Radiology. Awards: First Class, Gold Medal in Physiology, Distinction in Pathology.',
    'Internship - December 1982 to December 1983',
    'M.D. [Medicine and Therapeutics]: November 1986, University of Bombay. Internal Medicine, Cardiology, Neurology, Respiratory Medicine, Nephrology, Hematology, Gastroenterology, Infective diseases, Multisystem Diseases, Immunology, Genetics, Toxicology, Nutrition etc. Dissertation: Glycosylated Haemoglobin in Diabetes and chronic Renal Failure.',
    'D.M. (Doctor of Medicine) [Cardiology]: October 1989, University of Bombay. General Cardiology, Congenital Heart Diseases, Valvular Heart Diseases, Ischaemic Heart Disease, Non-invasive diagnostic techniques - [Exercise testing, Echocardiography, Ambulatory EKG Monitoring], Invasive Diagnostic and therapeutic techniques - [Cardiac Catheterisation, Electrophysiology, Interventional Procedures], Aortic and Vascular Diseases. Passed D.M. in first attempt with first rank in the University.',
    'Fellow in Interventional Cardiology: March 1993 - December 1996, Royal Prince Alfred Hospital, University of Sydney.',
  ],

  residency: [
    { role: 'House Officer in Medicine', institution: 'L.T.M.G. Hospital Sion, Bombay', dates: '01/03/84 to 31/07/84', teaching: false },
    { role: 'House Officer in Cardiology', institution: 'L.T.M.G. Hospital', dates: '01/08/84 to 31/12/84', teaching: false },
    { role: 'Registrar in Cardiology', institution: 'L.T.M.G. Hospital', dates: '01/01/85 to 31/01/85', teaching: true },
    { role: 'Registrar in Tetanus and Respiratory Medicine', institution: 'L.T.M.G. Hospital', dates: '01/02/85 to 14/02/86', teaching: true },
    { role: 'Registrar in Medicine', institution: 'L.T.M.G. Hospital', dates: '15/02/86 to 28/02/87', teaching: true },
    { role: 'Registrar in Cardiology', institution: 'L.T.M.G. Hospital', dates: '01/03/87 to 11/04/89', teaching: true },
  ],

  experience: [
    {
      heading: 'Lecturer in Cardiology',
      period: '12/04/89 to 27/03/93',
      blocks: [
        { text: 'Department of Cardiology, L.T.M.G. Hospital, Sion, Mumbai, India.' },
        { label: 'Clinical responsibilities', text: 'Management of Acute Myocardial infarction and other ischaemic heart disease patients, Management of Congenital and Valvular Heart diseases, Consultations, Performance of non-invasive & invasive diagnostic and therapeutic procedures.' },
        { label: 'Academic responsibilities', text: 'Undergraduate, postgraduate & superspeciality teaching, Conduct various research projects, Organise educational updates.' },
        { label: 'Administrative responsibilities', text: 'Supervise Registrars and House-Officers in their clinical and academic work, Form guidelines and evaluate purchase of new equipment, Provide guidelines for technical and nursing staff.' },
      ],
    },
    {
      heading: 'Fellow in Interventional Cardiology',
      period: '29/03/93 to 20/12/97',
      blocks: [
        { text: 'Department of Cardiology, Royal Prince Alfred Hospital [University of Sydney], Camperdown, Sydney, Australia.' },
        { text: 'Diagnostic Cardiac Catheterisations, Coronary Angioplasties, Stent Implantations, Rotational and Directional Atherectomy, Radial Artery Interventions, Intravascular Ultrasound, Intracoronary Doppler, Participation in Clinical Research Projects.' },
      ],
    },
    {
      heading: 'Senior Specialist in Interventional Cardiology',
      period: 'May 1997 – January 2001',
      blocks: [
        { text: 'Royal Hospital, Muscat, Oman.' },
        { text: 'Responsible for setting up of a new interventional program. Within 3 years completed more than 800 coronary interventions single handedly. Interventions include angioplasty & stenting, rotational atherectomy, radial artery access stenting etc. Cases include small vessels, bifurcations, long lesions, total occlusions, ostial lesions, unprotected left main, cardiogenic shock, vein graft & LIMA lesions, diffuse disease. Achieved one of the lowest rate of complications and highest success rates in the world. Conducted two live demonstration courses, two courses on Intraaortic balloon pump, symposia on “Acute Coronary Syndromes”, “Hot topics in Cardiology”, “Cardiology in the new millennium”.' },
        { text: 'Published 10 abstracts in 2 years at international level inclusive of an abstract presented at the TCT meeting in Washington DC. Published one full article and 2 more are under consideration.' },
        { text: 'Responsibility of computerization & database development.' },
      ],
    },
    {
      heading: 'Clinical Director – Interventional Cardiology, Mahavir Heart Institute, Surat, India',
      blocks: [],
    },
    {
      heading: 'Cardiology teacher for Diplomate of National Board (DNB)',
      period: 'From 2017',
      blocks: [{ text: 'Mahavir Heart Institute, Surat.' }],
    },
  ],

  positionsHeld: [
    'Honorary Editor: Indian Journal of Electrocardiology [Past]',
    'Honorary Treasurer: Indian Society of Electrocardiology [Past]',
    'Vice President: Indian Society of Electrocardiology [Past]',
  ],

  fellowships: [
    'Indian Society of Electrocardiology',
    'The Society of Cardiac Angiography & Interventions (USA)',
    'American College of Cardiology',
    'Cardiological Society of India',
    'Asia Pacific Society for Interventional Cardiology',
    'Indian Society of Electrocardiology',
  ],

  memberships: ['EAPACI'],

  extracurricular: [
    'Participation in Marathi Theater as an actor and director with prizes for acting.',
    'Cricket: Represented college, participated in Grade V competitive cricket in Sydney.',
    'Participation in other Sports: Table-tennis, Hockey [Competitive], Badminton [Recreational]',
    'Participation [with prizes] in Elocution, Debates etc.',
    'Worked as a Child Artist on Radio Bombay.',
    'Directed a Video Film on Heart Attack.',
    'Lay press publications about Cardiology.',
    'System Analysis for software development for cardiology related databases.',
    'Member of Organizing Committee: Annual Conference of Cardiological Society of India 1990.',
    'Member of Organizing Committee: International Congress on Coronary Heart Disease 1988.',
    'Honorary Treasurer: First National Update on Bronchoscopy 1985.',
    'Honorary General Secretary: Past Associates of L.T.M. Medical College [PALS].',
    'Course Director: First Muscat Interventional Meeting',
    'Course Director: Workshop on Intraaortic Balloon Pump (Muscat)',
    'Course Director: Second Muscat Interventional Meeting & Workshop on Minimally Invasive Coronary Surgery.',
    'Course Director: “Cardiology in the new millennium.”',
  ],

  interventionalExperience: [
    'Coronary Angioplasties: > 17000',
    'Published technique of hand mounting Palmaz-Schatz stent (Catheterization & Cardiovascular Diagnosis 1994). New design for monorail wall stent (application for patent).',
    'Published stenting in severely angulated lesions - Catheterization & Cardiovascular diagnosis.',
    'Published first paper on primary angioplasty in India.',
    'Proctor for Rotational Atherectomy, Intracoronary Ultrasound, Intracoronary Doppler, Fractional Flow Reserve, Optical Coherence Tomography.',
    'Designed protocol for ICUS through coronary sinus.',
    'Mitral Valvuloplasty: >1000',
    'Published “Mitral valve dilator - a new design concept” - J. of Thoracic & Cardiovascular Surgery 1994.',
    'Pulmonary / Aortic Valvuloplasty, coarctation dilatation, Subvalvar Aortic Stenosis dilatation, Congenital Interventions: 200 approx',
    'Radial Artery procedures: >5000',
    'Carotid Artery Stenting: Renal Denervation for Hypertension',
    'Atrial Septal Defect Closure with Amplatzer Device: Training with Dr. Ziyad Hijazi (Chicago) at Muscat November 1999.',
    'Diagnostic Cardiac Catheterisations: > 30000',
    'Published New catheter designs for unusually wide ascending aortas - Catheterisation & Cardiovascular Diagnosis 1996.',
    'Published “Dancing Needle sign for obtaining access to femoral artery” - Catheterisation and Cardiovascular Diagnosis 1995.',
    'Cardiac Biopsy for Post-transplant patients & cardiomyopathies.',
  ],

  researchProjects: [
    'Dissertation for Doctorate (DM-cardiology) - Thrombolysis in unstable angina.',
    'STAT trial (Sion Thrombolysis Angioplasty Trial): Designed protocol and participated as investigator. L.T.M.G. Hospital, Sion, Mumbai. (First Primary Angioplasty Trial in India)',
    'Intracoronary ultrasound through coronary sinus: designed protocol, patient information - Royal Prince Alfred Hospital, Sydney, Australia.',
    'Designed protocols for “Fractional flow reserve using balloon catheter” & “Vascular reactivity and elastic recoil” - RPA Hospital, Sydney, Australia.',
    'Designed protocol for “LAST - LAD Angioplasty stent trial” - RPA Hospital, Sydney, Australia.',
    'Principal Investigator for various multicenter, multinational trials related to new medications (Completed – 23, Ongoing 3).',
  ],

  firstInManTrials: [
    'Pronova – Sirolimus eluting stent',
    'Focus NP – Nanoparticle based DES',
  ],

  phase4Trials: [
    'TUXEDO – Taxus Element V Xience Prime in Diabetics',
    'Promus element Registry',
    'E registry : Supralimus and Supralimus core stent',
    'SELL : Supralimus stent in Long Lesions',
    'OCT study of Supracore stent',
  ],

  editorialPositions: [
    'Catheterization & Cardiovascular Interventions',
    'Indian Heart Journal',
    'Int J of Cardiology',
    'Heart & Mind',
    'Expert Review in Cardiology',
    'Minerva Cardiologica',
    'Journal of Indian College of Cardiology',
  ],
}
