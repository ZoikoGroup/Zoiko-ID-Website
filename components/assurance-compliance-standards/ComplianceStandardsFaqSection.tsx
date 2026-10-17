"use client";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What standards does Zoiko iD support?",
    answer:
      "Zoiko iD supports core identity and federation protocols including OAuth 2.0, OpenID Connect, SAML 2.0, WebAuthn/FIDO2 and SCIM, alongside delegated authority protocols and continuous security event frameworks. Active capability records confirm specific scope and implementation status for each environment.",
  },
  {
    question: "How can procurement review evidence?",
    answer:
      "Procurement teams can request governed access to assurance evidence through the Trust Center. Requests require organization validation, identity verification, and non-disclosure confirmation before time-limited access to third-party reports is granted.",
  },
  {
    question: "How do implementation statuses change?",
    answer:
      "A status changes only upon formal verification. Status transitions follow engineering sign-off, capability record publication, or completion of independent external assessments. Planned features are never described as available until fully verified.",
  },
  {
    question: "Does standards alignment mean certification?",
    answer:
      "No. Alignment indicates the architecture was designed with a standard in mind. Certification is a distinct, formal designation issued solely by accredited third-party certifying bodies with explicit dates and documented audit scope.",
  },
  {
    question: "How is delegated authority different from authentication?",
    answer:
      "Authentication proves who an actor is (identity verification), while delegated authority establishes what an actor is permitted to do on behalf of another entity, under what scope, for what duration, and subject to what revocation rules.",
  },
  {
    question: "Does a missing standard mean it is unsupported?",
    answer:
      "No. The absence of a standard from the public registry indicates that no formal public capability record has been published yet. Absence should not be interpreted as non-support; organizations can request a scoped review with an identity specialist.",
  },
];

export default function ComplianceStandardsFaqSection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 lg:px-20 lg:py-[105px] xl:px-[270px]">
      <div className="mx-auto flex w-full max-w-[860px] flex-col items-center gap-[50px] lg:gap-[80px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[19px] text-center">
          <h2 className="font-dm-serif text-3xl font-normal tracking-[-0.015em] text-[#071426] sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
            Frequently asked questions
          </h2>
          <p className="font-manrope text-[14.4px] font-normal leading-[23px] text-[#475569]">
            Find answers to common questions about Zoiko iD
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[16px] border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-7 sm:px-8 sm:py-8 [&::-webkit-details-marker]:hidden">
                <span className="font-manrope text-[16px] font-bold leading-[27.2px] text-[#071426]">
                  {faq.question}
                </span>
                <span className="shrink-0 font-manrope text-2xl font-bold text-[#22B8D6] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-7 font-manrope text-[14.4px] font-normal leading-[23px] text-[#64748B] sm:px-8 sm:pb-8">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
