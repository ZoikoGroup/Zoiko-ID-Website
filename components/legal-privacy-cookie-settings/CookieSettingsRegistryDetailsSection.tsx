"use client";

import React from "react";
import Image from "next/image";
import { FileText, Clock, GitFork } from "lucide-react";

interface CookieSettingsRegistryDetailsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const registryCards = [
  {
    image: "/Legal-Privacy-cookie-settings/cs3.png",
    alt: "Person reviewing and organizing document files on a wooden table",
    icon: FileText,
    title: "Provider",
    description: "From the approved vendor record.",
  },
  {
    image: "/Legal-Privacy-cookie-settings/cs4.png",
    alt: "Hand interacting with process diagram on laptop screen",
    icon: Clock,
    title: "Duration",
    description: "Only as verified for each technology.",
  },
  {
    image: "/Legal-Privacy-cookie-settings/cs5.png",
    alt: "Developer writing code on laptop in relaxed setting",
    icon: GitFork,
    title: "Technology",
    description: "Named only once confirmed.",
  },
];

const mobileRegistryCards = [
  {
    image: "/Legal-Privacy-cookie-settings/cs11.jpg",
    alt: "Empty modern office hallway",
    icon: FileText,
    title: "Provider",
    description: "From the approved vendor record.",
  },
  {
    image: "/Legal-Privacy-cookie-settings/cs12.jpg",
    alt: "Laptop displaying analytics dashboard on table",
    icon: Clock,
    title: "Duration",
    description: "Only as verified for each technology.",
  },
  {
    image: "/Legal-Privacy-cookie-settings/cs13.jpg",
    alt: "Person holding smartphone in front of laptop",
    icon: GitFork,
    title: "Technology",
    description: "Named only once confirmed.",
  },
];

export default function CookieSettingsRegistryDetailsSection({
  view = "all",
}: CookieSettingsRegistryDetailsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="relative w-full border-t border-[#edf2f7]">
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <div className="hidden sm:block w-full bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1140px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2 className="font-['DM_Serif_Display'] text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-tight tracking-tight text-[#0b1b33]">
                Details come from the verified registry
              </h2>
              <p className="mt-3.5 max-w-[680px] font-['Manrope'] text-[13.5px] lg:text-[14.5px] font-normal leading-[1.65] text-[#5b6b82]">
                Each purpose expands to show its provider, duration and technology. Entries appear
                only when they have been verified.
              </p>
            </div>

            {/* 3 Registry Detail Cards */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {registryCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-[0px_2px_4px_rgba(11,27,51,0.02)] transition hover:border-slate-300 hover:shadow-md"
                  >
                    {/* Top Image */}
                    <div className="relative h-[180px] sm:h-[190px] w-full overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Bottom Body */}
                    <div className="p-6">
                      {/* Icon + Pill Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                          <Icon className="size-[19px] stroke-[1.8]" />
                        </div>
                        <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10.5px] font-bold tracking-wider text-[#b45309]">
                          PENDING
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="mt-4 font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                        {card.title}
                      </h3>

                      <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <div className="sm:hidden w-full px-5 py-10 bg-white">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="h-[2px] w-[20px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.14em] text-[#00bcd4]">
              06 · TECHNOLOGY DETAILS
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-dm-serif font-['DM_Serif_Display'] text-[26px] min-[390px]:text-[28px] font-normal leading-[1.18] tracking-[-0.01em] text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            <span className="block">Details come from the</span>
            <span className="block">verified registry</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-['Manrope'] text-[13px] leading-relaxed text-[#5b6b82]">
            Each purpose expands to show its provider, duration and technology. Entries appear
            only when they have been verified.
          </p>

          {/* 3 Mobile Cards Stacked */}
          <div className="mt-6 flex flex-col gap-5">
            {mobileRegistryCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-[20px] border border-[#e2e8f0] bg-white shadow-sm"
                >
                  <div className="relative h-[180px] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex size-[38px] items-center justify-center rounded-[10px] bg-[#e6f4f8] text-[#0891b2]">
                        <Icon className="size-[19px] stroke-[1.8]" />
                      </div>
                      <span className="inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309]">
                        PENDING
                      </span>
                    </div>

                    <h3 className="mt-3.5 font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {card.title}
                    </h3>

                    <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#64748b]">
                      {card.description}
                    </p>
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
