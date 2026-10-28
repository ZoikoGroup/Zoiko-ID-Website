import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { FileText, UserCheck, ShieldCheck } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function FactsSourceAndOwnerSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6 max-w-4xl`}
        >
          Only facts with a source and an owner appear here
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          Each fact card records its source, verification date and owner. A fact
          that cannot be verified is removed, not replaced with filler.
        </p>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl">
          {/* Large Left Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden flex flex-col justify-between">
            <div className="relative w-full aspect-[4/3] sm:aspect-[12/10]">
              <Image
                src="/media/2.png"
                alt="Source documents stack"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/60 flex items-center gap-2.5">
                <FileText className="h-4 w-4 text-[#0E7490]" strokeWidth={2} />
                <span className="text-xs sm:text-sm font-bold text-slate-900">
                  Source documents
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Stack (2 smaller cards) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Top Right Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/media/3.png"
                  alt="Owner review"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/60 flex items-center gap-2.5">
                  <UserCheck
                    className="h-4 w-4 text-[#0E7490]"
                    strokeWidth={2}
                  />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    Owner review
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/media/4.png"
                  alt="Legal review"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/60 flex items-center gap-2.5">
                  <ShieldCheck
                    className="h-4 w-4 text-[#0E7490]"
                    strokeWidth={2}
                  />
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    Legal review
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
