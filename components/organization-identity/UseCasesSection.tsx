import { Section, SectionHeader } from "@/components/home/shared";

import { MediaCard, cardTextClass, cardTitleClass } from "./shared";

const useCases = [
  {
    title: "B2B Onboarding",
    description:
      "Verify vendor organization, add authorized contacts, set approval workflows. All auditable and time-limited.",
    image: "/organization-identity/b2b-onboarding.webp",
    tag: "Enterprise",
  },
  {
    title: "M&A & Transitions",
    description:
      "Track organization changes. Migrate authority across entities. Maintain evidence of who had what when.",
    image: "/organization-identity/mergers-acquisitions.webp",
    tag: "Enterprise",
  },
  {
    title: "Compliance & Audit",
    description:
      "Prove who was authorized to do what, when. Support regulatory inquiries with evidence trail.",
    image: "/organization-identity/compliance-audit.webp",
    tag: "Audit-Ready",
  },
];

export default function UseCasesSection() {
  return (
    <Section>
      <SectionHeader title="Enterprise use cases" />

      {/* Wrapping flex row so the lone third card on tablet stays centred */}
      <div className="flex w-full flex-wrap justify-center gap-8">
        {useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.34px)]"
          >
            <MediaCard
              image={useCase.image}
              sizes="(min-width: 1024px) 352px, (min-width: 768px) 45vw, 90vw"
            >
              <h3 className={cardTitleClass}>{useCase.title}</h3>
              <p className={`${cardTextClass} pb-5`}>{useCase.description}</p>

              <span className="mt-auto rounded bg-cyan-49/10 px-2 py-1 font-manrope text-xs font-medium text-cyan-49">
                {useCase.tag}
              </span>
            </MediaCard>
          </div>
        ))}
      </div>
    </Section>
  );
}
