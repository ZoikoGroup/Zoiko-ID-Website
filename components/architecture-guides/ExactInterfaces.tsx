"use client";

import React from "react";
import Image from "next/image";
import { FileCode2, FileText, Cpu, Info } from "lucide-react";

interface InterfaceCard {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}

const interfaceCards: readonly InterfaceCard[] = [
  {
    imageSrc: "/archi/8.png",
    imageAlt: "Developers working with laptops and multiple screens",
    icon: <FileCode2 className="w-5 h-5 text-sky-700" />,
    title: "Developer Overview",
    description: "Orientation for building.",
    status: "Destination pending approval",
  },
  {
    imageSrc: "/archi/9.png",
    imageAlt: "Developer coding on laptop with dual monitors",
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Quickstarts",
    description: "Step-by-step guidance.",
    status: "Destination pending approval",
  },
  {
    imageSrc: "/archi/10.png",
    imageAlt: "Close-up of hands typing on a laptop keyboard",
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "API Reference",
    description: "Exact interface contracts.",
    status: "Destination pending approval",
  },
  {
    imageSrc: "/archi/11.png",
    imageAlt: "Workspace showing tablet and laptop interface",
    icon: <Cpu className="w-5 h-5 text-sky-700" />,
    title: "SDKs",
    description: "Language packages and their status.",
    status: "Destination pending approval",
  },
] as const;

export default function ExactInterfaces() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-3 leading-[1.15]">
            For exact interfaces, go to the source
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            This guide explains patterns. Exact contracts, tested steps and
            release changes live in their own destinations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
          {interfaceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_12px_#0000001A] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              {/* Top Image Container */}
              <div className="relative w-full h-40 bg-slate-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Content Container */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Status Box */}
                <div>
                  <div className="w-full bg-slate-100/80 text-slate-600 font-medium text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-2 border border-slate-200/50">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{card.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-xs text-slate-500 leading-relaxed font-normal">
          Integrations, Webhooks & Events and Sandbox links appear here only
          when their destinations are approved and their availability is
          confirmed.
        </p>
      </div>
    </section>
  );
}
