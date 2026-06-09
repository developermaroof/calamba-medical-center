export const siteConfig = {
  name: "Calamba Medical Center",
  shortName: "CMC",
  tagline: "The Healthcare City of the South",
  subtitle: "Kalingang may Husay at Puso",
  description:
    "Calamba Medical Center delivers compassionate, world-class care to Laguna and beyond — with specialty centers, 24/7 emergency services, and the only ACI Gold-accredited hospital in Southern Luzon.",
  url: "https://cmc.ph",
  phone: "(049) 545-1740",
  phoneSecondary: "(02) 539-5390",
  mobile: "0920-965-6060",
  email: "calambamed@cmc.ph",
  address:
    "National Highway Crossing, Brgy. Real, Calamba City, Laguna 4027, Philippines",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.5!2d121.15166!3d14.206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd0e8e8e8e8e%3A0x0!2sCalamba+Medical+Center!5e0!3m2!1sen!2sph!4v1",
  social: {
    facebook: "https://www.facebook.com/CalambaMedicalCenter",
    instagram: "https://www.instagram.com/calambamed/",
  },
} as const;

export const trustBadges = [
  { label: "ACI Gold Accredited", detail: "Only in Southern Luzon" },
  { label: "#16 in Philippines", detail: "World's Best Hospitals 2026" },
  { label: "ISO 9001:2015", detail: "Quality certified" },
  { label: "24/7 Emergency", detail: "Always open" },
] as const;

export const stats = [
  { value: 160, suffix: "", label: "Bed Capacity" },
  { value: 10000, suffix: "+", label: "Patients Admitted Yearly" },
  { value: 1200, suffix: "+", label: "Babies Delivered Yearly" },
  { value: 60, suffix: "", label: "Dialysis Chairs" },
] as const;

export const centersOfExcellence = [
  {
    id: "cancer",
    name: "Calamba Cancer Center",
    description:
      "Comprehensive oncology care with advanced diagnostic, surgical, and chemotherapy services.",
    image: "/images/cancer-center.jpg",
    phone: "(049) 545-1740 loc. 7100",
  },
  {
    id: "kidney",
    name: "Calamba Kidney Center",
    description:
      "One of the largest dialysis centers in Laguna with 60 state-of-the-art dialysis chairs.",
    image: "/images/kidney-center.jpg",
    phone: "(049) 545-1740 loc. 6200",
  },
  {
    id: "eye",
    name: "Calamba Eye Center",
    description:
      "Full-spectrum eye care including laser vision correction and specialized consultations.",
    image: "/images/heart-center.jpg",
    phone: "(049) 545-2566",
  },
  {
    id: "diabetes",
    name: "Diabetes Care Center",
    description:
      "Holistic diabetes management — the only dedicated center of its kind in Southern Luzon.",
    image: "/images/diabetes-center.jpg",
    phone: "(049) 545-1749 loc. 6106",
  },
  {
    id: "heart",
    name: "Heart & Vascular Center",
    description:
      "Cardiac diagnostics, intervention, and vascular care with CATHLAB facilities.",
    image: "/images/heart-center.jpg",
    phone: "(049) 545-1740",
  },
  {
    id: "emergency",
    name: "Emergency Room",
    description: "24/7 emergency and trauma care for Laguna and surrounding communities.",
    image: "/images/emergency-room.jpg",
    phone: "(049) 545-1740",
  },
  {
    id: "womens",
    name: "Women's Center",
    description: "OB ultrasound, maternal care, and women's health services.",
    image: "/images/laboratory.jpg",
    phone: "(049) 545-1740 loc. 4302",
  },
  {
    id: "laboratory",
    name: "Laboratory Department",
    description: "24/7 laboratory services — hematology, chemistry, microbiology, and more.",
    image: "/images/laboratory.jpg",
    phone: "(049) 545-1740 loc. 5204",
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

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Excellence", href: "#excellence" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const serviceCategories = [
  {
    id: "specialty",
    label: "Specialty Centers",
    items: [
      "Calamba Cancer Center",
      "Calamba Kidney Center",
      "Calamba Eye Center",
      "Diabetes Care Center",
      "Heart & Vascular Center",
      "Women's Center",
      "Wound Care Center",
      "Industrial / Occupational Health",
    ],
  },
  {
    id: "diagnostic",
    label: "Diagnostic",
    items: [
      "Laboratory Department (24/7)",
      "Medical Imaging",
      "Nuclear Medicine",
      "Neurophysiology",
      "Pulmonary Care Center",
    ],
  },
  {
    id: "inpatient",
    label: "Inpatient & Critical",
    items: [
      "Intensive Care Unit (ICU)",
      "Neonatal ICU (NICU)",
      "Emergency Room (24/7)",
      "Operating & Delivery Room",
      "Cardiac Catheterization Lab",
      "Patient Rooms",
    ],
  },
  {
    id: "outpatient",
    label: "Outpatient & Support",
    items: [
      "Ambulatory Care Center",
      "Physical Medicine & Rehabilitation",
      "Nutrition Management",
      "Dental Clinic",
      "TB DOTS Clinic",
      "CORE Early Intervention",
    ],
  },
] as const;

export const whyCmc = [
  {
    title: "Patient-Centered Care",
    description:
      "Compassionate healthcare designed around every patient and their family's unique needs.",
  },
  {
    title: "Open Hospital Model",
    description:
      "Top doctors practice freely without financial barriers — better care for everyone.",
  },
  {
    title: "Regional Referral Hub",
    description:
      "Laguna's premier acute-care referral center with centers of excellence across specialties.",
  },
] as const;
