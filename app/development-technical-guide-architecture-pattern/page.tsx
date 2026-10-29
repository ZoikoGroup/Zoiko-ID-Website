import type { Metadata } from "next";
import {
  ArchitecturePatternsHeroSection,
  PatternChainSection,
  StartFromProblemSection,
  Pattern01AppAuthenticationSection,
  Pattern02EnterpriseFederationSection,
  Pattern03DelegatedAccessSection,
  Pattern04MachineWorkloadIdentitySection,
  Pattern05AIAgentIdentitySection,
  Pattern06VerifiableCredentialsSection,
  Pattern07ContinuousAccessSection,
  Pattern08EvidenceAndAuditSection,
  PatternTouchpointsMatrixSection,
  WhatPatternsRefuseSection,
  PatternFailurePathSection,
  PatternToBuildStepsSection,
  PatternShortDefinitionsSection,
  WhatMustBeClearedSection,
  ExploreRelatedGuidanceSection,
} from "@/components/development-technical-guide-architecture-pattern";

export const metadata: Metadata = {
  title: "Architecture Patterns | Technical Guide | Zoiko iD",
  description:
    "Explore architectural patterns for connecting identities, authority, policy decisions and audit evidence across applications, APIs, machines and AI agents.",
};

export default function ArchitecturePatternsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <ArchitecturePatternsHeroSection view="all" />
      <PatternChainSection view="all" />
      <StartFromProblemSection view="all" />
      <Pattern01AppAuthenticationSection view="all" />
      <Pattern02EnterpriseFederationSection view="all" />
      <Pattern03DelegatedAccessSection view="all" />
      <Pattern04MachineWorkloadIdentitySection view="all" />
      <Pattern05AIAgentIdentitySection view="all" />
      <Pattern06VerifiableCredentialsSection view="all" />
      <Pattern07ContinuousAccessSection view="all" />
      <Pattern08EvidenceAndAuditSection view="all" />
      <PatternTouchpointsMatrixSection view="all" />
      <WhatPatternsRefuseSection view="all" />
      <PatternFailurePathSection view="all" />
      <PatternToBuildStepsSection view="all" />
      <PatternShortDefinitionsSection view="all" />

      {/* Mobile Layout Sequence */}
      <ExploreRelatedGuidanceSection view="mobile" />
      <WhatMustBeClearedSection view="mobile" />

      {/* Desktop Layout Sequence (100% UNTOUCHED) */}
      <WhatMustBeClearedSection view="desktop" />
      <ExploreRelatedGuidanceSection view="desktop" />
    </main>
  );
}
