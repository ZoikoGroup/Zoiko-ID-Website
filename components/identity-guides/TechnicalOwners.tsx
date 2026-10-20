import React from "react";
import Image from "next/image";
import { Layers, FileCode2, Shield, Bot, Info } from "lucide-react";

interface OwnerCard {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}

const ownerCards: OwnerCard[] = [
  {
    imageSrc: "/identity/2.png",
    imageAlt: "Woman holding architectural drawings in office",
    icon: <Layers className="w-5 h-5 text-sky-700" />,
    title: "Architecture Guides",
    description: "How the system fits together.",
    status: "Destination pending approval",
  },
  {
    imageSrc: "/identity/3.png",
    imageAlt: "Person coding on laptop",
    icon: <FileCode2 className="w-5 h-5 text-sky-700" />,
    title: "Developer documentation",
    description: "Quickstarts, API Reference and SDKs.",
    status: "Destination pending approval",
  },
  {
    imageSrc: "/identity/4.png",
    imageAlt: "Team in a conference room meeting",
    icon: <Shield className="w-5 h-5 text-sky-700" />,
    title: "Delegated Authority",
    description: "Mandates, scope and time limits.",
    status: "Destination pending approval",
  },
  {
    imageSrc: "/identity/5.png",
    imageAlt: "Office workspace with modern decor",
    icon: <Bot className="w-5 h-5 text-sky-700" />,
    title: "Machine & Agent Identity",
    description: "Non-human principals and sponsorship.",
    status: "Destination pending approval",
  },
] as const;

export default function TechnicalOwners() {
  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-7xl w-full flex flex-col items-start">
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-12">
          <h1 className="text-3xl md:text-[42px] font-bold text-slate-900 tracking-tight font-serif mb-4 leading-[1.15]">
            Each technical question has its own owner
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            This hub explains concepts. Architecture, step-by-step
            implementation, API contracts and release changes live in their own
            destinations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {ownerCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
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
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Status Button */}
                <div>
                  <button className="w-full text-left bg-slate-100/80 hover:bg-slate-200/60 text-slate-600 font-medium text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{card.status}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
