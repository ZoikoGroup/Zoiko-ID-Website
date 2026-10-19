import Image from "next/image";

interface ReviewQuestion {
  iconSrc: string;
  text: string;
}

const scopeQuestions: ReviewQuestion[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6229.svg",
    text: "Which actor class and component are in scope?",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6235.svg",
    text: "Which edition and environment apply?",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6241.svg",
    text: "Which jurisdiction is relevant?",
  },
];

const evidenceQuestions: ReviewQuestion[] = [
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6255.svg",
    text: "What is the report period and assessor?",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6261.svg",
    text: "Is the evidence current, superseded or withdrawn?",
  },
  {
    iconSrc: "/assurance-compliance-standards/icon-411_6267.svg",
    text: "What restrictions apply to sharing it?",
  },
];

export default function ComplianceStandardsEnterpriseReviewSection() {
  return (
    <section className="bg-[#FFFFFF] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-[60px]">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <h2 className="font-dm-serif text-3xl font-normal text-[#0B1B33] sm:text-4xl lg:text-[52px] lg:leading-[58.9px]">
            Questions to bring to a scoped review
          </h2>
        </div>

        {/* 2 Big Cards */}
        <div className="flex flex-col gap-7 pt-7">
          {/* Card 1: Scope questions (Image Left, Content Right) */}
          <div className="flex flex-col overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm lg:flex-row">
            <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-slate-100 sm:h-[340px] lg:h-[360px] lg:w-1/2">
              <Image
                src="/assurance-compliance-standards/img-564fa6225952d82badd8e83fd83a98aacdce662b.png"
                alt="Team meeting around a table discussing scope"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
              <h3 className="font-dm-serif text-2xl font-normal leading-[30px] text-[#0B1B33]">
                Scope questions
              </h3>

              <div className="mt-6 flex flex-col gap-3">
                {scopeQuestions.map((q) => (
                  <div
                    key={q.text}
                    className="flex items-center gap-3.5 rounded-[12px] bg-[#F1F5F9] px-[18px] py-4"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <Image
                        src={q.iconSrc}
                        alt=""
                        width={18}
                        height={18}
                        className="shrink-0"
                      />
                    </div>
                    <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                      {q.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Evidence questions (Content Left, Image Right) */}
          <div className="flex flex-col-reverse overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-[#FFFFFF] shadow-sm lg:flex-row">
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
              <h3 className="font-dm-serif text-2xl font-normal leading-[30px] text-[#0B1B33]">
                Evidence questions
              </h3>

              <div className="mt-6 flex flex-col gap-3">
                {evidenceQuestions.map((q) => (
                  <div
                    key={q.text}
                    className="flex items-center gap-3.5 rounded-[12px] bg-[#F1F5F9] px-[18px] py-4"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                      <Image
                        src={q.iconSrc}
                        alt=""
                        width={18}
                        height={18}
                        className="shrink-0"
                      />
                    </div>
                    <span className="font-manrope text-[14px] font-normal leading-[22.4px] text-[#334155]">
                      {q.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[280px] w-full shrink-0 overflow-hidden bg-slate-100 sm:h-[340px] lg:h-[360px] lg:w-1/2">
              <Image
                src="/assurance-compliance-standards/img-38282d8ed0a0825e0a721f92a62e2dd36c18fa01.png"
                alt="Office workspace with evidence documents"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
