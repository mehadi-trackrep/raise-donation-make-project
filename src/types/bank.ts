export interface BankAccount {
  id: string;
  label: string;
  type?: "bank" | "mobile";
  accountName: string;
  bankName: string;
  accountNumber: string;
  sortCode?: string;
  iban?: string;
  swiftBic?: string;
  routingNumber?: string;
  reference: string;
  currency: string;
  notes?: string;
}

export interface BankDetails {
  accounts: BankAccount[];
  lastUpdated: string;
}
