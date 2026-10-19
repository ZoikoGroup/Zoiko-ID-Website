"use client";

import React from "react";
import Image from "next/image";

interface GuideCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  pills: readonly string[];
  reviewDate: string;
}

const guideCards: readonly GuideCard[] = [
  {
    imageSrc: "/archi/2.png",
    imageAlt: "Man working on laptop with glasses",
    title: "Architecture overview",
    description: "Question the guide answers: where each trust decision sits.",
    pills: ["Audience", "Actor tags", "Depth"],
    reviewDate: "Review date: shown only when verified",
  },
  {
    imageSrc: "/archi/3.png",
    imageAlt: "Person holding documents near laptop",
    title: "Authority and policy",
    description:
      "Question the guide answers: how a permitted action is decided.",
    pills: ["Audience", "Actor tags", "Depth"],
    reviewDate: "Review date: shown only when verified",
  },
  {
    imageSrc: "/archi/4.png",
    imageAlt: "Laptop on desk closeup",
    title: "Signals and revocation",
    description:
      "Question the guide answers: how changed context affects access.",
    pills: ["Audience", "Actor tags", "Depth"],
    reviewDate: "Review date: shown only when verified",
  },
] as const;

export default function ApprovedGuideCards() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            Guide cards appear once they are approved
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Each card shows a question, its audience, actor tags, depth and,
            when verified, a review date. Only published, approved guides appear
            here.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {guideCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              {/* Top Image */}
              <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Pills Row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.pills.map((pill, pillIdx) => (
                      <span
                        key={pillIdx}
                        className="bg-slate-100/80 text-slate-600 text-xs font-medium px-3 py-1 rounded-full border border-slate-200/60"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Review Date Footer Box */}
                <div>
                  <div className="w-full bg-slate-100/80 text-slate-500 text-xs font-medium py-2.5 px-4 rounded-xl border border-slate-200/50">
                    {card.reviewDate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-xs text-slate-500 leading-relaxed">
          Card titles above are placeholders for the catalog structure. No guide
          with these titles is published.
        </p>
      </div>
    </section>
  );
}
