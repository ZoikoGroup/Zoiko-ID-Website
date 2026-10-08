import { Section, SectionHeader } from "@/components/home/shared";

import { NumberBadge } from "./shared";

const principles = [
  {
    title: "Authority must be explicit",
    description:
      "Possession of an identity or token is not treated as unlimited permission.",
  },
  {
    title: "Least privilege is a starting condition",
    description:
      "Access should be bounded to the minimum required action, resource, purpose, and duration.",
  },
  {
    title: "Revocation must matter",
    description:
      "Trust must be capable of changing when authority, consent, policy, or lifecycle state changes.",
  },
  {
    title: "Evidence should be designed in",
    description:
      "Important decisions should be explainable without depending on forensic reconstruction.",
  },
  {
    title: "Privacy is a system property",
    description:
      "Data collection and evidence should be minimized to purpose and governed throughout lifecycle.",
  },
  {
    title: "Interoperability beats lock-in",
    description:
      "Integrate with existing enterprise systems and standards where doing so improves trust.",
  },
  {
    title: "AI does not create authority",
    description:
      "Agents and models act within authority granted through policy; they do not self-authorize.",
  },
  {
    title: "Claims require proof",
    description:
      "Public statements about compliance, performance, or standards support must be evidence-backed.",
  },
];

export default function PrinciplesSection() {
  return (
    <Section>
      <SectionHeader
        title="The principles behind the platform"
        widthClass="max-w-[900px]"
      />

      <ol className="grid w-full max-w-[900px] grid-cols-1 gap-x-8 md:grid-cols-2">
        {principles.map((principle, index) => (
          <li
            key={principle.title}
            className="flex items-start gap-4 border-b border-grey-91 py-6"
          >
            <NumberBadge number={index + 1} className="size-9 rounded-md" />
            <div className="flex flex-col gap-2">
              <h3 className="font-dm-serif text-lg font-normal leading-7 text-azure-9">
                {principle.title}
              </h3>
              <p className="font-manrope text-base font-normal leading-6 text-azure-35">
                {principle.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
