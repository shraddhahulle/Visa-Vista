
export interface VisaType {
  id: string;
  name: string;
  description: string;
  eligibilityPoints: string[];
  processingTime: string;
  cost: number;
  duration: string;
  workAllowed: string;
  requirements: string[];
  documents: string[];
  limitations: string[];
  icon: string;
}

export const visaTypes: VisaType[] = [
  {
    id: "student-visa",
    name: "Student Visa (Tier 4)",
    description: "For international students who have been offered a place on a course in the UK.",
    eligibilityPoints: [
      "Offer from a UK licensed sponsor institution",
      "Sufficient English language skills",
      "Proof of financial support",
      "Consent from parents/guardians (if under 18)"
    ],
    processingTime: "3 weeks",
    cost: 348,
    duration: "Length of course + 4 months",
    workAllowed: "20 hours per week during term-time, full-time during holidays",
    requirements: [
      "Valid passport",
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of financial funds",
      "Tuberculosis (TB) test results (if applicable)",
      "Academic Technology Approval Scheme (ATAS) certificate (if applicable)"
    ],
    documents: [
      "Valid passport",
      "Confirmation of Acceptance for Studies (CAS)",
      "Bank statements showing required funds",
      "English language test certificates",
      "Academic qualifications"
    ],
    limitations: [
      "Cannot work in certain jobs (professional sportsperson/coach)",
      "Cannot claim public funds",
      "Need to register with police in some cases",
      "Must study at the institution that issued your CAS"
    ],
    icon: "book-open"
  },
  {
    id: "skilled-worker",
    name: "Skilled Worker Visa",
    description: "For qualified professionals who have been offered a skilled job in the UK.",
    eligibilityPoints: [
      "Job offer from UK-approved sponsor",
      "Job at required skill level (RQF 3 or above)",
      "Speak English at required level",
      "Salary meets minimum threshold"
    ],
    processingTime: "3 weeks",
    cost: 610,
    duration: "Up to 5 years",
    workAllowed: "Full-time for your sponsor, limited supplementary work allowed",
    requirements: [
      "Valid Certificate of Sponsorship (CoS)",
      "Job on the eligible occupations list",
      "Meet minimum salary requirement (general: £26,200 or occupation-specific)",
      "Proof of English language ability (B1 level)"
    ],
    documents: [
      "Valid passport",
      "Certificate of Sponsorship",
      "Proof of English language ability",
      "Bank statements or sponsor's certification",
      "Criminal record certificate (if applicable)"
    ],
    limitations: [
      "Cannot change employment without new application",
      "Cannot claim public funds",
      "Limited to working for your sponsor (with some exceptions)",
      "Must notify Home Office of any changes to circumstances"
    ],
    icon: "briefcase"
  },
  {
    id: "graduate-route",
    name: "Graduate Visa",
    description: "For international students who have completed a UK degree and wish to work or look for work.",
    eligibilityPoints: [
      "Successfully completed UK degree (or other eligible qualification)",
      "Current Tier 4/Student visa holder",
      "Studied with a licensed student sponsor",
      "Sponsor has reported course completion"
    ],
    processingTime: "8 weeks",
    cost: 700,
    duration: "2 years (3 years for PhD graduates)",
    workAllowed: "No restrictions on type of work",
    requirements: [
      "Current Tier 4/Student visa",
      "Completed eligible UK qualification",
      "Studied in the UK for minimum time period",
      "Apply before current visa expires"
    ],
    documents: [
      "Valid passport",
      "Biometric Residence Permit (BRP)",
      "CAS number used for previous student visa",
      "Proof of qualification completion"
    ],
    limitations: [
      "Cannot extend this visa",
      "Cannot claim public funds",
      "Time spent does not count toward settlement",
      "Must apply from inside the UK"
    ],
    icon: "graduation-cap"
  },
  {
    id: "visitor",
    name: "Standard Visitor Visa",
    description: "For visiting the UK for tourism, business, or to visit family for a short period.",
    eligibilityPoints: [
      "Will leave the UK at the end of your visit",
      "Able to support yourself during your stay",
      "Able to pay for return/onward journey",
      "Not planning to work or study"
    ],
    processingTime: "3 weeks",
    cost: 100,
    duration: "Up to 6 months per visit",
    workAllowed: "No paid or unpaid work allowed (business meetings permitted)",
    requirements: [
      "Valid passport or travel document",
      "Proof you'll leave the UK when your visa expires",
      "Proof of accommodation and travel plans",
      "Proof of financial support during stay"
    ],
    documents: [
      "Valid passport",
      "Travel itinerary",
      "Hotel bookings",
      "Bank statements",
      "Letter of invitation (if applicable)"
    ],
    limitations: [
      "Cannot work or study",
      "Cannot marry or register civil partnership",
      "Cannot receive public funds",
      "Cannot settle in the UK"
    ],
    icon: "globe"
  },
  {
    id: "family-visa",
    name: "Family Visa",
    description: "For joining a family member who is a British citizen or settled in the UK.",
    eligibilityPoints: [
      "Relationship with a British citizen or settled person",
      "Genuine relationship that exists",
      "Meet minimum income requirement (typically £18,600)",
      "Suitable accommodation available"
    ],
    processingTime: "12 weeks",
    cost: 1523,
    duration: "2.5 years initially, can extend",
    workAllowed: "No restrictions",
    requirements: [
      "Proof of relationship (marriage certificate, birth certificate)",
      "Meet financial requirement",
      "English language requirement (A1 level)",
      "Adequate accommodation"
    ],
    documents: [
      "Valid passport",
      "Relationship documents",
      "Financial evidence (income, savings)",
      "English language certificate",
      "Accommodation details"
    ],
    limitations: [
      "Initial visa has 'no recourse to public funds' condition",
      "Need to extend after 2.5 years",
      "Must inform Home Office of changes to relationship",
      "10-year route if financial requirement not met"
    ],
    icon: "heart"
  },
  {
    id: "innovator",
    name: "Innovator Visa",
    description: "For experienced business people wanting to establish an innovative business in the UK.",
    eligibilityPoints: [
      "Business idea endorsed by approved body",
      "Business idea is innovative, viable and scalable",
      "£50,000 investment funds available",
      "Meet English language requirement"
    ],
    processingTime: "3 weeks",
    cost: 1021,
    duration: "3 years initially, can extend",
    workAllowed: "Primary work must be for your business, other work allowed",
    requirements: [
      "Endorsement letter from approved body",
      "Investment funds (if needed)",
      "English language ability (B2 level)",
      "Maintenance funds (£1,270)"
    ],
    documents: [
      "Valid passport",
      "Endorsement letter",
      "Evidence of investment funds",
      "English language certificate",
      "Bank statements showing maintenance funds"
    ],
    limitations: [
      "Cannot work as doctor or dentist in training",
      "Cannot work as a professional sportsperson",
      "Cannot claim public funds",
      "Must spend majority of time developing business"
    ],
    icon: "lightbulb"
  }
];

