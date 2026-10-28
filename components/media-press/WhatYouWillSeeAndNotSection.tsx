import React from "react";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const SUBMISSION_STATES = [
  {
    imageSrc: "/media/10.png",
    icon: CheckCircle2,
    title: "Receipt",
    description:
      'You see "received" only after the server confirms it. Your receipt will show the topic you chose, so you know which route is handling the request.',
  },
  {
    imageSrc: "/media/11.png",
    icon: Clock,
    title: "Timing",
    description:
      "No reply time is promised. Responses depend on the request, its topic and the team's current workload, and each route states its own process.",
  },
  {
    imageSrc: "/media/12.png",
    icon: AlertTriangle,
    title: "If it fails",
    description:
      "You get a clear message and a way to retry. Your text is kept on screen, so you do not need to type it again. If you are unsure whether a request was sent, you will be shown how to check.",
  },
] as const;

export default function WhatYouWillSeeAndNotSection() {
  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Title */}
        <h2
          className={`${dmSerif.className} text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-6 max-w-4xl`}
        >
          What you will see, and what you will not
        </h2>

        {/* Subtitle / Description */}
        <p className="text-slate-500 text-base md:text-lg max-w-3xl leading-relaxed mb-16">
          These steps describe what happens after a submission. Confirmation is
          shown only once the server has accepted the request. If something goes
          wrong, you are told what happened and can try again without losing the
          text you entered.
        </p>

        {/* 3-Column Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
          {SUBMISSION_STATES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-[#E4F3F8] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent
                      className="h-6 w-6 text-[#0E7490]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
