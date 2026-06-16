// Calamba Eye Center — Laser Vision Correction landing page content.
// Styled after the ZEISS "Freedom of Vision" look, but de-branded: this is the
// clinic's own page (no ZEISS / SMILE pro wording). Items marked PLACEHOLDER are
// representative samples to be swapped for real clinic-supplied content.

export const siteConfig = {
  brand: "Laser Vision Correction",
  procedureTag: "Flapless Laser Vision Correction",
  clinicName: "Calamba Eye Center",
  parentName: "Calamba Medical Center",
  // Real Calamba contact (Eye Center line where known)
  phone: "(049) 545-2566",
  phoneHref: "+63495452566",
  whatsapp: "0920 965 6060", // PLACEHOLDER — confirm clinic WhatsApp
  whatsappHref: "639209656060",
  email: "calambamed@cmc.ph",
  address:
    "National Highway Crossing, Brgy. Real, Calamba City, Laguna 4027, Philippines",
  mapEmbed:
    "https://maps.google.com/maps?q=Calamba+Medical+Center+Laguna&t=&z=15&ie=UTF8&iwloc=&output=embed",
  social: {
    facebook: "https://www.facebook.com/CalambaMedicalCenter",
    instagram: "https://www.instagram.com/calambamed/",
  },
} as const;

