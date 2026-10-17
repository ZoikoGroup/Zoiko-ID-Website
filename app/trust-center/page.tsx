import type { Metadata } from "next";

import {
  TrustCenterHero,
  ThreeDefinitionsSection,
  TrustTopicsSection,
  ArchitectureCategoriesSection,
  PrivacySummarySection,
  FiveTermsSection,
  PublicResourcesSection,
  AssetPageSection,
  RequestAssuranceSection,
  OverlayFirstSection,
  OperationalTopicsSection,
  TrustCenterFaq,
  TrustCenterCta,
} from "@/components/trust-center";

export const metadata: Metadata = {
  title: "Trust Center | Zoiko iD",
  description:
    "Review approved information about Zoiko iD identity security, delegated authority, privacy, governance and assurance, and request additional documentation.",
};

export default function TrustCenterPage() {
  return (
    <main>
      <TrustCenterHero />
      <ThreeDefinitionsSection />
      <TrustTopicsSection />
      <ArchitectureCategoriesSection />
      <PrivacySummarySection />
      <FiveTermsSection />
      <PublicResourcesSection />
      <AssetPageSection />
      <RequestAssuranceSection />
      <OverlayFirstSection />
      <OperationalTopicsSection />
      <TrustCenterFaq />
      <TrustCenterCta />
    </main>
  );
}
