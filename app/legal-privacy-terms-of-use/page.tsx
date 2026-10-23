import type { Metadata } from "next";

import {
  TermsHeroSection,
  TermsScopeMetadataSection,
  TermsClausesSection,
  TermsRelatedNoticesSection,
  TermsVersionsSection,
  TermsPrintShareSection,
  TermsQuestionsSection,
  TermsPublicationGateSection,
  TermsAccessibilitySection,
  TermsSecurityPrivacySection,
  TermsPerformanceSection,
  TermsSeoPublishingSection,
  TermsAcceptanceTestsSection,
  TermsStateMatrixSection,
  TermsOwnershipRegisterSection,
  TermsFinalDecisionSection,
} from "@/components/legal-privacy-terms-of-use";

export const metadata: Metadata = {
  title: "Terms of Use | Zoiko iD",
  description:
    "Read the terms that apply to your use of the relevant Zoiko iD website or services.",
};

export default function LegalPrivacyTermsOfUsePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      <div className="hidden sm:block">
        <TermsHeroSection view="desktop" />
        <TermsScopeMetadataSection view="desktop" />
        <TermsClausesSection view="desktop" />
        <TermsRelatedNoticesSection view="desktop" />
        <TermsVersionsSection view="desktop" />
        <TermsPrintShareSection view="desktop" />
        <TermsQuestionsSection view="desktop" />
        <TermsPublicationGateSection view="desktop" />
        <TermsAccessibilitySection view="desktop" />
        <TermsSecurityPrivacySection view="desktop" />
        <TermsPerformanceSection view="desktop" />
        <TermsSeoPublishingSection view="desktop" />
        <TermsAcceptanceTestsSection view="desktop" />
        <TermsStateMatrixSection view="desktop" />
        <TermsOwnershipRegisterSection view="desktop" />
        <TermsFinalDecisionSection view="desktop" />
      </div>

      {/* MOBILE VERSION (sm:hidden) */}
      <div className="sm:hidden">
        <TermsHeroSection view="mobile" />
        <TermsScopeMetadataSection view="mobile" />
        <TermsClausesSection view="mobile" />
        <TermsRelatedNoticesSection view="mobile" />
        <TermsVersionsSection view="mobile" />
        <TermsPrintShareSection view="mobile" />
        <TermsQuestionsSection view="mobile" />
        <TermsPublicationGateSection view="mobile" />
        <TermsAccessibilitySection view="mobile" />
        <TermsSecurityPrivacySection view="mobile" />
        <TermsPerformanceSection view="mobile" />
        <TermsSeoPublishingSection view="mobile" />
        <TermsAcceptanceTestsSection view="mobile" />
        <TermsStateMatrixSection view="mobile" />
        <TermsOwnershipRegisterSection view="mobile" />
        <TermsFinalDecisionSection view="mobile" />
      </div>
    </main>
  );
}
