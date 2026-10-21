import Image from "next/image";

const questions = [
  { q: "Which actor types does the product name explicitly, and which ones does it leave out?", hint: "Ask for the written list, not a general assurance." },
  { q: "How is a mandate bounded: by action, resource, purpose and time?", hint: "Ask for a worked example in your own terms." },
  { q: "What happens to an agent's access when its sponsor leaves the organization?", hint: "Ask for the process and who approves it." },
  { q: "When a permission is changed, how soon does that change take effect?", hint: "Ask for the approved timing statement and its source." },
  { q: "What does a decision record contain, and who can see it?", hint: "Ask for field names and access roles in writing." },
  { q: "Which protocols and integrations are generally available today?", hint: "Ask for the current support statement, dated and sourced." },
];

export default function EvaluationChecklistSection() {
  return (
    <section id="evaluation-checklist" className="w-full bg-white px-[22px] py-[60px]">
      <div className="mx-auto flex w-full max-w-[560px] flex-col gap-[40px]">
        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex h-[19.19px] items-center gap-[10px]">
              <span className="h-[2px] w-[28px] shrink-0 bg-[#22b8d6]" />
              <p className="font-manrope text-[12px] font-extrabold uppercase leading-[19.2px] tracking-[1.68px] text-[color:#2563eb]">
                Evaluation checklist
              </p>
            </div>
            <h2 className="font-dm-serif text-[30px] font-normal leading-[35.4px] text-[#2563eb]">
              Questions to ask any vendor, including us
            </h2>
            <p className="max-w-[820px] pt-[1.39px] font-manrope text-[16px] leading-[25.6px] text-[color:#64748b]">
              Use these to test a claim before you rely on it. They are questions, not answers, so this page does not assert any of the outcomes they ask about.
            </p>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/machine-agent-identity-guides/mobile-vendor-questions.webp"
              alt="Evaluator reviewing vendor questions"
              fill
              sizes="(max-width: 560px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
        <ul className="flex flex-col gap-[18px]">
          {questions.map((item) => (
            <li
              key={item.q}
              className="flex items-start gap-[14px] rounded-[16px] border border-solid border-[#e2e8f0] bg-white p-[22px]"
            >
              <div className="flex h-[24px] w-[22px] shrink-0 items-start pt-[2px]">
                <Image
                  src="/machine-agent-identity-guides/mobile-icon-question.svg"
                  alt=""
                  width={22}
                  height={22}
                />
              </div>
              <div className="flex min-w-0 flex-col gap-[5.4px] font-manrope">
                <p className="text-[15px] leading-[24px] text-[#2563eb]">{item.q}</p>
                <p className="text-[13px] leading-[20.8px] text-[color:#64748b]">{item.hint}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
