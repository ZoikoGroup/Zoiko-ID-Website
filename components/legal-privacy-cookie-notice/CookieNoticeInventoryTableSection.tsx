import React from "react";

interface CookieNoticeInventoryTableSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticeInventoryTableSection({
  view = "all",
}: CookieNoticeInventoryTableSectionProps) {
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
                  08 · DETAILED INVENTORY
                </span>
              </div>
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                The inventory table
              </h2>
              <p className="mt-3 max-w-[700px] font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.6] text-[#5b6b82]">
                Each row carries name, provider, purpose, storage type,
                duration, party, classification, evidence and review date. The
                table fails closed while the registry is empty.
              </p>
            </div>

            {/* Inventory Table Container */}
            <div className="mt-10 overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm">
              <div className="grid grid-cols-4 bg-[#f1f5f9] px-6 py-4 font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                <div>Name</div>
                <div>Provider</div>
                <div>Purpose</div>
                <div>Storage type</div>
              </div>
              <div className="p-12 text-center">
                <p className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                  No verified entries. Publication is blocked.
                </p>
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
              08 · DETAILED INVENTORY
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-[#0b1b33]">
            The inventory table
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#5b6b82]">
            Each row carries name, provider, purpose, storage type, duration,
            party, classification, evidence and review date. The table fails
            closed while the registry is empty.
          </p>

          {/* Mobile Table Card */}
          <div className="mt-7 overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white shadow-sm">
            <div className="grid grid-cols-4 gap-1 bg-[#f1f5f9] px-4 py-3 font-['Manrope'] text-[11.5px] font-bold text-[#0b1b33]">
              <div>Name</div>
              <div>Provider</div>
              <div>Purpose</div>
              <div>Storage type</div>
            </div>

            <div className="p-8 text-center">
              <p className="font-['Manrope'] text-[13px] font-bold text-[#0b1b33]">
                No verified entries. Publication is blocked.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
