import type { Metadata } from "next";

import ApiCtaSection from "@/components/apis-integrations/ApiCtaSection";
import ApiFaqSection from "@/components/apis-integrations/ApiFaqSection";
import ApiHeroSection from "@/components/apis-integrations/ApiHeroSection";
import CredentialsSection from "@/components/apis-integrations/CredentialsSection";
import DelegatedAuthoritySection from "@/components/apis-integrations/DelegatedAuthoritySection";
import DeveloperPathsSection from "@/components/apis-integrations/DeveloperPathsSection";
import EventsSection from "@/components/apis-integrations/EventsSection";
import FederationSection from "@/components/apis-integrations/FederationSection";
import IntegrationPathSection from "@/components/apis-integrations/IntegrationPathSection";
import OverlayArchitectureSection from "@/components/apis-integrations/OverlayArchitectureSection";
import SecurityPrivacySection from "@/components/apis-integrations/SecurityPrivacySection";
import WhatCanYouIntegrateSection from "@/components/apis-integrations/WhatCanYouIntegrateSection";
import { SectionDivider } from "@/components/home/shared";

export const metadata: Metadata = {
  title: "APIs & Integrations | Zoiko iD",
  description:
    "Connect identity, authority, and evidence to the systems you already use with standards-based federation, APIs, SDKs, events and webhooks.",
};

export default function ApisIntegrationsPage() {
  return (
    <>
      <ApiHeroSection />
      <SectionDivider />
      <WhatCanYouIntegrateSection />
      <SectionDivider />
      <DelegatedAuthoritySection />
      <SectionDivider />
      <OverlayArchitectureSection />
      <SectionDivider />
      <FederationSection />
      <IntegrationPathSection />
      <CredentialsSection />
      <EventsSection />
      <DeveloperPathsSection />
      <SecurityPrivacySection />
      <ApiFaqSection />
      <ApiCtaSection />
    </>
  );
}
