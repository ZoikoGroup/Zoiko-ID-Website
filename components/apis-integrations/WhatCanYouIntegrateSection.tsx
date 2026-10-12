import { FileCheckIcon, PersonIcon, ScaleIcon } from "@/components/home/icons";
import { CalloutSection } from "@/components/home/shared";

const pillars = [
  { label: "Identity", icon: <PersonIcon size={14} /> },
  { label: "Authority", icon: <ScaleIcon size={14} /> },
  { label: "Evidence", icon: <FileCheckIcon size={14} /> },
];

export default function WhatCanYouIntegrateSection() {
  return (
    <CalloutSection title="What can you integrate with Zoiko iD?">
      <p className="mx-auto max-w-[640px]">
        Zoiko iD is designed as an integration-oriented trust layer for
        identity, credentials, delegated authority, access decisions, security
        signals, and auditable evidence.
      </p>
      <p className="mx-auto max-w-[720px] text-azure-47">
        Its public API, federation, and event pathways must be evaluated
        against the current supported contracts rather than assumed to be
        universally available.
      </p>

      <ul className="flex flex-wrap justify-center gap-4 pt-6">
        {pillars.map((pillar) => (
          <li
            key={pillar.label}
            className="flex items-center gap-2 rounded-[20px] bg-linear-73 from-cyan-49/15 to-azure-53/15 px-4 py-2 font-manrope text-sm font-semibold leading-5 text-cyan-49 outline-1 -outline-offset-1 outline-cyan-49/30"
          >
            {pillar.icon}
            {pillar.label}
          </li>
        ))}
      </ul>
    </CalloutSection>
  );
}
