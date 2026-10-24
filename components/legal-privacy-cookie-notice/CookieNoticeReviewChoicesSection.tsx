import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CookieNoticeReviewChoicesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticeReviewChoicesSection({
  view = "all",
}: CookieNoticeReviewChoicesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white border-t border-[#edf2f7] px-5 py-10 sm:px-6 sm:py-20 lg:px-[120px] lg:py-24">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block mx-auto w-full max-w-[1140px] rounded-[32px] bg-[#071426] p-10 lg:p-14 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
                <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
                  09 · CHOICES AND SETTINGS
                </span>
              </div>

              <h2 className="font-['DM_Serif_Display'] text-[38px] lg:text-[44px] font-normal leading-[1.15] text-white">
                Review your choices
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14px] lg:text-[14.5px] leading-relaxed text-[#cbd5e1] max-w-[540px]">
                Cookie Settings is the place to review and change optional
                choices. It is not a sales form, and it appears only when the
                approved preferences route exists.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="rounded-[12px] bg-[#e2e8f0] px-6 py-3.5 font-['Manrope'] text-[13.5px] font-bold text-[#0b1b33] cursor-not-allowed">
                  Review Cookie Settings (route pending)
                </span>
                <Link
                  href="/privacy-notice"
                  className="rounded-[12px] border border-slate-600 bg-transparent px-6 py-3.5 font-['Manrope'] text-[13.5px] font-bold text-white transition hover:border-slate-400 hover:bg-white/5"
                >
                  Read our Privacy Notice
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] h-[360px] rounded-[24px] overflow-hidden shadow-md">
                <Image
                  src="/Legal-Privacy-cookie-notice/cn15.png"
                  alt="Zoiko iD team member"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full rounded-[28px] bg-[#071426] p-6 text-white shadow-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              09 · CHOICES AND SETTINGS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-white">
            Review your choices
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13px] leading-relaxed text-[#cbd5e1]">
            Cookie Settings is the place to review and change optional choices.
            <br />
            It is not a sales form, and it appears only when the approved
            preferences route exists.
          </p>

          {/* 2 Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              disabled
              className="w-full rounded-[12px] bg-[#e2e8f0] py-3.5 px-4 text-center font-['Manrope'] text-[12.5px] font-bold text-[#0b1b33] cursor-not-allowed opacity-95"
            >
              Review Cookie Settings (route pending)
            </button>
            <Link
              href="/privacy-notice"
              className="w-full rounded-[12px] border border-slate-600 bg-transparent py-3.5 px-4 text-center font-['Manrope'] text-[12.5px] font-bold text-white transition hover:border-slate-400"
            >
              Read our Privacy Notice
            </Link>
          </div>

          {/* Bottom Image */}
          <div className="relative mt-7 w-full h-[320px] rounded-[20px] overflow-hidden">
            <Image
              src="/zoiko-tech-inc/mobile-entity-person.webp"
              alt="Zoiko iD team member"
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}
    </section>
  );
}
