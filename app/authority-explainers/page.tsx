import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import AuthorityHeroSection from "@/components/authority-explainers/AuthorityHeroSection";
import AuthorityReadersSection from "@/components/authority-explainers/AuthorityReadersSection";
import AuthorityMisconceptionsSection from "@/components/authority-explainers/AuthorityMisconceptionsSection";
import AuthorityTermsSection from "@/components/authority-explainers/AuthorityTermsSection";
import AuthorityAnatomySection from "@/components/authority-explainers/AuthorityAnatomySection";
import AuthorityLifecycleSection from "@/components/authority-explainers/AuthorityLifecycleSection";
import AuthorityPathsSection from "@/components/authority-explainers/AuthorityPathsSection";
import AuthorityScenariosSection from "@/components/authority-explainers/AuthorityScenariosSection";
import AuthorityDenialSection from "@/components/authority-explainers/AuthorityDenialSection";
import AuthorityContinuousTrustSection from "@/components/authority-explainers/AuthorityContinuousTrustSection";
import AuthorityEvidenceSection from "@/components/authority-explainers/AuthorityEvidenceSection";
import AuthorityScopeSection from "@/components/authority-explainers/AuthorityScopeSection";
import AuthorityGovernanceSection from "@/components/authority-explainers/AuthorityGovernanceSection";
import AuthorityFaqSection from "@/components/authority-explainers/AuthorityFaqSection";
import AuthorityHandoffsSection from "@/components/authority-explainers/AuthorityHandoffsSection";
import AuthorityCtaSection from "@/components/authority-explainers/AuthorityCtaSection";

export const metadata: Metadata = {
  title: "Delegated Authority Explainers | Zoiko iD",
  description:
    "Understand delegated authority across people, organizations and AI agents. Delegated authority describes a bounded permission for one actor to act on behalf of another under defined conditions.",
};

export default function AuthorityExplainersPage() {
  return (
    <>
      {/* 1. CL-01 Hero & Direct Answer */}
      <AuthorityHeroSection />
      <SectionDivider />

      {/* 2. Who it is for: Six readers, six questions */}
      <AuthorityReadersSection />
      <SectionDivider />

      {/* 3. Misconceptions: Four things this explainer does not say */}
      <AuthorityMisconceptionsSection />

      {/* 4. CL-02 Latest Verified Summary: Five terms, five different questions */}
      <AuthorityTermsSection />

      {/* 5. Authority Anatomy: What a bounded delegation must specify */}
      <AuthorityAnatomySection />
      <SectionDivider />

      {/* 6. Lifecycle: How delegated authority begins, changes and ends */}
      <AuthorityLifecycleSection />
      <SectionDivider />

      {/* 7. Paths & Roles: Choose the route that matches your role */}
      <AuthorityPathsSection />
      <SectionDivider />

      {/* 8. Scenarios: Four illustrative cases */}
      <AuthorityScenariosSection />
      <SectionDivider />

      {/* 9. Denial: A request outside its scope is refused */}
      <AuthorityDenialSection />
      <SectionDivider />

      {/* 10. Continuous Trust: Authority can become stale */}
      <AuthorityContinuousTrustSection />
      <SectionDivider />

      {/* 11. Evidence: Explain a decision without collecting more than it needs */}
      <AuthorityEvidenceSection />
      <SectionDivider />

      {/* 12. Out of Scope: Boundaries of the page */}
      <AuthorityScopeSection />
      <SectionDivider />

      {/* 13. Governance: How this explainer stays accurate */}
      <AuthorityGovernanceSection />

      {/* 14. 18. FAQ Section */}
      <AuthorityFaqSection />

      {/* 15. Handoffs: Exact details live in the authoritative sources */}
      <AuthorityHandoffsSection />

      {/* 16. 20. Final CTA */}
      <AuthorityCtaSection />
    </>
  );
}
