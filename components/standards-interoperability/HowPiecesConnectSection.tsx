"use client";

import React from "react";
import Image from "next/image";
import { Building2, Shield, CornerDownRight } from "lucide-react";

interface HowPiecesConnectSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const connectionSteps = [
  {
    icon: Building2,
    title: "Your identity provider",
    description: "Holds its role. Remains the source for what it already owns.",
  },
  {
    icon: Shield,
    title: "Zoiko iD trust layer",
    description: "Receives context, evaluates authority and records evidence.",
  },
  {
    icon: CornerDownRight,
    title: "Your applications",
    description: "Ask for decisions and act on them.",
  },
];

export default function HowPiecesConnectSection({
  view = "all",
}: HowPiecesConnectSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="how-pieces-connect-desktop"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Heading, Description, and 3 Steps */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2
                  className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[40px] lg:text-[46px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
                  style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
                >
                  How the pieces<br />
                  connect, in plain text
                </h2>

                <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[500px]">
                  The diagram is shown as an ordered list, which is equivalent to the visual.
                  Each node states its responsibility and the direction of each connection.
                </p>

                {/* 3 Step Cards */}
                <div className="mt-8 flex flex-col gap-3.5 max-w-[500px]">
                  {connectionSteps.map((step) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={step.title}
                        className="flex items-start gap-4 rounded-[16px] border border-slate-200/80 bg-white p-4.5 shadow-2xs transition hover:border-slate-300"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mt-0.5 shadow-2xs">
                          <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                            {step.title}
                          </h3>
                          <p className="mt-0.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Image hsi14.png */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative h-[420px] sm:h-[460px] lg:h-[500px] w-full max-w-[500px] overflow-hidden rounded-[26px] shadow-md border border-slate-200/80 bg-slate-100">
                  <Image
                    src="/header-Platform-standards-interoperability/hsi14.png"
                    alt="Team mapping identity connections and Zoiko trust layer on glass board"
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
          id="how-pieces-connect-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              07 · REFERENCE ARCHITECTURE
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            How the pieces connect, in plain text
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            The diagram is shown as an ordered list, which is equivalent to the
            visual. Each node states its responsibility and the direction of each
            connection.
          </p>

          <div className="mt-7 flex flex-col gap-3.5">
            {connectionSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex items-start gap-3.5 rounded-[16px] border border-slate-200/80 bg-white p-4 shadow-2xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mt-0.5">
                    <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-['Manrope'] text-[14.5px] font-bold text-[#0b1b33]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Image: hsi33.jpg */}
          <div className="mt-7 relative w-full aspect-[4/3.2] max-h-[340px] overflow-hidden rounded-[24px] shadow-sm border border-slate-200/80 bg-slate-900">
            <Image
              src="/header-Platform-standards-interoperability/hsi33.jpg"
              alt="Global reference architecture interconnected network"
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
