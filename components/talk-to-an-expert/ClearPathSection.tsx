import { CircleCheck, FileText, Users } from "lucide-react";
import { IconBadge, Section, SectionHeading } from "@/components/docs/shared";

const steps = [
  { title: "Describe your need", body: "Share your context in the form below.", icon: FileText },
  { title: "Receipt confirmed", body: "You see confirmation only after the server accepts it.", icon: CircleCheck },
  { title: "Routed to a team", body: "The enquiry goes to the approved owner for its topic.", icon: Users },
];

export default function ClearPathSection() {
  return (
    <Section id="path">
      <SectionHeading
        title="A clear path, with no timing promise"
        description="Each step is shown in order. Confirmation appears only once the enquiry is received. No reply time or meeting is promised on this page."
      />

      <ol className="mt-12 grid grid-cols-1 border-t-2 border-[#C7D2E2] sm:grid-cols-3 lg:mt-14">
        {steps.map(({ title, body, icon }) => (
          <li key={title} className="flex flex-col gap-1.5 pb-6 pr-6 pt-8">
            <IconBadge icon={icon} />
            <h3 className="pt-2 font-manrope text-lg font-bold leading-6 text-[#0F172A]">{title}</h3>
            <p className="max-w-[290px] font-manrope text-sm leading-6 text-[#5B6B82]">{body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
