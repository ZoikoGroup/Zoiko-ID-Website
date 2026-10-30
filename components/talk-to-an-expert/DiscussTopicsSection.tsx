"use client";

import { useState } from "react";
import { CircleDollarSign, Ellipsis, Monitor, ShieldCheck, SquareCode } from "lucide-react";
import { IconBadge, Section, SectionHeading } from "@/components/docs/shared";

const topics = [
  { title: "Platform architecture", body: "How the platform fits your estate.", icon: Monitor },
  { title: "Security & trust", body: "Assurance, controls and governance.", icon: ShieldCheck },
  { title: "Integration", body: "Developer and system integration.", icon: SquareCode },
  { title: "Pricing / procurement", body: "Commercial and buying questions.", icon: CircleDollarSign },
  { title: "Other", body: "Anything that does not fit above.", icon: Ellipsis },
];

export default function DiscussTopicsSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Section id="topics" tone="grey">
      <SectionHeading
        title="What would you like to discuss?"
        description="Choose the area closest to your question. The choice helps route your enquiry; it is optional unless a policy requires it, and you can change it before sending."
      />

      <fieldset className="mt-12 lg:mt-14">
        <legend className="sr-only">Enquiry topic (optional)</legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ title, body, icon }) => {
            const isSelected = selected === title;
            return (
              <label
                key={title}
                className={`flex cursor-pointer flex-col gap-4 rounded-3xl border bg-white-solid p-6 transition-colors focus-within:ring-2 focus-within:ring-azure-48 focus-within:ring-offset-2 ${
                  isSelected ? "border-azure-48 shadow-[0_0_0_1px_#2563EB]" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={title}
                  checked={isSelected}
                  onChange={() => setSelected(title)}
                  className="sr-only"
                />
                <IconBadge icon={icon} />
                <span className="flex flex-col">
                  <span className="font-manrope text-lg font-bold leading-6 text-[#0F172A]">{title}</span>
                  <span className="font-manrope text-sm leading-6 text-[#5B6B82]">{body}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </Section>
  );
}
