import {
  SecurityAdvisoriesHero,
  SecuritySourceCurrency,
  FourThingsToConfuse,
  SearchFilterAdvisories,
  AdvisoryCardLayoutGuides,
  FourStatesOfScope,
  AdvisoryPageTemplate,
  ActionsApprovedGuidance,
  PrivateDetailsStayPrivate,
  EachQuestionOwnPage,
  FindAdvisoryCta,
  SecurityFaq,
} from "@/components/security-advisories";

export default function SecurityAdvisoriesPage() {
  return (
    <main>
      <SecurityAdvisoriesHero />
      <SecuritySourceCurrency />
      <FourThingsToConfuse />
      <SearchFilterAdvisories />
      <AdvisoryCardLayoutGuides />
      <FourStatesOfScope />
      <AdvisoryPageTemplate />
      <ActionsApprovedGuidance />
      <PrivateDetailsStayPrivate />
      <EachQuestionOwnPage />
      <FindAdvisoryCta />
      <SecurityFaq />
    </main>
  );
}
