import FaqAccordion, { type Faq } from "@/components/home/FaqAccordion";

// Answers were not in the design; they are draft copy based on this page's
// own wording and need review.
const faqs: Faq[] = [
  {
    question: "Do we have to replace our identity provider?",
    answer:
      "No. Zoiko iD is non-destructive: you keep your existing IdP. Zoiko iD receives authentication signals, adds context and authority checks, and returns decisions. No migration is required.",
  },
  {
    question: "What APIs does Zoiko iD expose?",
    answer:
      "Integration paths cover identity and federation, authorization and delegation, credentials and verification, machine and agent identity, and events and signals. Availability depends on the approved product release and integration profile, so evaluate each path against the currently supported contracts.",
  },
  {
    question: "How do I integrate with Zoiko iD?",
    answer:
      "Start with a quickstart, then use the API reference, the SDKs and the sandbox, which provides sample data with no production risk.",
  },
  {
    question: "Can we issue and verify credentials?",
    answer:
      "Yes. Organizations and IdPs can issue signed credentials, holders can present them with selective disclosure, and verifiers can check signature, issuer trust, expiry and revocation status. Credentials inform access decisions but don't grant access alone.",
  },
  {
    question: "How do we authenticate machines and AI agents?",
    answer:
      "Through the machine and agent identity path, which authenticates services, workloads and AI agents with bounded permissions.",
  },
  {
    question: "Where is the webhook documentation?",
    answer:
      "Webhooks are documented in the API reference. Events are delivered as an HTTP POST to your endpoint with a signed event payload.",
  },
];

export default function ApiFaqSection() {
  // Empty subtitle: this page's design shows the heading only
  return <FaqAccordion faqs={faqs} subtitle="" />;
}
