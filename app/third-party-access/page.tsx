import type { Metadata } from "next";

import ActionLevelDecisionSection from "@/components/third-party-access/ActionLevelDecisionSection";
import ActorRelationshipModelSection from "@/components/third-party-access/ActorRelationshipModelSection";
import AuditEvidenceTrailSection from "@/components/third-party-access/AuditEvidenceTrailSection";
import AuthorityCreationReviewSection from "@/components/third-party-access/AuthorityCreationReviewSection";
import ContinuousTrustChangeSection from "@/components/third-party-access/ContinuousTrustChangeSection";
import EnterpriseAdoptionSection from "@/components/third-party-access/EnterpriseAdoptionSection";
import GovernancePrinciplesSection from "@/components/third-party-access/GovernancePrinciplesSection";
import RevocationExpirySection from "@/components/third-party-access/RevocationExpirySection";
import ScopedGrantAnatomySection from "@/components/third-party-access/ScopedGrantAnatomySection";
import ServiceAgentScenarioSection from "@/components/third-party-access/ServiceAgentScenarioSection";
import ThirdPartyCtaSection from "@/components/third-party-access/ThirdPartyCtaSection";
import ThirdPartyFaqSection from "@/components/third-party-access/ThirdPartyFaqSection";
import ThirdPartyHeroSection from "@/components/third-party-access/ThirdPartyHeroSection";
import ThirdPartyHumanScenarioSection from "@/components/third-party-access/ThirdPartyHumanScenarioSection";
import TrustGapComparisonSection from "@/components/third-party-access/TrustGapComparisonSection";

export const metadata: Metadata = {
  title: "Delegated Third-Party Access | Zoiko iD",
  description:
    "Trusted on behalf-of access, auditable every step. When partners, consultants, or services need to act for your organization—bind their identity to bounded authority. Evaluate every action. Revoke instantly. Preserve complete evidence.",
};

export default function ThirdPartyAccessPage() {
  return (
    <>
      <ThirdPartyHeroSection />
      <TrustGapComparisonSection />
      <ScopedGrantAnatomySection />
      <ActorRelationshipModelSection />
      <AuthorityCreationReviewSection />
      <ActionLevelDecisionSection />
      <ThirdPartyHumanScenarioSection />
      <ServiceAgentScenarioSection />
      <ContinuousTrustChangeSection />
      <RevocationExpirySection />
      <AuditEvidenceTrailSection />
      <EnterpriseAdoptionSection />
      <GovernancePrinciplesSection />
      <ThirdPartyFaqSection />
      <ThirdPartyCtaSection />
    </>
  );
}
