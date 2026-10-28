import React from "react";
import { DM_Serif_Display } from "next/font/google";
import {
  Scale,
  ShieldCheck,
  Lock,
  Network,
  BarChart3,
  FileText,
} from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function SixReviewAreasSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          Six areas your review will likely cover
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          These categories follow the usual shape of a supplier review. For each
          one, this page states what is available today and where to take the
          question. No compliance score or feature comparison is implied[cite:
          14].
        </p>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl text-left">
          {/* Card 1: Scoping */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E4F3F8] p-3.5 rounded-xl flex items-center justify-center shrink-0">
              <Scale className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Scoping</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                What the platform is for, and which parts fit your need[cite:
                14].
              </p>
            </div>
          </div>

          {/* Card 2: Assurance */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E4F3F8] p-3.5 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Assurance
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Which evidence exists, and in what state.
              </p>
            </div>
          </div>

          {/* Card 3: Privacy */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E4F3F8] p-3.5 rounded-xl flex items-center justify-center shrink-0">
              <Lock className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Privacy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                How personal data is described and handled.
              </p>
            </div>
          </div>

          {/* Card 4: Architecture */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E4F3F8] p-3.5 rounded-xl flex items-center justify-center shrink-0">
              <Network className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Architecture
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                How the platform connects to your identity estate.
              </p>
            </div>
          </div>

          {/* Card 5: Commercial */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E4F3F8] p-3.5 rounded-xl flex items-center justify-center shrink-0">
              <BarChart3 className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Commercial
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                What determines cost and scope.
              </p>
            </div>
          </div>

          {/* Card 6: Legal */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-start gap-5">
            <div className="bg-[#E4F3F8] p-3.5 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Legal</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Which terms and agreements apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
