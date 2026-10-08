import {
  BuildingIcon,
  GearIcon,
  LaptopIcon,
  PersonIcon,
  RobotIcon,
} from "@/components/home/icons";
import { IconTile, Section, SectionHeader } from "@/components/home/shared";

const actors = [
  {
    title: "People",
    description: "Authentication, credentials, consent, roles, and policy-based access.",
    icon: <PersonIcon size={24} />,
  },
  {
    title: "Organizations",
    description:
      "Organization identity, verified claims, representative authority, roots of trust.",
    icon: <BuildingIcon size={24} />,
  },
  {
    title: "Services & Workloads",
    description:
      "Distinct identities, short-lived credentials, least privilege, lifecycle controls.",
    icon: <GearIcon size={24} />,
  },
  {
    title: "Machines & Devices",
    description: "Bound identity with policy, lifecycle, risk context, and revocation.",
    icon: <LaptopIcon size={24} />,
  },
  {
    title: "AI Agents",
    description:
      "Explicit principal identity, mandate, allowed actions, time limits, policy, revocation.",
    icon: <RobotIcon size={24} />,
  },
];

export default function TrustModelSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="One trust model across human and non-human identity"
        widthClass="max-w-[786px]"
      />

      {/* Wrapping flex row so a short last row stays centred (2+2+1, 3+2, then 5) */}
      <ul className="flex w-full flex-wrap justify-center gap-5">
        {actors.map((actor) => (
          <li
            key={actor.title}
            className="flex w-full flex-col items-center gap-4 rounded-lg bg-white p-6 text-center outline-1 -outline-offset-1 outline-grey-91 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)] xl:w-auto xl:min-h-64 xl:flex-1 xl:gap-10"
          >
            <IconTile>{actor.icon}</IconTile>
            <div className="flex flex-col gap-1.5">
              <h3 className="pt-1 font-dm-serif text-base font-normal text-azure-9">
                {actor.title}
              </h3>
              <p className="font-manrope text-sm font-normal leading-6 text-azure-35">
                {actor.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
