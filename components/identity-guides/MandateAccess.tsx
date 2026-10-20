import React from "react";
import Image from "next/image";
import {
  User,
  Building2,
  Key,
  Scale,
  ShieldCheck,
  FileText,
} from "lucide-react";

interface MandateCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const mandateCards: MandateCard[] = [
  {
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "Actor",
    description: "Requests an action",
  },
  {
    icon: <Building2 className="w-5 h-5 text-sky-700" />,
    title: "Sponsor",
    description: "Accountable party",
  },
  {
    icon: <Key className="w-5 h-5 text-sky-700" />,
    title: "Mandate",
    description: "Scope and time",
  },
  {
    icon: <Scale className="w-5 h-5 text-sky-700" />,
    title: "Policy check",
    description: "Current rules",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-sky-700" />,
    title: "Decision",
    description: "Allow or deny",
  },
  {
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Evidence",
    description: "Reviewable record",
  },
] as const;

export default function MandateAccess() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text, Cards Grid, and Notice Box */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Why access needs a mandate, a scope and a time limit
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
            An employee or agent may act for an organization only within a
            defined mandate, resource, purpose and time. Policy and current
            signals may change what is allowed. This is an illustrative
            scenario.
          </p>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
            {mandateCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Box with Orange Left Border */}
          <div className="w-full bg-slate-50/80 rounded-xl p-4 border border-slate-200/80 border-l-4 border-l-amber-500 shadow-sm">
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">
                Live enforcement is not claimed here.
              </strong>{" "}
              Whether a change in trust signals takes effect immediately depends
              on the approved capability for your integration.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[540px] h-[380px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="/identity/13.png"
              alt="Person typing on a keyboard with computer screen and lamp in background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
