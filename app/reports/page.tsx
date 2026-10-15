import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import ReportsCtaSection from "@/components/reports/ReportsCtaSection";
import ReportsDistinctionsSection from "@/components/reports/ReportsDistinctionsSection";
import ReportsEvidenceBoundariesSection from "@/components/reports/ReportsEvidenceBoundariesSection";
import ReportsFaqSection from "@/components/reports/ReportsFaqSection";
import ReportsHeroSection from "@/components/reports/ReportsHeroSection";
import ReportsRegistrySection from "@/components/reports/ReportsRegistrySection";
import ReportsRequestAccessSection from "@/components/reports/ReportsRequestAccessSection";
import ReportsScopeCurrencySection from "@/components/reports/ReportsScopeCurrencySection";
import ReportsWorkflowSection from "@/components/reports/ReportsWorkflowSection";

export const metadata: Metadata = {
  title: "Audit Reports & Assurance Evidence | Zoiko iD",
  description:
    "Understand the assurance evidence behind the controls. Clear scope, currency and access rules. See which reports are available and request access to restricted documents.",
};

export default function ReportsPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <ReportsHeroSection />
      <SectionDivider />

      {/* 2. Assurance Artifact Distinctions */}
      <ReportsDistinctionsSection />
      <SectionDivider />

      {/* 3. Available Report Registry */}
      <ReportsRegistrySection />
      <SectionDivider />

      {/* 4. Scope, Period & Currency */}
      <ReportsScopeCurrencySection />
      <SectionDivider />

      {/* 5. Assurance Workflow */}
      <ReportsWorkflowSection />
      <SectionDivider />

      {/* 6. Request Restricted Report Access Form */}
      <ReportsRequestAccessSection />
      <SectionDivider />

      {/* 7. Evidence & Boundaries */}
      <ReportsEvidenceBoundariesSection />
      <SectionDivider />

      {/* 8. Frequently Asked Questions */}
      <ReportsFaqSection />

      {/* 9. Final Call to Action */}
      <ReportsCtaSection />
    </>
  );
}
