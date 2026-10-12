import {
  ClockRefreshIcon,
  GlobeIcon,
  HierarchyIcon,
  HistoryIcon,
  HomesIcon,
  UsersIcon,
} from "@/components/home/icons";
import { IconTile, Section, SectionHeader } from "@/components/home/shared";

const structures = [
  {
    title: "Parent & Subsidiary",
    description:
      "Hierarchical relationships between legal entities. Parent authority ≠ subsidiary authority; each has boundaries.",
    icon: <HierarchyIcon size={28} />,
  },
  {
    title: "Multi-Tenant",
    description:
      "Single organization may contain multiple tenants. Account structure decoupled from legal entity.",
    icon: <HomesIcon size={28} />,
  },
  {
    title: "Geographic Scope",
    description:
      "Authority may be limited to specific regions. Compliance, tax, and regulatory boundaries visible.",
    icon: <GlobeIcon size={28} />,
  },
  {
    title: "Team & Groups",
    description:
      "Authority granted to teams. Team membership changes don't retroactively revoke past actions.",
    icon: <UsersIcon size={28} />,
  },
  {
    title: "Audit Trail",
    description:
      'Every delegation, approval, and revocation is recorded. Answers "who decided what, when?"',
    icon: <HistoryIcon size={28} />,
  },
  {
    title: "Expiry & Revocation",
    description:
      "Authority is time-bound. Can be revoked immediately. Revocation doesn't change history.",
    icon: <ClockRefreshIcon size={28} />,
  },
];

export default function EnterpriseStructuresSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Complex enterprise structures"
        widthClass="max-w-[760px]"
      />

      <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {structures.map((structure) => (
          <li
            key={structure.title}
            className="flex items-start gap-5 rounded-xl bg-white-solid p-7 outline-1 -outline-offset-1 outline-grey-91"
          >
            <IconTile className="size-14 rounded-lg">{structure.icon}</IconTile>
            <div className="flex flex-col gap-3">
              <h3 className="font-manrope text-base font-bold text-azure-9">
                {structure.title}
              </h3>
              <p className="font-manrope text-base font-normal leading-7 text-azure-47">
                {structure.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
