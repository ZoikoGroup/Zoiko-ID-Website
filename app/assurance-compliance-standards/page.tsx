import type { Metadata } from "next";

import ComplianceStandardsHeroSection from "@/components/assurance-compliance-standards/ComplianceStandardsHeroSection";
import ComplianceStandardsStatusLegendSection from "@/components/assurance-compliance-standards/ComplianceStandardsStatusLegendSection";
import ComplianceStandardsBrowserSection from "@/components/assurance-compliance-standards/ComplianceStandardsBrowserSection";
import ComplianceStandardsDetailCardsSection from "@/components/assurance-compliance-standards/ComplianceStandardsDetailCardsSection";
import ComplianceStandardsProtocolsSection from "@/components/assurance-compliance-standards/ComplianceStandardsProtocolsSection";
import ComplianceStandardsCredentialsSection from "@/components/assurance-compliance-standards/ComplianceStandardsCredentialsSection";
import ComplianceStandardsAgentsDelegationSection from "@/components/assurance-compliance-standards/ComplianceStandardsAgentsDelegationSection";
import ComplianceStandardsRegulatorySection from "@/components/assurance-compliance-standards/ComplianceStandardsRegulatorySection";
import ComplianceStandardsAssessmentVsCertificationSection from "@/components/assurance-compliance-standards/ComplianceStandardsAssessmentVsCertificationSection";
import ComplianceStandardsEvidenceHandoffSection from "@/components/assurance-compliance-standards/ComplianceStandardsEvidenceHandoffSection";
import ComplianceStandardsEnterpriseReviewSection from "@/components/assurance-compliance-standards/ComplianceStandardsEnterpriseReviewSection";
import ComplianceStandardsStatesSection from "@/components/assurance-compliance-standards/ComplianceStandardsStatesSection";
import ComplianceStandardsFaqSection from "@/components/assurance-compliance-standards/ComplianceStandardsFaqSection";
import ComplianceStandardsFinalCtaSection from "@/components/assurance-compliance-standards/ComplianceStandardsFinalCtaSection";

export const metadata: Metadata = {
  title: "Compliance & Standards | Zoiko iD",
  description:
    "Understand the standards, implementation scopes, and assurance boundaries behind Zoiko iD. Explore identity, authentication, delegated authority, and evidence standards.",
};

export default function AssuranceComplianceStandardsPage() {
  return (
    <>
      <ComplianceStandardsHeroSection />
      <ComplianceStandardsStatusLegendSection />
      <ComplianceStandardsBrowserSection />
      <ComplianceStandardsDetailCardsSection />
      <ComplianceStandardsProtocolsSection />
      <ComplianceStandardsCredentialsSection />
      <ComplianceStandardsAgentsDelegationSection />
      <ComplianceStandardsRegulatorySection />
      <ComplianceStandardsAssessmentVsCertificationSection />
      <ComplianceStandardsEvidenceHandoffSection />
      <ComplianceStandardsEnterpriseReviewSection />
      <ComplianceStandardsStatesSection />
      <ComplianceStandardsFaqSection />
      <ComplianceStandardsFinalCtaSection />
    </>
  );
}
