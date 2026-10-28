import React from "react";
import { DM_Serif_Display } from "next/font/google";
import { AlertTriangle } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const LAUNCH_APPROVALS = [
  {
    title: "Corporate Comms",
    description: "Confirm the press intake and its owner.",
  },
  {
    title: "Legal / Privacy",
    description: "Approve statements, licences and the privacy notice link.",
  },
  {
    title: "Security",
    description: "Approve any attachment handling.",
  },
  {
    title: "Accessibility / QA",
    description: "Keyboard, screen-reader, zoom and mobile tests.",
  },
] as const;

export default function WhatMustBeApprovedBeforeLaunchSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-slate-900 mb-6 max-w-5xl`}
        >
          What must be approved before launch
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          The page will not launch until these owners approve the press intake,
          legal wording, attachment handling and accessibility testing. Until
          then, it is a specification only.
        </p>

        {/* 4-Column Cards Grid with soft rose/reddish borders matching the design language */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
          {LAUNCH_APPROVALS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#FCA5A5] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[#7F1D1D] font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#7F1D1D] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="w-full bg-[#FEF9C3]/70 border border-[#FEF08A] rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-sm">
          <div className="bg-[#FEF08A] p-2.5 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle className="h-5 w-5 text-[#854D0E]" strokeWidth={2} />
          </div>
          <p className="text-[#854D0E] text-xs sm:text-sm leading-relaxed">
            <span className="font-bold">
              Build allowed. Publication prohibited.
            </span>{" "}
            This page is prepared for approval and is not locked. No press
            contact, release or asset may be published until the gates are
            cleared.
          </p>
        </div>
      </div>
    </section>
  );
}
