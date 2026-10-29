"use client";

import React from "react";
import Image from "next/image";
import {
  KeyRound,
  FileCheck2,
  FileText,
  Scale,
  Zap,
  Bot,
  Sliders,
  Umbrella,
  Sparkles,
} from "lucide-react";

interface SixTechnicalDomainsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const domains = [
  {
    image: "/header-Platform-standards-interoperability/hsi3.png",
    alt: "Engineer monitoring authentication and federation in data center",
    icon: KeyRound,
    title: "Authentication & federation",
    description: "Sign-in and trust between systems.",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi4.png",
    alt: "Stamping and approving identity provisioning",
    icon: FileCheck2,
    title: "Provisioning",
    description: "Creating and updating identities across systems.",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi5.png",
    alt: "Business partners verifying issued verifiable credentials",
    icon: FileText,
    title: "Credentials",
    description: "Issuing and checking verifiable credentials.",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi8.png",
    alt: "Corporate leadership reviewing authorization and delegation scopes",
    icon: Scale,
    title: "Authorization & delegation",
    description: "What an actor may do, on whose behalf.",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi6.png",
    alt: "Hands stacked symbolizing trusted events and signals",
    icon: Zap,
    title: "Events & trust signals",
    description: "Changes that prompt re-evaluation.",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi7.png",
    alt: "Representatives managing service and agent identity workflows",
    icon: Bot,
    title: "Service & agent identities",
    description: "Non-human actors under a sponsor.",
  },
];

const mobileDomains = [
  {
    image: "/header-Platform-standards-interoperability/hsi22.jpg",
    alt: "Authentication and federation code syntax",
    icon: KeyRound,
    title: "Authentication & federation",
    description: "Sign-in and trust between systems.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi23.jpg",
    alt: "Provisioning team working across systems",
    icon: Sliders,
    title: "Provisioning",
    description: "Creating and updating identities across systems.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi24.jpg",
    alt: "Verifiable credentials clipboard",
    icon: FileText,
    title: "Credentials",
    description: "Issuing and checking verifiable credentials.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi25.jpg",
    alt: "Authorization and delegation governance",
    icon: Umbrella,
    title: "Authorization & delegation",
    description: "What an actor may do, on whose behalf.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi26.jpg",
    alt: "Events and trust signals evaluation",
    icon: Sparkles,
    title: "Events & trust signals",
    description: "Changes that prompt re-evaluation.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi27.jpg",
    alt: "Service and agent identities 3D AI model",
    icon: Bot,
    title: "Service & agent identities",
    description: "Non-human actors under a sponsor.",
    badge: "REGISTRY PENDING",
  },
];

export default function SixTechnicalDomainsSection({
  view = "all",
}: SixTechnicalDomainsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="technical-domains-desktop"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Six technical domains, each with its own owner
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                Each card opens a deep dive below. A card names a domain, not a complete
                standards suite. Domains without a verified capability record show their
                status as not yet evaluated.
              </p>
            </div>

            {/* 6 Cards in 2 Rows of 3 */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px]">
              {domains.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[300px]"
                  >
                    {/* Top Image */}
                    <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mb-3.5 shadow-2xs">
                          <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                        </div>

                        <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                          {card.title}
                        </h3>

                        <p className="mt-1 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= MOBILE VERSION ================= */}
      {showMobile && (
        <section
          id="technical-domains-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              03 · PROTOCOL FAMILIES
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Six technical domains, each with its own owner
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Each card opens a deep dive below. A card names a domain, not a
            complete standards suite. Domains without a verified capability
            record show their status as not yet evaluated.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {mobileDomains.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-[22px] border border-slate-200/90 bg-white shadow-2xs"
                >
                  <div className="relative h-[160px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#dff3f9] text-[#00a4d6] mb-3">
                      <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                    </div>
                    <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {card.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[12px] leading-relaxed text-[#5b6b82]">
                      {card.description}
                    </p>
                    <div className="mt-4 inline-block rounded-full bg-[#fef3c7]/80 border border-[#fde68a] px-3 py-1 font-['Manrope'] text-[10px] font-bold tracking-wider text-[#b45309] uppercase">
                      {card.badge}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
