import type { Metadata } from "next";

import ArchitectureIntegrationSection from "@/components/customer-user-access/ArchitectureIntegrationSection";
import AuthenticationRecoverySection from "@/components/customer-user-access/AuthenticationRecoverySection";
import AuthorizationDecisionsSection from "@/components/customer-user-access/AuthorizationDecisionsSection";
import BuyerProblemSection from "@/components/customer-user-access/BuyerProblemSection";
import ContinuousTrustSection from "@/components/customer-user-access/ContinuousTrustSection";
import CustomerAccessCtaSection from "@/components/customer-user-access/CustomerAccessCtaSection";
import CustomerAccessFaqSection from "@/components/customer-user-access/CustomerAccessFaqSection";
import CustomerHeroSection from "@/components/customer-user-access/CustomerHeroSection";
import DelegatedAccessSection from "@/components/customer-user-access/DelegatedAccessSection";
import DeveloperEnterprisePathsSection from "@/components/customer-user-access/DeveloperEnterprisePathsSection";
import EvidenceExplainabilitySection from "@/components/customer-user-access/EvidenceExplainabilitySection";
import InterfaceShowcaseSection from "@/components/customer-user-access/InterfaceShowcaseSection";
import OrganizationContextSection from "@/components/customer-user-access/OrganizationContextSection";
import PrivacyAssuranceSection from "@/components/customer-user-access/PrivacyAssuranceSection";

export const metadata: Metadata = {
  title: "Customer & User Access | Zoiko iD",
  description:
    "Give customers access that respects identity, context, and authority. Design customer-facing access around who is signing in, what application or organization they belong to, what actions are allowed, and what happens when trust changes.",
};

export default function CustomerUserAccessPage() {
  return (
    <>
      <CustomerHeroSection />
      <AuthenticationRecoverySection />
      <BuyerProblemSection />
      <AuthorizationDecisionsSection />
      <DelegatedAccessSection />
      <OrganizationContextSection />
      <ContinuousTrustSection />
      <EvidenceExplainabilitySection />
      <ArchitectureIntegrationSection />
      <InterfaceShowcaseSection />
      <DeveloperEnterprisePathsSection />
      <PrivacyAssuranceSection />
      <CustomerAccessFaqSection />
      <CustomerAccessCtaSection />
    </>
  );
}
