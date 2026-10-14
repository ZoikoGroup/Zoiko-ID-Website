import { PlusSmallIcon, QuestionMarkBadgeIcon, ChevronDownIcon } from "./icons";

const faqs = [
  {
    question: "Is this ISO/HIPAA-compliant? SOX-compliant? FedRAMP?",
    answer:
      "Zoiko iD architecture supports compliance requirements, but compliance assessment is your responsibility. We provide identity, bounded delegation, evidence export, policy enforcement to help you meet regulatory requirements. Consult your legal and compliance teams for final determinations.",
  },
  {
    question: "Does this replace my existing IdP?",
    answer:
      "No. Zoiko iD functions as an authoritative overlay on top of your existing identity infrastructure (Active Directory, Okta, Ping, or SAML IdP). Your IdP continues authenticating actors and managing credentials, while Zoiko iD manages delegated authority, real-time revocation, and audit logs.",
  },
  {
    question: "How fast can we revoke access?",
    answer:
      "Revocation is immediate and propagated across all integrated resources in sub-second latency. When a sponsor withdraws a mandate or an employee changes roles, active tokens and session authorizations are instantly terminated with zero grace period.",
  },
  {
    question: "How long are audit logs retained?",
    answer:
      "Retention schedules are configurable according to your sector's regulatory mandates (e.g., 7 years for SOX/financial records, 6 years for HIPAA). Audit records are stored in immutable WORM-compliant storage with verifiable cryptographic signatures.",
  },
  {
    question: "Who is accountable if something goes wrong?",
    answer:
      "Every regulated action provides an unbroken chain of accountability linking the acting principal, the authorizing sponsor, the governing policy version, and the timestamped cryptographically signed mandate. Regulators can audit the exact decision context.",
  },
  {
    question: "What protocols does Zoiko iD support?",
    answer:
      "Zoiko iD supports modern identity standards including OIDC, OAuth 2.0, SAML 2.0, SCIM, SPIFFE/SPIRE for workload identities, as well as native REST APIs, webhooks, and SDKs for Python, Node, Go, and Java.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#f0f4f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center">
        {/* Mobile Section Heading with Question Mark Badge Icon */}
        <div className="mb-8 flex w-full items-center gap-3 sm:hidden">
          <QuestionMarkBadgeIcon className="size-8 shrink-0" />
          <h2 className="font-dm-serif text-[26px] font-normal leading-[1.15] text-azure-9">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Desktop Section Heading */}
        <h2 className="mb-12 hidden text-center font-dm-serif text-3xl font-normal tracking-tight text-azure-9 sm:block sm:text-4xl lg:mb-14 lg:text-[44px]">
          Frequently asked questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq, idx) => (
            <details
              key={faq.question}
              open={idx === 0}
              className="group rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 hover:border-slate-300 open:border-blue-400 sm:open:border-slate-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-manrope text-[13.5px] font-semibold leading-snug text-azure-9 sm:px-6 sm:py-4.5 sm:text-base sm:font-medium [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                {/* Mobile Chevron */}
                <span className="shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-180 sm:hidden">
                  <ChevronDownIcon className="size-4" />
                </span>
                {/* Desktop Plus Icon */}
                <span className="hidden shrink-0 text-cyan-49 transition-transform duration-200 group-open:rotate-45 sm:inline">
                  <PlusSmallIcon className="size-4" />
                </span>
              </summary>

              <p className="px-4 pb-4 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:px-6 sm:pb-5 sm:text-[13.5px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
