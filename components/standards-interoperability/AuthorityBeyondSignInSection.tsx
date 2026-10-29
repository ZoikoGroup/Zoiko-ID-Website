"use client";

import React from "react";
import Image from "next/image";

interface AuthorityBeyondSignInSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function AuthorityBeyondSignInSection({
  view = "all",
}: AuthorityBeyondSignInSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="authority-beyond-signin-desktop"
          className="hidden sm:block relative w-full bg-white py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading and Description */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  Authority and<br />
                  revocation sit beyond<br />
                  sign-in
                </h2>

                <p className="mt-5 font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  Sign-in establishes who an actor is. Authority decides what it may do,
                  and trust signals can change that decision later. Each of these is a
                  separate capability with its own status.
                </p>
              </div>

              {/* Right Column: Image hsi13.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[380px] sm:h-[420px] lg:h-[460px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-900">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi13.png"
                    alt="Executive signing bounded authority and revocation agreement"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="authority-beyond-signin-mobile"
          className="sm:hidden relative w-full bg-white px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              06 · AUTHORITY AND TRUST SIGNALS
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Authority and revocation sit beyond sign-in
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Sign-in establishes who an actor is. Authority decides what it may do,
            and trust signals can change that decision later. Each of these is a
            separate capability with its own status.
          </p>

          {/* 2 Badges */}
          <div className="mt-5 flex flex-col items-start gap-2.5">
            <div className="rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-blue-700 uppercase">
              AUTHORITY: SEE DELEGATED AUTHORITY
            </div>
            <div className="rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-blue-700 uppercase">
              REVOCATION: SEE CONTINUOUS TRUST
            </div>
          </div>

          {/* Bottom Image: hsi32.jpg */}
          <div className="mt-7 relative w-full aspect-[4/3.2] max-h-[340px] overflow-hidden rounded-[24px] shadow-sm border border-slate-200/80 bg-slate-900">
            <Image
              src="/header-Platform-standards-interoperability/hsi32.jpg"
              alt="Person using phone and laptop reviewing trust signals"
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
