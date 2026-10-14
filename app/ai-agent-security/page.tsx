import type { Metadata } from "next";

import AgentHeroSection from "@/components/ai-agent-security/AgentHeroSection";
import AgentChallengeSection from "@/components/ai-agent-security/AgentChallengeSection";
import AgentTrustSequenceSection from "@/components/ai-agent-security/AgentTrustSequenceSection";
import AgentDistinctActorsSection from "@/components/ai-agent-security/AgentDistinctActorsSection";
import AgentDelegatedMandateSection from "@/components/ai-agent-security/AgentDelegatedMandateSection";
import AgentDecisionEnforcementSection from "@/components/ai-agent-security/AgentDecisionEnforcementSection";
import AgentContinuousTrustSection from "@/components/ai-agent-security/AgentContinuousTrustSection";
import AgentRevocationSection from "@/components/ai-agent-security/AgentRevocationSection";
import AgentGovernancePersonasSection from "@/components/ai-agent-security/AgentGovernancePersonasSection";
import AgentArchitectureSection from "@/components/ai-agent-security/AgentArchitectureSection";
import AgentUseCasesSection from "@/components/ai-agent-security/AgentUseCasesSection";
import AgentSecurityPrivacySection from "@/components/ai-agent-security/AgentSecurityPrivacySection";
import AgentFaqSection from "@/components/ai-agent-security/AgentFaqSection";
import AgentCtaSection from "@/components/ai-agent-security/AgentCtaSection";

export const metadata: Metadata = {
  title: "AI Agent Security | Zoiko iD",
  description:
    "Trusted identity and delegated authority for AI agents. Give AI agents bounded credentials, explicit mandates, and continuous trust evaluation. Auditable, revocable, and compliant.",
};

export default function AiAgentSecurityPage() {
  return (
    <>
      <AgentHeroSection />
      <AgentChallengeSection />
      <AgentTrustSequenceSection />
      <AgentDistinctActorsSection />
      <AgentDelegatedMandateSection />
      <AgentDecisionEnforcementSection />
      <AgentContinuousTrustSection />
      <AgentRevocationSection />
      <AgentGovernancePersonasSection />
      <AgentArchitectureSection />
      <AgentUseCasesSection />
      <AgentSecurityPrivacySection />
      <AgentFaqSection />
      <AgentCtaSection />
    </>
  );
}
