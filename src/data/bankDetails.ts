import { BankDetails } from "@/types/bank";
import { fetchBankDetails } from "@/lib/googleSheets";

const fallbackBankDetails: BankDetails = {
  lastUpdated: "2025-01-01",
  accounts: [
    {
      id: "bd-bank",
      label: "Bank Transfer",
      type: "bank",
      accountName: "Society Welfare Foundation",
      bankName: "Dutch-Bangla Bank Limited",
      accountNumber: "1051234567890",
      routingNumber: "090261000",
      swiftBic: "DBBLBDDH",
      reference: "DONATION — [Project Name]",
      currency: "BDT",
      notes:
        "Please include the project name or 'GENERAL' in your payment reference so we can allocate your donation correctly.",
    },
    {
      id: "bd-nagad",
      label: "Nagad",
      type: "mobile",
      accountName: "Society Welfare Foundation",
      bankName: "Nagad",
      accountNumber: "01XXXXXXXXX",
      reference: "DONATION — [Project Name]",
      currency: "BDT",
    },
    {
      id: "bd-bkash",
      label: "bKash",
      type: "mobile",
      accountName: "Society Welfare Foundation",
      bankName: "bKash",
      accountNumber: "01XXXXXXXXX",
      reference: "DONATION — [Project Name]",
      currency: "BDT",
    },
  ],
};

export async function getBankDetails(): Promise<BankDetails> {
  const sheetData = await fetchBankDetails();
  return sheetData ?? fallbackBankDetails;
}
