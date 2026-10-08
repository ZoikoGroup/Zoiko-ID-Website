import {
  ApiIcon,
  BookOpenIcon,
  BracesIcon,
  CertificateIcon,
  GitHubIcon,
  WebhookIcon,
} from "./icons";
import { CardGrid, Section, SectionHeader, type CardItem } from "./shared";

const tools: CardItem[] = [
  {
    title: "REST APIs",
    description:
      "Comprehensive REST APIs for authorization decisions, policy management, and evidence queries.",
    icon: <ApiIcon size={28} />,
  },
  {
    title: "Language SDKs",
    description:
      "Official SDKs for Python, Node.js, Go, Java, Rust, and more for quick integration.",
    icon: <BracesIcon size={28} />,
  },
  {
    title: "Event Webhooks",
    description:
      "Real-time webhooks for policy changes, signals, authority updates, and revocations.",
    icon: <WebhookIcon size={28} />,
  },
  {
    title: "Standards Support",
    description:
      "OAuth 2.0, OIDC, SAML, WebAuthn/FIDO2, SCIM, and emerging signal standards.",
    icon: <CertificateIcon size={28} />,
  },
  {
    title: "Code Examples",
    description:
      "Ready-to-use code samples, integration templates, and reference implementations on GitHub.",
    icon: <GitHubIcon size={24} />,
  },
  {
    title: "Documentation",
    description:
      "Comprehensive docs, guides, tutorials, and interactive API playground for developers.",
    icon: <BookOpenIcon size={28} />,
  },
];

export default function DeveloperFirstSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Developer-first architecture"
        subtitle="APIs, SDKs, standards, and tools for seamless integration"
      />
      <CardGrid items={tools} />
    </Section>
  );
}
