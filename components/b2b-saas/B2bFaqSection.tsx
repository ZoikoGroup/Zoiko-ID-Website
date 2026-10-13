import { PlusIcon } from "@/components/home/icons";

const faqs = [
  {
    question: "Does B2B identity replace our identity provider?",
    answer:
      "No. Zoiko iD does not replace your customer's identity provider. Existing enterprise IdPs (such as Okta, Azure AD, or Ping) remain the authoritative source for authentication, while Zoiko iD adds organization context, membership lifecycle management, and policy-driven authority.",
  },
  {
    question: "Is sign-in proof of permission?",
    answer:
      "No. Authentication establishes actor identity, but authorization evaluates what an actor is permitted to do within a specific organization context. Being an authenticated user or organization member does not automatically confer permissions to act on resources.",
  },
  {
    question: "How are tenants isolated?",
    answer:
      "Tenants maintain strict application data and administrative boundaries. Organization identities exist within tenant boundaries with scoped access, preventing cross-tenant leakage and ensuring data segregation.",
  },
  {
    question: "Can an organization revoke access?",
    answer:
      "Yes. Organization administrators can revoke membership, roles, or delegation mandates immediately. All active sessions associated with the revoked authority are terminated in real time and recorded in the audit log.",
  },
  {
    question: "Can agents act on behalf of organizations?",
    answer:
      "Yes. AI agents and non-human services can act on behalf of customer organizations through explicit, scoped mandates with strict purpose, resource, and time boundaries.",
  },
  {
    question: "How does this integrate with SCIM or SAML?",
    answer:
      "Zoiko iD integrates with standard enterprise protocols including SAML 2.0, OIDC, and SCIM for directory synchronization, enabling automated user provisioning, deprovisioning, and attribute synchronization from customer IdPs.",
  },
];

export default function B2bFaqSection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-20 sm:px-10 lg:px-20 lg:py-[105px]">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-12 lg:gap-[60px]">
        <h2 className="text-center font-dm-serif text-4xl font-normal leading-tight text-azure-9 sm:text-5xl lg:text-[52px] lg:leading-[59.8px]">
          Frequently asked questions
        </h2>

        <div className="flex w-full max-w-[700px] flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-mystic bg-white-solid shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-[26px] font-manrope text-base font-medium leading-6 text-azure-9 sm:px-8 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="shrink-0 text-cyan-49 transition-transform duration-200 group-open:rotate-45">
                  <PlusIcon size={18} />
                </span>
              </summary>

              <p className="px-6 pb-7 font-manrope text-sm font-normal leading-6 text-azure-47 sm:px-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
