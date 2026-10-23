import { Code2, Rocket, Webhook, Package, Bookmark, Layers } from "lucide-react";

interface ContractDestinationsSectionProps {
  view?: "all" | "desktop" | "mobile";
}

interface ContractCard {
  title: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const contracts: ContractCard[] = [
  {
    title: "API Reference",
    description: "Exact endpoints and schemas, owned by Developers.",
    badge: "DESTINATION PENDING",
    icon: Code2,
  },
  {
    title: "Quickstarts",
    description: "Step-by-step guidance for a first integration.",
    badge: "DESTINATION PENDING",
    icon: Rocket,
  },
  {
    title: "Webhooks & Events",
    description: "Event contracts, owned by Integrate & Operate.",
    badge: "DESTINATION PENDING",
    icon: Webhook,
  },
  {
    title: "SDKs, Integrations, Sandbox, Changelog",
    description: "Only verified availability is shown.",
    badge: "DESTINATION PENDING",
    icon: Package,
  },
];

export default function ContractDestinationsSection({
  view = "all",
}: ContractDestinationsSectionProps = {}) {
  const showDesktop = view === "all" || view === "desktop";
  const showMobile = view === "all" || view === "mobile";

  return (
    <section className="w-full bg-[#f8fafc] border-t border-slate-200/60">
      {/* DESKTOP VERSION (hidden sm:block) */}
      {showDesktop && (
        <div className="hidden sm:block py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-4">
                <h2 className="font-dm-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
                  Contracts
                  <br />
                  live in their
                  <br />
                  own
                  <br />
                  destinations
                </h2>
                <p className="mt-4 max-w-[280px] font-manrope text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  Documentation explains concepts and points to the owner of each contract. It never duplicates a contract.
                </p>
              </div>

              {/* Right Column: 2x2 Grid of Contract Cards */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
                {contracts.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7"
                    >
                      <div>
                        {/* Cyan Icon Box */}
                        <div className="flex size-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                          <Icon className="size-4.5" />
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 font-manrope text-[15px] font-bold text-[#071324] leading-snug">
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                          {card.description}
                        </p>
                      </div>

                      {/* Badge */}
                      <div className="mt-6 border-t border-slate-100 pt-3">
                        <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9.5px] font-bold tracking-wider text-slate-500 uppercase">
                          {card.badge}
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

      {/* MOBILE VERSION (sm:hidden) */}
      {showMobile && (
        <div className="sm:hidden bg-[#f4f7fa] px-5 py-12 border-t border-slate-200/60">
          {/* Category Number & Eyebrow */}
          <div>
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#0ea5e9]">
              09 · DEVELOPER HANDOFFS
            </p>
            <div className="mt-1.5 h-[2px] w-12 bg-[#0ea5e9]" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-dm-serif text-[30px] font-normal leading-[1.2] tracking-tight text-[#071324]">
            Contracts live in their own destinations
          </h2>

          {/* Subtitle */}
          <p className="mt-3 font-manrope text-xs leading-relaxed text-[#64748b]">
            Documentation explains concepts and points to the owner of each contract. It never duplicates a contract.
          </p>

          {/* Mobile Cards Stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: API Reference */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-xs">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#0284c7]">
                <Code2 className="size-4.5" />
              </div>
              <h3 className="mt-4 font-manrope text-[14.5px] font-bold text-[#071324]">
                API Reference
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                Exact endpoints and schemas, owned by Developers.
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                  DESTINATION PENDING
                </span>
              </div>
            </div>

            {/* Card 2: Quickstarts */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-xs">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#0284c7]">
                <Bookmark className="size-4.5" />
              </div>
              <h3 className="mt-4 font-manrope text-[14.5px] font-bold text-[#071324]">
                Quickstarts
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                Step-by-step guidance for a first integration.
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                  DESTINATION PENDING
                </span>
              </div>
            </div>

            {/* Card 3: Webhooks & Events */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-xs">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#0284c7]">
                <Webhook className="size-4.5" />
              </div>
              <h3 className="mt-4 font-manrope text-[14.5px] font-bold text-[#071324]">
                Webhooks &amp; Events
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                Event contracts, owned by Integrate &amp; Operate.
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                  DESTINATION PENDING
                </span>
              </div>
            </div>

            {/* Card 4: SDKs, Integrations, Sandbox, Changelog */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5.5 shadow-xs">
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#e0f2fe] text-[#0284c7]">
                <Layers className="size-4.5" />
              </div>
              <h3 className="mt-4 font-manrope text-[14.5px] font-bold leading-snug text-[#071324]">
                SDKs, Integrations, Sandbox,
                <br />
                Changelog
              </h3>
              <p className="mt-2 font-manrope text-xs leading-relaxed text-[#64748b]">
                Only verified availability is shown.
              </p>
              <div className="mt-4 border-t border-slate-100 pt-3">
                <span className="inline-block rounded-full bg-[#edf2f7] px-3 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase">
                  DESTINATION PENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
