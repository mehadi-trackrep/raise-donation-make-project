"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { slideInRight } from "@/lib/animations";

export function Navbar() {
  const scrolled = useScrollDirection();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 shadow-md transition-transform group-hover:scale-110">
              <Heart size={18} className="text-white fill-white" />
            </div>
            <span
              className={cn(
                "font-serif text-xl font-bold transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.filter((l) => l.label !== "Donate").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  pathname === link.href
                    ? "bg-emerald-700 text-white"
                    : scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/20"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg active:scale-95"
            >
              <Heart size={14} className="fill-white" />
              Donate Now
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              "flex items-center justify-center rounded-full p-2 transition-colors md:hidden",
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex items-center justify-between border-b px-6 py-5">
                <span className="font-serif text-lg font-bold text-gray-900">
                  {SITE_NAME}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {NAV_LINKS.filter((l) => l.label !== "Donate").map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-base font-bold text-white shadow hover:bg-amber-600"
                >
                  <Heart size={16} className="fill-white" />
                  Donate Now
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
