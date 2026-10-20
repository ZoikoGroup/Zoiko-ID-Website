"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Cpu,
  ShieldCheck,
  Database,
  AlertTriangle,
} from "lucide-react";

interface IdpCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  tagVariant: "system" | "design";
}

const idpCards: readonly IdpCard[] = [
  {
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Your identity provider",
    description: "Authenticates people and services.",
    tag: "Your system",
    tagVariant: "system",
  },
  {
    icon: <Cpu className="w-5 h-5 text-sky-700" />,
    title: "Your application",
    description: "Requests decisions and enforces them.",
    tag: "Your system",
    tagVariant: "system",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-sky-700" />,
    title: "Trust layer",
    description: "Evaluates scope, policy and context.",
    tag: "Intended design",
    tagVariant: "design",
  },
  {
    icon: <Database className="w-5 h-5 text-sky-700" />,
    title: "Evidence store",
    description: "Holds the decision record.",
    tag: "Intended design",
    tagVariant: "design",
  },
] as const;

export default function ExistingIdp() {
  return (
    <section className="bg-[#F1F5F9] min-h-screen py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Title, Subtitle, 2x2 Cards Grid, and Notice Box */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Alongside your existing identity provider
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
            The intended design complements existing identity providers and
            applications. Each side keeps its own responsibilities. Exact
            features depend on confirmed contracts.
          </p>

          {/* 2x2 Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
            {idpCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_12px_#0000001A] flex flex-col justify-between"
              >
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
                <div>
                  <span
                    className={`inline-block text-[11px] font-medium px-3 py-1 rounded-full border ${
                      card.tagVariant === "system"
                        ? "bg-slate-100 text-slate-700 border-slate-200/60"
                        : "bg-slate-100 text-slate-700 border-slate-200/60"
                    }`}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Box with Orange Left Border */}
          <div className="w-full bg-amber-50/70 rounded-xl p-4 border border-amber-200/60 border-l-4 border-l-amber-500 shadow-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">
                Protocol and feature labels.
              </strong>{" "}
              Any named protocol here describes a design direction. It is not
              confirmed as generally available. Check the Integrations page and
              API Reference for exact support.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[520px] h-[380px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="/archi/5.png"
              alt="Developer pointing at dual monitors displaying code in an office"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
