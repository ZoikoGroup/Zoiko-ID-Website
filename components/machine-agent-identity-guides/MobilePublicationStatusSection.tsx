import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const gates = [
  { icon: "icon-verified.svg", title: "Canonical route", text: "Bound to the approved route registry." },
  { icon: "gate-guide-inventory.svg", title: "Guide inventory", text: "Reviewed guides exist in the registry." },
  { icon: "icon-check-badge.svg", title: "Claim approvals", text: "Every technical claim has an approved source." },
  { icon: "gate-accessibility.svg", title: "Accessibility verification", text: "Keyboard, zoom and reflow tests pass." },
];

export default function PublicationStatusSection() {
  return (
    <section className="bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <Eyebrow>Publication status</Eyebrow>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          What must be true before this page goes live
        </h2>
        <p className="w-full max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[color:#64748b]">
          This page is a prepared draft. Each gate below must be met and recorded before publication. Until then, the page makes no live claim.
        </p>
        <ul className="flex w-full flex-col gap-[18px] pb-[20px] pt-[28px]">
          {gates.map((g) => (
            <li
              key={g.title}
              className="flex flex-col items-start gap-[6px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]"
            >
              <div className="flex w-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe] py-[11px]">
                <Image src={`/machine-agent-identity-guides/mobile-${g.icon}`} alt="" width={22} height={22} className="size-[22px]" />
              </div>
              <h3 className="w-full pt-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{g.title}</h3>
              <p className="w-full font-manrope text-[14px] font-normal leading-[22.4px] text-[color:#64748b]">{g.text}</p>
              <div className="pt-[7px]">
                <span className="inline-flex items-center whitespace-nowrap rounded-full bg-[#fef3c7] px-[11px] py-[5px] font-manrope text-[11px] font-extrabold uppercase leading-[17.6px] tracking-[0.88px] text-[color:#92400e]">
                  Pending
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-[4px] border-solid border-[#2563eb] bg-[#eff6ff] px-[22px] py-[18px]">
          <div className="flex h-[26px] w-[24px] shrink-0 flex-col items-start pt-[2px]">
            <Image src="/machine-agent-identity-guides/mobile-callout-info.svg" alt="" width={24} height={24} className="size-[24px]" />
          </div>
          <p className="min-w-0 pr-[14px] font-manrope text-[15px] leading-[24px] text-[#2563eb]">
            <strong className="font-bold">Approval of this draft is not certification.</strong> It does not make a product feature available, and it does not make an unverified guide public.
          </p>
        </div>
      </div>
    </section>
  );
}
