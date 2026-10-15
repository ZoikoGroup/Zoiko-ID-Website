import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import ApisInterfacesSection from "@/components/overview/ApisInterfacesSection";
import EventsWebhooksSection from "@/components/overview/EventsWebhooksSection";
import EvidenceObservabilitySection from "@/components/overview/EvidenceObservabilitySection";
import FailureLifecycleSection from "@/components/overview/FailureLifecycleSection";
import IntegrationGoalsSection from "@/components/overview/IntegrationGoalsSection";
import OverlayArchitectureSection from "@/components/overview/OverlayArchitectureSection";
import OverviewCtaSection from "@/components/overview/OverviewCtaSection";
import OverviewFaqSection from "@/components/overview/OverviewFaqSection";
import OverviewHeroSection from "@/components/overview/OverviewHeroSection";
import OverviewQuickstartsSection from "@/components/overview/OverviewQuickstartsSection";
import SandboxEvaluationSection from "@/components/overview/SandboxEvaluationSection";
import SdksToolchainSection from "@/components/overview/SdksToolchainSection";
import SecurityPrivacySection from "@/components/overview/SecurityPrivacySection";
import StandardsProtocolsSection from "@/components/overview/StandardsProtocolsSection";
import TrustFlowSection from "@/components/overview/TrustFlowSection";
import WhatIsZoikoIdSection from "@/components/overview/WhatIsZoikoIdSection";

export const metadata: Metadata = {
  title: "Developer Overview | Zoiko iD Developer Documentation",
  description:
    "Explore how identity, bounded authority, policy decisions, continuous trust and evidence connect across existing enterprise systems. Choose the integration path that fits your architecture.",
};

export default function OverviewPage() {
  return (
    <>
      {/* 1. Hero */}
      <OverviewHeroSection />
      <SectionDivider />

      {/* 2. Direct Answer: What is Zoiko ID? */}
      <WhatIsZoikoIdSection />
      <SectionDivider />

      {/* 3. Integration Goals */}
      <IntegrationGoalsSection />
      <SectionDivider />

      {/* 4. Trust Flow */}
      <TrustFlowSection />
      <SectionDivider />

      {/* 5. Overlay Architecture */}
      <OverlayArchitectureSection />
      <SectionDivider />

      {/* 6. Standards & Protocols */}
      <StandardsProtocolsSection />
      <SectionDivider />

      {/* 7. APIs & Interfaces */}
      <ApisInterfacesSection />
      <SectionDivider />

      {/* 8. Quickstarts */}
      <OverviewQuickstartsSection />
      <SectionDivider />

      {/* 9. Events & Webhooks */}
      <EventsWebhooksSection />
      <SectionDivider />

      {/* 10. SDKs & Toolchain */}
      <SdksToolchainSection />

      {/* 11. Sandbox & Evaluation */}
      <SandboxEvaluationSection />
      <SectionDivider />

      {/* 12. Security & Privacy */}
      <SecurityPrivacySection />
      <SectionDivider />

      {/* 13. Evidence & Observability */}
      <EvidenceObservabilitySection />
      <SectionDivider />

      {/* 14. Failure Modes & Lifecycle */}
      <FailureLifecycleSection />

      {/* 15. FAQ */}
      <OverviewFaqSection />

      {/* 16. Final CTA */}
      <OverviewCtaSection />
    </>
  );
}
