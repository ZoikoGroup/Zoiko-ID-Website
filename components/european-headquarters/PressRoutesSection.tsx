import React from "react";
import Image from "next/image";
import { FileText, Mail } from "lucide-react";

export default function PressRoutesSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/eu/6.png"
            alt="Press and media microphones"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col items-start text-left">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1F35] leading-tight mb-4">
            Press and corporate questions have separate routes
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Media enquiries and general corporate questions use different
            destinations. Neither duplicates the other&apos;s intake.
          </p>

          {/* Action Cards Container */}
          <div className="w-full flex flex-col gap-4">
            {/* Card 1: Media / Press */}
            <a
              href="#"
              className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
                  <FileText
                    className="h-5 w-5 text-[#0EA5E9]"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Media / Press
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Press and media enquiries.
                  </p>
                </div>
              </div>

              <span className="shrink-0 bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase">
                APPROVED ROUTE
              </span>
            </a>

            {/* Card 2: Contact */}
            <a
              href="#"
              className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#E0F2FE] p-3 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#0EA5E9]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Contact
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    General corporate enquiries.
                  </p>
                </div>
              </div>

              <span className="shrink-0 bg-[#FEF3C7] text-[#B45309] text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-full uppercase">
                ROUTE PENDING REGISTRY
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
