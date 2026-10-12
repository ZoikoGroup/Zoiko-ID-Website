import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import AuthorityGraphSection from "@/components/organization-identity/AuthorityGraphSection";
import DeveloperAdoptionSection from "@/components/organization-identity/DeveloperAdoptionSection";
import EnterpriseStructuresSection from "@/components/organization-identity/EnterpriseStructuresSection";
import FourObjectsSection from "@/components/organization-identity/FourObjectsSection";
import IntegrationDesignSection from "@/components/organization-identity/IntegrationDesignSection";
import OrgCtaSection from "@/components/organization-identity/OrgCtaSection";
import OrgFaqSection from "@/components/organization-identity/OrgFaqSection";
import OrgHeroSection from "@/components/organization-identity/OrgHeroSection";
import RepresentationSection from "@/components/organization-identity/RepresentationSection";
import UseCasesSection from "@/components/organization-identity/UseCasesSection";
import VerificationSection from "@/components/organization-identity/VerificationSection";
import WhatIsOrgIdentitySection from "@/components/organization-identity/WhatIsOrgIdentitySection";

export const metadata: Metadata = {
  title: "Organization Identity | Zoiko iD",
  description:
    "Establish a verifiable organization identity: verified attributes, explicit representation, and bounded, auditable authority across your enterprise.",
};

export default function OrganizationIdentityPage() {
  return (
    <>
      <OrgHeroSection />
      <SectionDivider />
      <WhatIsOrgIdentitySection />
      <SectionDivider />
      <FourObjectsSection />
      <SectionDivider />
      <VerificationSection />
      <SectionDivider />
      <RepresentationSection />
      <SectionDivider />
      <AuthorityGraphSection />
      <SectionDivider />
      <EnterpriseStructuresSection />
      <SectionDivider />
      <UseCasesSection />
      <SectionDivider />
      <IntegrationDesignSection />
      <SectionDivider />
      <DeveloperAdoptionSection />
      <SectionDivider />
      <OrgFaqSection />
      <OrgCtaSection />
    </>
  );
}
