import { CardGrid, Section, SectionHeader, type CardItem } from "./shared";

const actors: CardItem[] = [
  {
    title: "People",
    description:
      "Authentication, credentials, consent, and role-based access management for human users.",
    image: "/home/people.webp",
  },
  {
    title: "Organizations",
    description:
      "Organization identity, representative authority, and federation for B2B relationships.",
    image: "/home/organizations.webp",
  },
  {
    title: "Services",
    description:
      "Service identities with short-lived credentials, least privilege, and automatic rotation.",
    image: "/home/services.webp",
  },
  {
    title: "Machines",
    description:
      "Device and IoT identity with policy-based controls, compliance checks, and revocation.",
    image: "/home/machines.webp",
  },
  {
    title: "AI Agents",
    description:
      "Explicit mandate, bounded permissions, audit trails, and governance for autonomous systems.",
    image: "/home/ai-agents.webp",
  },
  {
    title: "Contractors",
    description:
      "Third-party identity with time-limited access, purpose binding, and continuous verification.",
    image: "/home/contractors.webp",
  },
];

export default function ActorsSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="One model for all actors"
        subtitle="Unified identity, authority, and evidence across all actor types"
      />
      <CardGrid items={actors} />
    </Section>
  );
}
