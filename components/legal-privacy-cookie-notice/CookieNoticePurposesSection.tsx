import React from "react";
import { ShieldCheck, Sliders } from "lucide-react";

interface CookieNoticePurposesSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticePurposesSection({
  view = "all",
}: CookieNoticePurposesSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full bg-[#f8fafc] border-t border-[#edf2f7]">
      {/* DESKTOP VERSION */}
      {showDesktop && (
        <div className="hidden sm:block w-full px-6 py-20 lg:px-[120px] lg:py-24">
          <div className="mx-auto w-full max-w-[1140px]">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Necessary and optional are never blurred
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                Each category is shown only when it is present in the approved
                registry. Optional choices are offered with equal clarity to
                acceptance.
              </p>
            </div>

            {/* 2 Purpose Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Strictly necessary (Teal/Cyan Border) */}
              <div className="rounded-[20px] border-[1.5px] border-[#0891b2] bg-white p-7 lg:p-8 shadow-sm transition hover:shadow-md">
                <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <ShieldCheck className="size-[22px] stroke-[1.8]" />
                </div>

                <h3 className="mt-5 font-['DM_Serif_Display'] text-[22px] font-normal tracking-tight text-[#0b1b33]">
                  Strictly necessary
                </h3>

                <p className="mt-2 font-['Manrope'] text-[13px] leading-relaxed text-[#64748b]">
                  Only the functions the registry confirms are required for the
                  site to work.
                </p>

                <div className="my-5 border-b border-slate-100" />

                <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                  REGISTRY PENDING
                </span>
              </div>

              {/* Card 2: Optional purposes (Violet/Purple Border) */}
              <div className="rounded-[20px] border-[1.5px] border-[#8b5cf6] bg-white p-7 lg:p-8 shadow-sm transition hover:shadow-md">
                <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                  <Sliders className="size-[20px] stroke-[1.8]" />
                </div>

                <h3 className="mt-5 font-['DM_Serif_Display'] text-[22px] font-normal tracking-tight text-[#0b1b33]">
                  Optional purposes
                </h3>

                <p className="mt-2 font-['Manrope'] text-[13px] leading-relaxed text-[#64748b]">
                  Preferences, analytics or marketing, shown only where verified
                  and only with a working choice.
                </p>

                <div className="my-5 border-b border-slate-100" />

                <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                  REGISTRY PENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12 bg-[#f8fafc] border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              06 · NECESSARY AND OPTIONAL
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] text-[#0b1b33]">
            Necessary and optional
            <br />
            are
            <br />
            never blurred
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Each category is shown only when it is present in the approved
            registry. Optional choices are offered with equal clarity to
            acceptance.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: Strictly necessary */}
            <div className="rounded-[18px] border-[1.5px] border-[#0891b2] bg-white p-5 shadow-sm">
              <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                <ShieldCheck className="size-[20px] stroke-[1.8]" />
              </div>
              <h3 className="mt-3.5 font-['DM_Serif_Display'] text-[20px] font-normal text-[#0b1b33]">
                Strictly necessary
              </h3>
              <p className="mt-2 font-['Manrope'] text-[12.5px] leading-relaxed text-[#64748b]">
                Only the functions the registry confirms are required for the
                site to work.
              </p>
              <div className="my-4 border-b border-slate-100" />
              <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                REGISTRY PENDING
              </span>
            </div>

            {/* Card 2: Optional purposes */}
            <div className="rounded-[18px] border-[1.5px] border-[#8b5cf6] bg-white p-5 shadow-sm">
              <div className="flex size-[40px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                <Sliders className="size-[19px] stroke-[1.8]" />
              </div>
              <h3 className="mt-3.5 font-['DM_Serif_Display'] text-[20px] font-normal text-[#0b1b33]">
                Optional purposes
              </h3>
              <p className="mt-2 font-['Manrope'] text-[12.5px] leading-relaxed text-[#64748b]">
                Preferences, analytics or marketing, shown only where verified
                and only with a working choice.
              </p>
              <div className="my-4 border-b border-slate-100" />
              <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                REGISTRY PENDING
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
