import type { Metadata } from "next";

import {
  ExpertHero,
  DiscussTopicsSection,
  ImageTextSection,
  ClearPathSection,
  ReplyDetailsSection,
  MarketingConsentSection,
  ExploreDocsBanner,
  SecurityPrivacySection,
  OutcomesTableSection,
  PublicationGatesSection,
  ExpertCta,
} from "@/components/talk-to-an-expert";
import DocsFaq, { type FaqItem } from "@/components/docs/DocsFaq";

export const metadata: Metadata = {
  title: "Talk to an Expert | Zoiko iD",
  description:
    "Discuss identity, bounded authority, developer integration and governance with the Zoiko iD team.",
};

const faqs: FaqItem[] = [
  {
    question: "Will submitting book a meeting?",
    answer:
      "No. Sending an enquiry routes it to the approved owner for its topic. No meeting is booked automatically, and none is promised on this page.",
  },
  {
    question: "Do I have to answer every question?",
    answer:
      "No. Only your name, business email and organization are required. Your topic, role, enquiry details and any additional context are optional.",
  },
  {
    question: "How soon will someone reply?",
    answer:
      "No reply time is promised. You see confirmation only once the server acknowledges receipt, and the enquiry then goes to the team that owns its topic.",
  },
  {
    question: "Can I send documents?",
    answer:
      "Not through this form. Please do not include secrets, credentials, identity documents or production data. If documents are needed, the team will agree an approved route with you.",
  },
];

export default function TalkToAnExpertPage() {
  return (
    <main>
      <ExpertHero />
      <DiscussTopicsSection />
      <ImageTextSection
        id="context"
        imageSide="left"
        title="Optional context, shown only when you need it"
        description="Additional questions about your organization appear only if you choose to add them. They help us prepare a useful conversation and are never required to send an enquiry."
        image={{ src: "/talk-to-an-expert/Professional portrait.png", alt: "Two colleagues reviewing a document together" }}
      />
      <ClearPathSection />
      <ReplyDetailsSection />
      <MarketingConsentSection />
      <ExploreDocsBanner />
      <SecurityPrivacySection />
      <OutcomesTableSection />
      <ImageTextSection
        id="spam-controls"
        title="Spam controls and minimal data"
        description="Requests are rate-limited on the server, protected against automated abuse, and sanitized before they are stored. Analytics record only that a page was viewed, never the text of your enquiry."
        image={{ src: "/talk-to-an-expert/Dashboard on a screen.png", alt: "Person reviewing a spreadsheet at a desk" }}
      />
      <DocsFaq faqs={faqs} idPrefix="expert-faq" />
      <PublicationGatesSection />
      <ExpertCta />
    </main>
  );
}
