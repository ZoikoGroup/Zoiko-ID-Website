import {
  ArchitectureHero,
  ArchitectureFilter,
  ApprovedGuideCards,
  ArchitectureRoute,
  ConceptualSequence,
  ExistingIdp,
  DelegatedAuthority,
  FiveActorGovernance,
  ContextLifecycle,
  MinimalEvidence,
  GuideStructure,
  ExactInterfaces,
  ArchitectureFAQ,
  ExplorePatternsCta,
} from "@/components/architecture-guides";

export default function ArchitectureGuidesPage() {
  return (
    <main>
      <ArchitectureHero />
      <ArchitectureFilter />
      <ApprovedGuideCards />
      <ArchitectureRoute />
      <ConceptualSequence />
      <ExistingIdp />
      <DelegatedAuthority />
      <FiveActorGovernance />
      <ContextLifecycle />
      <MinimalEvidence />
      <GuideStructure />
      <ExactInterfaces />
      <ArchitectureFAQ />
      <ExplorePatternsCta />
    </main>
  );
}
