"use client";

import React from "react";
import { User, Link, Key, Scale, FileText } from "lucide-react";

interface SequenceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const sequenceItems: readonly SequenceItem[] = [
  {
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "Actor identity",
    description: "Who is represented.",
    tag: "IDENTITY",
  },
  {
    icon: <Link className="w-5 h-5 text-sky-700" />,
    title: "Verified context",
    description: "Claims assessed against evidence.",
    tag: "IDENTITY",
  },
  {
    icon: <Key className="w-5 h-5 text-sky-700" />,
    title: "Scoped authority",
    description: "The mandate: what, for whom, until when.",
    tag: "AUTHORITY",
  },
  {
    icon: <Scale className="w-5 h-5 text-sky-700" />,
    title: "Policy decision",
    description: "Current rules applied to the request.",
    tag: "POLICY",
  },
  {
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Minimal evidence",
    description: "A record of the basis for the decision.",
    tag: "EVIDENCE",
  },
] as const;

const textEquivalents: readonly string[] = [
  "1. Actor identity establishes who is represented.",
  "2. Verified context assesses supporting claims against governed evidence.",
  "3. Scoped authority records what may be done, for whom, and until when.",
  "4. A policy decision applies current rules to the specific request.",
  "5. Minimal evidence records the basis for the decision, within privacy limits.",
] as const;

export default function ConceptualSequence() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            Identity, authority, policy and evidence
          </h1>
          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
            A conceptual sequence showing who owns each decision. It is not a
            map of any deployed system.
          </p>
        </div>

        {/* 5 Sequence Cards Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] overflow-hidden w-full mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {sequenceItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>
                <div>
                  <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-slate-200/60">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Equivalent Box */}
        <div className="w-full bg-[#F1F5F9] rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-[0_4px_12px_#0000001A]">
          <h4 className="text-sm font-bold text-slate-900 mb-4">
            Text equivalent.
          </h4>
          <ol className="flex flex-col gap-2">
            {textEquivalents.map((line, idx) => (
              <li
                key={idx}
                className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal"
              >
                {line}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
