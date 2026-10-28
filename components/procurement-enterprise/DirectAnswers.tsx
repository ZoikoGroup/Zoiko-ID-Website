import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Info } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const FAQ_DATA = [
  {
    question: "What do I need to request evidence?",
    answer:
      "Your organization name, your work email, and the document you need. Restricted items are then checked against your entitlement.",
  },
  {
    question: "Is pricing published?",
    answer:
      "No. Commercial scope is agreed after an assessment, and Pricing Overview explains the factors.",
  },
  {
    question: "Do you have a certification?",
    answer:
      "No certification is claimed on this page. Any certification will be listed with its scope and date.",
  },
] as const;

export default function DirectAnswers() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {/* Top Part: Direct Answers (2-column layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2
              className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
            >
              Direct answers
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              These answers describe what is available today. They are not legal
              advice and do not change any contract.
            </p>
          </div>

          {/* Right Column: FAQ Items */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            {FAQ_DATA.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex items-start gap-4 text-left"
              >
                <div className="bg-[#E4F3F8] p-2.5 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <Info className="h-5 w-5 text-[#0E7490]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-base md:text-lg mb-1.5">
                    {item.question}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Part: Floating CTA Banner */}
        <div className="relative w-full rounded-[32px] overflow-hidden min-h-[440px] flex flex-col items-center justify-center text-center p-8 md:p-16 shadow-2xl">
          {/* Background Image */}
          <Image
            src="/pro/12.png"
            alt="Customer support team background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Gradient Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/90 via-[#0D1F35]/85 to-[#0F4C5C]/80" />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            {/* CTA Heading */}
            <h2
              className={`${dmSerif.className} text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-6 leading-tight`}
            >
              Start with the checklist, then reach the right owner.
            </h2>

            {/* CTA Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Use the checklist and the Trust Center route for evidence. Until
              the request route is live, use the Contact route for any question.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                disabled
                className="px-6 py-3.5 rounded-2xl bg-white/90 text-slate-500 font-semibold text-xs sm:text-sm shadow-md cursor-not-allowed opacity-80"
              >
                Request procurement assistance (not yet available)
              </button>

              <a
                href="#checklist"
                className="px-6 py-3.5 rounded-2xl border border-slate-300/40 bg-slate-900/40 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all hover:bg-white/10 hover:border-white"
              >
                Back to the checklist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
