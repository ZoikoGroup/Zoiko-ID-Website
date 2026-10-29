"use client";

import React from "react";
import Image from "next/image";

interface AuthenticationNotPermissionSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const tiles = [
  {
    image: "/authorization-delegated-authority/ada3.png",
    eyebrow: "WHO ARE YOU?",
    title: "Authentication",
    description:
      "Establishes or evaluates who or what an actor is. It does not grant permission to act.",
  },
  {
    image: "/authorization-delegated-authority/ada4.png",
    eyebrow: "WHO DO YOU REPRESENT?",
    title: "Organization relationship",
    description:
      "Shows that a person represents an organization. This is separate from any single transaction.",
  },
  {
    image: "/authorization-delegated-authority/ada5.png",
    eyebrow: "WHAT WERE YOU GIVEN?",
    title: "Delegated authority",
    description:
      "A bounded grant for a stated purpose, scope and duration, from an authorized principal.",
  },
  {
    image: "/authorization-delegated-authority/ada6.png",
    eyebrow: "MAY YOU ACT NOW?",
    title: "Policy decision",
    description:
      "Allow, deny, step-up or indeterminate, based on current policy, grant and context.",
  },
];

const mobileTiles = [
  {
    image: "/authorization-delegated-authority/ada22.jpg",
    eyebrow: "WHO ARE YOU?",
    title: "Authentication",
    description:
      "Establishes or evaluates who or what an actor is. It does not grant permission to act.",
  },
  {
    image: "/authorization-delegated-authority/ada23.jpg",
    eyebrow: "WHO DO YOU REPRESENT?",
    title: "Organization relationship",
    description:
      "Shows that a person represents an organization. This is separate from any single transaction.",
  },
  {
    image: "/authorization-delegated-authority/ada24.jpg",
    eyebrow: "WHAT WERE YOU GIVEN?",
    title: "Delegated authority",
    description:
      "A bounded grant for a stated purpose, scope and duration, from an authorized principal.",
  },
  {
    image: "/authorization-delegated-authority/ada25.jpg",
    eyebrow: "MAY YOU ACT NOW?",
    title: "Policy decision",
    description:
      "Allow, deny, step up or indeterminate, based on current policy, grant and context.",
  },
];

export default function AuthenticationNotPermissionSection({
  view = "all",
}: AuthenticationNotPermissionSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-20 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Section Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Authentication is not permission
              </h2>
              <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.65] text-[#5b6b82] max-w-[620px]">
                Four tiles, one idea each. A person can be fully verified and still lack authority for a
                given action. Read each tile, then compare how the concepts relate.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiles.map((tile) => (
                <div
                  key={tile.title}
                  className="rounded-[22px] border border-[#e2e8f0] bg-white overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
                >
                  <div className="relative h-[165px] w-full overflow-hidden">
                    <Image
                      src={tile.image}
                      alt={tile.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-5 lg:p-5.5 flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-['Manrope'] text-[10.5px] font-bold tracking-[0.14em] text-[#00bcd4] uppercase">
                        {tile.eyebrow}
                      </span>
                      <h3 className="mt-2 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                        {tile.title}
                      </h3>
                      <p className="mt-2 font-['Manrope'] text-[12px] leading-[1.65] text-[#64748b]">
                        {tile.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              04 · FOUR CONCEPTS, KEPT APART
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Authentication is not permission
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Four tiles, one idea each. A person can be fully verified and still lack authority for a given action. Read each tile, then compare how the concepts relate.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {mobileTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden shadow-sm"
              >
                <div className="relative h-[155px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="font-['Manrope'] text-[10px] font-bold tracking-wider text-[#00bcd4] uppercase">
                    {tile.eyebrow}
                  </span>
                  <h3 className="mt-1.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {tile.title}
                  </h3>
                  <p className="mt-1.5 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                    {tile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
