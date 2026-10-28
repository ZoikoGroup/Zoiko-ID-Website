import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Lock, FileText } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function PersonalDataDescribedSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative w-full aspect-[3/3] rounded-3xl overflow-hidden">
          <Image
            src="/pro/3.png"
            alt="Person holding a brown envelope"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col items-start text-left">
          {/* Main Title */}
          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6`}
          >
            How personal data is described
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
            The Privacy Notice explains what personal data is processed and why.
            Processing roles and transfers are described only where confirmed.
            This page does not state where data is stored or processed.
          </p>

          {/* Action Cards Container */}
          <div className="w-full flex flex-col gap-4">
            {/* Card 1: Read the Privacy Notice */}
            <a
              href="#"
              className="bg-[#F4F6FA] hover:bg-[#F1F5F9] transition-all rounded-2xl p-5 border border-slate-200 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl flex items-center justify-center shrink-0">
                <Lock className="h-5 w-5 text-[#0E7490]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-slate-900 font-medium text-sm md:text-[15px] group-hover:text-[#0E7490] transition-colors">
                  Read the Privacy Notice for personal data handling.
                </p>
              </div>
            </a>

            {/* Card 2: Data processing terms */}
            <a
              href="#"
              className="bg-[#F4F6FA] hover:bg-[#F1F5F9] transition-all rounded-2xl p-5 border border-slate-200 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5 text-[#0E7490]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-slate-900 font-medium text-sm md:text-[15px] group-hover:text-[#0E7490] transition-colors">
                  Data processing terms are available through a legal request,
                  not publicly.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
