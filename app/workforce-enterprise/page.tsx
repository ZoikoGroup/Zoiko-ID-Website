import type { Metadata } from "next";

import WorkforceHeroSection from "@/components/workforce-enterprise/WorkforceHeroSection";
import WorkforceLifecycleSection from "@/components/workforce-enterprise/WorkforceLifecycleSection";
import WorkforceChallengesSection from "@/components/workforce-enterprise/WorkforceChallengesSection";
import ActorsAuthoritySection from "@/components/workforce-enterprise/ActorsAuthoritySection";
import EnterpriseFederationSection from "@/components/workforce-enterprise/EnterpriseFederationSection";
import ContinuousTrustSection from "@/components/workforce-enterprise/ContinuousTrustSection";
import DelegationSection from "@/components/workforce-enterprise/DelegationSection";
import SecurityPrivacySection from "@/components/workforce-enterprise/SecurityPrivacySection";
import IntegrationPathSection from "@/components/workforce-enterprise/IntegrationPathSection";
import PerActionAuthzSection from "@/components/workforce-enterprise/PerActionAuthzSection";
import CapabilityMatrixSection from "@/components/workforce-enterprise/CapabilityMatrixSection";
import WorkforceFaqSection from "@/components/workforce-enterprise/WorkforceFaqSection";
import WorkforceCtaSection from "@/components/workforce-enterprise/WorkforceCtaSection";

export const metadata: Metadata = {
  title: "Workforce & Enterprise Access | Zoiko iD",
  description:
    "Identity, authority, and bounded access for your workforce. Connect enterprise identity infrastructure with verifiable organization context, role-based authority, and continuous trust evaluation.",
};

export default function WorkforceEnterprisePage() {
  return (
    <>
      <WorkforceHeroSection />
      <WorkforceLifecycleSection />
      <WorkforceChallengesSection />
      <ActorsAuthoritySection />
      <EnterpriseFederationSection />
      <ContinuousTrustSection />
      <DelegationSection />
      <SecurityPrivacySection />
      <IntegrationPathSection />
      <PerActionAuthzSection />
      <CapabilityMatrixSection />
      <WorkforceFaqSection />
      <WorkforceCtaSection />
    </>
  );
}
