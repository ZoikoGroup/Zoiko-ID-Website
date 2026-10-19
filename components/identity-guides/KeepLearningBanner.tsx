"use client";

import React from "react";
import Image from "next/image";
import { FileCode2, ShieldCheck } from "lucide-react";

interface LinkPill {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface PrimaryButton {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

const linkPills: LinkPill[] = [
  {
    label: "Developer documentation",
    icon: <FileCode2 className="w-4 h-4 text-cyan-400" />,
    href: "#",
  },
  {
    label: "Trust Center",
    icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />,
    href: "#",
  },
] as const;

const ctaButtons: PrimaryButton[] = [
  {
    label: "Explore identity guides",
    href: "#",
    variant: "primary",
  },
  {
    label: "Talk to an identity expert",
    href: "#",
    variant: "outline",
  },
] as const;

export default function KeepLearningBanner() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl min-h-[520px] flex items-center justify-center p-8 md:p-16">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071426] via-[#0D1F35] to-[#22B8D61A]">
            <Image
              src="/identity/6.png"
              alt="Developers working together on code"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl text-center flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight font-serif leading-[1.15] mb-6">
              Keep learning, or move to the technical material.
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              Browse the guides as they are published, read the developer
              documentation for implementation details, or talk to an identity
              expert about your environment.
            </p>

            {/* Link Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {linkPills.map((pill, idx) => (
                <a
                  key={idx}
                  href={pill.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs md:text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  {pill.icon}
                  <span>{pill.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {ctaButtons.map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
                  className={`w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-medium transition-colors text-center shadow-md ${
                    btn.variant === "primary"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-transparent hover:bg-slate-800/80 text-white border border-white"
                  }`}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
