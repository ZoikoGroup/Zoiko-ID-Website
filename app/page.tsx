import ActorsSection from "@/components/home/ActorsSection";
import ComplianceSection from "@/components/home/ComplianceSection";
import CoreCapabilitiesSection from "@/components/home/CoreCapabilitiesSection";
import DeveloperFirstSection from "@/components/home/DeveloperFirstSection";
import EnterpriseGradeSection from "@/components/home/EnterpriseGradeSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import HeroSection from "@/components/home/HeroSection";
import ImplementationWorkflowSection from "@/components/home/ImplementationWorkflowSection";
import IndustrySolutionsSection from "@/components/home/IndustrySolutionsSection";
import IntegrationsSection from "@/components/home/IntegrationsSection";
import PerformanceSection from "@/components/home/PerformanceSection";
import PlatformCapabilitiesSection from "@/components/home/PlatformCapabilitiesSection";
import PricingSection from "@/components/home/PricingSection";
import RealWorldImpactSection from "@/components/home/RealWorldImpactSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import TrustedAtScaleSection from "@/components/home/TrustedAtScaleSection";
import TrustLifecycleSection from "@/components/home/TrustLifecycleSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";

// The root layout already wraps pages in <main>
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <EnterpriseGradeSection />
      <PlatformCapabilitiesSection />
      <CoreCapabilitiesSection />
      <TrustedAtScaleSection />
      <TrustLifecycleSection />
      <RealWorldImpactSection />
      <ActorsSection />
      <DeveloperFirstSection />
      <ImplementationWorkflowSection />
      <IntegrationsSection />
      <ComplianceSection />
      <PerformanceSection />
      <IndustrySolutionsSection />
      <PricingSection />
      <ResourcesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
