"use client";

import React from "react";
import Image from "next/image";

interface BringGovernedAuthoritySectionProps {
  view?: "all" | "desktop" | "mobile";
}

const integrationPatterns = [
  {
    title: "Identity context",
    description: "The application retrieves the actor's context.",
    badge: "API REFERENCE PENDING",
  },
  {
    title: "Policy decision",
    description: "The application asks for a decision.",
    badge: "API REFERENCE PENDING",
  },
  {
    title: "Evidence trail",
    description: "The decision is stored for review.",
    badge: "WEBHOOKS PENDING",
  },
  {
    title: "Integration discussion",
    description: "Talk to us about your environment.",
    badge: "ROUTE PENDING",
  },
];

const mobileIntegrationPatterns = [
  {
    image: "/authorization-delegated-authority/ada41.jpg",
    title: "Identity context",
    description: "The application receives the actor's context.",
    badge: "API REFERENCE PENDING",
  },
  {
    image: "/authorization-delegated-authority/ada42.jpg",
    title: "Policy decision",
    description: "The application asks for a decision.",
    badge: "API REFERENCE PENDING",
  },
  {
    image: "/authorization-delegated-authority/ada43.jpg",
    title: "Evidence trail",
    description: "The decision is stored for review.",
    badge: "WEBHOOKS PENDING",
  },
  {
    image: "/authorization-delegated-authority/ada44.jpg",
    title: "Integration discussion",
    description: "Talk to us about your environment.",
    badge: "ROUTE PENDING",
  },
];

export default function BringGovernedAuthoritySection({
  view = "all",
}: BringGovernedAuthoritySectionProps) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      {showDesktop && (
        <section className="hidden sm:block relative w-full bg-white py-16 lg:py-24 border-t border-[#edf2f7]">
          <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-8">
            {/* Header */}
            <div className="w-full">
              <h2
                className="font-dm-serif font-['DM_Serif_Display'] text-[36px] sm:text-[42px] lg:text-[46px] font-normal leading-[1.12] tracking-tight text-[#0b1b33]"
                style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
              >
                Bring governed authority into your application
              </h2>
              <p className="mt-4 font-['Manrope'] text-[14px] sm:text-[14.5px] leading-[1.65] text-[#5b6b82] max-w-[680px]">
                Three conceptual patterns show how an application uses this model: identity context, a
                policy decision, and an evidence trail. Each pattern links to its verified
                documentation. Where documentation is not yet published, the page offers
                integration discussion instead.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {integrationPatterns.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-[20px] border border-[#e2e8f0] bg-white p-5 lg:p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition"
                >
                  <div>
                    <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#b45309] uppercase">
                      {item.badge}
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
        <section className="sm:hidden relative w-full bg-white px-4 py-9 border-t border-[#edf2f7]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#00bcd4]" />
            <span className="font-['Manrope'] text-[11px] font-bold tracking-wider uppercase text-[#00bcd4]">
              16 · INTEGRATION PATHWAY
            </span>
          </div>

          <h2
            className="mt-3.5 font-dm-serif font-['DM_Serif_Display'] text-[28px] sm:text-[32px] font-normal leading-[1.14] tracking-tight text-[#0b1b33]"
            style={{ fontFamily: 'var(--font-dm-serif-display-family), "DM Serif Display", serif' }}
          >
            Bring governed authority into your application
          </h2>

          <p className="mt-3 font-['Manrope'] text-[13px] leading-[1.65] text-[#5b6b82]">
            Three conceptual patterns show how an application uses this model: identity context, a policy decision, and an evidence trail. Each pattern links to its verified documentation. Where documentation is not yet published, the page offers integration discussion instead.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {mobileIntegrationPatterns.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-slate-200/90 bg-white overflow-hidden shadow-sm"
              >
                <div className="relative h-[155px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col">
                  <h3 className="font-['Manrope'] text-[15px] font-bold text-[#0b1b33]">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-['Manrope'] text-[12px] leading-[1.6] text-[#64748b]">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block rounded-full bg-[#fef3c7] px-3 py-1 font-['Manrope'] text-[9.5px] font-bold tracking-wider text-[#b45309] uppercase">
                      {item.badge}
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
