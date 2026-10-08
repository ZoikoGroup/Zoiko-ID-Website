"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const navigationItems = [
  "Platform",
  "Solutions",
  "Regulatory Intelligence",
  "Trust Center",
  "Resources",
  "Company",
];

function ChevronDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.75 3.75L5 6L7.25 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.67 11.33L11.33 4.67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.33 4.67H11.33V10.67"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`${inter.className} sticky top-0 z-50 w-full border-b border-zinc-200 bg-white`}
    >
      {/* ================= DESKTOP HEADER ================= */}
      <div className="mx-auto hidden h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:flex lg:px-20">
        {/* Dummy Logo */}
        <Link
          href="/"
          className="flex h-[50px] w-44 shrink-0 items-center"
          aria-label="ZoikoAssure home"
        >
          <img
            src="https://placehold.co/172x50"
            alt="Logo"
            className="h-12 w-44 object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-5 overflow-hidden">
          {navigationItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="flex items-center gap-1 whitespace-nowrap text-xs font-medium text-cyan-950 transition-colors duration-200 hover:text-sky-900"
            >
              <span>{item}</span>
              <ChevronDown />
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-6">
          <Link
            href="#"
            className="whitespace-nowrap text-xs font-medium text-cyan-950 transition-colors duration-200 hover:text-sky-900"
          >
            Sign In
          </Link>

          <Link
            href="#"
            className="flex h-10 items-center gap-3 rounded-lg bg-amber-600 px-4 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-500"
          >
            <span>Request A Demo</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>

      {/* ================= MOBILE / TABLET HEADER ================= */}
      <div className="flex h-20 w-full items-center justify-between px-5 sm:px-8 lg:hidden">
        {/* Dummy Logo */}
        <Link
          href="/"
          className="flex h-[50px] w-44 items-center"
          aria-label="ZoikoAssure home"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="https://placehold.co/172x50"
            alt="Logo"
            className="h-12 w-44 object-contain"
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* Sign In */}
          <Link
            href="#"
            className="hidden text-xs font-medium text-cyan-950 sm:block"
          >
            Sign In
          </Link>

          {/* Demo Button */}
          <Link
            href="#"
            className="hidden h-10 items-center rounded-lg bg-amber-600 px-4 text-xs font-semibold text-white sm:flex"
          >
            Request A Demo
          </Link>

          {/* Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-cyan-950 transition-colors hover:bg-slate-100"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-4 sm:px-8">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-slate-100 text-sm font-medium text-cyan-950"
              >
                <span>{item}</span>
                <ChevronDown />
              </Link>
            ))}

            {/* Mobile Sign In */}
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-12 items-center border-b border-slate-100 text-sm font-medium text-cyan-950"
            >
              Sign In
            </Link>

            {/* Mobile Demo Button */}
            <Link
              href="#"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex h-11 items-center justify-center gap-3 rounded-lg bg-amber-600 px-4 text-sm font-semibold text-white"
            >
              <span>Request A Demo</span>
              <ArrowUpRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}