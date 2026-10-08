import {
  DatabaseCheckIcon,
  PulseIcon,
  ShieldStarIcon,
  UserCheckIcon,
} from "./icons";
import { Section, SectionHeader } from "./shared";

const pillars = [
  { label: "Identity", icon: <UserCheckIcon size={36} /> },
  { label: "Authority", icon: <ShieldStarIcon size={36} /> },
  { label: "Signals", icon: <PulseIcon size={36} /> },
  { label: "Evidence", icon: <DatabaseCheckIcon size={36} /> },
];

export default function WhatWeDoSection() {
  return (
    <Section>
      <SectionHeader
        title="What we do"
        subtitle="One unified platform for identity, authority, signals, and evidence"
      />

      <ul className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-10">
        {pillars.map((pillar) => (
          <li
            key={pillar.label}
            className="flex flex-col items-center gap-5 rounded-2xl bg-white px-4 py-6 outline-1 sm:p-8 -outline-offset-1 outline-neutral-400/50"
          >
            <div className="flex size-16 items-center justify-center rounded-xl bg-sky-100 text-cyan-49">
              {pillar.icon}
            </div>
            <p className="text-center font-dm-serif text-sm font-normal uppercase leading-5 tracking-wider text-azure-9">
              {pillar.label}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
