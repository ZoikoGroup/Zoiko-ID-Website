import React from "react";
import Image from "next/image";
import {
  User,
  Scale,
  FileText,
  Lock,
  KeyRound,
  CreditCard,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface WorkflowCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  showArrow?: boolean;
}

const topRowCards = [
  {
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "1 · Actor",
    description:
      "Who or what is represented: a person, organization, service, machine or agent.",
    showArrow: true,
  },
  {
    icon: <Scale className="w-5 h-5 text-sky-700" />,
    title: "2 · Authority decision",
    description:
      "Whether a requested action is permitted, within a defined scope and time.",
    showArrow: true,
  },
  {
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "3 · Evidence",
    description:
      "A reviewable record of the decision, subject to privacy controls.",
    showArrow: false,
  },
] as const;

const bottomGridCards = [
  {
    icon: <User className="w-5 h-5 text-sky-700" />,
    title: "Identity",
    description: "Who or what an actor is.",
  },
  {
    icon: <Lock className="w-5 h-5 text-sky-700" />,
    title: "Authentication",
    description: "Checks a sign-in claim. It is not permission.",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-sky-700" />,
    title: "Credential",
    description: "A structured claim with issuer, holder and verifier roles.",
  },
  {
    icon: <KeyRound className="w-5 h-5 text-sky-700" />,
    title: "Authorization",
    description: "Whether a specific action is permitted now.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-sky-700" />,
    title: "Delegated authority",
    description: "Who may act for whom, for what, within which scope and time.",
  },
  {
    icon: <FileText className="w-5 h-5 text-sky-700" />,
    title: "Evidence",
    description: "The reviewable basis for a decision.",
  },
] as const;

export default function IdentityWorkflow() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start py-20 px-4 md:px-8 overflow-hidden bg-[#0A0F1D]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/identity/8.png"
          alt="Workflow Background"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/80 via-[#0A0F1D]/60 to-[#0A0F1D]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-serif mb-4 leading-tight">
            Identity, then permission, then proof
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Digital identity infrastructure establishes and manages information
            about people, organizations, services, machines and agents.
            Authentication checks a sign-in claim; authorization evaluates a
            requested action; delegated authority describes permission to act on
            another party&apos;s behalf. Zoiko ID&apos;s intended trust story
            connects those decisions with reviewable evidence.
          </p>
        </div>

        {/* Top Row: 3 Process Cards with Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-6 relative">
          {topRowCards.map((card, idx) => (
            <div key={idx} className="relative flex items-center">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between w-full h-full min-h-[180px]">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
              {card.showArrow && (
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-sky-400 p-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Diagram Notice Badge */}
        <div className="w-full flex justify-start mb-8">
          <div className="inline-block bg-[#E0E7FF]/90 backdrop-blur-md text-indigo-950 text-xs font-medium px-4 py-2 rounded-lg border border-indigo-200/50 shadow-sm">
            Conceptual diagram. Not a production screenshot.
          </div>
        </div>

        {/* Bottom Grid: 6 Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {bottomGridCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex flex-col justify-between h-full min-h-[160px]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
