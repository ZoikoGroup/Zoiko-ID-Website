"use client";

import React from "react";
import Image from "next/image";
import { KeyRound, FileCheck2, FileText, Eye, Code2 } from "lucide-react";

interface FederationProvisioningCredentialsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

const deepDives = [
  {
    image: "/header-Platform-standards-interoperability/hsi9.png",
    alt: "User typing credentials on laptop login screen",
    icon: KeyRound,
    title: "Federation and sign-in",
    description:
      "How an existing provider can sign users in, with the redirects, bindings and error paths made explicit.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi11.png",
    alt: "Colleagues collaborating on identity provisioning lifecycle",
    icon: FileCheck2,
    title: "Provisioning lifecycle",
    description:
      "Creating, changing and removing identities as people join, move and leave.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi10.png",
    alt: "Reviewing credential ecosystem issuance and verification",
    icon: FileText,
    title: "Credential ecosystems",
    description:
      "Where credentials come from, who issues them, and how they are checked.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi12.png",
    alt: "Business partners confirming interface contract agreements",
    icon: Eye,
    title: "Interface contracts",
    description:
      "Endpoints and schemas are published only in the API Reference, never on this page.",
    badge: "API REFERENCE PENDING",
  },
];

const mobileDeepDives = [
  {
    image: "/header-Platform-standards-interoperability/hsi28.jpg",
    alt: "Federation and sign-in code syntax",
    icon: KeyRound,
    title: "Federation and sign-in",
    description:
      "How an existing provider can sign users in, with the redirects, bindings and error paths made explicit.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi29.jpg",
    alt: "Colleagues collaborating on identity provisioning lifecycle",
    icon: FileCheck2,
    title: "Provisioning lifecycle",
    description:
      "Creating, changing and removing identities in an enterprise estate and tools.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi30.jpg",
    alt: "Reviewing credential ecosystem issuance and verification",
    icon: FileText,
    title: "Credential ecosystems",
    description:
      "Where credentials come from, who issues them, and how they are checked.",
    badge: "REGISTRY PENDING",
  },
  {
    image: "/header-Platform-standards-interoperability/hsi31.jpg",
    alt: "Developer workspace verifying interface contracts",
    icon: Code2,
    title: "Interface contracts",
    description:
      "Endpoints and schemas are published only in the API Reference, never on this page.",
    badge: "API REFERENCE PENDING",
  },
];

export default function FederationProvisioningCredentialsSection({
  view = "all",
}: FederationProvisioningCredentialsSectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section
          id="deep-dives-desktop"
          className="hidden sm:block relative w-full bg-[#f4f6fa] py-20 lg:py-28 border-t border-[#edf2f7]"
        >
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-[920px]">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[34px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Federation, provisioning and credentials
              </h2>

              <p className="mt-4 font-['Manrope'] text-[14.5px] sm:text-[15px] leading-[1.7] text-[#5b6b82] max-w-[680px]">
                Each deep dive explains the concept, the prerequisites and the error paths.
                Specific flows and profiles are confirmed against the registry before they
                are described as supported.
              </p>
            </div>

            {/* 4 Split Cards (2x2 Grid) */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1100px]">
              {deepDives.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col sm:flex-row overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-2xs transition hover:border-slate-300 hover:shadow-xs min-h-[220px]"
                  >
                    {/* Left Half: Image */}
                    <div className="relative w-full sm:w-[42%] h-[190px] sm:h-auto overflow-hidden bg-slate-100">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 240px"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Right Half: Content */}
                    <div className="w-full sm:w-[58%] p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#e6f4fa] text-[#0088cc] mb-3 shadow-2xs">
                          <IconComponent className="h-4.5 w-4.5 stroke-[2.2]" />
                        </div>

                        <h3 className="font-['Manrope'] text-[15.5px] font-bold text-[#0b1b33]">
                          {card.title}
                        </h3>

                        <p className="mt-1.5 font-['Manrope'] text-[12.5px] leading-relaxed text-[#5b6b82]">
                          {card.description}
                        </p>
                      </div>

                      <div className="mt-4">
                        <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-3.5 py-1.5 font-['Manrope'] text-[9.5px] font-bold tracking-wider uppercase text-[#b45309]">
                          {card.badge}
                        </span>
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
          id="deep-dives-mobile"
          className="sm:hidden relative w-full bg-[#f4f6fa] px-5 py-10 border-t border-[#edf2f7]"
        >
          {/* Category Tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 rounded-full bg-[#00a4d6]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider text-[#00a4d6] uppercase">
              05 · DEEP DIVES
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[30px] font-normal leading-[1.15] tracking-tight text-[#0b1b33]"
            style={{
              fontFamily:
                'var(--font-dm-serif-display-family), "DM Serif Display", serif',
            }}
          >
            Federation, provisioning and credentials
          </h2>

          <p className="mt-4 font-['Manrope'] text-[13.5px] leading-[1.65] text-[#5b6b82]">
            Each deep dive explains the concept, the prerequisites and the error
            paths. Specific flows and profiles are confirmed against the
            registry before they are described as supported.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            {mobileDeepDives.map((card) => {
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
