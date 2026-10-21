import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const items = [
  { icon: "boundary-credentials.svg", title: "Does not issue credentials", text: "Credential issuance is covered in the technical documentation." },
  { icon: "boundary-mandates.svg", title: "Does not create mandates", text: "No grant is created or changed from this page." },
  { icon: "boundary-legal.svg", title: "Does not give legal advice", text: "Regulatory and legal questions go to counsel and the Privacy Notice." },
  { icon: "boundary-availability.svg", title: "Does not publish availability", text: "Which integrations are live is stated only in approved status records." },
  { icon: "icon-verified.svg", title: "Does not certify conformance", text: "No certification or compliance statement is made here." },
  { icon: "boundary-deployment.svg", title: "Does not describe your deployment", text: "Diagrams are reference patterns, not your topology." },
];

export default function WhatThisPageDoesNotDoSection() {
  return (
    <section className="px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-start gap-[12px]">
        <Eyebrow>What this page does not do</Eyebrow>
        <h2 className="w-full font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Boundaries of this guide
        </h2>
        <p className="w-full max-w-[820px] pt-[2px] font-manrope text-[16px] font-normal leading-[25.6px] text-[color:#64748b]">
          A short list of what belongs elsewhere. Each item links to the page that owns it, rather than being answered here.
        </p>
        <ul className="flex w-full flex-col gap-[18px] pt-[28px]">
          {items.map((i) => (
            <li
              key={i.title}
              className="flex flex-col items-start gap-[8px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]"
            >
              <div className="flex h-[56px] w-[44px] flex-col items-start pb-[12px]">
                <div className="flex size-[44px] items-center justify-center rounded-[12px] bg-[#e0f2fe]">
                  <Image src={`/machine-agent-identity-guides/mobile-${i.icon}`} alt="" width={22} height={22} className="size-[22px]" />
                </div>
              </div>
              <h3 className="w-full pb-[6px] font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{i.title}</h3>
              <p className="w-full font-manrope text-[14px] font-normal leading-[22.4px] text-[color:#64748b]">{i.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
