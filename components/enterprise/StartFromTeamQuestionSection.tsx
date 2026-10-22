import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Shield,
  Binary,
  Bot,
  FileCheck2,
} from "lucide-react";

interface RoleCard {
  icon: typeof Layers;
  role: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const roleCards: RoleCard[] = [
  {
    icon: Layers,
    role: "CIO / CTO",
    description: "Architecture and coexistence with your estate.",
    linkText: "Architecture & terms an expert",
    linkHref: "/architecture-guides",
  },
  {
    icon: Shield,
    role: "CISO / IAM",
    description: "Controls for delegation, revocation and trust.",
    linkText: "Security & authority model",
    linkHref: "/security",
  },
  {
    icon: Binary,
    role: "Architect",
    description: "Federation, APIs, egress/ingress and machine-to-machine.",
    linkText: "Architecture & developer",
    linkHref: "/apis-integrations",
  },
  {
    icon: Bot,
    role: "AI lead",
    description: "Sponsorship and bounded action for agents.",
    linkText: "Agent identity & trusty evidence",
    linkHref: "/ai-agent-security",
  },
  {
    icon: FileCheck2,
    role: "Procurement",
    description: "Order, documentation and live evaluation route.",
    linkText: "Evaluation details & sales",
    linkHref: "/talk-to-sales",
  },
];

export default function StartFromTeamQuestionSection() {
  return (
    <section className="w-full bg-[#071324] py-16 text-white sm:py-20 lg:py-24">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        {/* Section Heading */}
        <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[44px]">
          Start from the question your team owns
        </h2>

        {/* 5 Role Cards in Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roleCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.role}
                className="flex flex-col justify-between rounded-xl border border-white/5 bg-[#0b1b33]/40 p-6 backdrop-blur-sm transition hover:border-white/10 hover:bg-[#0b1b33]/60"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-4 font-manrope text-base font-bold text-white">
                    {card.role}
                  </h3>

                  <p className="mt-2 font-manrope text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3">
                  <Link
                    href={card.linkHref}
                    className="inline-flex items-center gap-1 font-manrope text-xs font-semibold text-sky-400 transition hover:text-sky-300"
                  >
                    <span>{card.linkText}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Code / Ops Console Image Banner (ee4.png) */}
        <div className="relative mt-14 aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl sm:mt-16 sm:rounded-3xl">
          <Image
            src="/Enterprise-02-enterprise/ee4.png"
            alt="Data center operations console and engineer reviewing telemetry"
            fill
            sizes="(min-width: 1200px) 1140px, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill with horizontal cyan line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#38bdf8] uppercase">
            EVALUATION PATHS
          </span>
        </div>

        {/* Mobile Heading */}
        <h2 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-white">
          Start from the question
          <br />
          your team owns
        </h2>

        {/* Subtle Divider Line below heading */}
        <div className="mt-5 border-b border-white/10" />

        {/* Mobile 5 Roles Stack */}
        <div className="mt-6 flex flex-col gap-7">
          {/* 1. CIO / CTO */}
          <div className="flex flex-col">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#0e2238] text-[#38bdf8]">
              <Layers className="size-4.5" />
            </div>
            <h3 className="mt-3 font-manrope text-sm font-bold text-white">
              CIO / CTO
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-slate-300">
              Architecture and coexistence with your estate.
            </p>
            <Link
              href="/architecture-guides"
              className="mt-2.5 font-manrope text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc]"
            >
              Architecture &rarr; talk to an expert
            </Link>
          </div>

          {/* 2. CISO / IAM */}
          <div className="flex flex-col">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#0e2238] text-[#38bdf8]">
              <Shield className="size-4.5" />
            </div>
            <h3 className="mt-3 font-manrope text-sm font-bold text-white">
              CISO / IAM
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-slate-300">
              Controls for delegation, revocation and trust.
            </p>
            <Link
              href="/security"
              className="mt-2.5 font-manrope text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc]"
            >
              Security &rarr; authority model
            </Link>
          </div>

          {/* 3. Architect */}
          <div className="flex flex-col">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#0e2238] text-[#38bdf8]">
              <Binary className="size-4.5" />
            </div>
            <h3 className="mt-3 font-manrope text-sm font-bold text-white">
              Architect
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-slate-300">
              Federation, APIs, organization and machine boundaries.
            </p>
            <Link
              href="/apis-integrations"
              className="mt-2.5 font-manrope text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc]"
            >
              Architecture &rarr; developers
            </Link>
          </div>

          {/* 4. AI lead */}
          <div className="flex flex-col">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#0e2238] text-[#38bdf8]">
              <Bot className="size-4.5" />
            </div>
            <h3 className="mt-3 font-manrope text-sm font-bold text-white">
              AI lead
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-slate-300">
              Sponsorship and bounded action for agents.
            </p>
            <Link
              href="/ai-agent-security"
              className="mt-2.5 font-manrope text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc]"
            >
              Agent identity &rarr; limits &rarr; evidence
            </Link>
          </div>

          {/* 5. Procurement */}
          <div className="flex flex-col">
            <div className="flex size-9 items-center justify-center rounded-lg bg-[#0e2238] text-[#38bdf8]">
              <FileCheck2 className="size-4.5" />
            </div>
            <h3 className="mt-3 font-manrope text-sm font-bold text-white">
              Procurement
            </h3>
            <p className="mt-1 font-manrope text-xs leading-relaxed text-slate-300">
              Owner, documentation and the evaluation route.
            </p>
            <Link
              href="/talk-to-sales"
              className="mt-2.5 font-manrope text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc]"
            >
              Corporate details &rarr; sales
            </Link>
          </div>
        </div>

        {/* Mobile Bottom Image Banner (ee10.jpg clipboard/resume) */}
        <div className="relative mt-9 aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/Enterprise-02-enterprise/ee10.jpg"
            alt="Evaluation checklist clipboard on workstation desk"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
        </div>
      </div>
    </section>
  );
}
