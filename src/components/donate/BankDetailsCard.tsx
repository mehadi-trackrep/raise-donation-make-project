"use client";

import { motion } from "framer-motion";
import { Building2, Smartphone } from "lucide-react";
import { BankAccount } from "@/types/bank";
import { CopyButton } from "@/components/ui/CopyButton";
import { fadeInUp } from "@/lib/animations";

interface BankDetailsCardProps {
  account: BankAccount;
  index?: number;
}

function Row({ label, value, copyable }: { label: string; value: string; copyable?: boolean }) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <span className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</span>
      <div className="mt-1 flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-gray-900 break-all">{value}</span>
        {copyable && <CopyButton text={value} className="shrink-0" />}
      </div>
    </div>
  );
}

export function BankDetailsCard({ account, index = 0 }: BankDetailsCardProps) {
  const isMobile = account.type === "mobile";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1 }}
      className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100">
          {isMobile
            ? <Smartphone size={20} className="text-emerald-700" />
            : <Building2 size={20} className="text-emerald-700" />
          }
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-gray-900">{account.label}</h3>
          <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            {account.currency}
          </span>
        </div>
      </div>

      {/* Details */}
      <div>
        <Row label="Account Name" value={account.accountName} copyable />
        {!isMobile && <Row label="Bank Name" value={account.bankName} />}
        <Row label={isMobile ? "Mobile Number" : "Account Number"} value={account.accountNumber} copyable />
        {/* {account.sortCode && <Row label="Sort Code" value={account.sortCode} copyable />}
        {account.iban && <Row label="IBAN" value={account.iban} copyable />} */}
        {account.swiftBic && <Row label="SWIFT / BIC" value={account.swiftBic} copyable />}
        {account.routingNumber && <Row label="Routing Number" value={account.routingNumber} copyable />}
        <Row label="Reference" value={account.reference} copyable />
      </div>

      {/* Notes */}
      {account.notes && (
        <div className="mt-4 rounded-xl bg-amber-50 border border-amber-100 p-4 text-sm text-amber-800 leading-relaxed">
          <strong className="font-semibold">Note: </strong>
          {account.notes}
        </div>
      )}
    </motion.div>
  );
}