export const documentChecklists = {
  "student-visa": [
    "Current passport and any expired passports",
    "Confirmation of Acceptance for Studies (CAS) from your institution",
    "Proof of finances - bank statements showing required funds for 28 consecutive days",
    "English language test certificate (IELTS, TOEFL, etc.)",
    "Academic certificates/transcripts mentioned in your CAS",
    "Tuberculosis (TB) test results (if from certain countries)",
    "ATAS certificate (for certain sensitive subjects)",
    "Passport-sized photographs meeting UKVI requirements",
    "Consent letter from parents (if under 18)",
    "Birth certificate (if under 18)",
    "Accommodation details/proof"
  ],
  "skilled-worker": [
    "Current passport and any expired passports",
    "Certificate of Sponsorship (CoS) from UK employer",
    "Proof of English language proficiency (B1 level)",
    "Bank statements showing required funds (unless certified by sponsor)",
    "Criminal record certificate (for certain occupations)",
    "Proof of qualifications mentioned in CoS",
    "Passport-sized photographs meeting UKVI requirements",
    "Tuberculosis (TB) test results (if from certain countries)",
    "Translations of any documents not in English or Welsh"
  ],
  "graduate-route": [
    "Current passport",
    "Biometric Residence Permit (BRP)",
    "Evidence of completed qualification (degree certificate or official transcript)",
    "CAS number from your student visa application",
    "Passport-sized photographs meeting UKVI requirements"
  ],
  "visitor": [
    "Current passport valid for entire stay plus 6 months",
    "Previous travel history evidence (old passports or visas)",
    "Proof of accommodation in the UK",
    "Return/onward travel booking confirmation",
    "Bank statements showing sufficient funds",
    "Employment details and income proof",
    "Invitation letter (if visiting family/friends)",
    "Travel itinerary",
    "Travel insurance covering UK stay"
  ],
  "family-visa": [
    "Current passport and any expired passports",
    "Proof of relationship (marriage certificate, birth certificate, etc.)",
    "Financial evidence (sponsor's income for last 6 months)",
    "English language test certificate (A1 level)",
    "Accommodation details and proof of suitability",
    "Passport-sized photographs meeting UKVI requirements",
    "Tuberculosis (TB) test results (if from certain countries)",
    "Evidence of ongoing relationship (joint accounts, photos, etc.)",
    "Sponsor's immigration status documents"
  ],
  "innovator": [
    "Current passport and any expired passports",
    "Endorsement letter from approved body",
    "Business plan (detailed)",
    "Evidence of investment funds (£50,000)",
    "English language test certificate (B2 level)",
    "Bank statements showing maintenance funds (£1,270)",
    "Passport-sized photographs meeting UKVI requirements",
    "Tuberculosis (TB) test results (if from certain countries)",
    "CV or résumé showing business experience"
  ]
};

