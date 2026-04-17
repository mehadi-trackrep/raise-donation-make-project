import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "BDT"): string {
  if (currency === "BDT") {
    return `Tk ${new Intl.NumberFormat("en-BD", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)}`;
  }
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-GB").format(n);
}

export function getProgressPercent(raised: number, goal: number): number {
  return Math.min(Math.round((raised / goal) * 100), 100);
}

export function normalizeImageUrl(url: string): string {
  if (!url) return url;

  // /file/d/{ID}/view  →  direct CDN
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;

  // drive.google.com/open?id={ID}  or  /uc?id={ID}
  if (url.includes("drive.google.com")) {
    const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch) return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }

  return url;
}
