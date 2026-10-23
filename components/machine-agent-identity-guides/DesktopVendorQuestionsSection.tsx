import Image from "next/image";

const questions = [
  { q: "Which actor types does the product name explicitly, and which ones does it leave out?", hint: "Ask for the written list, not a general assurance." },
  { q: "How is a mandate bounded: by action, resource, purpose and time?", hint: "Ask for a worked example in your own terms." },
  { q: "What happens to an agent's access when its sponsor leaves the organization?", hint: "Ask for the process and who approves it." },
  { q: "When a permission is changed, how soon does that change take effect?", hint: "Ask for the approved timing statement and its source." },
  { q: "What does a decision record contain, and who can see it?", hint: "Ask for field names and access roles in writing." },
  { q: "Which protocols and integrations are generally available today?", hint: "Ask for the current support statement, dated and sourced." },
];

export default function VendorQuestionsSection() {
  return (
    <section id="vendor-questions" className="w-full px-[160px] bg-white py-[105px]">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-[40px]">
          <div className="flex items-center justify-center gap-[28px]">
            <div className="flex min-w-0 flex-1 flex-col gap-[11.4px]">
              <h2 className="font-dm-serif font-normal text-[52px] leading-[57.9px] text-[#07111f]">
                Questions to ask any vendor, including us
              </h2>
              <p className="max-w-[820px] pt-[1.9px] font-manrope text-[16px] leading-[25.6px] text-[#64748b]">
                Use these to test a claim before you rely on it. They are questions, not answers, so this page does not assert any of the outcomes they ask about.
              </p>
            </div>
            <div className="relative h-[300px] min-w-0 flex-1 overflow-hidden rounded-[20px]">
              <Image
                src="/machine-agent-identity-guides/desktop-vendor-questions.webp"
                alt=""
                fill
                sizes="(min-width: 1440px) 546px, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-[18px]">
            {questions.map((item) => (
              <li
                key={item.q}
                className="flex items-start gap-[14px] rounded-[16px] border border-[#e2e8f0] bg-white p-[22px]"
              >
                <div className="flex h-[24px] w-[22px] shrink-0 flex-col pt-[2px]">
                  <Image src="/machine-agent-identity-guides/desktop-icon-question.svg" width={22} height={22} alt="" />
                </div>
                <div className="flex min-w-0 flex-col gap-[6.4px] pr-[10px] font-manrope">
                  <p className="text-[15px] leading-[24px] text-[#07111f]">{item.q}</p>
                  <p className="text-[13px] leading-[20.8px] text-[#64748b]">{item.hint}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
