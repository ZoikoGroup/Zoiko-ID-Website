import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import BeforeYouStartSection from "@/components/quickstarts/BeforeYouStartSection";
import CommonCodePatternsSection from "@/components/quickstarts/CommonCodePatternsSection";
import ErrorScenariosSection from "@/components/quickstarts/ErrorScenariosSection";
import QuickstartCardsSection from "@/components/quickstarts/QuickstartCardsSection";
import QuickstartFilterSection from "@/components/quickstarts/QuickstartFilterSection";
import QuickstartsCtaSection from "@/components/quickstarts/QuickstartsCtaSection";
import QuickstartsFaqSection from "@/components/quickstarts/QuickstartsFaqSection";
import QuickstartsHeroSection from "@/components/quickstarts/QuickstartsHeroSection";
import StatusLegendSection from "@/components/quickstarts/StatusLegendSection";

export const metadata: Metadata = {
  title: "Quickstarts | Zoiko iD Developer Documentation",
  description:
    "From zero to first integration in 5–30 minutes. Choose your integration goal, follow verified code samples, and connect your first identity, authority, or evidence layer.",
};

export default function QuickstartsPage() {
  return (
    <>
      <QuickstartsHeroSection />
      <SectionDivider />
      <QuickstartFilterSection />
      <SectionDivider />
      <QuickstartCardsSection />
      <SectionDivider />
      <CommonCodePatternsSection />
      <SectionDivider />
      <StatusLegendSection />
      <SectionDivider />
      <BeforeYouStartSection />
      <SectionDivider />
      <ErrorScenariosSection />
      <SectionDivider />
      <QuickstartsFaqSection />
      <SectionDivider />
      <QuickstartsCtaSection />
    </>
  );
}
