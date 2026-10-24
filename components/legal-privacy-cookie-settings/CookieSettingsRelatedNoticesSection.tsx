"use client";

import React from "react";
import Link from "next/link";
import { FileText, Lock, MessageSquare } from "lucide-react";

interface CookieSettingsRelatedNoticesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const notices = [
  {
    icon: FileText,
    title: "Cookie Notice",
    description: "Explains the technologies in use.",
    badge: "APPROVAL PENDING",
    href: "/legal-privacy-cookie-notice",
  },
  {
    icon: Lock,
    title: "Privacy Notice",
    description: "Explains personal data handling.",
    badge: "APPROVAL PENDING",
    href: "/privacy-notice",
  },
  {
    icon: FileText,
    title: "Terms of Use",
    description: "Governs use of the website and services.",
    badge: "APPROVED AND LOCKED",
    href: "/legal-privacy-terms-of-use",
  },
  {
    icon: MessageSquare,
    title: "Contact and Help & Support",
    description: "For questions that are not answered here.",
    badge: "ROUTE PENDING",
    href: "/help-support",
  },
];

export default function CookieSettingsRelatedNoticesSection({
  view = "all",
}: CookieSettingsRelatedNoticesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* DESKTOP VERSION (LOCKED - DO NOT ALTER) */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-14 sm:py-16 lg:py-20 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Read the notices alongside this page
              </h2>
              <p className="mt-3.5 max-w-[680px] font-['Manrope'] text-[13.5px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                Cookie Settings sets your choices. The Cookie Notice explains the technologies. The
                Privacy Notice explains personal data handling.
              </p>
            </div>

            {/* 2x2 Notices Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
              {notices.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-start justify-between gap-4 rounded-[18px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-md"
                  >
                    {/* Left Side: Icon + Text */}
                    <div className="flex items-start gap-4">
                      <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2] transition group-hover:scale-105">
                        <Icon className="size-[19px] stroke-[1.8]" />
                      </div>

                      <div>
                        <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33] transition group-hover:text-blue-600">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 font-['Manrope'] text-[12px] text-[#64748b]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Badge */}
                    <div className="shrink-0">
                      <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                        {item.badge}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* MOBILE VERSION (MATCHING SCREENSHOT 11) */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-5 pt-8 pb-10 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#00bcd4] uppercase">
              11 · RELATED NOTICES
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Read the notices</span>
            <span className="block">alongside</span>
            <span className="block">this page</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[12.5px] leading-[1.65] text-[#5b6b82]">
            Cookie Settings sets your choices. The Cookie Notice explains the technologies. The Privacy Notice explains personal data handling.
          </p>

          {/* 4 Stacked Notice Cards */}
          <div className="mt-5 flex flex-col gap-3.5">
            {notices.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3.5 rounded-[16px] border border-[#edf2f7] bg-white p-4 shadow-sm"
                >
                  {/* Left Icon */}
                  <div className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#e0f7fa] text-[#00bcd4]">
                    <Icon className="size-4 stroke-[1.8]" />
                  </div>

                  {/* Right Details */}
                  <div className="flex-1">
                    <h3 className="font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[11px] text-[#64748b]">
                      {item.description}
                    </p>
                    <div className="mt-2">
                      <span className="inline-block rounded-[5px] bg-[#fef3c7] px-2 py-0.5 font-['Manrope'] text-[9px] font-bold tracking-wider text-[#b45309] uppercase">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
