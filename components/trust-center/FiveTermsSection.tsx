import { Award, MessageSquare, Scale, ShieldCheck, TriangleAlert } from "lucide-react";

import { IconBadge, Section, SectionHeading } from "./shared";

const terms = [
  {
    title: "Security practice",
    description: "An approach the team follows, described in its own page.",
    icon: ShieldCheck,
  },
  {
    title: "Standards alignment",
    description: "Design that refers to a standard, without a formal result.",
    icon: Scale,
  },
  {
    title: "Certification",
    description: "Issued by a third party, with a scope and validity date.",
    icon: Award,
  },
  {
    title: "Report",
    description: "The document itself, released only when approved.",
    icon: MessageSquare,
  },
];

export default function FiveTermsSection() {
  return (
    <Section tone="grey">
      <SectionHeading
        title="Five terms, five different meanings"
        description="Practices, standards alignment, certification, independent assessment and reports are different things. Keep them apart when reading any statement."
      />

      <div className="mt-10 flex flex-col gap-3 lg:mt-14">
        <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-grey-91 bg-white-solid sm:grid-cols-2 lg:grid-cols-4">
          {terms.map((term) => (
            <article
              key={term.title}
              className="flex flex-col gap-1.5 border-grey-91 px-5 pb-8 pt-6 max-lg:border-b sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
            >
              <IconBadge icon={term.icon} />
              <h3 className="pt-1.5 font-manrope text-base font-bold leading-7 text-[#0F172A]">{term.title}</h3>
              <p className="max-w-[220px] font-manrope text-sm leading-6 text-azure-47">{term.description}</p>
            </article>
          ))}
        </div>

        <div
          role="note"
          className="flex items-start gap-3 rounded-r-xl border-l-4 border-[#F59E0B] bg-[#FEFBEA] px-6 py-4"
        >
          <TriangleAlert className="mt-0.5 size-5 shrink-0 text-[#C2410C]" strokeWidth={1.75} aria-hidden="true" />
          <p className="font-manrope text-[15px] leading-6 text-[#0F172A]">
            <strong className="font-bold">No certification claim is published on this page.</strong>{" "}
            Logos, badges and status labels appear only when backed by a dated, approved source.
          </p>
        </div>
      </div>
    </Section>
  );
}
