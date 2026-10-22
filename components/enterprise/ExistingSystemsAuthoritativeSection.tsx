import { Check, X } from "lucide-react";

interface SystemLayer {
  layer: string;
  owns: string;
  zoikoRole: string;
  notClaimed: string;
}

const layers: SystemLayer[] = [
  {
    layer: "Identity provider",
    owns: "Authentication",
    zoikoRole: "Navigates and normalizes",
    notClaimed: "First-party authentication or identity provider",
  },
  {
    layer: "Applications",
    owns: "Business actions",
    zoikoRole: "Requests decision and enforcements",
    notClaimed: "Replacement of application logic",
  },
  {
    layer: "Policy decision",
    owns: "Rule evaluation",
    zoikoRole: "Bounded domain rules and context",
    notClaimed: "Arbitrary general-rule engine (at runtime)",
  },
  {
    layer: "Evidence owner",
    owns: "Authoritative record",
    zoikoRole: "Preserves reviewable record",
    notClaimed: "Limitations to legally sufficient logs",
  },
];

export default function ExistingSystemsAuthoritativeSection() {
  return (
    <section className="w-full bg-[#f8fafc]/50 py-16 sm:py-20 lg:py-24">
      {/* Desktop Layout (hidden on mobile, visible on sm+) */}
      <div className="mx-auto hidden max-w-[1180px] px-6 sm:block sm:px-8 lg:px-12">
        {/* Title & Description */}
        <div className="max-w-[780px]">
          <h2 className="font-dm-serif text-3xl font-normal leading-[1.18] tracking-tight text-[#071324] sm:text-4xl lg:text-[44px]">
            Your existing systems stay authoritative for what they own
          </h2>
          <p className="mt-4 font-manrope text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
            Existing identity providers, directories and applications continue to own the functions they already run.
            Zoiko iD is designed to sit alongside them as an overlay, with explicit boundaries.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl sm:mt-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="bg-[#0b1626] text-white">
                  <th className="px-6 py-4 font-mono text-[11px] font-bold tracking-wider uppercase">
                    Layer
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] font-bold tracking-wider uppercase">
                    Owns
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-400">
                    Zoiko iD Role
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] font-bold tracking-wider uppercase text-rose-300">
                    Not Claimed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-manrope text-xs sm:text-[13px]">
                {layers.map((row) => (
                  <tr
                    key={row.layer}
                    className="transition-colors hover:bg-slate-50/60"
                  >
                    {/* Layer */}
                    <td className="px-6 py-5 font-bold text-[#071324]">
                      {row.layer}
                    </td>

                    {/* Owns */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2.5 font-medium text-[#1e293b]">
                        <span className="flex size-4 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                        {row.owns}
                      </div>
                    </td>

                    {/* Zoiko iD Role */}
                    <td className="bg-[#f0fdf4]/50 px-6 py-5 font-normal italic text-[#047857]">
                      {row.zoikoRole}
                    </td>

                    {/* Not Claimed */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 font-normal text-rose-600">
                        <X className="size-3.5 shrink-0 stroke-[2.5]" />
                        <span>{row.notClaimed}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Layout (strictly visible on mobile: sm:hidden) */}
      <div className="flex flex-col px-5 sm:hidden">
        {/* Category Pill with horizontal cyan line */}
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-[#0284c7] uppercase">
            ARCHITECTURAL COEXISTENCE
          </span>
        </div>

        {/* Mobile Heading */}
        <h2 className="font-dm-serif text-[28px] leading-[1.18] tracking-tight text-[#2563eb]">
          Your existing systems stay authoritative for what they own
        </h2>

        {/* Mobile Intro Description */}
        <p className="mt-4 font-manrope text-[13px] leading-relaxed text-[#4b5563]">
          Existing identity providers, directories and applications continue to own the functions they already run. Zoiko iD is designed to sit alongside them as an overlay, with explicit boundaries.
        </p>

        {/* Mobile Stacked Card with 4 Blocks */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md">
          {/* Block 1: Identity provider */}
          <div className="flex flex-col">
            <div className="bg-[#f0f4f9] px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              Identity provider
            </div>
            <div className="flex items-center gap-2.5 bg-white px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              <span className="size-3.5 border-2 border-[#2563eb] rounded-[3px]" />
              Authentication
            </div>
            <div className="bg-[#f0fdf4] px-4 py-3 font-manrope text-xs text-[#047857]">
              Alongside, as an overlay
            </div>
            <div className="bg-white px-4 py-3 font-manrope text-xs text-[#dc2626]">
              Automatic compatibility with every vendor
            </div>
          </div>

          {/* Block 2: Applications */}
          <div className="flex flex-col border-t border-slate-200/70">
            <div className="bg-[#f0f4f9] px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              Applications
            </div>
            <div className="flex items-center gap-2.5 bg-white px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              <span className="font-mono text-xs font-bold">&lt; &gt;</span>
              Business actions
            </div>
            <div className="bg-[#f0fdf4] px-4 py-3 font-manrope text-xs text-[#047857]">
              Requests decisions and enforces them
            </div>
            <div className="bg-white px-4 py-3 font-manrope text-xs text-[#dc2626]">
              Replacement of application logic
            </div>
          </div>

          {/* Block 3: Policy decision */}
          <div className="flex flex-col border-t border-slate-200/70">
            <div className="bg-[#f0f4f9] px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              Policy decision
            </div>
            <div className="flex items-center gap-2.5 bg-white px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              <span className="text-xs font-bold">&#8869;</span>
              Rule evaluation
            </div>
            <div className="bg-[#f0fdf4] px-4 py-3 font-manrope text-xs text-[#047857]">
              Bounded decision inputs and context
            </div>
            <div className="bg-white px-4 py-3 font-manrope text-xs text-[#dc2626]">
              Universal production engine guarantees
            </div>
          </div>

          {/* Block 4: Evidence owner */}
          <div className="flex flex-col border-t border-slate-200/70">
            <div className="bg-[#f0f4f9] px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              Evidence owner
            </div>
            <div className="flex items-center gap-2.5 bg-white px-4 py-3 font-manrope text-xs font-bold text-[#2563eb]">
              <span className="size-3.5 border-2 border-[#2563eb] rounded-[3px]" />
              Authoritative record
            </div>
            <div className="bg-[#f0fdf4] px-4 py-3 font-manrope text-xs text-[#047857]">
              Provenance and decision context
            </div>
            <div className="bg-white px-4 py-3 font-manrope text-xs text-[#dc2626]">
              Immutable or legally sufficient logs
            </div>
          </div>
        </div>

        {/* Mobile Disclaimer Note */}
        <p className="mt-4 font-manrope text-[11px] leading-relaxed text-[#64748b]">
          Support for a specific identity provider, protocol or application is confirmed for your environment. No universal compatibility is claimed.
        </p>
      </div>
    </section>
  );
}
