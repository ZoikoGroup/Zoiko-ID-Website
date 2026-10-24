"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Shield, SlidersHorizontal } from "lucide-react";

interface CookieNoticeNextStepSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function CookieNoticeNextStepSection({
  view = "all",
}: CookieNoticeNextStepSectionProps) {
  const showMobile = view === "all" || view === "mobile";

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#071324]">
      {/* MOBILE VERSION (sm:hidden) - Extra element scoped strictly to mobile */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              17 · NEXT STEP
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['DM_Serif_Display'] text-[32px] font-normal leading-[1.15] text-white">
            Read, review or contact<br />the right team.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 font-['Manrope'] text-[13.5px] leading-relaxed text-[#94a3b8]">
            Legal and privacy questions go to their own routes. Cookie Settings opens once it is live.
          </p>

          {/* 3 Pills */}
          <div className="mt-6 flex flex-col items-start gap-2.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="/legal-privacy-terms-of-use"
                className="inline-flex items-center gap-2 rounded-full border border-[#1e2e48] bg-[#0c1a2e] px-4 py-2 font-['Manrope'] text-[12px] font-medium text-[#cbd5e1] hover:border-cyan-500/50 hover:text-white transition"
              >
                <FileText className="size-3.5 text-[#00bcd4]" />
                <span>Terms of use</span>
              </Link>

              <Link
                href="/legal-privacy-notice"
                className="inline-flex items-center gap-2 rounded-full border border-[#1e2e48] bg-[#0c1a2e] px-4 py-2 font-['Manrope'] text-[12px] font-medium text-[#cbd5e1] hover:border-cyan-500/50 hover:text-white transition"
              >
                <Shield className="size-3.5 text-[#00bcd4]" />
                <span>Privacy Notice</span>
              </Link>
            </div>

            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-[#1e2e48] bg-[#0c1a2e] px-4 py-2 font-['Manrope'] text-[12px] font-medium text-[#cbd5e1] hover:border-cyan-500/50 hover:text-white transition"
              >
                <SlidersHorizontal className="size-3.5 text-[#00bcd4]" />
                <span>Cookie Settings</span>
              </button>
            </div>
          </div>

          {/* Back to top button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center rounded-[8px] bg-white px-5 py-2.5 font-['Manrope'] text-[12.5px] font-bold text-[#0b1b33] shadow-sm hover:bg-slate-100 transition active:scale-[0.98]"
            >
              Back to top
            </button>
          </div>

          {/* Bottom 3D network cubes image */}
          <div className="mt-10 relative h-[380px] w-full overflow-hidden rounded-[24px] bg-black">
            <Image
              src="/Legal-Privacy-cookie-notice/cn22.jpg"
              alt="Connected cryptographic nodes"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
    </section>
  );
}
