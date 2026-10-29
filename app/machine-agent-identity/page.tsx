import type { Metadata } from "next";

import HeroSection from "@/components/machine-agent-identity/HeroSection";
import WhatIsSection from "@/components/machine-agent-identity/WhatIsSection";
import AnswerFirstSection from "@/components/machine-agent-identity/AnswerFirstSection";
import PrincipalsSection from "@/components/machine-agent-identity/PrincipalsSection";
import BindingSection from "@/components/machine-agent-identity/BindingSection";
import SponsorSection from "@/components/machine-agent-identity/SponsorSection";
import MandateSection from "@/components/machine-agent-identity/MandateSection";
import DecisionsSection from "@/components/machine-agent-identity/DecisionsSection";
import LifecycleSection from "@/components/machine-agent-identity/LifecycleSection";
import DenyDefaultSection from "@/components/machine-agent-identity/DenyDefaultSection";
import BoundedVisibilitySection from "@/components/machine-agent-identity/BoundedVisibilitySection";
import OverlaySection from "@/components/machine-agent-identity/OverlaySection";
import ScenariosSection from "@/components/machine-agent-identity/ScenariosSection";
import StatusSection from "@/components/machine-agent-identity/StatusSection";
import FailureSection from "@/components/machine-agent-identity/FailureSection";
import EnquirySection from "@/components/machine-agent-identity/EnquirySection";
import GatesSection from "@/components/machine-agent-identity/GatesSection";
import NextStepSection from "@/components/machine-agent-identity/NextStepSection";

export const metadata: Metadata = {
  title: "Machine & Agent Identity | Zoiko iD",
  description:
    "Machine identity establishes an identity for a non-human actor. An AI agent is authorized by a bounded mandate from an accountable sponsor, and every decision is recorded.",
};

// Each section file holds both the desktop (>= lg) and the mobile (< lg) layout.
// The two designs order "What is machine identity" and "Three parts" differently,
// so that pair sits in a flex column and swaps at lg with CSS order (DOM order =
// mobile). Lifecycle also carries a mobile-only block, and Gates is mobile-only.
export default function MachineAgentIdentityPage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col">
        <div className="lg:order-2">
          <WhatIsSection />
        </div>
        <div className="lg:order-1">
          <AnswerFirstSection />
        </div>
      </div>
      <PrincipalsSection />
      <BindingSection />
      <SponsorSection />
      <MandateSection />
      <DecisionsSection />
      <LifecycleSection />
      <DenyDefaultSection />
      <BoundedVisibilitySection />
      <OverlaySection />
      <ScenariosSection />
      <StatusSection />
      <FailureSection />
      <EnquirySection />
      <GatesSection />
      <NextStepSection />
    </>
  );
}
