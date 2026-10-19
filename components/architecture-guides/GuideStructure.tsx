"use client";

import React from "react";

interface StructureSection {
  title: string;
  description: string;
}

const structureGrid: readonly StructureSection[] = [
  {
    title: "SCOPE AND AUDIENCE",
    description: "What the guide covers and who it is for",
  },
  {
    title: "APPLICABILITY",
    description: "When the pattern is relevant",
  },
  {
    title: "PREREQUISITES",
    description: "What to read first",
  },
  {
    title: "DIAGRAM",
    description: "Conceptual, with a full text equivalent",
  },
  {
    title: "BOUNDARIES",
    description: "Who owns each decision",
  },
  {
    title: "FAILURE MODES",
    description: "What can go wrong, and the safe response",
  },
  {
    title: "RELATED DOCUMENTATION",
    description: "Approved technical destinations only",
  },
  {
    title: "OWNER AND REVIEW",
    description: "Accountable owner, reviewed date when approved",
  },
] as const;

export default function GuideStructure() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-4xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            How every architecture guide is structured
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            This is the layout each guide follows. It is a template, not a
            guide.
          </p>
        </div>

        {/* Dashed Border Outer Container */}
        <div className="w-full border border-dashed border-slate-300 rounded-3xl p-6 md:p-10">
          {/* Header Badges Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <span className="inline-block bg-slate-100/90 text-slate-600 text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-slate-200/80">
              TEMPLATE · NO GUIDE SHOWN
            </span>
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-indigo-100">
              CONCEPTUAL REFERENCE PATTERN
            </span>
          </div>

          {/* Template Grid Container */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-slate-100">
              {structureGrid.map((item, idx) => {
                // Calculate row and column border styling for clean 2-column grid dividers
                const isLeftColumn = idx % 2 === 0;
                const isTopRow = idx < 2;

                return (
                  <div
                    key={idx}
                    className={`p-6 md:p-8 flex flex-col justify-center ${
                      !isTopRow ? "md:border-t md:border-slate-100" : ""
                    } ${isLeftColumn ? "md:border-r md:border-slate-100" : ""}`}
                  >
                    <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
