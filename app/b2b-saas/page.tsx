import type { Metadata } from "next";

import ActorClassesSection from "@/components/b2b-saas/ActorClassesSection";
import B2bCtaSection from "@/components/b2b-saas/B2bCtaSection";
import B2bFaqSection from "@/components/b2b-saas/B2bFaqSection";
import B2bHeroSection from "@/components/b2b-saas/B2bHeroSection";
import B2bUseCasesSection from "@/components/b2b-saas/B2bUseCasesSection";
import ContinuousTrustRevocationSection from "@/components/b2b-saas/ContinuousTrustRevocationSection";
import DelegatedAuthorityModelSection from "@/components/b2b-saas/DelegatedAuthorityModelSection";
import DirectAnswerSection from "@/components/b2b-saas/DirectAnswerSection";
import EnterpriseSsoSection from "@/components/b2b-saas/EnterpriseSsoSection";
import MembershipLifecycleSection from "@/components/b2b-saas/MembershipLifecycleSection";
import TenantVsOrgSection from "@/components/b2b-saas/TenantVsOrgSection";
import TrustGovernanceSection from "@/components/b2b-saas/TrustGovernanceSection";

export const metadata: Metadata = {
  title: "B2B / SaaS Identity | Zoiko iD",
  description:
    "Design multi-organization B2B access around distinct organization identities, memberships, representatives, and bounded authority—without treating sign-in as permission.",
};

export default function B2bSaasPage() {
  return (
    <>
      <B2bHeroSection />
      <DirectAnswerSection />
      <ActorClassesSection />
      <TenantVsOrgSection />
      <MembershipLifecycleSection />
      <EnterpriseSsoSection />
      <DelegatedAuthorityModelSection />
      <ContinuousTrustRevocationSection />
      <B2bUseCasesSection />
      <TrustGovernanceSection />
      <B2bFaqSection />
      <B2bCtaSection />
    </>
  );
}
