"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FinanceBankIcon,
  HealthcarePlusIcon,
  GovernmentBuildingIcon,
  EnergyBoltIcon,
  ActorIdentityUserCheckIcon,
  AuthorizationMandateBadgeIcon,
  PolicyDecisionShieldCheckIcon,
  AuditEvidenceDocCheckIcon,
  DarkLightbulbHeaderIcon,
} from "./icons";

interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SectorScenario {
  id: string;
  tabTitle: string;
  tabSubtitle: string;
  tabIcon: React.ComponentType<{ className?: string }>;
  scenarioTitle: string;
  exampleCopy: string;
  image: string;
  imageAlt: string;
  steps: WorkflowStep[];
}

const scenarios: SectorScenario[] = [
  {
    id: "finance",
    tabTitle: "Finance",
    tabSubtitle: "Payment approval, audit trail",
    tabIcon: FinanceBankIcon,
    scenarioTitle: "Financial Services: Transaction Authorization",
    exampleCopy:
      "Example (Illustrative): Wire transfer of $1M initiated. Who authorized it? Under what rules? Can it be stopped?",
    image: "/solutions-regulated-services/rs2.png",
    imageAlt: "Financial advisors and analysts reviewing transaction authorization",
    steps: [
      {
        title: "Actor Identity",
        description:
          "Trader authentication verified [2FA, hardware key, behavioral signals]",
        icon: ActorIdentityUserCheckIcon,
      },
      {
        title: "Authorization Mandate",
        description:
          "Trader authorized by Risk Officer for transfers up to $5M, quarterly limit, daily review",
        icon: AuthorizationMandateBadgeIcon,
      },
      {
        title: "Policy Decision",
        description:
          "Transfer is within mandate, under daily limit, no suspicious patterns. ALLOW.",
        icon: PolicyDecisionShieldCheckIcon,
      },
      {
        title: "Audit Evidence",
        description:
          "Immutable record: actor, mandate, decision context, timestamp, signature. Regulator can inspect.",
        icon: AuditEvidenceDocCheckIcon,
      },
    ],
  },
  {
    id: "healthcare",
    tabTitle: "Healthcare",
    tabSubtitle: "Patient record access",
    tabIcon: HealthcarePlusIcon,
    scenarioTitle: "Healthcare: Emergency Patient Record Access",
    exampleCopy:
      "Example (Illustrative): Attending physician requests immediate EHR decryption during clinical handoff.",
    image: "/solutions-regulated-services/rs3.png",
    imageAlt: "Healthcare clinical staff discussing patient medical data access",
    steps: [
      {
        title: "Clinician Identity",
        description:
          "Doctor credentials validated with hospital badge, biometrics, and verified NPI registry",
        icon: ActorIdentityUserCheckIcon,
      },
      {
        title: "Department Delegation",
        description:
          "Granted time-bounded role delegation by Chief of Medicine for on-call shifts",
        icon: AuthorizationMandateBadgeIcon,
      },
      {
        title: "HIPAA Policy Check",
        description:
          "Emergency 'break-glass' protocol verified against assigned department roster. ALLOW.",
        icon: PolicyDecisionShieldCheckIcon,
      },
      {
        title: "Audit & Compliance",
        description:
          "Cryptographic access proof logged with attending identity, patient ID, and clinical justification.",
        icon: AuditEvidenceDocCheckIcon,
      },
    ],
  },
  {
    id: "government",
    tabTitle: "Government",
    tabSubtitle: "Classified access control",
    tabIcon: GovernmentBuildingIcon,
    scenarioTitle: "Government: Multi-Agency Clearance Verification",
    exampleCopy:
      "Example (Illustrative): Cross-agency analyst requests access to compartmentalized intelligence dataset.",
    image: "/solutions-regulated-services/rs4.png",
    imageAlt: "Government agency intelligence review meeting",
    steps: [
      {
        title: "Subject Verification",
        description:
          "CAC / PIV smart card authentication verified with live agency directory and PKI validation",
        icon: ActorIdentityUserCheckIcon,
      },
      {
        title: "Clearance Mandate",
        description:
          "Security clearance vetted for Level-3 compartmentalized data with 6-month validity",
        icon: AuthorizationMandateBadgeIcon,
      },
      {
        title: "Need-To-Know Policy",
        description:
          "Operational need corroborated by inter-agency liaison. Ephemeral lease issued. ALLOW.",
        icon: PolicyDecisionShieldCheckIcon,
      },
      {
        title: "Forensic Evidence",
        description:
          "Tamper-proof audit receipt delivered to Agency Inspector General security pipeline.",
        icon: AuditEvidenceDocCheckIcon,
      },
    ],
  },
  {
    id: "energy",
    tabTitle: "Energy",
    tabSubtitle: "Grid operation oversight",
    tabIcon: EnergyBoltIcon,
    scenarioTitle: "Energy: Critical Infrastructure Remote Operations",
    exampleCopy:
      "Example (Illustrative): Supervisory control command dispatched to electrical transmission substation.",
    image: "/solutions-regulated-services/rs5.png",
    imageAlt: "Energy control room engineers reviewing transmission telemetry",
    steps: [
      {
        title: "Operator Attestation",
        description:
          "SCADA operator authenticated via hardware token and isolated jump-box certificate",
        icon: ActorIdentityUserCheckIcon,
      },
      {
        title: "Operational Mandate",
        description:
          "NERC-CIP approved operational ticket signed by Dispatch Director with time-window lock",
        icon: AuthorizationMandateBadgeIcon,
      },
      {
        title: "Safety Interlock Policy",
        description:
          "Zero-trust rule engine verifies load threshold and dual-custody approval. ALLOW.",
        icon: PolicyDecisionShieldCheckIcon,
      },
      {
        title: "Telemetry Audit",
        description:
          "Signed telemetry command bundle archived to immutable WORM compliance storage.",
        icon: AuditEvidenceDocCheckIcon,
      },
    ],
  },
];

