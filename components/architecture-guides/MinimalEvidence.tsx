"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Eye, ArrowRight } from "lucide-react";

interface FeatureListItem {
  text: string;
}

const evidencePoints: readonly FeatureListItem[] = [
  { text: "Which authority applied" },
  { text: "Which policy version" },
  { text: "What was decided, and when" },
] as const;

const protectionPoints: readonly FeatureListItem[] = [
  { text: "Access to records" },
  { text: "Data beyond the decision's need" },
  { text: "Retention, per approved policy" },
] as const;

export default function MinimalEvidence() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[520px] h-[380px] md:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
            <Image
              src="/archi/7.png"
              alt="Professional reading document at desk near laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Column: Content, 2 Cards, Links, Disclaimer */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Minimal, purposeful, reviewable
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            Evidence shows the actor, the scoped authority, the policy version,
            the decision and the time. Privacy controls limit what is collected,
            how long it is kept and who can see it.
          </p>

          {/* 2 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
            {/* What evidence explains Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  What evidence explains
                </h3>
                <ul className="flex flex-col gap-3">
                  {evidencePoints.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What is protected Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  What is protected
                </h3>
                <ul className="flex flex-col gap-3">
                  {protectionPoints.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600"
                    >
                      <Eye className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-6 mb-3">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Trust Center</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Privacy</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Disclaimer Footer */}
          <p className="text-xs text-slate-500 leading-relaxed font-normal">
            Retention durations and immutability guarantees are not stated here.
          </p>
        </div>
      </div>
    </section>
  );
}
