import { PlusIcon } from "./icons";
import { Section, SectionHeader } from "./shared";

// Answers were not in the design; they are draft copy for review.
const faqs = [
  {
    question: "How does Zoiko iD differ from traditional identity providers?",
    answer:
      "Traditional identity providers focus on login. Zoiko iD adds delegated authority, continuous trust evaluation and immutable evidence on top of authentication, so every access decision is bounded, re-evaluated as signals change, and provable after the fact.",
  },
  {
    question: "Does Zoiko iD require replacing our existing identity system?",
    answer:
      "No. Zoiko iD federates with your existing IdP through standards such as OAuth 2.0, OpenID Connect, SAML 2.0 and SCIM, and adds authority, signals and evidence alongside it.",
  },
  {
    question: "How is evidence preserved and used for compliance?",
    answer:
      "Every decision is recorded with its policy version, timestamp and decision context in immutable audit logs, which you can query through the API and export for compliance reports and audits.",
  },
  {
    question: "What standards does Zoiko iD support?",
    answer:
      "OAuth 2.0, OpenID Connect, SAML 2.0, WebAuthn/FIDO2 and SCIM, along with emerging signal standards.",
  },
  {
    question: "How does continuous trust evaluation work?",
    answer:
      "Zoiko iD monitors security signals throughout a session and re-evaluates access against your policies and each actor's risk profile, so access can be adjusted or revoked as soon as conditions change.",
  },
  {
    question: "What is delegated authority and why is it important?",
    answer:
      "Delegated authority defines who can act for whom, under what limits and for how long. It lets people, services and AI agents act on behalf of others with bounded, revocable permissions instead of shared credentials.",
  },
];

export default function FaqSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Frequently asked questions"
        subtitle="Find answers to common questions about Zoiko iD"
      />

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
