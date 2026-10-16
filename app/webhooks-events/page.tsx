import type { Metadata } from "next";

import { SectionDivider } from "@/components/home/shared";
import WebhooksAudienceSection from "@/components/webhooks-events/WebhooksAudienceSection";
import WebhooksCategoriesSection from "@/components/webhooks-events/WebhooksCategoriesSection";
import WebhooksConsumerStepsSection from "@/components/webhooks-events/WebhooksConsumerStepsSection";
import WebhooksDeliverySection from "@/components/webhooks-events/WebhooksDeliverySection";
import WebhooksDirectAnswerSection from "@/components/webhooks-events/WebhooksDirectAnswerSection";
import WebhooksEnquirySection from "@/components/webhooks-events/WebhooksEnquirySection";
import WebhooksFaqSection from "@/components/webhooks-events/WebhooksFaqSection";
import WebhooksGlossarySection from "@/components/webhooks-events/WebhooksGlossarySection";
import WebhooksHeroSection from "@/components/webhooks-events/WebhooksHeroSection";
import WebhooksImageStripSection from "@/components/webhooks-events/WebhooksImageStripSection";
import WebhooksLifecycleSection from "@/components/webhooks-events/WebhooksLifecycleSection";
import WebhooksPathwaysSection from "@/components/webhooks-events/WebhooksPathwaysSection";
import WebhooksReadinessGatesSection from "@/components/webhooks-events/WebhooksReadinessGatesSection";
import WebhooksSchemaExplorerSection from "@/components/webhooks-events/WebhooksSchemaExplorerSection";
import WebhooksSecuritySection from "@/components/webhooks-events/WebhooksSecuritySection";
import WebhooksSubscriptionsSection from "@/components/webhooks-events/WebhooksSubscriptionsSection";
import WebhooksTestingEvidenceSection from "@/components/webhooks-events/WebhooksTestingEvidenceSection";

export const metadata: Metadata = {
  title: "Webhooks & Events | Zoiko iD",
  description:
    "Respond to identity, delegated authority, policy and trust changes with governed events and notifications across your infrastructure.",
};

export default function WebhooksEventsPage() {
  return (
    <>
      {/* 1. Hero */}
      <WebhooksHeroSection />

      {/* 2. Image Strip */}
      <WebhooksImageStripSection />

      {/* 3. Direct Answer */}
      <WebhooksDirectAnswerSection />
      <SectionDivider />

      {/* 4. Audience: Four roles, four jobs */}
      <WebhooksAudienceSection />
      <SectionDivider />

      {/* 5. Conceptual Categories */}
      <WebhooksCategoriesSection />
      <SectionDivider />

      {/* 6. Lifecycle: Who does what */}
      <WebhooksLifecycleSection />
      <SectionDivider />

      {/* 7. Consumer Steps */}
      <WebhooksConsumerStepsSection />
      <SectionDivider />

      {/* 8. Readiness Gates */}
      <WebhooksReadinessGatesSection />
      <SectionDivider />

      {/* 9. Delivery: Documented slots */}
      <WebhooksDeliverySection />
      <SectionDivider />

      {/* 10. Security: Governed technical boundary */}
      <WebhooksSecuritySection />
      <SectionDivider />

      {/* 11. Subscriptions Scoping */}
      <WebhooksSubscriptionsSection />
      <SectionDivider />

      {/* 12. Schema Explorer */}
      <WebhooksSchemaExplorerSection />
      <SectionDivider />

      {/* 13. Testing & Evidence Distinction */}
      <WebhooksTestingEvidenceSection />
      <SectionDivider />

      {/* 14. Pathways / Scenarios */}
      <WebhooksPathwaysSection />
      <SectionDivider />

      {/* 15. Glossary */}
      <WebhooksGlossarySection />
      <SectionDivider />

      {/* 16. Enquiry: Talk to an expert */}
      <WebhooksEnquirySection />

      {/* 17. FAQ */}
      <WebhooksFaqSection />
    </>
  );
}