export default function SectorScenariosSection() {
  const [activeTab, setActiveTab] = useState<string>("finance");

  const currentScenario =
    scenarios.find((s) => s.id === activeTab) || scenarios[0];

  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Mobile Section Heading with Lightbulb Icon */}
        <div className="mb-6 flex items-center gap-3 sm:hidden">
          <DarkLightbulbHeaderIcon className="size-6 shrink-0 text-[#071426]" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Illustrative sector
            <br />
            scenarios
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-10 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-12 lg:text-[44px]">
          Illustrative sector scenarios
        </h2>

        {/* 4 Sector Tabs (Scrollable on mobile, 4-col grid on desktop) */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:gap-4 no-scrollbar">
          {scenarios.map((tab) => {
            const Icon = tab.tabIcon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex w-[125px] shrink-0 flex-col items-center justify-center rounded-2xl p-4 text-center transition-all duration-200 cursor-pointer sm:w-auto sm:p-5 ${
                  isActive
                    ? "border-2 border-blue-500 bg-[#f4f8ff] shadow-sm"
                    : "border border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <div className="mb-2 flex size-8 items-center justify-center">
                  <Icon className="size-6 text-[#1E69EC]" />
                </div>
                <h3 className="font-manrope text-[13.5px] font-bold text-azure-9 sm:text-[15px]">
                  {tab.tabTitle}
                </h3>
                <p className="mt-1 font-manrope text-[10.5px] text-azure-47 sm:text-xs">
                  {tab.tabSubtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Big Scenario Card Container */}
        <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.03)] sm:mt-8 sm:p-8 lg:mt-10 lg:p-10">
          {/* Scenario Titles */}
          <h3 className="font-dm-serif text-lg font-normal leading-snug text-azure-9 sm:text-2xl">
            {currentScenario.scenarioTitle}
          </h3>
          <p className="mt-2 font-manrope text-[12px] leading-relaxed text-azure-47 sm:mt-1.5 sm:text-[13.5px]">
            {currentScenario.exampleCopy}
          </p>

          {/* Content: Photo on Desktop Left, 4 Rows on Right (Photo hidden on mobile) */}
          <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:mt-7 lg:grid-cols-12 lg:gap-8">
            {/* Desktop Left Column: Sector Photo */}
            <div className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/80 shadow-xs lg:col-span-5 lg:block">
              <Image
                src={currentScenario.image}
                alt={currentScenario.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* 4 Workflow Steps */}
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:col-span-7">
              {currentScenario.steps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-xl bg-[#f4f7fb] p-3 sm:p-4"
                  >
                    {/* Mobile step view: icon + title row, description beneath */}
                    <div className="sm:hidden">
                      <div className="flex items-center gap-2">
                        <StepIcon className="size-4 shrink-0 text-[#1E69EC]" />
                        <h4 className="font-manrope text-[12.5px] font-bold text-azure-9">
                          {step.title}
                        </h4>
                      </div>
                      <p className="mt-1 font-manrope text-[11px] leading-relaxed text-azure-47">
                        {step.description}
                      </p>
                    </div>

                    {/* Desktop step view: unchanged */}
                    <div className="hidden sm:flex sm:items-start sm:gap-3.5">
                      <StepIcon className="mt-0.5 size-5 shrink-0 text-[#1E69EC]" />
                      <div>
                        <h4 className="font-manrope text-[13px] font-bold text-azure-9 sm:text-sm">
                          {step.title}
                        </h4>
                        <p className="mt-0.5 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:text-xs">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
