import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Code2, BookOpen, Network } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function TechnicalEvaluationSection() {
  return (
    <section className="bg-[#F8FAFC] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-[#0F172A] mb-6 max-w-5xl leading-[1.15]`}
        >
          Technical evaluation starts with the documentation
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed mb-16">
          Architects can start with the developer documentation. Protocol
          support and integration patterns are described there, and confirmed
          for your environment during a technical discussion.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
          {/* Card 1: API Reference */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-48 w-full">
              <Image
                src="/pro/4.png"
                alt="API Reference"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                API Reference
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Endpoints and their contracts, as published.
              </p>
            </div>
          </div>

          {/* Card 2: Quickstarts */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-48 w-full">
              <Image
                src="/pro/5.png"
                alt="Quickstarts"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Quickstarts
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Step-by-step guides for a first integration.
              </p>
            </div>
          </div>

          {/* Card 3: Integrations */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div className="relative h-48 w-full">
              <Image
                src="/pro/12.png"
                alt="Integrations"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Network className="h-6 w-6 text-[#0E7490]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Integrations
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Integration patterns and their current status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
