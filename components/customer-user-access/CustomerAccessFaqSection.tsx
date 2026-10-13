import FaqAccordion, { type Faq } from "@/components/home/FaqAccordion";

const faqs: Faq[] = [
  {
    question: "Why is sign-in not the same as authorization?",
    answer:
      "Sign-in establishes who an actor is through verified authentication, while authorization evaluates whether that authenticated actor is permitted to perform a specific action on a specific resource under current organization context, policies, and mandates.",
  },
  {
    question: "How do you handle multi-tenant access?",
    answer:
      "Zoiko iD treats organizational boundaries as explicit contexts. Users can belong to multiple customer organizations, but permissions and data scopes are evaluated strictly per active organization session without cross-tenant leakage.",
  },
  {
    question: "What is delegated access?",
    answer:
      "Delegated access allows third-party partners, agents, or automated systems to act on behalf of a principal customer under an explicit, scoped mandate with bounded authority, revocable at any time.",
  },
  {
    question: "Can access change during a session?",
    answer:
      "Yes. With continuous trust evaluation, changes in risk signals, policy updates, organization membership, or mandate revocations can trigger step-up authentication, reduced privileges, or immediate denial without terminating the recognizable session.",
  },
  {
    question: "How does revocation work?",
    answer:
      "Revocation is immediate and propagated across decision points. When an organization admin, user, or automated trigger revokes a role or delegation mandate, subsequent access checks reflect the updated state in real time.",
  },
  {
    question: "What evidence is available for audit?",
    answer:
      "Every access decision produces an immutable audit record containing actor identity, requested action and resource, active organization context, applied policy version, mandate status, risk signals, timestamp, and the final outcome with explainable rationale.",
  },
];

export default function CustomerAccessFaqSection() {
  return <FaqAccordion faqs={faqs} subtitle="" />;
}
