"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";

interface DelegatedAuthorityNextStepSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function DelegatedAuthorityNextStepSection({
  view = "all",
}: DelegatedAuthorityNextStepSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-[2px] bg-[#00bcd4]" />
                  <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
                    20 · NEXT STEP
                  </span>
                </div>

                <p className="mt-5 font-['Manrope'] text-[15px] sm:text-[16px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Continuous trust explains how authority responds to change. The Trust Center holds
                  assurance material, and Contact handles questions the model does not answer.
                </p>

                <div className="mt-6 flex items-center gap-6">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-['Manrope'] text-[14px] font-semibold text-[#00bcd4] hover:text-[#0891b2] transition-colors"
                  >
                    <ShieldCheck className="size-4.5 stroke-[2]" />
                    <span>Trust Center</span>
                  </Link>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 font-['Manrope'] text-[14px] font-semibold text-[#00bcd4] hover:text-[#0891b2] transition-colors"
                  >
                    <Mail className="size-4.5 stroke-[2]" />
                    <span>Contact</span>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[420px] lg:h-[460px] w-full max-w-[520px] overflow-hidden rounded-[28px] bg-black shadow-lg">
                  <Image
                    src="/authorization-delegated-authority/ada46.jpg"
                    alt="3D isometric network nodes and security grid"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section className="sm:hidden relative w-full bg-white px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              20 · NEXT STEP
            </span>
          </div>

          {/* Copy */}
          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Continuous trust explains how authority responds to change. The Trust Center holds assurance material, and Contact handles questions the model does not answer.
          </p>

          {/* Links */}
          <div className="mt-5 flex items-center gap-6">
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-['Manrope'] text-[13px] font-semibold text-[#00bcd4]"
            >
              <ShieldCheck className="size-4 stroke-[2]" />
              <span>Trust Center</span>
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-['Manrope'] text-[13px] font-semibold text-[#00bcd4]"
            >
              <Mail className="size-4 stroke-[2]" />
              <span>Contact</span>
            </Link>
          </div>

          {/* 3D Network Image */}
          <div className="mt-6 relative h-[260px] w-full overflow-hidden rounded-[22px] bg-black shadow-md">
            <Image
              src="/authorization-delegated-authority/ada46.jpg"
              alt="3D security network cubes"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </section>
      )}
    </>
  );
}
