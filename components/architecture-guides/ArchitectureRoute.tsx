"use client";

import React from "react";

interface RouteStep {
  number: number;
  title: string;
  description: string;
}

const routeSteps: readonly RouteStep[] = [
  {
    number: 1,
    title: "Understand the actor",
    description: "Who or what is represented in a trust decision.",
  },
  {
    number: 2,
    title: "Identify the authority",
    description: "What may be done, and under which mandate.",
  },
  {
    number: 3,
    title: "Define the policy decision",
    description: "Where decisions are made and what they consider.",
  },
  {
    number: 4,
    title: "React to trust changes",
    description: "How signals can prompt re-evaluation or revocation.",
  },
  {
    number: 5,
    title: "Preserve minimal evidence",
    description: "What is recorded, and why it is limited.",
  },
  {
    number: 6,
    title: "Choose implementation docs",
    description: "Where exact interfaces are documented.",
  },
] as const;

export default function ArchitectureRoute() {
  return (
    <section className="bg-[#FFFFFF] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-4xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            A route for first-time enterprise architects
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            These cards are an editorial reading order, not setup tasks. They do
            not track completion.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {routeSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-6 shadow-sm">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
