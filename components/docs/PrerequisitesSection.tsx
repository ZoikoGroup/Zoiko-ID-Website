import { CircleCheck, KeyRound, Terminal, User } from "lucide-react";
import { IconBadge, Section, SectionHeading } from "./shared";

const items = [
  { title: "Account and access", body: "Confirm the account and roles you need.", icon: User },
  { title: "Credentials", body: "Create credentials in the console, and never commit them.", icon: KeyRound },
  { title: "Environment", body: "Choose an environment that matches your release.", icon: Terminal },
  { title: "Verify", body: "Confirm the prerequisites before following a quickstart.", icon: CircleCheck },
];

export default function PrerequisitesSection() {
  return (
    <Section id="prerequisites" tone="grey">
      <SectionHeading
        title="Prerequisites before you build"
        description="Check these four items first. Each one links to its guide, with version information where it applies. Nothing is installed on your behalf."
      />

      <ol className="mt-12 grid grid-cols-1 border-t-2 border-[#0F172A]/30 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {items.map(({ title, body, icon }) => (
          <li key={title} className="flex flex-col gap-1.5 pb-6 pr-6 pt-8">
            <IconBadge icon={icon} />
            <h3 className="pt-2 font-manrope text-lg font-bold leading-6 text-[#0F172A]">{title}</h3>
            <p className="max-w-[260px] font-manrope text-sm leading-6 text-[#5B6B82]">{body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
