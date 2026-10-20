import Image from "next/image";

interface MisconceptionItem {
  icon: string;
  misconception: string;
  explanation: string;
  correction: string;
}

const misconceptions: MisconceptionItem[] = [
  {
    icon: "/authority-explainers/misconception-icon-login.svg",
    misconception: "“Logging in means I can act for my employer.”",
    explanation: "Sign-in establishes identity. It does not establish a mandate.",
    correction: "Correct: a mandate must be defined separately.",
  },
  {
    icon: "/authority-explainers/misconception-icon-ai.svg",
    misconception: "“An AI agent is trusted, so it can do anything.”",
    explanation: "An agent's identity does not grant unlimited authority.",
    correction: "Correct: each action must fall within an explicit, sponsored mandate.",
  },
  {
    icon: "/authority-explainers/misconception-icon-log.svg",
    misconception: "“A log proves the action was allowed.”",
    explanation: "Evidence explains a recorded decision.",
    correction: "Correct: check current status separately.",
  },
  {
    icon: "/authority-explainers/misconception-icon-credential.svg",
    misconception: "“A credential is the same as permission.”",
    explanation: "A credential carries a claim. Access still depends on a decision.",
    correction: "Correct: a claim and a decision are separate steps.",
  },
];

export default function AuthorityMisconceptionsSection() {
  return (
    <section className="bg-white-solid px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px] xl:px-40">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-14 lg:gap-16">
        {/* Heading */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="font-dm-serif text-3xl font-normal leading-tight text-[#0B1B33] sm:text-5xl lg:text-[52px] lg:leading-[51.92px]">
            Four things this explainer does not say
          </h2>
          <p className="max-w-[780px] font-manrope text-base font-normal leading-[25.6px] text-[#64748B]">
            These are frequent misreadings. Each one is corrected here so the concepts are not stretched beyond what they establish.
          </p>
        </div>

        {/* 2x2 Misconceptions Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {misconceptions.map((item) => (
            <div
              key={item.misconception}
              className="flex min-h-[152px] items-start gap-4 rounded-[18px] border border-[#E2E8F0] bg-white-solid p-6 shadow-sm transition-all duration-150 hover:border-slate-300 sm:gap-[18px] sm:p-[26px]"
            >
              {/* Red round badge with icon */}
              <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-[#FEE2E2]">
                <Image
                  src={item.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px]"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-manrope text-[17px] font-bold leading-[27.2px] text-[#0B1B33]">
                  {item.misconception}
                </h3>
                <p className="font-manrope text-sm font-normal leading-[22.4px] text-[#64748B]">
                  {item.explanation}
                </p>
                <div className="mt-1 rounded-lg bg-[#F1F5F9] px-2.5 py-2">
                  <span className="font-manrope text-[13px] font-normal leading-[20.8px] text-[#0B1B33]">
                    {item.correction}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
