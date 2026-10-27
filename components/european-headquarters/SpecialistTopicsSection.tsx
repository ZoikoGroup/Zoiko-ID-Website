import React from "react";
import { Lock, ShieldCheck, Hand } from "lucide-react";

export default function SpecialistTopicsSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Specialist topics go to specialist pages
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
          Do not send security reports or personal-data requests through this
          page or any location enquiry.
        </p>

        {/* Divider Line */}
        <div className="w-full max-w-7xl h-px bg-slate-200 mb-16" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl text-left">
          {/* Card 1: Privacy Notice */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Privacy Notice
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                How personal data is handled.
              </p>
            </div>
            <div>
              <span className="inline-block bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase">
                ROUTE PENDING
              </span>
            </div>
          </div>

          {/* Card 2: Security contact and Trust Center */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck
                  className="h-6 w-6 text-[#0EA5E9]"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Security contact and Trust Center
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Security concerns and assurance information.
              </p>
            </div>
            <div>
              <span className="inline-block bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase">
                ROUTE PENDING
              </span>
            </div>
          </div>

          {/* Card 3: Help & Support */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="bg-[#E0F2FE] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Hand className="h-6 w-6 text-[#0EA5E9]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Help & Support
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Account and product questions.
              </p>
            </div>
            <div>
              <span className="inline-block bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase">
                ROUTE PENDING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
