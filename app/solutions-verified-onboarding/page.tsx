import type { Metadata } from "next";
import HeroSection from "@/components/solutions-verified-onboarding/HeroSection";
import WhatIsVerifiedOnboardingSection from "@/components/solutions-verified-onboarding/WhatIsVerifiedOnboardingSection";
import VerificationInsufficientSection from "@/components/solutions-verified-onboarding/VerificationInsufficientSection";
import DistinctActorsSection from "@/components/solutions-verified-onboarding/DistinctActorsSection";
import VerificationJourneySection from "@/components/solutions-verified-onboarding/VerificationJourneySection";
import VerificationOutcomesSection from "@/components/solutions-verified-onboarding/VerificationOutcomesSection";
import ProofInputsSection from "@/components/solutions-verified-onboarding/ProofInputsSection";
import AuthorityBoundarySection from "@/components/solutions-verified-onboarding/AuthorityBoundarySection";
import HumanReviewSection from "@/components/solutions-verified-onboarding/HumanReviewSection";
import ArchitectureSection from "@/components/solutions-verified-onboarding/ArchitectureSection";
import LifecycleSection from "@/components/solutions-verified-onboarding/LifecycleSection";
import PrivacySection from "@/components/solutions-verified-onboarding/PrivacySection";
import UseCasesSection from "@/components/solutions-verified-onboarding/UseCasesSection";
import FaqSection from "@/components/solutions-verified-onboarding/FaqSection";
import CtaBannerSection from "@/components/solutions-verified-onboarding/CtaBannerSection";

export const metadata: Metadata = {
  title: "Verified Onboarding | Zoiko iD",
  description:
    "Onboarding built on explainable trust. Verified claims, bounded access, reviewable decisions. Verification is a contextual input to authorization—never a substitute for it.",
};

export default function VerifiedOnboardingPage() {
  return (
    <>
      <HeroSection />
      <WhatIsVerifiedOnboardingSection />
      <VerificationInsufficientSection />
      <DistinctActorsSection />
      <VerificationJourneySection />
      <div className="flex flex-col-reverse lg:flex-col">
        <VerificationOutcomesSection />
        <ProofInputsSection />
      </div>
      <AuthorityBoundarySection />
      <HumanReviewSection />
      <ArchitectureSection />
      <LifecycleSection />
      <PrivacySection />
      <UseCasesSection />
      <FaqSection />
      <CtaBannerSection />
    </>
  );
}
