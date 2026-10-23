import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Rocket,
  Terminal,
  Package,
  AppWindow,
  Send,
  Code2,
  FileText,
} from "lucide-react";

interface PathwayCard {
  title: string;
  description: string;
  status: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pathways: PathwayCard[] = [
  {
    title: "Developer Overview",
    description: "Orientation for building on Zoiko iD.",
    status: "Route pending",
    href: "/overview",
    icon: Compass,
  },
  {
    title: "Quickstarts",
    description: "Step-by-step first integrations.",
    status: "Route pending",
    href: "/quickstarts",
    icon: Rocket,
  },
  {
    title: "API Reference",
    description: "Exact interface contracts.",
    status: "Route pending",
    href: "/api-reference",
    icon: Terminal,
  },
  {
    title: "SDKs",
    description: "Language packages and their verified status.",
    status: "Route pending",
    href: "/apis-integrations",
    icon: Package,
  },
];

const mobilePathways = [
  {
    title: "Developer Overview",
    description: "Orientation for building on Zoiko iD.",
    status: "Route pending",
    href: "/overview",
    icon: AppWindow,
  },
  {
    title: "Quickstarts",
    description: "Step-by-step first integrations.",
    status: "Route pending",
    href: "/quickstarts",
    icon: Send,
  },
  {
    title: "API Reference",
    description: "Exact interface contracts.",
    status: "Route pending",
    href: "/api-reference",
    icon: Code2,
  },
  {
    title: "SDKs",
    description: "Language packages and their verified status.",
    status: "Route pending",
    href: "/apis-integrations",
    icon: FileText,
  },
];

interface SelfServiceBuildersSectionProps {
  view?: "all" | "desktop" | "mobile";
}

export default function SelfServiceBuildersSection({
  view = "all",
}: SelfServiceBuildersSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#f8fafc]">
      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden px-5 py-12">
          {/* Category tag */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-4 bg-[#0ea5e9]" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#0284c7]">
              DOCUMENTATION
            </span>
          </div>

        {/* Title without awkward line breaks */}
        <h2 className="mt-3 font-dm-serif text-[28px] font-normal leading-[1.2] tracking-tight text-[#071324]">
          Self-service pathways for builders
        </h2>
        <p className="mt-3 font-manrope text-[12.5px] leading-relaxed text-[#4b5563]">
          Developers start with the documentation. Each pathway opens a verified destination; none is shown until its route is approved.
        </p>

        {/* Laptop with charts photo (ahs13.jpg) */}
        <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-md">
          <Image
            src="/Support-Accessibility-01-help-support/ahs13.jpg"
            alt="Laptop displaying analytics and developer documentation"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 4 Cards - Vertical Stack */}
        <div className="mt-6 flex flex-col gap-3.5">
          {mobilePathways.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Icon className="size-4.5" />
                </div>
                <h3 className="mt-3.5 font-manrope text-[15px] font-bold text-[#071324]">
                  {card.title}
                </h3>
                <p className="mt-1 font-manrope text-xs leading-relaxed text-[#64748b]">
                  {card.description}
                </p>
                <div className="mt-3.5">
                  <span className="font-mono text-[10px] font-bold tracking-wider text-amber-700 uppercase">
                    {card.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      )}

      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8 lg:px-12">
          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left Column: Heading, Subtitle & Developer Photo */}
            <div>
              <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                Self-service pathways
                <br />
                for builders
              </h2>
              <p className="mt-4 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-sm sm:leading-relaxed">
                Developers start with the documentation. Each pathway opens a verified destination; none is shown until its route is approved.
              </p>

              {/* Rounded Developer Image (ahs8.png) */}
              <div className="relative mt-8 aspect-[16/11] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl sm:rounded-3xl">
                <Image
                  src="/Support-Accessibility-01-help-support/ahs8.png"
                  alt="Software engineer analyzing API code on dual monitors"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: 2x2 Pathway Cards Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pathways.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div>
                      {/* Cyan Icon Container */}
                      <div className="flex size-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                        <Icon className="size-5" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324] sm:text-base">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[12.5px]">
                        {card.description}
                      </p>
                    </div>

                    {/* Status Badge / Link */}
                    <div className="mt-6 border-t border-slate-100 pt-3">
                      <span className="font-mono text-[10.5px] font-bold tracking-wider text-amber-600 uppercase">
                        {card.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
