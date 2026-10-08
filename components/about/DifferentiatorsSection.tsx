import { Section, SectionHeader } from "@/components/home/shared";

import { NumberBadge } from "./shared";

const differentiators = [
  {
    title: "Authority beyond authentication",
    description:
      "Identity establishes the actor. Zoiko iD makes authority to act explicit, bounded, and revocable.",
  },
  {
    title: "One model for all actors",
    description:
      "People, organizations, services, workloads, machines, and AI agents represented as distinct principals.",
  },
  {
    title: "Delegation as first-class",
    description:
      "On-behalf-of authority carries grantor, grantee, action, resource, purpose, constraints, and revocation.",
  },
  {
    title: "Credentials connected to decisions",
    description:
      "Verified credentials inform policy decisions without becoming unlimited standing permission.",
  },
  {
    title: "Continuous trust and revocation",
    description:
      "Important decisions can be re-evaluated when trust signals or authority state changes.",
  },
  {
    title: "Evidence by design",
    description:
      "Decision context is captured as part of trust flow, not rebuilt from disconnected logs.",
  },
  {
    title: "Overlay-first adoption",
    description:
      "Enterprises can integrate with existing identity providers and applications without full replacement.",
  },
  {
    title: "Interoperability first",
    description:
      "Standards-based federation, credentials, APIs, and events preferred over unnecessary lock-in.",
  },
  {
    title: "Privacy-aware assurance",
    description:
      "Evidence explains decisions while respecting purpose limitation, minimization, and retention.",
  },
  {
    title: "Agent mandates, not autonomy",
    description:
      "AI agents act under explicit identity, bounded mandate, permitted resources/actions, time limits, policy.",
  },
];

export default function DifferentiatorsSection() {
  return (
    <Section>
      <SectionHeader title="What makes Zoiko iD different" />

      <ol className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {differentiators.map((item, index) => (
          <li
            key={item.title}
            className="flex items-start gap-4 rounded-lg bg-white-solid p-6 outline-1 -outline-offset-1 outline-grey-91"
          >
            <NumberBadge number={index + 1} />
            <div className="flex flex-1 flex-col gap-2">
              <h3 className="font-dm-serif text-xl font-normal text-azure-9">
                {item.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-6 text-azure-35">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
