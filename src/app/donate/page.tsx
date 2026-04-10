import { Heart, ShieldCheck, Zap, Info } from "lucide-react";
import { getBankDetails } from "@/data/bankDetails";
import { BankDetailsCard } from "@/components/donate/BankDetailsCard";
export const revalidate = 300;

export const metadata = {
  title: "Donate — HopeRaise",
  description:
    "Send a direct bank transfer donation. No fees, no middlemen — 100% of your money reaches the cause.",
};

export default async function DonatePage() {
  const bankDetails = await getBankDetails();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 py-20 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/20 ring-2 ring-amber-400/30">
          <Heart size={28} className="fill-amber-400 text-amber-400" />
        </div>
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
          Make a Donation
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-emerald-200">
          Every pound counts. Transfer directly to our bank accounts — no
          platform fees, no deductions. Your full donation reaches those who
          need it most.
        </p>
      </div>

      {/* Trust badges */}
      <div className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4">
          {[
            { icon: ShieldCheck, text: "Registered Charity No: 1234567", color: "text-emerald-600" },
            { icon: Zap, text: "100% Goes to the Cause", color: "text-amber-600" },
            { icon: Info, text: "Bank Transfer — No Fees", color: "text-blue-600" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <item.icon size={18} className={item.color} />
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Bank details */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Instructions */}
        <div className="mb-12 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
          <h2 className="mb-3 font-serif text-xl font-bold text-gray-900">
            How to Donate
          </h2>
          <ol className="space-y-2.5 text-sm leading-relaxed text-gray-600">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">1</span>
              Choose the bank account that matches your currency and location below.
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">2</span>
              Set up a bank transfer from your online banking or branch using the details provided.
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">3</span>
              In the <strong>payment reference</strong>, write the project name (e.g. &ldquo;Community Food Bank&rdquo;) or &ldquo;GENERAL&rdquo; if donating to the overall fund.
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">4</span>
              Optionally email us at <a href="mailto:donations@hoperaise.org" className="font-semibold text-emerald-700 hover:underline">donations@hoperaise.org</a> with your name and reference so we can send a thank-you receipt.
            </li>
          </ol>
        </div>

        {/* Account cards */}
        <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900">
          Our Bank Accounts
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bankDetails.accounts.map((account, i) => (
            <BankDetailsCard key={account.id} account={account} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl bg-amber-50 border border-amber-100 p-5 text-sm text-amber-800">
          <strong className="font-semibold">Last verified: </strong>
          {new Date(bankDetails.lastUpdated).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          . If you experience any issues with your transfer, please contact us at{" "}
          <a href="mailto:donations@hoperaise.org" className="font-semibold hover:underline">
            donations@hoperaise.org
          </a>.
        </div>
      </div>
    </div>
  );
}
