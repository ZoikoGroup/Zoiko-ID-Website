import type { Metadata } from "next";
import { Clock, Code, Terminal, TriangleAlert } from "lucide-react";

import {
  DocsHero,
  PrerequisitesSection,
  BrowseByBuildingSection,
  StatusCardsSection,
  GuidesExplainSection,
  ReviewedSamplesSection,
  SandboxSection,
  FeedbackSection,
  ExpertSection,
  DocsFaq,
  DocsCta,
} from "@/components/docs";

export const metadata: Metadata = {
  title: "Developer Documentation | Zoiko iD",
  description:
    "Explore quickstarts, reference material and integration guidance for Zoiko iD. Each resource shows its verified availability, so you know what is live today.",
};

export default function DocsPage() {
  return (
    <main>
      <DocsHero />
      <PrerequisitesSection />
      <BrowseByBuildingSection />
      <StatusCardsSection
        id="api-sdk"
        tone="grey"
        title="API reference and SDK availability"
        description="The API reference and SDK list appear only once they are published and confirmed. Until then, we show their status rather than an empty or invented list."
        cards={[
          {
            title: "API Reference",
            body: "Authoritative interface reference, published when it is available.",
            status: "Not yet published",
            icon: Code,
          },
          {
            title: "SDKs",
            body: "Language packages appear only after their releases are confirmed. No install commands are shown here.",
            status: "No SDK releases confirmed",
            icon: Terminal,
          },
        ]}
      />
      <GuidesExplainSection />
      <ReviewedSamplesSection />
      <SandboxSection />
      <StatusCardsSection
        id="version"
        tone="grey"
        title="Which version you are reading"
        description="Each page shows the document version and its product compatibility. No current version is assumed, and deprecations appear only once they are validated."
        cards={[
          {
            title: "Document version",
            body: "Shown with each page once confirmed.",
            status: "Version not yet confirmed",
            icon: Clock,
          },
          {
            title: "Deprecations and migrations",
            body: "Validated notices appear here. Stable links are preserved.",
            status: "No validated notices",
            variant: "neutral",
            icon: TriangleAlert,
          },
        ]}
      />
      <FeedbackSection />
      <ExpertSection />
      <DocsFaq />
      <DocsCta />
    </main>
  );
}
