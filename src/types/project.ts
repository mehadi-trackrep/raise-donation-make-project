export type ProjectCategory =
  | "food-bank"
  | "education"
  | "medical"
  | "shelter"
  | "orphan-support";

export type ProjectStatus = "active" | "completed" | "upcoming";

export type UrgencyLevel = "high" | "medium" | "low";

export interface ProjectImpactStat {
  label: string;
  value: string;
  icon: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  coverImage: string;
  galleryImages?: string[];
  goalAmount: number;
  raisedAmount: number;
  currency: string;
  donorCount: number;
  why: ProjectSection;
  how: ProjectSection;
  impact: ProjectSection;
  impactStats: ProjectImpactStat[];
  startDate: string;
  endDate?: string;
  featured: boolean;
  urgency: UrgencyLevel;
}
