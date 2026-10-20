"use client";

import React from "react";
import { FileCode2, FileText } from "lucide-react";

interface CtaLink {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

const ctaButtons: readonly CtaLink[] = [
  {
    label: "Explore architecture guides",
    href: "#",
    variant: "primary",
  },
  {
    label: "Talk to an identity expert",
    href: "#",
    variant: "outline",
  },
] as const;

export default function ExplorePatternsCta() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Banner Container with Image Background */}
        <div className="relative w-full min-h-[520px] bg-gradient-to-r from-[#071426] via-[#0D1F35] to-[#22B8D61A] rounded-3xl overflow-hidden shadow-[0_4px_12px_#0000001A] flex items-center justify-center p-8 sm:p-12 md:p-16 text-center bg-slate-950">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/archi/12.png"
              alt="Colleagues pointing at screen during architecture review"
              className="w-full h-full object-cover object-center opacity-40"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15] mb-6">
              Explore more patterns,
              <br className="hidden sm:inline" />
              or move to the technical material.
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-xl mb-8">
              Continue with the identity concepts, read the developer
              documentation for exact interfaces, or discuss your architecture
              with an identity expert.
            </p>

            {/* Small Pill Links Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-slate-800/80 border border-[#FFFFFF33] text-xs font-medium text-slate-200 transition-colors backdrop-blur-sm"
              >
                <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Identity Guides</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-slate-800/80 border border-[#FFFFFF33] text-xs font-medium text-slate-200 transition-colors backdrop-blur-sm"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Developer documentation</span>
              </a>
            </div>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {ctaButtons.map((button, idx) => (
                <a
                  key={idx}
                  href={button.href}
                  className={`w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 text-center ${
                    button.variant === "primary"
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                      : "hover:bg-slate-800/90 text-white border border-white backdrop-blur-sm"
                  }`}
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
