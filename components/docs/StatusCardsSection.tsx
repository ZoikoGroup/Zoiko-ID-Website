import type { LucideIcon } from "lucide-react";
import { IconBadge, Pill, Section, SectionHeading } from "./shared";

export type StatusCard = {
  title: string;
  body: string;
  status: string;
  variant?: "pending" | "neutral";
  icon: LucideIcon;
};

type StatusCardsSectionProps = {
  id?: string;
  tone?: "white" | "grey";
  title: string;
  description: string;
  cards: StatusCard[];
};

// Two side-by-side cards with an icon, short copy and a status pill.
// Used by the "API reference and SDK availability" and "Which version you are reading" sections.
export default function StatusCardsSection({ id, tone = "grey", title, description, cards }: StatusCardsSectionProps) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading title={title} description={description} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14">
        {cards.map(({ title: cardTitle, body, status, variant, icon }) => (
          <li
            key={cardTitle}
            className="flex gap-5 rounded-[20px] border border-[#E2E8F0] bg-white-solid p-6 sm:gap-7 sm:px-7 sm:py-7"
          >
            <IconBadge icon={icon} />
            <div className="flex flex-col gap-1.5">
              <h3 className="font-manrope text-lg font-bold leading-6 text-[#0F172A]">{cardTitle}</h3>
              <p className="max-w-[400px] pb-2.5 font-manrope text-sm leading-6 text-[#5B6B82]">{body}</p>
              <Pill variant={variant}>{status}</Pill>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
