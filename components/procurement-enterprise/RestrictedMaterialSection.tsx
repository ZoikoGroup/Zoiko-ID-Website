import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { CheckCircle2 } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function RestrictedMaterialSection() {
  return (
    <section className="bg-[#071426] text-white py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left">
          {/* Main Title */}
          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-6`}
          >
            Restricted material stays restricted
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            Restricted documents are released only after an owner-controlled
            request and a check of your entitlement. A restricted
            document&apos;s link is never shown publicly, and nothing is
            downloaded anonymously.
          </p>

          {/* Checklist Items Container */}
          <div className="w-full flex flex-col gap-3">
            {/* Item 1 */}
            <div className="bg-[#0D1F35] border border-slate-700/50 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0EA5E9] shrink-0"
                strokeWidth={2}
              />
              <p className="text-slate-200 text-sm md:text-base leading-snug font-medium">
                Read the scope before acting.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-[#0D1F35] border border-slate-700/50 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0EA5E9] shrink-0"
                strokeWidth={2}
              />
              <p className="text-slate-200 text-sm md:text-base leading-snug font-medium">
                Follow only approved remediation steps.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-[#0D1F35] border border-slate-700/50 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0EA5E9] shrink-0"
                strokeWidth={2}
              />
              <p className="text-slate-200 text-sm md:text-base leading-snug font-medium">
                Contact the Security contact route if your scope is unclear.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <Image
            src="/pro/7.png"
            alt="Person stamping confidential documents in low light office setting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
