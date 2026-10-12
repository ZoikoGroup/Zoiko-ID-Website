import FaqAccordion, { type Faq } from "@/components/home/FaqAccordion";

// Answers were not in the design; they are draft copy based on this page's
// own wording and need review.
const faqs: Faq[] = [
  {
    question: "Do we have to replace our existing identity provider?",
    answer:
      "No. Zoiko iD sits between your identity provider and your application as an optional overlay. You keep your existing IdP, such as Okta, Azure AD or Ping, and add Zoiko iD without a migration.",
  },
  {
    question: "Which authentication methods are supported?",
    answer:
      "Password with MFA, passkeys (WebAuthn/FIDO2), OAuth 2.0 and OpenID Connect, SAML 2.0, and X.509 certificates with mutual TLS. Custom and emerging flows such as device attestation are planned or under evaluation, so verify support for those first.",
  },
  {
    question: "How is MFA or step-up handled?",
    answer:
      "Policy can require a specific assurance level. A user can sign in at low assurance and be asked to step up, for example by re-authenticating with MFA, only when accessing a sensitive resource. Adaptive MFA adjusts the requirement to the risk of the context.",
  },
  {
    question: "What happens if authentication fails or is denied?",
    answer:
      "No session is established, so no identity context is passed to downstream applications or policy, and the attempt is recorded in the audit trail.",
  },
  {
    question: "How long are authentication logs retained?",
    answer:
      "Every login, session event, policy decision and revocation is logged with a timestamp and actor. Retention periods depend on your plan and configuration; talk to our team for the details that apply to you.",
  },
  {
    question: "Is authentication the same as authorization?",
    answer:
      "No. Authentication provides identity context: it proves who the actor is. Authorization is a separate step in which policy decides what that authenticated actor can do.",
  },
];

export default function AuthFaqSection() {
  return <FaqAccordion faqs={faqs} />;
}
