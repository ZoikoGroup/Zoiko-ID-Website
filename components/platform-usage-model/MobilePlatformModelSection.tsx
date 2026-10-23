import type { ReactNode } from "react";
import Image from "next/image";

const BADGE = "Concept, not a billing unit";

type Card = {
  title: string;
  body: ReactNode;
  img: string;
  icon: string;
  dark?: boolean;
  iconBg: string;
};

const cards: Card[] = [
  {
    title: "Identity",
    body: "Establish the actor: who or what is acting.",
    img: "/platform-usage-model/mobile-concept-identity.webp",
    icon: "/platform-usage-model/mobile-icon-identity.svg",
    dark: true,
    iconBg: "bg-[rgba(34,184,214,0.18)]",
  },
  {
    title: "Authority",
    body: "Scope the permitted action, and its representation.",
    img: "/platform-usage-model/mobile-concept-authority.webp",
    icon: "/platform-usage-model/mobile-icon-authority.svg",
    iconBg: "bg-[#e0f2fe]",
  },
];

export default function MobilePlatformModelSection() {
  return (
    <section id="concepts" className="lg:hidden w-full scroll-mt-[90px] px-[22px] pb-[60px] pt-[20px]">
      <div className="mx-auto w-full max-w-[560px]">
        <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[#2563eb]">
          The platform model
        </p>
        <h2 className="font-manrope text-[28px] font-extrabold leading-[33px] tracking-[-0.28px] text-[#2563eb]">
          Identity, authority and evidence, kept distinct
        </h2>
        <p className="max-w-[780px] pt-[12px] font-manrope text-[15px] leading-[24px] text-[#64748b]">
          Identity establishes the actor. Authority evaluates what the actor may do, and on whose behalf. Evidence
          explains the decision and its relevant changes. Existence of an identity does not, by itself, establish
          authority.
        </p>

        <div className="flex flex-col gap-[20px] pt-[44px]">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`relative flex flex-col gap-[10px] overflow-hidden rounded-[22px] p-[30px] ${
                c.dark ? "bg-[#071426]" : "border border-solid border-[#e2e8f0] bg-white"
              }`}
            >
              <div className="absolute left-0 right-0 top-0 h-[150px]">
                <Image src={c.img} alt="" fill sizes="(max-width: 1023px) 100vw, 560px" className="object-cover" />
              </div>
              <div className="h-[164px] w-full shrink-0" />
              <div className={`flex size-[42px] items-center justify-center rounded-[12px] ${c.iconBg}`}>
                <Image src={c.icon} alt="" width={20} height={20} />
              </div>
              <h3
                className={`h-[34.25px] font-manrope text-[21px] font-extrabold leading-[26.25px] ${
                  c.dark ? "text-white" : "text-[#2563eb]"
                }`}
              >
                <span className="relative -top-px">{c.title}</span>
              </h3>
              <p
                className={`font-manrope text-[14px] leading-[22.4px] ${
                  c.dark ? "text-[#94a3b8]" : "text-[#64748b]"
                }`}
              >
                {c.body}
              </p>
              <p
                className={`w-full rounded-[10px] px-[12px] pb-[9.19px] pt-[8px] font-manrope text-[12px] leading-[19.2px] ${
                  c.dark ? "bg-[rgba(255,255,255,0.08)] text-[#e2e8f0]" : "bg-[#f5f7fa] text-[#2563eb]"
                }`}
              >
                {BADGE}
              </p>
            </div>
          ))}

          <div className="relative flex items-center gap-[30px] overflow-hidden rounded-[22px] border border-solid border-[#e2e8f0] bg-white p-[30px]">
            <div className="relative min-h-[160px] min-w-px flex-1 self-stretch">
              <div className="absolute left-[-30px] right-0 top-[-30px] aspect-[137.69/220]">
                <Image
                  src="/platform-usage-model/mobile-concept-evidence.webp"
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex w-[168.31px] shrink-0 flex-col items-start">
              <div className="flex size-[42px] items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                <Image src="/platform-usage-model/mobile-icon-evidence.svg" alt="" width={20} height={20} />
              </div>
              <h3 className="mt-[11px] font-manrope text-[21px] font-extrabold leading-[26.25px] text-[#2563eb]">
                Evidence
              </h3>
              <p className="mt-[8.47px] whitespace-nowrap font-manrope text-[14px] leading-[22.4px] text-[#64748b]">
                Record decision
                <br />
                provenance, subject to
                <br />
                access and privacy
                <br />
                controls. Evidence is not
                <br />
                presented as surveillance
                <br />
                or as unlimited storage.
              </p>
              <p className="whitespace-nowrap rounded-[10px] bg-[#f5f7fa] px-[12px] py-[6px] font-manrope text-[12px] leading-[19.2px] text-[#2563eb]">
                {BADGE}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
