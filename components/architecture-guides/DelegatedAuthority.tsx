"use client";

import React from "react";
import Image from "next/image";
import { User, Key, RefreshCw, ArrowRight } from "lucide-react";

interface AuthCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const authCards: readonly AuthCard[] = [
  {
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "Principal and delegate",
    description: "Who gives authority, and who receives it.",
  },
  {
    icon: <Key className="w-5 h-5 text-sky-700" />,
    title: "Purpose, resources and time",
    description: "What the authority covers, and until when.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-sky-700" />,
    title: "Review and revocation",
    description: "How the grant is reviewed and withdrawn.",
  },
] as const;

export default function DelegatedAuthority() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-10">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Authority is granted, not implied
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            Being affiliated with an organization, or holding a credential, does
            not by itself grant authority. A delegation names the principal, the
            delegate, the purpose, the resources, the time limit and the
            revocation path.
          </p>
        </div>

        {/* Hero Image Container */}
        <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-10">
          <Image
            src="/archi/6.png"
            alt="Person stamping official document on a desk"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
          {authCards.map((card, idx) => (
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
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Delegated Authority Explainers</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-slate-400 font-normal">
              (destination pending approval)
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
