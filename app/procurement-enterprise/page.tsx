import {
  EnterpriseProcurementHero,
  SixReviewersSection,
  PrepareChecklistSection,
  SixReviewAreasSection,
  PersonalDataDescribedSection,
  EvidenceRegistry,
  TechnicalEvaluationSection,
  CommercialDiscussionSection,
  RequestFormCollectionSection,
  RestrictedMaterialSection,
  ConfirmationMeaningSection,
  StatesYouMaySeeSection,
  RouteYourQuestionSection,
  DirectAnswers,
} from "@/components/procurement-enterprise";

export default function ProcurementEnterprisePage() {
  return (
    <main>
      <EnterpriseProcurementHero />
      <SixReviewersSection />
      <PrepareChecklistSection />
      <SixReviewAreasSection />
      <PersonalDataDescribedSection />
      <EvidenceRegistry />
      <TechnicalEvaluationSection />
      <CommercialDiscussionSection />
      <RequestFormCollectionSection />
      <RestrictedMaterialSection />
      <ConfirmationMeaningSection />
      <StatesYouMaySeeSection />
      <RouteYourQuestionSection />
      <DirectAnswers />
    </main>
  );
}
