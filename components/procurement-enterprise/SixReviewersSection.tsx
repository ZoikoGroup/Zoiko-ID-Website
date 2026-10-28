import React from "react";
import { DM_Serif_Display } from "next/font/google";
import {
  Building2,
  ShieldCheck,
  FileText,
  Layers,
  BarChart3,
  Eye,
} from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function SixReviewersSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6`}
        >
          Six reviewers, six different questions
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          Enterprise evaluations involve several teams. Each reviewer below has
          a question the page answers or routes, so no one is left guessing
          where to go next.
        </p>

        {/* 3x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl text-left">
          {/* Card 1: Procurement lead */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Procurement lead
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                How do we evaluate Zoiko iD as a supplier? The checklist in
                section 04 sets out the steps.
              </p>
            </div>
          </div>

          {/* Card 2: Vendor-risk analyst */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck
                  className="h-6 w-6 text-[#0E7490]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Vendor-risk analyst
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Which assurance documents exist? The evidence registry in
                section 06 shows each document&apos;s state.
              </p>
            </div>
          </div>

          {/* Card 3: Legal and privacy */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Legal and privacy
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Which agreements and processing terms apply? Privacy and legal
                material is linked in section 07.
              </p>
            </div>
          </div>

          {/* Card 4: Enterprise architect */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Enterprise architect
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Can our identity estate integrate? Section 08 points to the
                technical documentation.
              </p>
            </div>
          </div>

          {/* Card 5: Commercial stakeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Commercial stakeholder
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                What determines cost and scope? Section 09 explains the
                commercial inputs without figures.
              </p>
            </div>
          </div>

          {/* Card 6: Accessibility reviewer */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Accessibility reviewer
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Can I complete the evaluation accessibly? Every control on this
                page is keyboard and screen-reader tested.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
