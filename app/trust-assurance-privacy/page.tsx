import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import PrivacyHeroSection from "@/components/trust-assurance-privacy/PrivacyHeroSection";
import PrivacyPrinciplesSection from "@/components/trust-assurance-privacy/PrivacyPrinciplesSection";
import PrivacyFlowSection from "@/components/trust-assurance-privacy/PrivacyFlowSection";
import PrivacyActorsSection from "@/components/trust-assurance-privacy/PrivacyActorsSection";
import PrivacySeparationSection from "@/components/trust-assurance-privacy/PrivacySeparationSection";
import PrivacyControlsSection from "@/components/trust-assurance-privacy/PrivacyControlsSection";
import PrivacyLifecycleSection from "@/components/trust-assurance-privacy/PrivacyLifecycleSection";
import PrivacyProcurementSection from "@/components/trust-assurance-privacy/PrivacyProcurementSection";
import PrivacyIntegrationSection from "@/components/trust-assurance-privacy/PrivacyIntegrationSection";
import PrivacyRightsRoutesSection from "@/components/trust-assurance-privacy/PrivacyRightsRoutesSection";
import PrivacyRegionSection from "@/components/trust-assurance-privacy/PrivacyRegionSection";
import PrivacyEnquirySection from "@/components/trust-assurance-privacy/PrivacyEnquirySection";
import PrivacyFaqSection from "@/components/trust-assurance-privacy/PrivacyFaqSection";
import PrivacyCtaSection from "@/components/trust-assurance-privacy/PrivacyCtaSection";

export const metadata: Metadata = {
  title: "Trust & Assurance: Privacy | Zoiko iD",
  description:
    "Privacy boundaries for identity and delegated authority. Zoiko iD discloses only minimum claims with governed provenance across the identity and authority lifecycle.",
};

export default function TrustAssurancePrivacyPage() {
  return (
    <>
      {/* 1. AU-01: HERO */}
      <PrivacyHeroSection />
      <SectionDivider />

      {/* 2. PRV-04: PRINCIPLES */}
      <PrivacyPrinciplesSection />
      <SectionDivider />

      {/* 3. PRV-03: FLOW */}
      <PrivacyFlowSection />

      {/* 4. CL-02: ACTORS SUMMARY */}
      <PrivacyActorsSection />
      <SectionDivider />

      {/* 5. PRV-06: SEPARATION */}
      <PrivacySeparationSection />
      <SectionDivider />

      {/* 6. PRV-09: CONTROLS */}
      <PrivacyControlsSection />
      <SectionDivider />

      {/* 7. PRV-07: LIFECYCLE */}
      <PrivacyLifecycleSection />
      <SectionDivider />

      {/* 8. PRV-12: PROCUREMENT */}
      <PrivacyProcurementSection />
      <SectionDivider />

      {/* 9. PRV-08: INTEGRATION */}
      <PrivacyIntegrationSection />
      <SectionDivider />

      {/* 10. PRV-10: RIGHTS ROUTES */}
      <PrivacyRightsRoutesSection />

      {/* 11. PRV-11: REGION */}
      <div id="architecture-section">
        <PrivacyRegionSection />
      </div>
      <SectionDivider />

      {/* 12. PRV-13: ENQUIRY */}
      <PrivacyEnquirySection />
      <SectionDivider />

      {/* 13. 18. FAQ SECTION */}
      <PrivacyFaqSection />

      {/* 14. 20. FINAL CTA */}
      <PrivacyCtaSection />
    </>
  );
}
