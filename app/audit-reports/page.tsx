import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import AuditHeroSection from "@/components/audit-reports/AuditHeroSection";
import AuditActorsSection from "@/components/audit-reports/AuditActorsSection";
import AuditPrinciplesSection from "@/components/audit-reports/AuditPrinciplesSection";
import AuditFlowSection from "@/components/audit-reports/AuditFlowSection";
import AuditControlsSection from "@/components/audit-reports/AuditControlsSection";
import AuditRightsRoutesSection from "@/components/audit-reports/AuditRightsRoutesSection";
import AuditRegionSection from "@/components/audit-reports/AuditRegionSection";
import AuditProcurementSection from "@/components/audit-reports/AuditProcurementSection";
import AuditEnquirySection from "@/components/audit-reports/AuditEnquirySection";
import AuditFaqSection from "@/components/audit-reports/AuditFaqSection";
import AuditCtaSection from "@/components/audit-reports/AuditCtaSection";

export const metadata: Metadata = {
  title: "Audit Reports & Privacy Boundaries | Zoiko iD",
  description:
    "Privacy choices govern what is collected, disclosed, accessed and kept as reviewable evidence across the identity and authority lifecycle. Zoiko iD discloses only minimum claims with governed provenance.",
};

export default function AuditReportsPage() {
  return (
    <>
      {/* 1. AU-01 Hero Section */}
      <AuditHeroSection />
      <SectionDivider />

      {/* 2. PRV-05 Actors & Privacy Considerations */}
      <AuditActorsSection />
      <SectionDivider />

      {/* 3. PRV-04 Five Design Principles */}
      <AuditPrinciplesSection />
      <SectionDivider />

      {/* 4. PRV-03 Flow: From Actor to Permitted View */}
      <AuditFlowSection />
      <SectionDivider />

      {/* 5. PRV-09 Controls with Evidence Status */}
      <AuditControlsSection />
      <SectionDivider />

      {/* 6. PRV-10 Rights Routes */}
      <AuditRightsRoutesSection />

      {/* 7. PRV-11 Region & Data Architecture */}
      <div id="architecture-section">
        <AuditRegionSection />
      </div>

      {/* 8. PRV-12 Procurement & Audience Access Level */}
      <AuditProcurementSection />
      <SectionDivider />

      {/* 9. PRV-13 Enquiry Form */}
      <AuditEnquirySection />
      <SectionDivider />

      {/* 10. 18. FAQ Section */}
      <AuditFaqSection />

      {/* 11. 20. Final CTA */}
      <AuditCtaSection />
    </>
  );
}
