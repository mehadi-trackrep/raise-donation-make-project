import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HopeRaise — Empowering Communities, One Donation at a Time",
  description:
    "Fund real welfare projects that feed families, educate children, deliver healthcare, and build safe homes. Direct bank transfers, zero platform fees.",
  keywords: "charity, donation, welfare, food bank, education, medical aid, shelter, orphan support",
  manifest: "/manifest.json",
  openGraph: {
    title: "HopeRaise — Empowering Communities",
    description: "Fund real welfare projects that change lives.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
