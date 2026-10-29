import type { Metadata } from "next";
import {
  ResponsibleAiHeroSection,
  IdentityAuthorityEvidenceSection,
  SponsorToEvidenceChainSection,
  AgentStandingPermissionsSection,
  FiveEntitiesOneJobSection,
  MandateScopedSection,
  HumanApprovalEvaluationSection,
  ThreeBranchesDecisionSection,
  CredentialsLifecycleSection,
  TrustRevocationTimingSection,
  DecisionRecordTableSection,
  ProtectedByRoleBannerSection,
  AiIncidentRoutingSection,
  DiscussAgentGovernanceSection,
  EveryStateNamedSection,
  ResponsibleAiFaqSection,
  ResponsibleAiPublicationGatesSection,
} from "@/components/responsible-ai-agent-governance";

export const metadata: Metadata = {
  title: "Responsible AI and Agent Governance | Zoiko iD",
  description:
    "Zoiko ID makes agent activity accountable to identified principals, defined mandates, human oversight, policy boundaries, revocation and reviewable decision evidence.",
};

export default function ResponsibleAiAgentGovernancePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <ResponsibleAiHeroSection view="all" />
      <IdentityAuthorityEvidenceSection view="all" />
      <SponsorToEvidenceChainSection view="all" />
      <AgentStandingPermissionsSection view="all" />
      <FiveEntitiesOneJobSection view="all" />
      <MandateScopedSection view="all" />
      <HumanApprovalEvaluationSection view="all" />
      <ThreeBranchesDecisionSection view="all" />
      <CredentialsLifecycleSection view="all" />
      <TrustRevocationTimingSection view="all" />
      <DecisionRecordTableSection view="all" />
      <ProtectedByRoleBannerSection view="all" />
      <AiIncidentRoutingSection view="all" />
      <DiscussAgentGovernanceSection view="all" />
      <EveryStateNamedSection view="all" />
      <ResponsibleAiFaqSection view="all" />
      <ResponsibleAiPublicationGatesSection view="all" />
    </main>
  );
}
