import React from "react";
import { FileCheck, Eye, CheckCircle2, Lock } from "lucide-react";

interface EvidenceItem {
  text: string;
}

interface ProtectedItem {
  text: string;
}

const evidenceList: EvidenceItem[] = [
  { text: "Which actor acted, under which authority" },
  { text: "Which policy version applied" },
  { text: "What was decided, and when" },
] as const;

const protectedList: ProtectedItem[] = [
  { text: "Personal data beyond what a decision needs" },
  { text: "Who may view the record" },
  { text: "How long records are kept, per approved policy" },
] as const;

export default function AuditabilitySection() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-20 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-5xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Auditability without unrestricted surveillance
          </h1>
          <p className="text-sm md:text-base max-w-4xl text-slate-600 leading-relaxed">
            Evidence can document the actor, scoped authority, policy version,
            decision, timestamp and any revocation, where the architecture and
            retention rules permit. Privacy controls limit what is collected,
            kept and shared.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Card 1: What evidence explains */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">
                What evidence explains
              </h3>
              <ul className="flex flex-col gap-4">
                {evidenceList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: What is protected */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">
                What is protected
              </h3>
              <ul className="flex flex-col gap-4">
                {protectedList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <Lock className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
