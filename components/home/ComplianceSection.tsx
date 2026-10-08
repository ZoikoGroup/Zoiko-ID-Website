import {
  CertificateIcon,
  CheckCircleIcon,
  DatabaseLockIcon,
  EyeOffIcon,
  FileCheckIcon,
  ShieldLockIcon,
} from "./icons";
import { CardGrid, Section, SectionHeader, type CardItem } from "./shared";

const certifications: CardItem[] = [
  {
    title: "SOC 2 Type II",
    description:
      "Independently audited security and compliance controls with annual certifications.",
    image: "/home/soc-2-type-ii.webp",
    icon: <CheckCircleIcon size={28} />,
  },
  {
    title: "GDPR & Privacy",
    description:
      "Data minimization, purpose limitation, and privacy-preserving identity models.",
    image: "/home/gdpr-privacy.webp",
    icon: <ShieldLockIcon size={28} />,
  },
  {
    title: "ISO 27001",
    description:
      "Information security management system certified and continuously monitored.",
    image: "/home/iso-27001.webp",
    icon: <CertificateIcon size={28} />,
  },
  {
    title: "HIPAA Ready",
    description:
      "Healthcare compliance with audit trails, encryption, and access controls.",
    image: "/home/hipaa-ready.webp",
    icon: <DatabaseLockIcon size={28} />,
  },
  {
    title: "Data Privacy",
    description:
      "Zero trust architecture with end-to-end encryption and data minimization.",
    image: "/home/data-privacy.webp",
    icon: <EyeOffIcon size={28} />,
  },
  {
    title: "Audit & Evidence",
    description:
      "Immutable audit logs with complete decision visibility and compliance reports.",
    image: "/home/audit-evidence.webp",
    icon: <FileCheckIcon size={28} />,
  },
];

export default function ComplianceSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Compliance & security"
        subtitle="Built for regulated industries and enterprise requirements"
      />
      <CardGrid items={certifications} />
    </Section>
  );
}
