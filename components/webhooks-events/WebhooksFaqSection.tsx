import FaqAccordion, { type Faq } from "@/components/home/FaqAccordion";

const webhooksFaqs: Faq[] = [
  {
    question: "Do webhook notifications authorize access?",
    answer:
      "No. A notification only signals that an identity, credential, or authority state change has occurred. Receiving an event never replaces a current, authoritative policy check. Consumers must re-query the owning service before executing any consequential action.",
  },
  {
    question: "Can I replay missed events?",
    answer:
      "Replay and reconciliation capabilities depend on the published delivery contract for your environment. While event identifiers and timestamps allow local deduplication, historical catch-up queries are handled through approved query APIs.",
  },
  {
    question: "Are AI-agent and machine identity events supported?",
    answer:
      "Events for machine identities, workloads, and AI-agent delegation mandates are conceptual event families currently pending formal publication in the approved Event Registry.",
  },
  {
    question: "What happens if an event arrives more than once?",
    answer:
      "Consumers must be designed to be idempotent. You should record processed verified event identifiers so that duplicate deliveries do not trigger repeated actions or state mutations.",
  },
  {
    question: "Are payloads signed?",
    answer:
      "Yes. In the governed security model, webhook notifications require origin verification (such as HMAC signatures with pre-shared secrets or asymmetric signatures). Always verify the signature before parsing or acting upon the payload.",
  },
  {
    question: "How do I know which versions apply?",
    answer:
      "Event schemas, versions, and lifecycle status are maintained in the official Event Registry. Once a schema reaches 'Verified' status, its version and breaking change policy are formally documented.",
  },
];

export default function WebhooksFaqSection() {
  return (
    <FaqAccordion
      faqs={webhooksFaqs}
      title="Frequently asked questions"
      subtitle=""
    />
  );
}
