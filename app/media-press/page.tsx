import {
  MediaPressHero,
  WhoIsSpeakingSection,
  FactsSourceAndOwnerSection,
  PublishedAnnouncementsSection,
  ImagesAndAssetsSection,
  FourKindsOfMediaRequestSection,
  WhatTheFormWillAskForSection,
  WhatYouWillSeeAndNotSection,
  ChangesRecordedSection,
  OtherQuestionsSpecialistRoutesSection,
  ShortAnswersSection,
  HowThisPageIsKeptAccurateSection,
  WhatMustBeApprovedBeforeLaunchSection,
  RouteThatFitsQuestionSection,
} from "@/components/media-press";

export default function MediaPressPage() {
  return (
    <main>
      <MediaPressHero />
      <WhoIsSpeakingSection />
      <FactsSourceAndOwnerSection />
      <PublishedAnnouncementsSection />
      <ImagesAndAssetsSection />
      <FourKindsOfMediaRequestSection />
      <WhatTheFormWillAskForSection />
      <WhatYouWillSeeAndNotSection />
      <ChangesRecordedSection />
      <OtherQuestionsSpecialistRoutesSection />
      <ShortAnswersSection />
      <HowThisPageIsKeptAccurateSection />
      <WhatMustBeApprovedBeforeLaunchSection />
      <RouteThatFitsQuestionSection />
    </main>
  );
}
