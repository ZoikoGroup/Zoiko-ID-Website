import Image from "next/image";

const states = [
  {
    badge: "State A · Published",
    badgeClass: "border border-dashed border-[#94a3b8] bg-[#f1f5f9] text-[#334155]",
    title: "Public pricing available",
    titlePad: "pt-[6px]",
    body: "Shown only when a verified catalog entry has a price, unit, conditions and effective date.",
    status: "Not shown in this layout",
  },
  {
    badge: "State B · On request",
    badgeClass: "bg-[#fef3c7] text-[#92400e]",
    title: "Discuss commercial scope with sales",
    titlePad: "pt-[6.01px]",
    body: "The default state. Scope is reviewed with sales, and no figure is shown.",
    status: "Active in this layout",
  },
  {
    badge: "State C · Unknown",
    badgeClass: "border border-dashed border-[#94a3b8] bg-[#f1f5f9] text-[#334155]",
    title: "Commercial record unavailable",
    titlePad: "pt-[6px]",
    body: "The commercial source cannot be verified. A neutral route is shown; no zero or placeholder value.",
    status: "Neutral route shown",
  },
];

export default function MobilePublishedStatesSection() {
  return (
    <section id="section-04" className="w-full px-[11px]">
      <div className="mx-auto w-full max-w-[560px] border-b border-solid border-[#e2e8f0] pb-[90px]">
        <p className="mb-[-8.7px] font-dm-serif font-normal text-[64px] leading-[64px] text-[#e0f2fe]">04</p>
        <h2 className="mb-[-8.7px] pb-[0.75px] font-dm-serif font-normal text-[30px] leading-[34.5px] text-[#2563eb]">
          What we can and cannot publish today
        </h2>
        <div className="mb-[-8.7px] max-w-[720px] pt-[21.75px]">
          <p className="font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
            This page shows one of three disclosure states. Each state is set by the commercial registry, not by the page author.
          </p>
        </div>
        <div className="relative mb-[-8.7px] h-[268.7px] w-full overflow-hidden">
          <Image
            src="/pricing-overview/mobile-published-state.webp"
            alt=""
            fill
            sizes="(min-width: 560px) 560px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mb-[-8.7px] border-t-2 border-solid border-[#2563eb] pt-[42.7px]">
          {states.map((s) => (
            <div key={s.badge} className="flex flex-col items-start gap-[5px] pr-[24px] pt-[24px]">
              <span
                className={`flex items-center rounded-[999px] px-[11px] pb-[4.64px] pt-[4.5px] font-manrope text-[11px] font-extrabold uppercase leading-[18.15px] tracking-[0.88px] whitespace-nowrap ${s.badgeClass}`}
              >
                {s.badge}
              </span>
              <h3 className={`w-full font-manrope font-bold text-[17px] leading-[28px] text-[#2563eb] ${s.titlePad}`}>
                {s.title}
              </h3>
              <p className="w-full font-manrope font-normal text-[14px] leading-[23.1px] text-[#64748b]">{s.body}</p>
              <p className="w-full pt-[9px] font-manrope font-bold text-[13px] leading-[21.45px] text-[#2563eb]">
                {s.status}
              </p>
            </div>
          ))}
        </div>
        <p className="pb-[0.875px] pt-[35.825px] font-manrope font-normal text-[15px] leading-[24.75px] text-[#2563eb]">
          <strong className="font-bold">Never shown:</strong>
          {" zero figures, “TBD” presented as a price, crossed-out amounts, or unapproved discounts. No free plan or free trial is stated in any published source."}
        </p>
      </div>
    </section>
  );
}
