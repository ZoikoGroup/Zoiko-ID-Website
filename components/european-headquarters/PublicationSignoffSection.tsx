import React from "react";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

export default function PublicationSignoffSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1F35] leading-tight mb-6">
            Publication is blocked until owners sign off
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Corporate Operations and Legal must approve the address and entity
            wording. Each destination must exist. Dual approval is required for
            any change.
          </p>

          {/* Warning Callout Card */}
          <div className="w-full bg-[#FEF2F2] border border-[#FCA5A5]/40 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
            <div className="bg-[#FEE2E2] p-2.5 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle
                className="h-5 w-5 text-[#B91C1C]"
                strokeWidth={2.5}
              />
            </div>
            <div>
              <p className="text-[#991B1B] text-xs md:text-sm leading-relaxed">
                <span className="font-bold">
                  Build allowed. Publication prohibited.
                </span>{" "}
                Nothing here establishes local compliance, regional staffing,
                visiting rights or operational commitments.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <Image
            src="/eu/11.png"
            alt="Keyboard with warning sign icon"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
