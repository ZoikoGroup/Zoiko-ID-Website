import type { Metadata } from "next";

import HeroSection from "@/components/continuous-trust/HeroSection";
import ModelSection from "@/components/continuous-trust/ModelSection";
import SignalsSection from "@/components/continuous-trust/SignalsSection";
import LifecycleSection from "@/components/continuous-trust/LifecycleSection";
import OutcomesSection from "@/components/continuous-trust/OutcomesSection";
import DecisionFlowSection from "@/components/continuous-trust/DecisionFlowSection";
import RolesSection from "@/components/continuous-trust/RolesSection";
import UnclearTrustSection from "@/components/continuous-trust/UnclearTrustSection";
import AgentsMandateSection from "@/components/continuous-trust/AgentsMandateSection";
import AuditRecordSection from "@/components/continuous-trust/AuditRecordSection";
import DisputesSection from "@/components/continuous-trust/DisputesSection";
import SensitiveSignalsSection from "@/components/continuous-trust/SensitiveSignalsSection";
import FlowSection from "@/components/continuous-trust/FlowSection";
import ContactSection from "@/components/continuous-trust/ContactSection";
import AnswersSection from "@/components/continuous-trust/AnswersSection";
import GatesSection from "@/components/continuous-trust/GatesSection";

export const metadata: Metadata = {
  title: "Continuous Trust & Revocation | Zoiko iD",
  description:
    "Trust changes. Authority has to be able to change with it. How signals, policy decisions and revocation connect identity, delegated authority and evidence.",
};

// Each section file holds both the desktop (>= lg) and the mobile (< lg) layout.
// The two designs order two pairs of sections differently, so those pairs sit
// in a flex column and swap places at lg with CSS order (DOM order = mobile).
export default function ContinuousTrustPage() {
  return (
    <>
      <HeroSection />
      <ModelSection />
      <SignalsSection />
      <div className="flex flex-col">
        <div className="lg:order-2">
          <OutcomesSection />
        </div>
        <div className="lg:order-1">
          <LifecycleSection />
        </div>
      </div>
      <DecisionFlowSection />
      <RolesSection />
      <UnclearTrustSection />
      <AgentsMandateSection />
      <AuditRecordSection />
      <DisputesSection />
      <SensitiveSignalsSection />
      <FlowSection />
      <div className="flex flex-col">
        <div className="lg:order-2">
          <AnswersSection />
        </div>
        <div className="lg:order-1">
          <ContactSection />
        </div>
      </div>
      <GatesSection />
    </>
  );
}
