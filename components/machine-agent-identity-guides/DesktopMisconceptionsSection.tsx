import Image from "next/image";

const items = [
  {
    claim: "“A machine identity can do anything its host can.”",
    body: "An identity establishes who is calling. It does not establish what the caller may do.",
    correct: "Correct: each action needs an explicit, bounded permission.",
  },
  {
    claim: "“An agent with a sponsor is fully accountable.”",
    body: "A sponsor is one part of the picture. Scope, duration and the policy in force also bound the agent.",
    correct: "Correct: sponsorship is necessary, not sufficient.",
  },
  {
    claim: "“Rotating a secret makes it safe.”",
    body: "Rotation reduces one risk. It does not change what the actor is permitted to do.",
    correct: "Correct: lifecycle and authority are separate controls.",
  },
  {
    claim: "“A log entry proves the action was allowed.”",
    body: "Evidence explains a recorded decision. It does not prove that authority is still current.",
    correct: "Correct: check current status separately.",
  },
];

export default function MisconceptionsSection() {
  return (
    <section id="misconceptions" className="w-full px-[160px] bg-white py-[105px]">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
              Four things this guide does not let you assume
            </h2>
            <p className="max-w-[820px] pt-[1.3px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
              These are the most frequent mistakes readers make. Each one is corrected here, so the concepts are not stretched beyond what they establish.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-[22px]">
            {items.map((item) => (
              <li
                key={item.claim}
                className="flex items-start gap-[18px] rounded-[18px] border border-[#e2e8f0] bg-white p-[26px]"
              >
                <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[19px] bg-[#fee2e2]">
                  <Image src="/machine-agent-identity-guides/desktop-icon-misconception.svg" width={18} height={18} alt="" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
                  <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#07111f]">{item.claim}</h3>
                  <p className="pb-[4px] font-manrope text-[14px] leading-[22.4px] text-[#64748b]">{item.body}</p>
                  <p className="rounded-[8px] bg-[#f1f5f9] px-[10px] py-[8px] font-manrope text-[13px] leading-[20.8px] text-[#07111f]">
                    {item.correct}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
