import {
  CheckCircleIcon,
  OfficeIcon,
  OfficerIcon,
  ShareIcon,
} from "@/components/home/icons";
import { Section, SectionHeader } from "@/components/home/shared";

const chain = [
  {
    title: "Organization",
    caption: "Legal entity",
    icon: <OfficeIcon size={40} />,
    color: "text-cyan-49",
  },
  {
    title: "Officer",
    caption: "Represents org",
    icon: <OfficerIcon size={40} />,
    color: "text-cyan-49",
  },
  {
    title: "Delegate",
    caption: "Scoped grant",
    icon: <ShareIcon size={40} />,
    color: "text-cyan-49",
  },
  {
    title: "Action",
    caption: "Permitted",
    icon: <CheckCircleIcon size={40} />,
    color: "text-[#16A34A]",
  },
];

export default function AuthorityGraphSection() {
  return (
    <Section>
      <SectionHeader title="Authority graph & delegation" />

      <div className="flex w-full flex-col gap-8 rounded-xl bg-grey-98 p-6 outline-1 -outline-offset-1 outline-grey-91 sm:p-10 lg:gap-10">
        <p className="text-center font-manrope text-base font-semibold leading-7 text-azure-35">
          Organization → Officer → Delegate → Action
        </p>

        <ol className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-7">
          {chain.map((step) => (
            <li
              key={step.title}
              className="flex flex-col items-center gap-[3px] rounded-xl bg-white-solid p-5 text-center outline-2 -outline-offset-2 outline-[#CBD5E1]"
            >
              <span className={`pb-1 pt-3 ${step.color}`}>{step.icon}</span>
              <span className="pt-2 font-manrope text-base font-bold text-azure-9">
                {step.title}
              </span>
              <span className="font-manrope text-sm font-normal leading-6 text-azure-47">
                {step.caption}
              </span>
            </li>
          ))}
        </ol>

        <p className="border-t border-grey-91 pt-4 text-center font-manrope text-sm font-normal leading-6 text-azure-47">
          <strong className="font-bold">Each link is auditable.</strong> Who
          granted? When? For what duration? What can they do?
        </p>
      </div>
    </Section>
  );
}
