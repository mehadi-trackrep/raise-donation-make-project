/**
 * Google Sheets CSV fetcher.
 *
 * Reads from a single public Google Spreadsheet containing four named sheets:
 *   projects | bank_accounts | stats | site_config
 *
 * The sheet must be shared: "Anyone with the link can view".
 * Set GOOGLE_SHEET_ID in your .env.local.
 *
 * Fetch URL pattern:
 *   https://docs.google.com/spreadsheets/d/{ID}/gviz/tq?tqx=out:csv&sheet={name}
 */

import Papa from "papaparse";
import { Project, ProjectCategory, ProjectStatus, UrgencyLevel, ProjectImpactStat } from "@/types/project";
import { BankAccount, BankDetails } from "@/types/bank";
import { GlobalStats } from "@/types/stats";
import { normalizeImageUrl } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
/** Revalidate every 5 minutes (adjust freely). */
export const REVALIDATE_SECONDS = 300;

function csvUrl(sheetName: string): string {
  return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

// ---------------------------------------------------------------------------
// Core fetch helper
// ---------------------------------------------------------------------------

async function fetchCsv(sheetName: string): Promise<Record<string, string>[] | null> {
  if (!SHEET_ID) {
    console.info(`[sheets] GOOGLE_SHEET_ID not set — using static fallback data.`);
    return null;
  }

  try {
    // Dev: no-store so sheet edits are visible immediately on every request.
    // Production: ISR revalidates every REVALIDATE_SECONDS.
    const fetchOptions: RequestInit =
      process.env.NODE_ENV === "development"
        ? { cache: "no-store" }
        : { next: { revalidate: REVALIDATE_SECONDS } };

    const res = await fetch(csvUrl(sheetName), fetchOptions);

    if (!res.ok) {
      console.warn(`[sheets] Failed to fetch sheet "${sheetName}": HTTP ${res.status}`);
      return null;
    }

    const text = await res.text();

    const { data, errors } = Papa.parse<Record<string, string>>(text, {
      header: true,        // first row = column names
      skipEmptyLines: true,
      transformHeader: (h) => h.trim(),
      transform: (v) => v.trim(),
    });

    if (errors.length) {
      console.warn(`[sheets] CSV parse warnings for "${sheetName}":`, errors);
    }

    return data as Record<string, string>[];
  } catch (err) {
    console.error(`[sheets] Error fetching sheet "${sheetName}":`, err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toBool(v: string | undefined): boolean {
  return (v ?? "").toLowerCase() === "true";
}

function toNumber(v: string | undefined, fallback = 0): number {
  const n = Number((v ?? "").replace(/[^0-9.-]/g, ""));
  return isNaN(n) ? fallback : n;
}

function toStringArray(v: string | undefined): string[] {
  if (!v) return [];
  return v.split(",").map((s) => s.trim()).filter(Boolean);
}

function parseJson<T>(v: string | undefined, fallback: T): T {
  if (!v) return fallback;
  try {
    return JSON.parse(v) as T;
  } catch {
    console.warn(`[sheets] Failed to parse JSON value: ${v}`);
    return fallback;
  }
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

function rowToProject(row: Record<string, string>): Project | null {
  if (!row.id || !row.slug || !row.title) return null;

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    tagline: row.tagline ?? "",
    category: (row.category ?? "food-bank") as ProjectCategory,
    status: (row.status ?? "active") as ProjectStatus,
    coverImage: normalizeImageUrl(row.coverImage ?? ""),
    galleryImages: toStringArray(row.galleryImages).map(normalizeImageUrl),
    goalAmount: toNumber(row.goalAmount),
    raisedAmount: toNumber(row.raisedAmount),
    currency: row.currency || "GBP",
    donorCount: toNumber(row.donorCount),
    urgency: (row.urgency ?? "medium") as UrgencyLevel,
    featured: toBool(row.featured),
    startDate: row.startDate ?? "",
    endDate: row.endDate || undefined,
    why: {
      heading: row.why_heading || "Why This Matters",
      body: row.why_body ?? "",
    },
    how: {
      heading: row.how_heading || "How We Help",
      body: row.how_body ?? "",
    },
    impact: {
      heading: row.impact_heading || "Our Impact So Far",
      body: row.impact_body ?? "",
    },
    impactStats: parseJson<ProjectImpactStat[]>(row.impactStats, []),
  };
}

export async function fetchProjects(): Promise<Project[] | null> {
  const rows = await fetchCsv("projects");
  if (!rows) return null;
  return rows.map(rowToProject).filter((p): p is Project => p !== null);
}

// ---------------------------------------------------------------------------
// Bank Accounts
// ---------------------------------------------------------------------------

function rowToBankAccount(row: Record<string, string>): BankAccount | null {
  if (!row.id || !row.accountName) return null;
  return {
    id: row.id,
    label: row.label ?? "",
    accountName: row.accountName,
    bankName: row.bankName ?? "",
    accountNumber: row.accountNumber ?? "",
    sortCode: row.sortCode || undefined,
    iban: row.iban || undefined,
    swiftBic: row.swiftBic || undefined,
    routingNumber: row.routingNumber || undefined,
    reference: row.reference ?? "DONATION",
    currency: row.currency || "GBP",
    notes: row.notes || undefined,
  };
}

export async function fetchBankDetails(): Promise<BankDetails | null> {
  const rows = await fetchCsv("bank_accounts");
  if (!rows) return null;
  const accounts = rows.map(rowToBankAccount).filter((a): a is BankAccount => a !== null);
  return { accounts, lastUpdated: new Date().toISOString().split("T")[0] };
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export async function fetchStats(): Promise<GlobalStats | null> {
  const rows = await fetchCsv("stats");
  if (!rows) return null;

  const map: Record<string, string> = {};
  for (const row of rows) {
    if (row.key) map[row.key.trim()] = row.value?.trim() ?? "";
  }

  if (!map.totalRaised) return null;

  return {
    totalRaised: toNumber(map.totalRaised),
    currency: map.currency || "GBP",
    totalDonors: toNumber(map.totalDonors),
    activeProjects: toNumber(map.activeProjects),
    completedProjects: toNumber(map.completedProjects),
    countriesReached: toNumber(map.countriesReached),
  };
}

// ---------------------------------------------------------------------------
// Site Config
// ---------------------------------------------------------------------------

export interface SiteConfig {
  siteName: string;
  tagline: string;
  charityNumber: string;
  companyNumber: string;
  address: string;
  email: string;
  phone: string;
  bankLastUpdated: string;
}

export async function fetchSiteConfig(): Promise<SiteConfig | null> {
  const rows = await fetchCsv("site_config");
  if (!rows) return null;

  const map: Record<string, string> = {};
  for (const row of rows) {
    if (row.key) map[row.key.trim()] = row.value?.trim() ?? "";
  }

  if (!map.siteName) return null;

  return {
    siteName: map.siteName || "HopeRaise",
    tagline: map.tagline || "",
    charityNumber: map.charityNumber || "",
    companyNumber: map.companyNumber || "",
    address: map.address || "",
    email: map.email || "",
    phone: map.phone || "",
    bankLastUpdated: map.bankLastUpdated || new Date().toISOString().split("T")[0],
  };
}
