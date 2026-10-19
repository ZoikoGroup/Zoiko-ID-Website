import Image from "next/image";
import { Clock, RotateCw, TriangleAlert } from "lucide-react";

import { IconBadge, Section, SectionHeading } from "./shared";

const topics = [
  {
    title: "View status",
    description: "Current operational state, from the status service.",
    icon: Clock,
    image: { src: "/trust-center/operational-status.webp", alt: "Operator monitoring a service dashboard" },
  },
  {
    title: "Security advisories",
    description: "Published advisories from the owning page.",
    icon: TriangleAlert,
    image: { src: "/trust-center/operational-advisories.webp", alt: "Security lead smiling during a team discussion" },
  },
  {
    title: "Responsible disclosure",
    description: "How to report a suspected vulnerability privately.",
    icon: RotateCw,
    image: { src: "/trust-center/operational-disclosure.webp", alt: "Documents being reviewed on a meeting table" },
  },
];

export default function OperationalTopicsSection() {
  return (
    <Section>
      <SectionHeading
        title="Operational topics belong to their owners"
        description="This center does not publish incident reports, vulnerability details, response times or service history. Those live with the teams that own them."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
        {topics.map((topic) => (
          <article key={topic.title} className="flex flex-col overflow-hidden rounded-2xl border border-grey-91 bg-white-solid">
            <div className="relative h-40 w-full">
              <Image src={topic.image.src} alt={topic.image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <IconBadge icon={topic.icon} />
              <h3 className="pb-2 pt-5 font-manrope text-lg font-bold text-[#0F172A]">{topic.title}</h3>
              <p className="max-w-[260px] font-manrope text-sm leading-[22px] text-azure-47">{topic.description}</p>
              <p className="mt-auto pt-5">
                <span className="block rounded-md bg-grey-96 px-3 py-2 font-manrope text-sm text-[#0F172A]">
                  Route pending registry
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
