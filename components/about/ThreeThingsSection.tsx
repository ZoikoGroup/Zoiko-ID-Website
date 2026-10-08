import {
  FileCheckIcon,
  ShieldCheckIcon,
  UserCheckIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

const pillars = [
  {
    title: "Identity",
    label: "Who or what the actor is",
    description:
      "Establish and authenticate the relevant person, organization, service, workload, machine, or AI agent.",
    icon: <UserCheckIcon size={32} />,
  },
  {
    title: "Authority",
    label: "What that actor may do",
    description:
      "Evaluate delegation, mandate, relationship, policy, purpose, resource, scope, and time before action.",
    icon: <ShieldCheckIcon size={32} />,
  },
  {
    title: "Evidence",
    label: "Why the decision was made",
    description:
      "Preserve decision context and material changes so authorized reviewers understand what happened.",
    icon: <FileCheckIcon size={32} />,
  },
];

export default function ThreeThingsSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Three things should travel together"
        widthClass="max-w-[900px]"
      />

      <div className="mx-auto grid w-full max-w-[520px] grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="flex flex-col items-center gap-2.5 rounded-lg border border-t-4 border-cyan-49 bg-grey-98 px-8 pb-12 pt-8 text-center"
          >
            <span className="text-cyan-49">{pillar.icon}</span>
            <h3 className="pt-px font-dm-serif text-xl font-normal text-azure-9">
              {pillar.title}
            </h3>
            <p className="pt-1 font-manrope text-sm font-normal uppercase leading-6 text-azure-47">
              {pillar.label}
            </p>
            <p className="max-w-[300px] font-manrope text-sm font-normal leading-6 text-azure-35">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
