import type { Metadata } from "next";

import HeroSection from "@/components/solutions-ai-solutions/HeroSection";
import TrustGapSection from "@/components/solutions-ai-solutions/TrustGapSection";
import ActorClassesSection from "@/components/solutions-ai-solutions/ActorClassesSection";
import IdentityBindingSection from "@/components/solutions-ai-solutions/IdentityBindingSection";
import DelegatedAuthoritySection from "@/components/solutions-ai-solutions/DelegatedAuthoritySection";
import PolicyDecisionSection from "@/components/solutions-ai-solutions/PolicyDecisionSection";
import ToolBoundarySection from "@/components/solutions-ai-solutions/ToolBoundarySection";
import ContinuousTrustSection from "@/components/solutions-ai-solutions/ContinuousTrustSection";
import RevocationSection from "@/components/solutions-ai-solutions/RevocationSection";
import EvidenceTrailSection from "@/components/solutions-ai-solutions/EvidenceTrailSection";
import ArchitectureSection from "@/components/solutions-ai-solutions/ArchitectureSection";
import UseCasesSection from "@/components/solutions-ai-solutions/UseCasesSection";
import FaqSection from "@/components/solutions-ai-solutions/FaqSection";
import CtaBannerSection from "@/components/solutions-ai-solutions/CtaBannerSection";
import SectionDivider from "@/components/solutions-ai-solutions/SectionDivider";

export const metadata: Metadata = {
  title: "AI Solutions | Zoiko iD",
  description:
    "Identity, authority, and evidence for AI-powered workflows. Build trusted, governed, and auditable AI systems.",
};

export default function SolutionsAiSolutionsPage() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <TrustGapSection />
      <SectionDivider />
      <ActorClassesSection />
      <SectionDivider />
      <IdentityBindingSection />
      <SectionDivider />
      <DelegatedAuthoritySection />
      <SectionDivider />
      <PolicyDecisionSection />
      <SectionDivider />
      <ToolBoundarySection />
      <SectionDivider />
      <ContinuousTrustSection />
      <SectionDivider />
      <RevocationSection />
      <SectionDivider />
      <EvidenceTrailSection />
      <SectionDivider />
      <ArchitectureSection />
      <SectionDivider />
      <UseCasesSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <CtaBannerSection />
    </>
  );
}
