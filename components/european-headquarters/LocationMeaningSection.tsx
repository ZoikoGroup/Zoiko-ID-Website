import React from "react";
import { CheckCircle2, XCircle, Check, X } from "lucide-react";

export default function LocationMeaningSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-16">
          What this location does and does not mean
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl text-left">
          {/* Left Card: It tells you */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 border-t-4 border-t-[#15803D] flex flex-col justify-between">
            <div>
              {/* Icon Box */}
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Check className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2.5} />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                It tells you
              </h3>

              {/* List Items */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#15803D] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base">
                    Where the listed European office is.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#15803D] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base">
                    Which corporate entity the listing belongs to.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#15803D] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base">
                    Which route to take for each kind of enquiry.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Card: It does not tell you */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200 border-t-4 border-t-[#B91C1C] flex flex-col justify-between">
            <div>
              {/* Icon Box */}
              <div className="bg-[#FEE2E2] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <X className="h-6 w-6 text-[#B91C1C]" strokeWidth={2.5} />
              </div>

              {/* Heading */}
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                It does not tell you
              </h3>

              {/* List Items */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-[#B91C1C] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base">
                    That you may visit, or that appointments are offered.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-[#B91C1C] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base">
                    Office hours, telephone numbers or staffing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-[#B91C1C] shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm md:text-base">
                    Regional service, data residency or local authorisation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
