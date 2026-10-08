import {
  CheckCircleIcon,
  EyeCheckIcon,
  LockCheckIcon,
  ScaleIcon,
} from "@/components/home/icons";
import { IconTile, Section, SectionHeader } from "@/components/home/shared";

const commitments = [
  {
    title: "Security",
    description:
      "Layered authentication, authorization, workload identity, revocation, and policy enforcement designed in.",
    icon: <LockCheckIcon size={24} />,
  },
  {
    title: "Privacy",
    description:
      "Purpose limitation, data minimization, consent, retention controls, and privacy-aware evidence.",
    icon: <EyeCheckIcon size={24} />,
  },
  {
    title: "Governance",
    description:
      "High-risk actions bounded by policy, approval, scope, time, and audit. Agents do not self-authorize.",
    icon: <ScaleIcon size={24} />,
  },
  {
    title: "Assurance",
    description:
      "The Trust Center is the source of truth for verified security, privacy, availability, and compliance.",
    icon: <CheckCircleIcon size={24} />,
  },
];

export default function VerifiableTrustSection() {
  return (
    <Section background="grey">
      <SectionHeader title="Trust has to be verifiable." />

      <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((item) => (
          <li
            key={item.title}
            className="flex flex-col items-center gap-3 rounded-lg bg-white p-7 text-center outline-1 -outline-offset-1 outline-cyan-49/20"
          >
            <IconTile>{item.icon}</IconTile>
            <h3 className="pt-1 font-dm-serif text-base font-normal text-azure-9">
              {item.title}
            </h3>
            <p className="font-manrope text-sm font-normal leading-6 text-azure-35">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
