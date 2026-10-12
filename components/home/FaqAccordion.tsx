import { PlusIcon } from "./icons";
import { Section, SectionHeader } from "./shared";

export type Faq = {
  question: string;
  answer: string;
};

export default function FaqAccordion({
  faqs,
  title = "Frequently asked questions",
  subtitle = "Find answers to common questions about Zoiko iD",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section background="grey">
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="flex w-full max-w-[740px] flex-col gap-3.5">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-xl bg-white-solid shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-[30px] font-manrope text-base font-medium leading-6 text-azure-9 sm:px-8 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span className="shrink-0 text-cyan-49 transition-transform duration-200 group-open:rotate-45">
                <PlusIcon size={18} />
              </span>
            </summary>

            <p className="px-6 pb-7 font-manrope text-sm font-normal leading-6 text-azure-35 sm:px-8">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
