import PublicationStatusSection from "./MobilePublicationStatusSection";
import RelatedLearnPagesSection from "./MobileRelatedLearnPagesSection";
import AccessibilityCommitmentsSection from "./MobileAccessibilityCommitmentsSection";
import WhatThisPageDoesNotDoSection from "./MobileWhatThisPageDoesNotDoSection";
import ReadinessSection from "./MobileReadinessSection";
import QuestionsSection from "./MobileQuestionsSection";
import NextStepSection from "./MobileNextStepSection";

export default function Part4() {
  return (
    <>
      <PublicationStatusSection />
      <RelatedLearnPagesSection />
      <AccessibilityCommitmentsSection />
      <WhatThisPageDoesNotDoSection />
      <ReadinessSection />
      <QuestionsSection />
      <NextStepSection />
    </>
  );
}
