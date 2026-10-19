"use client";

import React from "react";

interface CtaLink {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

const ctaLinks: CtaLink[] = [
  {
    label: "Explore identity guides",
    href: "#",
    variant: "primary",
  },
  {
    label: "Start with the fundamentals",
    href: "#",
    variant: "outline",
  },
] as const;

export default function ArchitectureHero() {
  return (
    <section className="relative min-h-[620px] w-full flex items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/archi/1.png"
          alt="People working in modern office environment"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-24 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-bold text-white tracking-tight leading-[1.12] max-w-4xl mb-6">
          Explore identity and delegated-authority architecture patterns.
        </h1>

        {/* Subtitle Paragraph */}
        <p className="text-sm md:text-base lg:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed mb-8">
          Learn how identity, scoped authority, policy decisions, changing trust
          signals and evidence fit into enterprise systems. These guides explain
          reference patterns and design boundaries; verified implementation
          details live in the current developer documentation.
        </p>

        {/* Call to Action Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {ctaLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-medium transition-colors duration-200 text-center ${
                link.variant === "primary"
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  : "hover:bg-slate-800/80 text-white border border-slate-400/40 backdrop-blur-sm"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
