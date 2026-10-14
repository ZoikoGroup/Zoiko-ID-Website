import {
  PlusSmallIcon,
  QuestionMarkCircleDarkIcon,
  FaqChevronIcon,
  FaqQuestionArrowIcon,
  FaqLockIcon,
  FaqRevokeIcon,
  FaqDatabaseIcon,
  FaqWarningShieldIcon,
} from "./icons";

const faqs = [
  {
    question: "Is verification the same as authentication?",
    mobileAnswer:
      "No. Verification proves a claim about identity or organization (e.g., 'this person is real' or 'this company exists'). Authentication proves the person acting right now is that person (e.g., with a password or passkey). Both are inputs to authorization.",
    answer:
      "No. Verification confirms claims (such as legal business registry, identity documents, or credentials), while authentication confirms who is currently signing in. Verification serves as a contextual input to authorization, not a substitute for active session authentication.",
    mobileIcon: FaqQuestionArrowIcon,
    defaultOpen: true,
  },
  {
    question: "Does verification automatically grant access?",
    answer:
      "No. Successful verification is evidence, not permission. An organization or designated reviewer must evaluate the evidence against access policies and explicitly approve or deny access.",
    mobileIcon: FaqLockIcon,
  },
  {
    question: "What countries/regions are supported?",
    answer:
      "Support varies by verification method. Business registries and government ID coverage depend on local jurisdictional registries, regulatory availability, and verified partner integrations. Capabilities marked 'Select Regions' require regional check.",
    mobileIcon: null,
  },
  {
    question: "Can we revoke access if verification fails later?",
    answer:
      "Yes. Access is continuously monitored. If a business license expires, an applicant leaves the organization, or credentials are invalidated, access can be revoked immediately, terminating active sessions and recording the event in the audit log.",
    mobileIcon: FaqRevokeIcon,
  },
  {
    question: "How long is verification data retained?",
    answer:
      "Verification data follows strict data minimization and retention policies. Document artifacts and sensitive data are automatically purged after the retention window unless explicitly required for compliance.",
    mobileIcon: FaqDatabaseIcon,
  },
  {
    question: "What if verification fails or is inconclusive?",
    answer:
      "Inconclusive or failed verifications enter a human review and remediation workflow. Applicants receive clear explanations (without exposing fraud detection heuristics) and can appeal, resubmit evidence, or use accessible alternative methods.",
    mobileIcon: FaqWarningShieldIcon,
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#f1f5f9] px-5 py-12 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center">
        {/* Section Heading */}
        <div className="mb-7 flex flex-col items-center text-center lg:mb-14">
          <QuestionMarkCircleDarkIcon className="mb-3 size-7 text-azure-9 lg:hidden" />
          <h2 className="font-dm-serif text-2xl font-normal tracking-tight text-azure-9 sm:text-4xl lg:text-[44px]">
            <span className="lg:hidden">
              Frequently asked
              <br />
              questions
            </span>
            <span className="hidden lg:inline">Frequently asked questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex w-full flex-col gap-3">
          {faqs.map((faq) => {
            const Icon = faq.mobileIcon;
            return (
              <details
                key={faq.question}
                open={faq.defaultOpen}
                className="group rounded-2xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-200 open:border-azure-48/40 hover:border-slate-300 lg:open:border-slate-200/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4.5 py-4 font-manrope text-[13.5px] font-bold leading-snug text-azure-9 sm:px-6 sm:py-5 sm:text-base sm:font-medium [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-2.5">
                    {Icon ? (
                      <Icon className="size-4 shrink-0 text-azure-9 lg:hidden" />
                    ) : null}
                    <span>{faq.question}</span>
                  </div>
                  {/* Desktop Chevron/Plus */}
                  <span className="hidden shrink-0 text-cyan-49 transition-transform duration-200 group-open:rotate-45 lg:block">
                    <PlusSmallIcon className="size-4" />
                  </span>
                  {/* Mobile Chevron */}
                  <span className="shrink-0 text-azure-48 transition-transform duration-200 group-open:rotate-180 lg:hidden">
                    <FaqChevronIcon className="size-4" />
                  </span>
                </summary>

                <p className="px-4.5 pb-4.5 font-manrope text-[11.5px] leading-relaxed text-azure-47 sm:px-6 sm:pb-6 sm:text-sm">
                  {faq.mobileAnswer ? (
                    <>
                      <span className="lg:hidden">{faq.mobileAnswer}</span>
                      <span className="hidden lg:inline">{faq.answer}</span>
                    </>
                  ) : (
                    faq.answer
                  )}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
