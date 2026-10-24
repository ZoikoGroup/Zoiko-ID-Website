import type { Metadata } from "next";
import {
  CookieNoticeHeroSection,
  CookieNoticeDistinctionsSection,
  CookieNoticeDatesSection,
  CookieNoticeVerificationFlowSection,
  CookieNoticePurposesSection,
  CookieNoticeCategoriesSection,
  CookieNoticeInventoryTableSection,
  CookieNoticeReviewChoicesSection,
  CookieNoticeChoiceChangeSection,
  CookieNoticeVendorsTransfersSection,
  CookieNoticeRevisionHistorySection,
  CookieNoticePrivacyQuestionsSection,
  CookieNoticeFaqRegistrySection,
  CookieNoticeEdgeCasesSection,
  CookieNoticePublicationBlockedSection,
  CookieNoticeNextStepSection,
  CookieNoticeFaqSection,
} from "@/components/legal-privacy-cookie-notice";

export const metadata: Metadata = {
  title: "Cookie Notice | Zoiko iD",
  description:
    "This notice explains how Zoiko iD uses cookies and similar technologies, where applicable, and how you can review your choices.",
};

export default function CookieNoticePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <CookieNoticeHeroSection view="all" />
      <CookieNoticeDistinctionsSection view="all" />
      <CookieNoticeDatesSection view="all" />
      <CookieNoticeVerificationFlowSection view="all" />
      <CookieNoticePurposesSection view="all" />
      <CookieNoticeCategoriesSection view="all" />
      <CookieNoticeInventoryTableSection view="all" />
      <CookieNoticeReviewChoicesSection view="all" />
      <CookieNoticeChoiceChangeSection view="all" />
      <CookieNoticeVendorsTransfersSection view="all" />
      <CookieNoticeRevisionHistorySection view="all" />
      <CookieNoticePrivacyQuestionsSection view="all" />
      <CookieNoticeFaqRegistrySection view="all" />
      <CookieNoticeEdgeCasesSection view="all" />
      <CookieNoticePublicationBlockedSection view="all" />
      <CookieNoticeNextStepSection view="all" />
      <CookieNoticeFaqSection view="all" />
    </main>
  );
}
