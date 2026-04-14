import { Project } from "@/types/project";
import { fetchProjects } from "@/lib/googleSheets";

export const projects: Project[] = [
  {
    id: "1",
    slug: "community-food-bank",
    title: "Community Food Bank",
    tagline: "Fighting hunger one meal at a time in our local community",
    category: "food-bank",
    status: "active",
    coverImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop",
    ],
    goalAmount: 50000,
    raisedAmount: 34200,
    currency: "BDT",
    donorCount: 412,
    urgency: "high",
    featured: true,
    startDate: "2024-01-15",
    endDate: "2025-06-30",
    why: {
      heading: "Why This Matters",
      body: "Over 26 million people in Bangladesh are living in food poverty — unable to afford a healthy, balanced diet. In our area alone, more than 1,200 families rely on emergency food parcels every week. Rising prices, stagnant wages, and economic strain have pushed vulnerable households to the breaking point. Children are going to school hungry, elderly residents are skipping meals, and working families are choosing between rent and eating. The need has never been more urgent.",
    },
    how: {
      heading: "How We Help",
      body: "Our community food bank operates six days a week from a central warehouse and three satellite distribution points. Volunteers collect surplus food from supermarkets, restaurants, and wholesalers daily. Each referred household receives a three-day emergency food parcel tailored to their dietary needs. We also run a weekly community kitchen serving hot meals, and partner with local social services to connect families with long-term financial support and benefits guidance.",
    },
    impact: {
      heading: "Our Impact So Far",
      body: "Since launching in January 2024, we've distributed over 14,800 food parcels to 3,200 unique individuals. Our community kitchen has served 6,400 hot meals. We've helped 180 families access support they were previously unaware of, recovering an average of Tk 15,000 per year in unclaimed aid. Last winter, we ensured not a single referred family went without food for three consecutive days.",
    },
    impactStats: [
      { label: "Food Parcels Given", value: "14,800+", icon: "Package" },
      { label: "Families Supported", value: "3,200", icon: "Users" },
      { label: "Hot Meals Served", value: "6,400", icon: "UtensilsCrossed" },
      { label: "Volunteers Active", value: "78", icon: "Heart" },
    ],
  },
  {
    id: "2",
    slug: "education-for-all",
    title: "Education For All",
    tagline: "Every child deserves a fair start — fund their future today",
    category: "education",
    status: "active",
    coverImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
    ],
    goalAmount: 30000,
    raisedAmount: 18750,
    currency: "BDT",
    donorCount: 287,
    urgency: "medium",
    featured: true,
    startDate: "2024-02-01",
    endDate: "2025-08-31",
    why: {
      heading: "Why This Matters",
      body: "In Bangladesh, children from the most deprived backgrounds are significantly behind their more affluent peers by age 11. Across communities we serve, 1 in 3 children lack basic school supplies, reliable internet access, or a quiet place to study at home. Many talented young people drop out before completing their SSC — not due to lack of ability, but lack of support. This educational gap has lifelong consequences: lower earnings, poorer health outcomes, and reduced social mobility. We believe no district should determine a child's future.",
    },
    how: {
      heading: "How We Help",
      body: "We run three after-school homework clubs, a weekend STEM workshop program, and a mentorship scheme pairing university students with secondary school pupils. We provide fully equipped school supply packs at the start of each academic year, fund private tutoring sessions for exam-preparation, and maintain a digital device lending library with 120 tablets and laptops. We also run holiday learning camps to prevent the 'summer slide' where disadvantaged children lose up to three months of learning.",
    },
    impact: {
      heading: "Our Impact So Far",
      body: "This academic year, 340 children have attended our after-school clubs weekly. GCSE pass rates among our mentored students improved by 23% compared to their previous predicted grades. We've distributed 520 school supply packs and loaned 94 devices to families without home computers. Our holiday camps served 210 children last summer. Two of our mentored students received university offers to study engineering — the first in their families.",
    },
    impactStats: [
      { label: "Children Supported", value: "340+", icon: "BookOpen" },
      { label: "School Packs Given", value: "520", icon: "Package" },
      { label: "Devices Loaned", value: "94", icon: "Monitor" },
      { label: "GCSE Grade Improvement", value: "23%", icon: "TrendingUp" },
    ],
  },
  {
    id: "3",
    slug: "emergency-medical-aid",
    title: "Emergency Medical Aid",
    tagline: "Providing urgent healthcare to those who cannot afford to wait",
    category: "medical",
    status: "active",
    coverImage: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
    ],
    goalAmount: 80000,
    raisedAmount: 71600,
    currency: "BDT",
    donorCount: 634,
    urgency: "high",
    featured: true,
    startDate: "2023-11-01",
    endDate: "2025-03-31",
    why: {
      heading: "Why This Matters",
      body: "Millions in Bangladesh lack access to adequate healthcare. For those living in poverty, a delayed diagnosis or untreated condition often spirals into a life-altering crisis. We work with individuals who face impossible choices: pay rent or buy prescribed medication, work through chronic pain or risk losing their job. Dental care, mental health services, and specialist consultations are entirely out of reach for many. One missed prescription or untreated infection can cascade into hospitalisation, job loss, and homelessness.",
    },
    how: {
      heading: "How We Help",
      body: "We fund prescription costs and specialist consultations for individuals on zero-hours contracts, benefits, or undocumented status. Our medical voucher program connects recipients with private GPs and dentists who partner with us at reduced rates. We run a mobile health clinic every fortnight visiting deprived estates and refugee housing, staffed by volunteer doctors, nurses, and mental health counsellors. We also fund urgent surgical referrals that have exhausted NHS pathways.",
    },
    impact: {
      heading: "Our Impact So Far",
      body: "We have funded 2,140 medical interventions since November 2023. Our mobile clinic has conducted 1,800 consultations across 14 locations. We've covered prescription costs for 640 individuals, including 180 children with chronic conditions. We funded 48 urgent surgical referrals — procedures that would have waited 18+ months on the NHS — and supported 390 people with mental health sessions. Three patients avoided amputations due to our timely intervention funding.",
    },
    impactStats: [
      { label: "Medical Interventions", value: "2,140", icon: "Stethoscope" },
      { label: "Clinic Consultations", value: "1,800", icon: "HeartPulse" },
      { label: "Prescriptions Funded", value: "640", icon: "Pill" },
      { label: "Surgical Referrals", value: "48", icon: "Activity" },
    ],
  },
  {
    id: "4",
    slug: "safe-shelter-initiative",
    title: "Safe Shelter Initiative",
    tagline: "Because everyone deserves a safe, warm place to call home",
    category: "shelter",
    status: "active",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    ],
    goalAmount: 45000,
    raisedAmount: 22500,
    currency: "BDT",
    donorCount: 198,
    urgency: "medium",
    featured: true,
    startDate: "2024-03-01",
    endDate: "2025-12-31",
    why: {
      heading: "Why This Matters",
      body: "Housing insecurity in Bangladesh has risen significantly in recent years. Beyond those sleeping on streets, hundreds of thousands live in temporary accommodation — overcrowded shelters, slum housing, or unsafe structures with poor sanitation. Women fleeing domestic abuse, displaced families, and young people without family support are disproportionately affected. For many, the lack of a stable address is an invisible barrier to employment, healthcare, and social support.",
    },
    how: {
      heading: "How We Help",
      body: "We fund security deposits and first month's rent for individuals moving from temporary accommodation into stable private tenancies. Our housing caseworkers support clients through the entire process — from finding suitable properties to liaising with landlords, setting up utilities, and furnishing their new home with donated items. We run a winter night shelter with 40 beds, and partner with local councils to secure emergency accommodation for families at risk of street homelessness.",
    },
    impact: {
      heading: "Our Impact So Far",
      body: "We have housed 142 individuals and families in permanent tenancies since March 2024. Our night shelter has provided 4,800 bed-nights of warmth and safety. We've furnished 89 properties through our donated goods programme. Of those we've housed, 78% remain in their tenancy 12 months later — far above the national average. We helped 34 care leavers transition into their first independent home, and supported 26 domestic abuse survivors into safe accommodation.",
    },
    impactStats: [
      { label: "Families Housed", value: "142", icon: "Home" },
      { label: "Shelter Bed-Nights", value: "4,800", icon: "Moon" },
      { label: "Properties Furnished", value: "89", icon: "Sofa" },
      { label: "Tenancy Retention", value: "78%", icon: "TrendingUp" },
    ],
  },
  {
    id: "5",
    slug: "orphan-support-program",
    title: "Orphan Support Program",
    tagline: "Giving orphaned children the love, care, and future they deserve",
    category: "orphan-support",
    status: "active",
    coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&auto=format&fit=crop",
    ],
    goalAmount: 60000,
    raisedAmount: 9000,
    currency: "BDT",
    donorCount: 76,
    urgency: "low",
    featured: false,
    startDate: "2024-06-01",
    endDate: "2026-05-31",
    why: {
      heading: "Why This Matters",
      body: "There are an estimated 140 million orphaned children worldwide. Many live in under-resourced care institutions lacking emotional support, quality education, and basic healthcare. Without a stable family unit, these children face significantly higher risks of exploitation, poor mental health, substance misuse, and long-term poverty. The absence of a single reliable adult figure during childhood has documented lifelong effects on brain development, attachment, and life outcomes.",
    },
    how: {
      heading: "How We Help",
      body: "We operate a sponsorship model where donors commit a monthly amount to sponsor a specific child's welfare package — covering schooling, healthcare, nutritious meals, and extracurricular activities. We partner with vetted care homes and community foster families in three countries, providing regular independent welfare checks. Our psychosocial support team delivers trauma-informed therapy and life skills workshops. Sponsors receive quarterly updates with photos and progress reports from their sponsored child.",
    },
    impact: {
      heading: "Our Impact So Far",
      body: "Since launching in June 2024, we have enrolled 63 children in our sponsorship program across care homes in Bangladesh, Kenya, and Jordan. All 63 children are now in full-time education — 18 had previously been out of school. Our therapy team has conducted 280 sessions. Twelve older children (16-18) have been supported into vocational training programs. We are actively working to grow our sponsor network to reach our target of 200 children.",
    },
    impactStats: [
      { label: "Children Enrolled", value: "63", icon: "Users" },
      { label: "Back in Education", value: "18", icon: "BookOpen" },
      { label: "Therapy Sessions", value: "280", icon: "Heart" },
      { label: "Vocational Trainees", value: "12", icon: "GraduationCap" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Async accessors — sheet-first, static fallback
// ---------------------------------------------------------------------------

/** Returns all projects from Google Sheets, or the static list if not configured. */
export async function getProjects(): Promise<Project[]> {
  const sheetProjects = await fetchProjects();
  return sheetProjects ?? projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  return all.filter((p) => p.featured);
}

export const categoryLabels: Record<string, string> = {
  "food-bank": "Food Bank",
  education: "Education",
  medical: "Medical Aid",
  shelter: "Shelter",
  "orphan-support": "Orphan Support",
  "solar-setup": "Solar Setup",
  all: "All Projects",
};
