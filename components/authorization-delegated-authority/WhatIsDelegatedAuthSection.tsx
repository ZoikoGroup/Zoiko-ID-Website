"use client";

import React from "react";
import Image from "next/image";

interface WhatIsDelegatedAuthSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function WhatIsDelegatedAuthSection({
  view = "all",
}: WhatIsDelegatedAuthSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Headings and Terms */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[38px] sm:text-[44px] lg:text-[48px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  What is delegated<br />authorization?
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] lg:text-[15px] font-normal leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Delegated authorization is an access decision based on the current actor, the action,
                  the target, the context and a valid authority grant. Being recognized is not enough:
                  the actor also needs authority for that specific action.
                </p>

                {/* Key terms subsection */}
                <div className="mt-8 lg:mt-10">
                  <h3
                    className="font-dm-serif font-['DM_Serif_Display'] text-[21px] lg:text-[23px] font-normal text-[#0b1b33]"
                    style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                  >
                    Key terms, in one place
                  </h3>

                  <p className="mt-3 font-['Manrope'] text-[13.5px] lg:text-[14px] font-normal leading-[1.7] text-[#5b6b82] max-w-[490px]">
                    An <strong className="font-semibold text-[#0b1b33]">actor</strong> is who or what is acting.
                    A <strong className="font-semibold text-[#0b1b33]">principal</strong> is who the authority comes
                    from. A <strong className="font-semibold text-[#0b1b33]">grant</strong> is the bounded permission
                    that links them. A <strong className="font-semibold text-[#0b1b33]">decision</strong> is the result of
                    checking that grant against the request at a given time.
                  </p>
                </div>
              </div>

              {/* Right Column: Stamping Contract Visual */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[440px] lg:h-[470px] w-full max-w-[520px] overflow-hidden rounded-[28px] shadow-sm">
                  <Image
                    src="/authorization-delegated-authority/ada2.png"
                    alt="Business professional applying a stamp to a contract on a wooden table"
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
        <section className="sm:hidden relative w-full bg-[#f4f6fa] px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              03 · DIRECT ANSWER
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            What is delegated<br />authorization?
          </h2>

          <p className="mt-3.5 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Delegated authorization is an access decision based on the current actor, the action, the target, the context and a valid authority grant. Being recognized is not enough: the actor also needs authority for that specific action.
          </p>

          <div className="mt-6">
            <h3
              className="font-dm-serif font-['DM_Serif_Display'] text-[19px] font-normal text-[#0b1b33]"
              style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
            >
              Key terms, in one place
            </h3>
            <p className="mt-2.5 font-['Manrope'] text-[12.5px] leading-[1.65] text-[#5b6b82]">
              An <strong className="font-semibold text-[#0b1b33]">actor</strong> is who or what is acting. A <strong className="font-semibold text-[#0b1b33]">principal</strong> is who the authority comes from. A <strong className="font-semibold text-[#0b1b33]">grant</strong> is the bounded permission that links them. A <strong className="font-semibold text-[#0b1b33]">decision</strong> is the result of checking that grant against the request at a given time.
            </p>
          </div>

          <div className="mt-4">
            <span className="inline-block rounded-full bg-[#f3e8ff] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#7c3aed] uppercase">
              ILLUSTRATIVE
            </span>
          </div>

          <div className="mt-5 relative h-[290px] w-full overflow-hidden rounded-[22px] shadow-sm">
            <Image
              src="/authorization-delegated-authority/ada21.jpg"
              alt="Portrait of an authenticated actor"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover object-top"
            />
          </div>
        </section>
      )}
    </>
  );
}
