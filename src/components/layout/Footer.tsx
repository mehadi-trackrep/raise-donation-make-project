import Link from "next/link";
import { Heart } from "lucide-react";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700">
                <Heart size={18} className="text-white fill-white" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {SITE_TAGLINE}. Every donation, no matter how small, creates
              lasting change in our communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>info@hoperaise.org</li>
              <li>+44 (0) 20 1234 5678</li>
              <li>123 Charity Lane, London, EC1A 1BB</li>
            </ul>
            <p className="mt-6 text-xs text-gray-500">
              Registered Charity No: 1234567
              <br />
              Company No: 09876543 (England & Wales)
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            Made with{" "}
            <Heart size={10} className="inline fill-red-500 text-red-500" /> for
            the communities we serve.
          </p>
        </div>
      </div>
    </footer>
  );
}
