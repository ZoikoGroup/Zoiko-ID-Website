import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { CheckCircle2 } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function PrepareChecklistSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left">
          {/* Main Title */}
          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6`}
          >
            Prepare before you ask
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10">
            A short checklist helps your team collect what it needs before
            contacting us. Tick off each item internally; nothing here is
            submitted.
          </p>

          {/* Checklist Items */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0E7490] shrink-0 mt-0.5"
                strokeWidth={2}
              />
              <p className="text-slate-700 text-sm md:text-base leading-snug">
                Name the systems in scope for identity, sign-in and access.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0E7490] shrink-0 mt-0.5"
                strokeWidth={2}
              />
              <p className="text-slate-700 text-sm md:text-base leading-snug">
                Decide which evaluation categories your review must cover.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0E7490] shrink-0 mt-0.5"
                strokeWidth={2}
              />
              <p className="text-slate-700 text-sm md:text-[15px] leading-snug">
                List the documents your policy requires, and mark which are
                already held.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2
                className="h-5 w-5 text-[#0E7490] shrink-0 mt-0.5"
                strokeWidth={2}
              />
              <p className="text-slate-700 text-sm md:text-base leading-snug">
                Identify the internal owners for privacy, legal and security
                review.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <Image
            src="/pro/2.png"
            alt="Person writing notes and typing on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
