import React from "react";
import { History, Archive } from "lucide-react";

interface CookieNoticeRevisionHistorySectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticeRevisionHistorySection({
  view = "all",
}: CookieNoticeRevisionHistorySectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-white border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
                <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
                  12 · NOTICE CHANGES AND HISTORY
                </span>
              </div>
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Each revision is kept
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                Superseded versions remain in an immutable archive, labelled as
                historic.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="mt-10 flex flex-col gap-6 max-w-[600px]">
              <div className="flex items-start gap-4">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                  <History className="size-[20px] stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    Current version
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[12.5px] text-[#64748b]">
                    Shown once approved.
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                    PENDING
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                  <Archive className="size-[20px] stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    Archive
                  </h3>
                  <p className="mt-0.5 font-['Manrope'] text-[12.5px] text-[#64748b]">
                    No earlier version exists in the approved record.
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-[#f1f5f9] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#64748b]">
                    NO ARCHIVE AVAILABLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              12 · NOTICE CHANGES AND HISTORY
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            Each revision is kept
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Superseded versions remain in an immutable archive, labelled as
            historic.
          </p>

          {/* Mobile Timeline */}
          <div className="relative mt-8 pl-1">
            {/* Item 1: Current version */}
            <div className="flex items-start gap-4">
              <div className="flex size-[44px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                <History className="size-[19px] stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                  Current version
                </h3>
                <p className="mt-0.5 font-['Manrope'] text-[12px] text-[#64748b]">
                  Shown once approved.
                </p>
                <div className="mt-1.5">
                  <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                    PENDING
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="ml-[21px] my-2 h-[34px] w-[2px] bg-[#e2e8f0]" />

            {/* Item 2: Archive */}
            <div className="flex items-start gap-4">
              <div className="flex size-[44px] shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                <Archive className="size-[19px] stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                  Archive
                </h3>
                <p className="mt-0.5 font-['Manrope'] text-[12px] text-[#64748b]">
                  No earlier version exists in the approved record.
                </p>
                <div className="mt-1.5">
                  <span className="inline-block rounded-full bg-[#f1f5f9] px-3 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#64748b]">
                    NO ARCHIVE AVAILABLE
                  </span>
                </div>
              </div>
            </div>

            {/* Continuation line */}
            <div className="ml-[21px] mt-2 h-[34px] w-[2px] bg-[#e2e8f0]" />
          </div>
        </div>
      )}
    </section>
  );
}
