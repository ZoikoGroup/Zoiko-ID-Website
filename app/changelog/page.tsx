import type { Metadata } from "next";

import ChangelogHeroSection from "@/components/changelog/ChangelogHeroSection";
import ChangelogMetricRibbonSection from "@/components/changelog/ChangelogMetricRibbonSection";
import ChangelogBreakingChangeSection from "@/components/changelog/ChangelogBreakingChangeSection";
import ChangelogReleaseDetailSection from "@/components/changelog/ChangelogReleaseDetailSection";
import ChangelogLatestSummarySection from "@/components/changelog/ChangelogLatestSummarySection";
import ChangelogDestinationsSection from "@/components/changelog/ChangelogDestinationsSection";
import ChangelogSecurityBoundariesSection from "@/components/changelog/ChangelogSecurityBoundariesSection";
import ChangelogFaqSection from "@/components/changelog/ChangelogFaqSection";
import ChangelogFinalCtaSection from "@/components/changelog/ChangelogFinalCtaSection";

export const metadata: Metadata = {
  title: "Changelog | Zoiko iD",
  description:
    "Explore published Zoiko iD product and developer changes, including affected integration areas, version context, and links to authoritative documentation.",
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-white-solid">
      <ChangelogHeroSection />
      <ChangelogMetricRibbonSection />
      <ChangelogBreakingChangeSection />
      <ChangelogReleaseDetailSection />
      <ChangelogLatestSummarySection />
      <ChangelogDestinationsSection />
      <ChangelogSecurityBoundariesSection />
      <ChangelogFaqSection />
      <ChangelogFinalCtaSection />
    </main>
  );
}
