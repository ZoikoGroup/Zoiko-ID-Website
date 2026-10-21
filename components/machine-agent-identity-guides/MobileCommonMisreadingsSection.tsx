import Image from "next/image";
import Eyebrow from "./MobileEyebrow";

const items = [
  ["“A machine identity can do anything its host can.”", "An identity establishes who is calling. It does not establish what the caller may do.", "Correct: each action needs an explicit, bounded permission."],
  ["“An agent with a sponsor is fully accountable.”", "A sponsor is one part of the picture. Scope, duration and the policy in force also bound the agent.", "Correct: sponsorship is necessary, not sufficient."],
  ["“Rotating a secret makes it safe.”", "Rotation reduces one risk. It does not change what the actor is permitted to do.", "Correct: lifecycle and authority are separate controls."],
  ["“A log entry proves the action was allowed.”", "Evidence explains a recorded decision. It does not prove that authority is still current.", "Correct: check current status separately."],
];

export default function CommonMisreadingsSection() {
  return (
    <section className="w-full bg-[#f1f5f9] px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[12px]">
        <Eyebrow>Common misreadings</Eyebrow>
        <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
          Four things this guide does
          <br />
          not let you assume
        </h2>
        <p className="max-w-[820px] pt-[1.39px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
          These are the most frequent mistakes readers make. Each one is corrected here, so the concepts are not stretched beyond what they establish.
        </p>
        <ul className="flex flex-col gap-[22px] pt-[28px]">
          {items.map(([claim, why, fix]) => (
            <li key={claim} className="flex items-start gap-[18px] rounded-[18px] border border-solid border-[#e2e8f0] bg-white p-[26px]">
              <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[19px] bg-[#fee2e2]">
                <Image src="/machine-agent-identity-guides/mobile-icon-misconception.svg" alt="" width={18} height={18} />
              </div>
              <div className="flex min-w-px flex-1 flex-col gap-[3.4px]">
                <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#2563eb]">{claim}</h3>
                <p className="font-manrope text-[14px] leading-[22.4px] text-[color:#64748b]">{why}</p>
                <p className="rounded-[8px] bg-[#f1f5f9] px-[10px] pb-[8px] pt-[12.6px] font-manrope text-[13px] leading-[20.8px] text-[#2563eb]">{fix}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
