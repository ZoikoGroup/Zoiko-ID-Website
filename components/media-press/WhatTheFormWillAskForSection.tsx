import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import {
  User,
  Building2,
  Mail,
  FileText,
  File,
  Clock,
  AlertTriangle,
} from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const FORM_FIELDS = [
  {
    icon: User,
    title: "Name",
    description: "Required, 1-120 characters",
  },
  {
    icon: Building2,
    title: "Organization or outlet",
    description: "Required, 1-160 characters",
  },
  {
    icon: Mail,
    title: "Work email",
    description: "Required, checked for format",
  },
  {
    icon: FileText,
    title: "Topic",
    description: "Required, one of four routes",
  },
  {
    icon: File,
    title: "Message",
    description: "Required, 20-4,000 characters",
  },
  {
    icon: Clock,
    title: "Deadline",
    description: "Optional; does not promise a reply",
  },
] as const;

export default function WhatTheFormWillAskForSection() {
  return (
    <section className="bg-[#F4F6FA] text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Image Card */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <Image
            src="/media/9.png"
            alt="Person filling out form with document on laptop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column - Content & Form Requirements */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Header */}
          <h2
            className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6`}
          >
            What the form will ask for
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8">
            Only the minimum needed to route your request is requested. No phone
            number is required.
          </p>

          {/* 2-Column Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            {FORM_FIELDS.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3.5"
                >
                  <div className="bg-[#E4F3F8] p-2.5 rounded-xl flex items-center justify-center shrink-0">
                    <IconComponent
                      className="h-5 w-5 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Warning Banner */}
          <div className="w-full bg-[#FEF9C3]/70 border border-[#FEF08A] rounded-2xl p-4 flex items-center gap-3.5 shadow-sm">
            <div className="flex items-center justify-center shrink-0">
              <AlertTriangle
                className="h-5 w-5 text-[#854D0E]"
                strokeWidth={2}
              />
            </div>
            <p className="text-[#854D0E] text-xs sm:text-sm leading-relaxed">
              <span className="font-bold">Form not yet live.</span> The form is
              shown as a specification. No submit control appears until a
              staffed intake and secure backend are approved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
