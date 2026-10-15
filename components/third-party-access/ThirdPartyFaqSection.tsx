const faqs = [
  {
    question: "Can we just use our SSO provider to grant external access?",
    answer:
      "SSO only establishes who an external actor is at login; it doesn't bound what resources they can touch, enforce time-limits, or continuously re-evaluate permissions when project scopes change. Zoiko iD provides the granular mandate, real-time scope enforcement, and instant revocation layer on top of any IdP.",
  },
  {
    question: "Can a third party request their own access?",
    answer:
      "Third parties can initiate an access request, but the mandate must be explicitly scoped, reviewed, and cryptographically signed off by an authorized internal delegator before any credentials or tokens are issued.",
  },
  {
    question: "What if the third party's organization is compromised?",
    answer:
      "Because access is strictly bounded by explicit scope, rate limits, and time windows, the blast radius is minimal. Furthermore, any anomaly or risk signal automatically suspends or revokes the mandate immediately across all systems.",
  },
  {
    question: "How does this work with our identity provider (Okta, Azure AD)?",
    answer:
      "Zoiko iD integrates directly with enterprise identity providers via standard protocols (OIDC, SAML, SCIM). External users authenticate through their federated credentials or verified credentials, while Zoiko iD evaluates mandates and enforces runtime authorization.",
  },
  {
    question: "Can a third party delegate their access to someone else?",
    answer:
      "By default, third-party mandates cannot be sub-delegated. If sub-delegation is explicitly required by contract, it must be pre-approved in the original mandate policy and bounded within strict hierarchical constraints.",
  },
];

export default function ThirdPartyFaqSection() {
  return (
    <section id="faq" className="bg-[#F1F5F9] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[105px] xl:px-48">
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center gap-12 sm:gap-14">
        {/* Section Heading */}
        <h2 className="text-center font-dm-serif text-3xl font-normal leading-tight text-azure-9 sm:text-4xl lg:text-[52px] lg:leading-[59.8px]">
          Frequently asked questions
        </h2>

        {/* FAQ Accordions List */}
        <div className="flex w-full flex-col gap-3.5 sm:gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[12px] border border-mystic bg-white-solid shadow-xs transition-colors open:bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-manrope text-base font-semibold leading-snug text-azure-9 sm:px-7 sm:py-6 sm:text-[16px] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center font-manrope text-2xl font-bold text-cyan-49 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-6 pt-1 font-manrope text-[14.5px] font-normal leading-relaxed text-azure-47 sm:px-7 sm:pb-7 sm:text-[15px]">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
