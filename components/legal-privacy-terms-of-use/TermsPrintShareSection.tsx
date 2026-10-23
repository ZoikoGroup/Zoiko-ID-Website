"use client";

import React, { useState } from "react";

interface SectionProps {
  view?: "desktop" | "mobile";
}

export default function TermsPrintShareSection({ view }: SectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (view === "mobile") {
    return (
      <section id="print-share" className="w-full border-b border-[#D9E1EC] bg-[#F8FAFC] px-[22px] py-[60px]">
        <div className="flex flex-col gap-[36px]">
          {/* Aside - Print and share Card */}
          <div className="flex flex-col gap-2 rounded-[14px] border border-[#D9E1EC] bg-white p-[22px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Print and share
            </span>
          </div>

          {/* Section 06 Content */}
          <div className="flex flex-col">
            <span className="font-['DM_Serif_Display'] text-[14px] tracking-[0.12em] text-[#0891B2]">
              06
            </span>
            <div className="pb-[0.83px] pt-[9px]">
              <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[35.84px] text-[#0B1B33]">
                Print, copy and share
              </h2>
            </div>
            <div className="pt-[17px]">
              <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
                The printed version keeps the title,
                <br />
                publisher, dates, clause numbers and links.
                <br />
                A direct link to this page can be copied. No
                <br />
                download is offered until an approved file
                <br />
                matches the current version.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3.5 pt-[19px]">
              <button
                disabled
                className="flex items-center justify-center rounded-[8px] bg-[#E2E8F0] px-6 py-3.5 font-['Manrope'] text-[15px] font-bold leading-[25.5px] text-[#64748B] cursor-not-allowed"
              >
                Download PDF (not available)
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center rounded-[8px] border border-[#0B1B33] bg-transparent px-6 py-3.5 font-['Manrope'] text-[15px] font-bold leading-[25.5px] text-[#0B1B33] transition-colors hover:bg-[#0B1B33] hover:text-white"
              >
                {copied ? "Link copied!" : "Copy direct link"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section id="print-share" className="w-full bg-[#F8FAFC] px-8 lg:px-[160px] py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] justify-center gap-[90px]">
        {/* Left Column: Aside */}
        <aside className="w-[260px] shrink-0">
          <div className="sticky top-28 flex flex-col pb-[14px]">
            <span className="font-['Manrope'] text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#5B6B82]">
              Print and share
            </span>
          </div>
        </aside>

        {/* Right Column: Content */}
        <div className="flex w-[770px] flex-col gap-[9px]">
          <h2 className="font-['DM_Serif_Display'] text-[52px] font-normal leading-[58.24px] text-[#0B1B33]">
            Print, copy and share
          </h2>
          <div className="pt-[17px]">
            <p className="font-['Manrope'] text-[18px] font-normal leading-[30.6px] text-[#5B6B82]">
              The printed version keeps the title, publisher, dates, clause numbers and links. A direct link to
              <br />
              this page can be copied. No download is offered until an approved file matches the current
              <br />
              version.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-[14px] pt-[19px]">
            <button
              disabled
              className="flex items-center justify-center rounded-[8px] bg-[#E2E8F0] px-6 py-3.5 font-['Manrope'] text-[15px] font-bold leading-[25.5px] text-[#64748B] cursor-not-allowed"
            >
              Download PDF (not available)
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center rounded-[8px] border border-[#0B1B33] bg-transparent px-6 py-3.5 font-['Manrope'] text-[15px] font-bold leading-[25.5px] text-[#0B1B33] transition-colors hover:bg-[#0B1B33] hover:text-white"
            >
              {copied ? "Link copied!" : "Copy direct link"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
