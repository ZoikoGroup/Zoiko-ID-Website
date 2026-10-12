import {
  AlertOctagonIcon,
  CheckCircleIcon,
  DatabaseLockIcon,
  HistoryIcon,
  LockIcon,
  ShieldPersonIcon,
} from "@/components/home/icons";
import {
  IconRowCardGrid,
  Section,
  SectionHeader,
  type IconRowItem,
} from "@/components/home/shared";

const safeguards: IconRowItem[] = [
  {
    title: "End-to-End Encryption",
    description:
      "Authentication tokens, session IDs, and sensitive data encrypted in transit (TLS 1.3) and at rest.",
    icon: <LockIcon size={28} />,
  },
  {
    title: "CSRF & XSS Protection",
    description:
      "Built-in protections against cross-site request forgery and script injection attacks.",
    icon: <ShieldPersonIcon size={28} />,
  },
  {
    title: "Complete Audit Trail",
    description:
      "Every login, session event, policy decision, and revocation is logged with timestamp and actor.",
    icon: <HistoryIcon size={28} />,
  },
  {
    title: "High Availability",
    description:
      "Distributed architecture, automatic failover, geo-redundancy. 99.99% uptime SLA.",
    icon: <CheckCircleIcon size={28} />,
  },
  {
    title: "Tenant Isolation",
    description:
      "Multi-tenant architecture with complete data isolation, no cross-tenant leakage.",
    icon: <DatabaseLockIcon size={28} />,
  },
  {
    title: "Anomaly Detection",
    description:
      "Machine learning-based detection of suspicious login patterns and credential abuse.",
    icon: <AlertOctagonIcon size={28} />,
  },
];

export default function SecurityResilienceSection() {
  return (
    <Section>
      <SectionHeader title="Security & resilience" />
      <IconRowCardGrid items={safeguards} />
    </Section>
  );
}
