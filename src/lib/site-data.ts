// ZEISS SMILE pro — "Freedom of Vision" landing page content for Calamba Eye Center.
// Approved ZEISS copy from docs/CAMPAIGN-COPY.md. Items marked PLACEHOLDER are
// representative samples to be swapped for real clinic-supplied content.

export const siteConfig = {
  brand: "ZEISS SMILE pro",
  procedureTag: "Flapless Laser Vision Correction",
  clinicName: "Calamba Eye Center",
  parentName: "Calamba Medical Center",
  tagline: "Freedom of Vision",
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
  { label: "Doctors", href: "#doctors" },
  { label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  sub: "ZEISS SMILE pro",
  headline: "Freedom of Vision",
  spectrum: ["Fast", "Flapless", "Safe"],
  description:
    "Unlock your visual freedom in just seconds. ZEISS SMILE pro is an advanced, minimally invasive and flapless laser vision correction — shorter laser time, minimal disruption, and faster recovery.",
  ctaPrimary: "Unlock Your Visual Freedom",
  ctaSecondary: "How It Works",
  microtrust:
    "The only FDA-approved lenticule extraction · 12 million+ eyes treated worldwide",
} as const;

// 3 benefit blocks (titles from copywriting sheet, descriptions from booklet)
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
  eyebrow: "About ZEISS SMILE pro",
  title: "The Next-Generation of Vision Freedom",
  description:
    "Your journey to visual clarity begins with a short laser time, minimal disruption, and fast recovery with ZEISS SMILE pro. A laser creates a small, contact-lens-shaped layer just beneath the surface of your eye, which is then removed through a tiny opening — reshaping the eye and correcting your vision.",
} as const;

// 7-point solution overview (verbatim one-liners from the ZEISS copywriting sheet)
export const solutions = [
  { title: "Fast", description: "Laser time is done in less than 10 seconds per eye.", icon: "timer" },
  { title: "Flapless", description: "A 2–4mm tiny incision preserves more corneal nerves.", icon: "scan" },
  { title: "Gentle", description: "Virtually painless treatment with less risk of dry eyes.", icon: "feather" },
  { title: "Precise", description: "Highly predictable results build ultimate confidence.", icon: "target" },
  { title: "Safe", description: "Minimally invasive treatment with zero flap-related complications.", icon: "shield" },
  { title: "Trusted", description: "More than 12 million eyes treated and practised by thousands of surgeons worldwide.", icon: "globe" },
  { title: "Seamless", description: "Fast recovery with minimal downtime.", icon: "sparkles" },
] as const;

// SMILE pro procedure (3 steps) + the comparison line-up
export const procedure = {
  steps: [
    {
      step: "01",
      title: "Lenticule Creation",
      description:
        "A lenticule and a small 2–4mm incision are created within the cornea by the laser.",
    },
    {
      step: "02",
      title: "Lenticule Removal",
      description:
        "The lenticule is removed through the incision, with minimal corneal disruption.",
    },
    {
      step: "03",
      title: "Vision Correction",
      description:
        "Removing the lenticule reshapes the cornea, correcting your vision.",
    },
  ],
  compare: [
    { name: "ZEISS SMILE pro", type: "Flapless treatment", flap: "Tiny 2–4mm incision", recovery: "1–3 days", highlight: true },
    { name: "LASIK", type: "Flap surgery", flap: "Corneal flap created", recovery: "≈1 week", highlight: false },
    { name: "PRK", type: "Surface ablation", flap: "Surface layer removed", recovery: "≈2 weeks", highlight: false },
  ],
} as const;

// Who is eligible (4) — from copywriting sheet
export const eligibility = [
  { title: "Myopia", note: "Nearsighted", description: "Nearsighted individuals who need correction (up to 1000 degrees).", icon: "eye" },
  { title: "Hyperopia", note: "Farsighted", description: "Farsighted individuals who need correction (up to 700 degrees).", icon: "eye" },
  { title: "Astigmatism", note: "Uneven focus", description: "Individuals who need correction (up to 500 degrees).", icon: "scan" },
  { title: "Dry Eyes", note: "Lens intolerance", description: "Individuals with contact lens intolerance or dry eyes.", icon: "droplet" },
] as const;

export const stats = [
  { value: 12, suffix: "M+", label: "Eyes treated worldwide" },
  { value: 2900, suffix: "+", label: "Surgeons trained" },
  { value: 80, suffix: "+", label: "Countries" },
  { value: 10, prefix: "<", suffix: "s", label: "Laser time per eye" },
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
    title: "Modern ZEISS Technology",
    description:
      "Freedom of Vision delivered with the precision of ZEISS SMILE pro — real-time laser tracking for confident centering and accuracy.",
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
    bio: "Specialist in laser vision correction, leading the SMILE pro programme at Calamba Eye Center.",
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
    a: "Recovery is generally smooth and quick for ZEISS SMILE pro. Most patients are able to resume normal activities the next day, and functional vision is achieved the day after surgery.",
  },
  {
    q: "Is ZEISS SMILE pro painful?",
    a: "ZEISS SMILE pro is a virtually painless and gentle vision correction solution. Patients consistently tell us it was very comfortable. The entire treatment is performed with gentle, low suction so that vision is preserved with no “black out” phenomenon, unlike other conventional laser eye surgery.",
  },
  {
    q: "Is ZEISS SMILE pro safe?",
    a: "Yes. ZEISS SMILE pro is FDA-approved, and with more than 12 million eyes treated globally, SMILE technology is widely recognized by surgeons and patients as safe and reliable. As a flapless treatment there are no flap-related complications, the cornea's structure and stability are minimally affected, and there are fewer instances of post-treatment dry eyes.",
  },
  {
    q: "Are there any side effects?",
    a: "ZEISS SMILE pro is a safe and highly precise procedure with no major side effects. Please consult your eye doctor for a more in-depth understanding of your eligibility.",
  },
  {
    q: "Am I a candidate for ZEISS SMILE pro?",
    a: "Patients with myopia (100–1000 degrees) or hyperopia (up to 700 degrees), with or without astigmatism (up to 500 degrees). Those with an active lifestyle, a history of dry eyes, or an intolerance to contact lenses are also ideal candidates. Ultimately, suitability depends on the opinion of the doctor after a professional assessment.",
  },
] as const;

export const booking = {
  eyebrow: "Book an Appointment",
  title: "Unlock Your Visual Freedom in Just Seconds",
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
  submit: "Yes, Unlock my Visual Freedom",
} as const;

export const disclaimer =
  "This information is for basic understanding of Laser Vision Correction. It is not medical advice or a substitute for a professional consultation, during which you will be informed about your suitability. ZEISS SMILE technology is the only FDA-approved lenticule extraction procedure.";
