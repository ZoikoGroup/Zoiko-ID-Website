import type { Metadata } from "next";
import {
  SecurityContactHero,
  SecurityStatusBox,
  SecurityIntentsSection,
  SecurityRouteMapSection,
  SecurityContextualAssistance,
  SecurityFormNoticeSection,
  SecurityRoutingCardsSection,
  SecurityStatesSection,
  SecurityReceiptTimeline,
  SecurityProcurementSection,
  SecurityPrinciplesSection,
  SecurityContactFaq,
  SecurityFinalCta,
} from "@/components/security-contact";

export const metadata: Metadata = {
  title: "Security Contact | Zoiko iD",
  description:
    "Contact the Zoiko iD security team. Use this page to find the appropriate route for enterprise enquiries, potential security concerns, or trust-related questions.",
};

export default function SecurityContactPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <SecurityContactHero />

      {/* 2. Photo Strip & Status Warning Box */}
      <SecurityStatusBox />

      {/* 3. Six Intents Section */}
      <SecurityIntentsSection />

      {/* 4. One Entry Point, Six Destinations Route Map */}
      <SecurityRouteMapSection />

      {/* 5. Contextual Assistance: Gather Details First */}
      <SecurityContextualAssistance />

      {/* 6. Form Notification & Verified Field Summary */}
      <SecurityFormNoticeSection />

      {/* 7. Routing Destinations & Ownership Cards */}
      <SecurityRoutingCardsSection />

      {/* 8. Six States Matrix */}
      <SecurityStatesSection />

      {/* 9. Receipt to Resolution Timeline */}
      <SecurityReceiptTimeline />

      {/* 10. Procurement & Trust Center Evidence */}
      <SecurityProcurementSection />

      {/* 11. Responsible Contact Principles */}
      <SecurityPrinciplesSection />

      {/* 12. Frequently Asked Questions */}
      <SecurityContactFaq />

      {/* 13. Final CTA Banner */}
      <SecurityFinalCta />
    </>
  );
}
