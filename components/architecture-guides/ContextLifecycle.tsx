"use client";

import React from "react";
import { Flag, RefreshCw, Scale, Trash2, FileText } from "lucide-react";

interface LifecycleStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const lifecycleSteps: readonly LifecycleStep[] = [
  {
    icon: <Flag className="w-5 h-5 text-blue-600" />,
    title: "New signal",
    description: "A change in context is received.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
    title: "Re-evaluate",
    description: "Current policy is applied again.",
  },
  {
    icon: <Scale className="w-5 h-5 text-blue-600" />,
    title: "Decide",
    description: "Allow, step up, restrict or deny.",
  },
  {
    icon: <Trash2 className="w-5 h-5 text-blue-600" />,
    title: "Revoke",
    description: "Withdraw authority where permitted.",
  },
  {
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    title: "Record evidence",
    description: "Keep the basis for review.",
  },
] as const;

export default function ContextLifecycle() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-16">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            How a change in context can be handled
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            A conceptual lifecycle. Exact event names, timing and automatic
            actions are defined by the engineering source, not by this page.
          </p>
        </div>

        {/* Timeline Sequence Container */}
        <div className="w-full bg-white p-8 md:p-12 mb-8">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 w-full">
            {/* Connecting Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-blue-500 z-0" />

            {lifecycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center max-w-[200px]"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-md mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tag */}
        <div>
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm">
            Conceptual reference pattern
          </span>
        </div>
      </div>
    </section>
  );
}
