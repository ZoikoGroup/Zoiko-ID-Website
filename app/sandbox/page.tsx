import type { Metadata } from "next";

import SandboxHeroSection from "@/components/sandbox/SandboxHeroSection";
import SandboxBeforeYouBeginSection from "@/components/sandbox/SandboxBeforeYouBeginSection";
import SandboxScenarioExplorerSection from "@/components/sandbox/SandboxScenarioExplorerSection";
import SandboxActorsSection from "@/components/sandbox/SandboxActorsSection";
import SandboxDecisionSequenceSection from "@/components/sandbox/SandboxDecisionSequenceSection";
import SandboxMandateTicketSection from "@/components/sandbox/SandboxMandateTicketSection";
import SandboxCredentialsSection from "@/components/sandbox/SandboxCredentialsSection";
import SandboxTechnicalReferenceRibbonSection from "@/components/sandbox/SandboxTechnicalReferenceRibbonSection";
import SandboxEvidenceSection from "@/components/sandbox/SandboxEvidenceSection";
import SandboxWalkthroughSection from "@/components/sandbox/SandboxWalkthroughSection";
import SandboxVsProductionSection from "@/components/sandbox/SandboxVsProductionSection";

export const metadata: Metadata = {
  title: "Sandbox | Zoiko iD",
  description:
    "Evaluate identity and delegated authority in a controlled environment. A Zoiko iD sandbox is an intended, isolated evaluation context for testing supported identity and authorization integrations without implying production entitlement.",
};

export default function SandboxPage() {
  return (
    <>
      <SandboxHeroSection />
      <SandboxBeforeYouBeginSection />
      <SandboxScenarioExplorerSection />
      <SandboxActorsSection />
      <SandboxDecisionSequenceSection />
      <SandboxMandateTicketSection />
      <SandboxCredentialsSection />
      <SandboxTechnicalReferenceRibbonSection />
      <SandboxEvidenceSection />
      <SandboxWalkthroughSection />
      <SandboxVsProductionSection />
    </>
  );
}