export const eligibilityQuestions = [
  {
    id: "purpose",
    question: "What is your main purpose for coming to the UK?",
    options: [
      { value: "study", label: "Study" },
      { value: "work", label: "Work" },
      { value: "family", label: "Join Family" },
      { value: "visit", label: "Visit/Tourism" },
      { value: "business", label: "Start a Business" }
    ]
  },
  {
    id: "duration",
    question: "How long do you plan to stay in the UK?",
    options: [
      { value: "short", label: "Short-term (up to 6 months)" },
      { value: "medium", label: "Medium-term (6 months to 3 years)" },
      { value: "long", label: "Long-term (more than 3 years)" }
    ]
  },
  {
    id: "education",
    question: "What is your highest level of education?",
    options: [
      { value: "high-school", label: "High School / Secondary" },
      { value: "bachelor", label: "Bachelor's Degree" },
      { value: "master", label: "Master's Degree" },
      { value: "phd", label: "PhD or Doctorate" }
    ]
  },
  {
    id: "english",
    question: "What is your English language proficiency?",
    options: [
      { value: "basic", label: "Basic (A1-A2)" },
      { value: "intermediate", label: "Intermediate (B1-B2)" },
      { value: "advanced", label: "Advanced (C1-C2)" },
      { value: "native", label: "Native Speaker" }
    ]
  },
  {
    id: "funds",
    question: "Do you have access to sufficient funds for your stay?",
    options: [
      { value: "yes-self", label: "Yes, my own funds" },
      { value: "yes-sponsor", label: "Yes, via a sponsor" },
      { value: "partially", label: "Partially" },
      { value: "no", label: "No" }
    ]
  },
  {
    id: "offer",
    question: "Do you have a formal offer from a UK institution or employer?",
    options: [
      { value: "yes-university", label: "Yes, from a university" },
      { value: "yes-employer", label: "Yes, from an employer" },
      { value: "in-process", label: "In the application process" },
      { value: "no", label: "No" }
    ]
  }
];

