"use client";

import React from "react";
import Image from "next/image";

interface FromRequestToEndSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const grantStates = [
  {
    title: "Requested",
    description: "Submitted, not yet in effect.",
    badge: "PENDING",
  },
  {
    title: "Validating",
    description: "Approver authority is being checked.",
    badge: "PENDING",
  },
  {
    title: "Active",
    description: "In effect, within its scope and period.",
    badge: "ACTIVE STATE",
  },
  {
    title: "Suspended",
    description: "Changed or paused, with a recorded reason.",
    badge: "RECORDED",
  },
  {
    title: "Expired or revoked",
    description: "Ended. Denied requests end here too.",
    badge: "TERMINAL",
  },
];

const mobileGrantStates = [
  {
    image: "/authorization-delegated-authority/ada28.jpg",
    title: "Requested",
    description: "Submitted, not yet in effect.",
    badge: "PENDING",
  },
  {
    image: "/authorization-delegated-authority/ada29.jpg",
    title: "Validating",
    description: "Sponsor and authority is being checked.",
    badge: "PENDING",
  },
  {
    image: "/authorization-delegated-authority/ada30.jpg",
    title: "Active",
    description: "In effect, within its scope and period.",
    badge: "ACTIVE STATE",
  },
  {
    image: "/authorization-delegated-authority/ada31.jpg",
    title: "Amended or suspended",
    description: "Changed or paused, with a recorded reason.",
    badge: "RECORDED",
  },
  {
    image: "/authorization-delegated-authority/ada32.jpg",
    title: "Expired or revoked",
    description: "Ended. Cannot reopen; a new form is required.",
    badge: "TERMINAL",
  },
];

export default function FromRequestToEndSection({
  view = "all",
}: FromRequestToEndSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-[#f8fafc] py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                From request to end
              </h2>
              <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.65] text-[#5b6b82] max-w-[620px]">
                A grant moves through clear states. Pending is kept separate from active, and no step
                promises a turnaround time or automatic approval.
              </p>
            </div>

            {/* 5 Cards Row */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {grantStates.map((state) => (
                <div
                  key={state.title}
                  className="flex flex-col justify-between rounded-[20px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition"
                >
                  <div>
                    <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {state.title}
                    </h3>
                    <p className="mt-2 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                      {state.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#b45309] uppercase">
                      {state.badge}
                    </span>
                  </div>
                </div>
              ))}
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
              07 · GRANT LIFECYCLE
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            From request to end
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            A grant moves through clear states. Pending is kept separate from active, and no step promises a turnaround time or automatic approval.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {mobileGrantStates.map((state) => (
              <div
                key={state.title}
                className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden shadow-sm"
              >
                <div className="relative h-[155px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={state.image}
                    alt={state.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col">
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {state.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                    {state.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#b45309] uppercase">
                      {state.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
