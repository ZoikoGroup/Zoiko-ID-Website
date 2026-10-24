import React from "react";
import { AlertTriangle } from "lucide-react";

interface CookieNoticePublicationBlockedSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticePublicationBlockedSection({
  view = "all",
}: CookieNoticePublicationBlockedSectionProps) {
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
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Publication is blocked
              </h2>
            </div>

            {/* Blocked Alert Banner */}
            <div className="mt-8 flex items-center gap-5 rounded-[20px] border border-[#fecaca] bg-[#fef2f2] p-6 lg:p-7 shadow-sm">
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#fee2e2] text-[#ef4444]">
                <AlertTriangle className="size-[22px] stroke-[2]" />
              </div>

              <p className="font-['Manrope'] text-[13.5px] lg:text-[14px] leading-relaxed text-[#991b1b]">
                <strong className="font-bold text-[#991b1b]">
                  Build allowed. Publication prohibited.
                </strong>{" "}
                <span className="font-normal text-[#991b1b]">
                  This page may be built for review. It must not be published
                  until the inventory is verified, Legal approves the text,
                  Cookie Settings works, and the Privacy Notice is approved
                  first.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              16 · PUBLICATION GATE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            Publication is blocked
          </h2>

          <div className="mt-6 flex items-start gap-3.5 rounded-[20px] border border-[#fecdd3] bg-[#fff1f2] p-5 shadow-sm">
            <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#ffe4e6] text-[#e11d48]">
              <AlertTriangle className="size-[19px] stroke-[2]" />
            </div>

            <p className="font-['Manrope'] text-[12.5px] leading-relaxed text-[#9f1239]">
              <strong className="font-bold text-[#9f1239]">
                Build allowed. Publication prohibited.
              </strong>{" "}
              <span className="font-normal text-[#9f1239]">
                This page may be built for review. It must not be published until
                the inventory is verified, Legal approves the text, Cookie
                Settings works, and the Privacy Notice is approved first.
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
