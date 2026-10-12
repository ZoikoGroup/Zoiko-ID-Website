import {
  AlertOctagonIcon,
  BuildingIcon,
  EyeOffIcon,
  HistoryIcon,
  KeyIcon,
  LockIcon,
} from "@/components/home/icons";
import {
  IconRowCardGrid,
  Section,
  SectionHeader,
  type IconRowItem,
} from "@/components/home/shared";

const controls: IconRowItem[] = [
  {
    title: "End-to-End Encryption",
    description:
      "All API calls use TLS 1.3. Sensitive data encrypted at rest.",
    icon: <LockIcon size={28} />,
  },
  {
    title: "API Key Management",
    description:
      "Rotate keys, enforce scopes, revoke immediately if compromised.",
    icon: <KeyIcon size={28} />,
  },
  {
    title: "Tenant Isolation",
    description: "Complete data isolation. No cross-tenant data leakage.",
    icon: <BuildingIcon size={28} />,
  },
  {
    title: "Complete Audit Logs",
    description:
      "Every API call, decision, and change is logged with timestamp and actor.",
    icon: <HistoryIcon size={28} />,
  },
  {
    title: "Privacy Controls",
    description:
      "Minimize data collection. Subject rights (access, correct, delete) supported.",
    icon: <EyeOffIcon size={28} />,
  },
  {
    title: "Anomaly Detection",
    description:
      "ML-based detection of suspicious API usage and unauthorized attempts.",
    icon: <AlertOctagonIcon size={28} />,
  },
];

export default function SecurityPrivacySection() {
  return (
    <Section>
      <SectionHeader title="Security & privacy by design" />
      <IconRowCardGrid items={controls} />
    </Section>
  );
}
