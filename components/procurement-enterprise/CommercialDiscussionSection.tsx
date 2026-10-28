import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Scale, Users } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function CommercialDiscussionSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left">
          {/* Title */}
          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-slate-900 leading-[1.1] mb-6`}
          >
            What shapes the commercial discussion
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
            Costs depend on the scope agreed in an assessment. No standard
            tariff, tier or price list is implied here. Pricing Overview
            explains the factors, and Talk to Sales starts the scoping
            conversation.
          </p>

          {/* Key Factor Cards */}
          <div className="w-full flex flex-col gap-3 mb-8">
            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="bg-[#E4F3F8] p-2.5 rounded-xl flex items-center justify-center shrink-0">
                <Scale className="h-5 w-5 text-[#0E7490]" strokeWidth={2} />
              </div>
              <p className="text-slate-700 text-sm md:text-base font-medium">
                Scope of the identity, authority and evidence capabilities you
                need.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 flex items-center gap-4">
              <div className="bg-[#E4F3F8] p-2.5 rounded-xl flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 text-[#0E7490]" strokeWidth={2} />
              </div>
              <p className="text-slate-700 text-sm md:text-base font-medium">
                The number and type of actors your organization will manage.
              </p>
            </div>
          </div>

          {/* Pending Status Badges / Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FEF08A] text-[#854D0E] font-bold text-xs tracking-wider uppercase">
              PRICING OVERVIEW PENDING
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FEF08A] text-[#854D0E] font-bold text-xs tracking-wider uppercase">
              TALK TO SALES PENDING
            </span>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <Image
            src="/pro/6.png"
            alt="Business team discussing commercial details over tablet and laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
