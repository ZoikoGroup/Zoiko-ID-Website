import Image from "next/image";
import Link from "next/link";
import Eyebrow from "./MobileEyebrow";

const elements = [
  ["Agent principal", "The identity that acts."],
  ["Sponsor", "The human or organization accountable for it."],
  ["Task mandate", "The task the agent is allowed to perform."],
  ["Resource and tool bounds", "The resources and tools that may be used."],
  ["Duration", "The period in which the mandate applies."],
  ["Accountable owner", "The person who answers for outcomes."],
];

export default function SponsorshipDelegationSection() {
  return (
    <section className="w-full px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[28px]">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[12px]">
            <Eyebrow>Agent sponsorship and delegation</Eyebrow>
            <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
              An agent acts for someone,
              <br />
              within limits
            </h2>
            <p className="max-w-[820px] pt-[1.39px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
              Six elements define an agent&apos;s authority. Each one is a design concept. Where enforcement is not verified, this guide says “design concept”, not “currently enforces”.
            </p>
            <ul className="flex flex-col gap-[14px] pt-[12px]">
              {elements.map(([title, text]) => (
                <li key={title} className="flex flex-col gap-[3.5px] rounded-[14px] border border-solid border-[#e2e8f0] bg-white p-[18px]">
                  <h3 className="font-manrope text-[14px] font-bold leading-[22.4px] text-[#2563eb]">{title}</h3>
                  <p className="font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[460px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/machine-agent-identity-guides/mobile-sponsorship-review.webp"
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex items-start gap-[14px] rounded-br-[12px] rounded-tr-[12px] border-l-4 border-solid border-[#dc2626] bg-[#fef2f2] pb-[18px] pl-[22px] pr-[22px] pt-[30px]">
          <div className="flex h-[26px] w-[24px] shrink-0 flex-col items-start pt-[2px]">
            <Image src="/machine-agent-identity-guides/mobile-callout-danger.svg" alt="" width={24} height={24} />
          </div>
          <p className="font-manrope text-[15px] leading-[24px] text-[#2563eb]">
            <strong className="font-bold">No auto-grant.</strong> An agent&apos;s identity, its sponsor&apos;s position, or a credential alone does not give it authority. Every permission must be explicitly bounded.
          </p>
        </div>
        <p className="font-manrope text-[15px] leading-[24px]">
          <Link
            href="/authority-explainers"
            className="rounded-sm font-bold text-[color:#2563eb] outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
          >
            Delegated Authority Explainers →
          </Link>{" "}
          <span className="text-[13px] leading-[20.8px] text-[color:#64748b]">(destination pending approval)</span>
        </p>
      </div>
    </section>
  );
}
