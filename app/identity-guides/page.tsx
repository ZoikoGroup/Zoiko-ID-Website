import {
  IdentityHero,
  IdentitySteps,
  GuideCards,
  IdentitySearchFilter,
  IdentityWorkflow,
  FiveActors,
  AuditabilitySection,
  MandateAccess,
  ThreeChecks,
  TechnicalOwners,
  IdentityFAQ,
  KeepLearningBanner,
} from "@/components/identity-guides";

export default function IdentityGuidesPage() {
  return (
    <main>
      <IdentityHero />
      <IdentitySteps />
      <GuideCards />
      <IdentitySearchFilter />
      <IdentityWorkflow />
      <FiveActors />
      <AuditabilitySection />
      <MandateAccess />
      <ThreeChecks />
      <TechnicalOwners />
      <IdentityFAQ />
      <KeepLearningBanner />
    </main>
  );
}