export const faqData = [
  {
    question: "How long does a UK visa application typically take to process?",
    answer: "Processing times vary by visa type and application volume. Standard visitor visas usually take 3 weeks, student visas 3 weeks, and work visas 3-8 weeks. Priority services are available for an additional fee, which can reduce wait times to 5 working days. During peak seasons (summer and holidays), processing may take longer."
  },
  {
    question: "What happens if my visa application is refused?",
    answer: "If your application is refused, you'll receive a letter explaining the reasons. Depending on the visa type, you may be able to either: 1) Request an Administrative Review if you think there was an error, 2) Appeal the decision if you have a human rights claim, or 3) Submit a fresh application addressing the refusal reasons. Always read the refusal letter carefully to understand your options."
  },
  {
    question: "Can I extend my visa while in the UK?",
    answer: "Yes, many visa types can be extended from within the UK, but you must apply before your current visa expires. You generally need to meet the same requirements as your original application. Note that some visas, like the Standard Visitor visa and Graduate Route, cannot be extended beyond their maximum duration. Apply online through the Gov.UK website at least 4 weeks before your current visa expires."
  },
  {
    question: "What is the Immigration Health Surcharge (IHS) and who needs to pay it?",
    answer: "The Immigration Health Surcharge is a fee that gives visa holders access to the UK's National Health Service (NHS). Most applicants applying for a visa longer than 6 months must pay this surcharge as part of their application. As of 2023, the fee is £624 per year for adults and £470 for students and those under 18. The full amount must be paid upfront for the entire visa duration."
  },
  {
    question: "What are the English language requirements for UK visas?",
    answer: "English language requirements vary by visa type. Student visas typically require IELTS for UKVI at B2 level (5.5-6.5) depending on the course. Skilled Worker visas require B1 level (4.0). Family visas need A1-A2 level. You can prove your English skills through an approved test (like IELTS, TOEFL, or PTE), by having a degree taught in English, or by being from a majority English-speaking country."
  },
  {
    question: "Can I work in the UK on a student visa?",
    answer: "Yes, but with restrictions. If you're studying at degree level or above at a higher education institution, you can work up to 20 hours per week during term time and full-time during official holiday periods. If you're studying below degree level, you can work up to 10 hours per week during term time. Doctorate Extension Scheme participants can work full-time. Certain jobs are prohibited, including working as a professional sportsperson or entertainer."
  },
  {
    question: "What is the difference between settled and pre-settled status?",
    answer: "These statuses apply to EU, EEA, and Swiss citizens under the EU Settlement Scheme. Pre-settled status is granted to those who have lived in the UK for less than 5 years, giving them the right to stay for 5 more years, after which they can apply for settled status. Settled status (equivalent to Indefinite Leave to Remain) is for those who have lived in the UK continuously for 5+ years, giving them permanent residence rights. Both statuses allow working, studying, and accessing healthcare and benefits."
  },
  {
    question: "What documents do I need for a UK visa application?",
    answer: "Essential documents include: valid passport, visa-specific supporting documents (e.g., CAS for students, CoS for workers), financial evidence (bank statements), proof of accommodation, travel history, and English language certification. Additional requirements may include tuberculosis test results, ATAS certificates for certain subjects, or relationship proof for family visas. Always check the official UK government website for the most up-to-date requirements for your specific visa type."
  }
];

