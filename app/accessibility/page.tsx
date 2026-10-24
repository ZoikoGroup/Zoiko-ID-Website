import type { Metadata } from "next";

import AccessibilityHeroSection from "@/components/accessibility/AccessibilityHeroSection";
import AccessibleSiteShellSection from "@/components/accessibility/AccessibleSiteShellSection";
import DesignApproachSection from "@/components/accessibility/DesignApproachSection";
import StandardsVerificationSection from "@/components/accessibility/StandardsVerificationSection";
import PracticalGuidanceSection from "@/components/accessibility/PracticalGuidanceSection";
import SurfacesStatusSection from "@/components/accessibility/SurfacesStatusSection";
import KnownLimitationsSection from "@/components/accessibility/KnownLimitationsSection";
import SupportRoutingSection from "@/components/accessibility/SupportRoutingSection";
import BarrierReportSection from "@/components/accessibility/BarrierReportSection";
import ConfirmationUpdatesSection from "@/components/accessibility/ConfirmationUpdatesSection";
import ReleaseGatesSection from "@/components/accessibility/ReleaseGatesSection";
import AccessibilityFaqSection from "@/components/accessibility/AccessibilityFaqSection";
import AccessibilityCtaSection from "@/components/accessibility/AccessibilityCtaSection";

export const metadata: Metadata = {
  title: "Accessibility | Zoiko iD",
  description:
    "We aim to make information and product experiences usable for people with different accessibility needs. Explore Zoiko iD accessibility commitments and site shell standards.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* DESKTOP VERSION (hidden sm:block) */}
      <div className="hidden sm:block">
        <AccessibilityHeroSection view="desktop" />
        <AccessibleSiteShellSection view="desktop" />
        <DesignApproachSection view="desktop" />
        <StandardsVerificationSection view="desktop" />
        <PracticalGuidanceSection view="desktop" />
        <SurfacesStatusSection view="desktop" />
        <KnownLimitationsSection view="desktop" />
        <SupportRoutingSection view="desktop" />
        <BarrierReportSection view="desktop" />
        <ConfirmationUpdatesSection view="desktop" />
        <ReleaseGatesSection view="desktop" />
        <AccessibilityFaqSection view="desktop" />
        <AccessibilityCtaSection view="desktop" />
      </div>

      {/* MOBILE VERSION (sm:hidden) */}
      <div className="sm:hidden">
        <AccessibleSiteShellSection view="mobile" />
        <AccessibilityHeroSection view="mobile" />
        <DesignApproachSection view="mobile" />
        <StandardsVerificationSection view="mobile" />
        <PracticalGuidanceSection view="mobile" />
        <SurfacesStatusSection view="mobile" />
        <KnownLimitationsSection view="mobile" />
        <SupportRoutingSection view="mobile" />
        <BarrierReportSection view="mobile" />
        <ConfirmationUpdatesSection view="mobile" />
        <ReleaseGatesSection view="mobile" />
        <AccessibilityFaqSection view="mobile" />
        <AccessibilityCtaSection view="mobile" />
      </div>
    </main>
  );
}
