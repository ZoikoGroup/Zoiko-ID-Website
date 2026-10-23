import Image from "next/image";

const gates = [
  { icon: "icon-verified.svg", title: "Canonical route", body: "Bound to the approved route registry." },
  { icon: "gate-guide-inventory.svg", title: "Guide inventory", body: "Reviewed guides exist in the registry." },
  { icon: "icon-check-badge.svg", title: "Claim approvals", body: "Every technical claim has an approved source." },
  { icon: "gate-accessibility.svg", title: "Accessibility verification", body: "Keyboard, zoom and reflow tests pass." },
];

export default function LaunchGatesSection() {
  return (
    <section className="w-full bg-white py-[105px]">
      <div className="mx-auto flex w-full flex-col gap-[60px] px-[160px]">
        <div className="flex flex-col gap-[12px]">
          <h2 className="max-w-[824px] font-dm-serif text-[52px] font-normal leading-[57.9px] text-[#07111f]">
            What must be true before this page goes live
          </h2>
          <p className="max-w-[820px] pt-[1.295px] font-manrope text-[16px] font-normal leading-[25.6px] text-[#64748b]">
            This page is a prepared draft. Each gate below must be met and recorded before publication. Until then, the page makes no live claim.
          </p>
        </div>
        <ul className="grid grid-cols-4 gap-[18px]">
          {gates.map((g) => (
            <li key={g.title} className="flex min-w-px flex-col items-start gap-[6px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]">
              <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                <Image src={`/machine-agent-identity-guides/desktop-${g.icon}`} alt="" width={22} height={22} className="size-[22px]" />
              </div>
              <h3 className="w-full pt-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{g.title}</h3>
              <p className="max-w-[200px] font-manrope text-[14px] font-normal leading-[22.4px] text-[#64748b]">{g.body}</p>
              <div className="pt-[7px]">
                <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[#92400e]">
                  Pending
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
