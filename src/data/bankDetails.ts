import { BankDetails } from "@/types/bank";

export const bankDetails: BankDetails = {
  lastUpdated: "2025-01-01",
  accounts: [
    {
      id: "uk-gbp",
      label: "UK Donations (GBP)",
      accountName: "Society Welfare Foundation",
      bankName: "Barclays Bank PLC",
      accountNumber: "12345678",
      sortCode: "20-00-00",
      iban: "GB29 BARC 2000 0012 3456 78",
      swiftBic: "BARCGB22",
      reference: "DONATION — [Project Name]",
      currency: "GBP",
      notes:
        "Please include the project name or 'GENERAL' in your payment reference so we can allocate your donation correctly.",
    },
    {
      id: "intl-usd",
      label: "International (USD)",
      accountName: "Society Welfare Foundation",
      bankName: "HSBC Bank PLC",
      accountNumber: "87654321",
      iban: "GB94 HSBC 4000 0087 6543 21",
      swiftBic: "HBUKGB4B",
      routingNumber: "021000021",
      reference: "DONATION — [Project Name]",
      currency: "USD",
      notes:
        "For USD donations from outside the UK. Currency conversion happens automatically. Please include the project name in your reference.",
    },
    {
      id: "eu-eur",
      label: "Europe (EUR)",
      accountName: "Society Welfare Foundation",
      bankName: "NatWest Bank PLC",
      accountNumber: "11223344",
      iban: "GB57 NWBK 6016 1311 2233 44",
      swiftBic: "NWBKGB2L",
      reference: "DONATION — [Project Name]",
      currency: "EUR",
      notes:
        "For EUR donations from the European Economic Area. SEPA transfers are accepted.",
    },
  ],
};
