import type { Metadata } from "next";
import {
  CookieSettingsHeroSection,
  CookieSettingsChoicesSection,
  CookieSettingsEquallyProminentSection,
  CookieSettingsPurposesSection,
  CookieSettingsRegistryDetailsSection,
  CookieSettingsChangeMindSection,
  CookieSettingsRegionalGuidanceSection,
  CookieSettingsReportedHonestlySection,
  CookieSettingsConfirmationCopySection,
  CookieSettingsRelatedNoticesSection,
  CookieSettingsShortAnswersSection,
  CookieSettingsChoicesLoggedSection,
  CookieSettingsAccessibilitySection,
  CookieSettingsPublicationBlockedSection,
  CookieSettingsApprovedRouteSection,
} from "@/components/legal-privacy-cookie-settings";

export const metadata: Metadata = {
  title: "Cookie Settings | Zoiko iD",
  description:
    "Choose which optional technologies Zoiko iD may use. You can review and change your preferences here.",
};

export default function CookieSettingsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <CookieSettingsHeroSection view="all" />
      <CookieSettingsChoicesSection view="all" />
      <CookieSettingsEquallyProminentSection view="all" />
      <CookieSettingsPurposesSection view="all" />
      <CookieSettingsRegistryDetailsSection view="all" />
      <CookieSettingsChangeMindSection view="all" />
      <CookieSettingsRegionalGuidanceSection view="all" />
      <CookieSettingsReportedHonestlySection view="all" />
      <CookieSettingsConfirmationCopySection view="all" />
      <CookieSettingsRelatedNoticesSection view="all" />
      <CookieSettingsShortAnswersSection view="all" />
      <CookieSettingsChoicesLoggedSection view="all" />
      <CookieSettingsAccessibilitySection view="all" />
      <CookieSettingsPublicationBlockedSection view="all" />
      <CookieSettingsApprovedRouteSection view="all" />
    </main>
  );
}
