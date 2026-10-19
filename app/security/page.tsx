import type { Metadata } from "next";

import SecurityHeroSection from "@/components/security/SecurityHeroSection";
import SecurityPillarsSection from "@/components/security/SecurityPillarsSection";
import SecurityLifecycleSection from "@/components/security/SecurityLifecycleSection";
import SecurityVerifiedSummarySection from "@/components/security/SecurityVerifiedSummarySection";
import SecurityAuthnVsAuthzSection from "@/components/security/SecurityAuthnVsAuthzSection";
import SecurityDelegatedAuthoritySection from "@/components/security/SecurityDelegatedAuthoritySection";
import SecurityActorsSection from "@/components/security/SecurityActorsSection";
import SecurityEvidenceSection from "@/components/security/SecurityEvidenceSection";
import SecurityIntegrationBoundariesSection from "@/components/security/SecurityIntegrationBoundariesSection";
import SecurityOperationsRoutesSection from "@/components/security/SecurityOperationsRoutesSection";
import SecurityReviewEngagementSection from "@/components/security/SecurityReviewEngagementSection";
import SecurityFaqSection from "@/components/security/SecurityFaqSection";
import SecurityFinalCtaSection from "@/components/security/SecurityFinalCtaSection";

export const metadata: Metadata = {
  title: "Security Architecture & Controls | Zoiko iD",
  description:
    "Explore the architectural controls, delegated authority bounds, actor distinctions, and reviewable evidence that form the foundation of Zoiko iD security.",
};

export default function SecurityPage() {
  return (
    <>
      <SecurityHeroSection />
      <SecurityPillarsSection />
      <SecurityLifecycleSection />
      <SecurityVerifiedSummarySection />
      <SecurityAuthnVsAuthzSection />
      <SecurityDelegatedAuthoritySection />
      <SecurityActorsSection />
      <SecurityEvidenceSection />
      <SecurityIntegrationBoundariesSection />
      <SecurityOperationsRoutesSection />
      <SecurityReviewEngagementSection />
      <SecurityFaqSection />
      <SecurityFinalCtaSection />
    </>
  );
}
