import FaqAccordion, { type Faq } from "@/components/home/FaqAccordion";

// Answers were not in the design; they are draft copy based on this page's
// own wording and need review.
const faqs: Faq[] = [
  {
    question: "What's the difference between representation and authority?",
    answer:
      "Representation is who is allowed to speak for an organization, such as an officer, a domain admin or a delegate. Authority is what that representative is permitted to do: scoped, bounded permissions on specific resources for a set period.",
  },
  {
    question: "How are parent and subsidiary organizations handled?",
    answer:
      "They are modeled as separate legal entities in a hierarchy. Parent authority does not automatically become subsidiary authority; each entity has its own boundaries.",
  },
  {
    question: "Can authority be revoked?",
    answer:
      "Yes. Authority is time-bound and can be revoked immediately. The revocation is recorded and does not change the history of past actions.",
  },
  {
    question: "Does job title establish authority?",
    answer:
      "No. A job title, email domain or admin role never automatically establishes authority. Representation has to be explicit and bounded.",
  },
  {
    question: "How long is organization identity verified?",
    answer:
      'Every verification carries an "as-of" date. Verified attributes expire or can be revoked, so a verification never implies certainty beyond the time it was evaluated.',
  },
  {
    question: "Does this replace my IdP?",
    answer:
      "No. Organization identity is designed overlay-first: it extends your existing identity provider instead of replacing it.",
  },
];

export default function OrgFaqSection() {
  return <FaqAccordion faqs={faqs} />;
}
