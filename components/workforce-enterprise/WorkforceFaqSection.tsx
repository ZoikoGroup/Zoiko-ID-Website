interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Do you replace our IdP?",
    answer:
      "No. Zoiko iD does not replace your customer's identity provider. Existing enterprise IdPs (such as Okta, Azure AD, or Ping) remain the authoritative source for authentication, while Zoiko iD adds organization context, membership lifecycle management, and policy-driven authority.",
  },
  {
    question: "Can you sync roles from our HRIS?",
    answer:
      "Yes. Zoiko iD supports direct SCIM synchronization and API-based ingestion from major HRIS and directory platforms, automatically translating organizational roles and departments into bounded permissions.",
  },
  {
    question: "How does delegation work?",
    answer:
      "Managers can delegate task approval authority, access requests, or time-limited permissions to team members. Every delegation is bounded by specific scope, time limit, and mandate reference in the immutable audit trail.",
  },
  {
    question: "What happens when someone is terminated?",
    answer:
      "When termination is detected in the IdP or HRIS, Zoiko iD triggers instant access revocation across all connected systems, terminates active sessions immediately, and logs the complete audit event.",
  },
  {
    question: "How long is access history retained?",
    answer:
      "Access decision logs and audit evidence are retained per your enterprise retention policy in tamper-evident, compliance-ready storage that is fully searchable and indexable for regulatory review.",
  },
  {
    question: "What if your service is unavailable?",
    answer:
      "Zoiko iD is engineered for continuous high availability with globally distributed edge points, redundant policy decision caches, and offline fallback fail-safe mechanisms ensuring workforce continuity.",
  },
];

export default function WorkforceFaqSection() {
  return (
    <section id="workforce-faq" className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
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