export const navLinks = [
  { label: "How It Works", href: "#how" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  clinicEyebrow: "Calamba Eye Center",
  clinicTag: "Laser Vision Correction",
  headlineTop: "See Clearly.",
  headlineBottom: "Live Freely.",
  spectrum: ["Fast", "Flapless", "Safe"],
  description:
    "Reduce — or eliminate — your dependence on glasses and contacts with advanced, minimally invasive, flapless laser vision correction at Calamba Eye Center. Short laser time, minimal disruption, and fast recovery.",
  clinicTrust: "Part of Calamba Medical Center — ACI Gold-accredited care.",
  ctaPrimary: "Book a Consultation",
  ctaSecondary: "How It Works",
  microtrust: "Bladeless · Flapless · Minimally invasive laser vision correction.",
} as const;

// 3 benefit blocks (lifestyle outcomes)
export const benefits = [
  {
    title: "Ultimate Convenience",
    description:
      "Wake up to instant clarity and enjoy vision that's always ready. Skip the morning and night routines, and save time every day — one less thing to think about.",
    icon: "sunrise",
  },
  {
    title: "Unleashed Confidence",
    description:
      "Show up with confidence in every social and work setting. Step out and let your best, natural self shine through — look and feel your best the very next day.",
    icon: "sparkles",
  },
  {
    title: "Active Freedom",
    description:
      "From the gym to the outdoors, your vision moves with you. No limits, no slips — get back to what you love, faster and clearer than ever.",
    icon: "activity",
  },
] as const;

export const about = {
  eyebrow: "About the Procedure",
  title: "A Modern, Flapless Way to See",
  description:
    "Your journey to clearer vision begins with a short laser time, minimal disruption, and fast recovery. A laser creates a small, contact-lens-shaped layer just beneath the surface of your eye, which is then removed through a tiny opening — reshaping the eye and correcting your vision, all without a corneal flap.",
} as const;

// 7-point overview of the procedure's strengths
export const solutions = [
  { title: "Fast", description: "Laser time is done in less than 10 seconds per eye.", icon: "timer" },
  { title: "Flapless", description: "A 2–4mm tiny incision preserves more corneal nerves.", icon: "scan" },
  { title: "Gentle", description: "Virtually painless treatment with less risk of dry eyes.", icon: "feather" },
  { title: "Precise", description: "Highly predictable results build ultimate confidence.", icon: "target" },
  { title: "Safe", description: "Minimally invasive treatment with zero flap-related complications.", icon: "shield" },
  { title: "Trusted", description: "A globally proven, widely performed laser vision correction technique.", icon: "globe" },
  { title: "Seamless", description: "Fast recovery with minimal downtime.", icon: "sparkles" },
] as const;

// Procedure (3 steps) + comparison
export const procedure = {
  steps: [
    {
      step: "01",
      title: "Lenticule Creation",
      description:
        "A thin lenticule and a small 2–4mm incision are created within the cornea by the laser.",
    },
    {
      step: "02",
      title: "Lenticule Removal",
      description:
        "The lenticule is gently removed through the tiny incision, with minimal corneal disruption.",
    },
    {
      step: "03",
      title: "Vision Correction",
      description:
        "Removing the lenticule reshapes the cornea, correcting your vision.",
    },
  ],
  compare: [
    { name: "Flapless (Lenticule)", type: "Flapless treatment", flap: "Tiny 2–4mm incision", recovery: "1–3 days", highlight: true },
    { name: "LASIK", type: "Flap surgery", flap: "Corneal flap created", recovery: "≈1 week", highlight: false },
    { name: "PRK", type: "Surface ablation", flap: "Surface layer removed", recovery: "≈2 weeks", highlight: false },
  ],
} as const;

// Who is eligible (4)
export const eligibility = [
  { title: "Myopia", note: "Nearsighted", description: "Nearsighted individuals who need correction (up to 1000 degrees).", icon: "eye" },
  { title: "Hyperopia", note: "Farsighted", description: "Farsighted individuals who need correction (up to 700 degrees).", icon: "eye" },
  { title: "Astigmatism", note: "Uneven focus", description: "Individuals who need correction (up to 500 degrees).", icon: "scan" },
  { title: "Dry Eyes", note: "Lens intolerance", description: "Individuals with contact lens intolerance or dry eyes.", icon: "droplet" },
] as const;

// Clinic credibility stats
export const stats = [
  { value: 35, suffix: "+", label: "Years of trusted care" },
  { value: 27, suffix: "", label: "Specialty centers" },
  { value: 160, suffix: "", label: "Bed capacity" },
  { value: 10000, suffix: "+", label: "Patients cared for yearly" },
] as const;

// PLACEHOLDER — representative testimonials (swap for real, approved reviews)
export const testimonials = [
  {
    quote:
      "I was back at my desk the very next day. The whole procedure took seconds and I could see clearly almost immediately — it still feels unreal.",
    name: "Patient A.",
    role: "Marketing professional, Calamba",
    theme: "Fast procedure",
  },
  {
    quote:
      "I was nervous about pain, but it was so gentle. Just a little pressure for a few seconds and that was it. No flap, no fuss.",
    name: "Patient B.",
    role: "Teacher, Laguna",
    theme: "Gentle experience",
  },
  {
    quote:
      "From the consult to aftercare, the team made me feel completely at ease. They answered every question and guided me through each step.",
    name: "Patient C.",
    role: "Small-business owner",
    theme: "Clinic service",
  },
] as const;

// "Why Choose our Eye Clinic" — 3 USPs
export const usps = [
  {
    title: "Trusted Care Since 1989",
    description:
      "Backed by Calamba Medical Center — the only ACI Gold-accredited hospital in Southern Luzon — for decades of trusted, patient-centered care.",
    icon: "badge",
  },
  {
    title: "Modern Technology",
    description:
      "Advanced laser vision correction with real-time eye-tracking for precise, confident, and predictable results.",
    icon: "cpu",
  },
  {
    title: "Experienced Surgeons & Staff",
    description:
      "A dedicated team of refractive specialists guiding you from your first consultation through to complete recovery.",
    icon: "users",
  },
] as const;

// PLACEHOLDER — representative doctors (swap for real names/titles/bios/photos)
export const doctors = [
  {
    name: "Dr. [Surname]",
    title: "Refractive & Cataract Surgeon",
    bio: "Specialist in laser vision correction, leading the refractive surgery programme at Calamba Eye Center.",
  },
  {
    name: "Dr. [Surname]",
    title: "Ophthalmologist, Cornea & Refractive",
    bio: "Focused on corneal health and personalised pre-operative assessment for every patient.",
  },
] as const;

export const faqs = [
  {
    q: "How soon will I recover?",
    a: "Recovery is generally smooth and quick. Most patients are able to resume normal activities the next day, and functional vision is achieved the day after surgery.",
  },
  {
    q: "Is laser vision correction painful?",
    a: "It is a virtually painless and gentle procedure. The treatment is performed with gentle, low suction, and most patients report only mild pressure for a few seconds — no pain — with vision preserved throughout (no “black out” phenomenon).",
  },
  {
    q: "Is it safe?",
    a: "Yes. Flapless laser vision correction is a well-established, minimally invasive procedure. With no corneal flap, there are no flap-related complications, the cornea's structure and stability are minimally affected, and there are fewer instances of post-treatment dry eyes.",
  },
  {
    q: "Are there any side effects?",
    a: "It is a safe and highly precise procedure with no major side effects. Please consult our eye doctors for a more in-depth understanding of your eligibility.",
  },
  {
    q: "Am I a candidate?",
    a: "Patients with myopia (up to 1000 degrees) or hyperopia (up to 700 degrees), with or without astigmatism (up to 500 degrees). Those with an active lifestyle, a history of dry eyes, or an intolerance to contact lenses are also ideal candidates. Your suitability is confirmed after a professional assessment by our doctors.",
  },
] as const;

export const booking = {
  eyebrow: "Book an Appointment",
  title: "Book Your Eye Assessment",
  description:
    "Take the first step toward life without glasses or contacts. Book a consultation and our team will be in touch.",
  fields: [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "email", label: "Email Address", type: "email", required: true },
    { id: "contact", label: "Contact Number", type: "tel", required: true },
    { id: "doctor", label: "Preferred Doctor", type: "select", required: false },
    { id: "date", label: "Preferred Appointment Date", type: "date", required: false },
    { id: "time", label: "Preferred Appointment Time", type: "time", required: false },
    { id: "source", label: "How did you hear about us?", type: "text", required: false },
    { id: "message", label: "Message", type: "textarea", required: false },
  ],
  submit: "Book My Consultation",
} as const;

