"use client";

import Image from "next/image";
import { useState } from "react";

interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  panelTitle: string;
  panelDescription: string;
  bullets: string[];
}

const scenarios: Scenario[] = [
  {
    id: "auth-sso",
    title: "Authentication and SSO",
    subtitle: "Login is not permission",
    icon: "/sandbox/icons/icon_334_2254.svg",
    badge: "Illustrative",
    panelTitle: "Authentication and SSO",
    panelDescription:
      "Test how a verified identity assertion reaches the trust layer.",
    bullets: ["Confirms who is asking", "Does not grant any action"],
  },
  {
    id: "delegated-auth",
    title: "Delegated authorization",
    subtitle: "Bounded, expiring grant",
    icon: "/sandbox/icons/icon_334_2262.svg",
    badge: "Illustrative",
    panelTitle: "Delegated authorization",
    panelDescription:
      "Test bounded authority grants with explicit scopes, resource constraints, and expiry.",
    bullets: [
      "Scopes authority to explicit actions",
      "Enforces bounded time-to-live restrictions",
    ],
  },
  {
    id: "service-id",
    title: "Service identity",
    subtitle: "Non-human principals",
    icon: "/sandbox/icons/icon_334_2269.svg",
    badge: "Illustrative",
    panelTitle: "Service identity",
    panelDescription:
      "Evaluate non-human principal credentials and service-to-service cryptographic tokens.",
    bullets: [
      "Cryptographically bound workload keys",
      "Auditable automated service footprint",
    ],
  },
  {
    id: "agent-sponsorship",
    title: "AI agent sponsorship",
    subtitle: "Explicit mandate only",
    icon: "/sandbox/icons/icon_334_2277.svg",
    badge: "Illustrative",
    panelTitle: "AI agent sponsorship",
    panelDescription:
      "Evaluate how autonomous agents operate under authorized sponsor mandates.",
    bullets: [
      "Ties agent actions to accountable sponsors",
      "Restricts unauthorized autonomy drift",
    ],
  },
  {
    id: "revocation-evidence",
    title: "Revocation and evidence",
    subtitle: "Withdraw and review",
    icon: "/sandbox/icons/icon_334_2284.svg",
    badge: "Illustrative",
    panelTitle: "Revocation and evidence",
    panelDescription:
      "Test instant authority withdrawal and cryptographic immutable audit record creation.",
    bullets: [
      "Immediate downstream revocation propagation",
      "Complete immutable evidence generation",
    ],
  },
];

export default function SandboxScenarioExplorerSection() {
  const [activeTab, setActiveTab] = useState("auth-sso");

  const currentScenario =
    scenarios.find((s) => s.id === activeTab) || scenarios[0];

  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-[120px] lg:py-[105px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] text-[#071426] sm:text-4xl lg:text-[46px] lg:leading-[52.9px]">
            Choose what you want to evaluate
          </h2>
          <p className="mt-[11px] font-manrope text-[15px] font-normal leading-[25px] text-[#64748B] sm:text-[16px] sm:leading-[26.4px]">
            Scenarios are illustrative until an approved registry marks them available for your
            <br className="hidden sm:inline" />
            account.
          </p>
        </div>

        {/* Tabbed Explorer Container */}
        <div className="mt-[60px] flex w-full flex-col overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white-solid lg:flex-row">
          {/* Left: Tab List */}
          <div className="flex w-full shrink-0 flex-col border-b border-[#E2E8F0] bg-[#F1F5F9] lg:w-[340px] lg:border-b-0 lg:border-r">
            {scenarios.map((scenario) => {
              const isActive = scenario.id === activeTab;
              return (
                <button
                  key={scenario.id}
                  onClick={() => setActiveTab(scenario.id)}
                  type="button"
                  className={`flex w-full items-center gap-[14px] border-b border-[#E2E8F0] px-[24px] py-[20px] text-left transition-colors duration-150 last:border-b-0 ${
                    isActive
                      ? "bg-white-solid shadow-[inset_4px_0px_0px_0px_#2563EB]"
                      : "bg-[#F1F5F9] hover:bg-white/60"
                  }`}
                >
                  <Image
                    src={scenario.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <div className="flex flex-col gap-[2.89px]">
                    <span className="font-manrope text-[16px] font-bold leading-[26.4px] text-[#071426]">
                      {scenario.title}
                    </span>
                    <span className="font-manrope text-[13.1px] font-normal leading-[21.65px] text-[#64748B]">
                      {scenario.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Tab Panel */}
          <div className="flex flex-1 flex-col md:flex-row items-stretch">
            {/* Panel Image */}
            <div className="relative h-[300px] w-full md:h-[472px] md:w-1/2">
              <Image
                src="/sandbox/security-lock-network.png"
                alt="Security lock and network"
                fill
                sizes="(min-width: 1024px) 430px, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Panel Content */}
            <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-[44px]">
              <span className="inline-flex self-start rounded-full bg-[#FEF3C7] px-[10px] py-[3px] font-manrope text-[11.2px] font-extrabold uppercase leading-[18.48px] tracking-[0.05em] text-[#92400E]">
                {currentScenario.badge}
              </span>

              <h3 className="mt-[14px] font-dm-serif text-[24px] font-normal leading-[39.6px] text-[#071426]">
                {currentScenario.panelTitle}
              </h3>

              <p className="mt-[8px] font-manrope text-[16px] font-normal leading-[26.4px] text-[#64748B]">
                {currentScenario.panelDescription}
              </p>

              <div className="mt-[14px] flex flex-col gap-[7.5px] pt-1">
                {currentScenario.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-[10px]">
                    <Image
                      src={
                        idx === 0
                          ? "/sandbox/icons/icon_334_2306.svg"
                          : "/sandbox/icons/icon_334_2312.svg"
                      }
                      alt=""
                      width={19}
                      height={19}
                      className="shrink-0"
                    />
                    <span className="font-manrope text-[14.9px] font-normal leading-[24.55px] text-[#475569]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
