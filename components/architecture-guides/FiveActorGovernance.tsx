"use client";

import React from "react";
import Image from "next/image";
import { User, FileText, Server, Cpu, Bot } from "lucide-react";

interface ActorGovernanceCard {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const actorGovernanceCards: readonly ActorGovernanceCard[] = [
  {
    imageSrc: "/identity/14.png",
    imageAlt: "Human in suit smiling",
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "Human",
    description: "Signs in and acts for themselves.",
  },
  {
    imageSrc: "/identity/9.png",
    imageAlt: "Modern office interior space",
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Organization",
    description: "An affiliation, recorded explicitly.",
  },
  {
    imageSrc: "/identity/10.png",
    imageAlt: "People working in office environment",
    icon: <Server className="w-5 h-5 text-sky-700" />,
    title: "Service",
    description: "A workload with its own narrow role.",
  },
  {
    imageSrc: "/identity/11.png",
    imageAlt: "Automated machine assembly line",
    icon: <Cpu className="w-5 h-5 text-sky-700" />,
    title: "Machine",
    description: "A device or process with bounded duty.",
  },
  {
    imageSrc: "/identity/12.png",
    imageAlt: "AI robot concept art",
    icon: <Bot className="w-5 h-5 text-sky-700" />,
    title: "AI agent",
    description: "Acts only under explicit, sponsored authority.",
  },
] as const;

export default function FiveActorGovernance() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            Five actor types, five different governance needs
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Each actor type has different sponsors, controls and workflows. None
            is assumed to use the same verification method.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {actorGovernanceCards.map((actor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              {/* Top Image */}
              <div className="relative w-full h-36 bg-slate-100 overflow-hidden">
                <Image
                  src={actor.imageSrc}
                  alt={actor.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                    {actor.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {actor.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {actor.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
