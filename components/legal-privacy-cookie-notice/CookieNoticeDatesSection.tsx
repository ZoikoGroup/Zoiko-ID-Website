import React from "react";
import Image from "next/image";
import { Clock, FileText } from "lucide-react";

interface CookieNoticeDatesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticeDatesSection({
  view = "all",
}: CookieNoticeDatesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-[#f8fafc] border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Section Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Effective and revised dates are verified values
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                Each value is filled from the approved record. A missing value
                blocks publication rather than being estimated.
              </p>
            </div>

            {/* Content: Image Left, 2 Cards Right */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: cn3.png with calendar on laptop */}
              <div className="lg:col-span-6">
                <div className="relative w-full h-[380px] lg:h-[420px] rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-sm">
                  <Image
                    src="/Legal-Privacy-cookie-notice/cn3.png"
                    alt="Colleagues reviewing calendar dates on laptop"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: 2 Cards */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                {/* Card 1: Effective date (Teal/Cyan Border) */}
                <div className="rounded-[20px] border-[1.5px] border-[#0891b2] bg-white p-6 lg:p-7 shadow-sm transition hover:shadow-md">
                  <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Clock className="size-[20px] stroke-[1.8]" />
                  </div>

                  <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    Effective date
                  </h3>

                  <p className="mt-1 font-['Manrope'] text-[12.5px] text-[#64748b]">
                    Approved by Legal .
                  </p>

                  <div className="my-4 border-b border-slate-100" />

                  <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                    PENDING LEGAL
                  </span>
                </div>

                {/* Card 2: Last revised and locale (Purple/Violet Border) */}
                <div className="rounded-[20px] border-[1.5px] border-[#8b5cf6] bg-white p-6 lg:p-7 shadow-sm transition hover:shadow-md">
                  <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <FileText className="size-[20px] stroke-[1.8]" />
                  </div>

                  <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    Last revised and locale
                  </h3>

                  <p className="mt-1 font-['Manrope'] text-[12.5px] text-[#64748b]">
                    Revision ID and locale from the record.
                  </p>

                  <div className="my-4 border-b border-slate-100" />

                  <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                    PENDING LEGAL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-[#f8fafc]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              04 · NOTICE METADATA
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] text-[#0b1b33]">
            Effective and revised
            <br />
            dates
            <br />
            are verified values
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Each value is filled from the approved record. A missing value blocks
            publication rather than being estimated.
          </p>

          {/* 5 Stacked Images */}
          <div className="mt-6 flex flex-col gap-3.5">
            <div className="relative h-[165px] w-full rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src="/zoiko-tech-inc/mobile-entity-office.webp"
                alt="Modern office architectural corridor"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-[165px] w-full rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src="/zoiko-tech-inc/mobile-entity-team.webp"
                alt="Colleagues collaborating over laptop at wooden desk"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-[165px] w-full rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src="/zoiko-tech-inc/mobile-entity-person.webp"
                alt="Professional smiling team member portrait"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-[165px] w-full rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src="/legal-privacy-terms-of-use/mobile-gate-meeting-5dd32a.png"
                alt="Team holding meeting in conference room"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-[165px] w-full rounded-[16px] overflow-hidden shadow-sm">
              <Image
                src="/Legal-Privacy-cookie-notice/cn10.jpg"
                alt="Professional working on modern blue tablet laptop"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* 2 Metadata Cards */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="rounded-[18px] border-[1.5px] border-[#0891b2] bg-white p-5 shadow-sm">
              <div className="flex size-[36px] items-center justify-center rounded-[8px] bg-[#e6f4f8] text-[#0891b2]">
                <Clock className="size-[18px] stroke-[1.8]" />
              </div>
              <h3 className="mt-3.5 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                Effective date
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                Approved by Legal .
              </p>
              <div className="my-4 border-b border-slate-100" />
              <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                PENDING LEGAL
              </span>
            </div>

            <div className="rounded-[18px] border-[1.5px] border-[#8b5cf6] bg-white p-5 shadow-sm">
              <div className="flex size-[36px] items-center justify-center rounded-[8px] bg-[#e6f4f8] text-[#0891b2]">
                <FileText className="size-[18px] stroke-[1.8]" />
              </div>
              <h3 className="mt-3.5 font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                Last revised and locale
              </h3>
              <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                Revision ID and locale from the record.
              </p>
              <div className="my-4 border-b border-slate-100" />
              <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                PENDING LEGAL
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
