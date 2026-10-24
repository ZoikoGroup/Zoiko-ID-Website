import React from "react";
import { Building2, Globe, FileText, MousePointerClick } from "lucide-react";

interface CookieNoticeVendorsTransfersSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const vendorFields = [
  {
    icon: Building2,
    title: "Provider",
    description: "Name from the vendor inventory.",
  },
  {
    icon: Globe,
    title: "Jurisdiction",
    description: "Only with approved transfer terms.",
  },
  {
    icon: FileText,
    title: "Official notice",
    description: "Validated HTTPS destination.",
  },
  {
    icon: MousePointerClick,
    title: "Purpose",
    description: "Shown only when confirmed.",
  },
];

export default function CookieNoticeVendorsTransfersSection({
  view = "all",
}: CookieNoticeVendorsTransfersSectionProps) {
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
                Vendors and transfers
              </h2>
              <p className="mt-3 max-w-[620px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                Provider links appear only for approved vendors, with the
                official privacy disclosure for each.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vendorFields.map((field) => {
                const Icon = field.icon;
                return (
                  <div
                    key={field.title}
                    className="flex flex-col justify-between rounded-[20px] border border-[#e2e8f0] bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300"
                  >
                    <div>
                      <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                        <Icon className="size-[19px] stroke-[1.8]" />
                      </div>

                      <h3 className="mt-4 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {field.title}
                      </h3>

                      <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                        {field.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-0.5 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                        PENDING
                      </span>
                    </div>
                  </div>
                );
              })}
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
              11 · THIRD PARTIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            Vendors and transfers
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Provider links appear only for approved vendors, with the official
            privacy disclosure for each.
          </p>

          {/* 4 Cards Stacked Vertically */}
          <div className="mt-7 flex flex-col gap-4">
            {vendorFields.map((field) => {
              const Icon = field.icon;
              return (
                <div
                  key={field.title}
                  className="rounded-[18px] border border-[#e2e8f0] bg-white p-5 shadow-sm flex flex-col items-start"
                >
                  <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                    <Icon className="size-[18px] stroke-[1.8]" />
                  </div>

                  <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {field.title}
                  </h3>

                  <p className="mt-1 font-['Manrope'] text-[12px] text-[#64748b]">
                    {field.description}
                  </p>

                  <div className="mt-3.5">
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                      PENDING
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
