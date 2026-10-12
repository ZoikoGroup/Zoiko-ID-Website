import {
  BoundaryIcon,
  ClockCheckIcon,
  ShieldCheckIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

import {
  GreenCheck,
  MediaCard,
  SolidIconTile,
  cardTextClass,
  cardTitleClass,
} from "./shared";

const principles = [
  {
    title: "Sourced & Verified",
    description:
      "Organizations don't self-assert. Third-party sources (government registries, domain registration, payment history) attest to attributes.",
    image: "/organization-identity/sourced-verified.webp",
    icon: <ShieldCheckIcon size={32} />,
    note: "Auditable sources",
  },
  {
    title: "Time-Bound & Fresh",
    description:
      'Verification has an "as-of" date. Attributes expire or are revoked. Never imply certainty beyond the evaluation time.',
    image: "/organization-identity/time-bound-fresh.webp",
    icon: <ClockCheckIcon size={32} />,
    note: "Always dated",
  },
  {
    title: "Transparent Boundaries",
    description:
      "What this doesn't cover. Geographic scope, legal jurisdictions, subsidiaries, parent relationships—all explicit.",
    image: "/organization-identity/transparent-boundaries.webp",
    icon: <BoundaryIcon size={32} />,
    note: "Clear scope",
  },
];

export default function VerificationSection() {
  return (
    <Section>
      <SectionHeader title="Verification & currentness" />

      {/* Wrapping flex row so the lone third card on tablet stays centred */}
      <div className="flex w-full flex-wrap justify-center gap-8">
        {principles.map((principle) => (
          <div
            key={principle.title}
            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.34px)]"
          >
            <MediaCard
              image={principle.image}
              sizes="(min-width: 1024px) 352px, (min-width: 768px) 45vw, 90vw"
            >
              <SolidIconTile>{principle.icon}</SolidIconTile>
              <h3 className={cardTitleClass}>{principle.title}</h3>
              <p className={`${cardTextClass} pb-5`}>{principle.description}</p>

              {/* mt-auto keeps the notes aligned across cards of different length */}
              <p className="mt-auto flex items-center gap-2 font-manrope text-sm font-normal text-azure-47">
                <GreenCheck />
                {principle.note}
              </p>
            </MediaCard>
          </div>
        ))}
      </div>
    </Section>
  );
}
