import type { Metadata } from "next";
import HeroSection from "@/components/solutions-regulated-services/HeroSection";
import WhatIsRegulatedServicesSection from "@/components/solutions-regulated-services/WhatIsRegulatedServicesSection";
import ChallengeSection from "@/components/solutions-regulated-services/ChallengeSection";
import SectorScenariosSection from "@/components/solutions-regulated-services/SectorScenariosSection";
import ActorIdentitySection from "@/components/solutions-regulated-services/ActorIdentitySection";
import OrganizationSponsorSection from "@/components/solutions-regulated-services/OrganizationSponsorSection";
import ScopedAuthoritySection from "@/components/solutions-regulated-services/ScopedAuthoritySection";
import PolicyEvaluationSection from "@/components/solutions-regulated-services/PolicyEvaluationSection";
import ContinuousTrustSection from "@/components/solutions-regulated-services/ContinuousTrustSection";
import RevocationSection from "@/components/solutions-regulated-services/RevocationSection";
import AuditEvidenceSection from "@/components/solutions-regulated-services/AuditEvidenceSection";
import EnterpriseFederationSection from "@/components/solutions-regulated-services/EnterpriseFederationSection";
import SecurityPrivacySection from "@/components/solutions-regulated-services/SecurityPrivacySection";
import PersonasSection from "@/components/solutions-regulated-services/PersonasSection";
import FaqSection from "@/components/solutions-regulated-services/FaqSection";
import CtaBannerSection from "@/components/solutions-regulated-services/CtaBannerSection";

export const metadata: Metadata = {
  title: "Regulated Services | Zoiko iD",
  description:
    "Compliance-ready identity and delegated authority for regulated sectors. Govern identity, authorization, and evidence across finance, healthcare, government, energy.",
};

export default function RegulatedServicesPage() {
  return (
    <>
      <HeroSection />
      <WhatIsRegulatedServicesSection />
      <ChallengeSection />
      <SectorScenariosSection />
      <ActorIdentitySection />
      <OrganizationSponsorSection />
      <ScopedAuthoritySection />
      <PolicyEvaluationSection />
      <ContinuousTrustSection />
      <RevocationSection />
      <AuditEvidenceSection />
      <EnterpriseFederationSection />
      <SecurityPrivacySection />
      <PersonasSection />
      <FaqSection />
      <CtaBannerSection />
    </>
  );
}
