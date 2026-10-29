import type { Metadata } from "next";
import {
  StandardsHeroSection,
  WillZoikoWorkWithEstateSection,
  FiveLabelsFullTextSection,
  SixTechnicalDomainsSection,
  ClaimStatusMatrixSection,
  FederationProvisioningCredentialsSection,
  AuthorityBeyondSignInSection,
  HowPiecesConnectSection,
  WhoOwnsEachPartSection,
  FourStepsEvaluationIntegrationSection,
  WhatCountsAsProofSection,
  WhereInteroperabilityCanFailSection,
  SchemasEndpointsBannerSection,
  DiscussIntegrationRequirementsSection,
  StandardsFaqSection,
  PublicationGatesSection,
  StandardsNextStepClosingSection,
} from "@/components/standards-interoperability";

export const metadata: Metadata = {
  title: "Standards & Interoperability | Zoiko iD",
  description:
    "Explore the protocols, integration patterns and trust boundaries used to connect identity, authority and evidence across systems. Verify capability status in the matrix below.",
};

export default function HeaderPlatformStandardsInteroperabilityPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden sm:block">
        <StandardsHeroSection view="desktop" />
        <WillZoikoWorkWithEstateSection view="desktop" />
        <FiveLabelsFullTextSection view="desktop" />
        <SixTechnicalDomainsSection view="desktop" />
        <ClaimStatusMatrixSection view="desktop" />
        <FederationProvisioningCredentialsSection view="desktop" />
        <AuthorityBeyondSignInSection view="desktop" />
        <HowPiecesConnectSection view="desktop" />
        <WhoOwnsEachPartSection view="desktop" />
        <FourStepsEvaluationIntegrationSection view="desktop" />
        <WhatCountsAsProofSection view="desktop" />
        <WhereInteroperabilityCanFailSection view="desktop" />
        <SchemasEndpointsBannerSection view="desktop" />
        <DiscussIntegrationRequirementsSection view="desktop" />
        <StandardsFaqSection view="desktop" />
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="sm:hidden">
        <StandardsHeroSection view="mobile" />
        <WillZoikoWorkWithEstateSection view="mobile" />
        <FiveLabelsFullTextSection view="mobile" />
        <SixTechnicalDomainsSection view="mobile" />
        <ClaimStatusMatrixSection view="mobile" />
        <FederationProvisioningCredentialsSection view="mobile" />
        <AuthorityBeyondSignInSection view="mobile" />
        <HowPiecesConnectSection view="mobile" />
        <WhoOwnsEachPartSection view="mobile" />
        <FourStepsEvaluationIntegrationSection view="mobile" />
        <WhatCountsAsProofSection view="mobile" />
        <WhereInteroperabilityCanFailSection view="mobile" />
        <SchemasEndpointsBannerSection view="mobile" />
        <StandardsFaqSection view="mobile" />
        <DiscussIntegrationRequirementsSection view="mobile" />
        <PublicationGatesSection view="mobile" />
        <StandardsNextStepClosingSection view="mobile" />
      </div>
    </main>
  );
}
