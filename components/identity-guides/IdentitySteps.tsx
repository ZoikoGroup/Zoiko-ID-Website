import React from "react";

interface StepMeta {
  id: number;
}

const stepItems: StepMeta[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
] as const;

const getStepContent = (id: number) => {
  switch (id) {
    case 1:
      return {
        title: "Who or what is the actor?",
        description:
          "Learn how people, organizations, services and agents are represented.",
      };
    case 2:
      return {
        title: "Verification versus authentication",
        description:
          "Why a sign-in claim and an identity claim are different checks.",
      };
    case 3:
      return {
        title: "Credentials",
        description:
          "Structured claims, with the roles of issuer, holder and verifier.",
      };
    case 4:
      return {
        title: "Authorization and delegated authority",
        description: "What may be done, by whom, within which scope and time.",
      };
    case 5:
      return {
        title: "Trust signals and revocation",
        description:
          "How permissions may need re-checking when context changes.",
      };
    case 6:
      return {
        title: "Evidence and oversight",
        description:
          "How decisions are documented for review, within privacy limits.",
      };
    default:
      return { title: "", description: "" };
  }
};

export default function IdentitySteps() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:py-24">
      <div className="max-w-[1216px] mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="text-start max-w-2xl mb-16 px-4">
          <h1 className="text-3xl md:text-[40px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-tight">
            Start with identity, in six steps
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            A suggested sequence for first-time readers. Each step links to its
            guide once that guide is published. Unpublished steps are shown
            without a link.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {stepItems.map(({ id }) => {
            const { title, description } = getStepContent(id);
            return (
              <div
                key={id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  {/* Top Row: Number badge and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm shrink-0">
                      {id}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                {/* Footer Button / Link */}
                <div>
                  <a
                    href="#"
                    className="w-full bg-[#F8FAFC] hover:bg-[#F1F5F9] text-slate-500 text-xs font-medium py-2.5 px-3 rounded-lg border border-slate-200/60 flex items-center gap-2 transition-colors duration-150"
                  >
                    <svg
                      className="w-4 h-4 text-slate-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Destination pending publication
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