export const eligibilityMapping = {
  "study-medium-bachelor-intermediate-yes-yes-university": ["student-visa"],
  "study-medium-master-intermediate-yes-yes-university": ["student-visa"],
  "study-medium-phd-intermediate-yes-yes-university": ["student-visa"],
  "study-medium-bachelor-advanced-yes-yes-university": ["student-visa"],
  "study-medium-master-advanced-yes-yes-university": ["student-visa"],
  "study-medium-phd-advanced-yes-yes-university": ["student-visa"],
  "study-medium-bachelor-native-yes-yes-university": ["student-visa"],
  "study-medium-master-native-yes-yes-university": ["student-visa"],
  "study-medium-phd-native-yes-yes-university": ["student-visa"],
  
  "work-medium-bachelor-intermediate-yes-yes-employer": ["skilled-worker"],
  "work-medium-master-intermediate-yes-yes-employer": ["skilled-worker"],
  "work-medium-phd-intermediate-yes-yes-employer": ["skilled-worker"],
  "work-medium-bachelor-advanced-yes-yes-employer": ["skilled-worker"],
  "work-medium-master-advanced-yes-yes-employer": ["skilled-worker"],
  "work-medium-phd-advanced-yes-yes-employer": ["skilled-worker"],
  "work-medium-bachelor-native-yes-yes-employer": ["skilled-worker"],
  "work-medium-master-native-yes-yes-employer": ["skilled-worker"],
  "work-medium-phd-native-yes-yes-employer": ["skilled-worker"],
  "work-long-bachelor-intermediate-yes-yes-employer": ["skilled-worker"],
  "work-long-master-intermediate-yes-yes-employer": ["skilled-worker"],
  "work-long-phd-intermediate-yes-yes-employer": ["skilled-worker"],
  "work-long-bachelor-advanced-yes-yes-employer": ["skilled-worker"],
  "work-long-master-advanced-yes-yes-employer": ["skilled-worker"],
  "work-long-phd-advanced-yes-yes-employer": ["skilled-worker"],
  "work-long-bachelor-native-yes-yes-employer": ["skilled-worker"],
  "work-long-master-native-yes-yes-employer": ["skilled-worker"],
  "work-long-phd-native-yes-yes-employer": ["skilled-worker"],

  "visit-short-high-school-basic-yes-no": ["visitor"],
  "visit-short-bachelor-basic-yes-no": ["visitor"],
  "visit-short-master-basic-yes-no": ["visitor"],
  "visit-short-phd-basic-yes-no": ["visitor"],
  "visit-short-high-school-intermediate-yes-no": ["visitor"],
  "visit-short-bachelor-intermediate-yes-no": ["visitor"],
  "visit-short-master-intermediate-yes-no": ["visitor"],
  "visit-short-phd-intermediate-yes-no": ["visitor"],
  "visit-short-high-school-advanced-yes-no": ["visitor"],
  "visit-short-bachelor-advanced-yes-no": ["visitor"],
  "visit-short-master-advanced-yes-no": ["visitor"],
  "visit-short-phd-advanced-yes-no": ["visitor"],
  "visit-short-high-school-native-yes-no": ["visitor"],
  "visit-short-bachelor-native-yes-no": ["visitor"],
  "visit-short-master-native-yes-no": ["visitor"],
  "visit-short-phd-native-yes-no": ["visitor"],
  
  "family-medium-high-school-basic-yes-no": ["family-visa"],
  "family-medium-bachelor-basic-yes-no": ["family-visa"],
  "family-medium-master-basic-yes-no": ["family-visa"],
  "family-medium-phd-basic-yes-no": ["family-visa"],
  "family-medium-high-school-intermediate-yes-no": ["family-visa"],
  "family-medium-bachelor-intermediate-yes-no": ["family-visa"],
  "family-medium-master-intermediate-yes-no": ["family-visa"],
  "family-medium-phd-intermediate-yes-no": ["family-visa"],
  "family-long-high-school-basic-yes-no": ["family-visa"],
  "family-long-bachelor-basic-yes-no": ["family-visa"],
  "family-long-master-basic-yes-no": ["family-visa"],
  "family-long-phd-basic-yes-no": ["family-visa"],
  "family-long-high-school-intermediate-yes-no": ["family-visa"],
  "family-long-bachelor-intermediate-yes-no": ["family-visa"],
  "family-long-master-intermediate-yes-no": ["family-visa"],
  "family-long-phd-intermediate-yes-no": ["family-visa"],
  
  "business-medium-bachelor-intermediate-yes-no": ["innovator"],
  "business-medium-master-intermediate-yes-no": ["innovator"],
  "business-medium-phd-intermediate-yes-no": ["innovator"],
  "business-medium-bachelor-advanced-yes-no": ["innovator"],
  "business-medium-master-advanced-yes-no": ["innovator"],
  "business-medium-phd-advanced-yes-no": ["innovator"],
  "business-medium-bachelor-native-yes-no": ["innovator"],
  "business-medium-master-native-yes-no": ["innovator"],
  "business-medium-phd-native-yes-no": ["innovator"],
  "business-long-bachelor-intermediate-yes-no": ["innovator"],
  "business-long-master-intermediate-yes-no": ["innovator"],
  "business-long-phd-intermediate-yes-no": ["innovator"],
  "business-long-bachelor-advanced-yes-no": ["innovator"],
  "business-long-master-advanced-yes-no": ["innovator"],
  "business-long-phd-advanced-yes-no": ["innovator"],
  "business-long-bachelor-native-yes-no": ["innovator"],
  "business-long-master-native-yes-no": ["innovator"],
  "business-long-phd-native-yes-no": ["innovator"]
};
