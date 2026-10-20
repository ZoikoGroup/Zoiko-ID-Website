import React from "react";
import { Lock, ShieldCheck, CreditCard, AlertTriangle } from "lucide-react";

interface CheckCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  whenUsedTitle: string;
  whenUsedText: string;
  notEquivalentTitle: string;
  notEquivalentText: string;
}

const checkCards: CheckCard[] = [
  {
    icon: <Lock className="w-5 h-5 text-sky-700" />,
    title: "Authentication",
    description: "Verifies an asserted sign-in.",
    whenUsedTitle: "When used:",
    whenUsedText: "confirming a session is held by the expected party.",
    notEquivalentTitle: "Not equivalent to:",
    notEquivalentText: "a permission to take a business action.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-sky-700" />,
    title: "Verification",
    description: "Assesses an identity claim against evidence.",
    whenUsedTitle: "When used:",
    whenUsedText:
      "establishing that a claim is supported by governed evidence.",
    notEquivalentTitle: "Not equivalent to:",
    notEquivalentText: "an ongoing authorization decision.",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-sky-700" />,
    title: "Credentials",
    description: "A structured claim with issuer, holder and verifier.",
    whenUsedTitle: "When used:",
    whenUsedText: "carrying a verifiable claim where implemented and verified.",
    notEquivalentTitle: "Not equivalent to:",
    notEquivalentText: "proof of current permission.",
  },
] as const;

export default function ThreeChecks() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-4xl mb-16">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Three checks, three different questions
          </h1>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {checkCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* When used box (Green tint) */}
                <div className="bg-emerald-50/60 border border-emerald-200/50 rounded-xl p-3.5 mb-3">
                  <span className="block text-xs font-semibold text-emerald-900 mb-0.5">
                    {card.whenUsedTitle}
                  </span>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {card.whenUsedText}
                  </p>
                </div>

                {/* Not equivalent to box (Red/Pink tint) */}
                <div className="bg-rose-50/60 border border-rose-200/50 rounded-xl p-3.5">
                  <span className="block text-xs font-semibold text-rose-900 mb-0.5">
                    {card.notEquivalentTitle}
                  </span>
                  <p className="text-xs text-rose-800 leading-relaxed">
                    {card.notEquivalentText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Banner */}
        <div className="w-full bg-amber-50/70 rounded-xl p-4 border border-amber-200/60 border-l-4 border-l-amber-500 shadow-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-normal">
            <strong className="font-semibold text-slate-900">
              Implementation status.
            </strong>{" "}
            Specific protocols or credential formats are described only where
            verified. Their presence in a concept guide is not a support claim.
          </p>
        </div>
      </div>
    </section>
  );
}
