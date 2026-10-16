import type { Metadata } from "next";

import ApiReferenceDirectAnswerSection from "@/components/api-reference/ApiReferenceDirectAnswerSection";
import ApiReferenceFamiliesSection from "@/components/api-reference/ApiReferenceFamiliesSection";
import ApiReferenceFinalCtaSection from "@/components/api-reference/ApiReferenceFinalCtaSection";
import ApiReferenceHeroSection from "@/components/api-reference/ApiReferenceHeroSection";
import ApiReferenceRateLimitsSection from "@/components/api-reference/ApiReferenceRateLimitsSection";
import ApiReferenceSearchFilterSection from "@/components/api-reference/ApiReferenceSearchFilterSection";
import ApiReferenceSecuritySection from "@/components/api-reference/ApiReferenceSecuritySection";
import ApiReferenceVersioningSection from "@/components/api-reference/ApiReferenceVersioningSection";
export const metadata: Metadata = {
  title: "API Reference | Zoiko iD Developer Documentation",
  description:
    "Explore the complete Zoiko iD API. Find every documented request, response, authentication, and error contract for the identity, authority, evidence and policy APIs.",
};

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, rgba(226, 232, 240, 1) 50%, rgba(226, 232, 240, 0) 100%)",
      }}
    />
  );
}

export default function ApiReferencePage() {
  return (
    <>
      <ApiReferenceHeroSection />
      <Divider />
      <ApiReferenceDirectAnswerSection />
      <Divider />
      <ApiReferenceSearchFilterSection />
      <Divider />
      <ApiReferenceFamiliesSection />
      <Divider />
      <ApiReferenceRateLimitsSection />
      <ApiReferenceSecuritySection />
      <Divider />
      <ApiReferenceVersioningSection />
      <Divider />
      <ApiReferenceFinalCtaSection />
    </>
  );
}
