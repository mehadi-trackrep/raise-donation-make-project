export const SITE_NAME = "HopeRaise";
export const SITE_TAGLINE = "Empowering Bangladesh's Communities, One Donation at a Time";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Donate", href: "/donate" },
];

export const CATEGORY_COLORS: Record<string, string> = {
  "food-bank": "bg-orange-100 text-orange-700",
  education: "bg-blue-100 text-blue-700",
  medical: "bg-red-100 text-red-700",
  shelter: "bg-purple-100 text-purple-700",
  "orphan-support": "bg-pink-100 text-pink-700",
  "solar-setup": "bg-yellow-100 text-yellow-700",
};

export const URGENCY_COLORS: Record<string, string> = {
  high: "bg-red-500",
  medium: "bg-amber-500",
  low: "bg-emerald-500",
};

export const URGENCY_LABELS: Record<string, string> = {
  high: "Urgent",
  medium: "Active",
  low: "Ongoing",
};
