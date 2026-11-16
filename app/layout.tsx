import type { Metadata } from "next";
import { Suspense } from "react";
import {
  DM_Serif_Display,
  Geist,
  Geist_Mono,
  Manrope,
} from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AssistantMount from "@/components/assistant/AssistantMount";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope-family",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display-family",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoiko iD | Enterprise Identity & Access Infrastructure",
  description:
    "Global regulatory intelligence and continuous assurance.",
  verification: {
    google: "-rvwBtrkzYnX1HM0_nunHvvfyCiieohbEWph_uM7qJg",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <Suspense fallback={null}>
          <AssistantMount />
        </Suspense>
      </body>
    </html>
  );
}