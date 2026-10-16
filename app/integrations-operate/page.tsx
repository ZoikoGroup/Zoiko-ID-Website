import type { Metadata } from "next";

import IntegrationsOperateAdoptionSection from "@/components/integrations-operate/IntegrationsOperateAdoptionSection";
import IntegrationsOperateAppAccessSection from "@/components/integrations-operate/IntegrationsOperateAppAccessSection";
import IntegrationsOperateArchitectureSection from "@/components/integrations-operate/IntegrationsOperateArchitectureSection";
import IntegrationsOperateB2bSection from "@/components/integrations-operate/IntegrationsOperateB2bSection";
import IntegrationsOperateCredentialsSection from "@/components/integrations-operate/IntegrationsOperateCredentialsSection";
import IntegrationsOperateDevInterfacesSection from "@/components/integrations-operate/IntegrationsOperateDevInterfacesSection";
import IntegrationsOperateDirectAnswerSection from "@/components/integrations-operate/IntegrationsOperateDirectAnswerSection";
import IntegrationsOperateDirectorySection from "@/components/integrations-operate/IntegrationsOperateDirectorySection";
import IntegrationsOperateFaqSection from "@/components/integrations-operate/IntegrationsOperateFaqSection";
import IntegrationsOperateFederationSection from "@/components/integrations-operate/IntegrationsOperateFederationSection";
import IntegrationsOperateFinalCtaSection from "@/components/integrations-operate/IntegrationsOperateFinalCtaSection";
import IntegrationsOperateHeroSection from "@/components/integrations-operate/IntegrationsOperateHeroSection";
import IntegrationsOperateImageStripSection from "@/components/integrations-operate/IntegrationsOperateImageStripSection";
import IntegrationsOperateMachineAiSection from "@/components/integrations-operate/IntegrationsOperateMachineAiSection";
import IntegrationsOperatePathwayFinderSection from "@/components/integrations-operate/IntegrationsOperatePathwayFinderSection";
import IntegrationsOperateSecuritySection from "@/components/integrations-operate/IntegrationsOperateSecuritySection";
import IntegrationsOperateSupportSection from "@/components/integrations-operate/IntegrationsOperateSupportSection";

export const metadata: Metadata = {
  title: "Integrations & Operate | Zoiko iD",
  description:
    "Explore how Zoiko iD is designed to work alongside enterprise identity providers, applications, and developer platforms—connecting authentication signals, scoped authority decisions, ongoing trust, and reviewable evidence.",
};

export default function IntegrationsOperatePage() {
  return (
    <>
      <IntegrationsOperateHeroSection />
      <IntegrationsOperateImageStripSection />
      <IntegrationsOperateDirectAnswerSection />
      <IntegrationsOperatePathwayFinderSection />
      <IntegrationsOperateArchitectureSection />
      <IntegrationsOperateFederationSection />
      <IntegrationsOperateAppAccessSection />
      <IntegrationsOperateB2bSection />
      <IntegrationsOperateMachineAiSection />
      <IntegrationsOperateCredentialsSection />
      <IntegrationsOperateDevInterfacesSection />
      <IntegrationsOperateDirectorySection />
      <IntegrationsOperateSecuritySection />
      <IntegrationsOperateAdoptionSection />
      <IntegrationsOperateSupportSection />
      <IntegrationsOperateFaqSection />
      <IntegrationsOperateFinalCtaSection />
    </>
  );
}
