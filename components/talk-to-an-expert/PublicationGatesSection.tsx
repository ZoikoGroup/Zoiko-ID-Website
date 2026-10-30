import { Section, SectionHeading } from "@/components/docs/shared";

const gates = [
  { title: "Intake", body: "Sales and engineering: approved CRM or mailbox route" },
  { title: "Privacy", body: "Privacy and legal: notice and retention verified" },
  { title: "Security", body: "Security: abuse controls and data handling approved" },
  { title: "Accessibility", body: "Accessibility QA: WCAG 2.2 AA tested" },
];

export default function PublicationGatesSection() {
  return (
    <Section id="gates">
      <SectionHeading
        title="What must be cleared before this page goes live"
        description="This page is a specification. Each gate names its owner. The enquiry route, backend and legal links must be verified before the form is enabled."
      />

      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {gates.map(({ title, body }) => (
          <li key={title} className="flex flex-col gap-2 rounded-2xl border border-[#FCA5A5] bg-white-solid px-[18px] py-5">
            <h3 className="font-manrope text-sm font-bold leading-6 text-[#7F1D1D]">{title}</h3>
            <p className="font-manrope text-[13px] leading-[22px] text-[#7F1D1D]">{body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
