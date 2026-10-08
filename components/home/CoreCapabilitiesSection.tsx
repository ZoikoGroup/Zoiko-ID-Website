import {
  ApiIcon,
  DatabaseCheckIcon,
  PolicyIcon,
  PulseIcon,
  UserKeyIcon,
  WebhookIcon,
} from "./icons";
import { CardGrid, Section, SectionHeader, type CardItem } from "./shared";

const capabilities: CardItem[] = [
  {
    title: "Policy Engine",
    description:
      "Define and enforce identity policies at scale with context-aware decision making and real-time enforcement.",
    icon: <PolicyIcon size={28} />,
  },
  {
    title: "Signal Evaluation",
    description:
      "Continuously monitor security signals and adjust access decisions based on risk profile and context.",
    icon: <PulseIcon size={28} />,
  },
  {
    title: "Immutable Evidence",
    description:
      "Create audit-ready evidence for every decision with versioned policies, timestamps, and decision context.",
    icon: <DatabaseCheckIcon size={28} />,
  },
  {
    title: "Credential Verification",
    description:
      "Verify identity claims and organizational credentials without repeated manual checks.",
    icon: <UserKeyIcon size={28} />,
  },
  {
    title: "Event Webhooks",
    description:
      "Real-time event streams for policy changes, signals, revocations, and access decisions.",
    icon: <WebhookIcon size={28} />,
  },
  {
    title: "REST APIs",
    description:
      "Comprehensive APIs for authorization, policy management, and evidence queries with SDKs.",
    icon: <ApiIcon size={28} />,
  },
];

export default function CoreCapabilitiesSection() {
  return (
    <Section background="grey">
      <SectionHeader
        title="Core capabilities"
        subtitle="Everything you need for identity governance"
      />
      <CardGrid items={capabilities} />
    </Section>
  );
}
