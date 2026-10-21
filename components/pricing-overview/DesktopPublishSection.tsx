import Image from "next/image";

const pill =
  "flex items-center rounded-[999px] px-[11px] pb-[4.64px] pt-[4.5px] font-manrope font-extrabold text-[11px] leading-[18.15px] tracking-[0.88px] uppercase whitespace-nowrap";

const states = [
  {
    badge: "State A · Published",
    badgeClass: "border border-dashed border-[#94a3b8] bg-[#f1f5f9] text-[#334155]",
    title: "Public pricing available",
    body: "Shown only when a verified catalog entry has a price, unit, conditions and effective date.",
    note: "Not shown in this layout",
    pb: "pb-[28.04px]",
  },
  {
    badge: "State B · On request",
    badgeClass: "bg-[#fef3c7] text-[#92400e]",
    title: "Discuss commercial scope with sales",
    body: "The default state. Scope is reviewed with sales, and no figure is shown.",
    note: "Active in this layout",
    pb: "pb-[25.09px]",
  },
  {
    badge: "State C · Unknown",
    badgeClass: "border border-dashed border-[#94a3b8] bg-[#f1f5f9] text-[#334155]",
    title: "Commercial record unavailable",
    body: "The commercial source cannot be verified. A neutral route is shown; no zero or placeholder value.",
    note: "Neutral route shown",
    pb: "",
  },
];

export default function DesktopPublishSection() {
  return (
    <section
      id="section-04"
      className="flex w-full flex-col items-start gap-[36px] border-b border-solid border-[#e2e8f0] pb-[105px]"
    >
      <div className="flex w-full flex-col items-start">
        <p className="font-dm-serif font-normal text-[96px] leading-[96px] text-[#e0f2fe]">04</p>
        <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
          What we can and cannot publish today
        </h2>
        <p className="max-w-[720px] font-manrope font-normal text-[17px] leading-[28px] text-[#64748b]">
          This page shows one of three disclosure states. Each state is set by the commercial registry, not by the page author.
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-[34px]">
        <div className="relative h-[429px] w-full">
          <Image
            src="/pricing-overview/desktop-published-state.webp"
            alt="Illustration of the three pricing disclosure states"
            fill
            sizes="(min-width: 1440px) 770px, 70vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-[28px]">
          <ul className="flex w-full items-start justify-center border-t-2 border-solid border-[#07111f]">
            {states.map((s) => (
              <li
                key={s.badge}
                className={`flex min-w-px flex-1 flex-col items-start gap-[5.1px] pr-[24px] pt-[24px] ${s.pb}`}
              >
                <span className={`${pill} ${s.badgeClass}`}>{s.badge}</span>
                <h3 className="w-full pt-[5.9px] font-manrope font-bold text-[17px] leading-[28px] text-[#07111f]">
                  {s.title}
                </h3>
                <p className="w-full font-manrope font-normal text-[14px] leading-[23.1px] text-[#64748b]">{s.body}</p>
                <p className="w-full pt-[8.9px] font-manrope font-bold text-[13px] leading-[21.45px] text-[#07111f]">
                  {s.note}
                </p>
              </li>
            ))}
          </ul>
          <p className="w-full font-manrope font-bold text-[15px] leading-[24.75px] text-[#07111f]">
            <span>Never shown:</span>
            <span className="font-normal">{` zero figures, “TBD” presented as a price, crossed-out amounts, or unapproved discounts. No free plan or free trial is stated in any published source.`}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