export const disclaimer =
  "This information is for a basic understanding of laser vision correction. It is not medical advice or a substitute for a professional consultation, during which your suitability will be assessed.";

// ── Clinic service offerings (Calamba Medical Center) — per Dowan's "their service offerings" ──
export const trustBadges = [
  { label: "ACI Gold Accredited", detail: "Only in Southern Luzon" },
  { label: "#16 in Philippines", detail: "World's Best Hospitals 2026" },
  { label: "ISO 9001:2015", detail: "Quality certified" },
  { label: "24/7 Emergency", detail: "Always open" },
] as const;

export const centersOfExcellence = [
  {
    id: "eye",
    name: "Calamba Eye Center",
    description:
      "Home of our flapless laser vision correction programme, plus full-spectrum eye care and consultations.",
    image: "/images/zeiss/kv-landscape-1600.jpg",
    flagship: true,
  },
  {
    id: "cancer",
    name: "Calamba Cancer Center",
    description:
      "Comprehensive oncology — advanced diagnostics, surgery, and chemotherapy services.",
    image: "/images/cancer-center.jpg",
  },
  {
    id: "kidney",
    name: "Calamba Kidney Center",
    description:
      "One of Laguna's largest dialysis centers, with 60 state-of-the-art chairs.",
    image: "/images/kidney-center.jpg",
  },
  {
    id: "heart",
    name: "Heart & Vascular Center",
    description:
      "Cardiac diagnostics, intervention, and vascular care with CATHLAB facilities.",
    image: "/images/heart-center.jpg",
  },
  {
    id: "diabetes",
    name: "Diabetes Care Center",
    description:
      "Holistic diabetes management — the only dedicated center of its kind in Southern Luzon.",
    image: "/images/diabetes-center.jpg",
  },
  {
    id: "emergency",
    name: "Emergency Room",
    description:
      "24/7 emergency and trauma care for Laguna and the surrounding communities.",
    image: "/images/emergency-room.jpg",
  },
  {
    id: "womens",
    name: "Women's Center",
    description: "OB ultrasound, maternal care, and women's health services.",
    image: "/images/laboratory.jpg",
  },
  {
    id: "laboratory",
    name: "Laboratory Department",
    description:
      "24/7 laboratory services — hematology, chemistry, microbiology, and more.",
    image: "/images/laboratory.jpg",
  },
] as const;

export const hmoPartners = [
  "Maxicare",
  "Medicard",
  "Intellicare",
  "PhilCare",
  "Pacific Cross",
  "Cocolife",
  "Kaiser",
  "Sun Life",
  "HMI",
  "Medilink",
  "ValuCare",
  "Flexicare",
] as const;
