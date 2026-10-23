import type { Metadata } from "next";

import HelpSupportHeroSection from "@/components/help-support/HelpSupportHeroSection";
import TwoQuestionsPrimaryRouteSection from "@/components/help-support/TwoQuestionsPrimaryRouteSection";
import HelpTopicsGridSection from "@/components/help-support/HelpTopicsGridSection";
import IssueOwnerTableSection from "@/components/help-support/IssueOwnerTableSection";
import SelfServiceBuildersSection from "@/components/help-support/SelfServiceBuildersSection";
import ConfirmationPersistenceSection from "@/components/help-support/ConfirmationPersistenceSection";
import RecoveryPathsSection from "@/components/help-support/RecoveryPathsSection";
import RequestFormRulesSection from "@/components/help-support/RequestFormRulesSection";
import AccountRecoveryMobileSection from "@/components/help-support/AccountRecoveryMobileSection";
import HelpAccessibilitySection from "@/components/help-support/HelpAccessibilitySection";
import HelpFaqSection from "@/components/help-support/HelpFaqSection";
import HelpCtaSection from "@/components/help-support/HelpCtaSection";

export const metadata: Metadata = {
  title: "Help & Support | Zoiko iD",
  description:
    "Find the right help for Zoiko iD. Guidance for accounts, authentication, credentials, delegated access and integrations.",
};

export default function HelpSupportPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* DESKTOP VERSION (hidden sm:block) - EXACT ORIGINAL SEQUENCE UNTOUCHED */}
      <div className="hidden sm:block">
        <HelpSupportHeroSection view="desktop" />
        <TwoQuestionsPrimaryRouteSection view="desktop" />
        <HelpTopicsGridSection view="desktop" />
        <IssueOwnerTableSection view="desktop" />
        <SelfServiceBuildersSection view="desktop" />
        <ConfirmationPersistenceSection view="desktop" />
        <RecoveryPathsSection view="desktop" />
        <RequestFormRulesSection view="desktop" />
        <HelpAccessibilitySection view="desktop" />
        <HelpFaqSection view="desktop" />
        <HelpCtaSection view="desktop" />
      </div>

      {/* MOBILE VERSION (sm:hidden) - EXACT SPECIFIED SEQUENCE */}
      <div className="sm:hidden">
        {/* 1. hero */}
        <HelpSupportHeroSection view="mobile" />

        {/* 2. help topics */}
        <HelpTopicsGridSection view="mobile" />

        {/* 3. guided routing */}
        <TwoQuestionsPrimaryRouteSection view="mobile" />

        {/* 4. documentation */}
        <SelfServiceBuildersSection view="mobile" />

        {/* 5. specialits handoff */}
        <IssueOwnerTableSection view="mobile" />

        {/* 6. request help */}
        <RequestFormRulesSection view="mobile" />

        {/* 7. submission and follow up */}
        <ConfirmationPersistenceSection view="mobile" />

        {/* 8. trouble shoting states */}
        <RecoveryPathsSection view="mobile" />

        {/* 9. account recovery */}
        <AccountRecoveryMobileSection />

        {/* 10. accessiability and privacy support */}
        <HelpAccessibilitySection view="mobile" />

        {/* 11. question */}
        <HelpFaqSection view="mobile" />

        {/* 12. next step */}
        <HelpCtaSection view="mobile" />
      </div>
    </main>
  );
}
