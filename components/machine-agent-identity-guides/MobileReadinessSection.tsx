import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const items = [
  { title: "Which non-human actors exist in your estate today", text: "Inventory them before choosing a model." },
  { title: "Who sponsors each actor, and who answers for it", text: "Name a person, not a team alias." },
  { title: "What each actor needs, and nothing more", text: "Write the bounds before granting any access." },
];

export default function ReadinessSection() {
  return (
    <section className="bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-[28px]">
        <div className="relative h-[420px] w-full overflow-hidden rounded-[20px]">
          <Image
            src="/machine-agent-identity-guides/mobile-before-you-act.webp"
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-[12px]">
          <Eyebrow>Readiness for your environment</Eyebrow>
          <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
            Before you act on any of this
          </h2>
          <p className="w-full max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[color:#64748b]">
            Concepts here are a starting point. Before you design around them, confirm the following with the people who own each system.
          </p>
          <ul className="flex w-full flex-col gap-[18px] pt-[12px]">
            {items.map((i) => (
              <li
                key={i.title}
                className="flex items-start gap-[14px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]"
              >
                <div className="flex h-[24px] w-[22px] shrink-0 flex-col items-start pt-[2px]">
                  <Image src="/machine-agent-identity-guides/mobile-icon-checklist.svg" alt="" width={22} height={22} className="size-[22px]" />
                </div>
                <div className="flex min-w-0 flex-col items-start gap-[6.4px]">
                  <p className="font-manrope text-[15px] font-normal leading-[24px] text-[#2563eb]">{i.title}</p>
                  <p className="font-manrope text-[13px] font-normal leading-[20.8px] text-[color:#64748b]">{i.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
