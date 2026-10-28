import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { Info } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const SHORT_ANSWERS = [
  {
    question: "Is Zoiko iD a Zoiko Tech Inc. platform?",
    answer:
      "Yes. Zoiko iD is a Zoiko Tech Inc. platform, and it is described as identity, credentials and delegated authority infrastructure for people, organizations, machines and AI agents.",
  },
  {
    question: "Can I get a press kit?",
    answer:
      "No press kit is published on this page. Assets appear only once their rights are approved. If you need a specific image, tell us what you need in a media enquiry once the form is live.",
  },
  {
    question: "Is there a spokesperson I can interview?",
    answer:
      "Interview requests go through the media route once it is live. No spokesperson is named on this page, and none is confirmed until the company approves one.",
  },
  {
    question: "Do you publish awards or media coverage?",
    answer:
      "Not on this page. Only approved items appear, with their source. Third-party coverage is not presented as a company announcement.",
  },
] as const;

export default function ShortAnswersSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6 max-w-3xl leading-[1.15]`}
        >
          Short answers
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          These answers describe what is and is not available on this page
          today. They will be updated when a press intake or new approved
          resources go live.
        </p>

        {/* 2x2 Grid of FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl text-left">
          {SHORT_ANSWERS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 flex items-start gap-5"
            >
              <div className="bg-[#E4F3F8] p-3 rounded-2xl flex items-center justify-center shrink-0 mt-0.5">
                <Info className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-lg md:text-xl mb-3">
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
    </section>
  );
}
