interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is this the same as AI governance policy?",
    answer:
      "No. AI governance policy defines what models and tools organizations are allowed to use. Zoiko iD enforces runtime bounded authority, cryptographic mandate verification, and continuous trust evaluation for specific agent actions at the authorization layer.",
  },
  {
    question: "Can I revoke an agent mid-action?",
    answer:
      "Yes. Authority can be revoked immediately with zero delay and no grace period. When a mandate is revoked by a sponsor, an administrator, or an automated policy trigger, subsequent access checks fail instantly and cascading revocations propagate to all downstream systems.",
  },
  {
    question: "Who signs off on the mandate?",
    answer:
      "The designated human or team sponsor creates and defines the scope, resources, and expiry of the mandate. Organization policy owners define organization-wide constraints and must authorize whether specific sponsor-agent combinations are permitted.",
  },
  {
    question: "How long are audit logs retained?",
    answer:
      "Audit evidence, including tamper-evident action proofs, cryptographic signatures, and policy evaluation trails, are retained according to your enterprise data retention policy and regulatory compliance requirements.",
  },
  {
    question: "What if the AI agent misbehaves?",
    answer:
      "Any action outside the explicit scope of the active mandate is denied immediately. Anomalous patterns or policy violations trigger automated risk signals, prompt revocation of the mandate, and log immutable forensic evidence for compliance review.",
  },
];

export default function AgentFaqSection() {
  return (
    <section id="ai-agent-faq" className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Frequently asked questions
        </h2>

        <div className="flex w-full flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-mystic bg-white-solid shadow-[0px_1px_3px_0px_rgba(15,23,42,0.03)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 font-manrope text-base font-semibold leading-snug text-azure-9 sm:px-8 sm:text-[16px] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center font-manrope text-2xl font-bold text-cyan-49 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="px-6 pb-7 font-manrope text-[14px] font-normal leading-[25.2px] text-azure-47 sm:px-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
